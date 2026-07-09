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

	s := New(Config{ClaudeDir: claudeDir, CodexDir: filepath.Join(t.TempDir(), "codex")})
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

	s := New(Config{ClaudeDir: claudeDir, CodexDir: filepath.Join(t.TempDir(), "codex"), OpenSession: session})
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

func TestServerLoadsCodexSessions(t *testing.T) {
	claudeDir := t.TempDir()
	codexDir := t.TempDir()
	root := t.TempDir()
	if err := os.WriteFile(filepath.Join(root, "README.md"), []byte("# Demo\n"), 0o644); err != nil {
		t.Fatal(err)
	}
	session := filepath.Join(codexDir, "codex.jsonl")
	writeServerJSONL(t, session,
		map[string]any{
			"timestamp": "2026-07-09T00:00:00Z",
			"type":      "session_meta",
			"payload": map[string]any{
				"id":  "codex-server",
				"cwd": filepath.ToSlash(root),
			},
		},
		map[string]any{
			"timestamp": "2026-07-09T00:00:01Z",
			"type":      "response_item",
			"payload": map[string]any{
				"type":      "function_call",
				"id":        "fc",
				"name":      "exec_command",
				"arguments": `{"cmd":"sed -n '1,20p' README.md","workdir":` + quoteJSON(root) + `}`,
				"call_id":   "call",
			},
		},
		map[string]any{
			"timestamp": "2026-07-09T00:00:02Z",
			"type":      "response_item",
			"payload": map[string]any{
				"type":    "function_call_output",
				"call_id": "call",
				"output":  "Chunk ID: x\nProcess exited with code 0\nOutput:\n# Demo\n",
			},
		},
	)

	s := New(Config{ClaudeDir: claudeDir, CodexDir: codexDir})
	sessionsResp := httptest.NewRecorder()
	s.handleSessions(sessionsResp, httptest.NewRequest(http.MethodGet, "/api/sessions", nil))
	if sessionsResp.Code != http.StatusOK {
		t.Fatalf("sessions status = %d body=%s", sessionsResp.Code, sessionsResp.Body.String())
	}
	var sessions []model.SessionMeta
	if err := json.Unmarshal(sessionsResp.Body.Bytes(), &sessions); err != nil {
		t.Fatal(err)
	}
	if len(sessions) != 1 || sessions[0].ID != "codex-server" || sessions[0].Harness != "codex" {
		t.Fatalf("sessions = %#v", sessions)
	}

	traceResp := httptest.NewRecorder()
	s.handleSessionResource(traceResp, httptest.NewRequest(http.MethodGet, "/api/sessions/codex-server/trace", nil))
	if traceResp.Code != http.StatusOK {
		t.Fatalf("trace status = %d body=%s", traceResp.Code, traceResp.Body.String())
	}
	var trace model.Trace
	if err := json.Unmarshal(traceResp.Body.Bytes(), &trace); err != nil {
		t.Fatal(err)
	}
	if trace.Session.Harness != "codex" || len(trace.Events) != 1 || trace.Events[0].Targets[0].Path != "README.md" {
		t.Fatalf("trace = %#v", trace)
	}
}

func TestServerSkipsClaudeSubagentSessions(t *testing.T) {
	claudeDir := t.TempDir()
	session := filepath.Join(claudeDir, "main.jsonl")
	subagent := filepath.Join(claudeDir, "subagents", "agent-child.jsonl")
	if err := os.MkdirAll(filepath.Dir(subagent), 0o755); err != nil {
		t.Fatal(err)
	}
	writeServerSession(t, session,
		`{"type":"user","timestamp":"2026-07-09T00:00:00Z","sessionId":"main","cwd":"/tmp","message":{"role":"user","content":"hello"}}`,
	)
	writeServerSession(t, subagent,
		`{"type":"user","timestamp":"2026-07-09T00:00:01Z","sessionId":"subagent","cwd":"/tmp","message":{"role":"user","content":"internal"}}`,
	)

	s := New(Config{ClaudeDir: claudeDir, CodexDir: filepath.Join(t.TempDir(), "codex")})
	sessions, err := s.scanSessions()
	if err != nil {
		t.Fatal(err)
	}
	if len(sessions) != 1 || sessions[0].ID != "main" {
		t.Fatalf("sessions = %#v", sessions)
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

func writeServerJSONL(t *testing.T, path string, values ...any) {
	t.Helper()
	content := ""
	for _, value := range values {
		b, err := json.Marshal(value)
		if err != nil {
			t.Fatal(err)
		}
		content += string(b) + "\n"
	}
	if err := os.WriteFile(path, []byte(content), 0o644); err != nil {
		t.Fatal(err)
	}
}
