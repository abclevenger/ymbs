import { motion, Variants } from "framer-motion";
import { scaleTeamMapping } from "./scaleData";

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

export default function ScaleTeam() {
  return (
    <section className="py-32 bg-dark-section relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(252,223,2,0.05),transparent_70%)]"></div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <motion.div variants={fadeUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            One Team Across All Pillars
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            The YMBS team works across the five pillars—not as four disconnected
            practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scaleTeamMapping.map((m, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="card-dark rounded-3xl p-8 flex flex-col"
            >
              <div className="w-full aspect-square mb-6 rounded-2xl overflow-hidden bg-black">
                <img
                  src={m.image}
                  alt={`${m.name} - YMBS`}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{m.name}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{m.areas}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
