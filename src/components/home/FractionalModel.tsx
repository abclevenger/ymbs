import { motion, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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

const proofAreas = [
  "Legal practices",
  "Nonprofit & business operations",
  "Marketing & PR departments",
  "IT infrastructure",
];

/**
 * The gap we close — balanced two-column editorial layout on desktop.
 * Left ~55%: eyebrow, headline, body. Right ~45%: proof block with proof
 * areas and supporting statement. Vertically aligned, reduced empty space.
 */
export default function FractionalModel() {
  return (
    <section className="py-16 md:py-24 bg-light-section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="max-w-[1280px] mx-auto px-6"
      >
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-14 items-center">
          {/* Left column — narrative */}
          <motion.div variants={fadeUp} className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
              The gap we close
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2433] tracking-tight leading-[1.12]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Senior-level expertise, without the overhead of a full executive
              team.
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Small and mid-sized businesses, nonprofits, and mission-driven
              organizations — the backbone of America — deserve the same caliber
              of leadership that Fortune 500s take for granted. We quickly
              evaluate where you stand, prioritize what matters most right now,
              and bring in exactly the expertise you need.
            </p>
          </motion.div>

          {/* Right column — proof block */}
          <motion.div
            variants={staggerContainer}
            className="card-light rounded-2xl p-8 md:p-10 lg:p-12"
          >
            <p
              className="text-xl md:text-2xl font-bold mb-7 text-[#1A2433] leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Built from the ground up. Not theory — done it.
            </p>
            <ul className="space-y-5 mb-7">
              {proofAreas.map((area) => (
                <motion.li
                  variants={fadeUp}
                  key={area}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg text-[#1A2433] font-medium">
                    {area}
                  </span>
                </motion.li>
              ))}
            </ul>
            <p className="text-base md:text-lg text-zinc-600 leading-relaxed border-t border-zinc-200 pt-6">
              Our specialists bring experience in organizational change,
              operational challenges, HR compliance readiness, leadership
              alignment, and strategic communications. We start by understanding
              your priorities before recommending a scope of work.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
