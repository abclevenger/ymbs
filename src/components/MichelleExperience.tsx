import { Mic, Users, Building2, Handshake, Star, Target } from "lucide-react";
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

const problems = [
  "Leadership describes the organization differently depending on who is speaking.",
  "A major announcement or organizational change needs a clear communications plan.",
  "Executives need preparation for interviews, testimony, presentations, or difficult questions.",
  "The organization lacks defined crisis-response roles, messages, or approval procedures.",
  "Stakeholders are receiving inconsistent information across channels.",
  "Good work is not translating into public understanding, confidence, or trust.",
];

const experience = [
  {
    icon: Building2,
    title: "Public health and government communications training",
  },
  { icon: Users, title: "Healthcare and mission-driven organizations" },
  { icon: Mic, title: "Executive and spokesperson coaching" },
  { icon: Star, title: "Organizational launches and reputation strategy" },
  {
    icon: Handshake,
    title: "Hospitality and professional-service positioning",
  },
  {
    icon: Target,
    title: "Nonprofit advocacy and public-awareness campaigns",
  },
];

export default function MichelleExperience() {
  return (
    <>
      {/* PROBLEMS MICHELLE HELPS SOLVE */}
      <section className="py-24 md:py-32 bg-dark-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.05),transparent_70%)] pointer-events-none"></div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto px-6 relative z-10"
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Problems Michelle helps solve
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              The moments that decide whether leadership earns trust—or loses
              it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="card-dark rounded-2xl p-8 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary font-bold text-sm">
                    {i + 1}
                  </span>
                </div>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  {problem}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SELECTED CATEGORY-LEVEL EXPERIENCE */}
      <section className="py-24 md:py-32 bg-alt-section">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto px-6"
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl font-bold mb-6 text-[#1A2433] tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Selected experience
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Categories of work that inform Michelle's approach.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experience.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3
                    className="text-lg font-bold text-[#1A2433] leading-snug"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </>
  );
}
