import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

const disciplines = [
  {
    num: "01",
    title: "Operations",
    desc: "Structure & governance — documented workflows, clear ownership, board-ready governance.",
    outcome: "Clear ownership. Stronger processes. Fewer dropped balls.",
    transformation:
      "From undocumented processes → clear workflows and ownership",
    lead: "Led by Thania Clevenger",
    bioLink: "/thania-clevenger",
    cta: "Explore Operations",
    link: "/services/operations",
  },
  {
    num: "02",
    title: "Technology",
    desc: "Systems & automation — right-sized tech stacks, CRM, cybersecurity, reporting.",
    outcome: "Less manual work. Better visibility. Smarter systems.",
    transformation: "From disconnected tools → a coordinated operating stack",
    lead: "Led by Ashley Clevenger",
    bioLink: "/ashley-clevenger",
    cta: "Explore Technology",
    link: "/services/technology",
  },
  {
    num: "03",
    title: "Communications",
    desc: "Messaging & reputation — executive readiness, stakeholder communication, brand voice.",
    outcome:
      "Clearer messaging. Stronger reputation. Better stakeholder alignment.",
    transformation:
      "From inconsistent messaging → a clearer, more aligned voice",
    lead: "Led by Michelle Griffith, APR",
    bioLink: "/michelle-griffith",
    cta: "Explore Communications",
    link: "/services/communications",
  },
  {
    num: "04",
    title: "Leadership",
    desc: "Alignment & strategy — strategic planning, facilitation, team alignment.",
    outcome: "Better decisions. Stronger accountability. Clearer direction.",
    transformation:
      "From competing priorities → clearer direction and accountability",
    lead: "Led by Nestor Ortiz",
    bioLink: "/nestor-ortiz",
    cta: "Explore Leadership",
    link: "/services/leadership",
  },
];

/**
 * Four disciplines — one coordinated advisory team. All four equal cards
 * render in one row on desktop (lg:grid-cols-4). Each card includes an
 * outcome signal and a micro-transformation example as CX clarity signals,
 * visually subordinate to the main description. "Led by" lines link
 * directly to the corresponding team-member bio with a subtle hover state.
 */
export default function FourDisciplines() {
  return (
    <section className="py-16 md:py-24 bg-alt-section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="max-w-[1280px] mx-auto px-6"
      >
        <motion.div
          variants={fadeUp}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
            One integrated team
          </p>
          <h2
            className="text-3xl md:text-[2.5rem] font-bold text-[#1A2433] tracking-tight leading-[1.12]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Four disciplines. One coordinated advisory team.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {disciplines.map((d, i) => (
            <motion.div
              variants={fadeUp}
              key={i}
              className="card-light rounded-2xl p-6 md:p-9 flex flex-col h-full"
            >
              <span
                className="text-3xl font-bold text-primary mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {d.num}
              </span>
              <h3
                className="text-[1.35rem] font-bold mb-3.5 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {d.title}
              </h3>
              <p className="text-[15px] text-zinc-600 leading-relaxed mb-5">
                {d.desc}
              </p>

              {/* Leader — links directly to the team-member bio */}
              <Link
                to={d.bioLink}
                className="text-xs font-bold uppercase tracking-wider text-primary mb-5 border-t border-zinc-200 pt-5 inline-flex items-center gap-1.5 hover:text-primary/70 hover:gap-2.5 transition-all w-fit"
              >
                {d.lead}
              </Link>

              {/* Outcome signal — concise, visually subordinate */}
              <p className="text-[15px] font-semibold text-[#1A2433] leading-snug mb-2.5">
                {d.outcome}
              </p>

              {/* Micro-transformation example — smallest, most subordinate */}
              <p className="text-[13px] text-zinc-500 leading-relaxed italic flex-grow">
                {d.transformation}
              </p>

              <Link
                to={d.link}
                className="text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all text-primary mt-6"
              >
                {d.cta} <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Communications card: quick-jump link to V.I.T.A.L. methodology */}
              {d.title === "Communications" && (
                <Link
                  to="/scale#vital"
                  className="text-xs font-semibold text-primary/80 hover:text-primary inline-flex items-center gap-1.5 hover:gap-2.5 transition-all mt-3"
                >
                  See the V.I.T.A.L.™ methodology{" "}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
