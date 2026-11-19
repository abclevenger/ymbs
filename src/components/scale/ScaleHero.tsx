import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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

export default function ScaleHero() {
  return (
    <section className="relative pt-32 pb-24 flex items-center justify-center text-center px-6 overflow-hidden bg-dark-section">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(252,223,2,0.12),transparent)]"></div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-white"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-300">
            The YMBS Proprietary Methodology
          </span>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl font-bold mb-8 leading-[1.05] tracking-tight"
        >
          The <span className="text-gradient-primary">SCALE&trade;</span>{" "}
          Framework
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-xl md:text-2xl text-zinc-300 mb-6 max-w-3xl mx-auto font-medium text-balance leading-relaxed"
        >
          Is the business underneath your growth actually ready for what comes
          next?
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Scale follows structure. SCALE&trade; is the YMBS business-readiness
          methodology that identifies what&rsquo;s working, what&rsquo;s slowing
          growth, where risk exists, and what to fix first.
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link to="/scale/assessment">
            <Button className="btn-glow bg-primary text-black hover:bg-primary/90 font-bold text-lg px-10 py-7 h-auto rounded-full transition-all duration-300 transform hover:-translate-y-1">
              Take the Free SCALE&trade; Assessment{" "}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              variant="outline"
              className="bg-white/5 border-white/10 text-white hover:bg-white/10 font-bold text-lg px-10 py-7 h-auto rounded-full transition-all duration-300 backdrop-blur-md"
            >
              Get Clarity
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
