import { FolderSearch, X } from "lucide-react";
import type { BuildProgress } from "../api/client";

interface ProjectBuildGateProps {
  root: string;
  // null while awaiting consent; a progress object once a build is streaming
  progress: BuildProgress | null;
  onBuild: () => void;
  onCancel: () => void;
}

// Shown when a project's root is not a git repository: building its map means
// scanning the whole directory tree, which can be slow, so we explain that and
// let the user opt in — then stream live progress with a cancel.
export function ProjectBuildGate({ root, progress, onBuild, onCancel }: ProjectBuildGateProps) {
  const building = progress !== null;
  const pct = progress && progress.total > 0 ? Math.min(100, Math.round((progress.done / progress.total) * 100)) : 0;
  return (
    <div className="project-gate">
      <div className="card">
        <div className="project-gate-icon" aria-hidden>
          <FolderSearch size={20} />
        </div>
        <h2>Not a git repository</h2>
        <p>
          <code>{root}</code> isn&rsquo;t a git repository, so building its map means scanning every file under it.
          That can be slow for a large directory.
        </p>
        {building ? (
          <div className="project-gate-progress" role="status" aria-live="polite">
            <div className="project-gate-count">
              {progress.phase === "scan"
                ? `Scanning… ${progress.done.toLocaleString()} files`
                : `Reading ${progress.done.toLocaleString()} / ${progress.total.toLocaleString()} files`}
            </div>
            <div className="project-gate-bar" data-indeterminate={progress.phase === "scan" ? "true" : undefined}>
              <div className="project-gate-bar-fill" style={{ width: `${pct}%` }} />
            </div>
            <button className="project-gate-btn ghost" onClick={onCancel}>
              <X size={14} aria-hidden /> Cancel
            </button>
          </div>
        ) : (
          <button className="project-gate-btn" onClick={onBuild}>
            Build map
          </button>
        )}
      </div>
    </div>
  );
}
