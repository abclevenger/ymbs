/**
 * Lightweight math helpers for scroll-driven interpolation.
 * No external dependencies — pure functions used by the rAF loop.
 */

export const clamp = (v: number, min = 0, max = 1): number =>
  Math.min(max, Math.max(min, v));

/** Linear interpolation */
export const lerp = (a: number, b: number, t: number): number =>
  a + (b - a) * t;

/** Map a value from one range to another, clamped to output range */
export const mapRange = (
  v: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
): number => {
  const t = clamp((v - inMin) / (inMax - inMin));
  return lerp(outMin, outMax, t);
};

/** Smoothstep easing for natural acceleration/deceleration */
export const smoothstep = (t: number): number => {
  const x = clamp(t);
  return x * x * (3 - 2 * x);
};

/** easeInOut for symmetric in/out transitions */
export const easeInOut = (t: number): number => {
  const x = clamp(t);
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
};
