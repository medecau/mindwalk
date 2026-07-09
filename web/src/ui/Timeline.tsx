import { Pause, Play, RotateCcw } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Action, Trace } from "../types";

interface TimelineProps {
  trace?: Trace;
  currentSeq: number;
  onChange: (seq: number) => void;
}

const BUCKETS = 160;

interface Bucket {
  count: number;
  dominant: Action;
}

export function Timeline({ trace, currentSeq, onChange }: TimelineProps) {
  const [playing, setPlaying] = useState(false);
  const total = trace?.events.length ?? 0;
  const max = Math.max(0, total - 1);
  const seq = Math.min(currentSeq, max);
  const event = trace?.events[seq];

  useEffect(() => {
    setPlaying(false);
  }, [trace]);

  // the timer reads position via refs so ticking doesn't tear it down
  const seqRef = useRef(seq);
  const maxRef = useRef(max);
  seqRef.current = seq;
  maxRef.current = max;
  useEffect(() => {
    if (!playing || total === 0) return;
    const timer = window.setInterval(() => {
      onChange(seqRef.current >= maxRef.current ? 0 : seqRef.current + 1);
    }, 340);
    return () => window.clearInterval(timer);
  }, [playing, total, onChange]);

  const buckets = useMemo<Bucket[]>(() => {
    if (!trace || total === 0) return [];
    const n = Math.min(BUCKETS, total);
    const out: Bucket[] = [];
    for (let b = 0; b < n; b++) {
      const from = Math.floor((b * total) / n);
      const to = Math.floor(((b + 1) * total) / n);
      const byAction = new Map<Action, number>();
      for (let i = from; i < to; i++) {
        const action = trace.events[i].action;
        byAction.set(action, (byAction.get(action) ?? 0) + 1);
      }
      let dominant: Action = "other";
      let best = -1;
      // edits are rare but load-bearing: let them win the bucket color on ties
      const priority: Action[] = ["edit", "verify", "read", "search", "exec", "other"];
      for (const action of priority) {
        const count = byAction.get(action) ?? 0;
        if (count > best) {
          best = count;
          dominant = action;
        }
      }
      out.push({ count: to - from, dominant });
    }
    return out;
  }, [trace, total]);

  const peak = useMemo(() => buckets.reduce((acc, b) => Math.max(acc, b.count), 1), [buckets]);

  return (
    <footer className="deck">
      <div className="transport">
        <button className="icon-btn" onClick={() => onChange(0)} title="Restart" aria-label="Restart playback">
          <RotateCcw size={15} />
        </button>
        <button
          className="play-btn"
          onClick={() => setPlaying((v) => !v)}
          disabled={total === 0}
          aria-label={playing ? "Pause playback" : "Play playback"}
        >
          {playing ? <Pause size={14} /> : <Play size={14} />}
          <span>{playing ? "Pause" : "Play"}</span>
        </button>
      </div>

      <div className="strip">
        <div className="strip-marks" aria-hidden>
          {/* tail marks can carry seq == events.length; clamp keeps them on the strip */}
          {trace?.marks.map((mark, i) => (
            <span
              key={`${mark.seq}-${mark.type}-${i}`}
              className={`strip-mark ${mark.type}`}
              style={{ left: `${(Math.min(mark.seq, max) / Math.max(max, 1)) * 100}%` }}
              title={mark.type === "compaction" ? "context compaction" : mark.note || mark.type}
            />
          ))}
        </div>
        <div className="strip-bars" aria-hidden>
          {buckets.map((bucket, i) => (
            <span
              key={i}
              className={`strip-bar ${bucket.dominant}`}
              style={{ height: `${18 + (bucket.count / peak) * 82}%` }}
            />
          ))}
        </div>
        {total > 0 ? (
          <div className="strip-playhead" style={{ left: `${(seq / Math.max(max, 1)) * 100}%` }} aria-hidden />
        ) : null}
        <input
          className="strip-input"
          type="range"
          min={0}
          max={max}
          value={seq}
          disabled={total === 0}
          onChange={(e) => onChange(Number(e.currentTarget.value))}
          aria-label="Playback position"
          aria-valuetext={event ? `event ${event.seq}: ${event.tool}` : "empty"}
        />
      </div>

      <div className="readout">
        <span className="readout-count">
          {total > 0 ? `${seq + 1} / ${total}` : "0 / 0"}
        </span>
        <span className="readout-tool">
          {event ? (
            <>
              <span className={`action-dot ${event.action}`} />
              {event.tool}
              {event.isError ? <span className="err">error</span> : null}
              {event.ts ? <span style={{ color: "var(--faint)", fontWeight: 420 }}>{clock(event.ts)}</span> : null}
            </>
          ) : (
            "No session"
          )}
        </span>
        <p className="readout-summary">{event?.summary ?? "Select a session to start the walk."}</p>
      </div>
    </footer>
  );
}

function clock(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return [d.getHours(), d.getMinutes(), d.getSeconds()].map((n) => String(n).padStart(2, "0")).join(":");
}
