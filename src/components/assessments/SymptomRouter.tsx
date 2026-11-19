import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { track } from "@/lib/analytics";
import { symptomRoutes } from "@/lib/assessmentsData";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Interactive symptom → area router. Lets visitors enter through the problem
 * they're experiencing rather than forcing them to choose a discipline first.
 */
export default function SymptomRouter() {
  const [activeSymptom, setActiveSymptom] = useState<string | null>(null);
  const active = symptomRoutes.find((s) => s.id === activeSymptom);

  return (
    <motion.div variants={fadeUp} className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-10">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2433] tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          What are you experiencing?
        </h2>
        <p className="text-lg text-zinc-600 leading-relaxed">
          Pick the one that sounds most like your organization. We&rsquo;ll
          point you to the right place to start.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {symptomRoutes.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSymptom(s.id)}
            className={`px-5 py-3 rounded-full text-sm font-semibold border transition-all ${
              activeSymptom === s.id
                ? "bg-primary text-black border-primary shadow-md"
                : "bg-white text-[#1A2433] border-zinc-200 hover:border-primary/40 hover:text-primary"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {active && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-8 md:p-10 text-center"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3">
            Likely involved: {active.area}
          </span>
          <p className="text-lg text-zinc-700 leading-relaxed mb-6 max-w-2xl mx-auto">
            {active.recommendation}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {active.assessmentHref ? (
              <Link to={active.assessmentHref}>
                <Button className="bg-primary text-black hover:bg-primary/90 font-bold px-8 h-12 rounded-full">
                  {active.assessmentLabel}{" "}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            ) : (
              <Link to="/contact">
                <Button className="bg-primary text-black hover:bg-primary/90 font-bold px-8 h-12 rounded-full">
                  Get Clarity <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            )}
            <Link
              to={active.areaHref}
              className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1"
            >
              Explore {active.area} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
