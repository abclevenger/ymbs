import { motion, Variants } from "framer-motion";

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

const steps = [
  {
    step: "01",
    title: "Content / Speaking / SEO / Referral",
    desc: "You discover YMBS through a talk, article, search, or introduction.",
  },
  {
    step: "02",
    title: "Free SCALE™ Business Readiness Assessment",
    desc: "A diagnostic across all five pillars—takes under 10 minutes.",
  },
  {
    step: "03",
    title: "SCALE™ Scorecard",
    desc: "Your visual summary with scores for each pillar and an overall readiness score.",
  },
  {
    step: "04",
    title: "SCALE™ Strategy Session",
    desc: "A consultation reviewing your results and identifying priorities.",
  },
  {
    step: "05",
    title: "90-Day SCALE™ Roadmap",
    desc: "A clear implementation plan with ownership and measurable outcomes.",
  },
  {
    step: "06",
    title: "YMBS Implementation / Advisory",
    desc: "We execute alongside your team across operations, technology, communications, and leadership.",
  },
  {
    step: "07",
    title: "Independent Professional Review (when necessary)",
    desc: "We refer or introduce you to independent licensed professionals—legal, CPA, insurance, HR, cybersecurity—as needed. You remain free to use your own providers.",
    highlight: true,
  },
];

export default function ScaleJourney() {
  return (
    <section className="py-32 bg-dark-section relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(252,223,2,0.06),transparent_60%)]"></div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto px-6 relative z-10"
      >
        <motion.div variants={fadeUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            The Client Journey
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            From first touch to sustained execution.
          </p>
        </motion.div>

        <div className="space-y-4">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`flex items-start gap-6 p-6 rounded-2xl ${s.highlight ? "card-dark border-primary/30" : "card-dark"}`}
            >
              <div className="text-3xl font-bold text-primary shrink-0 w-16">
                {s.step}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
