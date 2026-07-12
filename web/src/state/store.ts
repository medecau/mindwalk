import { create } from "zustand";
import type { CityMap, ProjectMeta, SessionMeta, Trace } from "../types";
import { loadFilters, saveFilters } from "./filters";

export type SceneView = "tree" | "terrain";
export type RailMode = "sessions" | "projects";

interface AppState {
  sessions: SessionMeta[];
  projects: ProjectMeta[];
  railMode: RailMode;
  activeSessionKey?: string;
  activeProjectKey?: string;
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
  mapOnly: boolean;
  // immersive: hide all chrome, leaving only the 3D scene (components stay
  // mounted so playback and shortcuts keep running)
  immersive: boolean;
  setView: (view: SceneView) => void;
  setSessions: (sessions: SessionMeta[]) => void;
  setProjects: (projects: ProjectMeta[]) => void;
  setRailMode: (mode: RailMode) => void;
  setActiveSession: (key?: string) => void;
  setActiveProject: (key?: string) => void;
  setData: (trace: Trace, city: CityMap, atStart?: boolean) => void;
  setCityOnly: (city: CityMap) => void;
  setCurrentSeq: (seq: number) => void;
  setSelectedPath: (path?: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error?: string) => void;
  setHideEmpty: (hideEmpty: boolean) => void;
  setHarnessFilter: (harness?: string) => void;
  setProjectFilter: (path?: string) => void;
  setRailCollapsed: (collapsed: boolean) => void;
  setImmersive: (immersive: boolean) => void;
}

const initialFilters = loadFilters();

const RAIL_COLLAPSED_KEY = "mindwalk.railCollapsed";
const RAIL_MODE_KEY = "mindwalk.railMode";
const IMMERSIVE_KEY = "mindwalk.immersive";

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
    return localStorage.getItem(RAIL_MODE_KEY) === "sessions" ? "sessions" : "projects";
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

export const useAppStore = create<AppState>((set, get) => ({
  sessions: [],
  projects: [],
  railMode: loadRailMode(),
  currentSeq: 0,
  view: "tree",
  loading: false,
  hideEmpty: initialFilters.hideEmpty,
  harnessFilter: initialFilters.harness,
  railCollapsed: loadRailCollapsed(),
  mapOnly: false,
  immersive: loadImmersive(),
  setView: (view) => set({ view }),
  setSessions: (sessions) => set({ sessions }),
  setProjects: (projects) => set({ projects }),
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
      trace: undefined,
      city: undefined,
      currentSeq: 0,
      selectedPath: undefined
    }),
  setActiveProject: (activeProjectKey) =>
    set({
      activeProjectKey,
      activeSessionKey: undefined,
      trace: undefined,
      city: undefined,
      currentSeq: 0,
      selectedPath: undefined
    }),
  // sessions park the playhead at the end (default); a merged project view opens
  // at the start so its whole chronology plays forward
  setData: (trace, city, atStart = false) =>
    set({ trace, city, currentSeq: atStart ? 0 : Math.max(0, trace.events.length - 1) }),
  // static full-repo map: render the city with no session/trace attached
  setCityOnly: (city) => set({ city, trace: undefined, currentSeq: 0, selectedPath: undefined, mapOnly: true }),
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
  setImmersive: (immersive) => {
    set({ immersive });
    try {
      localStorage.setItem(IMMERSIVE_KEY, immersive ? "1" : "0");
    } catch {
      // storage unavailable: preference resets on next load
    }
  }
}));
