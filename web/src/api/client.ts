import type { CityMap, SessionMeta, Trace } from "../types";

async function getJSON<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(await res.text());
  }
  return res.json() as Promise<T>;
}

export function listSessions(): Promise<SessionMeta[]> {
  return getJSON<SessionMeta[]>("/api/sessions");
}

export function getTrace(id: string): Promise<Trace> {
  return getJSON<Trace>(`/api/sessions/${encodeURIComponent(id)}/trace`);
}

export function getCityMap(id: string): Promise<CityMap> {
  return getJSON<CityMap>(`/api/sessions/${encodeURIComponent(id)}/citymap`);
}
