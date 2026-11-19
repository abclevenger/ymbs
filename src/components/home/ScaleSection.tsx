import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  SCALE™ pillar content + helix mapping                             */
/* ------------------------------------------------------------------ */
const pillars = [
  {
    id: "structure",
    letter: "S",
    name: "Structure",
    desc: "We design the right structure for your mission.",
  },
  {
    id: "culture",
    letter: "C",
    name: "Culture",
    desc: "We build a culture that lives your values.",
  },
  {
    id: "alignment",
    letter: "A",
    name: "Alignment",
    desc: "We align people and priorities to move in the same direction.",
  },
  {
    id: "legal-governance",
    letter: "L",
    name: "Legal & Governance",
    desc: "We protect your mission with strong governance and compliance.",
  },
  {
    id: "execution",
    letter: "E",
    name: "Execution",
    desc: "We create systems and processes that drive consistent results.",
  },
];

/* ------------------------------------------------------------------ */
/*  DNA double-helix geometry — broad ribbon strands                   */
/*  Two sinusoidal ribbons that twist around each other with          */
/*  alternating z-order at each crossing for real depth.              */
/* ------------------------------------------------------------------ */
const T = 200; // period (in y units)
const A = 78; // amplitude
const CX = 160; // horizontal center
const Y_START = 24;
const Y_END = 476;
const LABEL_YS = [50, 150, 250, 350, 450]; // 5 max-separation points
const CROSS_YS = [Y_START, 100, 200, 300, 400, Y_END]; // strand crossings
const RIBBON_HALF_W = 10; // half-width of each ribbon band

const GOLD = "#D4A017";
const GOLD_BRIGHT = "#F0C73A";
const GOLD_HI = "#FFE08A";
const NAVY_RIBBON = "#2C4E73";
const NAVY_RIBBON_DARK = "#1A3450";
const NAVY_HI = "#5A7BA3";
const CREAM = "#EDE6D6";

/**
 * Generate a filled ribbon path (a band with real width) following a
 * sinusoidal centerline. The band edges are offset perpendicular to the
 * tangent so the ribbon narrows naturally at steep sections.
 */
const ribbonPath = (sign: 1 | -1, yStart: number, yEnd: number) => {
  const top: string[] = [];
  const bottom: string[] = [];
  const step = 3;
  const push = (y: number) => {
    const phase = (2 * Math.PI * y) / T;
    const x = CX + sign * A * Math.sin(phase);
    const dx = sign * A * ((2 * Math.PI) / T) * Math.cos(phase);
    const mag = Math.sqrt(dx * dx + 1);
    const nx = 1 / mag;
    const ny = -dx / mag;
    top.push(
      `${(x + RIBBON_HALF_W * nx).toFixed(2)} ${(
        y +
        RIBBON_HALF_W * ny
      ).toFixed(2)}`,
    );
    bottom.push(
      `${(x - RIBBON_HALF_W * nx).toFixed(2)} ${(
        y -
        RIBBON_HALF_W * ny
      ).toFixed(2)}`,
    );
  };
  for (let y = yStart; y <= yEnd; y += step) push(y);
  push(yEnd); // ensure exact endpoint
  const rev = [...bottom].reverse();
  return `M ${top.join(" L ")} L ${rev.join(" L ")} Z`;
};

/** Thin centerline path for highlight strokes + pathLength draw animation. */
const centerPath = (sign: 1 | -1, yStart: number, yEnd: number) => {
  const pts: string[] = [];
  for (let y = yStart; y <= yEnd; y += 4) {
    const x = CX + sign * A * Math.sin((2 * Math.PI * y) / T);
    pts.push(`${x.toFixed(2)} ${y}`);
  }
  return `M ${pts.join(" L ")}`;
};

interface SegData {
  i: number;
  yStart: number;
  yEnd: number;
  goldFront: boolean;
  goldFill: string;
  navyFill: string;
  goldCenter: string;
  navyCenter: string;
}

const segData: SegData[] = CROSS_YS.slice(0, -1).map((ys, i) => ({
  i,
  yStart: ys,
  yEnd: CROSS_YS[i + 1],
  goldFront: i % 2 === 0, // alternate which ribbon is in front per crossing
  goldFill: ribbonPath(1, ys, CROSS_YS[i + 1]),
  navyFill: ribbonPath(-1, ys, CROSS_YS[i + 1]),
  goldCenter: centerPath(1, ys, CROSS_YS[i + 1]),
  navyCenter: centerPath(-1, ys, CROSS_YS[i + 1]),
}));

const rungs = LABEL_YS.map((y, i) => {
  const s = Math.sin((2 * Math.PI * y) / T);
  return { i, y, xA: CX + A * s, xB: CX - A * s };
});

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function ScaleSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const inView = useInView(sectionRef, {
    once: true,
    margin: "-25% 0px -25% 0px",
  });

  const [hasEntered, setHasEntered] = useState(false);
  const [active, setActive] = useState<number>(0);
  const lockedRef = useRef<number>(0);

  const activate = (i: number) => setActive(i);
  const revert = () => setActive(lockedRef.current);
  const lock = (i: number) => {
    lockedRef.current = i;
    setActive(i);
  };

  const handleNodeKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      lock(i);
    }
  };

  useEffect(() => {
    if (!inView || hasEntered) return;
    setHasEntered(true);
    if (reduce) {
      setActive(0);
      lockedRef.current = 0;
      return;
    }
    const pause = window.setTimeout(() => {
      setActive(0);
      lockedRef.current = 0;
    }, 200);
    return () => window.clearTimeout(pause);
  }, [inView, hasEntered, reduce]);

  const helixContainerVariants = {
    hidden: { opacity: 0, y: reduce ? 0 : -44, scale: reduce ? 1 : 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: reduce ? 0.3 : 0.9,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="bg-dark-section relative overflow-hidden py-16 md:py-28"
      aria-labelledby="scale-heading"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_70%_40%,rgba(212,160,23,0.10),transparent)]" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ---------- LEFT: copy + interactive pillars ---------- */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4"
            >
              The YMBS operating framework
            </motion.p>

            <motion.h2
              id="scale-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl md:text-5xl font-bold mb-3 text-white tracking-tight leading-[1.05]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              SCALE&trade;
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="text-xl md:text-2xl font-semibold text-primary/90 mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              The DNA of organizations built to scale.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-xl mb-8"
            >
              SCALE&trade; is the operating system that aligns every part of
              your organization&mdash;so you can lead with clarity, execute with
              confidence, and create lasting impact.
            </motion.p>

            {/* Interactive pillar list */}
            <ul className="space-y-3">
              {pillars.map((p, i) => {
                const isActive = active === i;
                const isDimmed = !isActive;
                return (
                  <li key={p.letter}>
                    <button
                      type="button"
                      onMouseEnter={() => activate(i)}
                      onFocus={() => activate(i)}
                      onMouseLeave={revert}
                      onBlur={revert}
                      onClick={() => lock(i)}
                      className={`group w-full text-left flex items-start gap-4 rounded-xl border px-5 py-4 transition-all duration-300 ${
                        isActive
                          ? "border-primary/60 bg-primary/10"
                          : "border-white/10 bg-white/[0.03] hover:border-primary/30 hover:bg-white/[0.05]"
                      } ${isDimmed ? "opacity-70" : "opacity-100"}`}
                      aria-pressed={isActive}
                    >
                      <span
                        className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg transition-colors duration-300 ${
                          isActive
                            ? "bg-primary text-black"
                            : "bg-white/10 text-primary"
                        }`}
                        style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                      >
                        {p.letter}
                      </span>
                      <span className="flex-1">
                        <span
                          className={`block font-bold text-base mb-0.5 transition-colors duration-300 ${
                            isActive ? "text-white" : "text-zinc-200"
                          }`}
                          style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                          }}
                        >
                          {p.name}
                        </span>
                        <span className="block text-sm text-zinc-400 leading-relaxed">
                          {p.desc}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ---------- RIGHT: animated DNA helix (ribbon design) ---------- */}
          <motion.div
            variants={helixContainerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="order-first lg:order-none flex justify-center"
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, -7, 0] }}
              transition={
                reduce
                  ? undefined
                  : { duration: 7, repeat: Infinity, ease: "easeInOut" }
              }
              className="w-full max-w-[380px]"
            >
              <svg
                viewBox="0 0 320 500"
                className="w-full h-auto"
                role="group"
                aria-label="SCALE DNA double helix — select a pillar to explore it."
              >
                <defs>
                  {/* Gold ribbon — horizontal gradient for dimensional surface */}
                  <linearGradient id="goldRibbon" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={GOLD} />
                    <stop offset="50%" stopColor={GOLD_BRIGHT} />
                    <stop offset="100%" stopColor={GOLD} />
                  </linearGradient>
                  {/* Navy ribbon — lighter than bg so it stays visible */}
                  <linearGradient id="navyRibbon" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={NAVY_RIBBON_DARK} />
                    <stop offset="50%" stopColor={NAVY_RIBBON} />
                    <stop offset="100%" stopColor={NAVY_RIBBON_DARK} />
                  </linearGradient>
                  <filter
                    id="segGlow"
                    x="-60%"
                    y="-60%"
                    width="220%"
                    height="220%"
                  >
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* --- Rungs (subtle dotted connectors, behind ribbons) --- */}
                {rungs.map((r) => {
                  const isActive = active === r.i;
                  return (
                    <line
                      key={`rung-${r.i}`}
                      x1={r.xA}
                      y1={r.y}
                      x2={r.xB}
                      y2={r.y}
                      stroke={isActive ? GOLD_BRIGHT : GOLD}
                      strokeWidth={isActive ? 1.5 : 0.8}
                      strokeDasharray="2 4"
                      style={{
                        opacity: isActive ? 0.5 : 0.2,
                        transition: "opacity 0.3s ease, stroke-width 0.3s ease",
                      }}
                    />
                  );
                })}

                {/* --- Ribbon segments (alternating front/back depth) --- */}
                {segData.map((seg) => {
                  const isActive = active === seg.i;
                  const back = seg.goldFront
                    ? {
                        fill: seg.navyFill,
                        center: seg.navyCenter,
                        fillGrad: "url(#navyRibbon)",
                        hi: NAVY_HI,
                      }
                    : {
                        fill: seg.goldFill,
                        center: seg.goldCenter,
                        fillGrad: "url(#goldRibbon)",
                        hi: GOLD_HI,
                      };
                  const front = seg.goldFront
                    ? {
                        fill: seg.goldFill,
                        center: seg.goldCenter,
                        fillGrad: "url(#goldRibbon)",
                        hi: GOLD_HI,
                      }
                    : {
                        fill: seg.navyFill,
                        center: seg.navyCenter,
                        fillGrad: "url(#navyRibbon)",
                        hi: NAVY_HI,
                      };
                  return (
                    <g key={`seg-${seg.i}`}>
                      {/* back ribbon fill */}
                      <path
                        d={back.fill}
                        fill={back.fillGrad}
                        style={{
                          opacity: isActive ? 0.85 : 0.6,
                          transition: "opacity 0.3s ease",
                        }}
                      />
                      {/* back centerline highlight (draws in) */}
                      <motion.path
                        d={back.center}
                        fill="none"
                        stroke={back.hi}
                        strokeWidth={1.2}
                        strokeLinecap="round"
                        initial={reduce ? undefined : { pathLength: 0 }}
                        animate={
                          reduce
                            ? undefined
                            : inView
                              ? { pathLength: 1 }
                              : { pathLength: 0 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0.3 + seg.i * 0.1,
                          ease: "easeInOut",
                        }}
                        style={{
                          opacity: isActive ? 0.5 : 0.25,
                          transition: "opacity 0.3s ease",
                        }}
                      />
                      {/* front ribbon fill */}
                      <path
                        d={front.fill}
                        fill={front.fillGrad}
                        style={{
                          opacity: isActive ? 1 : 0.78,
                          transition: "opacity 0.3s ease",
                        }}
                      />
                      {/* front centerline highlight (draws in) */}
                      <motion.path
                        d={front.center}
                        fill="none"
                        stroke={front.hi}
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        initial={reduce ? undefined : { pathLength: 0 }}
                        animate={
                          reduce
                            ? undefined
                            : inView
                              ? { pathLength: 1 }
                              : { pathLength: 0 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0.35 + seg.i * 0.1,
                          ease: "easeInOut",
                        }}
                        style={{
                          opacity: isActive ? 0.6 : 0.35,
                          transition: "opacity 0.3s ease",
                        }}
                      />
                      {/* active glow on gold centerline */}
                      {isActive && (
                        <path
                          d={seg.goldCenter}
                          fill="none"
                          stroke={GOLD_BRIGHT}
                          strokeWidth={2.5}
                          strokeLinecap="round"
                          filter="url(#segGlow)"
                          opacity={0.7}
                        />
                      )}
                    </g>
                  );
                })}

                {/* --- Framework labels (full names inside helix turns) --- */}
                {pillars.map((p, i) => {
                  const y = LABEL_YS[i];
                  const isActive = active === i;
                  return (
                    <motion.g
                      key={`label-${p.letter}`}
                      initial={reduce ? undefined : { opacity: 0, y: 8 }}
                      animate={
                        reduce
                          ? { opacity: 1 }
                          : inView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 8 }
                      }
                      transition={{
                        duration: 0.4,
                        delay: reduce ? 0 : 0.7 + i * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{ cursor: "pointer" }}
                      tabIndex={0}
                      role="button"
                      aria-label={`${p.name} — SCALE framework`}
                      aria-pressed={isActive}
                      onMouseEnter={() => activate(i)}
                      onFocus={() => activate(i)}
                      onMouseLeave={revert}
                      onBlur={revert}
                      onClick={() => lock(i)}
                      onKeyDown={(e) => handleNodeKey(e, i)}
                    >
                      {/* invisible hit area */}
                      <rect
                        x={CX - 78}
                        y={y - 13}
                        width={156}
                        height={26}
                        fill="transparent"
                      />
                      <text
                        x={CX}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill={isActive ? GOLD_BRIGHT : CREAM}
                        fontSize={isActive ? 10.5 : 9.5}
                        fontWeight={700}
                        fontFamily="'Montserrat', sans-serif"
                        letterSpacing="0.04em"
                        style={{
                          opacity: isActive ? 1 : 0.65,
                          transition: "all 0.3s ease",
                        }}
                      >
                        {p.name.toUpperCase()}
                      </text>
                    </motion.g>
                  );
                })}
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* ---------- Bottom supporting statement ---------- */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center text-lg md:text-xl font-semibold text-white/90 mt-14 max-w-2xl mx-auto"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          When every strand is strong, your organization is built to scale.
        </motion.p>

        {/* ---------- V.I.T.A.L.™ note (subordinate) ---------- */}
        <motion.div
          id="vital"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="max-w-2xl mx-auto text-center border border-white/10 rounded-xl px-6 py-5 bg-white/[0.03] scroll-mt-28 mt-8"
        >
          <p className="text-sm text-zinc-400 leading-relaxed">
            For Communications, campaigns follow{" "}
            <span className="font-semibold text-zinc-200">
              V.I.T.A.L.&trade;
            </span>{" "}
            (Visibility &rarr; Interest &rarr; Trial &rarr; Acceptance &rarr;
            Loyalty) &mdash; a methodology for putting SCALE&trade; into action
            in PR and marketing work.
          </p>
        </motion.div>

        {/* ---------- Legal & Governance disclosure ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="max-w-3xl mx-auto mt-8 border-t border-white/10 pt-6"
        >
          <p className="text-[13px] md:text-sm text-zinc-400 leading-relaxed">
            <span className="font-semibold text-zinc-200">
              Legal &amp; Governance Disclosure:
            </span>{" "}
            YMBS does not provide legal advice or act as legal counsel. As part
            of our business and operational consulting services, we work with
            business owners and organizational leaders to identify potential
            legal and regulatory requirements, understand operational and
            compliance risks, and develop business processes that support
            responsible operations. When an issue requires legal interpretation,
            advice, or representation, YMBS will recommend that the client
            retain qualified legal counsel.
          </p>
        </motion.div>

        {/* ---------- Explore link ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-8"
        >
          <Link
            to="/scale"
            className="text-sm font-bold inline-flex items-center gap-2 hover:gap-3 transition-all text-primary"
          >
            Explore the SCALE&trade; Framework{" "}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
