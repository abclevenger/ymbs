import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";

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

// Existing YMBS team members, photos, and credentials already on the website.
// Order, role labels, and credibility lines reflect Michelle's approved
// homepage wording.
//
// TODO(Michelle): The source file marks the Compass 16 description as pending.
// Nestor's card uses only the approved one-line description below. Do not
// publish placeholder language — awaiting Michelle's full Compass 16 copy.
const team = [
  {
    name: "Thania Clevenger",
    role: "Operations | BizLaw",
    credibility:
      "Turns organizational complexity into clear ownership, systems, and governance.",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904440722007d7ffee3e5b.png",
    link: "/thania-clevenger",
  },
  {
    name: "Ashley Clevenger",
    role: "Technology",
    credibility:
      "Builds CRM, automation, and revenue systems that drive growth.",
    image:
      "https://vibe.filesafe.space/1776094666446468637/attachments/51e89f65-186a-4fdc-84c6-eadc6e1a2e2c.jpg",
    link: "/ashley-clevenger",
  },
  {
    name: "Michelle Griffith, APR",
    role: "Communications",
    credibility:
      "Prepares leaders for high-stakes moments; runs every campaign on Discovery & V.I.T.A.L.™",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a90453a9a0fb7c669893ce7.png",
    link: "/michelle-griffith",
  },
  {
    name: "Nestor Ortiz",
    role: "Leadership | Compass 16",
    credibility: "Builds leadership systems and accountability.",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a9047cf0dae815363fd4e1d.png",
    link: "/nestor-ortiz",
  },
];

/**
 * Team — senior specialists, one coordinated team. All four members shown
 * together in one row on desktop (lg:grid-cols-4). Reuses existing photos
 * and credentials. CTA links to the full team page.
 */
export default function TeamSection() {
  return (
    <section className="py-16 md:py-24 bg-light-section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="max-w-[1280px] mx-auto px-6"
      >
        <motion.div
          variants={fadeUp}
          className="text-center mb-10 max-w-2xl mx-auto"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
            The team
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1A2433] tracking-tight leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Senior specialists. One coordinated team.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div variants={fadeUp} key={i} className="h-full">
              <Link
                to={member.link}
                className="card-light rounded-2xl p-6 flex flex-col group block h-full hover:border-primary/30 transition-all"
              >
                <div className="w-full aspect-[4/5] mb-5 rounded-xl overflow-hidden bg-zinc-100 relative">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Yellow Mountain Business Solutions`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3
                  className="text-lg font-bold mb-1 text-[#1A2433]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {member.name}
                </h3>
                <p className="text-xs text-primary font-bold uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-[15px] text-zinc-600 leading-relaxed mb-4 flex-grow">
                  {member.credibility}
                </p>
                <span className="text-sm font-bold text-primary flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Meet {member.name.split(" ")[0]}{" "}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} className="text-center mt-10">
          <Link
            to="/team"
            className="btn-glow inline-flex items-center gap-2 bg-primary text-black hover:bg-primary/90 font-bold text-base px-10 h-14 rounded-full transition-all duration-300 hover:-translate-y-1"
          >
            Meet the YMBS Team <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
