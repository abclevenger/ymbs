import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import {
  ArrowRight,
  Network,
  Scale,
  ShieldCheck,
  Briefcase,
  Server,
  HeartPulse,
  Building2,
  FileWarning,
} from "lucide-react";
import ScaleIntersection from "@/components/ScaleIntersection";
import { track } from "@/lib/analytics";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
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

const partners = [
  {
    icon: Scale,
    category: "Legal",
    providers:
      "Mission Impact Legal (MILA), BizLaw, and other law firms as needed for nonprofit governance, employment matters, contracts, compliance, and general counsel needs.",
    note: "Legal services require a separate legal engagement and may be handled by MILA or another appropriate legal provider. YMBS is not a law firm and does not provide legal advice.",
  },
  {
    icon: Briefcase,
    category: "Accounting & Tax",
    providers:
      "Independent CPA and accounting partners for review, audit, and tax matters.",
  },
  {
    icon: ShieldCheck,
    category: "Insurance",
    providers:
      "Commercial insurance professionals for coverage review and risk transfer.",
  },
  {
    icon: HeartPulse,
    category: "Human Resources",
    providers:
      "HR specialists and consultants for policy, compliance, and people systems.",
  },
  {
    icon: Server,
    category: "Cybersecurity & MSP / IT",
    providers:
      "Security specialists and managed service providers for hands-on technical implementation and monitoring.",
  },
  {
    icon: Building2,
    category: "Industry Specialists",
    providers:
      "Telecom carriers, banking & capital partners, benefits specialists, and other professional advisors.",
  },
];

export default function PartnerNetwork() {
  useEffect(() => {
    track.highIntentPageView("/partners", "Partner Network");
  }, []);

  return (
    <>
      <SEOHead
        title="Trusted Specialist Network | YMBS"
        description="YMBS coordinates the solution and brings in vetted outside specialists—legal, accounting, insurance, HR, cybersecurity, and more—when an engagement requires expertise beyond the core team."
        canonical="/partners"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Trusted Specialist Network | YMBS",
          description:
            "YMBS coordinates the solution and brings in vetted outside specialists—legal, accounting, insurance, HR, cybersecurity, and more—when an engagement requires expertise beyond the core team.",
          serviceType: "Professional Partner Network",
          url: "https://ymbs.pro/partners",
          provider: {
            "@type": "Organization",
            name: "Yellow Mountain Business Solutions",
            url: "https://ymbs.pro",
          },
          areaServed: [{ "@type": "Country", name: "United States" }],
          audience: {
            "@type": "BusinessAudience",
            audienceType: "Nonprofits, Law Firms, Mission-Driven Organizations",
          },
        }}
      />

      <div className="min-h-screen selection:bg-primary selection:text-[#0B1D33]">
        {/* Hero */}
        <section className="relative py-24 md:py-32 bg-[#0B1D33] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-20" />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <Network className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold uppercase tracking-wider text-white">
                Trusted Specialist Network
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              YMBS coordinates the solution. Specialists handle the rest.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed"
            >
              The four-person YMBS core team handles operations, technology,
              communications, and leadership. When an engagement requires
              expertise outside that scope, we bring in vetted outside
              specialists—never as YMBS employees, always as independent
              professionals.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-black hover:bg-primary/90 font-bold px-10 h-14 rounded-full w-full sm:w-auto"
                  onClick={() => track.discoveryCallClick("partners_hero")}
                >
                  Get Clarity
                </Button>
              </Link>
              <Link to="/scale">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/5 border-white/15 text-white hover:bg-white/10 font-semibold px-10 h-14 rounded-full w-full sm:w-auto backdrop-blur-md"
                >
                  Explore the SCALE™ Framework
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* How it works */}
        <section className="py-24 md:py-28 bg-[#F8F8F6]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto px-6"
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                How the partner model works
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                YMBS identifies the problem, coordinates the solution, and
                brings in the right specialists when necessary. You remain free
                to use your own attorney, CPA, insurance broker, or HR provider.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "YMBS identifies the issue",
                  desc: "During an engagement we may surface operational, governance, compliance, or legal risk indicators.",
                },
                {
                  step: "02",
                  title: "We recommend specialist review",
                  desc: "When appropriate, we flag that legal, accounting, insurance, HR, or cybersecurity review may be warranted.",
                },
                {
                  step: "03",
                  title: "Independent engagement",
                  desc: "Any professional services are provided independently under a separate engagement—never billed through YMBS.",
                },
              ].map((s, i) => (
                <motion.div
                  variants={fadeUp}
                  key={i}
                  className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm flex flex-col"
                >
                  <span className="text-3xl font-bold text-primary mb-3">
                    {s.step}
                  </span>
                  <h3
                    className="text-xl font-bold text-zinc-900 mb-3"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Partner categories */}
        <section className="py-24 md:py-28 bg-white border-t border-zinc-200">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto px-6"
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Specialist categories
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                A modular, expandable network. No single outside provider is
                essential to an engagement.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    variants={fadeUp}
                    key={i}
                    className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200 flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3
                      className="text-xl font-bold text-zinc-900 mb-3"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      {p.category}
                    </h3>
                    <p className="text-zinc-600 leading-relaxed flex-grow">
                      {p.providers}
                    </p>
                    {p.note && (
                      <p className="text-xs text-zinc-500 italic mt-4 pt-4 border-t border-zinc-200">
                        {p.note}
                      </p>
                    )}
                  </motion.div>
                );
              })}
              <motion.div
                variants={fadeUp}
                className="bg-primary/5 rounded-2xl p-8 border border-primary/20 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Network className="w-6 h-6 text-primary" />
                </div>
                <h3
                  className="text-xl font-bold text-zinc-900 mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  YMBS Direct
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  Operations, technology, AI & automation, marketing &
                  communications, and leadership development—delivered by the
                  core YMBS team.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* MILA / BizLaw integration */}
        <section className="py-24 md:py-28 bg-[#0B1D33] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-10" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto px-6 relative z-10"
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Legal & governance intersections
              </h2>
              <p className="text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                YMBS may identify operational, governance, compliance, or legal
                risk indicators during an engagement. When a matter requires
                licensed legal counsel, it is referred or separately engaged
                through Mission Impact Legal (MILA) or another appropriate legal
                provider. BizLaw may be engaged for franchise and related
                matters. YMBS is not a law firm and does not provide legal
                advice.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="bg-white/[0.03] rounded-2xl border border-white/10 p-8 max-w-3xl mx-auto"
            >
              <div className="flex items-start gap-4">
                <FileWarning className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-sm text-zinc-300 leading-relaxed">
                  <span className="font-bold text-white">Disclaimer: </span>
                  YMBS provides business consulting, technology, operations,
                  marketing, leadership, and strategic advisory services. YMBS
                  is not a law firm and does not provide legal advice. Any
                  professional services from outside providers are provided
                  independently under separate engagements.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* SCALE Intersection */}
        <ScaleIntersection
          pillar="The Partner Network"
          dimensions={[
            "Liability & Governance Readiness",
            "Structure",
            "Execution",
          ]}
          context="The partner network is how SCALE handles Liability & Governance Readiness—when the assessment surfaces a regulated issue, YMBS coordinates the right licensed specialist rather than pretending one team does everything."
          theme="light"
        />

        {/* Final CTA */}
        <section className="py-24 md:py-28 bg-[#F8F8F6] border-t border-zinc-200 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl mx-auto px-6"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              One coordinated team. The right specialists when you need them.
            </h2>
            <p className="text-lg text-zinc-600 mb-10 max-w-xl mx-auto">
              Start with a discovery call. We'll help determine whether the
              problem needs YMBS, a specialist partner, or both.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 font-bold px-10 h-14 rounded-full shadow-lg shadow-primary/20"
                onClick={() => track.discoveryCallClick("partners_final")}
              >
                Get Clarity <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <p className="text-sm text-zinc-500 font-medium mt-6">
              No obligation. No hard pitch. Just clarity.
            </p>
          </motion.div>
        </section>
      </div>
    </>
  );
}
