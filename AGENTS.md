# AGENTS.md

`mindwalk` is a local visualizer for coding-agent sessions. It supports Claude Code, Codex, and Pi, turning agent session logs plus repository structure into a deterministic 3D "code city" that can be explored in a browser.

## Design

The project has two primary artifacts:

- A normalized trace of what happened during a supported coding-agent session.
- A deterministic citymap of the repository being edited or inspected.

The UI combines those artifacts so users can see how a coding agent moved through a codebase over time. Keep this separation clear: source-specific parsing should not know about rendering, citymap generation should not depend on session playback, and the server should mainly connect data sources to the web client.

Sessions can also be viewed per project. A project is the set of sessions that share a working directory; the server groups them and merges their traces into one chronological, source-tagged trace played against a single citymap. The merge orders every action by wall-clock timestamp so overlapping sessions interleave correctly, and tags each event with a source index. Color is left to the web client: it assigns a distinguishing hue per source index, so the data contract stays free of rendering.

## Architecture

- `cmd/mindwalk` provides the CLI commands: serve a local UI, open a session, build a citymap, or export a trace.
- `internal/adapter` converts supported agent session formats into the shared model. Claude Code, Codex, and Pi each have an adapter; keep every source, current and future, behind its adapter boundary.
- `internal/model` owns the trace and citymap data contracts.
- `internal/aggregate` merges several single-session traces into one chronological, source-tagged project trace. It knows nothing about rendering.
- `internal/citymap` builds deterministic layouts from repository contents.
- `internal/githistory` builds a synthetic trace from a repository's git history — one commit per event, replayed oldest-to-newest — for the `/api/history` view. It needs a git repository, not a session log.
- `internal/server` exposes local APIs and serves the web app: `/api/sessions` and `/api/projects` list each view, and `/api/{sessions,projects}/{key}/{snapshot,trace,citymap}` serve the data. A project snapshot also reports a `build` status: when the project root is not a git repository, building its citymap means walking the whole tree, so the snapshot returns `consent-required` (unbuilt) and the client opts in via `/api/projects/{key}/build`, a Server-Sent-Events stream that reports scan/read progress and is cancelled by disconnecting. Merged project results are memoized by a signature of their member session files. `internal/server/static` holds the embedded frontend assets generated from `web/dist`.
- `web` contains the React, Vite, and Three.js frontend.
- `schema` mirrors the exported JSON contracts.

The normal flow is:

```text
Agent session logs (Claude Code, Codex, or Pi) + repository path
  -> Go adapters and citymap builder
  -> per-session trace, or several merged into a project trace
  -> local Go server APIs
  -> React/Three.js playback UI
```

## Development

- Use `make setup` to install frontend dependencies.
- Use `make test` for the standard validation pass.
- Use `make serve` for local development.
- Use `make build` when refreshing the distributable binary and embedded frontend assets.

Keep Go code formatted with `gofmt`. Do not hand-edit `internal/server/static`; when bundled assets need to change, regenerate them with `make build` (or `make embed-static`). When trace or citymap JSON shapes change, update `schema` and the relevant tests in the same change.
