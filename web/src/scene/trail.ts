import * as THREE from "three";
import { EMBER } from "./sceneUtils";

const SAMPLES = 14;
const MAX_ARCS = 11; // playback keeps 12 recent targets → at most 11 arcs

// Fixed-capacity trail: the arc soup changes every playback tick, so the
// geometry and material are allocated once and only the attribute contents
// (plus the draw range) are rewritten in place.
//
// Used by TreeScene's radial firefly-tree view, where the walker hops between
// leaves with no shared ground plane to route a street along -- an arc is the
// natural path between two arbitrary points in space. CityScene's flat
// quadtree grid uses StreetRenderer instead (below).
export class TrailRenderer {
  readonly object: THREE.LineSegments;
  private readonly positions: THREE.BufferAttribute;
  private readonly colors: THREE.BufferAttribute;
  private readonly lift: number;
  private readonly arcPoints = Array.from({ length: SAMPLES + 1 }, () => new THREE.Vector3());
  private readonly mid = new THREE.Vector3();
  private readonly curve = new THREE.QuadraticBezierCurve3();
  private readonly color = new THREE.Color();

  constructor(lift: number) {
    this.lift = lift;
    const vertexCount = MAX_ARCS * SAMPLES * 2;
    const geometry = new THREE.BufferGeometry();
    this.positions = new THREE.BufferAttribute(new Float32Array(vertexCount * 3), 3);
    this.positions.setUsage(THREE.DynamicDrawUsage);
    this.colors = new THREE.BufferAttribute(new Float32Array(vertexCount * 3), 3);
    this.colors.setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute("position", this.positions);
    geometry.setAttribute("color", this.colors);
    geometry.setDrawRange(0, 0);
    const material = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: false
    });
    this.object = new THREE.LineSegments(geometry, material);
    this.object.frustumCulled = false;
  }

  // points are the recent fixations, oldest first, y already at arc height.
  // colors, when given, is aligned to points and tints each arc by the session
  // that produced its newer endpoint; omit it for a single ember-colored walker.
  update(points: THREE.Vector3[], colors?: THREE.Color[]) {
    const arcs = Math.min(Math.max(points.length - 1, 0), MAX_ARCS);
    if (arcs === 0) {
      this.object.geometry.setDrawRange(0, 0);
      return;
    }
    const start = points.length - 1 - arcs;
    let v = 0;
    for (let i = 1; i <= arcs; i++) {
      const a = points[start + i - 1];
      const b = points[start + i];
      this.mid.copy(a).lerp(b, 0.5);
      this.mid.y = Math.max(a.y, b.y) + a.distanceTo(b) * 0.22 + this.lift;
      this.curve.v0.copy(a);
      this.curve.v1.copy(this.mid);
      this.curve.v2.copy(b);
      for (let s = 0; s <= SAMPLES; s++) {
        this.curve.getPoint(s / SAMPLES, this.arcPoints[s]);
      }
      const recency = i / arcs;
      const base = colors?.[start + i] ?? EMBER;
      this.color.copy(base).multiplyScalar(0.05 + 0.95 * recency * recency);
      for (let s = 0; s < SAMPLES; s++) {
        const pa = this.arcPoints[s];
        const pb = this.arcPoints[s + 1];
        this.positions.setXYZ(v, pa.x, pa.y, pa.z);
        this.colors.setXYZ(v, this.color.r, this.color.g, this.color.b);
        v++;
        this.positions.setXYZ(v, pb.x, pb.y, pb.z);
        this.colors.setXYZ(v, this.color.r, this.color.g, this.color.b);
        v++;
      }
    }
    this.object.geometry.setDrawRange(0, v);
    this.positions.needsUpdate = true;
    this.colors.needsUpdate = true;
  }
}

const SEGMENTS_PER_PATH = 2; // Manhattan L: start -> corner -> end
const MAX_PATHS = 11; // playback keeps 12 recent targets → at most 11 paths

// Fixed-capacity street renderer for CityScene's flat quadtree grid: ground-
// hugging orthogonal (Manhattan) paths between consecutively touched files,
// in place of TrailRenderer's flying arcs. Same fixed-capacity buffer,
// recency fade, and additive blending as TrailRenderer above.
export class StreetRenderer {
  readonly object: THREE.LineSegments;
  private readonly positions: THREE.BufferAttribute;
  private readonly colors: THREE.BufferAttribute;
  private readonly corner = new THREE.Vector3();
  private readonly color = new THREE.Color();

  constructor() {
    const vertexCount = MAX_PATHS * SEGMENTS_PER_PATH * 2;
    const geometry = new THREE.BufferGeometry();
    this.positions = new THREE.BufferAttribute(new Float32Array(vertexCount * 3), 3);
    this.positions.setUsage(THREE.DynamicDrawUsage);
    this.colors = new THREE.BufferAttribute(new Float32Array(vertexCount * 3), 3);
    this.colors.setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute("position", this.positions);
    geometry.setAttribute("color", this.colors);
    geometry.setDrawRange(0, 0);
    const material = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: false
    });
    this.object = new THREE.LineSegments(geometry, material);
    this.object.frustumCulled = false;
  }

  // points are the recent fixations, oldest first, y already at street level.
  // colors, when given, is aligned to points and tints each street segment by
  // the session that produced its newer endpoint; omit it for a single
  // ember-colored walker.
  update(points: THREE.Vector3[], colors?: THREE.Color[]) {
    const paths = Math.min(Math.max(points.length - 1, 0), MAX_PATHS);
    if (paths === 0) {
      this.object.geometry.setDrawRange(0, 0);
      return;
    }
    const start = points.length - 1 - paths;
    let v = 0;
    for (let i = 1; i <= paths; i++) {
      const idx = start + i;
      const a = points[idx - 1];
      const b = points[idx];
      // alternate the bend corner by index parity so consecutive streets
      // don't all kink the same way -- reads as a street grid, not one hallway
      if (idx % 2 === 0) {
        this.corner.set(b.x, a.y, a.z);
      } else {
        this.corner.set(a.x, a.y, b.z);
      }
      const recency = i / paths;
      const base = colors?.[idx] ?? EMBER;
      this.color.copy(base).multiplyScalar(0.05 + 0.95 * recency * recency);

      this.positions.setXYZ(v, a.x, a.y, a.z);
      this.colors.setXYZ(v, this.color.r, this.color.g, this.color.b);
      v++;
      this.positions.setXYZ(v, this.corner.x, this.corner.y, this.corner.z);
      this.colors.setXYZ(v, this.color.r, this.color.g, this.color.b);
      v++;

      this.positions.setXYZ(v, this.corner.x, this.corner.y, this.corner.z);
      this.colors.setXYZ(v, this.color.r, this.color.g, this.color.b);
      v++;
      this.positions.setXYZ(v, b.x, b.y, b.z);
      this.colors.setXYZ(v, this.color.r, this.color.g, this.color.b);
      v++;
    }
    this.object.geometry.setDrawRange(0, v);
    this.positions.needsUpdate = true;
    this.colors.needsUpdate = true;
  }
}
