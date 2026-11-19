/**
 * Shared geometry, layout constants and helpers for the
 * BusinessTransformationStory diagram (Clarity Lens integration).
 */
import type { FragmentNode, DisciplineId } from "./storyStages";

export const NAVY = "#0B1D33";
export const GOLD = "#F0C73A";
export const SLATE = "#2D3D5C";
export const GOLD_RGB = [240, 199, 58] as const;
export const AMBER_RGB = [232, 128, 58] as const;
export const MUTED_RGB = [120, 134, 160] as const;

export const mix = (
  a: readonly number[],
  b: readonly number[],
  t: number,
  alpha = 1,
) =>
  `rgba(${a
    .map((v, i) => Math.round(v + (b[i] - v) * Math.min(1, Math.max(0, t))))
    .join(",")},${alpha})`;

/** Final compass layout (viewBox units, 0–100 square). */
export const ORG_R = 7;
export const DISC_R = 4.5;
export const SCALE_R = 15.5;

export const DISCIPLINE_POS: Record<DisciplineId, { x: number; y: number }> = {
  communications: { x: 50, y: 20 },
  leadership: { x: 50, y: 80 },
  operations: { x: 20, y: 50 },
  technology: { x: 80, y: 50 },
};

export const DISCIPLINE_LABEL_DY: Record<DisciplineId, number> = {
  communications: -(DISC_R + 2.6),
  leadership: DISC_R + 3.8,
  operations: -(DISC_R + 2.6),
  technology: -(DISC_R + 2.6),
};

/** SCALE™ badges rotated off the cardinal axes so none sits on a spoke. */
export const SCALE_ANGLES = [-81, -9, 63, 135, 207].map(
  (d) => (d * Math.PI) / 180,
);

/** Scroll targets for the chapter dots (normalized progress). */
export const CHAPTER_TARGET = [0.06, 0.38, 0.64, 0.97];

/** Pressure nodes — appear during "growth creates chaos" beat, then dissolve. */
export const strainNodes = [
  { label: "Bottlenecks", x: 62, y: 38 },
  { label: "Rework", x: 40, y: 64 },
  { label: "Silos", x: 66, y: 60 },
  { label: "Workarounds", x: 30, y: 40 },
  { label: "Burnout", x: 44, y: 72 },
];

export type LabelSide = "left" | "right" | "above" | "below";

export const LABEL_SIDE: Record<string, LabelSide> = {
  CRM: "below",
  Email: "left",
  Spreadsheets: "below",
  Vendors: "right",
  Employees: "left",
  Policies: "right",
  Marketing: "left",
  Cybersecurity: "left",
  Processes: "below",
  Data: "below",
  Governance: "right",
  Reputation: "right",
};

export function labelOffset(side: LabelSide, r: number) {
  const gap = r + 1;
  switch (side) {
    case "left":
      return { dx: -gap, dy: 0, anchor: "end" as const };
    case "right":
      return { dx: gap, dy: 0, anchor: "start" as const };
    case "above":
      return { dx: 0, dy: -(gap + 0.4), anchor: "middle" as const };
    default:
      return { dx: 0, dy: gap + 0.9, anchor: "middle" as const };
  }
}

/** Point `dist` units from (x1,y1) toward (x2,y2). */
export function along(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  dist: number,
) {
  const len = Math.hypot(x2 - x1, y2 - y1) || 1;
  return {
    x: x1 + ((x2 - x1) / len) * dist,
    y: y1 + ((y2 - y1) / len) * dist,
  };
}

export function fragmentSide(node: FragmentNode): LabelSide {
  return LABEL_SIDE[node.label] ?? "below";
}

/** Final resting offset for a fragment relative to its discipline anchor. */
export function fragmentRestOffset(node: FragmentNode) {
  const side = fragmentSide(node);
  const dx = side === "left" ? -7.2 : side === "right" ? 7.2 : 0;
  const dy = side === "above" ? -7.2 : side === "below" ? 7.2 : 0;
  return { dx, dy };
}

/** Out-then-in crossfade: outgoing headline is gone before the next arrives. */
export function stageVis(
  progress: number,
  start: number,
  end: number,
  isFirst: boolean,
  isLast: boolean,
): number {
  const fade = 0.045;
  const fadeIn = isFirst ? 1 : smoothstepX(clamp01((progress - start) / fade));
  const fadeOut = isLast
    ? 1
    : 1 - smoothstepX(clamp01((progress - (end - fade)) / fade));
  return Math.min(1, Math.max(0, fadeIn * fadeOut));
}

/** Strain intensity: rises mid-story, releases as expertise arrives. */
export function strainAmount(p: number): number {
  const rise = smoothstepX(clamp01((p - 0.2) / 0.16));
  const fall = 1 - smoothstepX(clamp01((p - 0.46) / 0.12));
  return rise * fall;
}

/** SCALE™ ring appearance. */
export function scaleAppearAmount(p: number): number {
  return smoothstepX(clamp01((p - 0.76) / 0.14));
}

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

function smoothstepX(t: number) {
  const x = clamp01(t);
  return x * x * (3 - 2 * x);
}
