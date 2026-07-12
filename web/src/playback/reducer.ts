import type { CityMap, Target, Touch, Trace, TraceEvent } from "../types";

export const touchRank: Record<Touch, number> = {
  hit: 1,
  read: 2,
  edit: 3
};

/** a recent fixation carrying the session that produced it, so the walker can
 * be colored per source in a merged project view */
export type RecentTarget = Target & { source: number };

export interface FilePlayback {
  touchByFile: Map<number, Touch>;
  touchByPath: Map<string, Touch>;
  visitsByFile: Map<number, number>;
  historyByPath: Map<string, TraceEvent[]>;
  recentTargets: RecentTarget[];
  /** fileId → the last source (session index) that touched it */
  sourceByFile: Map<number, number>;
  /** source → glow multiplier in [0,1] for the current cursor; empty (all
   * lookups default to 1) outside a multi-session project view */
  decayBySource: Map<number, number>;
}

const RECENT_WINDOW = 12;

// After a session finishes, its glow halves each time a newer session starts;
// once it has halved this many times it is treated as fully gone (decay 0).
const GONE_AFTER = 5;

interface SourceSpan {
  start: number;
  end: number;
}

// A session's lit terrain/halos fade as newer sessions run. While the cursor is
// still inside the session's span it is fully lit; the moment it finishes
// (cursor reaches its last event) the glow halves, and it halves again for every
// later session that has started by the current cursor.
function decayForSource(cursor: number, span: SourceSpan, spans: Map<number, SourceSpan>): number {
  if (cursor < span.end) return 1;
  let later = 0;
  for (const other of spans.values()) {
    if (other.start > span.end && other.start <= cursor) later++;
  }
  const steps = 1 + later; // finishing itself is the first halving
  return steps > GONE_AFTER ? 0 : Math.pow(0.5, steps);
}

// Incremental playback state. Stepping the playhead forward applies only the
// events it crossed; scrubbing backward replays from the start once. Snapshots
// share the engine's live collections — consumers must treat them as read-only
// and re-read whenever the snapshot identity changes (one fresh wrapper per
// snapshotAt call).
export class PlaybackEngine {
  private readonly events: TraceEvent[];
  private readonly idByPath = new Map<string, number>();
  private cursor = -1;
  private readonly touchByFile = new Map<number, Touch>();
  private readonly touchByPath = new Map<string, Touch>();
  private readonly visitsByFile = new Map<number, number>();
  private readonly historyByPath = new Map<string, TraceEvent[]>();
  private readonly recentTargets: RecentTarget[] = [];
  private readonly sourceByFile = new Map<number, number>();
  // per-source event-index span across the whole trace, and the source count;
  // both fixed for the trace, so computed once in the constructor
  private readonly sourceSpans = new Map<number, SourceSpan>();
  private readonly sourceCount: number;

  constructor(trace: Trace | undefined, city: CityMap | undefined) {
    this.events = trace?.events ?? [];
    for (const file of city?.files ?? []) {
      this.idByPath.set(file.path, file.id);
    }
    this.events.forEach((event, i) => {
      const source = event.src ?? 0;
      const span = this.sourceSpans.get(source);
      if (span) {
        if (i < span.start) span.start = i;
        if (i > span.end) span.end = i;
      } else {
        this.sourceSpans.set(source, { start: i, end: i });
      }
    });
    this.sourceCount = trace?.sources?.length ?? this.sourceSpans.size;
  }

  snapshotAt(seq: number): FilePlayback {
    const lastSeq = Math.min(seq, this.events.length - 1);
    if (lastSeq < this.cursor) this.reset();
    for (let i = this.cursor + 1; i <= lastSeq; i++) {
      this.apply(this.events[i]);
    }
    this.cursor = Math.max(this.cursor, lastSeq);
    // single-session and per-session views leave this empty, so every scene
    // lookup falls back to 1 and nothing fades
    const decayBySource = new Map<number, number>();
    if (this.sourceCount > 1) {
      for (const [source, span] of this.sourceSpans) {
        decayBySource.set(source, decayForSource(this.cursor, span, this.sourceSpans));
      }
    }
    return {
      touchByFile: this.touchByFile,
      touchByPath: this.touchByPath,
      visitsByFile: this.visitsByFile,
      historyByPath: this.historyByPath,
      recentTargets: this.recentTargets,
      sourceByFile: this.sourceByFile,
      decayBySource
    };
  }

  private reset() {
    this.cursor = -1;
    this.touchByFile.clear();
    this.touchByPath.clear();
    this.visitsByFile.clear();
    this.historyByPath.clear();
    this.recentTargets.length = 0;
    this.sourceByFile.clear();
  }

  private apply(event: TraceEvent) {
    const source = event.src ?? 0;
    for (const target of event.targets) {
      const prev = this.touchByPath.get(target.path);
      if (!prev || touchRank[target.touch] > touchRank[prev]) {
        this.touchByPath.set(target.path, target.touch);
      }
      const fileId = target.fileId ?? this.idByPath.get(target.path);
      if (fileId !== undefined) {
        const prevFile = this.touchByFile.get(fileId);
        if (!prevFile || touchRank[target.touch] > touchRank[prevFile]) {
          this.touchByFile.set(fileId, target.touch);
        }
        this.visitsByFile.set(fileId, (this.visitsByFile.get(fileId) ?? 0) + 1);
        // last writer wins: apply() runs events in order, so this ends at the
        // most recent source to touch the file
        this.sourceByFile.set(fileId, source);
      }
      const history = this.historyByPath.get(target.path);
      if (history) history.push(event);
      else this.historyByPath.set(target.path, [event]);
    }
    if (event.targets.length > 0) {
      // the trail follows the strongest signal: skip weak (heuristic) targets
      const primary = event.targets.find((target) => !target.weak) ?? event.targets[0];
      this.recentTargets.push({ ...primary, fileId: primary.fileId ?? this.idByPath.get(primary.path), source });
      if (this.recentTargets.length > RECENT_WINDOW) this.recentTargets.shift();
    }
  }
}
