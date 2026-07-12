import type { CityMap, ProjectBuild, ProjectMeta, SessionMeta, Trace } from "../types";

async function getJSON<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    const detail = (await res.text()).trim();
    throw new Error(detail || `${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

// raw fetch failures read like stack noise in the toast; translate the two
// failure shapes (server gone vs. server said no) into something actionable
export function describeError(err: unknown, doing: string): string {
  if (err instanceof TypeError) {
    return `Can't reach the mindwalk server while ${doing} — is it still running?`;
  }
  const detail = (err instanceof Error ? err.message : String(err)).trim();
  return detail ? `Couldn't finish ${doing}: ${detail}` : `Couldn't finish ${doing}`;
}

export function listSessions(fresh = false): Promise<SessionMeta[]> {
  return getJSON<SessionMeta[]>(fresh ? "/api/sessions?fresh=1" : "/api/sessions");
}

export function listProjects(fresh = false): Promise<ProjectMeta[]> {
  return getJSON<ProjectMeta[]>(fresh ? "/api/projects?fresh=1" : "/api/projects");
}

export function getProjectSnapshot(key: string): Promise<{ trace: Trace; city: CityMap; build?: ProjectBuild }> {
  return getJSON<{ trace: Trace; city: CityMap; build?: ProjectBuild }>(
    `/api/projects/${encodeURIComponent(key)}/snapshot`
  );
}

export interface BuildProgress {
  phase: "scan" | "read";
  done: number;
  total: number;
}

export interface BuildHandle {
  promise: Promise<{ trace: Trace; city: CityMap }>;
  cancel: () => void;
}

// buildProject streams a project citymap build over SSE, reporting progress as it
// scans/reads files. cancel() aborts the request, which cancels the server-side
// walk. Uses fetch + a stream reader (not EventSource) for clean cancellation and
// no auto-reconnect. A user cancel surfaces as an AbortError the caller ignores.
export function buildProject(key: string, onProgress: (p: BuildProgress) => void): BuildHandle {
  const controller = new AbortController();
  const promise = (async () => {
    const res = await fetch(`/api/projects/${encodeURIComponent(key)}/build`, { signal: controller.signal });
    if (!res.ok || !res.body) {
      throw new Error((await res.text()).trim() || `${res.status} ${res.statusText}`);
    }
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let result: { trace: Trace; city: CityMap } | undefined;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      let sep: number;
      // SSE events are separated by a blank line
      while ((sep = buffer.indexOf("\n\n")) >= 0) {
        const frame = buffer.slice(0, sep);
        buffer = buffer.slice(sep + 2);
        const { event, data } = parseSSE(frame);
        if (!data) continue;
        if (event === "progress") onProgress(JSON.parse(data) as BuildProgress);
        else if (event === "done") result = JSON.parse(data) as { trace: Trace; city: CityMap };
        else if (event === "error") throw new Error((JSON.parse(data) as { message: string }).message);
      }
    }
    if (!result) throw new Error("the build ended without a result");
    return result;
  })();
  return { promise, cancel: () => controller.abort() };
}

// isCancel distinguishes a user-initiated cancel from a real failure
export function isCancel(err: unknown): boolean {
  return err instanceof DOMException && err.name === "AbortError";
}

function parseSSE(frame: string): { event: string; data: string } {
  let event = "message";
  const dataLines: string[] = [];
  for (const line of frame.split("\n")) {
    if (line.startsWith("event:")) event = line.slice(6).trim();
    else if (line.startsWith("data:")) dataLines.push(line.slice(5).trim());
  }
  return { event, data: dataLines.join("\n") };
}

export function getTrace(key: string): Promise<Trace> {
  return getJSON<Trace>(`/api/sessions/${encodeURIComponent(key)}/trace`);
}

export function getCityMap(key: string): Promise<CityMap> {
  return getJSON<CityMap>(`/api/sessions/${encodeURIComponent(key)}/citymap`);
}

export function getSessionSnapshot(key: string): Promise<{ trace: Trace; city: CityMap }> {
  return getJSON<{ trace: Trace; city: CityMap }>(`/api/sessions/${encodeURIComponent(key)}/snapshot`);
}

// backs the static full-repo map view: the citymap for a repo, with no session
// or trace attached. Without a repo path the server falls back to its
// configured RepoRoot (the `mindwalk map <repo>` case).
export function getRepoMap(repo?: string): Promise<CityMap> {
  const url = repo ? `/api/repomap?repo=${encodeURIComponent(repo)}` : "/api/repomap";
  return getJSON<CityMap>(url);
}
