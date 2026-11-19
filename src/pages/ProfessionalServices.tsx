import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Users,
  MessageSquare,
  ClipboardCheck,
  Scale,
  Briefcase,
  TrendingUp,
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

const faqs = [
  {
    q: "What types of professional services firms does YMBS work with?",
    a: "We work with law firms, accounting practices, consulting firms, and other professional services organizations that have outgrown their informal systems and need operational, technology, or leadership infrastructure to sustain growth.",
  },
  {
    q: "Can you help with practice management software selection?",
    a: "Yes. We provide vendor-neutral evaluation of practice management, CRM, intake, billing, and document platforms. Recommendations are based on fit—not commissions. We handle implementation, migration, and staff adoption.",
  },
  {
    q: "Do you offer fractional COO services for professional services firms?",
    a: "Yes. Many firms need senior operational leadership before they can justify a full-time COO. Our fractional model gives you experienced executive support for operations, governance, and execution—at a fraction of the cost.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "A systems assessment takes 2–3 weeks. A structured implementation—technology consolidation, process documentation, or strategic planning—typically runs 60–120 days. Fractional engagements are ongoing and scale with your needs.",
  },
  {
    q: "Are you vendor-neutral?",
    a: "Yes. We do not resell software or take commissions. Every recommendation is based on what fits how your firm actually works. We evaluate platforms against your real workflows, not vendor demos.",
  },
  {
    q: "Do you work with firms outside Florida?",
    a: "Yes. We're based in Florida and serve professional services firms nationally. Most work is delivered through virtual collaboration and on-site sessions where appropriate.",
  },
];

export default function ProfessionalServices() {
  useEffect(() => {
    track.highIntentPageView("/professional-services", "Professional Services");
  }, []);

  const pillars = [
    {
      icon: <Cpu className="w-6 h-6 text-primary" />,
      title: "Technology",
      desc: "Practice management software, CRM, intake automation, cybersecurity, and vendor-neutral selection.",
      link: "/services/technology",
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-primary" />,
      title: "Operations",
      desc: "Documented workflows, governance, billing processes, and clear ownership across the firm.",
      link: "/services/operations",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "Communications",
      desc: "Executive readiness, client messaging, reputation, and stakeholder communication.",
      link: "/services/communications",
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Leadership",
      desc: "Strategic planning, partner alignment, team accountability, and organizational health.",
      link: "/services/leadership",
    },
  ];

  const problems = [
    "Practice management software that staff barely use or work around.",
    "Intake processes spread across phone, email, and forms with no single source of truth.",
    "Partners spending time on operations instead of client work and business development.",
    "Disconnected billing, document, and CRM systems creating manual data entry.",
    "Cybersecurity treated as an afterthought despite holding sensitive client data.",
    "Growth exposing process gaps that weren't visible when the firm was smaller.",
  ];

  return (
    <>
      <SEOHead
        title="Professional Services Consulting | YMBS"
        description="Operations, technology, communications, and leadership consulting for professional services firms. Vendor-neutral technology strategy, fractional COO, and executive advisory."
        canonical="/professional-services"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Professional Services Consulting",
            description:
              "Operations, technology, communications, and leadership consulting for professional services firms. Vendor-neutral technology strategy, fractional COO, and executive advisory. Based in Florida, serving nationally.",
            serviceType: "Professional Services Consulting",
            url: "https://ymbs.pro/professional-services",
            provider: {
              "@type": "Organization",
              name: "Yellow Mountain Business Solutions",
              url: "https://ymbs.pro",
            },
            areaServed: [{ "@type": "Country", name: "United States" }],
            audience: {
              "@type": "BusinessAudience",
              audienceType: "Law Firms, Accounting Firms, Consulting Firms",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Professional Services Consulting | YMBS",
            description:
              "Operations, technology, communications, and leadership consulting for professional services firms.",
            url: "https://ymbs.pro/professional-services",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
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
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold uppercase tracking-wider text-white">
                Professional Services
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Consulting That Fixes the Systems Behind Your Practice
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed"
            >
              YMBS helps professional services firms fix broken systems across
              operations, technology, communications, and leadership—so the firm
              runs cleanly and partners can focus on clients.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-black hover:bg-primary/90 font-bold px-10 h-14 rounded-full w-full sm:w-auto"
                  onClick={() => track.discoveryCallClick("pro_services_hero")}
                >
                  Get Clarity
                </Button>
              </Link>
              <Link to="/assessments/system-health">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/5 border-white/15 text-white hover:bg-white/10 font-semibold px-10 h-14 rounded-full w-full sm:w-auto backdrop-blur-md"
                >
                  Start an Assessment
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Four Pillars */}
        <section className="py-24 md:py-32 bg-[#F8F8F6]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto px-6"
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                One team. Four disciplines.
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Most firms hire separate consultants for each area. YMBS brings
                operations, technology, communications, and leadership together.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, i) => (
                <motion.div variants={fadeUp} key={i}>
                  <Link
                    to={pillar.link}
                    className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex flex-col h-full group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      {pillar.icon}
                    </div>
                    <h3
                      className="text-xl font-bold mb-3 text-zinc-900"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Problems */}
        <section className="py-24 md:py-32 bg-[#0B1D33] text-white relative overflow-hidden">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto px-6 relative z-10"
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Does any of this sound familiar?
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-4">
              {problems.map((problem, i) => (
                <motion.div
                  variants={fadeUp}
                  key={i}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10"
                >
                  <span className="text-primary font-bold text-xl mt-0.5 shrink-0">
                    —
                  </span>
                  <p className="text-zinc-300 leading-relaxed">{problem}</p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="text-center mt-12">
              <Link to="/contact">
                <Button
                  className="bg-primary text-black hover:bg-primary/90 font-bold px-8 h-14 rounded-full"
                  onClick={() =>
                    track.discoveryCallClick("pro_services_problems")
                  }
                >
                  Get Clarity <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* How we engage */}
        <section className="py-24 md:py-32 bg-[#F8F8F6]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto px-6"
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Start where you are. Build what you need.
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                YMBS can enter at any point and stay involved as long as the
                firm needs senior-level support.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  level: "ASSESS",
                  title: "Find the real problem",
                  desc: "Diagnose what's broken before spending money fixing the wrong thing.",
                  link: "/assessments/technology",
                  cta: "Start an Assessment",
                },
                {
                  level: "BUILD",
                  title: "Fix what's getting in the way",
                  desc: "Structured implementation projects with clear scope and deliverables.",
                  link: "/mission-foundation",
                  cta: "Explore Mission Foundation™",
                },
                {
                  level: "LEAD",
                  title: "Provide ongoing senior guidance",
                  desc: "Fractional executive access and integrated advisory.",
                  link: "/integrated-executive-advisory",
                  cta: "Explore Executive Advisory",
                  featured: true,
                },
              ].map((tier, i) => (
                <motion.div
                  variants={fadeUp}
                  key={i}
                  className={`rounded-2xl p-8 flex flex-col border transition-all ${
                    tier.featured
                      ? "bg-[#0B1D33] border-primary/30 text-white shadow-xl md:scale-105"
                      : "bg-white border-zinc-200 hover:border-primary/30"
                  }`}
                >
                  <p className="text-sm font-bold uppercase tracking-wider mb-3 text-primary">
                    {tier.level}
                  </p>
                  <h3
                    className={`text-2xl font-bold mb-3 ${tier.featured ? "text-white" : "text-zinc-900"}`}
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {tier.title}
                  </h3>
                  <p
                    className={`text-base mb-8 leading-relaxed flex-grow ${tier.featured ? "text-zinc-400" : "text-zinc-600"}`}
                  >
                    {tier.desc}
                  </p>
                  <Link to={tier.link}>
                    <Button
                      variant={tier.featured ? "default" : "outline"}
                      className={`w-full font-bold rounded-full h-12 ${tier.featured ? "bg-primary text-black hover:bg-primary/90" : "border-primary text-primary hover:bg-primary hover:text-black"}`}
                    >
                      {tier.cta}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FAQ */}
        <section className="py-24 md:py-32 bg-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto px-6"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold mb-12 text-center text-zinc-900 tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Common questions
            </motion.h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <motion.div
                  variants={fadeUp}
                  key={i}
                  className="bg-zinc-50 rounded-2xl border border-zinc-200 p-6 shadow-sm"
                >
                  <h3
                    className="text-lg font-bold mb-3 text-zinc-900"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {f.q}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">{f.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SCALE Intersection */}
        <ScaleIntersection
          pillar="Professional Services"
          dimensions={["Structure", "Alignment", "Execution"]}
          context="Professional services firms hit SCALE limits on capacity, process, and sales systems. SCALE diagnoses whether the firm has the Structure and Execution to sustain the next stage of growth."
          theme="light"
        />

        {/* Final CTA */}
        <section className="py-24 md:py-32 bg-[#0B1D33] text-white relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-10" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl mx-auto px-6 relative z-10"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Your next breakthrough may start with one conversation.
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
              In 30 minutes, we'll help identify what's actually holding your
              firm back and tell you what we'd do next.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 font-bold px-10 h-14 rounded-full shadow-lg shadow-primary/20"
                onClick={() => track.discoveryCallClick("pro_services_final")}
              >
                Get Clarity
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
