package server

import (
	"embed"
	"encoding/json"
	"errors"
	"fmt"
	"io/fs"
	"mime"
	"net"
	"net/http"
	"net/url"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"sort"
	"strings"
	"sync"
	"time"

	"github.com/cosmtrek/mindwalk/internal/adapter"
	"github.com/cosmtrek/mindwalk/internal/adapter/claudecode"
	"github.com/cosmtrek/mindwalk/internal/adapter/codex"
	"github.com/cosmtrek/mindwalk/internal/citymap"
	"github.com/cosmtrek/mindwalk/internal/model"
)

//go:embed static
var embeddedStatic embed.FS

type Config struct {
	Port        int
	ClaudeDir   string
	CodexDir    string
	OpenSession string
	Dev         bool
	RepoRoot    string
}

type Server struct {
	cfg       Config
	adapters  []adapter.Source
	mu        sync.Mutex
	sessions  []model.SessionMeta
	sessionAt time.Time
	traces    map[string]*model.Trace
	maps      map[string]*model.CityMap
	cacheAt   map[string]time.Time
	cacheUsed map[string]time.Time
	inflight  map[string]*inflightLoad
	summaries map[string]summaryCacheEntry
}

type inflightLoad struct {
	done  chan struct{}
	trace *model.Trace
	city  *model.CityMap
	err   error
}

type summaryCacheEntry struct {
	size    int64
	modTime time.Time
	meta    model.SessionMeta
}

const (
	sessionListTTL       = 5 * time.Second
	traceCacheTTL        = 10 * time.Minute
	traceCacheMaxEntries = 16
)

func New(cfg Config) *Server {
	return &Server{
		cfg:       cfg,
		adapters:  []adapter.Source{claudecode.Adapter{Dir: cfg.ClaudeDir}, codex.Adapter{Dir: cfg.CodexDir}},
		traces:    map[string]*model.Trace{},
		maps:      map[string]*model.CityMap{},
		cacheAt:   map[string]time.Time{},
		cacheUsed: map[string]time.Time{},
		inflight:  map[string]*inflightLoad{},
		summaries: map[string]summaryCacheEntry{},
	}
}

func (s *Server) Start(openBrowser bool) error {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/sessions", s.handleSessions)
	mux.HandleFunc("/api/sessions/", s.handleSessionResource)
	mux.HandleFunc("/", s.handleStatic)

	port := s.cfg.Port
	if port == 0 {
		port = 0
	}
	ln, err := net.Listen("tcp", fmt.Sprintf("127.0.0.1:%d", port))
	if err != nil {
		return err
	}
	addr := "http://" + ln.Addr().String()
	if openBrowser {
		pageURL := addr
		if s.cfg.OpenSession != "" {
			pageURL += "/?session=" + url.QueryEscape(s.openSessionID())
		}
		_ = openURL(pageURL)
	}
	fmt.Printf("mindwalk serving %s\n", addr)
	return http.Serve(ln, mux)
}

func (s *Server) handleSessions(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	sessions, err := s.listSessions()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	writeJSON(w, sessions)
}

func (s *Server) handleSessionResource(w http.ResponseWriter, r *http.Request) {
	parts := strings.Split(strings.TrimPrefix(r.URL.Path, "/api/sessions/"), "/")
	if len(parts) != 2 {
		http.NotFound(w, r)
		return
	}
	id, resource := parts[0], parts[1]
	switch resource {
	case "trace":
		trace, _, err := s.traceAndMap(id)
		if err != nil {
			http.Error(w, err.Error(), http.StatusNotFound)
			return
		}
		writeJSON(w, trace)
	case "citymap":
		_, city, err := s.traceAndMap(id)
		if err != nil {
			http.Error(w, err.Error(), http.StatusNotFound)
			return
		}
		writeJSON(w, city)
	default:
		http.NotFound(w, r)
	}
}

func (s *Server) listSessions() ([]model.SessionMeta, error) {
	s.mu.Lock()
	if s.sessions != nil && time.Since(s.sessionAt) < sessionListTTL {
		sessions := append([]model.SessionMeta(nil), s.sessions...)
		s.mu.Unlock()
		return sessions, nil
	}
	s.mu.Unlock()

	sessions, err := s.scanSessions()
	if err != nil {
		return nil, err
	}
	if s.cfg.OpenSession != "" {
		meta, err := s.summarizeAnyCached(s.cfg.OpenSession, nil)
		if err == nil {
			found := false
			for i := range sessions {
				if sessions[i].ID == meta.ID {
					sessions[i] = meta
					found = true
					break
				}
			}
			if !found {
				sessions = append([]model.SessionMeta{meta}, sessions...)
			}
		}
	}
	sort.SliceStable(sessions, func(i, j int) bool {
		return sessions[i].EndedAt > sessions[j].EndedAt
	})
	s.mu.Lock()
	s.sessions = sessions
	s.sessionAt = time.Now()
	s.mu.Unlock()
	return sessions, nil
}

func (s *Server) scanSessions() ([]model.SessionMeta, error) {
	seen := map[string]bool{}
	var sessions []model.SessionMeta
	for _, source := range s.adapters {
		dir := source.SessionDir()
		if dir == "" {
			continue
		}
		if info, err := os.Stat(dir); err != nil || !info.IsDir() {
			continue
		}
		err := filepath.WalkDir(dir, func(path string, entry os.DirEntry, walkErr error) error {
			if walkErr != nil {
				return nil
			}
			if entry.IsDir() {
				return nil
			}
			if filepath.Ext(path) != ".jsonl" || skipSessionFile(source, path) {
				return nil
			}
			info, err := entry.Info()
			if err != nil {
				return nil
			}
			key := summaryKey(source, path)
			seen[key] = true
			meta, err := s.summarizeCached(source, path, info)
			if err == nil {
				sessions = append(sessions, meta)
			}
			return nil
		})
		if err != nil {
			return nil, err
		}
	}
	s.pruneSummaryCache(seen)
	return sessions, nil
}

func (s *Server) summarizeAnyCached(path string, info fs.FileInfo) (model.SessionMeta, error) {
	var lastErr error
	for _, source := range s.adapters {
		meta, err := s.summarizeCached(source, path, info)
		if err == nil {
			return meta, nil
		}
		lastErr = err
	}
	if lastErr != nil {
		return model.SessionMeta{}, lastErr
	}
	return model.SessionMeta{}, errors.New("no session adapters configured")
}

func (s *Server) summarizeCached(source adapter.Source, path string, info fs.FileInfo) (model.SessionMeta, error) {
	if info == nil {
		var err error
		info, err = os.Stat(path)
		if err != nil {
			return model.SessionMeta{}, err
		}
	}
	key := summaryKey(source, path)
	s.mu.Lock()
	if cached, ok := s.summaries[key]; ok && cached.size == info.Size() && cached.modTime.Equal(info.ModTime()) {
		meta := cached.meta
		s.mu.Unlock()
		return meta, nil
	}
	s.mu.Unlock()

	meta, err := source.Summarize(path)
	if err != nil {
		return model.SessionMeta{}, err
	}
	s.mu.Lock()
	s.summaries[key] = summaryCacheEntry{size: info.Size(), modTime: info.ModTime(), meta: meta}
	s.mu.Unlock()
	return meta, nil
}

func (s *Server) pruneSummaryCache(seen map[string]bool) {
	s.mu.Lock()
	defer s.mu.Unlock()
	for key := range s.summaries {
		if !seen[key] && summaryPath(key) != s.cfg.OpenSession {
			delete(s.summaries, key)
		}
	}
}

func (s *Server) traceAndMap(id string) (*model.Trace, *model.CityMap, error) {
	s.mu.Lock()
	if trace := s.traces[id]; trace != nil {
		if time.Since(s.cacheAt[id]) < traceCacheTTL {
			city := s.maps[id]
			s.cacheUsed[id] = time.Now()
			s.mu.Unlock()
			return trace, city, nil
		}
		s.deleteTraceCacheLocked(id)
	}
	if load := s.inflight[id]; load != nil {
		done := load.done
		s.mu.Unlock()
		<-done
		return load.trace, load.city, load.err
	}
	load := &inflightLoad{done: make(chan struct{})}
	s.inflight[id] = load
	s.mu.Unlock()

	trace, city, err := s.loadTraceAndMap(id)

	s.mu.Lock()
	if err == nil {
		s.traces[id] = trace
		s.maps[id] = city
		now := time.Now()
		s.cacheAt[id] = now
		s.cacheUsed[id] = now
		s.evictTraceCacheLocked()
	}
	load.trace = trace
	load.city = city
	load.err = err
	delete(s.inflight, id)
	close(load.done)
	s.mu.Unlock()

	return trace, city, err
}

func (s *Server) loadTraceAndMap(id string) (*model.Trace, *model.CityMap, error) {
	meta, err := s.findSession(id)
	if err != nil {
		return nil, nil, err
	}
	source := s.adapterForHarness(meta.Harness)
	if source == nil {
		return nil, nil, fmt.Errorf("no adapter for harness %q", meta.Harness)
	}
	trace, parseErr := source.Parse(meta.Path)
	if trace == nil {
		if parseErr != nil {
			return nil, nil, parseErr
		}
		return nil, nil, errors.New("trace unavailable")
	}
	repoRoot := trace.Session.Cwd
	if repoRoot == "" {
		repoRoot = meta.Cwd
	}
	if repoRoot == "" {
		repoRoot = s.cfg.RepoRoot
	}
	if repoRoot == "" {
		repoRoot = filepath.Dir(meta.Path)
	}
	city, err := citymap.Builder{}.Build(repoRoot, trace)
	if err != nil {
		city = emptyCityMap(repoRoot)
	} else {
		assignFileIDs(trace, city)
	}
	trace.Stats = model.ComputeStats(trace, repoFileCount(city))
	return trace, city, nil
}

func emptyCityMap(repoRoot string) *model.CityMap {
	root, err := filepath.Abs(repoRoot)
	if err != nil {
		root = repoRoot
	}
	return &model.CityMap{
		Version: 1,
		Repo: model.RepoMeta{
			Root:        root,
			Dirty:       false,
			GeneratedAt: time.Now().UTC().Format(time.RFC3339),
		},
		Files: []model.CityFile{},
		Dirs:  []model.CityDir{},
		Layout: model.LayoutMeta{
			Algorithm: "unavailable",
			Weight:    "none",
		},
	}
}

func repoFileCount(city *model.CityMap) int {
	count := 0
	for _, file := range city.Files {
		if !file.Ghost {
			count++
		}
	}
	return count
}

func (s *Server) findSession(id string) (model.SessionMeta, error) {
	sessions, err := s.listSessions()
	if err != nil {
		return model.SessionMeta{}, err
	}
	for _, session := range sessions {
		if session.ID == id || strings.TrimSuffix(filepath.Base(session.Path), filepath.Ext(session.Path)) == id {
			return session, nil
		}
	}
	return model.SessionMeta{}, errors.New("session not found")
}

func (s *Server) deleteTraceCacheLocked(id string) {
	delete(s.traces, id)
	delete(s.maps, id)
	delete(s.cacheAt, id)
	delete(s.cacheUsed, id)
}

func (s *Server) evictTraceCacheLocked() {
	for len(s.traces) > traceCacheMaxEntries {
		var oldestID string
		var oldest time.Time
		for id := range s.traces {
			used := s.cacheUsed[id]
			if oldestID == "" || used.Before(oldest) {
				oldestID = id
				oldest = used
			}
		}
		if oldestID == "" {
			return
		}
		s.deleteTraceCacheLocked(oldestID)
	}
}

func (s *Server) openSessionID() string {
	id := strings.TrimSuffix(filepath.Base(s.cfg.OpenSession), filepath.Ext(s.cfg.OpenSession))
	if meta, err := s.summarizeAnyCached(s.cfg.OpenSession, nil); err == nil && meta.ID != "" {
		id = meta.ID
	}
	return id
}

func (s *Server) adapterForHarness(harness string) adapter.Source {
	for _, source := range s.adapters {
		if source.Harness() == harness {
			return source
		}
	}
	return nil
}

func summaryKey(source adapter.Source, path string) string {
	return source.Harness() + "\x00" + path
}

func summaryPath(key string) string {
	if idx := strings.IndexByte(key, 0); idx >= 0 {
		return key[idx+1:]
	}
	return key
}

func skipSessionFile(source adapter.Source, path string) bool {
	return source.Harness() == "claude-code" && strings.HasPrefix(filepath.Base(path), "agent-")
}

func assignFileIDs(trace *model.Trace, city *model.CityMap) {
	ids := map[string]int{}
	for _, file := range city.Files {
		ids[file.Path] = file.ID
	}
	for ei := range trace.Events {
		for ti := range trace.Events[ei].Targets {
			if id, ok := ids[trace.Events[ei].Targets[ti].Path]; ok {
				v := id
				trace.Events[ei].Targets[ti].FileID = &v
			}
		}
	}
}

func (s *Server) handleStatic(w http.ResponseWriter, r *http.Request) {
	if strings.HasPrefix(r.URL.Path, "/api/") {
		http.NotFound(w, r)
		return
	}
	if s.cfg.Dev && s.serveDist(w, r) {
		return
	}
	static, _ := fs.Sub(embeddedStatic, "static")
	http.FileServer(http.FS(static)).ServeHTTP(w, r)
}

func (s *Server) serveDist(w http.ResponseWriter, r *http.Request) bool {
	candidates := []string{
		filepath.Join("web", "dist"),
		filepath.Join("..", "web", "dist"),
	}
	for _, root := range candidates {
		if info, err := os.Stat(root); err != nil || !info.IsDir() {
			continue
		}
		path := strings.TrimPrefix(r.URL.Path, "/")
		if path == "" {
			path = "index.html"
		}
		full := filepath.Join(root, filepath.Clean(path))
		if !strings.HasPrefix(full, filepath.Clean(root)) {
			http.Error(w, "bad path", http.StatusBadRequest)
			return true
		}
		if info, err := os.Stat(full); err != nil || info.IsDir() {
			full = filepath.Join(root, "index.html")
		}
		if ext := filepath.Ext(full); ext != "" {
			if typ := mime.TypeByExtension(ext); typ != "" {
				w.Header().Set("Content-Type", typ)
			}
		}
		http.ServeFile(w, r, full)
		return true
	}
	return false
}

func writeJSON(w http.ResponseWriter, v any) {
	w.Header().Set("Content-Type", "application/json")
	enc := json.NewEncoder(w)
	enc.SetIndent("", "  ")
	_ = enc.Encode(v)
}

func openURL(url string) error {
	switch runtime.GOOS {
	case "darwin":
		return exec.Command("open", url).Start()
	case "windows":
		return exec.Command("rundll32", "url.dll,FileProtocolHandler", url).Start()
	default:
		return exec.Command("xdg-open", url).Start()
	}
}
