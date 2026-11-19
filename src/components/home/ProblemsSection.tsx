import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { track } from "@/lib/analytics";

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

const problems = [
  "Growth is exposing needs your current team wasn't built to handle.",
  "Your team uses too many systems—and none of them work together.",
  "Leadership spends more time reacting than planning ahead.",
  "Teams are working hard but priorities still feel disconnected.",
];

const proofCards = [
  {
    problem: "Five disconnected intake systems with no clear ownership.",
    intervention:
      "Mapped the full intake process, consolidated into one CRM, and built automated routing.",
    result:
      "One unified workflow with clear accountability and faster response.",
    pillars: ["Technology", "Operations"],
  },
  {
    problem:
      "Board roles and decision rights were unclear. Key processes existed only in people's heads.",
    intervention:
      "Governance review, documented all core processes, and built a compliance-ready foundation.",
    result: "Clear board roles, documented SOPs, and audit-ready operations.",
    pillars: ["Operations", "Leadership"],
  },
  {
    problem:
      "Leadership needed to communicate a difficult decision to staff, board, and community.",
    intervention:
      "Prepared executives with messaging framework, stakeholder plan, and difficult Q&A prep.",
    result:
      "Composed, disciplined leadership across all stakeholder communications.",
    pillars: ["Communications", "Leadership"],
  },
];

export default function ProblemsSection() {
  const navigate = useNavigate();

  return (
    <>
      {/* Problems — concise, growth-oriented */}
      <section className="py-20 md:py-28 bg-dark-section relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px] -translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
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
            <h2
              className="text-3xl md:text-4xl font-bold mb-5 text-white tracking-tight leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Does any of this sound familiar?
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Growth creates new needs. These are the signs it's time to bring
              in senior support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
            {problems.map((problem, i) => (
              <motion.div
                variants={fadeUp}
                key={i}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all"
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <p className="text-lg leading-relaxed text-zinc-200">
                  {problem}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="text-center mt-12">
            <Button
              className="btn-glow bg-primary text-black hover:bg-primary/90 font-bold px-8 h-14 rounded-full transition-all hover:-translate-y-1"
              onClick={() => {
                track.discoveryCallClick("problems_section");
                navigate("/contact");
              }}
            >
              Get Clarity <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Proof — concise outcome cards */}
      <section className="py-20 md:py-28 bg-light-section">
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
              What changes when YMBS gets involved
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Real examples from YMBS engagements. Not invented metrics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {proofCards.map((card, i) => (
              <motion.div
                variants={fadeUp}
                key={i}
                className="card-light rounded-2xl p-8 flex flex-col"
              >
                <p className="text-xs font-bold uppercase tracking-wider mb-2 text-zinc-400">
                  Problem
                </p>
                <p className="text-[15px] text-zinc-600 mb-5 leading-relaxed">
                  {card.problem}
                </p>
                <p className="text-xs font-bold uppercase tracking-wider mb-2 text-primary">
                  YMBS Intervention
                </p>
                <p className="text-[15px] text-zinc-600 mb-5 leading-relaxed">
                  {card.intervention}
                </p>
                <p className="text-xs font-bold uppercase tracking-wider mb-2 text-primary">
                  Result
                </p>
                <p className="text-[15px] font-medium text-[#1A2433] mb-6 leading-relaxed flex-grow">
                  {card.result}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200">
                  {card.pillars.map((p, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-wider uppercase"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="text-center mt-10">
            <Link
              to="/client-results"
              className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all justify-center"
            >
              See all client results <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
