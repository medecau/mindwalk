import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { touchWord, type CityFile, type CityMap, type Touch } from "../types";
import type { FilePlayback } from "../playback/reducer";
import { DirLabelSet } from "./dirLabels";
import {
  disposeGroup,
  EMBER,
  ensureVisible,
  fitDistance,
  prefersReducedMotion,
  SceneTip,
  SKY,
  touchColors
} from "./sceneUtils";
import { fireflyTexture } from "./textures";
import { StreetRenderer } from "./trail";

interface CitySceneProps {
  city?: CityMap;
  playback: FilePlayback;
  selectedPath?: string;
  onSelect: (path?: string) => void;
  onCanvasReady?: (canvas: HTMLCanvasElement | null) => void;
  // one hex color per source session; present only in a merged project view,
  // where the walker (trail + firefly) is tinted by whose action it plays
  sourceColors?: string[];
  // git history mode: color each touched file by the size (churn) of the commit
  // that last touched it, on the LOC tier ramp
  historyColors?: boolean;
  // git history mode: paths touched by the commit at the current playhead —
  // drawn blue to mark whose turn it is
  currentTouchPaths?: Set<string>;
  // git history mode: log2 of the largest single-commit file churn across the
  // whole history — the fixed normalization ceiling for the LOC color ramp, so
  // a file's tier doesn't drift as the playhead moves
  historyMaxLog?: number;
}

// Attention terrain: the map is a flat dark plain (fog of war); height is
// earned by attention — touch depth × revisits — so mountains grow where the
// walker lingered. Light is data: only touched terrain gets bright color.
const colors: Record<Touch | "unvisited" | "ghost" | "selected", THREE.Color> = {
  unvisited: new THREE.Color("#5b6372"),
  ghost: new THREE.Color("#404551"),
  ...touchColors
};

const TILE_H = 0.14;
// footprint floor for both tiles and columns: a rect this size or larger
// renders at its real dimensions; anything smaller is inflated up to this
// minimum so slivers stay clickable/visible. Columns and tiles share this
// floor (and columns carry no extra width beyond it) so a column can never
// render wider than the tile underneath it -- the old 0.45 floor plus a
// column-only +0.04 pad inflated dense, sub-0.45 rects until they overlapped
// their neighbors, z-fighting on the coplanar overlap.
const MIN_TILE_DIM = 0.18;
// attention columns sink this far below the tile top instead of butting
// exactly against it -- two coplanar opaque faces (column base, tile top)
// would otherwise z-fight. The column's rendered top is unchanged.
const COLUMN_SINK = 0.05;
// ground-level street path height: just above the flat tiles and below the
// low static building tops, so streets glide over untouched tiles and duck
// under the columns of touched files.
const STREET_Y = TILE_H + 0.06;
const LABEL_Y = 2.4;
// the inspector docks on the right; selection pans the camera clear of it
const INSPECTOR_RESERVED_PX = 348;

// glow: a brightness multiplier applied to a touched column's color, pushed
// above 1.0 on the toneMapped:false MeshBasicMaterial so it renders
// unclamped-bright against the dark plain -- attention reads as light, not
// height. Gently scaled by revisits and capped so a heavily-revisited file
// doesn't blow out to solid white.
function attentionGlow(touch: Touch, visits: number): number {
  const base = touch === "edit" ? 2.4 : touch === "read" ? 1.6 : 1.05;
  return Math.min(3, base * (1 + 0.15 * Math.log2(Math.max(visits, 1))));
}

// static map height: normalized lines of code, log-scaled so a few huge files
// don't flatten everything else. maxLog is log2(largest file's lines).
const LOC_MIN_H = 0.35;
const LOC_MAX_H = 2.4;
// gamma > 1 exaggerates the top end: small files stay low, big files spike, so
// the skyline reads as a city (towers vs shacks) instead of a uniform plateau
const LOC_HEIGHT_GAMMA = 2.2;
// normalized 0..1 position of a file by lines of code (log-scaled)
function locFraction(lines: number, maxLog: number): number {
  if (maxLog <= 0) return 0;
  return Math.min(1, Math.log2(Math.max(lines, 1)) / maxLog);
}
function locHeight(t: number): number {
  return LOC_MIN_H + Math.pow(t, LOC_HEIGHT_GAMMA) * (LOC_MAX_H - LOC_MIN_H);
}

// LOC tier ramp: small files stay grey, then warm up through orange and purple
// to red for the largest files. Stops are interpolated so the terrain reads as
// a continuous gradient rather than hard bands.
const LOC_RAMP: { at: number; color: THREE.Color }[] = [
  { at: 0.0, color: new THREE.Color("#5b6372") }, // grey (matches unvisited)
  { at: 0.35, color: new THREE.Color("#e0894f") }, // orange
  { at: 0.7, color: new THREE.Color("#9a6bd8") }, // purple
  { at: 1.0, color: new THREE.Color("#e0524f") } // red
];
function locColor(t: number): THREE.Color {
  for (let i = 1; i < LOC_RAMP.length; i++) {
    if (t <= LOC_RAMP[i].at) {
      const lo = LOC_RAMP[i - 1];
      const hi = LOC_RAMP[i];
      const span = hi.at - lo.at;
      const k = span > 0 ? (t - lo.at) / span : 0;
      return lo.color.clone().lerp(hi.color, k);
    }
  }
  return LOC_RAMP[LOC_RAMP.length - 1].color.clone();
}

// git history: files touched by the commit at the current playhead glow blue,
// marking whose turn it is this frame
const HISTORY_BLUE = new THREE.Color("#4ea3e0");

interface TerrainSlot {
  fileId: number;
  target: number;
  color: THREE.Color;
}

export function CityScene({
  city,
  playback,
  selectedPath,
  onSelect,
  onCanvasReady,
  sourceColors,
  historyColors,
  currentTouchPaths,
  historyMaxLog = 0
}: CitySceneProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const tileMeshRef = useRef<THREE.InstancedMesh | null>(null);
  const terrainMeshRef = useRef<THREE.InstancedMesh | null>(null);
  const filesRef = useRef<CityFile[]>([]);
  const slotsRef = useRef<TerrainSlot[]>([]);
  const heightsRef = useRef<Map<number, number>>(new Map());
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cityGroupRef = useRef<THREE.Group | null>(null);
  const trailRef = useRef<StreetRenderer | null>(null);
  const fireflyRef = useRef<THREE.Sprite | null>(null);
  const labelSetRef = useRef<DirLabelSet | null>(null);
  const frameRef = useRef<number | null>(null);
  const reducedRef = useRef(false);
  const boundsRef = useRef({ cx: 0, cz: 0, size: 120 });
  // handlers live in the mount effect; they read playback through this ref
  const playbackRef = useRef(playback);
  playbackRef.current = playback;
  // camera fit deferred while the viewport reports no size (hidden pane,
  // background tab); resize retries it instead of leaving the camera at NaN
  const fitPendingRef = useRef<(() => boolean) | null>(null);

  // per-source THREE colors for the walker; undefined outside a project view
  const sessionColors = useMemo(
    () => (sourceColors ? sourceColors.map((hex) => new THREE.Color(hex)) : undefined),
    [sourceColors]
  );

  const bounds = useMemo(() => {
    if (!city || city.files.length === 0) return { cx: 0, cz: 0, size: 120, halfW: 60, halfD: 60 };
    let minX = Infinity;
    let maxX = -Infinity;
    let minZ = Infinity;
    let maxZ = -Infinity;
    for (const file of city.files) {
      minX = Math.min(minX, file.rect.x);
      maxX = Math.max(maxX, file.rect.x + file.rect.w);
      minZ = Math.min(minZ, file.rect.z);
      maxZ = Math.max(maxZ, file.rect.z + file.rect.d);
    }
    return {
      cx: (minX + maxX) / 2,
      cz: (minZ + maxZ) / 2,
      size: Math.max(maxX - minX, maxZ - minZ, 60),
      halfW: (maxX - minX) / 2,
      halfD: (maxZ - minZ) / 2
    };
  }, [city]);

  // fixed height-ramp ceiling = log2 of the largest file's lines across the
  // whole city. Computed once per city so a file's height is static -- it
  // never grows or shrinks as playback or attention change, only as of first
  // touch (fog of war still gates whether a column exists at all).
  const staticMaxLog = useMemo(() => {
    if (!city) return 0;
    let maxLines = 1;
    for (const file of city.files) {
      maxLines = Math.max(maxLines, file.lines);
    }
    return Math.log2(maxLines);
  }, [city]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const reduced = prefersReducedMotion();
    reducedRef.current = reduced;

    const scene = new THREE.Scene();
    scene.background = SKY;
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(38, host.clientWidth / host.clientHeight || 1, 0.1, 2400);
    camera.position.set(70, 130, 100);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(host.clientWidth, host.clientHeight);
    rendererRef.current = renderer;
    host.appendChild(renderer.domElement);
    onCanvasReady?.(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = !reduced;
    controls.dampingFactor = 0.08;
    controls.maxPolarAngle = Math.PI * 0.44;
    // the god view drifts slowly around the terrain until the user takes over
    controls.autoRotate = !reduced;
    controls.autoRotateSpeed = -0.5;
    const tip = new SceneTip(host);
    controls.addEventListener("start", () => {
      controls.autoRotate = false;
      tip.hide();
    });
    controlsRef.current = controls;

    const sky = new THREE.HemisphereLight("#66779b", "#161922", 1.7);
    scene.add(sky);
    const moon = new THREE.DirectionalLight("#b6c5de", 1.1);
    moon.position.set(-60, 120, -40);
    scene.add(moon);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const pickFile = (event: PointerEvent): CityFile | undefined => {
      if (!cameraRef.current || !rendererRef.current) return undefined;
      const rect = rendererRef.current.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, cameraRef.current);
      const targets = [terrainMeshRef.current, tileMeshRef.current].filter(Boolean) as THREE.Object3D[];
      const hit = raycaster.intersectObjects(targets, false)[0];
      if (!hit || hit.instanceId === undefined) return undefined;
      if (hit.object === terrainMeshRef.current) {
        const slot = slotsRef.current[hit.instanceId];
        return slot ? filesRef.current[slot.fileId] : undefined;
      }
      return filesRef.current[hit.instanceId];
    };

    let downAt: { x: number; y: number } | null = null;
    const onPointerDown = (event: PointerEvent) => {
      downAt = { x: event.clientX, y: event.clientY };
    };
    const onPointerUp = (event: PointerEvent) => {
      if (!downAt) return;
      const moved = Math.hypot(event.clientX - downAt.x, event.clientY - downAt.y);
      downAt = null;
      if (moved > 5) return;
      onSelect(pickFile(event)?.path);
    };
    // hover: cursor + one-line readout, throttled to one raycast per frame
    let hoverRaf = 0;
    const onPointerMove = (event: PointerEvent) => {
      if (downAt) {
        tip.hide();
        return;
      }
      if (hoverRaf) return;
      hoverRaf = requestAnimationFrame(() => {
        hoverRaf = 0;
        const file = pickFile(event);
        renderer.domElement.style.cursor = file ? "pointer" : "";
        if (!file) {
          tip.hide();
          return;
        }
        const snapshot = playbackRef.current;
        const touch = snapshot.touchByPath.get(file.path);
        const visits = snapshot.visitsByFile.get(file.id) ?? 0;
        const meta = touch
          ? `${touchWord(touch)} · ${visits} visit${visits === 1 ? "" : "s"}`
          : touchWord(undefined);
        tip.show(file.path, file.ghost ? `${meta} · ghost` : meta, event.clientX, event.clientY);
      });
    };
    const onPointerLeave = () => {
      tip.hide();
      renderer.domElement.style.cursor = "";
    };
    renderer.domElement.addEventListener("pointerdown", onPointerDown);
    renderer.domElement.addEventListener("pointerup", onPointerUp);
    renderer.domElement.addEventListener("pointermove", onPointerMove);
    renderer.domElement.addEventListener("pointerleave", onPointerLeave);

    const resize = () => {
      if (!hostRef.current) return;
      const w = hostRef.current.clientWidth;
      const h = hostRef.current.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      // LineMaterial derives street thickness from this uniform; stale
      // resolution after a resize renders streets at the wrong pixel width
      trailRef.current?.setResolution(w, h);
      if (fitPendingRef.current?.()) fitPendingRef.current = null;
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);

    const clock = new THREE.Clock();
    const matrix = new THREE.Matrix4();
    const quaternion = new THREE.Quaternion();
    const render = () => {
      controls.update();
      labelSetRef.current?.updateTargets(camera, renderer.domElement.clientWidth, renderer.domElement.clientHeight);
      labelSetRef.current?.ease(reducedRef.current);

      // grow / shrink terrain columns toward their attention targets
      const terrain = terrainMeshRef.current;
      const slots = slotsRef.current;
      const heights = heightsRef.current;
      if (terrain && slots.length > 0) {
        let moving = false;
        for (let i = 0; i < slots.length; i++) {
          const slot = slots[i];
          const file = filesRef.current[slot.fileId];
          if (!file) continue;
          let cur = heights.get(slot.fileId) ?? 0;
          const diff = slot.target - cur;
          if (Math.abs(diff) > 0.015) {
            cur = reducedRef.current ? slot.target : cur + diff * 0.13;
            heights.set(slot.fileId, cur);
            moving = true;
          } else if (cur !== slot.target) {
            heights.set(slot.fileId, slot.target);
            cur = slot.target;
            moving = true;
          }
          const sx = Math.max(file.rect.w, MIN_TILE_DIM);
          const sz = Math.max(file.rect.d, MIN_TILE_DIM);
          // column base sits COLUMN_SINK below the tile top (into the tile,
          // not on top of it); the top stays at TILE_H + cur, unchanged.
          const h = Math.max(cur, 0.02) + COLUMN_SINK;
          matrix.compose(
            new THREE.Vector3(
              file.rect.x + file.rect.w / 2 - boundsRef.current.cx,
              TILE_H - COLUMN_SINK + h / 2,
              file.rect.z + file.rect.d / 2 - boundsRef.current.cz
            ),
            quaternion,
            new THREE.Vector3(sx, h, sz)
          );
          terrain.setMatrixAt(i, matrix);
        }
        if (moving) terrain.instanceMatrix.needsUpdate = true;
      }

      const firefly = fireflyRef.current;
      if (firefly?.visible) {
        const t = clock.getElapsedTime();
        const base = firefly.userData.baseScale as number;
        const pulse = reducedRef.current ? 1 : 1 + 0.1 * Math.sin(t * 2.4);
        firefly.scale.setScalar(base * pulse);
      }
      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (hoverRaf) cancelAnimationFrame(hoverRaf);
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      renderer.domElement.removeEventListener("pointerup", onPointerUp);
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      renderer.domElement.removeEventListener("pointerleave", onPointerLeave);
      tip.dispose();
      observer.disconnect();
      controls.dispose();
      renderer.dispose();
      host.removeChild(renderer.domElement);
      scene.clear();
      onCanvasReady?.(null);
    };
  }, [onSelect, onCanvasReady]);

  // build the plain: ground, grid, district plates, flat file tiles
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    filesRef.current = city?.files ?? [];
    slotsRef.current = [];
    heightsRef.current = new Map();
    boundsRef.current = bounds;
    if (!city || city.files.length === 0) return;

    const group = new THREE.Group();
    const size = bounds.size;

    scene.fog = new THREE.Fog(SKY, size * 2.1, size * 4.2);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(size * 6, size * 6),
      new THREE.MeshStandardMaterial({ color: "#14171e", roughness: 1 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.32;
    group.add(ground);

    const grid = new THREE.GridHelper(size * 2.8, 46, "#20242e", "#1a1e27");
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = 0.5;
    // district plates bottom out at y = -0.3; offset the grid so the two
    // coplanar opaque planes don't z-fight.
    grid.position.y = -0.31;
    group.add(grid);

    const plateDirs = city.dirs.filter((dir) => dir.depth <= 3 && dir.rect.w > 0 && dir.rect.d > 0);
    if (plateDirs.length > 0) {
      const plateGeo = new THREE.BoxGeometry(1, 1, 1);
      // nested plates at different depths all bottom out on the same y = -0.3
      // plane (height = top + 0.3 cancels the depth offset), so their bottom
      // faces are coplanar and z-fight; bias the depth test per-fragment so
      // the rasterizer picks a stable winner instead of flickering between them.
      const plateMat = new THREE.MeshStandardMaterial({
        roughness: 0.95,
        metalness: 0,
        polygonOffset: true,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1
      });
      const plates = new THREE.InstancedMesh(plateGeo, plateMat, plateDirs.length);
      const matrix = new THREE.Matrix4();
      const shade = new THREE.Color();
      plateDirs.forEach((dir, i) => {
        const top = -0.2 + Math.min(dir.depth, 3) * 0.06;
        const height = top + 0.3;
        matrix.compose(
          new THREE.Vector3(
            dir.rect.x + dir.rect.w / 2 - bounds.cx,
            top - height / 2,
            dir.rect.z + dir.rect.d / 2 - bounds.cz
          ),
          new THREE.Quaternion(),
          new THREE.Vector3(dir.rect.w, height, dir.rect.d)
        );
        plates.setMatrixAt(i, matrix);
        shade.setHSL(districtHue(dir.path) / 360, 0.22, 0.13 + Math.min(dir.depth, 3) * 0.035);
        plates.setColorAt(i, shade);
      });
      plates.instanceMatrix.needsUpdate = true;
      if (plates.instanceColor) plates.instanceColor.needsUpdate = true;
      group.add(plates);
    }

    // flat tiles: every file exists on the map, dark until visited
    const tileGeo = new THREE.BoxGeometry(1, 1, 1);
    const tileMat = new THREE.MeshStandardMaterial({ roughness: 0.85, metalness: 0 });
    const tiles = new THREE.InstancedMesh(tileGeo, tileMat, city.files.length);
    const matrix = new THREE.Matrix4();
    for (const file of city.files) {
      const sx = Math.max(file.rect.w, MIN_TILE_DIM);
      const sz = Math.max(file.rect.d, MIN_TILE_DIM);
      const x = file.rect.x + file.rect.w / 2 - bounds.cx;
      const z = file.rect.z + file.rect.d / 2 - bounds.cz;
      matrix.compose(new THREE.Vector3(x, TILE_H / 2, z), new THREE.Quaternion(), new THREE.Vector3(sx, TILE_H, sz));
      tiles.setMatrixAt(file.id, matrix);
      tiles.setColorAt(file.id, baseColor(file));
    }
    tiles.instanceMatrix.needsUpdate = true;
    if (tiles.instanceColor) tiles.instanceColor.needsUpdate = true;
    tileMeshRef.current = tiles;
    group.add(tiles);

    // attention terrain: unlit columns that grow out of the plain
    const terrain = new THREE.InstancedMesh(
      attentionColumnGeometry(),
      new THREE.MeshBasicMaterial({ toneMapped: false, vertexColors: true }),
      city.files.length
    );
    terrain.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(city.files.length * 3), 3);
    terrain.count = 0;
    terrain.frustumCulled = false;
    terrainMeshRef.current = terrain;
    group.add(terrain);

    // district labels above the plain; drawn over the columns so a mountain
    // range never buries the name of the district behind it
    labelSetRef.current = new DirLabelSet(
      city.dirs
        .filter((dir) => dir.depth >= 1 && dir.fileCount > 0 && dir.rect.w > 0 && dir.rect.d > 0)
        .map((dir) => ({
          name: dirBasename(dir.path),
          x: dir.rect.x + dir.rect.w / 2 - bounds.cx,
          z: dir.rect.z + dir.rect.d / 2 - bounds.cz,
          radius: Math.hypot(dir.rect.w, dir.rect.d) / 2,
          fileCount: dir.fileCount,
          depth: dir.depth
        })),
      group,
      LABEL_Y,
      true
    );

    const firefly = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: fireflyTexture(),
        color: EMBER,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        transparent: true
      })
    );
    firefly.userData.baseScale = Math.max(size * 0.028, 2.2);
    firefly.visible = false;
    fireflyRef.current = firefly;
    group.add(firefly);

    const trail = new StreetRenderer();
    const canvas = rendererRef.current?.domElement;
    if (canvas) trail.setResolution(canvas.clientWidth, canvas.clientHeight);
    trailRef.current = trail;
    group.add(trail.object);

    cityGroupRef.current = group;
    scene.add(group);

    // keep the canonical viewing direction, but pull back exactly far
    // enough that the whole plain fits the viewport's frustum — the fixed
    // size multiplier ignores the aspect ratio and overflows short windows
    const fitView = (): boolean => {
      const camera = cameraRef.current;
      const controls = controlsRef.current;
      if (!camera || !controls) return true;
      const dir = new THREE.Vector3(0.46, 1.08, 0.72).normalize();
      const corners: THREE.Vector3[] = [];
      for (const sx of [-1, 1]) {
        for (const sz of [-1, 1]) {
          corners.push(new THREE.Vector3(sx * bounds.halfW, 0, sz * bounds.halfD));
        }
      }
      const fitted = fitDistance(camera, dir, corners);
      if (fitted === null) return false;
      // breathing room so map edges clear the HUD overlays; floor keeps
      // near-empty maps from parking the camera on the ground
      const distance = Math.max(fitted * 1.12, size * 0.6);
      camera.position.copy(dir).multiplyScalar(distance);
      controls.target.set(0, 0, 0);
      controls.minDistance = size * 0.18;
      controls.maxDistance = Math.max(size * 2.6, distance * 1.2);
      controls.update();
      return true;
    };
    fitPendingRef.current = fitView() ? null : fitView;

    return () => {
      fitPendingRef.current = null;
      disposeGroup(group);
      scene.remove(group);
      cityGroupRef.current = null;
      tileMeshRef.current = null;
      terrainMeshRef.current = null;
      trailRef.current = null;
      fireflyRef.current = null;
      labelSetRef.current = null;
    };
  }, [city, bounds]);

  // playback → terrain targets and colors
  useEffect(() => {
    const terrain = terrainMeshRef.current;
    const tiles = tileMeshRef.current;
    if (!terrain || !tiles || !city) return;

    const heights = heightsRef.current;
    const slots: TerrainSlot[] = [];
    const present = new Set<number>();

    // git history mode: churn of the last commit that touched a file, looked up
    // per touched file from the playback history (each file's event list). The
    // normalization ceiling (historyMaxLog) is precomputed from the full trace
    // and passed in, so it's stable across the playhead and we don't scan the
    // whole history here every tick.
    const lastCommitLOC = (path: string): number => {
      const events = playback.historyByPath.get(path);
      const last = events?.[events.length - 1];
      const pair = last?.targets.find((t) => t.path === path)?.lines?.[0];
      return pair ? pair[0] + pair[1] : 0;
    };

    for (const file of city.files) {
      const touch = playback.touchByFile.get(file.id);
      const selected = file.path === selectedPath;
      tiles.setColorAt(file.id, selected ? colors.selected : baseColor(file));
      if (touch) {
        const visits = playback.visitsByFile.get(file.id) ?? 1;
        // an older session's terrain fades as newer ones run: dim toward the
        // unvisited tone and sink the column toward the plain (decay defaults
        // to 1 outside a multi-session project view, leaving this unchanged)
        const decay = playback.decayBySource.get(playback.sourceByFile.get(file.id) ?? -1) ?? 1;
        let color = colors[touch].clone().lerp(colors.unvisited, 1 - decay);
        // glow (attention) applies only to the default touch-colored case;
        // history/ghost/selected tints are fixed visual states and stay as-is
        let glowing = true;
        if (historyColors) {
          // color by commit size (churn) on the LOC ramp; the current commit's
          // files override to blue
          if (currentTouchPaths?.has(file.path)) {
            color = HISTORY_BLUE.clone();
          } else {
            const t = locFraction(lastCommitLOC(file.path), historyMaxLog);
            color = locColor(t);
          }
          glowing = false;
        }
        if (file.ghost) {
          color = color.lerp(colors.ghost, 0.45);
          glowing = false;
        }
        if (selected) {
          color = colors.selected;
          glowing = false;
        }
        if (glowing) color = color.multiplyScalar(attentionGlow(touch, visits) * decay);
        const target = locHeight(locFraction(file.lines, staticMaxLog));
        slots.push({ fileId: file.id, target, color });
        present.add(file.id);
      }
    }
    // let columns that just went dark shrink back into the plain
    for (const [fileId, cur] of heights) {
      if (cur > 0.04 && !present.has(fileId)) {
        slots.push({ fileId, target: 0, color: colors.unvisited });
      } else if (cur <= 0.04 && !present.has(fileId)) {
        heights.delete(fileId);
      }
    }

    slots.forEach((slot, i) => terrain.setColorAt(i, slot.color));
    terrain.count = slots.length;
    if (terrain.instanceColor) terrain.instanceColor.needsUpdate = true;
    if (tiles.instanceColor) tiles.instanceColor.needsUpdate = true;
    slotsRef.current = slots;
  }, [city, playback, selectedPath, historyColors, currentTouchPaths, historyMaxLog, staticMaxLog]);

  // the inspector opens over the right edge; pan the selected tile clear of it
  useEffect(() => {
    if (!city || !selectedPath) return;
    const file = city.files.find((f) => f.path === selectedPath);
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    const canvas = rendererRef.current?.domElement;
    if (!file || !camera || !controls || !canvas) return;
    controls.autoRotate = false;
    const top = heightsRef.current.get(file.id) ?? TILE_H;
    const world = centerFor(file, bounds);
    world.y = top;
    ensureVisible(camera, controls, world, canvas.clientWidth, canvas.clientHeight, INSPECTOR_RESERVED_PX);
  }, [city, bounds, selectedPath]);

  // trail: ground-level street path between recent fixations + the firefly at
  // the head, still hovering at its attention peak as the "current position"
  // light -- streets duck under the taller columns of touched files
  useEffect(() => {
    const trail = trailRef.current;
    if (!trail || !city) return;

    // playback resolves fileId with the same path key the citymap uses, so a
    // target still missing one has no tile to land on
    const recent = playback.recentTargets
      .map((target) => ({
        file: target.fileId !== undefined ? city.files[target.fileId] : undefined,
        source: target.source
      }))
      .filter((entry): entry is { file: CityFile; source: number } => Boolean(entry.file));
    const targetFiles = recent.map((entry) => entry.file);

    const peakFor = (file: CityFile): number => {
      const touch = playback.touchByFile.get(file.id);
      return touch ? locHeight(locFraction(file.lines, staticMaxLog)) : TILE_H;
    };

    const firefly = fireflyRef.current;
    if (firefly) {
      const head = recent[recent.length - 1];
      if (head) {
        const p = centerFor(head.file, bounds);
        firefly.position.set(p.x, peakFor(head.file) + 1.6, p.z);
        // the head light takes the color of the session acting now
        if (sessionColors) {
          (firefly.material as THREE.SpriteMaterial).color = sessionColors[head.source] ?? sessionColors[0] ?? EMBER;
        }
        firefly.visible = true;
      } else {
        firefly.visible = false;
      }
    }

    const trailColors = sessionColors
      ? recent.map((entry) => sessionColors[entry.source] ?? sessionColors[0] ?? EMBER)
      : undefined;
    trail.update(
      targetFiles.map((file) => {
        const p = centerFor(file, bounds);
        p.y = STREET_Y;
        return p;
      }),
      trailColors
    );
  }, [city, playback, bounds, sessionColors, staticMaxLog]);

  return <div className="city-scene" ref={hostRef} aria-label="Attention terrain" />;
}

// Columns must read as phosphorescence, not paint: glow pools at the crest and
// falls off into the plain. Vertex shade multiplies the per-instance touch
// color; the top face sits under the side rims so edges catch the most light.
function attentionColumnGeometry(): THREE.BoxGeometry {
  const geo = new THREE.BoxGeometry(1, 1, 1);
  const pos = geo.getAttribute("position");
  const normal = geo.getAttribute("normal");
  const shade = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const t = pos.getY(i) + 0.5;
    const glow = normal.getY(i) === 1 ? 0.82 : 0.34 + 0.66 * t * t;
    shade.fill(glow, i * 3, i * 3 + 3);
  }
  geo.setAttribute("color", new THREE.BufferAttribute(shade, 3));
  return geo;
}

// districtHue gives each top-level folder a stable, muted hue so quadrant
// districts read as distinct at a glance; plate lightness still ramps with
// depth (see the caller). Same FNV-1a idiom as baseColor's jitter below.
function districtHue(path: string): number {
  const top = path.split("/")[0] || path;
  let h = 2166136261;
  for (let i = 0; i < top.length; i++) {
    h = Math.imul(h ^ top.charCodeAt(i), 16777619);
  }
  return (h >>> 0) % 360;
}

function baseColor(file: CityFile): THREE.Color {
  if (file.ghost) return colors.ghost;
  let h = 2166136261;
  for (let i = 0; i < file.path.length; i++) {
    h = Math.imul(h ^ file.path.charCodeAt(i), 16777619);
  }
  const jitter = ((h >>> 0) % 1000) / 1000 - 0.5;
  return colors.unvisited.clone().offsetHSL(0, 0, jitter * 0.05);
}

function centerFor(file: CityFile, bounds: { cx: number; cz: number }): THREE.Vector3 {
  return new THREE.Vector3(file.rect.x + file.rect.w / 2 - bounds.cx, 0, file.rect.z + file.rect.d / 2 - bounds.cz);
}

function dirBasename(path: string): string {
  return path.slice(path.lastIndexOf("/") + 1) || path;
}
