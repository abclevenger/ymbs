import { Network } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { scalePartners } from "./scaleData";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function ScalePartnerNetwork() {
  return (
    <section className="py-32 bg-light-section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6"
      >
        <motion.div variants={fadeUp} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 bg-white mb-6">
            <Network className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-600">
              Modular &amp; Expandable
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-900 tracking-tight">
            Professional Partner Network
          </h2>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
            YMBS coordinates the solution. Licensed professionals handle
            regulated work independently.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {scalePartners.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="card-light rounded-2xl p-8"
            >
              <h3 className="text-lg font-bold text-zinc-900 mb-3">
                {p.category}
              </h3>
              <p className="text-zinc-600 leading-relaxed">{p.providers}</p>
            </motion.div>
          ))}
          <motion.div
            variants={fadeUp}
            className="card-light rounded-2xl p-8 bg-primary/5 border-primary/20"
          >
            <h3 className="text-lg font-bold text-zinc-900 mb-3">
              YMBS Direct
            </h3>
            <p className="text-zinc-600 leading-relaxed">
              Technology, AI &amp; Automation, Marketing &amp; Communications,
              Operations, Leadership Development
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
