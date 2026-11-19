import { Settings, Cpu, Search, Users, CheckCircle2 } from "lucide-react";
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
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

interface PillarInput {
  name: "Operations" | "Technology" | "Communications" | "Leadership";
  points: string[];
  partner: string;
  partnerHref: string;
  pillarHref: string;
}

interface Stage {
  letter: string;
  name: string;
  summary: string;
  pillars: PillarInput[];
}

const stages: Stage[] = [
  {
    letter: "S",
    name: "Structure",
    summary:
      "The organizational architecture — roles, workflows, systems, and reporting lines.",
    pillars: [
      {
        name: "Operations",
        points: [
          "Roles & decision rights",
          "SOPs & workflows",
          "Operational infrastructure",
        ],
        partner: "Thania Clevenger",
        partnerHref: "/thania-clevenger",
        pillarHref: "/services/operations",
      },
      {
        name: "Technology",
        points: [
          "Technology architecture",
          "CRM & systems",
          "Automation & reporting",
        ],
        partner: "Ashley Clevenger",
        partnerHref: "/ashley-clevenger",
        pillarHref: "/services/technology",
      },
    ],
  },
  {
    letter: "C",
    name: "Culture",
    summary:
      "How people actually behave — trust, communication, accountability, and team dynamics.",
    pillars: [
      {
        name: "Leadership",
        points: [
          "Leadership behavior",
          "Team dynamics",
          "Accountability practices",
        ],
        partner: "Nestor Ortiz",
        partnerHref: "/nestor-ortiz",
        pillarHref: "/services/leadership",
      },
      {
        name: "Communications",
        points: [
          "Workplace communication",
          "Trust & transparency",
          "Internal messaging",
        ],
        partner: "Michelle Griffith",
        partnerHref: "/michelle-griffith",
        pillarHref: "/services/communications",
      },
    ],
  },
  {
    letter: "A",
    name: "Alignment",
    summary:
      "Whether strategy, technology, leadership, and stakeholders point in the same direction.",
    pillars: [
      {
        name: "Leadership",
        points: [
          "Strategic direction",
          "Ownership & goals",
          "Departmental alignment",
        ],
        partner: "Nestor Ortiz",
        partnerHref: "/nestor-ortiz",
        pillarHref: "/services/leadership",
      },
      {
        name: "Technology",
        points: ["Technology aligned to strategy", "Resource allocation"],
        partner: "Ashley Clevenger",
        partnerHref: "/ashley-clevenger",
        pillarHref: "/services/technology",
      },
    ],
  },
  {
    letter: "L",
    name: "Liability & Governance Readiness",
    summary:
      "Risk, compliance, security, policies, and governance — readiness indicators, not legal conclusions.",
    pillars: [
      {
        name: "Operations",
        points: [
          "Policies documented",
          "Compliance processes",
          "Decision authority clear",
        ],
        partner: "Thania Clevenger",
        partnerHref: "/thania-clevenger",
        pillarHref: "/services/operations",
      },
      {
        name: "Technology",
        points: ["Security posture", "Risk-management procedures"],
        partner: "Ashley Clevenger",
        partnerHref: "/ashley-clevenger",
        pillarHref: "/services/technology",
      },
      {
        name: "Communications",
        points: ["Communications exposure", "Reputation risk"],
        partner: "Michelle Griffith",
        partnerHref: "/michelle-griffith",
        pillarHref: "/services/communications",
      },
    ],
  },
  {
    letter: "E",
    name: "Execution",
    summary:
      "Whether the organization actually follows through — cadence, dashboards, accountability, and measurement.",
    pillars: [
      {
        name: "Operations",
        points: [
          "Operating cadence",
          "Project management",
          "Performance tracking",
        ],
        partner: "Thania Clevenger",
        partnerHref: "/thania-clevenger",
        pillarHref: "/services/operations",
      },
      {
        name: "Leadership",
        points: ["Follow-through & accountability", "Change management"],
        partner: "Nestor Ortiz",
        partnerHref: "/nestor-ortiz",
        pillarHref: "/services/leadership",
      },
      {
        name: "Technology",
        points: ["Dashboards & KPI reporting"],
        partner: "Ashley Clevenger",
        partnerHref: "/ashley-clevenger",
        pillarHref: "/services/technology",
      },
    ],
  },
];

const pillarIcons = {
  Operations: Settings,
  Technology: Cpu,
  Communications: Search,
  Leadership: Users,
} as const;

/**
 * "How the Four Disciplines Work Through SCALE" — maps each SCALE stage to the
 * pillars that contribute to it, making SCALE the connective methodology across
 * the four disciplines rather than a standalone framework.
 */
export default function ScalePillarMap() {
  return (
    <section className="py-24 bg-light-section border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-5xl font-bold mb-5 text-zinc-900 tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            How the four disciplines work through SCALE
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            SCALE isn&rsquo;t a fifth service. It&rsquo;s the lens YMBS uses to
            see how operations, technology, communications, and leadership each
            contribute to every stage of readiness.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-6"
        >
          {stages.map((stage) => (
            <motion.div
              key={stage.letter}
              variants={fadeUp}
              className="bg-white rounded-2xl border border-zinc-200 p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-64 shrink-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-11 h-11 rounded-xl bg-primary text-black flex items-center justify-center font-bold text-xl">
                      {stage.letter}
                    </span>
                    <h3
                      className="text-xl md:text-2xl font-bold text-zinc-900"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      {stage.name}
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {stage.summary}
                  </p>
                </div>
                <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {stage.pillars.map((p) => {
                    const Icon = pillarIcons[p.name];
                    return (
                      <div
                        key={p.name}
                        className="bg-light-section rounded-xl border border-zinc-200 p-5"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <Icon className="w-4 h-4 text-primary" />
                          <span className="font-bold text-sm text-[#1A2433]">
                            {p.name}
                          </span>
                        </div>
                        <ul className="space-y-2 mb-4">
                          {p.points.map((pt, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-zinc-600"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                              <span className="leading-snug">{pt}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          to={p.partnerHref}
                          className="text-xs text-zinc-500 hover:text-primary"
                        >
                          {p.partner}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
