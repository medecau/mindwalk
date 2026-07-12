// Session colors distinguish whose work a merged project action belongs to.
// They ride on the walker (trail + firefly) and the timeline, never on the
// tiles — tiles keep the edit/read/seen touch vocabulary. The palette is chosen
// to stay legible against the dark plain and apart from the touch colors
// (green #8fb45f, blue #a5c8f1, amber #f0ad5a); it cycles for projects with more
// sessions than hues, so the index, not the color, is the identity.
export const SESSION_PALETTE = [
  "#5ad1ff", // cyan
  "#ff7ac6", // magenta
  "#b98cff", // violet
  "#8fe36b", // lime
  "#ffd15c", // gold
  "#ff8a5c", // coral
  "#4fd6b8", // teal
  "#f2f0a1" // pale chartreuse
];

// Deterministic, index-based, wrap-safe. Negative or absent indices fold to 0.
export function sessionColorHex(index: number | undefined): string {
  const i = index ?? 0;
  const n = SESSION_PALETTE.length;
  return SESSION_PALETTE[((i % n) + n) % n];
}
