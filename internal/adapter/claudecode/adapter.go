package claudecode

import (
	"bufio"
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"regexp"
	"sort"
	"strings"

	"github.com/cosmtrek/mindwalk/internal/model"
)

type Adapter struct {
	Dir string
}

func DefaultDir() string {
	home, err := os.UserHomeDir()
	if err != nil {
		return ""
	}
	return filepath.Join(home, ".claude", "projects")
}

func (a Adapter) ListSessions() ([]model.SessionMeta, error) {
	dir := a.Dir
	if dir == "" {
		dir = DefaultDir()
	}
	var metas []model.SessionMeta
	err := filepath.WalkDir(dir, func(path string, entry os.DirEntry, walkErr error) error {
		if walkErr != nil {
			return nil
		}
		if entry.IsDir() {
			return nil
		}
		if filepath.Ext(path) != ".jsonl" || strings.HasPrefix(filepath.Base(path), "agent-") {
			return nil
		}
		meta, err := a.Summarize(path)
		if err == nil {
			metas = append(metas, meta)
		}
		return nil
	})
	if err != nil {
		return nil, err
	}
	sort.Slice(metas, func(i, j int) bool {
		return metas[i].EndedAt > metas[j].EndedAt
	})
	return metas, nil
}

func (a Adapter) Summarize(path string) (model.SessionMeta, error) {
	f, err := os.Open(path)
	if err != nil {
		return model.SessionMeta{}, err
	}
	defer f.Close()

	id := strings.TrimSuffix(filepath.Base(path), filepath.Ext(path))
	meta := model.SessionMeta{ID: id, Harness: "claude-code", Path: path}
	err = readJSONLines(f, func(data []byte) {
		var line rawLine
		if json.Unmarshal(data, &line) != nil {
			return
		}
		if line.SessionID != "" {
			meta.ID = line.SessionID
		}
		if line.Timestamp != "" {
			if meta.StartedAt == "" {
				meta.StartedAt = line.Timestamp
			}
			meta.EndedAt = line.Timestamp
		}
		if line.Type == "ai-title" && line.AITitle != "" {
			meta.Title = line.AITitle
		}
		if line.Cwd != "" && meta.Cwd == "" {
			meta.Cwd = line.Cwd
		}
		if line.GitBranch != "" && meta.GitBranch == "" {
			meta.GitBranch = line.GitBranch
		}
		if len(line.Message) > 0 {
			var msg message
			if json.Unmarshal(line.Message, &msg) == nil {
				if msg.Model != "" && meta.Model == "" {
					meta.Model = msg.Model
				}
				meta.EventCount += countToolUses(msg.Content)
			}
		}
	})
	if meta.Title == "" {
		meta.Title = filepath.Base(path)
	}
	return meta, err
}

func (a Adapter) Parse(path string) (*model.Trace, error) {
	f, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer f.Close()

	id := strings.TrimSuffix(filepath.Base(path), filepath.Ext(path))
	trace := &model.Trace{
		Version: 1,
		Session: model.TraceSession{
			ID:      id,
			Harness: "claude-code",
			Path:    path,
		},
		Events: []model.Event{},
		Marks:  []model.Mark{},
	}

	pending := map[string]toolCall{}
	pendingOrder := []string{}
	err = readJSONLines(f, func(data []byte) {
		var line rawLine
		if json.Unmarshal(data, &line) != nil {
			return
		}
		applyLineMeta(trace, line)
		if line.Type == "ai-title" && line.AITitle != "" {
			trace.Session.Title = line.AITitle
			return
		}
		if isCompaction(line) {
			trace.Marks = append(trace.Marks, model.Mark{Seq: len(trace.Events), Type: "compaction"})
		}
		if len(line.Message) == 0 {
			return
		}

		var msg message
		if json.Unmarshal(line.Message, &msg) != nil {
			return
		}
		if line.Type == "user" && hasUserMessage(msg.Content) {
			trace.Marks = append(trace.Marks, model.Mark{Seq: len(trace.Events), Type: "user-message"})
		}
		if msg.Model != "" && trace.Session.Model == "" {
			trace.Session.Model = msg.Model
		}
		for _, item := range msg.Content.Items {
			switch item.Type {
			case "tool_use":
				call := toolCall{
					ID:        item.ID,
					Name:      item.Name,
					Input:     item.Input,
					Timestamp: line.Timestamp,
				}
				if call.Name == "Task" || call.Name == "Agent" {
					trace.Marks = append(trace.Marks, model.Mark{Seq: len(trace.Events), Type: "subagent", Note: call.Name})
				}
				if _, exists := pending[call.ID]; !exists {
					pendingOrder = append(pendingOrder, call.ID)
				}
				pending[call.ID] = call
			case "tool_result":
				call, ok := pending[item.ToolUseID]
				if !ok {
					continue
				}
				delete(pending, item.ToolUseID)
				event := buildEvent(trace, call, item)
				trace.Events = append(trace.Events, event)
			}
		}
	})
	for _, id := range pendingOrder {
		if call, ok := pending[id]; ok {
			trace.Events = append(trace.Events, buildEvent(trace, call, contentItem{}))
		}
	}
	sort.Slice(trace.Events, func(i, j int) bool {
		return trace.Events[i].Seq < trace.Events[j].Seq
	})
	for i := range trace.Events {
		trace.Events[i].Seq = i
	}
	trace.Session.EventCount = len(trace.Events)
	trace.Stats = model.ComputeStats(trace, 0)
	return trace, err
}

func readJSONLines(r io.Reader, visit func([]byte)) error {
	reader := bufio.NewReaderSize(r, 64*1024)
	for {
		line, err := reader.ReadBytes('\n')
		if len(line) > 0 {
			line = bytes.TrimRight(line, "\r\n")
			if len(line) > 0 {
				visit(line)
			}
		}
		if err != nil {
			if err == io.EOF {
				return nil
			}
			return err
		}
	}
}

type rawLine struct {
	Type      string          `json:"type"`
	Timestamp string          `json:"timestamp"`
	SessionID string          `json:"sessionId"`
	Cwd       string          `json:"cwd"`
	GitBranch string          `json:"gitBranch"`
	Message   json.RawMessage `json:"message"`
	AITitle   string          `json:"aiTitle"`
	Content   string          `json:"content"`
	Subtype   string          `json:"subtype"`
}

type message struct {
	Role    string      `json:"role"`
	Model   string      `json:"model"`
	Content contentList `json:"content"`
}

type contentList struct {
	Items []contentItem
}

func (c *contentList) UnmarshalJSON(data []byte) error {
	if len(data) == 0 || string(data) == "null" {
		return nil
	}
	if data[0] == '"' {
		var s string
		if err := json.Unmarshal(data, &s); err != nil {
			return err
		}
		c.Items = []contentItem{{Type: "text", Text: s}}
		return nil
	}
	var items []contentItem
	if err := json.Unmarshal(data, &items); err != nil {
		return err
	}
	c.Items = items
	return nil
}

type contentItem struct {
	Type      string         `json:"type"`
	ID        string         `json:"id"`
	Name      string         `json:"name"`
	Input     map[string]any `json:"input"`
	ToolUseID string         `json:"tool_use_id"`
	Content   any            `json:"content"`
	IsError   bool           `json:"is_error"`
	Text      string         `json:"text"`
}

type toolCall struct {
	ID        string
	Name      string
	Input     map[string]any
	Timestamp string
}

func countToolUses(content contentList) int {
	count := 0
	for _, item := range content.Items {
		if item.Type == "tool_use" {
			count++
		}
	}
	return count
}

func hasUserMessage(content contentList) bool {
	if len(content.Items) == 0 {
		return false
	}
	for _, item := range content.Items {
		if item.Type == "tool_result" {
			return false
		}
		if item.Type == "text" && strings.TrimSpace(item.Text) != "" {
			return true
		}
	}
	return true
}

func applyLineMeta(trace *model.Trace, line rawLine) {
	if line.SessionID != "" {
		trace.Session.ID = line.SessionID
	}
	if line.Cwd != "" && trace.Session.Cwd == "" {
		trace.Session.Cwd = line.Cwd
	}
	if line.Timestamp != "" {
		if trace.Session.StartedAt == "" {
			trace.Session.StartedAt = line.Timestamp
		}
		trace.Session.EndedAt = line.Timestamp
	}
}

func isCompaction(line rawLine) bool {
	return line.Type == "system" && strings.Contains(strings.ToLower(line.Subtype), "compact")
}

func buildEvent(trace *model.Trace, call toolCall, result contentItem) model.Event {
	resultText := contentToString(result.Content)
	action := actionFor(call.Name, call.Input, resultText)
	targets, outside := targetsFor(trace.Session.Cwd, call.Name, call.Input, resultText)
	if targets == nil {
		targets = []model.Target{}
	}
	return model.Event{
		Seq:         len(trace.Events),
		Timestamp:   call.Timestamp,
		Tool:        call.Name,
		Action:      action,
		Targets:     targets,
		Outside:     outside,
		ResultBytes: len(resultText),
		IsError:     result.IsError,
		Summary:     summarize(call.Name, call.Input, targets, outside, result.IsError),
	}
}

func contentToString(v any) string {
	switch x := v.(type) {
	case nil:
		return ""
	case string:
		return x
	case []any:
		parts := make([]string, 0, len(x))
		for _, item := range x {
			if m, ok := item.(map[string]any); ok {
				if text, ok := m["text"].(string); ok {
					parts = append(parts, text)
				}
				if text, ok := m["content"].(string); ok {
					parts = append(parts, text)
				}
			}
		}
		return strings.Join(parts, "\n")
	default:
		b, _ := json.Marshal(v)
		return string(b)
	}
}

func actionFor(tool string, input map[string]any, result string) string {
	switch tool {
	case "Read":
		return "read"
	case "Write", "Edit", "MultiEdit", "NotebookEdit":
		return "edit"
	case "Grep", "Glob", "LS":
		return "search"
	case "Bash":
		command, _ := input["command"].(string)
		if verifyCommand(command) {
			return "verify"
		}
		return "exec"
	default:
		_ = result
		return "other"
	}
}

func targetsFor(cwd, tool string, input map[string]any, result string) ([]model.Target, []model.OutsideTouch) {
	var targets []model.Target
	var outside []model.OutsideTouch
	add := func(path, touch string, weak bool, lines [][2]int) {
		rel, out, ok := normalizePath(cwd, path)
		if !ok {
			return
		}
		if out != nil {
			outside = append(outside, *out)
			return
		}
		if weak && !repoPathExists(cwd, rel) {
			return
		}
		for i := range targets {
			if targets[i].Path == rel {
				if model.RankTouch(touch) > model.RankTouch(targets[i].Touch) {
					targets[i].Touch = touch
				}
				targets[i].Lines = append(targets[i].Lines, lines...)
				return
			}
		}
		targets = append(targets, model.Target{Path: rel, Touch: touch, Lines: lines, Weak: weak})
	}

	switch tool {
	case "Read":
		if path, ok := input["file_path"].(string); ok {
			add(path, "read", false, readLines(input))
		}
	case "Write", "Edit", "MultiEdit", "NotebookEdit":
		if path, ok := input["file_path"].(string); ok {
			add(path, "edit", false, nil)
		}
		if path, ok := input["notebook_path"].(string); ok {
			add(path, "edit", false, nil)
		}
	case "Grep":
		for _, hit := range parsePathHits(result) {
			add(hit.path, "hit", false, hit.lines)
		}
		if len(targets) == 0 {
			if path, ok := input["path"].(string); ok {
				add(path, "hit", true, nil)
			}
		}
	case "Glob", "LS":
		for _, hit := range parsePathHits(result) {
			add(hit.path, "hit", false, nil)
		}
		if path, ok := input["path"].(string); ok && len(targets) == 0 {
			add(path, "hit", true, nil)
		}
	case "Bash":
		command, _ := input["command"].(string)
		for _, path := range extractPaths(command + "\n" + result) {
			add(path, "hit", true, nil)
		}
	}
	return targets, outside
}

func repoPathExists(cwd, rel string) bool {
	if cwd == "" || rel == "" {
		return false
	}
	abs := filepath.Join(cwd, filepath.FromSlash(rel))
	_, err := os.Stat(abs)
	return err == nil
}

func readLines(input map[string]any) [][2]int {
	offset := intFromAny(input["offset"])
	limit := intFromAny(input["limit"])
	if offset <= 0 {
		return nil
	}
	if limit <= 0 {
		return [][2]int{{offset, offset}}
	}
	return [][2]int{{offset, offset + limit - 1}}
}

func intFromAny(v any) int {
	switch x := v.(type) {
	case float64:
		return int(x)
	case int:
		return x
	default:
		return 0
	}
}

func normalizePath(cwd, path string) (string, *model.OutsideTouch, bool) {
	path = strings.TrimSpace(strings.Trim(path, `"'`))
	if path == "" || strings.Contains(path, "\n") {
		return "", nil, false
	}
	if strings.HasPrefix(path, "http://") || strings.HasPrefix(path, "https://") {
		return "", nil, false
	}
	if !filepath.IsAbs(path) {
		clean := filepath.ToSlash(filepath.Clean(path))
		if clean == "." || strings.HasPrefix(clean, "..") {
			return "", nil, false
		}
		return clean, nil, true
	}
	abs := filepath.Clean(path)
	if cwd != "" {
		root := filepath.Clean(cwd)
		if rel, err := filepath.Rel(root, abs); err == nil && !strings.HasPrefix(rel, "..") && rel != "." {
			return filepath.ToSlash(rel), nil, true
		}
	}
	return "", &model.OutsideTouch{Scope: outsideScope(abs), Path: abs}, true
}

func outsideScope(path string) string {
	home, _ := os.UserHomeDir()
	if home != "" {
		if rel, err := filepath.Rel(home, path); err == nil && !strings.HasPrefix(rel, "..") {
			return "home"
		}
	}
	if strings.HasPrefix(path, os.TempDir()) || strings.HasPrefix(path, "/tmp") {
		return "tmp"
	}
	return "other"
}

type pathHit struct {
	path  string
	lines [][2]int
}

var pathLineRe = regexp.MustCompile(`(?:^|[\s"'([])([A-Za-z0-9_./@+-]*[/][A-Za-z0-9_./@+-]*\.[A-Za-z0-9][A-Za-z0-9._-]*):([0-9]+)`)
var pathOnlyRe = regexp.MustCompile(`(?:^|[\s"'([])([./~A-Za-z0-9_@+-]*[/][A-Za-z0-9_./~@+-]*\.[A-Za-z0-9][A-Za-z0-9._-]*)(?:$|[\s"',)\]:;])`)

func parsePathHits(text string) []pathHit {
	byPath := map[string][][2]int{}
	for _, m := range pathLineRe.FindAllStringSubmatch(text, -1) {
		line := 0
		fmt.Sscanf(m[2], "%d", &line)
		if line > 0 {
			if path, ok := cleanExtractedPath(m[1]); ok {
				byPath[path] = append(byPath[path], [2]int{line, line})
			}
		}
	}
	for _, p := range extractPaths(text) {
		if _, ok := byPath[p]; !ok {
			byPath[p] = nil
		}
	}
	out := make([]pathHit, 0, len(byPath))
	for path, lines := range byPath {
		out = append(out, pathHit{path: path, lines: lines})
	}
	sort.Slice(out, func(i, j int) bool { return out[i].path < out[j].path })
	return out
}

func extractPaths(text string) []string {
	matches := pathOnlyRe.FindAllStringSubmatch(text, -1)
	seen := map[string]bool{}
	paths := make([]string, 0, len(matches))
	for _, m := range matches {
		path, ok := cleanExtractedPath(m[1])
		if !ok {
			continue
		}
		if path == "" || seen[path] || strings.Contains(path, "://") {
			continue
		}
		seen[path] = true
		paths = append(paths, path)
	}
	sort.Strings(paths)
	return paths
}

func cleanExtractedPath(path string) (string, bool) {
	path = strings.TrimSpace(strings.Trim(path, `"' ,;:()[]{}`))
	path = strings.TrimPrefix(path, "a/")
	path = strings.TrimPrefix(path, "b/")
	path = strings.TrimPrefix(path, "./")
	if path == "" || strings.Contains(path, "://") || strings.ContainsAny(path, "\n\r\t") {
		return "", false
	}
	if strings.HasPrefix(path, "--") || strings.HasPrefix(path, "++") {
		return "", false
	}
	if !strings.Contains(path, "/") {
		return "", false
	}
	return path, true
}

func verifyCommand(command string) bool {
	c := strings.ToLower(command)
	patterns := []string{"go test", "go vet", "npm test", "npm run build", "pnpm test", "pnpm build", "pytest", "make test", "cargo test", "swift test"}
	for _, pattern := range patterns {
		if strings.Contains(c, pattern) {
			return true
		}
	}
	return false
}

func summarize(tool string, input map[string]any, targets []model.Target, outside []model.OutsideTouch, isError bool) string {
	verb := tool
	if desc, ok := input["description"].(string); ok && desc != "" {
		verb = desc
	}
	if command, ok := input["command"].(string); ok && command != "" {
		verb = command
		if len(verb) > 96 {
			verb = verb[:93] + "..."
		}
	}
	status := ""
	if isError {
		status = " error"
	}
	return fmt.Sprintf("%s -> %d targets, %d outside%s", verb, len(targets), len(outside), status)
}
