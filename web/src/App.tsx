import { PanelLeftOpen } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  buildProject,
  checkRepo,
  describeError,
  getHistory,
  getProjectSnapshot,
  getSessionSnapshot,
  isCancel,
  listProjects,
  listRepos,
  listSessions,
  type BuildProgress
} from "./api/client";
import { PlaybackEngine } from "./playback/reducer";
import { downloadBlob, recordingSupported, recordPlayback } from "./playback/recorder";
import { CityScene } from "./scene/CityScene";
import { sessionColorHex } from "./scene/sessionColors";
import { TreeScene } from "./scene/TreeScene";
import { sessionVisible } from "./state/filters";
import { useAppStore, type RailMode } from "./state/store";
import { Hud } from "./ui/Hud";
import { Inspector } from "./ui/Inspector";
import { ProjectBuildGate } from "./ui/ProjectBuildGate";
import { SessionRail } from "./ui/SessionRail";
import { toggleRailShortcut } from "./ui/shortcuts";
import { Timeline } from "./ui/Timeline";
import "./styles.css";

export default function App() {
  const {
    sessions,
    projects,
    repos,
    extraRepos,
    railMode,
    activeSessionKey,
    activeProjectKey,
    activeRepoKey,
    trace,
    city,
    currentSeq,
    selectedPath,
    view,
    loading,
    error,
    hideEmpty,
    harnessFilter,
    projectFilter,
    railCollapsed,
    standalone,
    immersive,
    historyMode,
    setView,
    setSessions,
    setProjects,
    setRepos,
    addExtraRepo,
    removeExtraRepo,
    setRailMode,
    setActiveSession,
    setActiveProject,
    setActiveRepo,
    setData,
    setHistory,
    setCurrentSeq,
    setSelectedPath,
    setLoading,
    setError,
    setHideEmpty,
    setHarnessFilter,
    setProjectFilter,
    setRailCollapsed,
    setStandalone
  } = useAppStore();
  const urlSessionConsumed = useRef(false);
  const scanGeneration = useRef(0);
  const projectScanGeneration = useRef(0);
  const repoScanGeneration = useRef(0);
  const loadGeneration = useRef(0);
  const manualRefreshInFlight = useRef(false);
  const pendingLoads = useRef(0);
  const activeSessionKeyRef = useRef(activeSessionKey);
  activeSessionKeyRef.current = activeSessionKey;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [exporting, setExporting] = useState(false);
  const activeProjectKeyRef = useRef(activeProjectKey);
  activeProjectKeyRef.current = activeProjectKey;
  const activeRepoKeyRef = useRef(activeRepoKey);
  activeRepoKeyRef.current = activeRepoKey;
  // non-repo project consent gate + live build progress
  const [buildGate, setBuildGate] = useState<{ key: string; root: string } | undefined>();
  const [buildProgress, setBuildProgress] = useState<BuildProgress | null>(null);
  const buildHandleRef = useRef<{ cancel: () => void } | null>(null);

  // scenes hand up their live <canvas> so the video exporter can capture it;
  // stable identity keeps the scene mount effect from remounting on every render
  const handleCanvasReady = useCallback((canvas: HTMLCanvasElement | null) => {
    canvasRef.current = canvas;
  }, []);

  const beginLoading = useCallback(() => {
    pendingLoads.current++;
    setLoading(true);
  }, [setLoading]);

  const endLoading = useCallback(() => {
    pendingLoads.current = Math.max(0, pendingLoads.current - 1);
    if (pendingLoads.current === 0) setLoading(false);
  }, [setLoading]);

  // abandon any in-flight build and drop the consent gate — used when the active
  // view changes out from under a pending or streaming build
  const resetBuild = useCallback(() => {
    buildHandleRef.current?.cancel();
    buildHandleRef.current = null;
    setBuildProgress(null);
    setBuildGate(undefined);
  }, []);

  const loadSession = useCallback(async (key: string) => {
    const generation = ++loadGeneration.current;
    resetBuild();
    beginLoading();
    setError(undefined);
    try {
      const { trace: nextTrace, city: nextCity } = await getSessionSnapshot(key);
      if (generation !== loadGeneration.current || activeSessionKeyRef.current !== key) return;
      setData(nextTrace, nextCity);
      setSelectedPath(undefined);
    } catch (err) {
      if (generation === loadGeneration.current && activeSessionKeyRef.current === key) {
        setError(describeError(err, "loading the session"));
      }
    } finally {
      endLoading();
    }
  }, [beginLoading, endLoading, resetBuild, setData, setError, setSelectedPath]);

  const loadProject = useCallback(async (key: string) => {
    const generation = ++loadGeneration.current;
    resetBuild();
    beginLoading();
    setError(undefined);
    try {
      const { trace: nextTrace, city: nextCity, build } = await getProjectSnapshot(key);
      if (generation !== loadGeneration.current || activeProjectKeyRef.current !== key) return;
      // a project plays its merged chronology forward, so open at the beginning
      setData(nextTrace, nextCity, true);
      setSelectedPath(undefined);
      // a non-repo root leaves the map unbuilt; offer the opt-in build instead
      setBuildGate(build?.status === "consent-required" ? { key, root: build.root ?? "" } : undefined);
    } catch (err) {
      if (generation === loadGeneration.current && activeProjectKeyRef.current === key) {
        setError(describeError(err, "loading the project"));
      }
    } finally {
      endLoading();
    }
  }, [beginLoading, endLoading, resetBuild, setData, setError, setSelectedPath]);

  const startBuild = useCallback((key: string) => {
    setBuildProgress({ phase: "scan", done: 0, total: 0 });
    const handle = buildProject(key, (p) => {
      if (activeProjectKeyRef.current === key) setBuildProgress(p);
    });
    buildHandleRef.current = handle;
    handle.promise
      .then((data) => {
        if (activeProjectKeyRef.current !== key) return;
        setData(data.trace, data.city, true);
        setBuildGate(undefined);
        setBuildProgress(null);
        buildHandleRef.current = null;
      })
      .catch((err) => {
        if (buildHandleRef.current === handle) buildHandleRef.current = null;
        if (activeProjectKeyRef.current !== key) return;
        // a cancel drops back to the consent card; a real failure also toasts
        setBuildProgress(null);
        if (!isCancel(err)) setError(describeError(err, "building the project map"));
      });
  }, [setData, setError]);

  const cancelBuild = useCallback(() => {
    buildHandleRef.current?.cancel();
    buildHandleRef.current = null;
    setBuildProgress(null);
  }, []);

  const scan = useCallback(async (fresh: boolean) => {
    const generation = ++scanGeneration.current;
    beginLoading();
    setError(undefined);
    try {
      const data = await listSessions(fresh);
      // a slow scan of a mode the user has since left must not apply its results
      if (generation !== scanGeneration.current || useAppStore.getState().railMode !== "sessions") return;
      setSessions(data);
      let preferred: string | undefined;
      if (!urlSessionConsumed.current) {
        urlSessionConsumed.current = true;
        const selector = new URL(window.location.href).searchParams.get("session") ?? undefined;
        const exact = selector ? data.find((session) => session.key === selector) : undefined;
        const legacyMatches = selector && !exact ? data.filter((session) => session.id === selector) : [];
        const fromUrl = exact?.key ?? (legacyMatches.length === 1 ? legacyMatches[0].key : undefined);
        if (fromUrl) {
          preferred = fromUrl;
        } else if (legacyMatches.length > 1) {
          console.warn(`session id "${selector}" is ambiguous; falling back to the latest session`);
        } else if (selector) {
          console.warn(`session "${selector}" not found; falling back to the latest session`);
        }
      }
      // a session can disappear between scans; fall back instead of pinning a dead key
      const currentActiveKey = activeSessionKeyRef.current;
      const stillListed =
        currentActiveKey !== undefined && data.some((session) => session.key === currentActiveKey);
      // prefer a session the rail will actually show; if the filters hide
      // everything, the newest session still beats a blank stage. read the
      // project pre-filter fresh: a jump from a project row sets it just before
      // this scan's await resolves
      const cwd = useAppStore.getState().projectFilter;
      const fallback = (
        data.find((session) => sessionVisible(session, { hideEmpty, harness: harnessFilter, cwd })) ?? data[0]
      )?.key;
      const next = preferred ?? (stillListed ? currentActiveKey : fallback);
      if (next !== currentActiveKey) {
        activeSessionKeyRef.current = next;
        if (!next) loadGeneration.current++;
        setActiveSession(next);
      }
      if (next) await loadSession(next);
    } catch (err) {
      if (generation === scanGeneration.current) {
        setError(describeError(err, "scanning sessions"));
      }
    } finally {
      endLoading();
    }
  }, [beginLoading, endLoading, harnessFilter, hideEmpty, loadSession, setActiveSession, setError, setSessions]);

  const scanProjects = useCallback(async (fresh: boolean) => {
    const generation = ++projectScanGeneration.current;
    beginLoading();
    setError(undefined);
    try {
      const data = await listProjects(fresh);
      // a slow scan of a mode the user has since left must not apply its results
      if (generation !== projectScanGeneration.current || useAppStore.getState().railMode !== "projects") return;
      setProjects(data);
      // keep the current project if it survived the rescan; otherwise the newest
      const currentActiveKey = activeProjectKeyRef.current;
      const stillListed =
        currentActiveKey !== undefined && data.some((project) => project.key === currentActiveKey);
      const next = stillListed ? currentActiveKey : data[0]?.key;
      if (next !== currentActiveKey) {
        activeProjectKeyRef.current = next;
        if (!next) loadGeneration.current++;
        setActiveProject(next);
      }
      if (next) await loadProject(next);
    } catch (err) {
      if (generation === projectScanGeneration.current) {
        setError(describeError(err, "scanning projects"));
      }
    } finally {
      endLoading();
    }
  }, [beginLoading, endLoading, loadProject, setActiveProject, setError, setProjects]);

  // repos never auto-play (unlike scan/scanProjects); the sidebar just lists
  // them and the user picks one to replay
  const scanRepos = useCallback(async (fresh: boolean) => {
    const generation = ++repoScanGeneration.current;
    beginLoading();
    setError(undefined);
    try {
      const data = await listRepos(fresh);
      if (generation !== repoScanGeneration.current || useAppStore.getState().railMode !== "repos") return;
      setRepos(data);
    } catch (err) {
      if (generation === repoScanGeneration.current) {
        setError(describeError(err, "scanning repositories"));
      }
    } finally {
      endLoading();
    }
  }, [beginLoading, endLoading, setError, setRepos]);

  const loadHistory = useCallback(async (repo?: string, key?: string) => {
    const generation = ++loadGeneration.current;
    beginLoading();
    setError(undefined);
    try {
      const { trace: nextTrace, city: nextCity } = await getHistory(repo);
      if (generation !== loadGeneration.current) return;
      if (key !== undefined && activeRepoKeyRef.current !== key) return;
      setHistory(nextTrace, nextCity);
    } catch (err) {
      if (generation === loadGeneration.current) {
        setError(describeError(err, "loading the git history"));
      }
    } finally {
      endLoading();
    }
  }, [beginLoading, endLoading, setHistory, setError]);

  const selectRepo = useCallback((key: string, path: string) => {
    activeRepoKeyRef.current = key;
    activeSessionKeyRef.current = undefined;
    activeProjectKeyRef.current = undefined;
    setActiveRepo(key);
    void loadHistory(path, key);
  }, [loadHistory, setActiveRepo]);

  // validates a manually-typed path against /api/repos?repo=; on success it's
  // remembered in localStorage and played immediately
  const addRepo = useCallback(async (path: string) => {
    setError(undefined);
    try {
      const info = await checkRepo(path);
      addExtraRepo(info);
      selectRepo(info.key, info.path);
    } catch (err) {
      setError(describeError(err, "adding the repository"));
    }
  }, [addExtraRepo, selectRepo, setError]);

  const refresh = useCallback(() => {
    if (manualRefreshInFlight.current) return;
    manualRefreshInFlight.current = true;
    const mode = useAppStore.getState().railMode;
    const run = mode === "projects" ? scanProjects(true) : mode === "repos" ? scanRepos(true) : scan(true);
    void run.finally(() => {
      manualRefreshInFlight.current = false;
    });
  }, [scan, scanProjects, scanRepos]);

  const changeMode = useCallback((mode: RailMode) => {
    if (mode === useAppStore.getState().railMode) return;
    setRailMode(mode);
    // a plain mode toggle drops any per-project pre-filter, so switching to
    // Sessions shows every session again
    setProjectFilter(undefined);
    // clear the outgoing mode's selection so the stage never keeps a stale
    // scene under the new rail (e.g. switching into a mode with no items)
    if (mode === "projects") {
      activeProjectKeyRef.current = undefined;
      setActiveProject(undefined);
      void scanProjects(false);
    } else if (mode === "repos") {
      activeRepoKeyRef.current = undefined;
      setActiveRepo(undefined);
      void scanRepos(false);
    } else {
      activeSessionKeyRef.current = undefined;
      setActiveSession(undefined);
      void scan(false);
    }
  }, [scan, scanProjects, scanRepos, setRailMode, setActiveProject, setActiveSession, setActiveRepo, setProjectFilter]);

  // the per-project arrow: switch to Sessions filtered to that project. order
  // matters — changeMode clears the filter, so set it after the switch (both
  // run synchronously before scan's await resolves, so its pick still filters)
  const viewProjectSessions = useCallback((path: string) => {
    changeMode("sessions");
    setProjectFilter(path);
  }, [changeMode, setProjectFilter]);

  const selectSession = useCallback((key: string) => {
    activeSessionKeyRef.current = key;
    activeProjectKeyRef.current = undefined;
    setActiveSession(key);
    void loadSession(key);
  }, [loadSession, setActiveSession]);

  const exportVideo = useCallback(async () => {
    const canvas = canvasRef.current;
    const total = trace?.events.length ?? 0;
    if (!canvas || total === 0 || exporting) return;
    // the recorder owns the playhead for the duration of the export; setting
    // exporting=true locks the transport, scrubber, session rail, and view
    // toggle (see the `exporting` prop threaded into Timeline/SessionRail/Hud)
    // so nothing else moves the playhead or swaps the canvas mid-recording
    const exportSessionKey = activeSessionKeyRef.current;
    const resumeSeq = useAppStore.getState().currentSeq;
    setExporting(true);
    setError(undefined);
    try {
      const { blob, extension } = await recordPlayback({
        canvas,
        total,
        setSeq: setCurrentSeq
      });
      const name = trace?.session.id || exportSessionKey || "session";
      downloadBlob(blob, `mindwalk-${name}.${extension}`);
    } catch (err) {
      setError(describeError(err, "exporting the video"));
    } finally {
      // only restore the playhead if we're still on the same session — a guard
      // in case a switch slipped through; normally the UI lock prevents it
      if (activeSessionKeyRef.current === exportSessionKey) {
        setCurrentSeq(resumeSeq);
      }
      setExporting(false);
    }
  }, [trace, exporting, setCurrentSeq, setError]);

  const selectProject = useCallback((key: string) => {
    activeProjectKeyRef.current = key;
    activeSessionKeyRef.current = undefined;
    setActiveProject(key);
    void loadProject(key);
  }, [loadProject, setActiveProject]);

  // stable callbacks keep SessionRail's memo effective across playback ticks
  const collapseRail = useCallback(() => setRailCollapsed(true), [setRailCollapsed]);
  const expandRail = useCallback(() => setRailCollapsed(false), [setRailCollapsed]);
  const clearProjectFilter = useCallback(() => setProjectFilter(undefined), [setProjectFilter]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "b" || !(e.metaKey || e.ctrlKey) || e.altKey || e.shiftKey) return;
      e.preventDefault();
      const store = useAppStore.getState();
      store.setRailCollapsed(!store.railCollapsed);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // immersive view: bare `z` toggles the chrome off, Escape exits. guard like
  // the Timeline shortcuts so typing in the rail's search box never triggers it
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, button, [contenteditable]")) return;
      const store = useAppStore.getState();
      if (e.key.toLowerCase() === "z") {
        e.preventDefault();
        store.setImmersive(!store.immersive);
      } else if (e.key === "Escape" && store.immersive) {
        e.preventDefault();
        store.setImmersive(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const params = new URL(window.location.href).searchParams;
    if (params.get("history") === "1") {
      setStandalone(true);
      void loadHistory(params.get("repo") ?? undefined);
    } else {
      const mode = useAppStore.getState().railMode;
      if (mode === "projects") void scanProjects(false);
      else if (mode === "repos") void scanRepos(false);
      else void scan(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // per-source walker colors, only for a merged project view (>1 session)
  const sourceColors = useMemo(
    () =>
      trace?.sources && trace.sources.length > 1
        ? trace.sources.map((_, i) => sessionColorHex(i))
        : undefined,
    [trace]
  );

  const engine = useMemo(() => new PlaybackEngine(trace, city), [trace, city]);
  const playback = useMemo(() => engine.snapshotAt(currentSeq), [engine, currentSeq]);
  // git history: paths touched by the commit at the playhead, drawn blue in the
  // terrain to mark whose turn it is this frame
  const currentTouchPaths = useMemo(() => {
    if (!historyMode || !trace) return undefined;
    const event = trace.events[Math.min(currentSeq, trace.events.length - 1)];
    return new Set((event?.targets ?? []).map((t) => t.path));
  }, [historyMode, trace, currentSeq]);
  // git history: fixed color-ramp ceiling = log2 of the largest single-commit
  // file churn across the whole history. Computed once per trace so a file's
  // color tier stays stable as the playhead moves.
  const historyMaxLog = useMemo(() => {
    if (!historyMode || !trace) return 0;
    let maxLOC = 1;
    for (const event of trace.events) {
      for (const target of event.targets) {
        const pair = target.lines?.[0];
        if (pair) maxLOC = Math.max(maxLOC, pair[0] + pair[1]);
      }
    }
    return Math.log2(maxLOC);
  }, [historyMode, trace]);
  // live tallies for the HUD spectrum; touchByPath mirrors the backend stats scope
  const touchCounts = useMemo(() => {
    let edited = 0;
    let read = 0;
    let seen = 0;
    for (const touch of playback.touchByPath.values()) {
      if (touch === "edit") edited++;
      else if (touch === "read") read++;
      else seen++;
    }
    return { edited, read, seen };
  }, [playback]);
  const selectedFile = useMemo(
    () => (selectedPath ? city?.files.find((file) => file.path === selectedPath) : undefined),
    [city, selectedPath]
  );
  // mirrors the backend churn definition (stats.churnFiles): per path, the
  // number of events that carried an edit touch; churn means three or more
  const churn = useMemo(() => {
    const counts = new Map<string, number>();
    for (const event of trace?.events ?? []) {
      for (const target of event.targets) {
        if (target.touch === "edit" && target.path) {
          counts.set(target.path, (counts.get(target.path) ?? 0) + 1);
        }
      }
    }
    return [...counts.entries()]
      .filter(([, edits]) => edits >= 3)
      .map(([path, edits]) => ({ path, edits }))
      .sort((a, b) => b.edits - a.edits || (a.path < b.path ? -1 : 1));
  }, [trace]);

  // the empty-stage card and scanning toast follow the active rail mode, so a
  // loaded project is never covered by a "No sessions found" overlay. Repos
  // never auto-play, so its empty state is "nothing selected yet" rather than
  // "no repos found"
  const railEmpty =
    railMode === "projects" ? projects.length === 0 : railMode === "repos" ? !city : sessions.length === 0;

  const frameClass = [
    "app-frame",
    standalone || railCollapsed ? "rail-collapsed" : "",
    immersive ? "immersive" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <main className={frameClass}>
      {standalone ? null : (
        <SessionRail
          sessions={sessions}
          projects={projects}
          repos={repos}
          extraRepos={extraRepos}
          mode={railMode}
          activeKey={activeSessionKey}
          activeProjectKey={activeProjectKey}
          activeRepoKey={activeRepoKey}
          loading={loading}
          hideEmpty={hideEmpty}
          harnessFilter={harnessFilter}
          projectFilter={projectFilter}
          collapsed={railCollapsed}
          onSelect={selectSession}
          onSelectProject={selectProject}
          onSelectRepo={selectRepo}
          onViewProjectSessions={viewProjectSessions}
          onClearProjectFilter={clearProjectFilter}
          onModeChange={changeMode}
          onRefresh={refresh}
          onHideEmptyChange={setHideEmpty}
          onHarnessFilterChange={setHarnessFilter}
          onCollapse={collapseRail}
          onAddRepo={addRepo}
          onRemoveRepo={removeExtraRepo}
          locked={exporting}
        />
      )}
      <section className="stage">
        <div className="viewport">
          {!standalone && railCollapsed ? (
            <button
              className="rail-expand"
              onClick={expandRail}
              title={`Show sidebar (${toggleRailShortcut})`}
              aria-label="Show session sidebar"
            >
              <PanelLeftOpen size={15} />
            </button>
          ) : null}
          {view === "tree" ? (
            <TreeScene
              city={city}
              playback={playback}
              selectedPath={selectedPath}
              onSelect={setSelectedPath}
              onCanvasReady={handleCanvasReady}
              sourceColors={sourceColors}
            />
          ) : (
            <CityScene
              city={city}
              playback={playback}
              selectedPath={selectedPath}
              onSelect={setSelectedPath}
              onCanvasReady={handleCanvasReady}
              sourceColors={sourceColors}
              historyColors={historyMode}
              currentTouchPaths={currentTouchPaths}
              historyMaxLog={historyMaxLog}
            />
          )}
          <Hud
            trace={trace}
            city={city}
            view={view}
            editedNow={touchCounts.edited}
            readNow={touchCounts.read}
            seenNow={touchCounts.seen}
            churn={churn}
            onViewChange={setView}
            onSelectFile={setSelectedPath}
            locked={exporting}
          />
          {selectedFile ? (
            <Inspector
              file={selectedFile}
              touch={playback.touchByPath.get(selectedFile.path)}
              history={playback.historyByPath.get(selectedFile.path) ?? []}
              onClose={() => setSelectedPath(undefined)}
              onJumpTo={setCurrentSeq}
            />
          ) : null}
          {buildGate ? (
            <ProjectBuildGate
              root={buildGate.root}
              progress={buildProgress}
              onBuild={() => startBuild(buildGate.key)}
              onCancel={cancelBuild}
            />
          ) : null}
          {!standalone && !loading && railEmpty ? (
            <div className="empty-stage">
              <div className="card">
                <h2>
                  {railMode === "projects"
                    ? "No projects found"
                    : railMode === "repos"
                      ? "Select a repository to replay its git history"
                      : "No sessions found"}
                </h2>
                <p>
                  {railMode === "repos" ? (
                    "Pick a repository from the sidebar, or add one by path."
                  ) : (
                    <>
                      mindwalk scans <code>~/.claude/projects</code> and <code>~/.codex/sessions</code> for agent
                      traces. Run a session there, then refresh.
                    </>
                  )}
                </p>
              </div>
            </div>
          ) : null}
          {loading ? (
            <div className="toast">
              {historyMode
                ? "Reading git history…"
                : railEmpty
                  ? railMode === "projects"
                    ? "Scanning projects…"
                    : railMode === "repos"
                      ? "Scanning repositories…"
                      : "Scanning sessions…"
                  : "Reading trace…"}
            </div>
          ) : null}
          {error ? <div className="toast error">{error}</div> : null}
        </div>
        <Timeline
          trace={trace}
          currentSeq={currentSeq}
          onChange={setCurrentSeq}
          onExport={recordingSupported() ? exportVideo : undefined}
          exporting={exporting}
        />
      </section>
    </main>
  );
}
