import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Scale } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

/**
 * Why YMBS — the integrated advisory difference.
 * Explains that most organizations manage disconnected consultants, and that
 * YMBS connects operations, technology, communications, and leadership so
 * strategy, systems, and execution move together.
 *
 * Followed by a concise SCALE methodology intro that links to the full page.
 * SCALE is positioned as the connective methodology across all four pillars,
 * not as a fifth service.
 */
export default function WhyYmbsSection() {
  return (
    <section className="py-20 md:py-28 bg-light-section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="max-w-5xl mx-auto px-6"
      >
        <motion.div
          variants={fadeUp}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
            The integrated advisory difference
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-5 text-[#1A2433] tracking-tight leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Most organizations end up managing consultants who don&rsquo;t talk
            to each other.
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Technology affects operations. Operations affect communications.
            Communications affect leadership. Leadership affects execution
            across the organization. YMBS connects the disciplines so strategy,
            systems, technology, and people move together.
          </p>
        </motion.div>

        {/* Concise SCALE intro — the connective methodology */}
        <motion.div
          variants={fadeUp}
          className="rounded-2xl bg-white border border-zinc-200 p-8 md:p-10 flex flex-col md:flex-row items-start gap-6"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Scale className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
              The SCALE&trade; methodology
            </p>
            <h3
              className="text-xl md:text-2xl font-bold mb-3 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              The framework that connects all four disciplines
            </h3>
            <p className="text-base text-zinc-600 leading-relaxed mb-5">
              SCALE&trade; is how YMBS diagnoses an organization before
              recommending anything&mdash;across Structure, Culture, Alignment,
              Liability &amp; Governance Readiness, and Execution. It&rsquo;s
              the connective methodology that ties operations, technology,
              communications, and leadership together.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/scale"
                className="text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all text-primary"
              >
                Explore the SCALE&trade; Framework{" "}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/scale/assessment"
                className="text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all text-zinc-600"
              >
                Take the assessment &rarr;
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
