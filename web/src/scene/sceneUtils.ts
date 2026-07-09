import * as THREE from "three";
import type { Touch } from "../types";

// Shared scene vocabulary. The touch colors are the meaning the HUD legend
// promises; both scenes must draw them identically. Ambient colors (ground,
// unvisited, ghost) stay per-scene tuning.
export const SKY = new THREE.Color("#12151c");
export const EMBER = new THREE.Color("#ff9e5e");

export const touchColors: Record<Touch | "selected", THREE.Color> = {
  hit: new THREE.Color("#8fb45f"),
  read: new THREE.Color("#c3d6ec"),
  edit: new THREE.Color("#f0ad5a"),
  selected: new THREE.Color("#f6ead2")
};

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function disposeGroup(group: THREE.Group) {
  group.traverse((obj) => {
    if (obj instanceof THREE.Mesh || obj instanceof THREE.Line || obj instanceof THREE.Sprite) {
      obj.geometry?.dispose();
      const mat = obj.material as THREE.Material | THREE.Material[];
      if (Array.isArray(mat)) mat.forEach(disposeMaterial);
      else if (mat) disposeMaterial(mat);
    }
  });
}

function disposeMaterial(mat: THREE.Material) {
  // Material.dispose() does not free assigned textures; module-cached
  // textures (fireflyTexture/haloTexture) are marked shared and must survive.
  const map = (mat as THREE.Material & { map?: THREE.Texture | null }).map;
  if (map && !map.userData.shared) map.dispose();
  mat.dispose();
}
