import { motion } from "framer-motion";

type Orientation = "light-to-dark" | "dark-to-light";

interface MountainDividerProps {
  orientation?: Orientation;
  className?: string;
}

/**
 * Subtle animated Appalachian mountain-ridge divider.
 * Renders layered ridgelines that transition between a light and dark
 * section. Mist layers drift gently (progressive enhancement only —
 * the global prefers-reduced-motion rule disables all motion).
 */
export default function MountainDivider({
  orientation = "light-to-dark",
  className = "",
}: MountainDividerProps) {
  const isLightToDark = orientation === "light-to-dark";
  const bandBg = isLightToDark ? "#F5F3EF" : "#0B1D33";
  const ridgeColor = isLightToDark ? "#0B1D33" : "#F5F3EF";

  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${className}`}
      style={{ background: bandBg }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="block w-full h-[80px] md:h-[120px]"
        fill="none"
      >
        {/* Back ridge — most distant, lightest */}
        <path
          d="M0,140 L0,95 C120,70 240,78 360,60 C480,42 600,55 720,48 C840,41 960,58 1080,52 C1200,46 1320,62 1440,50 L1440,140 Z"
          fill={ridgeColor}
          opacity={isLightToDark ? 0.12 : 0.18}
        />
        {/* Mid ridge */}
        <path
          d="M0,140 L0,108 C140,88 280,96 420,80 C560,64 700,82 840,74 C980,66 1120,86 1260,78 C1340,73 1400,82 1440,78 L1440,140 Z"
          fill={ridgeColor}
          opacity={isLightToDark ? 0.22 : 0.3}
        />
        {/* Front ridge — darkest, closest */}
        <path
          d="M0,140 L0,122 C160,104 320,112 480,98 C640,84 800,102 960,94 C1120,86 1280,104 1440,96 L1440,140 Z"
          fill={ridgeColor}
          opacity={isLightToDark ? 0.4 : 0.55}
        />
      </svg>

      {/* Drifting mist layers */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[60px] md:h-[90px] pointer-events-none"
        style={{
          background: isLightToDark
            ? "linear-gradient(to top, rgba(255,255,255,0.35), transparent)"
            : "linear-gradient(to top, rgba(11,29,51,0.4), transparent)",
        }}
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[40px] md:h-[60px] pointer-events-none"
        style={{
          background: isLightToDark
            ? "linear-gradient(to top, rgba(255,255,255,0.25), transparent)"
            : "linear-gradient(to top, rgba(11,29,51,0.25), transparent)",
        }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </div>
  );
}
