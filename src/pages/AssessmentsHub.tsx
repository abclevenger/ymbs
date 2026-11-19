import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { track, initScrollDepthTracking } from "@/lib/analytics";
import SEOHead from "@/components/SEOHead";
import SymptomRouter from "@/components/assessments/SymptomRouter";
import AssessmentCatalog from "@/components/assessments/AssessmentCatalog";

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
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/**
 * Central Assessments Hub — /assessments
 * Positioned around: "You know something isn't working. You may not know where
 * the real problem is." Routes visitors from a symptom to the right assessment
 * or consultation across the four YMBS disciplines.
 */
export default function AssessmentsHub() {
  useEffect(() => {
    track.highIntentPageView("/assessments", "Assessments");
    const cleanup = initScrollDepthTracking("/assessments");
    return cleanup;
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Assessments — Find the Real Problem | YMBS"
        description="Start with a diagnostic. YMBS assessments help you find what's actually holding your organization back across operations, technology, communications, and leadership."
        canonical="/assessments"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "YMBS Assessments — Find the Real Problem",
          description:
            "Start with a diagnostic. YMBS assessments help you find what's actually holding your organization back across operations, technology, communications, and leadership.",
          url: "https://ymbs.pro/assessments",
        }}
      />
      {/* Hero */}
      <section className="relative pt-36 pb-28 md:pt-44 md:pb-32 flex items-center justify-center text-center px-6 overflow-hidden bg-dark-section">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(252,223,2,0.12),transparent)]"></div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-3xl mx-auto text-white"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <ClipboardList className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-300">
              Start with a diagnostic
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold mb-6 leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            You know something isn&rsquo;t working.
            <br />
            You may not know where the real problem is.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Organizational issues rarely live in one department. Technology
            affects operations. Operations affect communications. Communications
            affect leadership. Start with a diagnostic that looks across all
            four&mdash;then take the right next step.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/scale/assessment">
              <Button
                className="btn-glow bg-primary text-black hover:bg-primary/90 font-bold text-base px-10 h-14 rounded-full transition-all duration-300 hover:-translate-y-1"
                onClick={() => track.assessmentStarted("Organizational")}
              >
                Take the SCALE&trade; Assessment{" "}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="bg-white/5 border-white/15 text-white hover:bg-white/10 font-semibold text-base px-10 h-14 rounded-full transition-all duration-300 backdrop-blur-md"
              >
                Get Clarity
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Symptom routing */}
      <section className="py-20 md:py-24 bg-light-section">
        <SymptomRouter />
      </section>

      {/* Assessment catalog by discipline */}
      <section className="py-20 md:py-24 bg-white border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2433] tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Assessments by discipline
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Live, self-serve assessments where they exist. A guided
              consultation where a tool doesn&rsquo;t yet&mdash;never a fake
              quiz.
            </p>
          </div>
          <AssessmentCatalog />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-dark-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(252,223,2,0.15),transparent)]"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Not sure which one to take?
          </h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
            The SCALE&trade; Assessment is the place to start. It looks across
            all four disciplines and tells you where to focus first.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/scale/assessment">
              <Button className="btn-glow bg-primary text-black hover:bg-primary/90 font-bold px-10 h-14 text-base rounded-full transition-all hover:-translate-y-1">
                Take the SCALE&trade; Assessment{" "}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="bg-white/5 border-white/15 text-white hover:bg-white/10 font-bold px-10 h-14 text-base rounded-full transition-all backdrop-blur-md"
              >
                Get Clarity
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
