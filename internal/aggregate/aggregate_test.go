package aggregate

import (
	"encoding/json"
	"testing"

	"github.com/cosmtrek/mindwalk/internal/model"
)

func session(key, id, harness, started string, events []model.Event, marks []model.Mark) Input {
	return Input{
		Meta:  model.SessionMeta{Key: key, ID: id, Harness: harness, StartedAt: started, EndedAt: started},
		Trace: &model.Trace{Version: 1, Events: events, Marks: marks},
	}
}

func ev(ts, tool string, targets ...model.Target) model.Event {
	return model.Event{Timestamp: ts, Tool: tool, Action: "read", Targets: targets}
}

func tools(trace *model.Trace) []string {
	out := make([]string, len(trace.Events))
	for i, e := range trace.Events {
		out[i] = e.Tool
	}
	return out
}

func TestMergeInterleavesByTimestamp(t *testing.T) {
	a := session("a", "sa", "claude-code", "2026-01-01T00:00:00Z", []model.Event{
		ev("2026-01-01T00:00:01Z", "A1"),
		ev("2026-01-01T00:00:03Z", "A3"),
	}, nil)
	b := session("b", "sb", "codex", "2026-01-01T00:00:00.5Z", []model.Event{
		ev("2026-01-01T00:00:02Z", "B2"),
		ev("2026-01-01T00:00:04Z", "B4"),
	}, nil)

	merged := Merge([]Input{b, a}) // input order should not matter

	if got, want := tools(merged), []string{"A1", "B2", "A3", "B4"}; !equal(got, want) {
		t.Fatalf("merged order = %v, want %v", got, want)
	}
	// sources ordered by start time: a (00:00:00) before b (00:00:00.5)
	if len(merged.Sources) != 2 || merged.Sources[0].Key != "a" || merged.Sources[1].Key != "b" {
		t.Fatalf("sources = %#v", merged.Sources)
	}
	wantSrc := []int{0, 1, 0, 1}
	for i, e := range merged.Events {
		if e.Seq != i {
			t.Fatalf("event %d has seq %d", i, e.Seq)
		}
		if e.Source != wantSrc[i] {
			t.Fatalf("event %d (%s) source = %d, want %d", i, e.Tool, e.Source, wantSrc[i])
		}
	}
	if merged.Session.Harness != "mixed" {
		t.Fatalf("harness = %q, want mixed", merged.Session.Harness)
	}
	if merged.Session.StartedAt != "2026-01-01T00:00:00Z" || merged.Session.EndedAt != "2026-01-01T00:00:00.5Z" {
		t.Fatalf("session bounds = %q..%q", merged.Session.StartedAt, merged.Session.EndedAt)
	}
}

func TestMergeCarriesForwardMissingTimestamps(t *testing.T) {
	a := session("a", "sa", "claude-code", "2026-01-01T00:00:00Z", []model.Event{
		ev("2026-01-01T00:00:01Z", "A1"),
		ev("", "Amid"), // untimed: must stay pinned right after A1
		ev("2026-01-01T00:00:05Z", "A5"),
	}, nil)
	b := session("b", "sb", "claude-code", "2026-01-01T00:00:00Z", []model.Event{
		ev("2026-01-01T00:00:02Z", "B2"),
	}, nil)

	merged := Merge([]Input{a, b})
	if got, want := tools(merged), []string{"A1", "Amid", "B2", "A5"}; !equal(got, want) {
		t.Fatalf("merged order = %v, want %v (untimed event must carry A1's clock)", got, want)
	}
}

func TestMergeRelocatesMarks(t *testing.T) {
	// session A runs entirely before session B, so A's trailing mark must anchor
	// after A's own last event — not at the global end past all of B's activity.
	a := session("a", "sa", "claude-code", "2026-01-01T00:00:00Z", []model.Event{
		ev("2026-01-01T00:00:01Z", "A1"),
		ev("2026-01-01T00:00:02Z", "A2"),
	}, []model.Mark{
		{Seq: 1, Type: "user-message"}, // precedes A2
		{Seq: 2, Type: "compaction"},   // trails every A event
	})
	b := session("b", "sb", "claude-code", "2026-01-01T00:00:03Z", []model.Event{
		ev("2026-01-01T00:00:03Z", "B1"),
		ev("2026-01-01T00:00:04Z", "B2"),
	}, nil)

	merged := Merge([]Input{a, b})
	// merged order: A1(0), A2(1), B1(2), B2(3)
	var user, compaction int = -1, -1
	for _, m := range merged.Marks {
		switch m.Type {
		case "user-message":
			user = m.Seq
		case "compaction":
			compaction = m.Seq
		}
	}
	if user != 1 {
		t.Fatalf("user-message mark seq = %d, want 1 (the merged position of A2)", user)
	}
	// just after A2 (seq 1), i.e. 2 — NOT len(merged)=4 past B's events
	if compaction != 2 {
		t.Fatalf("trailing mark seq = %d, want 2 (just after A's last event, before B)", compaction)
	}
}

func TestMergeDoesNotMutateInputTraces(t *testing.T) {
	id := 7
	src := model.Event{Timestamp: "2026-01-01T00:00:01Z", Tool: "A1", Action: "edit",
		Targets: []model.Target{{Path: "src/main.go", Touch: "edit", FileID: &id}}}
	a := Input{
		Meta:  model.SessionMeta{Key: "a", Harness: "claude-code", StartedAt: "2026-01-01T00:00:00Z"},
		Trace: &model.Trace{Version: 1, Events: []model.Event{src}},
	}

	merged := Merge([]Input{a})
	// simulate the server assigning project file IDs, then mutating targets
	pid := 99
	merged.Events[0].Targets[0].FileID = &pid
	merged.Events[0].Targets[0].Path = "mutated"

	orig := a.Trace.Events[0].Targets[0]
	if orig.Path != "src/main.go" {
		t.Fatalf("input target path mutated to %q", orig.Path)
	}
	if orig.FileID == nil || *orig.FileID != 7 {
		t.Fatalf("input target FileID changed: %v", orig.FileID)
	}
}

func TestMergeIsDeterministic(t *testing.T) {
	a := session("a", "sa", "claude-code", "2026-01-01T00:00:00Z", []model.Event{
		ev("2026-01-01T00:00:01Z", "A1"), ev("2026-01-01T00:00:03Z", "A3"),
	}, []model.Mark{{Seq: 1, Type: "user-message"}})
	b := session("b", "sb", "codex", "2026-01-01T00:00:00.5Z", []model.Event{
		ev("2026-01-01T00:00:02Z", "B2"), ev("2026-01-01T00:00:04Z", "B4"),
	}, nil)

	first, _ := json.Marshal(Merge([]Input{a, b}))
	second, _ := json.Marshal(Merge([]Input{b, a}))
	if string(first) != string(second) {
		t.Fatalf("merge not deterministic across input order\nfirst=%s\nsecond=%s", first, second)
	}
}

func TestMergeSkipsNilTraces(t *testing.T) {
	a := session("a", "sa", "claude-code", "2026-01-01T00:00:00Z", []model.Event{ev("2026-01-01T00:00:01Z", "A1")}, nil)
	nilInput := Input{Meta: model.SessionMeta{Key: "z", Harness: "codex"}}

	merged := Merge([]Input{a, nilInput})
	if len(merged.Sources) != 1 || merged.Sources[0].Key != "a" {
		t.Fatalf("nil-trace input should be dropped: %#v", merged.Sources)
	}
	if len(merged.Events) != 1 {
		t.Fatalf("events = %d, want 1", len(merged.Events))
	}
}

func equal(a, b []string) bool {
	if len(a) != len(b) {
		return false
	}
	for i := range a {
		if a[i] != b[i] {
			return false
		}
	}
	return true
}
