import { CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { scaleStages } from "./scaleData";

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

export default function ScaleStages() {
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
            The Five Pillars
          </h2>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
            A complete view of your business readiness across five dimensions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scaleStages.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`card-light rounded-3xl p-10 flex flex-col ${p.letter === "L" ? "lg:col-span-3 md:col-span-2" : ""}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <span className="text-primary font-bold text-sm tracking-widest uppercase">
                      Pillar {p.letter}
                    </span>
                    <h3 className="text-2xl font-bold text-zinc-900 leading-tight">
                      {p.name}
                    </h3>
                  </div>
                </div>
                <p className="text-zinc-600 text-lg leading-relaxed mb-8 max-w-2xl">
                  {p.desc}
                </p>
                <div
                  className={`grid gap-3 ${p.letter === "L" ? "sm:grid-cols-2 lg:grid-cols-3" : ""}`}
                >
                  {p.checks.map((c, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-zinc-700 font-medium leading-snug">
                        {c}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
