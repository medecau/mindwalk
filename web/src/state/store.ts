import { create } from "zustand";
import type { CityMap, ProjectMeta, RepoMeta, SessionMeta, Trace } from "../types";
import { loadFilters, saveFilters } from "./filters";

export type SceneView = "tree" | "terrain";
export type RailMode = "sessions" | "projects" | "repos";

interface AppState {
  sessions: SessionMeta[];
  projects: ProjectMeta[];
  // repos discovered from session working directories
  repos: RepoMeta[];
  // repos the user added manually, persisted to localStorage
  extraRepos: RepoMeta[];
  railMode: RailMode;
  activeSessionKey?: string;
  activeProjectKey?: string;
  activeRepoKey?: string;
  trace?: Trace;
  city?: CityMap;
  currentSeq: number;
  selectedPath?: string;
  view: SceneView;
  loading: boolean;
  error?: string;
  hideEmpty: boolean;
  harnessFilter?: string;
  // in Sessions mode, restrict the list to sessions from this working directory;
  // set by the per-project "view sessions" arrow, cleared by the mode toggle
  projectFilter?: string;
  railCollapsed: boolean;
  // true only for the `mindwalk history <repo>` full-screen replay (?history=1
  // boot); unlike historyMode, this never applies to the in-tab Repos playback,
  // so it alone gates hiding the rail
  standalone: boolean;
  // immersive: hide all chrome, leaving only the 3D scene (components stay
  // mounted so playback and shortcuts keep running)
  immersive: boolean;
  historyMode: boolean;
  setView: (view: SceneView) => void;
  setSessions: (sessions: SessionMeta[]) => void;
  setProjects: (projects: ProjectMeta[]) => void;
  setRepos: (repos: RepoMeta[]) => void;
  addExtraRepo: (repo: RepoMeta) => void;
  removeExtraRepo: (key: string) => void;
  setRailMode: (mode: RailMode) => void;
  setActiveSession: (key?: string) => void;
  setActiveProject: (key?: string) => void;
  setActiveRepo: (key?: string) => void;
  setData: (trace: Trace, city: CityMap, atStart?: boolean) => void;
  setHistory: (trace: Trace, city: CityMap) => void;
  setCurrentSeq: (seq: number) => void;
  setSelectedPath: (path?: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error?: string) => void;
  setHideEmpty: (hideEmpty: boolean) => void;
  setHarnessFilter: (harness?: string) => void;
  setProjectFilter: (path?: string) => void;
  setRailCollapsed: (collapsed: boolean) => void;
  setStandalone: (standalone: boolean) => void;
  setImmersive: (immersive: boolean) => void;
}

const initialFilters = loadFilters();

const RAIL_COLLAPSED_KEY = "mindwalk.railCollapsed";
const RAIL_MODE_KEY = "mindwalk.railMode";
const IMMERSIVE_KEY = "mindwalk.immersive";
const EXTRA_REPOS_KEY = "mindwalk.repos";

function loadRailCollapsed(): boolean {
  try {
    return localStorage.getItem(RAIL_COLLAPSED_KEY) === "1";
  } catch {
    return false;
  }
}

// Projects is the default view; a persisted choice still wins on return visits,
// so only first-run / incognito lands on Projects unprompted
function loadRailMode(): RailMode {
  try {
    const stored = localStorage.getItem(RAIL_MODE_KEY);
    return stored === "sessions" || stored === "repos" ? stored : "projects";
  } catch {
    return "projects";
  }
}

function loadImmersive(): boolean {
  try {
    return localStorage.getItem(IMMERSIVE_KEY) === "1";
  } catch {
    return false;
  }
}

function loadExtraRepos(): RepoMeta[] {
  try {
    const raw = localStorage.getItem(EXTRA_REPOS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveExtraRepos(repos: RepoMeta[]) {
  try {
    localStorage.setItem(EXTRA_REPOS_KEY, JSON.stringify(repos));
  } catch {
    // storage unavailable: manually-added repos don't persist across reloads
  }
}

export const useAppStore = create<AppState>((set, get) => ({
  sessions: [],
  projects: [],
  repos: [],
  extraRepos: loadExtraRepos(),
  railMode: loadRailMode(),
  currentSeq: 0,
  view: "tree",
  loading: false,
  hideEmpty: initialFilters.hideEmpty,
  harnessFilter: initialFilters.harness,
  railCollapsed: loadRailCollapsed(),
  standalone: false,
  immersive: loadImmersive(),
  historyMode: false,
  setView: (view) => set({ view }),
  setSessions: (sessions) => set({ sessions }),
  setProjects: (projects) => set({ projects }),
  setRepos: (repos) => set({ repos }),
  addExtraRepo: (repo) => {
    const extraRepos = [...get().extraRepos.filter((r) => r.key !== repo.key), repo];
    set({ extraRepos });
    saveExtraRepos(extraRepos);
  },
  removeExtraRepo: (key) => {
    const extraRepos = get().extraRepos.filter((r) => r.key !== key);
    set({ extraRepos });
    saveExtraRepos(extraRepos);
  },
  setRailMode: (railMode) => {
    set({ railMode });
    try {
      localStorage.setItem(RAIL_MODE_KEY, railMode);
    } catch {
      // storage unavailable: mode resets on next load
    }
  },
  setActiveSession: (activeSessionKey) =>
    set({
      activeSessionKey,
      activeProjectKey: undefined,
      activeRepoKey: undefined,
      trace: undefined,
      city: undefined,
      currentSeq: 0,
      selectedPath: undefined,
      historyMode: false
    }),
  setActiveProject: (activeProjectKey) =>
    set({
      activeProjectKey,
      activeSessionKey: undefined,
      activeRepoKey: undefined,
      trace: undefined,
      city: undefined,
      currentSeq: 0,
      selectedPath: undefined,
      historyMode: false
    }),
  setActiveRepo: (activeRepoKey) =>
    set({
      activeRepoKey,
      activeSessionKey: undefined,
      activeProjectKey: undefined,
      trace: undefined,
      city: undefined,
      currentSeq: 0,
      selectedPath: undefined
    }),
  // sessions park the playhead at the end (default); a merged project view opens
  // at the start so its whole chronology plays forward
  setData: (trace, city, atStart = false) =>
    set({ trace, city, currentSeq: atStart ? 0 : Math.max(0, trace.events.length - 1), historyMode: false }),
  // git history: a full trace+city synthetic session, replayed from commits.
  // Start at the first commit (seq 0) so the repo grows as it plays, rather than
  // opening at the end like a finished session.
  setHistory: (trace, city) => set({ trace, city, currentSeq: 0, selectedPath: undefined, historyMode: true }),
  setCurrentSeq: (currentSeq) => set({ currentSeq }),
  setSelectedPath: (selectedPath) => set({ selectedPath }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setHideEmpty: (hideEmpty) => {
    set({ hideEmpty });
    saveFilters({ hideEmpty, harness: get().harnessFilter });
  },
  setHarnessFilter: (harnessFilter) => {
    set({ harnessFilter });
    saveFilters({ hideEmpty: get().hideEmpty, harness: harnessFilter });
  },
  setProjectFilter: (projectFilter) => set({ projectFilter }),
  setRailCollapsed: (railCollapsed) => {
    set({ railCollapsed });
    try {
      localStorage.setItem(RAIL_COLLAPSED_KEY, railCollapsed ? "1" : "0");
    } catch {
      // storage unavailable: preference resets on next load
    }
  },
  setStandalone: (standalone) => set({ standalone }),
  setImmersive: (immersive) => {
    set({ immersive });
    try {
      localStorage.setItem(IMMERSIVE_KEY, immersive ? "1" : "0");
    } catch {
      // storage unavailable: preference resets on next load
    }
  }
}));
