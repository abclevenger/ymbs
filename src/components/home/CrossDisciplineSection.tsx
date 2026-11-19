import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
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

export interface CrossDisciplineSectionProps {
  /** The current discipline, excluded from the link list. */
  current: "Operations" | "Technology" | "Communications" | "Leadership";
}

const ALL_DISCIPLINES = [
  { title: "Operations", href: "/services/operations" },
  { title: "Technology", href: "/services/technology" },
  { title: "Communications", href: "/services/communications" },
  { title: "Leadership", href: "/services/leadership" },
];

/**
 * Cross-discipline connection — appears near the bottom of every primary
 * discipline page. Reinforces that YMBS is one coordinated advisory team
 * and links to the other three disciplines. Kept visually light.
 */
export default function CrossDisciplineSection({
  current,
}: CrossDisciplineSectionProps) {
  const others = ALL_DISCIPLINES.filter((d) => d.title !== current);

  return (
    <section className="py-20 md:py-24 bg-light-section border-t border-zinc-200">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="text-2xl md:text-3xl font-bold mb-5 text-[#1A2433] tracking-tight leading-[1.15] text-balance"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          One problem rarely lives in one department.
        </motion.h2>
        <motion.div
          variants={fadeUp}
          className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto space-y-4 mb-10"
        >
          <p>
            A technology problem may actually be an operations problem. A
            communications issue may reveal a leadership gap. A growth
            initiative may require all three.
          </p>
          <p>
            YMBS can bring multiple disciplines together when the situation
            requires it.
          </p>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-4"
        >
          {others.map((d) => (
            <Link
              key={d.title}
              to={d.href}
              className="inline-flex items-center gap-2 bg-white rounded-full border border-zinc-200 px-6 h-12 text-sm font-bold text-[#1A2433] hover:border-primary hover:text-primary transition-all"
            >
              {d.title} <ArrowRight className="w-4 h-4" />
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
