import * as THREE from "three";
import { LineSegments2 } from "three/examples/jsm/lines/LineSegments2.js";
import { LineSegmentsGeometry } from "three/examples/jsm/lines/LineSegmentsGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
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

// upper bound on total rendered segments across all hops; simplified routes
// keep segment counts modest, so real playback stays well under this
const MAX_SEGMENTS = 512;
// street width in CSS pixels (worldUnits: false) -- LineBasicMaterial caps
// linewidth at 1px on WebGL everywhere but macOS/ANGLE, so fat lines need the
// instanced-quad approach (LineSegments2 + LineMaterial) to render reliably.
const STREET_LINEWIDTH = 2.6;

export interface StreetPath {
  // a routed (or L-bend fallback) polyline in world space, oldest-to-newest
  // endpoint, y already at street level
  points: THREE.Vector3[];
  // this hop's recency-faded color; every segment of the hop shares it
  color: THREE.Color;
}

// Fixed-capacity street renderer for CityScene's flat quadtree grid: ground-
// hugging routed paths that thread the gutters between consecutively touched
// files, in place of TrailRenderer's flying arcs. Same recency fade and
// additive blending as TrailRenderer above, but built on the fat-line
// instanced-quad path (LineSegments2) instead of plain LineSegments, since a
// 1px-capped street reads as a hairline seam and z-fights with the tiles it
// rides over.
export class StreetRenderer {
  readonly object: LineSegments2;
  private readonly geometry: LineSegmentsGeometry;
  private readonly material: LineMaterial;
  // scratch buffers sized for MAX_SEGMENTS; each update() writes a prefix and
  // hands setPositions/setColors a subarray view over just that prefix, so no
  // per-tick allocation beyond the (tiny) InstancedInterleavedBuffer wrapper
  // setPositions/setColors themselves construct.
  private readonly positions = new Float32Array(MAX_SEGMENTS * 6);
  private readonly colors = new Float32Array(MAX_SEGMENTS * 6);

  constructor() {
    this.geometry = new LineSegmentsGeometry();
    this.material = new LineMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      worldUnits: false,
      linewidth: STREET_LINEWIDTH
    });
    this.object = new LineSegments2(this.geometry, this.material);
    this.object.frustumCulled = false;
    this.object.visible = false;
  }

  // LineMaterial's line thickness is computed in the vertex shader from a
  // resolution uniform (CSS-pixel linewidth needs the viewport size to
  // convert to clip space); the caller must call this on init and again on
  // every resize, or the street width silently drifts with the canvas size.
  setResolution(width: number, height: number) {
    this.material.resolution.set(width, height);
  }

  // paths are the recent hops, oldest first, each a routed polyline with its
  // own recency color. If the total segment count exceeds MAX_SEGMENTS,
  // oldest hops are dropped first -- mirrors the old "keep the newest paths".
  update(paths: StreetPath[]) {
    let firstIdx = paths.length;
    let total = 0;
    for (let i = paths.length - 1; i >= 0; i--) {
      const segs = Math.max(paths[i].points.length - 1, 0);
      if (total + segs > MAX_SEGMENTS) break;
      total += segs;
      firstIdx = i;
    }
    if (total === 0) {
      this.object.visible = false;
      return;
    }
    let v = 0;
    for (let i = firstIdx; i < paths.length; i++) {
      const { points, color } = paths[i];
      for (let s = 0; s < points.length - 1; s++) {
        v = this.writeSegment(v, points[s], points[s + 1], color);
      }
    }
    this.geometry.setPositions(this.positions.subarray(0, v));
    this.geometry.setColors(this.colors.subarray(0, v));
    this.object.visible = true;
  }

  private writeSegment(v: number, a: THREE.Vector3, b: THREE.Vector3, color: THREE.Color): number {
    this.positions[v] = a.x;
    this.positions[v + 1] = a.y;
    this.positions[v + 2] = a.z;
    this.positions[v + 3] = b.x;
    this.positions[v + 4] = b.y;
    this.positions[v + 5] = b.z;
    this.colors[v] = color.r;
    this.colors[v + 1] = color.g;
    this.colors[v + 2] = color.b;
    this.colors[v + 3] = color.r;
    this.colors[v + 4] = color.g;
    this.colors[v + 5] = color.b;
    return v + 6;
  }
}
