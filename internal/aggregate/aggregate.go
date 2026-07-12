// Package aggregate merges several single-session traces into one project-wide
// trace whose events are ordered chronologically and tagged by their source
// session. It sits between the source adapters (which produce one trace per
// session) and the server/citymap/playback layers, and knows nothing about
// rendering: sources are distinguished by a stable integer index, and the web
// client chooses the colors.
package aggregate

import (
	"math"
	"sort"
	"time"

	"github.com/cosmtrek/mindwalk/internal/model"
)

// Input pairs a session's listing metadata with its parsed trace.
type Input struct {
	Meta  model.SessionMeta
	Trace *model.Trace
}

// Merge composes the given sessions into a single chronological trace.
//
// Sources are ordered by session start time (then key), so a source's index —
// and therefore the color the client assigns it — is stable across runs. Events
// are ordered by wall-clock timestamp; because an event's ts is optional, each
// session's last seen timestamp is carried forward across untimed events so they
// keep their place beside their timed neighbours instead of collapsing to the
// epoch. Ties break deterministically on (source index, original sequence).
//
// The merged trace owns fresh Event and Target values with their FileID cleared,
// so a caller may assign file IDs against a project citymap or recompute stats
// without mutating the input traces (which are typically shared cache entries).
// Stats is left zero for the caller to compute once the project citymap exists.
func Merge(inputs []Input) *model.Trace {
	ordered := make([]Input, 0, len(inputs))
	for _, in := range inputs {
		if in.Trace != nil {
			ordered = append(ordered, in)
		}
	}
	sort.SliceStable(ordered, func(i, j int) bool {
		si, oki := parseTS(startOf(ordered[i]))
		sj, okj := parseTS(startOf(ordered[j]))
		if oki && okj && !si.Equal(sj) {
			return si.Before(sj)
		}
		if oki != okj {
			return oki // sessions with a known start sort first
		}
		return ordered[i].Meta.Key < ordered[j].Meta.Key
	})

	sources := make([]model.TraceSource, len(ordered))

	type record struct {
		sortKey int64
		src     int
		origSeq int
		event   model.Event
	}
	var records []record
	for idx, in := range ordered {
		sources[idx] = model.TraceSource{
			Key:        in.Meta.Key,
			ID:         in.Meta.ID,
			Title:      in.Meta.Title,
			Harness:    in.Meta.Harness,
			StartedAt:  startOf(in),
			EndedAt:    endOf(in),
			EventCount: len(in.Trace.Events),
		}
		lastTS := ""
		for ei, ev := range in.Trace.Events {
			eff := ev.Timestamp
			if eff == "" {
				eff = lastTS
			} else {
				lastTS = eff
			}
			if eff == "" {
				eff = sources[idx].StartedAt
			}
			key := int64(math.MinInt64)
			if t, ok := parseTS(eff); ok {
				key = t.UnixNano()
			}
			records = append(records, record{sortKey: key, src: idx, origSeq: ei, event: copyEvent(ev)})
		}
	}

	sort.SliceStable(records, func(i, j int) bool {
		a, b := records[i], records[j]
		if a.sortKey != b.sortKey {
			return a.sortKey < b.sortKey
		}
		if a.src != b.src {
			return a.src < b.src
		}
		return a.origSeq < b.origSeq
	})

	merged := make([]model.Event, len(records))
	// remap[src][origEventIndex] = new dense seq, used to relocate marks
	remap := make([]map[int]int, len(ordered))
	for i := range remap {
		remap[i] = map[int]int{}
	}
	for newSeq, r := range records {
		ev := r.event
		ev.Seq = newSeq
		ev.Source = r.src
		merged[newSeq] = ev
		remap[r.src][r.origSeq] = newSeq
	}

	// A source's mark seq anchors to the event it precedes (adapters set it to
	// the count of events emitted so far); relocate it to that event's new seq.
	// A mark that trails all of its session's events anchors just after that
	// session's last event in the merged order — not at the global end, which
	// would jump it past every later session's activity.
	var marks []model.Mark
	for idx, in := range ordered {
		for _, m := range in.Trace.Marks {
			newSeq := len(merged)
			if ns, ok := remap[idx][m.Seq]; ok {
				newSeq = ns
			} else if n := len(in.Trace.Events); n > 0 {
				newSeq = remap[idx][n-1] + 1
			}
			marks = append(marks, model.Mark{Seq: newSeq, Type: m.Type, Note: m.Note})
		}
	}
	sort.SliceStable(marks, func(i, j int) bool { return marks[i].Seq < marks[j].Seq })

	return &model.Trace{
		Version: 1,
		Session: model.TraceSession{
			Harness:    mergedHarness(sources),
			StartedAt:  earliest(sources),
			EndedAt:    latest(sources),
			EventCount: len(merged),
		},
		Sources: sources,
		Events:  merged,
		Marks:   marks,
	}
}

// copyEvent returns an independent copy of an event: the Targets slice and its
// elements are duplicated and their FileID cleared, so assigning project file
// IDs to the merged trace never writes through to the shared session trace.
func copyEvent(ev model.Event) model.Event {
	out := ev
	if ev.Targets != nil {
		out.Targets = make([]model.Target, len(ev.Targets))
		copy(out.Targets, ev.Targets)
		for i := range out.Targets {
			out.Targets[i].FileID = nil
		}
	}
	if ev.Outside != nil {
		out.Outside = make([]model.OutsideTouch, len(ev.Outside))
		copy(out.Outside, ev.Outside)
	}
	return out
}

func startOf(in Input) string {
	if in.Meta.StartedAt != "" {
		return in.Meta.StartedAt
	}
	if in.Trace != nil {
		return in.Trace.Session.StartedAt
	}
	return ""
}

func endOf(in Input) string {
	if in.Meta.EndedAt != "" {
		return in.Meta.EndedAt
	}
	if in.Trace != nil {
		return in.Trace.Session.EndedAt
	}
	return ""
}

func mergedHarness(sources []model.TraceSource) string {
	seen := ""
	for _, s := range sources {
		if s.Harness == "" {
			continue
		}
		if seen == "" {
			seen = s.Harness
		} else if seen != s.Harness {
			return "mixed"
		}
	}
	return seen
}

// earliest and latest pick the extreme session bounds by parsed time, keeping
// the original string so the label survives mixed timezones.
func earliest(sources []model.TraceSource) string {
	best, bestT := "", time.Time{}
	for _, s := range sources {
		t, ok := parseTS(s.StartedAt)
		if !ok {
			continue
		}
		if best == "" || t.Before(bestT) {
			best, bestT = s.StartedAt, t
		}
	}
	return best
}

func latest(sources []model.TraceSource) string {
	best, bestT := "", time.Time{}
	for _, s := range sources {
		t, ok := parseTS(s.EndedAt)
		if !ok {
			continue
		}
		if best == "" || t.After(bestT) {
			best, bestT = s.EndedAt, t
		}
	}
	return best
}

func parseTS(s string) (time.Time, bool) {
	if s == "" {
		return time.Time{}, false
	}
	if t, err := time.Parse(time.RFC3339Nano, s); err == nil {
		return t, true
	}
	if t, err := time.Parse(time.RFC3339, s); err == nil {
		return t, true
	}
	return time.Time{}, false
}
