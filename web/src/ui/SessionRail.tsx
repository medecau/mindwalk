import {
  ChevronRight,
  Eye,
  EyeOff,
  GitCommitVertical,
  PanelLeftClose,
  Plus,
  RefreshCw,
  Search,
  X
} from "lucide-react";
import { memo, useMemo, useState } from "react";
import { sessionVisible } from "../state/filters";
import type { RailMode } from "../state/store";
import { sessionColorHex } from "../scene/sessionColors";
import { LogoMark } from "./LogoMark";
import { toggleRailShortcut } from "./shortcuts";
import type { ProjectMeta, RepoMeta, SessionMeta } from "../types";

interface SessionRailProps {
  sessions: SessionMeta[];
  projects: ProjectMeta[];
  // repos discovered from session working directories
  repos: RepoMeta[];
  // repos the user added manually; get a remove button, since only these can be forgotten
  extraRepos: RepoMeta[];
  mode: RailMode;
  activeKey?: string;
  activeProjectKey?: string;
  activeRepoKey?: string;
  loading: boolean;
  hideEmpty: boolean;
  harnessFilter?: string;
  // in Sessions mode, the project path the list is pinned to (from a row's arrow)
  projectFilter?: string;
  collapsed: boolean;
  onSelect: (key: string) => void;
  onSelectProject: (key: string) => void;
  onSelectRepo: (key: string, path: string) => void;
  onViewProjectSessions: (path: string) => void;
  onClearProjectFilter: () => void;
  onModeChange: (mode: RailMode) => void;
  onRefresh: () => void;
  onHideEmptyChange: (hide: boolean) => void;
  onHarnessFilterChange: (harness?: string) => void;
  onCollapse: () => void;
  // validates and adds a manually-typed repo path, then plays it
  onAddRepo: (path: string) => void;
  // forgets a manually-added repo (discovered repos can't be removed)
  onRemoveRepo: (key: string) => void;
  // while a video export records, session switching is locked so it can't swap
  // the canvas or playhead out from under the recorder
  locked?: boolean;
}

// how many session-color swatches a project row previews before it stops
const MAX_SWATCHES = 8;

// memo: the app re-renders every playback tick; the rail's props only change
// on scans, session switches, and filter changes
export const SessionRail = memo(function SessionRail({
  sessions,
  projects,
  repos,
  extraRepos,
  mode,
  activeKey,
  activeProjectKey,
  activeRepoKey,
  loading,
  hideEmpty,
  harnessFilter,
  projectFilter,
  collapsed,
  onSelect,
  onSelectProject,
  onSelectRepo,
  onViewProjectSessions,
  onClearProjectFilter,
  onModeChange,
  onRefresh,
  onHideEmptyChange,
  onHarnessFilterChange,
  onCollapse,
  onAddRepo,
  onRemoveRepo,
  locked = false
}: SessionRailProps) {
  const [query, setQuery] = useState("");
  const [repoPath, setRepoPath] = useState("");
  const harnesses = useMemo(() => [...new Set(sessions.map((s) => s.harness))].sort(), [sessions]);
  const emptyCount = useMemo(() => sessions.filter((s) => s.eventCount === 0).length, [sessions]);
  // a persisted filter can name a harness with no sessions this scan; treating
  // it as "all" avoids an empty list with no visible chip to clear it
  const effectiveHarness = harnessFilter && harnesses.includes(harnessFilter) ? harnessFilter : undefined;
  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sessions.filter((session) => {
      if (!sessionVisible(session, { hideEmpty, harness: effectiveHarness, cwd: projectFilter }, activeKey))
        return false;
      if (!q) return true;
      return `${session.title ?? ""} ${session.id} ${session.gitBranch ?? ""} ${session.harness}`
        .toLowerCase()
        .includes(q);
    });
  }, [sessions, query, hideEmpty, effectiveHarness, projectFilter, activeKey]);
  // label the pinned-project chip with the project's name; fall back to the last
  // path segment if the project isn't in the current list
  const projectFilterName = useMemo(() => {
    if (!projectFilter) return undefined;
    const match = projects.find((project) => project.path === projectFilter);
    return match?.name ?? projectFilter.split("/").filter(Boolean).pop() ?? projectFilter;
  }, [projectFilter, projects]);
  const shownProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter((project) => `${project.name} ${project.path}`.toLowerCase().includes(q));
  }, [projects, query]);
  // manually-added repos that duplicate a discovered one are shown once, as the
  // discovered (non-removable) row — extraRepos only adds rows discovery missed
  const discoveredKeys = useMemo(() => new Set(repos.map((r) => r.key)), [repos]);
  const manualOnlyKeys = useMemo(
    () => new Set(extraRepos.filter((r) => !discoveredKeys.has(r.key)).map((r) => r.key)),
    [extraRepos, discoveredKeys]
  );
  const allRepos = useMemo(
    () => [...repos, ...extraRepos.filter((r) => !discoveredKeys.has(r.key))],
    [repos, extraRepos, discoveredKeys]
  );
  const shownRepos = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allRepos;
    return allRepos.filter((repo) => `${repo.name} ${repo.path}`.toLowerCase().includes(q));
  }, [allRepos, query]);

  const isProjects = mode === "projects";
  const isRepos = mode === "repos";

  return (
    <aside className={collapsed ? "session-rail collapsed" : "session-rail"}>
      <div className="rail-head">
        <h1 className="wordmark">
          <LogoMark />
          <span>
            mindwalk<span className="spark">.</span>
          </span>
        </h1>
        <div className="rail-head-actions">
          <button className="icon-btn" onClick={onRefresh} title="Rescan" aria-label="Rescan">
            <RefreshCw size={15} />
          </button>
          <button
            className="icon-btn"
            onClick={onCollapse}
            title={`Hide sidebar (${toggleRailShortcut})`}
            aria-label="Hide session sidebar"
          >
            <PanelLeftClose size={15} />
          </button>
        </div>
      </div>
      <div className="rail-mode" role="tablist" aria-label="Sidebar mode">
        <button
          role="tab"
          aria-selected={mode === "sessions"}
          className={mode === "sessions" ? "active" : ""}
          onClick={() => onModeChange("sessions")}
        >
          Sessions
        </button>
        <button
          role="tab"
          aria-selected={isProjects}
          className={isProjects ? "active" : ""}
          onClick={() => onModeChange("projects")}
        >
          Projects
        </button>
        <button
          role="tab"
          aria-selected={isRepos}
          className={isRepos ? "active" : ""}
          onClick={() => onModeChange("repos")}
        >
          Repos
        </button>
      </div>
      <div className="rail-controls">
        <label className="rail-filter">
          <Search size={14} aria-hidden />
          <input
            type="search"
            placeholder={isProjects ? "Filter projects" : isRepos ? "Filter repos" : "Filter sessions"}
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
            aria-label={isProjects ? "Filter projects" : isRepos ? "Filter repos" : "Filter sessions"}
          />
        </label>
        {mode === "sessions" && (harnesses.length > 1 || emptyCount > 0) ? (
          <div className="rail-chips" role="group" aria-label="Session filters">
            {harnesses.length > 1 ? (
              <>
                <button
                  className={effectiveHarness === undefined ? "chip active" : "chip"}
                  onClick={() => onHarnessFilterChange(undefined)}
                >
                  all
                </button>
                {harnesses.map((harness) => (
                  <button
                    key={harness}
                    className={effectiveHarness === harness ? "chip active" : "chip"}
                    onClick={() => onHarnessFilterChange(harness)}
                  >
                    {harnessLabel(harness)}
                  </button>
                ))}
              </>
            ) : null}
            {emptyCount > 0 ? (
              <button
                className={hideEmpty ? "eye-toggle" : "eye-toggle showing"}
                onClick={() => onHideEmptyChange(!hideEmpty)}
                aria-pressed={!hideEmpty}
                title={hideEmpty ? `Show ${emptyCount} empty sessions` : `Hide ${emptyCount} empty sessions`}
                aria-label={hideEmpty ? `Show ${emptyCount} empty sessions` : `Hide ${emptyCount} empty sessions`}
              >
                {hideEmpty ? <EyeOff size={13} aria-hidden /> : <Eye size={13} aria-hidden />}
              </button>
            ) : null}
          </div>
        ) : null}
        {mode === "sessions" && projectFilter ? (
          <div className="rail-chips" role="group" aria-label="Project filter">
            <button
              className="chip active project-filter-chip"
              onClick={onClearProjectFilter}
              title="Show all sessions"
              aria-label={`Clear project filter: ${projectFilterName}`}
            >
              <span>{projectFilterName}</span>
              <X size={12} aria-hidden />
            </button>
          </div>
        ) : null}
      </div>
      <div className="session-list" aria-busy={loading}>
        {isRepos
          ? shownRepos.map((repo) => (
              <div key={repo.key} className="project-row">
                <button
                  className={repo.key === activeRepoKey ? "session-row active" : "session-row"}
                  onClick={() => onSelectRepo(repo.key, repo.path)}
                  title={repo.path}
                  disabled={locked}
                >
                  <span className="session-title">
                    <GitCommitVertical size={13} aria-hidden className="repo-row-icon" />
                    {repo.name}
                  </span>
                  <span className="session-meta">
                    <span className="session-meta-text">
                      {repo.commit ? `${repo.commit}${repo.endedAt ? " · " : ""}` : ""}
                      {repo.endedAt ? shortDate(repo.endedAt) : ""}
                    </span>
                  </span>
                </button>
                {manualOnlyKeys.has(repo.key) ? (
                  <button
                    className="project-jump"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveRepo(repo.key);
                    }}
                    title={`Forget ${repo.name}`}
                    aria-label={`Forget ${repo.name}`}
                    disabled={locked}
                  >
                    <X size={14} />
                  </button>
                ) : null}
              </div>
            ))
          : isProjects
            ? shownProjects.map((project) => (
              // row wrapper: the select button and the sessions-jump arrow are
              // siblings, never nested, so we don't put a button inside a button
              <div key={project.key} className="project-row">
                <button
                  className={project.key === activeProjectKey ? "session-row active" : "session-row"}
                  onClick={() => onSelectProject(project.key)}
                  title={project.path}
                  disabled={locked}
                >
                  <span className="session-title">{project.name}</span>
                  <span className="session-meta">
                    <span className="project-swatches" aria-hidden>
                      {Array.from({ length: Math.min(project.sessionCount, MAX_SWATCHES) }).map((_, i) => (
                        <span key={i} className="session-swatch" style={{ background: sessionColorHex(i) }} />
                      ))}
                    </span>
                    <span className="session-meta-text">
                      {project.sessionCount} session{project.sessionCount === 1 ? "" : "s"} · {project.eventCount}{" "}
                      {project.eventCount === 1 ? "call" : "calls"}
                      {project.endedAt ? ` · ${shortDate(project.endedAt)}` : ""}
                    </span>
                  </span>
                </button>
                <button
                  className="project-jump"
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewProjectSessions(project.path);
                  }}
                  title={`Show ${project.name} sessions`}
                  aria-label={`Show ${project.name} sessions`}
                  disabled={locked}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            ))
          : shown.map((session) => (
              <button
                key={session.key}
                className={session.key === activeKey ? "session-row active" : "session-row"}
                onClick={() => onSelect(session.key)}
                disabled={locked}
              >
                <span className="session-title">{session.title || session.id}</span>
                <span className="session-meta">
                  <span className={`harness-dot ${harnessClass(session.harness)}`} aria-hidden />
                  <span className="session-meta-text">
                    {harnessLabel(session.harness)} · {session.eventCount}{" "}
                    {session.eventCount === 1 ? "call" : "calls"}
                    {session.gitBranch ? ` · ${session.gitBranch}` : ""}
                    {session.endedAt ? ` · ${shortDate(session.endedAt)}` : ""}
                  </span>
                </span>
              </button>
            ))}
        {isRepos && shownRepos.length === 0 ? (
          <p className="muted" style={{ padding: "10px 8px" }}>
            {loading && allRepos.length === 0 ? "Scanning repositories…" : "No matching repos."}
          </p>
        ) : null}
        {isProjects && shownProjects.length === 0 ? (
          <p className="muted" style={{ padding: "10px 8px" }}>
            {loading && projects.length === 0 ? "Scanning projects…" : "No matching projects."}
          </p>
        ) : null}
        {mode === "sessions" && shown.length === 0 ? (
          <p className="muted" style={{ padding: "10px 8px" }}>
            {loading && sessions.length === 0 ? "Scanning sessions…" : "No matching sessions."}
          </p>
        ) : null}
      </div>
      {isRepos ? (
        <form
          className="rail-open"
          onSubmit={(e) => {
            e.preventDefault();
            const path = repoPath.trim();
            if (!path) return;
            onAddRepo(path);
            setRepoPath("");
          }}
        >
          <label className="rail-open-label" htmlFor="rail-open-input">
            Add a repository
          </label>
          <div className="rail-open-combo">
            <input
              id="rail-open-input"
              type="text"
              className="rail-open-input"
              placeholder="/path/to/repo"
              value={repoPath}
              onChange={(e) => setRepoPath(e.currentTarget.value)}
              spellCheck={false}
            />
            <button
              type="submit"
              className="rail-open-add"
              disabled={repoPath.trim() === ""}
              title="Add repository"
              aria-label="Add repository"
            >
              <Plus size={14} aria-hidden />
            </button>
          </div>
        </form>
      ) : null}
      <div className="rail-foot">
        {isRepos
          ? shownRepos.length === allRepos.length
            ? `${allRepos.length} repo${allRepos.length === 1 ? "" : "s"}`
            : `${shownRepos.length} of ${allRepos.length} repos`
          : isProjects
            ? shownProjects.length === projects.length
              ? `${projects.length} project${projects.length === 1 ? "" : "s"}`
              : `${shownProjects.length} of ${projects.length} projects`
            : shown.length === sessions.length
            ? `${sessions.length} session${sessions.length === 1 ? "" : "s"}`
            : `${shown.length} of ${sessions.length} sessions`}
      </div>
    </aside>
  );
});

function harnessLabel(harness: string): string {
  switch (harness) {
    case "claude-code":
      return "claude";
    default:
      return harness;
  }
}

function harnessClass(harness: string): string {
  switch (harness) {
    case "claude-code":
      return "claude";
    case "codex":
      return "codex";
    default:
      return "other";
  }
}

function shortDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const now = new Date();
  const sameYear = d.getFullYear() === now.getFullYear();
  const md = `${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const hm = `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  return sameYear ? `${md} ${hm}` : `${d.getFullYear()}-${md}`;
}
