import { useEffect, useRef, useState } from "react";
import {
  stages,
  disciplines,
  scaleMarkers,
  fragmentNodes,
  type FragmentNode,
} from "./storyStages";
import { clamp, lerp, mapRange, smoothstep } from "./interpolation";

/**
 * Crossfade visibility for story stages.
 * - The FIRST stage is fully visible at progress 0 (no fade-in).
 * - The LAST stage stays fully visible through progress 1.
 * - Adjacent stages overlap so one message is always on screen.
 *
 * `start`/`end` are the stage's nominal window. Crossfade bands sit at the
 * boundaries: a stage fades out as the next fades in.
 */
function stageVis(
  progress: number,
  start: number,
  end: number,
  isFirst: boolean,
  isLast: boolean,
): number {
  const fadeWidth = 0.06; // overlap band on each side
  // Fade-in: from (start - fadeWidth) to (start + fadeWidth)
  //   — but the first stage starts at full opacity.
  const fadeIn = isFirst
    ? 1
    : smoothstep((progress - (start - fadeWidth)) / (2 * fadeWidth));
  // Fade-out: from (end - fadeWidth) to (end + fadeWidth)
  //   — but the last stage never fades out.
  const fadeOut = isLast
    ? 1
    : 1 - smoothstep((progress - (end - fadeWidth)) / (2 * fadeWidth));
  return clamp(fadeIn * fadeOut);
}

const NAVY = "#0B1D33";
const GOLD = "#F0C73A";
const GOLD_DIM = "rgba(240,199,58,0.75)";
const SLATE = "#2D3D5C";
const MUTED = "rgba(255,255,255,0.75)";

/**
 * Compact cross / compass arrangement for the final coordinated state.
 * Communications (top), Operations (left), Technology (right), Leadership (bottom).
 * Kept compact (~44-unit span) so the diagram reads as a balanced square, not a
 * tall sparse column.
 */
const DISCIPLINE_POS: Record<string, { x: number; y: number }> = {
  communications: { x: 50, y: 26 },
  leadership: { x: 50, y: 74 },
  operations: { x: 26, y: 50 },
  technology: { x: 74, y: 50 },
};

/** Cluster target offset from discipline anchor for each fragment node */
function clusterTarget(
  node: FragmentNode,
  index: number,
): { x: number; y: number } {
  const anchor = DISCIPLINE_POS[node.cluster];
  // Spread fragments around the anchor in a wider orbit so secondary labels
  // stay clear of the main discipline node. Communications & Leadership sit
  // on the vertical axis where space is tighter, so push their fragments a
  // touch further outward for even visual density across all four clusters.
  const angle = (index * 137.5 * Math.PI) / 180; // golden angle
  const baseRadius = node.size === "md" ? 12 : 10;
  const verticalBoost =
    node.cluster === "communications" || node.cluster === "leadership"
      ? 1.25
      : 1;
  const radius = baseRadius * verticalBoost;
  return {
    x: anchor.x + Math.cos(angle) * radius,
    y: anchor.y + Math.sin(angle) * radius,
  };
}

/**
 * Premium scroll-driven storytelling section. A sticky full-screen stage
 * visualizes a fragmented business organizing into four coordinated
 * disciplines. All animation is driven by a single normalized scroll
 * progress value via requestAnimationFrame + refs (no per-frame React state).
 *
 * The stage is split into two zones: a protected text-safe column on the
 * left and the animated visualization on the right, so headlines can never
 * overlap nodes or connection lines.
 *
 * No external media required — pure SVG + DOM.
 */
export default function BusinessTransformationStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);
  const progressRef = useRef(0);
  const rafRef = useRef<number>(0);

  // Detect reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Scroll progress tracking — passive, rAF-throttled
  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    if (!section) return;

    const update = () => {
      rafRef.current = 0;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progress: 0 when section top hits viewport top, 1 when bottom passes
      const scrollable = rect.height - vh;
      const scrolled = clamp(-rect.top / scrollable);
      progressRef.current = scrolled;
      setProgress(scrolled);
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reduced]);

  // ---- Derived animation values ----
  const p = reduced ? 1 : progress; // reduced motion → show final state

  // Stage 1→2: noise fades, nodes slow
  const noiseFade = mapRange(p, 0.05, 0.3, 1, 0);
  // Stage 2→3: nodes migrate to clusters
  const migrate = smoothstep(mapRange(p, 0.28, 0.62, 0, 1));
  // Stage 3→4: connections draw, system stabilizes
  const connect = smoothstep(mapRange(p, 0.55, 0.85, 0, 1));
  // SCALE framework appears
  const scaleAppear = smoothstep(mapRange(p, 0.6, 0.78, 0, 1));
  // Final cleanup — minor nodes fade but remain visible (subordinate)
  const minorFade = mapRange(p, 0.85, 0.98, 1, 0.3);
  // Discipline label prominence
  const disciplineProminence = smoothstep(mapRange(p, 0.5, 0.8, 0, 1));

  return (
    <section
      ref={sectionRef}
      className={`relative bg-dark-section ${reduced ? "" : "h-[110vh] lg:h-[120vh]"}`}
      aria-label="How YMBS transforms a fragmented business into a coordinated organization"
    >
      {/* Sticky stage — split into text-safe zone + visualization zone */}
      <div
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col lg:flex-row"
        style={{ background: NAVY }}
      >
        {/* ---- TEXT-SAFE ZONE (left on desktop, top on mobile) ---- */}
        {/* Only the dominant stage is rendered — no crossfade stacking. */}
        <div className="relative z-20 w-full flex-1 lg:flex-none lg:w-[40%] flex items-center px-6 md:px-10 lg:pl-[6vw] lg:pr-10 pt-16 lg:pt-0 pb-4 lg:pb-0 pointer-events-none">
          <div className="relative w-full max-w-xl min-h-[200px] lg:min-h-[280px]">
            {(() => {
              // Find the stage with the highest visibility at current progress
              let activeIdx = 0;
              let maxVis = -1;
              for (let idx = 0; idx < stages.length; idx++) {
                const isFirst = idx === 0;
                const isLast = idx === stages.length - 1;
                const vis =
                  reduced && stages[idx].id === "coordinated"
                    ? 1
                    : stageVis(
                        p,
                        stages[idx].start,
                        stages[idx].end,
                        isFirst,
                        isLast,
                      );
                if (vis > maxVis) {
                  maxVis = vis;
                  activeIdx = idx;
                }
              }
              const stage = stages[activeIdx];
              return (
                <div
                  key={stage.id}
                  className="story-stage-active relative w-full"
                >
                  <h2
                    className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] text-balance mb-3"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {stage.headline}
                  </h2>
                  {stage.body && (
                    <p
                      className={`text-base md:text-lg leading-relaxed ${
                        stage.id === "align"
                          ? "text-primary font-semibold tracking-wide"
                          : "text-zinc-300"
                      }`}
                    >
                      {stage.body}
                    </p>
                  )}
                </div>
              );
            })()}
          </div>
        </div>

        {/* ---- VISUALIZATION ZONE (right on desktop, below on mobile) ---- */}
        <div className="relative z-10 w-full lg:w-[60%] h-[52vh] lg:h-full">
          {/* Focused radial glow behind the ORG diagram — restrained gold/navy */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 55% 55% at 50% 50%, rgba(240,199,58,${
                0.05 + scaleAppear * 0.13
              }), transparent 65%)`,
            }}
            aria-hidden="true"
          />

          {/* ---- SVG Visualization ---- */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              {/* Soft glow filter for the central ORG node */}
              <filter
                id="org-glow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Tangled / broken connections (stage 1) */}
            <g opacity={noiseFade * 0.85}>
              {fragmentNodes.slice(0, 10).map((n, i) => {
                const next = fragmentNodes[(i + 3) % fragmentNodes.length];
                return (
                  <line
                    key={`tangle-${i}`}
                    x1={n.ix}
                    y1={n.iy}
                    x2={next.ix + Math.sin(i) * 4}
                    y2={next.iy + Math.cos(i) * 4}
                    stroke={GOLD_DIM}
                    strokeWidth={0.4}
                    strokeDasharray="0.5 1.5"
                  />
                );
              })}
            </g>

            {/* SCALE™ framework ring — dotted ring around ORG with explanatory markers */}
            <g opacity={scaleAppear * 0.85}>
              <circle
                cx={50}
                cy={50}
                r={14}
                fill="none"
                stroke={GOLD}
                strokeWidth={0.3}
                strokeDasharray="0.5 1.5"
                opacity={0.5}
              />
              {scaleMarkers.map((m, i) => {
                // Offset markers so they sit between the four discipline
                // cardinal positions for cleaner visual separation.
                const angle =
                  (i / scaleMarkers.length) * Math.PI * 2 -
                  Math.PI / 2 +
                  Math.PI / 5;
                const mx = 50 + Math.cos(angle) * 14;
                const my = 50 + Math.sin(angle) * 14;
                const lx = 50 + Math.cos(angle) * 18.5;
                const ly = 50 + Math.sin(angle) * 18.5;
                return (
                  <g key={`scale-${m.letter}`}>
                    {/* Gold badge with framework letter */}
                    <circle cx={mx} cy={my} r={2} fill={GOLD} opacity={0.9} />
                    <text
                      x={mx}
                      y={my}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={1.8}
                      fill="rgba(11,29,51,0.95)"
                      fontFamily="'Playfair Display', serif"
                      fontWeight={700}
                    >
                      {m.letter}
                    </text>
                    {/* Short explanatory label — visible on desktop/tablet SVG */}
                    <text
                      x={lx}
                      y={ly}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={1.4}
                      fill="rgba(255,255,255,0.8)"
                      fontFamily="'Montserrat', sans-serif"
                      fontWeight={600}
                      className="hidden lg:block"
                    >
                      {m.shortLabel}
                    </text>
                  </g>
                );
              })}
            </g>

            {/* Central organization node — focal point with glow */}
            <g filter={connect > 0.3 ? "url(#org-glow)" : undefined}>
              {/* Outer ring */}
              <circle
                cx={50}
                cy={50}
                r={lerp(4.5, 7.5, connect)}
                fill="none"
                stroke={GOLD}
                strokeWidth={0.9}
                opacity={0.6 + connect * 0.4}
              />
              {/* Inner fill */}
              <circle
                cx={50}
                cy={50}
                r={lerp(2.5, 4, connect)}
                fill={GOLD}
                opacity={0.3 + connect * 0.38}
              />
              {/* ORG label */}
              <text
                x={50}
                y={50.8}
                textAnchor="middle"
                fontSize={2.2}
                fill="rgba(255,255,255,0.98)"
                fontFamily="'Montserrat', sans-serif"
                fontWeight={700}
                opacity={0.7 + connect * 0.3}
              >
                ORG
              </text>
            </g>

            {/* Discipline anchor nodes + clean connectors to center */}
            {disciplines.map((d) => {
              const pos = DISCIPLINE_POS[d.id];
              const op = 0.55 + disciplineProminence * 0.45;
              // Draw connector from ORG outward
              const connLen = connect;
              const cx = lerp(50, pos.x, connLen);
              const cy = lerp(50, pos.y, connLen);
              return (
                <g key={`disc-${d.id}`}>
                  {/* Clean connection line from ORG to discipline */}
                  <line
                    x1={50}
                    y1={50}
                    x2={cx}
                    y2={cy}
                    stroke={GOLD}
                    strokeWidth={0.7}
                    opacity={connect * 0.9}
                    strokeLinecap="round"
                  />
                  {/* Discipline outer ring */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={lerp(2.5, 5, disciplineProminence)}
                    fill="none"
                    stroke={GOLD}
                    strokeWidth={0.8}
                    opacity={op}
                  />
                  {/* Discipline inner fill */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={lerp(1.3, 2.5, disciplineProminence)}
                    fill={GOLD}
                    opacity={op * 0.5}
                  />
                </g>
              );
            })}

            {/* Fragment nodes — migrate from scattered to clustered (secondary concepts) */}
            {fragmentNodes.map((node, i) => {
              const target = clusterTarget(node, i);
              // Organic drift in stage 1, slows as we diagnose
              const driftAmp = (1 - migrate) * node.drift * 1.5;
              const driftX = Math.sin(p * 6 + i) * driftAmp;
              const driftY = Math.cos(p * 5 + i * 0.7) * driftAmp;
              const x = lerp(node.ix + driftX, target.x, migrate);
              const y = lerp(node.iy + driftY, target.y, migrate);
              const r = node.size === "md" ? 1.4 : 1.1;
              // Secondary labels fade more in the final coordinated state so
              // they stay clearly subordinate to the primary discipline names.
              const op = lerp(0.85, 0.85, migrate) * minorFade * 0.78;
              return (
                <g key={`frag-${i}`}>
                  {/* Connection to cluster anchor during migration */}
                  {migrate > 0.1 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={DISCIPLINE_POS[node.cluster].x}
                      y2={DISCIPLINE_POS[node.cluster].y}
                      stroke={GOLD_DIM}
                      strokeWidth={0.25}
                      opacity={migrate * 0.5 * minorFade}
                    />
                  )}
                  <circle
                    cx={x}
                    cy={y}
                    r={r}
                    fill={SLATE}
                    stroke={GOLD}
                    strokeWidth={0.3}
                    opacity={op}
                  />
                  <text
                    x={x}
                    y={y + 0.2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={node.size === "md" ? 1.25 : 1.05}
                    fill="rgba(255,255,255,0.82)"
                    fontFamily="'Montserrat', sans-serif"
                    fontWeight={500}
                    opacity={op}
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* ---- Discipline labels (DOM, for crisp typography) ---- */}
          <div className="absolute inset-0 pointer-events-none">
            {disciplines.map((d) => {
              const pos = DISCIPLINE_POS[d.id];
              const op = 0.5 + disciplineProminence * 0.5;
              // Offset label outward from the node so it doesn't overlap
              const labelOffsetY =
                d.id === "communications"
                  ? -16
                  : d.id === "leadership"
                    ? 16
                    : 0;
              const labelOffsetX =
                d.id === "operations" ? -16 : d.id === "technology" ? 16 : 0;
              return (
                <div
                  key={`label-${d.id}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
                  style={{
                    left: `calc(${pos.x}% + ${labelOffsetX}px)`,
                    top: `calc(${pos.y}% + ${labelOffsetY}px)`,
                    opacity: op,
                    transform: `translate(-50%, calc(-50% + ${lerp(
                      20,
                      0,
                      disciplineProminence,
                    )}px))`,
                    transition: "none",
                  }}
                >
                  <p
                    className="text-sm md:text-lg font-extrabold uppercase tracking-[0.15em] text-white whitespace-nowrap drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {d.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile compact SCALE legend — replaces in-SVG labels on small screens */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none lg:hidden"
            style={{
              opacity: scaleAppear,
              transition: "opacity 0.4s ease",
            }}
          >
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-black/40 rounded-lg px-3 py-2 backdrop-blur-sm">
              {scaleMarkers.map((m) => (
                <span
                  key={`legend-${m.letter}`}
                  className="text-[9px] font-semibold text-white/70 whitespace-nowrap"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span className="text-primary font-bold">{m.letter}</span>{" "}
                  {m.shortLabel}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll progress indicator (desktop) */}
        {!reduced && (
          <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-2 z-30">
            <div className="w-px h-32 bg-white/10 relative overflow-hidden rounded-full">
              <div
                className="absolute top-0 left-0 w-full bg-primary rounded-full"
                style={{ height: `${p * 100}%` }}
              />
            </div>
            <span className="text-[10px] text-white/40 font-mono">
              {Math.round(p * 100)}%
            </span>
          </div>
        )}

        {/* Scroll to explore hint — fades out as user begins scrolling */}
        {!reduced && (
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-30"
            style={{
              opacity: Math.max(0, 1 - p * 12),
              transition: "opacity 0.3s ease",
            }}
          >
            <span
              className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-medium"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Scroll to explore
            </span>
            <svg
              width="20"
              height="28"
              viewBox="0 0 20 28"
              fill="none"
              className="text-white/40"
            >
              <rect
                x="0.5"
                y="0.5"
                width="19"
                height="27"
                rx="9.5"
                stroke="currentColor"
                strokeOpacity="0.4"
              />
              <rect
                x="8.5"
                y="5"
                width="3"
                height="7"
                rx="1.5"
                fill="currentColor"
                className="animate-bounce"
                style={{ animationDuration: "1.5s" }}
              />
            </svg>
          </div>
        )}
      </div>
    </section>
  );
}
