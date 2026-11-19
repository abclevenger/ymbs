import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { track } from "@/lib/analytics";
import { ShieldCheck, Layers, Users, Wrench } from "lucide-react";
import { useState } from "react";
import ScalePreviewModal from "@/components/ScalePreviewModal";

const proofPoints = [
  {
    icon: ShieldCheck,
    label: "Senior expertise",
  },
  {
    icon: Layers,
    label: "Ready-to-use frameworks",
  },
  {
    icon: Users,
    label: "Fractional engagement",
  },
  {
    icon: Wrench,
    label: "Practical implementation",
  },
];

/**
 * Homepage hero — dark navy treatment with the existing Appalachian
 * ridge background image and parallax. Copy is Michelle's approved wording.
 *
 * Eyebrow: "Built for the backbone of America." (audience/brand statement).
 * H1:      "Senior expertise. Built for how you actually work." (core value proposition).
 * Mobile: stacks vertically with the proof panel beneath the hero copy.
 */
export default function HeroSection() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const [scaleOpen, setScaleOpen] = useState(false);

  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 flex items-center text-left px-6 overflow-hidden bg-dark-section">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ y }}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        <img
          src="https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/68aa1b19aca9cd247f98e5e1.jpeg"
          alt=""
          className="w-full h-full object-cover opacity-35 md:opacity-55 contrast-[1.12] saturate-[0.82] brightness-[0.92]"
          loading="eager"
        />
        {/* Horizontal: darkest on the left for headline readability, opening
            toward the right so mountain ridgelines become visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08172A]/95 via-[#08172A]/72 to-[#08172A]/50" />
        {/* Vertical: anchor the top and bottom for editorial depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08172A]/45 via-transparent to-[#08172A]/90" />
        {/* Soft vignette for premium framing (clear center-right) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_62%_42%,transparent_48%,rgba(8,23,42,0.55))]" />
        {/* Mobile: slightly stronger wash to keep small screens dark & simple */}
        <div className="absolute inset-0 bg-[#08172A]/35 md:hidden" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[1280px] mx-auto text-white"
      >
        <div className="grid md:grid-cols-[58%_42%] gap-8 lg:gap-10 items-center">
          {/* LEFT COLUMN — copy */}
          <div className="max-w-xl">
            <p className="text-xs md:text-base font-semibold text-primary mb-4 md:mb-5 uppercase tracking-[0.12em] md:tracking-[0.15em]">
              Built for the backbone of America.
            </p>

            <h1
              className="text-[2.25rem] md:text-6xl lg:text-[4.25rem] font-bold mb-4 md:mb-5 text-balance leading-[1.05] tracking-tight text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Business challenges don't always require full-time solutions.
            </h1>

            <p className="text-base md:text-xl text-zinc-100 mb-3 md:mb-4 leading-relaxed text-balance font-medium">
              Get experienced support across Operations, Technology,
              Communications, and Leadership — when you need it, without adding
              permanent overhead.
            </p>

            <div className="text-sm md:text-lg text-zinc-200 mb-6 md:mb-8 leading-relaxed text-balance">
              <p>
                From identifying what's holding your business back to
                implementing solutions, we help you move forward — one priority
                at a time.
              </p>
            </div>

            <div className="mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-2">
                <button
                  className="btn-glow w-full sm:w-auto bg-primary text-black hover:bg-primary/90 font-bold text-sm md:text-base px-8 md:px-10 h-14 rounded-full transition-all duration-300 hover:-translate-y-1"
                  onClick={() => {
                    track.assessmentStarted("SCALE");
                    track.assessmentFunnelStep("SCALE", "hero_preview_open");
                    setScaleOpen(true);
                  }}
                >
                  Take the Free SCALE™ Assessment
                </button>
                <button
                  className="w-full sm:w-auto bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:text-white font-semibold text-sm md:text-base px-8 md:px-10 h-14 rounded-full transition-all duration-300 backdrop-blur-md"
                  onClick={() => {
                    track.discoveryCallClick("hero");
                    navigate("/contact");
                  }}
                >
                  Talk to an Advisor
                </button>
              </div>
              {/* CTA microcopy — each line sits directly beneath its button */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-4">
                <p className="text-xs text-zinc-400 font-medium tracking-wide sm:flex-1 sm:max-w-[260px]">
                  A practical starting point to identify where the organization
                  may need attention.
                </p>
                <p className="text-xs text-zinc-400 font-medium tracking-wide sm:flex-1 sm:max-w-[220px]">
                  30 minutes • No obligation • Leave with clearer priorities
                </p>
              </div>
            </div>

            <p className="text-sm font-medium text-primary/90 tracking-wide">
              Scale follows structure.
            </p>
          </div>

          {/* RIGHT COLUMN — editorial proof panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block self-start lg:mt-[-8px]"
          >
            <div className="rounded-2xl bg-background border border-primary/25 p-10 lg:p-14 lg:mr-2 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <p
                className="text-xl lg:text-2xl font-bold text-foreground mb-10 lg:mb-12 tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                What you get
              </p>
              <ul className="space-y-9 lg:space-y-10">
                {proofPoints.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-5">
                    <span className="flex items-center justify-center w-13 h-13 lg:w-14 lg:h-14 rounded-full bg-primary/10 border border-primary/20 flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </span>
                    <span className="text-lg lg:text-xl text-foreground font-medium leading-snug">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Mobile proof panel — stacked beneath hero copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden mt-10"
        >
          <div className="rounded-2xl bg-background border border-primary/25 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <p
              className="text-base font-bold text-foreground mb-5 tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What you get
            </p>
            <ul className="grid grid-cols-2 gap-5">
              {proofPoints.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </span>
                  <span className="text-sm text-foreground font-medium leading-snug">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>

      <ScalePreviewModal open={scaleOpen} onOpenChange={setScaleOpen} />
    </section>
  );
}
