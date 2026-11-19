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

const capabilities = [
  {
    label: "Operations",
    title: "Structure & Governance",
    desc: "Documented workflows, clear ownership, board-ready governance, and accountability.",
    icon: "⚙",
    link: "/services/operations",
    partner: "Thania Clevenger",
    partnerLink: "/thania-clevenger",
  },
  {
    label: "Technology",
    title: "Systems & Automation",
    desc: "Right-sized tech stacks, CRM, cybersecurity, reporting, and vendor strategy.",
    icon: "◈",
    link: "/services/technology",
    partner: "Ashley Clevenger",
    partnerLink: "/ashley-clevenger",
  },
  {
    label: "Communications",
    title: "Messaging & Reputation",
    desc: "Executive readiness, stakeholder communication, and consistent brand voice.",
    icon: "✦",
    link: "/services/communications",
    partner: "Michelle Griffith, APR",
    partnerLink: "/michelle-griffith",
  },
  {
    label: "Leadership",
    title: "Alignment & Strategy",
    desc: "Strategic planning, facilitation, team alignment, and organizational health.",
    icon: "▲",
    link: "/services/leadership",
    partner: "Nestor Ortiz",
    partnerLink: "/nestor-ortiz",
  },
];

export default function PillarsAndOutcomes() {
  return (
    <section className="py-20 md:py-28 bg-light-section relative overflow-hidden">
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
            One fractional leadership team. Four connected capabilities.
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Most organizations hire separate consultants for each area. YMBS
            brings operations, technology, communications, and leadership
            together under one roof—so problems get solved at the source, not in
            silos.
          </p>
        </motion.div>

        {/* Connected-ribbon capability grid */}
        <div className="relative">
          {/* Shared gold ribbon foundation — desktop horizontal */}
          <div
            className="hidden md:block absolute left-[8%] right-[8%] top-[88px] h-1.5 rounded-full ribbon-gold opacity-80"
            aria-hidden="true"
          />
          {/* Mobile vertical ribbon connector */}
          <div
            className="md:hidden absolute left-7 top-0 bottom-0 w-1.5 rounded-full ribbon-gold opacity-70"
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {capabilities.map((pillar, i) => (
              <motion.div variants={fadeUp} key={i} className="relative">
                {/* Connector node on the ribbon */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 -top-[14px] hidden md:flex h-7 w-7 rounded-full ribbon-gold items-center justify-center shadow-md ring-4 ring-[#F5F3EF] z-10"
                  aria-hidden="true"
                >
                  <span className="text-[10px] font-bold text-[#0B1D33]">
                    {i + 1}
                  </span>
                </div>
                {/* Mobile connector node */}
                <div
                  className="md:hidden absolute left-[-33px] top-6 h-6 w-6 rounded-full ribbon-gold flex items-center justify-center shadow-md ring-4 ring-[#F5F3EF] z-10"
                  aria-hidden="true"
                >
                  <span className="text-[9px] font-bold text-[#0B1D33]">
                    {i + 1}
                  </span>
                </div>

                <Link
                  to={pillar.link}
                  className="card-light rounded-2xl p-7 flex flex-col group block h-full hover:border-primary/30 transition-all md:mt-10"
                >
                  <span className="text-2xl text-primary mb-4">
                    {pillar.icon}
                  </span>
                  <span className="text-xs text-primary font-bold uppercase tracking-widest mb-2">
                    {pillar.label}
                  </span>
                  <h3
                    className="text-lg font-bold mb-3 text-[#1A2433] leading-tight"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed text-[15px] mb-5">
                    {pillar.desc}
                  </p>
                  <div className="mt-auto pt-4 border-t border-zinc-100">
                    <p className="text-xs text-zinc-500 mb-1">Led by</p>
                    <span className="text-sm font-bold text-[#1A2433] group-hover:text-primary transition-colors">
                      {pillar.partner}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Shared foundation label */}
        <motion.p
          variants={fadeUp}
          className="text-center mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-primary/80"
        >
          One integrated system — not four disconnected consultants
        </motion.p>
      </motion.div>
    </section>
  );
}
