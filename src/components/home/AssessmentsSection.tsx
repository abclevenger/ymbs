import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { track } from "@/lib/analytics";
import { TrustSignals } from "@/components/TrustSignals";

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

const assessments = [
  {
    title: "SCALE™ Assessment",
    desc: "Not sure where to start? A full diagnostic across all five pillars—in under 10 minutes.",
    cta: "Take the SCALE Assessment",
    featured: true,
    onClick: (navigate: (path: string) => void) =>
      navigate("/scale/assessment"),
  },
  {
    title: "Technology Assessment",
    desc: "Already know it's a tech problem? Get a clear inventory of what's slowing your team down.",
    cta: "Start Technology Audit",
    onClick: (navigate: (path: string) => void) =>
      navigate("/assessments/technology"),
  },
  {
    title: "Cyber Readiness",
    desc: "Find out where your cybersecurity posture has holes before an incident does.",
    cta: "Assess Readiness",
    onClick: (navigate: (path: string) => void) =>
      navigate("/assessments/cyber-readiness"),
  },
];

export default function AssessmentsSection() {
  const navigate = useNavigate();

  return (
    <>
      {/* Assessments — consolidated, secondary entry points */}
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
              Not sure where the real problem is?
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Start with a diagnostic. The SCALE&trade; Assessment looks across
              all four disciplines to find what&rsquo;s actually holding you
              back&mdash;no commitment required.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {assessments.map((assessment, i) => (
              <motion.div
                variants={fadeUp}
                key={i}
                className={`rounded-2xl p-8 flex flex-col border transition-all ${
                  assessment.featured
                    ? "bg-dark-section border-primary/30 text-white shadow-xl md:scale-[1.03]"
                    : "card-light bg-white border-zinc-200"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-3 ${assessment.featured ? "text-white" : "text-[#1A2433]"}`}
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {assessment.title}
                </h3>
                <p
                  className={`mb-6 flex-grow text-[15px] leading-relaxed ${assessment.featured ? "text-zinc-300" : "text-zinc-600"}`}
                >
                  {assessment.desc}
                </p>
                <Button
                  variant={assessment.featured ? "default" : "outline"}
                  className={`w-full font-bold rounded-full h-12 ${assessment.featured ? "bg-primary text-black hover:bg-primary/90" : "bg-white border-zinc-200 hover:bg-zinc-50 hover:text-primary"}`}
                  onClick={() => assessment.onClick(navigate)}
                >
                  {assessment.cta} <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final CTA — concise, strong */}
      <section className="py-28 md:py-36 bg-dark-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.18),transparent)]"></div>
        <motion.div
          initial="visible"
          animate="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="max-w-3xl mx-auto px-6 text-center relative z-10"
        >
          <h2
            className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Your next breakthrough may start with one conversation.
          </h2>
          <p className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed max-w-xl mx-auto">
            In 30 minutes, we'll talk through what's changing, where progress is
            getting stuck, and what the most practical next step may be.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button
              className="btn-glow bg-primary text-black hover:bg-primary/90 font-bold px-10 h-14 text-base rounded-full transition-all hover:-translate-y-1"
              onClick={() => {
                track.discoveryCallClick("final_cta");
                navigate("/contact");
              }}
            >
              Get Clarity
            </Button>
            <Button
              variant="outline"
              className="bg-white/5 border-white/15 text-white hover:bg-white/10 font-bold px-10 h-14 text-base rounded-full transition-all backdrop-blur-md"
              onClick={() => navigate("/scale/assessment")}
            >
              Take the SCALE Assessment
            </Button>
          </div>
          <p className="text-sm text-zinc-400 font-medium tracking-wide">
            A fit conversation. No obligation. No hard pitch. Just clarity.
          </p>
          <div className="mt-8">
            <TrustSignals variant="dark" showRating={true} />
          </div>
        </motion.div>
      </section>
    </>
  );
}
