package codex

import (
	"encoding/json"
	"math"
	"os"
	"path/filepath"
	"testing"
)

func TestParseCodexSession(t *testing.T) {
	root := t.TempDir()
	if err := os.WriteFile(filepath.Join(root, "README.md"), []byte("# Demo\n"), 0o644); err != nil {
		t.Fatal(err)
	}
	dir := t.TempDir()
	session := filepath.Join(dir, "rollout-2026-07-09T00-00-00-codex-demo.jsonl")
	index := filepath.Join(dir, "session_index.jsonl")
	writeJSONL(t, index, map[string]any{
		"id":          "codex-demo",
		"thread_name": "Codex demo trace",
		"updated_at":  "2026-07-09T00:00:09Z",
	})
	writeJSONL(t, session,
		map[string]any{
			"timestamp": "2026-07-09T00:00:00Z",
			"type":      "session_meta",
			"payload": map[string]any{
				"id":         "codex-demo",
				"session_id": "codex-demo",
				"timestamp":  "2026-07-09T00:00:00Z",
				"cwd":        filepath.ToSlash(root),
				"git": map[string]any{
					"branch":      "main",
					"commit_hash": "abc123",
				},
			},
		},
		map[string]any{
			"timestamp": "2026-07-09T00:00:01Z",
			"type":      "turn_context",
			"payload": map[string]any{
				"cwd":   filepath.ToSlash(root),
				"model": "gpt-5.5",
			},
		},
		map[string]any{
			"timestamp": "2026-07-09T00:00:02Z",
			"type":      "response_item",
			"payload": map[string]any{
				"type":    "message",
				"role":    "user",
				"content": []any{map[string]any{"type": "input_text", "text": "inspect"}},
			},
		},
		call("2026-07-09T00:00:03Z", "fc-read", "call-read", "exec_command", map[string]any{
			"cmd":     "sed -n '1,40p' README.md",
			"workdir": filepath.ToSlash(root),
		}),
		output("2026-07-09T00:00:04Z", "call-read", "Chunk ID: read\nProcess exited with code 0\nOutput:\n# Demo\n"),
		callRaw("2026-07-09T00:00:05Z", "fc-edit", "call-edit", "apply_patch", "*** Begin Patch\n*** Update File: README.md\n@@\n-# Demo\n+# Demo updated\n*** End Patch\n"),
		output("2026-07-09T00:00:06Z", "call-edit", "Success. Updated the following files:\nM README.md\n"),
		call("2026-07-09T00:00:07Z", "fc-test", "call-test", "exec_command", map[string]any{
			"cmd":     "go test ./...",
			"workdir": filepath.ToSlash(root),
		}),
		output("2026-07-09T00:00:08Z", "call-test", "Chunk ID: test\nProcess exited with code 1\nOutput:\nFAIL ./...\n"),
	)

	adapter := Adapter{Dir: dir, IndexPath: index}
	meta, err := adapter.Summarize(session)
	if err != nil {
		t.Fatal(err)
	}
	if meta.ID != "codex-demo" || meta.Harness != "codex" || meta.Title != "Codex demo trace" {
		t.Fatalf("meta = %#v", meta)
	}
	if meta.Model != "gpt-5.5" || meta.GitBranch != "main" || meta.EventCount != 3 {
		t.Fatalf("meta = %#v", meta)
	}

	trace, err := adapter.Parse(session)
	if err != nil {
		t.Fatal(err)
	}
	if trace.Session.ID != "codex-demo" || trace.Session.Harness != "codex" || trace.Session.Commit != "abc123" {
		t.Fatalf("session = %#v", trace.Session)
	}
	if trace.Session.Title != "Codex demo trace" || trace.Session.Model != "gpt-5.5" {
		t.Fatalf("session = %#v", trace.Session)
	}
	if len(trace.Marks) != 1 || trace.Marks[0].Type != "user-message" {
		t.Fatalf("marks = %#v", trace.Marks)
	}
	if len(trace.Events) != 3 {
		t.Fatalf("events = %d", len(trace.Events))
	}
	if got := trace.Events[0]; got.Tool != "exec_command" || got.Action != "exec" || len(got.Targets) != 1 || got.Targets[0].Path != "README.md" {
		t.Fatalf("read event = %#v", got)
	}
	if got := trace.Events[1]; got.Tool != "apply_patch" || got.Action != "edit" || got.Targets[0].Touch != "edit" {
		t.Fatalf("edit event = %#v", got)
	}
	if got := trace.Events[2]; got.Action != "verify" || !got.IsError {
		t.Fatalf("verify event = %#v", got)
	}
	if trace.Stats.Edited != 1 || trace.Stats.EventsBeforeFirstEdit != 1 || math.Abs(trace.Stats.ErrorRate-1.0/3.0) > 0.0001 {
		t.Fatalf("stats = %#v", trace.Stats)
	}
}

func TestListSessionsSkipsNonCodexJSONL(t *testing.T) {
	dir := t.TempDir()
	writeJSONL(t, filepath.Join(dir, "not-codex.jsonl"), map[string]any{
		"type": "assistant",
		"message": map[string]any{
			"role":    "assistant",
			"content": "hello",
		},
	})
	writeJSONL(t, filepath.Join(dir, "codex.jsonl"), map[string]any{
		"timestamp": "2026-07-09T00:00:00Z",
		"type":      "session_meta",
		"payload": map[string]any{
			"id":  "codex-list",
			"cwd": "/tmp",
		},
	})

	sessions, err := (Adapter{Dir: dir}).ListSessions()
	if err != nil {
		t.Fatal(err)
	}
	if len(sessions) != 1 || sessions[0].ID != "codex-list" {
		t.Fatalf("sessions = %#v", sessions)
	}
}

func call(ts, id, callID, name string, args map[string]any) map[string]any {
	b, _ := json.Marshal(args)
	return callRaw(ts, id, callID, name, string(b))
}

func callRaw(ts, id, callID, name, args string) map[string]any {
	return map[string]any{
		"timestamp": ts,
		"type":      "response_item",
		"payload": map[string]any{
			"type":      "function_call",
			"id":        id,
			"name":      name,
			"arguments": args,
			"call_id":   callID,
		},
	}
}

func output(ts, callID, text string) map[string]any {
	return map[string]any{
		"timestamp": ts,
		"type":      "response_item",
		"payload": map[string]any{
			"type":    "function_call_output",
			"call_id": callID,
			"output":  text,
		},
	}
}

func writeJSONL(t *testing.T, path string, values ...any) {
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
