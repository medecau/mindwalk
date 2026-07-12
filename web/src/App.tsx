import { PanelLeftOpen } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  describeError,
  getProjectSnapshot,
  getRepoMap,
  getSessionSnapshot,
  listProjects,
  listSessions
} from "./api/client";
import { PlaybackEngine } from "./playback/reducer";
import { downloadBlob, recordingSupported, recordPlayback } from "./playback/recorder";
import { CityScene } from "./scene/CityScene";
import { sessionColorHex } from "./scene/sessionColors";
import { TreeScene } from "./scene/TreeScene";
import { sessionVisible } from "./state/filters";
import { useAppStore } from "./state/store";
import { Hud } from "./ui/Hud";
import { Inspector } from "./ui/Inspector";
import { SessionRail } from "./ui/SessionRail";
import { toggleRailShortcut } from "./ui/shortcuts";
import { Timeline } from "./ui/Timeline";
import "./styles.css";

export default function App() {
  const {
    sessions,
    projects,
    railMode,
    activeSessionKey,
    activeProjectKey,
    trace,
    city,
    currentSeq,
    selectedPath,
    view,
    loading,
    error,
    hideEmpty,
    harnessFilter,
    railCollapsed,
    mapOnly,
    setView,
    setSessions,
    setProjects,
    setRailMode,
    setActiveSession,
    setActiveProject,
    setData,
    setCityOnly,
    setCurrentSeq,
    setSelectedPath,
    setLoading,
    setError,
    setHideEmpty,
    setHarnessFilter,
    setRailCollapsed
  } = useAppStore();
  const urlSessionConsumed = useRef(false);
  const scanGeneration = useRef(0);
  const projectScanGeneration = useRef(0);
  const loadGeneration = useRef(0);
  const manualRefreshInFlight = useRef(false);
  const pendingLoads = useRef(0);
  const activeSessionKeyRef = useRef(activeSessionKey);
  activeSessionKeyRef.current = activeSessionKey;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [exporting, setExporting] = useState(false);
  const activeProjectKeyRef = useRef(activeProjectKey);
  activeProjectKeyRef.current = activeProjectKey;

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

  const loadSession = useCallback(async (key: string) => {
    const generation = ++loadGeneration.current;
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
  }, [beginLoading, endLoading, setData, setError, setSelectedPath]);

  const loadProject = useCallback(async (key: string) => {
    const generation = ++loadGeneration.current;
    beginLoading();
    setError(undefined);
    try {
      const { trace: nextTrace, city: nextCity } = await getProjectSnapshot(key);
      if (generation !== loadGeneration.current || activeProjectKeyRef.current !== key) return;
      setData(nextTrace, nextCity);
      setSelectedPath(undefined);
    } catch (err) {
      if (generation === loadGeneration.current && activeProjectKeyRef.current === key) {
        setError(describeError(err, "loading the project"));
      }
    } finally {
      endLoading();
    }
  }, [beginLoading, endLoading, setData, setError, setSelectedPath]);

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
      // everything, the newest session still beats a blank stage
      const fallback = (
        data.find((session) => sessionVisible(session, { hideEmpty, harness: harnessFilter })) ?? data[0]
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

  const loadRepoMap = useCallback(async (repo?: string) => {
    beginLoading();
    setError(undefined);
    try {
      const city = await getRepoMap(repo);
      setCityOnly(city);
    } catch (err) {
      setError(describeError(err, "loading the repository map"));
    } finally {
      endLoading();
    }
  }, [beginLoading, endLoading, setCityOnly, setError]);

  // open the static map for a repo in a new tab so the running session stays put
  const openMap = useCallback((repo?: string) => {
    const url = repo ? `/?map=1&repo=${encodeURIComponent(repo)}` : "/?map=1";
    window.open(url, "_blank", "noopener");
  }, []);

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

  const refresh = useCallback(() => {
    if (manualRefreshInFlight.current) return;
    manualRefreshInFlight.current = true;
    const run = useAppStore.getState().railMode === "projects" ? scanProjects(true) : scan(true);
    void run.finally(() => {
      manualRefreshInFlight.current = false;
    });
  }, [scan, scanProjects]);

  const changeMode = useCallback((mode: "sessions" | "projects") => {
    if (mode === useAppStore.getState().railMode) return;
    setRailMode(mode);
    // clear the outgoing mode's selection so the stage never keeps a stale
    // scene under the new rail (e.g. switching into a mode with no items)
    if (mode === "projects") {
      activeProjectKeyRef.current = undefined;
      setActiveProject(undefined);
      void scanProjects(false);
    } else {
      activeSessionKeyRef.current = undefined;
      setActiveSession(undefined);
      void scan(false);
    }
  }, [scan, scanProjects, setRailMode, setActiveProject, setActiveSession]);

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

  useEffect(() => {
    const params = new URL(window.location.href).searchParams;
    if (params.get("map") === "1") {
      void loadRepoMap(params.get("repo") ?? undefined);
    } else if (useAppStore.getState().railMode === "projects") {
      void scanProjects(false);
    } else {
      void scan(false);
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
  // loaded project is never covered by a "No sessions found" overlay
  const railEmpty = railMode === "projects" ? projects.length === 0 : sessions.length === 0;

  return (
    <main className={mapOnly ? "app-frame rail-collapsed" : railCollapsed ? "app-frame rail-collapsed" : "app-frame"}>
      {mapOnly ? null : (
        <SessionRail
          sessions={sessions}
          projects={projects}
          mode={railMode}
          activeKey={activeSessionKey}
          activeProjectKey={activeProjectKey}
          loading={loading}
          hideEmpty={hideEmpty}
          harnessFilter={harnessFilter}
          collapsed={railCollapsed}
          onSelect={selectSession}
          onSelectProject={selectProject}
          onModeChange={changeMode}
          onRefresh={refresh}
          onHideEmptyChange={setHideEmpty}
          onHarnessFilterChange={setHarnessFilter}
          onCollapse={collapseRail}
          onOpenMap={openMap}
          locked={exporting}
        />
      )}
      <section className="stage">
        <div className="viewport">
          {!mapOnly && railCollapsed ? (
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
              locHeights={mapOnly}
              sourceColors={sourceColors}
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
            onOpenMap={openMap}
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
          {!mapOnly && !loading && railEmpty ? (
            <div className="empty-stage">
              <div className="card">
                <h2>{railMode === "projects" ? "No projects found" : "No sessions found"}</h2>
                <p>
                  mindwalk scans <code>~/.claude/projects</code> and <code>~/.codex/sessions</code> for agent
                  traces. Run a session there, then refresh.
                </p>
              </div>
            </div>
          ) : null}
          {loading ? (
            <div className="toast">
              {mapOnly
                ? "Building the map…"
                : railEmpty
                  ? railMode === "projects"
                    ? "Scanning projects…"
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
