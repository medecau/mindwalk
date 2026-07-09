import { RefreshCw, Search } from "lucide-react";
import { memo, useMemo, useState } from "react";
import type { SessionMeta } from "../types";

interface SessionRailProps {
  sessions: SessionMeta[];
  activeId?: string;
  loading: boolean;
  onSelect: (id: string) => void;
  onRefresh: () => void;
}

// memo: the app re-renders every playback tick; the rail's props only change
// on scans and session switches
export const SessionRail = memo(function SessionRail({
  sessions,
  activeId,
  loading,
  onSelect,
  onRefresh
}: SessionRailProps) {
  const [query, setQuery] = useState("");
  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sessions;
    return sessions.filter((session) =>
      `${session.title ?? ""} ${session.id} ${session.gitBranch ?? ""}`.toLowerCase().includes(q)
    );
  }, [sessions, query]);

  return (
    <aside className="session-rail">
      <div className="rail-head">
        <h1 className="wordmark">
          mindwalk<span className="spark">.</span>
        </h1>
        <button className="icon-btn" onClick={onRefresh} title="Rescan sessions" aria-label="Rescan sessions">
          <RefreshCw size={15} />
        </button>
      </div>
      <label className="rail-filter">
        <Search size={14} aria-hidden />
        <input
          type="search"
          placeholder="Filter sessions"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
          aria-label="Filter sessions"
        />
      </label>
      <div className="session-list" aria-busy={loading}>
        {shown.map((session) => (
          <button
            key={session.id}
            className={session.id === activeId ? "session-row active" : "session-row"}
            onClick={() => onSelect(session.id)}
          >
            <span className="session-title">{session.title || session.id}</span>
            <span className="session-meta">
              {session.eventCount} calls
              {session.gitBranch ? ` · ${session.gitBranch}` : ""}
              {session.endedAt ? ` · ${shortDate(session.endedAt)}` : ""}
            </span>
          </button>
        ))}
        {shown.length === 0 ? <p className="muted" style={{ padding: "10px 8px" }}>No matching sessions.</p> : null}
      </div>
      <div className="rail-foot">
        {sessions.length} session{sessions.length === 1 ? "" : "s"}
      </div>
    </aside>
  );
});

function shortDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const now = new Date();
  const sameYear = d.getFullYear() === now.getFullYear();
  const md = `${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const hm = `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  return sameYear ? `${md} ${hm}` : `${d.getFullYear()}-${md}`;
}
