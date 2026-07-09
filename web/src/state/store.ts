import { create } from "zustand";
import type { CityMap, SessionMeta, Trace } from "../types";

export type SceneView = "tree" | "terrain";

interface AppState {
  sessions: SessionMeta[];
  activeSessionId?: string;
  trace?: Trace;
  city?: CityMap;
  currentSeq: number;
  selectedPath?: string;
  view: SceneView;
  loading: boolean;
  error?: string;
  setView: (view: SceneView) => void;
  setSessions: (sessions: SessionMeta[]) => void;
  setActiveSession: (id: string) => void;
  setData: (trace: Trace, city: CityMap) => void;
  setCurrentSeq: (seq: number) => void;
  setSelectedPath: (path?: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error?: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  sessions: [],
  currentSeq: 0,
  view: "tree",
  loading: false,
  setView: (view) => set({ view }),
  setSessions: (sessions) => set({ sessions }),
  setActiveSession: (activeSessionId) => set({ activeSessionId, trace: undefined, city: undefined, currentSeq: 0 }),
  setData: (trace, city) => set({ trace, city, currentSeq: Math.max(0, trace.events.length - 1) }),
  setCurrentSeq: (currentSeq) => set({ currentSeq }),
  setSelectedPath: (selectedPath) => set({ selectedPath }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error })
}));
