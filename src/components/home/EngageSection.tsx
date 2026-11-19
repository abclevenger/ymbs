import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";

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

const journey = [
  {
    step: "01",
    title: "Get clarity",
    desc: "A 30-minute conversation to understand what's changing and where progress is getting stuck.",
  },
  {
    step: "02",
    title: "Set priorities",
    desc: "We identify which operational, technology, communications, or leadership needs matter most right now.",
  },
  {
    step: "03",
    title: "Bring in the right expertise",
    desc: "The appropriate specialist—or coordinated team—is engaged around your priorities.",
  },
  {
    step: "04",
    title: "Implement and improve",
    desc: "Practical follow-through, then ongoing fractional guidance to sustain the gains.",
  },
];

export default function EngageSection() {
  return (
    <>
      {/* Customer journey — concise 4-step progression */}
      <section className="py-20 md:py-28 bg-white border-t border-zinc-200">
        <motion.div
          initial="visible"
          animate="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto px-6"
        >
          <motion.div
            variants={fadeUp}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-5 text-[#1A2433] tracking-tight leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What working with YMBS looks like
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              A clear path from uncertainty to sustained scale—no guesswork
              about what happens after you reach out.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {journey.map((s, i) => (
              <motion.div
                variants={fadeUp}
                key={i}
                className="bg-zinc-50 rounded-2xl p-7 border border-zinc-200 flex flex-col"
              >
                <span className="text-2xl font-bold text-primary mb-3">
                  {s.step}
                </span>
                <h3
                  className="text-lg font-bold text-[#1A2433] mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-[15px] text-zinc-600 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Primary engagement — Integrated Fractional Leadership Support */}
      <section className="py-20 md:py-28 bg-dark-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.12),transparent)] pointer-events-none"></div>
        <motion.div
          initial="visible"
          animate="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto px-6 relative z-10"
        >
          <motion.div
            variants={fadeUp}
            className="text-center mb-12 max-w-2xl mx-auto"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
              The primary way to work with YMBS
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5 text-white tracking-tight leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Integrated Fractional Leadership Support
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Senior operational, technology, communications, and leadership
              support—coordinated through one team and shaped around what your
              organization needs now. An extension of your leadership team, not
              four disconnected providers.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="grid md:grid-cols-2 gap-x-10 gap-y-4 max-w-3xl mx-auto mb-10"
          >
            {[
              "Clear priorities across organizational functions",
              "Access to the appropriate specialist as needs arise",
              "Coordinated recommendations instead of disconnected advice",
              "Practical implementation and follow-through",
              "Ongoing senior support without four full-time executive hires",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-base text-zinc-200"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/integrated-executive-advisory">
              <Button
                size="lg"
                className="btn-glow bg-primary text-black hover:bg-primary/90 font-bold px-10 h-14 text-base rounded-full transition-all hover:-translate-y-1"
              >
                Explore Integrated Support{" "}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <p className="text-sm text-zinc-400 text-center sm:text-left max-w-xs">
              Individual capabilities and specialists are available when deeper
              help is needed.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
