/**
 * Renders the full SVG visualization for the BusinessTransformationStory
 * section: diagnostic clarity lens, strain pressure points, migrating
 * concern threads, discipline compass, SCALE™ ring, and coordinated flow.
 */
import { useState } from "react";
import {
  disciplines,
  fragmentNodes,
  scaleMarkers,
  type FragmentNode,
} from "./storyStages";
import type { DisciplineId } from "./storyStages";
import {
  NAVY,
  GOLD,
  SLATE,
  GOLD_RGB,
  AMBER_RGB,
  MUTED_RGB,
  mix,
  DISCIPLINE_POS,
  DISCIPLINE_LABEL_DY,
  SCALE_ANGLES,
  strainNodes,
  labelOffset,
  along,
  fragmentRestOffset,
  fragmentSide,
} from "./diagram";

interface DiagramProps {
  p: number;
  reduced: boolean;
  small: boolean;
}

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const mapRange = (v: number, a: number, b: number) =>
  clamp01((v - a) / (b - a));
const smoothstep = (t: number) => {
  const x = clamp01(t);
  return x * x * (3 - 2 * x);
};
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function Diagram({ p, reduced, small }: DiagramProps) {
  const [active, setActive] = useState<DisciplineId | null>(null);

  // ---- Derived animation values ----
  const strain =
    smoothstep(mapRange(p, 0.2, 0.36)) *
    (1 - smoothstep(mapRange(p, 0.46, 0.58)));
  const discAppear = smoothstep(mapRange(p, 0.48, 0.66));
  const discLabel = smoothstep(mapRange(p, 0.58, 0.72));
  const migrate = smoothstep(mapRange(p, 0.5, 0.74));
  const connect = smoothstep(mapRange(p, 0.62, 0.84));
  const scaleAppear = smoothstep(mapRange(p, 0.76, 0.9));
  const minorFade = lerp(1, 0.6, smoothstep(mapRange(p, 0.82, 0.95)));
  const interactive = p >= 0.88;

  // Clarity lens
  const clarity = smoothstep(mapRange(p, 0.46, 0.62));
  const fog = lerp(small ? 0.45 : 0.55, 0, clarity);
  const fogged = clarity < 0.985;
  const scan = mapRange(p, 0.02, 0.3);
  const scanX = 50 + Math.sin(scan * 5.2 + 0.6) * 21 * (1 - scan * 0.6);
  const scanY = 48 + Math.cos(scan * 3.7 + 0.2) * 17 * (1 - scan * 0.6);
  const settle = smoothstep(mapRange(p, 0.24, 0.36));
  const baseR = lerp(small ? 18 : 15, small ? 22 : 19, settle);
  const lens = {
    x: lerp(lerp(scanX, 50, settle), 50, clarity),
    y: lerp(lerp(scanY, 52, settle), 50, clarity),
    r: lerp(baseR, 80, clarity) * smoothstep(mapRange(p, 0, 0.05) * 0.4 + 0.6),
  };
  const lensRingOp = 1 - smoothstep(mapRange(clarity, 0.2, 0.6));
  const flowing = !reduced && connect >= 0.98;

  const orgR = lerp(lerp(4.5, 3.6, strain), 7, connect);
  const discR = lerp(0.5, 4.5, discAppear);

  const discPos = (id: DisciplineId) => {
    const f = DISCIPLINE_POS[id];
    return { x: lerp(50, f.x, discAppear), y: lerp(50, f.y, discAppear) };
  };

  const fragmentPos = (node: FragmentNode, i: number) => {
    const anchor = DISCIPLINE_POS[node.cluster];
    const rest = fragmentRestOffset(node);
    const driftAmp = (1 - migrate) * node.drift * (1.5 + strain * 1.2);
    const freq = 6 + strain * 10;
    const driftX = Math.sin(p * freq + i) * driftAmp;
    const driftY = Math.cos(p * (freq - 1) + i * 0.7) * driftAmp;
    return {
      x: lerp(node.ix + driftX, anchor.x + rest.dx, migrate),
      y: lerp(node.iy + driftY, anchor.y + rest.dy, migrate),
    };
  };

  const focusOp = (id: DisciplineId) => (active && active !== id ? 0.25 : 1);

  const threadPath = (node: FragmentNode, i: number) => {
    const from = fragmentPos(node, i);
    const dead = fragmentNodes[(i + 5) % fragmentNodes.length];
    const deadEnd = {
      x: dead.ix + Math.sin(i * 4.1) * 6,
      y: dead.iy + Math.cos(i * 2.9) * 6,
    };
    const anchor = discPos(node.cluster);
    const clean = along(anchor.x, anchor.y, from.x, from.y, discR);
    const end = {
      x: lerp(deadEnd.x, clean.x, migrate),
      y: lerp(deadEnd.y, clean.y, migrate),
    };
    const wobble = 1 + strain * 0.35 * Math.sin(p * 40 + i);
    const c1 = {
      x: lerp(
        from.x + Math.sin(i * 2.3) * 28 * wobble,
        lerp(from.x, end.x, 1 / 3),
        migrate,
      ),
      y: lerp(
        from.y + Math.cos(i * 1.7) * 26 * wobble,
        lerp(from.y, end.y, 1 / 3),
        migrate,
      ),
    };
    const c2 = {
      x: lerp(
        end.x + Math.cos(i * 3.1) * 24 * wobble,
        lerp(from.x, end.x, 2 / 3),
        migrate,
      ),
      y: lerp(
        end.y + Math.sin(i * 2.2) * 24 * wobble,
        lerp(from.y, end.y, 2 / 3),
        migrate,
      ),
    };
    return `M${from.x},${from.y} C${c1.x},${c1.y} ${c2.x},${c2.y} ${end.x},${end.y}`;
  };

  const renderScene = (layer: "fog" | "lens" | "clear") => {
    const inFocus = layer !== "fog";
    return (
      <g key={`scene-${layer}`}>
        {fragmentNodes.map((node, i) => (
          <path
            key={`thread-${layer}-${i}`}
            d={threadPath(node, i)}
            fill="none"
            stroke={
              migrate > strain
                ? mix(MUTED_RGB, GOLD_RGB, migrate, 0.8)
                : mix(MUTED_RGB, AMBER_RGB, strain, 0.8)
            }
            strokeWidth={lerp(0.32, 0.2, migrate) + strain * 0.1}
            strokeDasharray={
              migrate < 0.98 ? `0.8 ${lerp(1.1, 0, migrate)}` : undefined
            }
            opacity={
              (inFocus ? 1 : 0.8) *
              lerp(1, 0.55 * minorFade, migrate) *
              focusOp(node.cluster) *
              (1 - strain * 0.4 * (0.5 + 0.5 * Math.sin(p * 90 + i * 2.1)))
            }
          />
        ))}

        {strainNodes.map((s, i) => {
          const appear =
            smoothstep(mapRange(p, 0.24 + i * 0.025, 0.32 + i * 0.025)) *
            (1 - smoothstep(mapRange(p, 0.46, 0.54)));
          if (appear <= 0.01) return null;
          const pulse = 0.5 + 0.5 * Math.sin(p * 120 + i * 1.7);
          return (
            <g key={`strain-${layer}-${i}`} opacity={appear}>
              <circle
                cx={s.x}
                cy={s.y}
                r={1.4 + pulse * 1.2 * strain}
                fill="none"
                stroke={mix(AMBER_RGB, AMBER_RGB, 1, 0.35)}
                strokeWidth={0.2}
              />
              <circle
                cx={s.x}
                cy={s.y}
                r={0.95}
                fill="rgba(232,128,58,0.25)"
                stroke={mix(AMBER_RGB, AMBER_RGB, 1)}
                strokeWidth={0.28}
              />
              <text
                x={s.x + 2}
                y={s.y}
                dominantBaseline="central"
                fontSize={small ? 2.3 : 1.55}
                fill="rgba(245,170,120,0.95)"
                fontFamily="'Montserrat', sans-serif"
                fontWeight={600}
              >
                {s.label}
              </text>
            </g>
          );
        })}

        {fragmentNodes.map((node, i) => {
          const pos = fragmentPos(node, i);
          const r = node.size === "md" ? 1.15 : 0.95;
          const lo = labelOffset(fragmentSide(node), r);
          const labelOp = small ? 1 - connect : 1;
          const highlighted = active === node.cluster;
          return (
            <g
              key={`frag-${layer}-${i}`}
              opacity={
                (highlighted ? 1 : 0.9 * minorFade) *
                focusOp(node.cluster) *
                (inFocus ? 1 : 0.85)
              }
            >
              <circle
                cx={pos.x}
                cy={pos.y}
                r={r}
                fill={SLATE}
                stroke={mix(MUTED_RGB, GOLD_RGB, migrate)}
                strokeWidth={0.28}
              />
              <text
                x={pos.x + lo.dx}
                y={pos.y + lo.dy}
                textAnchor={lo.anchor}
                dominantBaseline="central"
                fontSize={small ? 2.3 : 1.55}
                fill={highlighted ? "#fff" : "rgba(255,255,255,0.85)"}
                fontFamily="'Montserrat', sans-serif"
                fontWeight={highlighted ? 600 : 500}
                opacity={highlighted ? 1 : labelOp}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </g>
    );
  };

  const activeDiscipline = active
    ? disciplines.find((d) => d.id === active)
    : undefined;

  const selectDiscipline = (id: DisciplineId) => {
    if (!interactive || active === id) return;
    setActive(id);
  };

  return (
    <>
      <svg
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        role="group"
        aria-label="The four YMBS disciplines around your organization"
        onKeyDown={(e) => e.key === "Escape" && setActive(null)}
      >
        <defs>
          <filter id="org-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="story-fog" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation={fog} />
          </filter>
          <clipPath id="story-lens">
            <circle cx={lens.x} cy={lens.y} r={lens.r} />
          </clipPath>
        </defs>

        <g aria-hidden="true">
          {fogged ? (
            <>
              <g filter="url(#story-fog)" opacity={lerp(0.85, 1, clarity)}>
                {renderScene("fog")}
              </g>
              <g clipPath="url(#story-lens)">
                <circle
                  cx={lens.x}
                  cy={lens.y}
                  r={lens.r}
                  fill={NAVY}
                  opacity={0.9}
                />
                {renderScene("lens")}
              </g>
              <g opacity={lensRingOp}>
                <circle
                  cx={lens.x}
                  cy={lens.y}
                  r={lens.r}
                  fill="none"
                  stroke={GOLD}
                  strokeWidth={0.35}
                  opacity={0.9}
                />
                <circle
                  cx={lens.x}
                  cy={lens.y}
                  r={lens.r + 1.2}
                  fill="none"
                  stroke={GOLD}
                  strokeWidth={0.15}
                  strokeDasharray="0.4 1.4"
                  opacity={0.6}
                />
                {[0, 90, 180, 270].map((deg) => {
                  const a = (deg * Math.PI) / 180;
                  return (
                    <line
                      key={`tick-${deg}`}
                      x1={lens.x + Math.cos(a) * (lens.r - 1.2)}
                      y1={lens.y + Math.sin(a) * (lens.r - 1.2)}
                      x2={lens.x + Math.cos(a) * (lens.r + 0.6)}
                      y2={lens.y + Math.sin(a) * (lens.r + 0.6)}
                      stroke={GOLD}
                      strokeWidth={0.35}
                      strokeLinecap="round"
                    />
                  );
                })}
              </g>
            </>
          ) : (
            renderScene("clear")
          )}

          {disciplines.map((d) => {
            const pos = DISCIPLINE_POS[d.id];
            const s0 = along(50, 50, pos.x, pos.y, orgR);
            const full = along(pos.x, pos.y, 50, 50, 4.5);
            return (
              <line
                key={`spoke-${d.id}`}
                x1={s0.x}
                y1={s0.y}
                x2={lerp(s0.x, full.x, connect)}
                y2={lerp(s0.y, full.y, connect)}
                stroke={GOLD}
                strokeWidth={active === d.id ? 0.8 : 0.55}
                opacity={connect * 0.85 * (active && active !== d.id ? 0.4 : 1)}
                strokeLinecap="round"
              />
            );
          })}

          {flowing &&
            disciplines.map((d, di) => {
              const pos = DISCIPLINE_POS[d.id];
              const a = along(pos.x, pos.y, 50, 50, 4.5);
              const b = along(50, 50, pos.x, pos.y, 7);
              return (
                <circle
                  key={`pulse-${d.id}`}
                  r={0.55}
                  fill={GOLD}
                  opacity={active && active !== d.id ? 0.2 : 0.95}
                >
                  <animateMotion
                    dur="2.6s"
                    begin={`${di * 0.65}s`}
                    repeatCount="indefinite"
                    path={`M${a.x},${a.y} L${b.x},${b.y}`}
                  />
                </circle>
              );
            })}

          <g opacity={scaleAppear * (active ? 0.5 : 1)}>
            <circle
              cx={50}
              cy={50}
              r={15.5}
              fill="none"
              stroke={GOLD}
              strokeWidth={0.25}
              strokeDasharray="0.5 1.5"
              opacity={0.45}
            />
            {scaleMarkers.map((m, i) => {
              const mx = 50 + Math.cos(SCALE_ANGLES[i]) * 15.5;
              const my = 50 + Math.sin(SCALE_ANGLES[i]) * 15.5;
              return (
                <g key={`scale-${m.letter}`}>
                  <circle cx={mx} cy={my} r={small ? 2.4 : 1.7} fill={GOLD} />
                  <text
                    x={mx}
                    y={my}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={small ? 2.5 : 1.7}
                    fill={NAVY}
                    fontFamily="'Playfair Display', serif"
                    fontWeight={700}
                  >
                    {m.letter}
                  </text>
                </g>
              );
            })}
          </g>

          <g filter={connect > 0.3 ? "url(#org-glow)" : undefined}>
            <circle cx={50} cy={50} r={orgR} fill={NAVY} />
            <circle
              cx={50}
              cy={50}
              r={orgR}
              fill="none"
              stroke={mix(GOLD_RGB, AMBER_RGB, strain)}
              strokeWidth={0.8 + strain * 0.25}
              opacity={0.65 + connect * 0.35}
            />
            <circle
              cx={50}
              cy={50}
              r={Math.max(0, orgR - 1.5)}
              fill={GOLD}
              opacity={0.1 + connect * 0.12}
            />
            <text
              x={50}
              y={50 - lerp(1.15, 1.55, connect)}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={lerp(1.1, 1.3, connect) * (small ? 1.25 : 1)}
              letterSpacing={0.3}
              fill="rgba(255,255,255,0.7)"
              fontFamily="'Montserrat', sans-serif"
              fontWeight={600}
            >
              YOUR
            </text>
            <text
              x={50}
              y={50 + lerp(0.6, 0.85, connect)}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={lerp(1.9, 2.7, connect)}
              letterSpacing={0.2}
              fill="#fff"
              fontFamily="'Montserrat', sans-serif"
              fontWeight={800}
            >
              ORG
            </text>
          </g>
        </g>

        {disciplines.map((d) => {
          if (discAppear <= 0.01) return null;
          const pos = discPos(d.id);
          const isActive = active === d.id;
          return (
            <g
              key={`disc-${d.id}`}
              opacity={discAppear * focusOp(d.id)}
              role={interactive ? "button" : undefined}
              tabIndex={interactive ? 0 : -1}
              aria-hidden={interactive ? undefined : true}
              aria-label={interactive ? `${d.label}: ${d.blurb}` : undefined}
              aria-pressed={interactive ? isActive : undefined}
              className={
                interactive ? "cursor-pointer outline-none" : undefined
              }
              style={{ pointerEvents: interactive ? "auto" : "none" }}
              onMouseEnter={() => selectDiscipline(d.id)}
              onFocus={() => selectDiscipline(d.id)}
              onClick={() => selectDiscipline(d.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  selectDiscipline(d.id);
                }
              }}
            >
              <circle cx={pos.x} cy={pos.y} r={discR + 4} fill="transparent" />
              {isActive && (
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={discR + 1.6}
                  fill="none"
                  stroke="rgba(255,255,255,0.8)"
                  strokeWidth={0.3}
                  strokeDasharray="0.6 0.8"
                />
              )}
              <circle cx={pos.x} cy={pos.y} r={discR} fill={NAVY} />
              <circle
                cx={pos.x}
                cy={pos.y}
                r={discR}
                fill="none"
                stroke={GOLD}
                strokeWidth={isActive ? 0.95 : 0.7}
              />
              <circle
                cx={pos.x}
                cy={pos.y}
                r={discR * 0.5}
                fill={GOLD}
                opacity={isActive ? 0.9 : 0.55}
              />
              <text
                x={pos.x}
                y={pos.y + DISCIPLINE_LABEL_DY[d.id]}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={small ? 2.9 : 2}
                letterSpacing={small ? 0.3 : 0.35}
                fill={isActive ? GOLD : "#fff"}
                fontFamily="'Montserrat', sans-serif"
                fontWeight={800}
                opacity={discLabel}
              >
                {d.label.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Bottom panel: SCALE legend, or the selected discipline */}
      <div
        className="absolute bottom-[84px] lg:bottom-6 left-1/2 lg:left-[calc(50%-2vw)] -translate-x-1/2 z-20 w-max max-w-[94vw] lg:max-w-[min(660px,54vw)]"
        style={{ opacity: scaleAppear }}
      >
        {activeDiscipline ? (
          <div
            className="pointer-events-auto flex flex-col lg:flex-row lg:items-center gap-x-5 gap-y-2 rounded-2xl border border-primary/40 bg-[#0B1D33]/90 backdrop-blur-sm px-5 py-3 shadow-[0_0_30px_rgba(240,199,58,0.12)]"
            aria-live="polite"
          >
            <p
              className="text-sm text-white/85 leading-snug"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span className="font-bold text-primary uppercase tracking-[0.12em] text-xs mr-2">
                {activeDiscipline.label}
              </span>
              {activeDiscipline.blurb}
            </p>
            <a
              href={activeDiscipline.href}
              className="group inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary hover:text-white transition-colors"
            >
              Explore {activeDiscipline.label}
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        ) : (
          <div className="pointer-events-none flex flex-col items-center gap-2">
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-x-3 lg:gap-x-6 gap-y-1 rounded-2xl lg:rounded-full border border-white/10 bg-white/[0.03] px-4 lg:px-6 py-2">
              <span
                className="text-[9px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-white/50"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                SCALE™
              </span>
              {scaleMarkers.map((m) => (
                <span
                  key={`legend-${m.letter}`}
                  className="text-[10px] lg:text-xs font-medium text-white/75 whitespace-nowrap"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span className="text-primary font-bold">{m.letter}</span>{" "}
                  {small ? m.shortLabel : m.name}
                </span>
              ))}
            </div>
            {interactive && (
              <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.18em] text-white/65">
                {small ? "Tap" : "Select"} a discipline to explore
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );
}
