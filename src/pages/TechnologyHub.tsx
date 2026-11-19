import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { track } from "@/lib/analytics";
import ScaleIntersection from "@/components/ScaleIntersection";
import CrossDisciplineSection from "@/components/home/CrossDisciplineSection";

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
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const categories = [
  {
    name: "Strategy & Systems",
    color: "from-primary/20 to-transparent",
    services: [
      {
        title: "Technology Strategy",
        path: "/services/technology",
        desc: "Assess, right-size, and implement technology without vendor chaos.",
      },
      {
        title: "Software Selection",
        path: "/services/technology/software-solutions",
        desc: "Vendor-neutral evaluation of platforms that fit how you work.",
      },
      {
        title: "CRM & Workflow",
        path: "/services/technology/crm-workflow",
        desc: "Consolidate tools and automate the work between them.",
      },
    ],
  },
  {
    name: "Security & Infrastructure",
    color: "from-blue-500/20 to-transparent",
    services: [
      {
        title: "Cybersecurity & Risk",
        path: "/services/technology/cybersecurity",
        desc: "Build a defensible security posture without an enterprise budget.",
      },
      {
        title: "Connectivity & Comms",
        path: "/services/technology/connectivity",
        desc: "Reliable networks and communications systems that connect your people.",
      },
      {
        title: "IoT & Physical Security",
        path: "/services/technology/iot-physical-security",
        desc: "Smart building systems, access control, and physical security.",
      },
    ],
  },
  {
    name: "Growth & Automation",
    color: "from-emerald-500/20 to-transparent",
    services: [
      {
        title: "AI & Automation",
        path: "/services/technology/ai-automation",
        desc: "Automate repetitive work with AI that enhances, not replaces, judgment.",
      },
      {
        title: "Website & SEO",
        path: "/services/technology/website-seo",
        desc: "High-performance websites and technical SEO infrastructure.",
      },
      {
        title: "Digital Signage",
        path: "/services/technology/digital-signage",
        desc: "Digital display networks for communication and engagement.",
      },
      {
        title: "Mobility & Workforce",
        path: "/services/technology/mobility-workforce",
        desc: "Mobile-first systems that keep distributed teams productive.",
      },
    ],
  },
];

export default function TechnologyHub() {
  useEffect(() => {
    track.highIntentPageView("/services/technology", "Technology Hub");
  }, []);

  return (
    <>
      <SEOHead
        title="Fractional Technology Advisory | YMBS"
        description="Business technology, automation, CRM, AI, cybersecurity, and digital infrastructure aligned around how your organization actually works. Vendor-neutral. Led by Ashley Clevenger."
        canonical="/services/technology"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Fractional Technology Advisory",
            description:
              "Vendor-neutral technology strategy, systems, automation, AI, cybersecurity, and digital platforms for nonprofits, law firms, and mission-driven organizations.",
            serviceType: "Technology Consulting",
            url: "https://ymbs.pro/services/technology",
            provider: {
              "@type": "Organization",
              name: "Yellow Mountain Business Solutions",
              url: "https://ymbs.pro",
            },
            areaServed: [{ "@type": "Country", name: "United States" }],
            audience: {
              "@type": "BusinessAudience",
              audienceType:
                "Nonprofits, Law Firms, Mission-Driven Organizations",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Fractional Technology Advisory",
            description:
              "Vendor-neutral technology strategy, systems, automation, AI, cybersecurity, and digital platforms.",
            url: "https://ymbs.pro/services/technology",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What does a fractional technology advisor actually do?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A fractional technology advisor provides senior-level technology strategy and implementation guidance without the cost of a full-time CIO or CTO. We assess your current environment, recommend right-sized solutions, oversee implementation, and ensure your team actually adopts the tools.",
                },
              },
              {
                "@type": "Question",
                name: "How is this different from hiring an MSP?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "An MSP manages your existing systems and keeps the lights on. A fractional technology advisor helps you decide which systems you should have in the first place—strategy, vendor selection, negotiation, implementation oversight, and roadmap planning. We represent you, not the vendors.",
                },
              },
              {
                "@type": "Question",
                name: "What is the Living Technology Record?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Living Technology Record is a structured, maintained document of your entire technology environment—locations, circuits, carriers, vendors, contracts, renewal dates, systems, licenses, security posture, integrations, costs, and roadmap.",
                },
              },
              {
                "@type": "Question",
                name: "Are you vendor-neutral?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Recommendations are based on what fits your organization—not commissions or partner kickbacks. We assess, select, implement, and make sure your team adopts it. We represent you, not the vendors.",
                },
              },
              {
                "@type": "Question",
                name: "Can technology work be combined with other YMBS disciplines?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Technology decisions almost always affect operations, communications, and leadership. Because YMBS brings all four disciplines under one team, we can coordinate the expertise you need without managing multiple disconnected vendors.",
                },
              },
            ],
          },
        ]}
      />
      <div className="min-h-screen selection:bg-primary selection:text-[#0B1D33]">
        {/* Hero */}
        <section className="relative py-24 md:py-32 bg-[#0B1D33] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(252,223,2,0.12),transparent_60%)]" />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4"
            >
              Technology · Led by Ashley Clevenger
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Technology Strategy That Fits the Way Your Organization Actually
              Works
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed"
            >
              Vendor-neutral technology consulting. We assess what you have,
              recommend what fits, implement it, and make sure your team
              actually uses it.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-black hover:bg-primary/90 font-bold px-10 h-14 rounded-full w-full sm:w-auto"
                  onClick={() => track.discoveryCallClick("tech_hub_hero")}
                >
                  Get Clarity
                </Button>
              </Link>
              <Link to="/assessments/technology">
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

        {/* Category Grid */}
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
                Explore technology focus areas
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Nine connected disciplines covering the full technology
                lifecycle—from strategy and security to automation and growth.
              </p>
            </motion.div>

            <div className="space-y-12">
              {categories.map((cat, ci) => (
                <motion.div key={ci} variants={fadeUp}>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`h-1 w-12 rounded-full bg-gradient-to-r ${cat.color}`}
                    />
                    <h3
                      className="text-2xl font-bold text-zinc-900"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      {cat.name}
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cat.services.map((service, si) => (
                      <Link
                        key={si}
                        to={service.path}
                        className="group bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex flex-col h-full"
                      >
                        <h4
                          className="text-xl font-bold mb-3 text-zinc-900 group-hover:text-primary transition-colors"
                          style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                          }}
                        >
                          {service.title}
                        </h4>
                        <p className="text-zinc-600 leading-relaxed text-base mb-6 flex-grow">
                          {service.desc}
                        </p>
                        <span className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                          Explore <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Why vendor-neutral */}
        <section className="py-24 md:py-32 bg-[#0B1D33] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.1),transparent)]" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto px-6 relative z-10"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold mb-6 text-center text-white tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              We don't recommend software and leave.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto text-center leading-relaxed"
            >
              Recommendations are based on what fits your organization—not
              commissions or partner kickbacks. We assess, select, implement,
              and make sure your team actually adopts it.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Assess", desc: "What do you currently have?" },
                { title: "Select", desc: "Which platforms actually fit?" },
                { title: "Implement", desc: "How do we make it work?" },
                { title: "Adopt", desc: "How do we ensure staff use it?" },
                { title: "Optimize", desc: "What should improve next?" },
                { title: "Support", desc: "Ongoing fractional guidance." },
              ].map((step, i) => (
                <motion.div
                  variants={fadeUp}
                  key={i}
                  className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6"
                >
                  <h3
                    className="text-lg font-bold mb-2 text-primary"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Living Technology Record */}
        <section className="py-24 md:py-32 bg-[#F8F8F6] border-t border-zinc-100">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto px-6"
          >
            <motion.div
              variants={fadeUp}
              className="text-center mb-12 max-w-2xl mx-auto"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
                The Living Technology Record
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-5 text-zinc-900 tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Your technology, documented and kept current
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Most organizations can&rsquo;t answer &ldquo;what do we actually
                own?&rdquo; YMBS builds and maintains a structured record of
                your technology environment&mdash;so decisions, renewals, and
                risk aren&rsquo;t made blind.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {[
                "Locations, circuits, and carriers",
                "Vendors, contracts, and renewal dates",
                "Systems, licenses, and integrations",
                "Security posture and risk",
                "Technology costs and implementation history",
                "Forward technology roadmap",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 border border-zinc-200 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-zinc-700 text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* What the work may produce */}
        <section className="py-16 bg-white border-t border-zinc-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-zinc-900"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Practical outputs. Not just recommendations.
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Deliverables depend on the organization, priorities, and scope
                of engagement.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Technology stack assessment",
                "Living Technology Record",
                "Vendor evaluation matrix",
                "CRM / workflow buildout",
                "Cybersecurity risk review",
                "AI / automation roadmap",
                "Contract & renewal calendar",
                "Priority implementation plan",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#F8F8F6] rounded-xl p-5 border border-zinc-200 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-zinc-700 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How engagement works */}
        <section className="py-20 bg-[#F8F8F6] border-t border-zinc-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
              How you can work with us
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Bring us in where you need us
            </h2>
            <p className="text-lg text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Technology support is available as a focused project, ongoing
              fractional advisory, strategic guidance, or hands-on
              implementation support.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Project-Based",
                  desc: "Focused expertise around a defined initiative or problem.",
                },
                {
                  title: "Fractional",
                  desc: "Ongoing senior-level support without another full-time executive.",
                },
                {
                  title: "Advisory",
                  desc: "Strategic guidance, prioritization, and decision support.",
                },
                {
                  title: "Implementation",
                  desc: "Hands-on help putting the plan, systems, and processes into practice.",
                },
              ].map((mode, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-zinc-200 text-left"
                >
                  <h3
                    className="text-base font-bold mb-2 text-zinc-900"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {mode.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {mode.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ScaleIntersection
          pillar="Technology"
          dimensions={[
            "Structure",
            "Liability & Governance Readiness",
            "Execution",
          ]}
          context="Technology is the Structure your organization runs on. Disconnected systems create risk and break Execution—so SCALE evaluates your tech stack as a readiness dimension, not just a tools list."
          theme="light"
        />

        {/* Expert */}
        <section className="py-24 bg-white border-t border-zinc-200">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-8 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                  Led by
                </p>
                <h3
                  className="text-2xl font-bold mb-1 text-zinc-900"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Ashley Clevenger
                </h3>
                <p className="text-sm text-zinc-500 mb-4">
                  Business Technology, Growth & Sales Operations
                </p>
                <p className="text-zinc-600 leading-relaxed mb-6">
                  21+ years working with mission-critical systems—including U.S.
                  Coast Guard information systems, public safety technology, and
                  broadband infrastructure. Built in environments where systems
                  cannot fail.
                </p>
                <Link
                  to="/ashley-clevenger"
                  className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Meet Ashley <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-8 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                  Start here
                </p>
                <h3
                  className="text-2xl font-bold mb-3 text-zinc-900"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Technology Systems Assessment
                </h3>
                <p className="text-zinc-600 leading-relaxed mb-6">
                  Understand your current technology environment and get a
                  prioritized roadmap. System inventory, software review,
                  cybersecurity risk review, and AI/automation opportunities.
                </p>
                <Link to="/assessments/technology">
                  <Button
                    variant="outline"
                    className="font-bold rounded-full border-primary text-primary hover:bg-primary hover:text-black"
                  >
                    Start an Assessment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#F8F8F6] border-t border-zinc-200">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Frequently asked questions
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "What does a fractional technology advisor actually do?",
                  a: "A fractional technology advisor provides senior-level technology strategy and implementation guidance without the cost of a full-time CIO or CTO. We assess your current environment, recommend right-sized solutions, oversee implementation, and ensure your team actually adopts the tools—not just installs them.",
                },
                {
                  q: "How is this different from hiring an MSP?",
                  a: "An MSP manages your existing systems and keeps the lights on. A fractional technology advisor helps you decide which systems you should have in the first place—strategy, vendor selection, negotiation, implementation oversight, and roadmap planning. We represent you, not the vendors.",
                },
                {
                  q: "What is the Living Technology Record?",
                  a: "The Living Technology Record is a structured, maintained document of your entire technology environment—locations, circuits, carriers, vendors, contracts, renewal dates, systems, licenses, security posture, integrations, costs, and roadmap. Most organizations can't answer 'what do we actually own?' We build and keep that record current.",
                },
                {
                  q: "Are you vendor-neutral?",
                  a: "Yes. Recommendations are based on what fits your organization—not commissions or partner kickbacks. We assess, select, implement, and make sure your team adopts it. We represent you, not the vendors.",
                },
                {
                  q: "Can technology work be combined with other YMBS disciplines?",
                  a: "Yes. Technology decisions almost always affect operations, communications, and leadership. Because YMBS brings all four disciplines under one team, we can coordinate the expertise you need without managing multiple disconnected vendors.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden"
                >
                  <summary
                    className="flex items-center justify-between cursor-pointer p-6 font-bold text-zinc-900 text-lg list-none"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {faq.q}
                    <ArrowRight className="w-5 h-5 text-primary transition-transform duration-300 group-open:rotate-90 shrink-0 ml-4" />
                  </summary>
                  <div className="px-6 pb-6 text-zinc-600 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-discipline connection */}
        <CrossDisciplineSection current="Technology" />

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
              Ready to make your tech feel calm again?
            </h2>
            <p className="text-lg text-zinc-400 mb-4 max-w-xl mx-auto leading-relaxed">
              In 30 minutes, we'll help identify what's actually holding your
              organization back and tell you what we'd do next.
            </p>
            <p className="text-sm text-zinc-500 mb-10">
              30 minutes • No obligation • Leave with clearer priorities
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-black hover:bg-primary/90 font-bold px-10 h-14 rounded-full shadow-lg shadow-primary/20"
                  onClick={() => track.discoveryCallClick("tech_hub_final")}
                >
                  Get Clarity
                </Button>
              </Link>
              <Link to="/scale/assessment">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/5 border-white/15 text-white hover:bg-white/10 font-bold px-10 h-14 rounded-full w-full sm:w-auto backdrop-blur-md"
                >
                  Take the SCALE™ Assessment
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
