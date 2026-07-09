package server

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"strconv"
	"testing"

	"github.com/cosmtrek/mindwalk/internal/model"
)

func TestTraceStillLoadsWhenSessionCwdIsMissing(t *testing.T) {
	claudeDir := t.TempDir()
	missingRoot := filepath.Join(t.TempDir(), "deleted-repo")
	session := filepath.Join(claudeDir, "missingcwd.jsonl")
	writeServerSession(t, session,
		`{"type":"user","timestamp":"2026-07-09T00:00:00Z","sessionId":"missingcwd","cwd":`+quoteJSON(missingRoot)+`,"message":{"role":"user","content":"hello"}}`,
		`{"type":"assistant","timestamp":"2026-07-09T00:00:01Z","sessionId":"missingcwd","cwd":`+quoteJSON(missingRoot)+`,"message":{"role":"assistant","content":[{"type":"tool_use","id":"r1","name":"Read","input":{"file_path":`+quoteJSON(filepath.Join(missingRoot, "a.go"))+`}}]}}`,
		`{"type":"user","timestamp":"2026-07-09T00:00:02Z","sessionId":"missingcwd","cwd":`+quoteJSON(missingRoot)+`,"message":{"role":"user","content":[{"type":"tool_result","tool_use_id":"r1","content":"ok","is_error":false}]}}`,
	)

	s := New(Config{ClaudeDir: claudeDir})
	traceResp := httptest.NewRecorder()
	s.handleSessionResource(traceResp, httptest.NewRequest(http.MethodGet, "/api/sessions/missingcwd/trace", nil))
	if traceResp.Code != http.StatusOK {
		t.Fatalf("trace status = %d body=%s", traceResp.Code, traceResp.Body.String())
	}
	var trace model.Trace
	if err := json.Unmarshal(traceResp.Body.Bytes(), &trace); err != nil {
		t.Fatal(err)
	}
	if len(trace.Events) != 1 || trace.Stats.FilesInRepo != 0 {
		t.Fatalf("trace = %#v", trace)
	}

	cityResp := httptest.NewRecorder()
	s.handleSessionResource(cityResp, httptest.NewRequest(http.MethodGet, "/api/sessions/missingcwd/citymap", nil))
	if cityResp.Code != http.StatusOK {
		t.Fatalf("citymap status = %d body=%s", cityResp.Code, cityResp.Body.String())
	}
	var city model.CityMap
	if err := json.Unmarshal(cityResp.Body.Bytes(), &city); err != nil {
		t.Fatal(err)
	}
	if len(city.Files) != 0 || city.Repo.Root == "" || city.Layout.Algorithm != "unavailable" {
		t.Fatalf("city = %#v", city)
	}
}

func TestOpenSessionIDUsesInternalSessionIDAndFindSessionAcceptsBasename(t *testing.T) {
	claudeDir := t.TempDir()
	session := filepath.Join(claudeDir, "renamed.jsonl")
	writeServerSession(t, session,
		`{"type":"user","timestamp":"2026-07-09T00:00:00Z","sessionId":"internal-id","cwd":"/tmp","message":{"role":"user","content":"hello"}}`,
	)

	s := New(Config{ClaudeDir: claudeDir, OpenSession: session})
	if got := s.openSessionID(); got != "internal-id" {
		t.Fatalf("openSessionID = %q", got)
	}
	meta, err := s.findSession("renamed")
	if err != nil {
		t.Fatal(err)
	}
	if meta.ID != "internal-id" {
		t.Fatalf("meta = %#v", meta)
	}
}

func writeServerSession(t *testing.T, path string, lines ...string) {
	t.Helper()
	content := ""
	for _, line := range lines {
		content += line + "\n"
	}
	if err := os.WriteFile(path, []byte(content), 0o644); err != nil {
		t.Fatal(err)
	}
}

func quoteJSON(path string) string {
	return strconv.Quote(filepath.ToSlash(path))
}
