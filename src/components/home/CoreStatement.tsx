import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Problem statement — dark navy section that frames the problem YMBS solves.
 * Sits as the closing argument of the hero; intentionally compact.
 */
export default function CoreStatement() {
  return (
    <section className="py-16 md:py-20 bg-light-section relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-10 bg-primary/50" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            The reality
          </span>
          <span className="h-px w-10 bg-primary/50" />
        </div>
        <h2
          className="text-2xl md:text-[2.1rem] font-bold mb-5 text-[#1A2433] tracking-tight leading-[1.18] text-balance"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Most organizations hire based on what they can afford — not what would
          actually move them forward.
        </h2>
        <p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-3xl mx-auto">
          A part-time coordinator instead of a strategist. A generalist instead
          of someone who's done the job before. It's not a lack of ambition —
          it's a lack of options.
        </p>
      </motion.div>
    </section>
  );
}
