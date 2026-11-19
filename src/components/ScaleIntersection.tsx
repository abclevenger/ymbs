import { Link } from "react-router-dom";
import { ArrowRight, Scale } from "lucide-react";
import { motion, Variants } from "framer-motion";

/**
 * Reusable SCALE intersection block.
 * Shows how a single discipline connects to the SCALE framework,
 * with natural internal links to /scale and /scale/assessment.
 * Keeps SCALE visible across the site without being repetitive.
 */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export interface ScaleIntersectionProps {
  /** The pillar name, e.g. "Operations", "Technology" */
  pillar: string;
  /** Which SCALE dimensions this pillar most commonly intersects with */
  dimensions: string[];
  /** One-line description of how the pillar relates to SCALE */
  context: string;
  /** Visual theme: "light" or "dark" */
  theme?: "light" | "dark";
}

export default function ScaleIntersection({
  pillar,
  dimensions,
  context,
  theme = "light",
}: ScaleIntersectionProps) {
  const isDark = theme === "dark";

  return (
    <section
      className={`py-16 ${isDark ? "bg-dark-section" : "bg-white"} border-t ${isDark ? "border-white/10" : "border-zinc-200"}`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
        className="max-w-4xl mx-auto px-6"
      >
        <div
          className={`rounded-2xl p-8 ${isDark ? "bg-white/[0.03] border border-white/10" : "bg-zinc-50 border border-zinc-200"} flex flex-col md:flex-row items-start gap-6`}
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Scale className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <p
              className={`text-xs font-bold uppercase tracking-widest text-primary mb-2`}
            >
              The SCALE™ Framework
            </p>
            <h3
              className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-[#1A2433]"}`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {pillar} through the SCALE™ lens
            </h3>
            <p
              className={`text-base leading-relaxed mb-4 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
            >
              {context}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {dimensions.map((d, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${isDark ? "bg-primary/15 text-primary" : "bg-primary/10 text-primary"}`}
                >
                  {d}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/scale"
                className={`text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all ${isDark ? "text-primary" : "text-primary"}`}
              >
                Explore the SCALE™ Framework <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/scale/assessment"
                className={`text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all ${isDark ? "text-zinc-300" : "text-zinc-600"}`}
              >
                Take the assessment →
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
