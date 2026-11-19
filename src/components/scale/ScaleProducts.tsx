import { motion, Variants } from "framer-motion";
import { scaleProducts } from "./scaleData";

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

export default function ScaleProducts() {
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-900 tracking-tight">
            The SCALE&trade; Product Suite
          </h2>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
            A complete methodology from diagnosis to sustained execution.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {scaleProducts.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="card-light rounded-2xl p-8 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">
                  {p.name}
                </h3>
                <p className="text-zinc-600 leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
