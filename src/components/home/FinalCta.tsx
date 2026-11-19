import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
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

/**
 * Final CTA — existing YMBS dark navy treatment. Compact, acts as the
 * page's closing statement.
 */
export default function FinalCta() {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-20 bg-dark-section relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.18),transparent)]"></div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="max-w-3xl mx-auto px-6 text-center relative z-10"
      >
        <h2
          className="text-3xl md:text-[2.75rem] font-bold mb-5 text-white tracking-tight leading-[1.1] text-balance"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Your next breakthrough may start with one conversation.
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <Button
            className="btn-glow bg-primary text-black hover:bg-primary/90 font-bold px-10 h-14 text-base rounded-full transition-all hover:-translate-y-1"
            onClick={() => {
              track.assessmentStarted("SCALE");
              track.assessmentFunnelStep("SCALE", "final_cta");
              navigate("/scale/assessment");
            }}
          >
            Take the Free SCALE™ Assessment
          </Button>
          <Button
            variant="outline"
            className="bg-white/5 border-white/15 text-white hover:bg-white/10 font-bold px-10 h-14 text-base rounded-full transition-all backdrop-blur-md"
            onClick={() => {
              track.discoveryCallClick("final_cta");
              navigate("/contact");
            }}
          >
            Talk to an Advisor <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
        <p className="text-sm text-zinc-400 font-medium tracking-wide mb-6">
          A fit conversation. No obligation. No hard pitch. Just clarity.
        </p>

        {/* Risk-reduction signal */}
        <p className="text-sm text-zinc-300 font-medium tracking-wide">
          Start with one priority. Bring us in where you need us.
        </p>
      </motion.div>
    </section>
  );
}
