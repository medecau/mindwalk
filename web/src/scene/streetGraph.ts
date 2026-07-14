import type { CityFile, Rect } from "../types";

// coordinate-compressed nav grid over the citymap's gutters: every rect edge
// (x and z, from every file) becomes a gridline, so each resulting cell lies
// either wholly inside one tile or wholly in open gutter -- checking a cell's
// center is therefore equivalent to checking any point in it. Cells whose
// center falls inside a tile are blocked; everything else is street.
export interface StreetGraph {
  xs: Float64Array;
  zs: Float64Array;
  // cell-center coordinates, one entry per column/row
  xc: Float64Array;
  zc: Float64Array;
  // blocked[i * nz + j] is truthy iff cell (i, j) sits inside a tile
  blocked: Uint8Array;
  nx: number;
  nz: number;
  // A* edge cost added on a direction change, so routes run straight down a
  // gutter and only bend at intersections instead of staircasing
  turnPenalty: number;
}

// grid cap: a cell count above this makes A* too costly per playback tick;
// callers fall back to the direct L-bend for maps this large
const MAX_CELLS = 90_000;

export function buildStreetGraph(files: CityFile[]): StreetGraph | null {
  if (files.length === 0) return null;

  const xSet = new Set<number>();
  const zSet = new Set<number>();
  for (const file of files) {
    xSet.add(file.rect.x);
    xSet.add(file.rect.x + file.rect.w);
    zSet.add(file.rect.z);
    zSet.add(file.rect.z + file.rect.d);
  }
  const xs = Float64Array.from(Array.from(xSet).sort((a, b) => a - b));
  const zs = Float64Array.from(Array.from(zSet).sort((a, b) => a - b));
  const nx = xs.length - 1;
  const nz = zs.length - 1;
  if (nx <= 0 || nz <= 0 || nx * nz > MAX_CELLS) return null;

  // exact-value lookup: xs/zs were built from these same rect fields, so a
  // rect's own edges recompute to the identical float and always hit
  const xIndex = new Map<number, number>();
  xs.forEach((v, i) => xIndex.set(v, i));
  const zIndex = new Map<number, number>();
  zs.forEach((v, i) => zIndex.set(v, i));

  const blocked = new Uint8Array(nx * nz);
  for (const file of files) {
    const i0 = xIndex.get(file.rect.x)!;
    const i1 = xIndex.get(file.rect.x + file.rect.w)!;
    const j0 = zIndex.get(file.rect.z)!;
    const j1 = zIndex.get(file.rect.z + file.rect.d)!;
    for (let i = i0; i < i1; i++) {
      for (let j = j0; j < j1; j++) {
        blocked[i * nz + j] = 1;
      }
    }
  }

  const xc = new Float64Array(nx);
  for (let i = 0; i < nx; i++) xc[i] = (xs[i] + xs[i + 1]) / 2;
  const zc = new Float64Array(nz);
  for (let j = 0; j < nz; j++) zc[j] = (zs[j] + zs[j + 1]) / 2;

  const avgCell = ((xs[nx] - xs[0]) / nx + (zs[nz] - zs[0]) / nz) / 2;
  const turnPenalty = avgCell * 0.5;

  return { xs, zs, xc, zc, blocked, nx, nz, turnPenalty };
}

export interface RoutePoint {
  x: number;
  z: number;
}

// A* over the free (unblocked) cells, 4-connected, from the cell containing
// from's center to the cell containing to's center. Start/goal cells are
// forced passable since a file's own footprint is otherwise blocked. Returns
// a simplified rect-space polyline, or null if start === goal, the graph is
// too large to have been built, or the two cells aren't connected through
// open gutter.
export function routeStreet(g: StreetGraph | null, from: Rect, to: Rect): RoutePoint[] | null {
  if (!g) return null;
  const start = locateCell(g, from);
  const goal = locateCell(g, to);
  if (start.i === goal.i && start.j === goal.j) return null;

  const { nx, nz, blocked, xc, zc, turnPenalty } = g;
  const startKey = start.i * nz + start.j;
  const goalKey = goal.i * nz + goal.j;
  const goalX = xc[goal.i];
  const goalZ = zc[goal.j];
  // Manhattan distance in world units: admissible since it's the exact cost
  // of the direct route ignoring blockage and turn penalty (both only add cost)
  const heuristic = (i: number, j: number) => Math.abs(xc[i] - goalX) + Math.abs(zc[j] - goalZ);

  const size = nx * nz;
  const gScore = new Float64Array(size).fill(Infinity);
  const cameFrom = new Int32Array(size).fill(-1);
  const closed = new Uint8Array(size);
  gScore[startKey] = 0;

  const open = new MinHeap();
  open.push(startKey, heuristic(start.i, start.j));

  const DELTAS: [number, number][] = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];

  while (open.size > 0) {
    const curKey = open.pop()!;
    if (closed[curKey]) continue;
    closed[curKey] = 1;
    if (curKey === goalKey) break;

    const ci = Math.floor(curKey / nz);
    const cj = curKey % nz;
    const prevKey = cameFrom[curKey];
    const prevDi = prevKey >= 0 ? ci - Math.floor(prevKey / nz) : 0;
    const prevDj = prevKey >= 0 ? cj - (prevKey % nz) : 0;

    for (const [di, dj] of DELTAS) {
      const ni = ci + di;
      const nj = cj + dj;
      if (ni < 0 || ni >= nx || nj < 0 || nj >= nz) continue;
      const nKey = ni * nz + nj;
      if (closed[nKey]) continue;
      if (blocked[nKey] && nKey !== startKey && nKey !== goalKey) continue;

      let stepCost = di !== 0 ? Math.abs(xc[ni] - xc[ci]) : Math.abs(zc[nj] - zc[cj]);
      if (prevKey >= 0 && (di !== prevDi || dj !== prevDj)) stepCost += turnPenalty;

      const tentative = gScore[curKey] + stepCost;
      if (tentative < gScore[nKey]) {
        gScore[nKey] = tentative;
        cameFrom[nKey] = curKey;
        open.push(nKey, tentative + heuristic(ni, nj));
      }
    }
  }

  if (gScore[goalKey] === Infinity) return null;

  const cells: RoutePoint[] = [];
  let k = goalKey;
  for (;;) {
    const i = Math.floor(k / nz);
    const j = k % nz;
    cells.push({ x: xc[i], z: zc[j] });
    if (k === startKey) break;
    k = cameFrom[k];
  }
  cells.reverse();
  return simplifyCollinear(cells);
}

function locateCell(g: StreetGraph, rect: Rect): { i: number; j: number } {
  const cx = rect.x + rect.w / 2;
  const cz = rect.z + rect.d / 2;
  return { i: locateIndex(g.xs, cx), j: locateIndex(g.zs, cz) };
}

// largest i with edges[i] <= v, clamped to a valid cell index
function locateIndex(edges: Float64Array, v: number): number {
  let lo = 0;
  let hi = edges.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (edges[mid] <= v) lo = mid;
    else hi = mid - 1;
  }
  return Math.min(lo, edges.length - 2);
}

// drop interior cell-centers where the path runs straight through, keeping
// only the endpoints and the cells where the route actually turns
function simplifyCollinear(points: RoutePoint[]): RoutePoint[] {
  if (points.length <= 2) return points;
  const out: RoutePoint[] = [points[0]];
  for (let i = 1; i < points.length - 1; i++) {
    const a = points[i - 1];
    const b = points[i];
    const c = points[i + 1];
    const inDx = Math.sign(b.x - a.x);
    const inDz = Math.sign(b.z - a.z);
    const outDx = Math.sign(c.x - b.x);
    const outDz = Math.sign(c.z - b.z);
    if (inDx !== outDx || inDz !== outDz) out.push(b);
  }
  out.push(points[points.length - 1]);
  return out;
}

// binary min-heap keyed by priority (f-score); duplicate keys are fine since
// routeStreet skips already-closed cells on pop (lazy deletion)
class MinHeap {
  private keys: number[] = [];
  private pri: number[] = [];

  get size(): number {
    return this.keys.length;
  }

  push(key: number, priority: number) {
    this.keys.push(key);
    this.pri.push(priority);
    let i = this.keys.length - 1;
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (this.pri[parent] <= this.pri[i]) break;
      this.swap(i, parent);
      i = parent;
    }
  }

  pop(): number | undefined {
    if (this.keys.length === 0) return undefined;
    const top = this.keys[0];
    const lastKey = this.keys.pop()!;
    const lastPri = this.pri.pop()!;
    if (this.keys.length > 0) {
      this.keys[0] = lastKey;
      this.pri[0] = lastPri;
      let i = 0;
      const n = this.keys.length;
      for (;;) {
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        let smallest = i;
        if (l < n && this.pri[l] < this.pri[smallest]) smallest = l;
        if (r < n && this.pri[r] < this.pri[smallest]) smallest = r;
        if (smallest === i) break;
        this.swap(i, smallest);
        i = smallest;
      }
    }
    return top;
  }

  private swap(a: number, b: number) {
    [this.keys[a], this.keys[b]] = [this.keys[b], this.keys[a]];
    [this.pri[a], this.pri[b]] = [this.pri[b], this.pri[a]];
  }
}
