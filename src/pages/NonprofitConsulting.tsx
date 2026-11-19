import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { TrustSignals } from "@/components/TrustSignals";
import ScaleIntersection from "@/components/ScaleIntersection";
import {
  CheckCircle2,
  ArrowRight,
  Building2,
  Shield,
  Cpu,
  Users,
  MessageSquare,
  ClipboardCheck,
  FileText,
  HeartHandshake,
  TrendingUp,
  MapPin,
  Clock,
} from "lucide-react";

const faqs = [
  {
    q: "What types of nonprofits does YMBS work with?",
    a: "We work with nonprofits of all sizes—from grassroots community organizations to established regional nonprofits with 50+ staff. Our sweet spot is organizations that have outgrown their informal systems and need operational, technology, communications, or leadership infrastructure to sustain their next phase of growth.",
  },
  {
    q: "Can you help with board governance and audit readiness?",
    a: "Yes. Governance frameworks, board reporting structures, decision rights documentation, and audit-ready process documentation are core to our operations practice. We help your board get the visibility it needs while reducing the manual reporting burden on staff. When a matter requires licensed legal counsel—bylaws, employment law, or compliance review—YMBS coordinates the handoff to Mission Impact Legal or another appropriate legal provider under a separate engagement.",
  },
  {
    q: "Do you offer fractional COO services for nonprofits?",
    a: "Yes. Many nonprofits need senior operational leadership before they can justify a full-time COO. Our fractional COO model gives you experienced executive support for governance, operations, and strategic execution—at a fraction of the cost of a permanent hire.",
  },
  {
    q: "Can you help with nonprofit technology and CRM systems?",
    a: "Yes. We evaluate, select, and implement CRM, donor management, and operational technology platforms. We're vendor-neutral—recommendations are based on fit, not commissions. We also handle data migration, integrations, and staff adoption.",
  },
  {
    q: "How long does a typical nonprofit engagement take?",
    a: "A systems assessment takes 2–3 weeks. A structured implementation—governance setup, technology consolidation, process documentation, or strategic planning—typically runs 60–120 days. Fractional executive engagements are ongoing and scale with your needs.",
  },
  {
    q: "Do you work with nonprofits outside Florida?",
    a: "Yes. We're based in Florida and serve nonprofits nationally. Most of our work is delivered through a combination of virtual collaboration and on-site sessions where appropriate.",
  },
];

export default function NonprofitConsulting() {
  const painPoints = [
    {
      icon: ClipboardCheck,
      title: "Board Reporting",
      desc: "Your board lacks the visibility and reporting structure to govern effectively.",
    },
    {
      icon: FileText,
      title: "Governance & Audits",
      desc: "Documentation is scattered, incomplete, or living in one person's head.",
    },
    {
      icon: TrendingUp,
      title: "Grants & Funder Reporting",
      desc: "You need clean data and documented outcomes to retain and grow funding.",
    },
    {
      icon: Users,
      title: "Staff Capacity",
      desc: "Your team is stretched thin and institutional knowledge is concentrated in a few people.",
    },
    {
      icon: Cpu,
      title: "Disconnected Technology",
      desc: "Too many tools, none integrated, and staff using workarounds for everything.",
    },
    {
      icon: HeartHandshake,
      title: "Stakeholder Communication",
      desc: "Donors, board, staff, and community hear inconsistent messages about your mission.",
    },
  ];

  const pillars = [
    {
      icon: Building2,
      title: "Operations",
      desc: "Documented workflows, governance frameworks, audit-ready processes, and clear accountability.",
      link: "/services/operations",
    },
    {
      icon: Cpu,
      title: "Technology",
      desc: "Right-sized tech stacks, CRM, cybersecurity, automation, and reporting dashboards.",
      link: "/services/technology",
    },
    {
      icon: MessageSquare,
      title: "Communications",
      desc: "Executive readiness, stakeholder messaging, reputation, and consistent brand voice.",
      link: "/services/communications",
    },
    {
      icon: Users,
      title: "Leadership",
      desc: "Strategic planning, board facilitation, team alignment, and leadership development.",
      link: "/services/leadership",
    },
  ];

  return (
    <>
      <SEOHead
        title="Nonprofit Consulting | Operations, Technology & Leadership | YMBS"
        description="Nonprofit consulting that fixes the systems behind the mission. YMBS helps nonprofits improve operations, technology, communications, and leadership. Based in Florida, serving nationally."
        canonical="/nonprofit-consulting"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Nonprofit Consulting",
            description:
              "Nonprofit consulting that fixes the systems behind the mission. YMBS helps nonprofits improve operations, technology, communications, and leadership. Based in Florida, serving nationally.",
            serviceType: "Nonprofit Consulting",
            url: "https://ymbs.pro/nonprofit-consulting",
            provider: {
              "@type": "Organization",
              name: "Yellow Mountain Business Solutions",
              url: "https://ymbs.pro",
            },
            areaServed: [{ "@type": "Country", name: "United States" }],
            audience: {
              "@type": "BusinessAudience",
              audienceType: "Nonprofits, Mission-Driven Organizations",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Nonprofit Consulting",
            description:
              "Operations, technology, communications, and leadership consulting for nonprofits.",
            url: "https://ymbs.pro/nonprofit-consulting",
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

      <div className="flex flex-col min-h-screen">
        {/* HERO */}
        <section className="bg-dark-section text-white pt-32 pb-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(212,160,23,0.12),transparent)]"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="text-primary font-bold tracking-wider uppercase text-sm mb-6">
              Nonprofit Consulting
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold mb-8 text-balance leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Nonprofit Consulting That Fixes the Systems Behind the Mission
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-balance mb-10">
              YMBS helps nonprofits fix broken systems across operations,
              technology, communications, and leadership—so your mission doesn't
              stall because the infrastructure underneath it can't keep up.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-black hover:bg-primary/90 font-bold text-lg px-8 py-6 h-auto rounded-full btn-glow"
                >
                  Book a Nonprofit Strategy Call
                </Button>
              </Link>
              <Link to="/scale/assessment">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/5 border-white/15 text-white hover:bg-white/10 font-bold text-lg px-8 py-6 h-auto rounded-full transition-all backdrop-blur-md"
                >
                  Start a Free Assessment
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-zinc-500">
              Based in Florida. Serving nonprofits nationally.
            </p>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="bg-white border-b border-zinc-200 py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-bold uppercase tracking-widest text-zinc-500">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" /> Veteran-Owned
            </span>
            <span className="hidden md:inline text-zinc-300">·</span>
            <span className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-primary" /> Nonprofit
              Operations Expertise
            </span>
            <span className="hidden md:inline text-zinc-300">·</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Florida-Based,
              National Reach
            </span>
          </div>
        </section>

        {/* PAIN POINTS */}
        <section className="py-24 bg-light-section">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Where nonprofits quietly lose momentum
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Mission-driven organizations rarely fail on mission. They stall
                on the systems underneath it.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {painPoints.map((point, i) => {
                const Icon = point.icon;
                return (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3
                      className="text-xl font-bold mb-3 text-[#1A2433]"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      {point.title}
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FOUR PILLARS */}
        <section className="py-24 bg-dark-section text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                One team. Four disciplines. One mission moving forward.
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                Most nonprofits hire separate consultants for each area. YMBS
                brings them together.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <Link
                    key={i}
                    to={pillar.link}
                    className="card-dark rounded-2xl p-8 flex flex-col group hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3
                      className="text-xl font-bold mb-3 text-white"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed mb-6 flex-grow">
                      {pillar.desc}
                    </p>
                    <span className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROOF — Case Study */}
        <section className="py-16 bg-white border-t border-zinc-200">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-[#1A2433] text-white rounded-full text-sm font-bold tracking-wider uppercase">
                  Nonprofit
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wider uppercase">
                  Operations
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wider uppercase">
                  Technology
                </span>
              </div>
              <h3
                className="text-2xl font-bold mb-4 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Nonprofit Technology Consolidation & Operations
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    Problem
                  </p>
                  <p className="text-base text-zinc-600 leading-relaxed mb-4">
                    A regional nonprofit was paying for 6 disconnected
                    tools—donor management, email marketing, event registration,
                    project management, file storage, and accounting. None
                    integrated. Staff spent hours manually moving data between
                    systems.
                  </p>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    YMBS Approach
                  </p>
                  <p className="text-base text-zinc-600 leading-relaxed">
                    Consolidated the tech stack to 2 integrated platforms,
                    documented all core workflows, and trained staff on the new
                    systems.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    Result
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-base text-[#1A2433] font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{" "}
                      Eliminated 4 redundant software subscriptions
                    </li>
                    <li className="flex items-start gap-2 text-base text-[#1A2433] font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{" "}
                      Unified donor data in one system
                    </li>
                    <li className="flex items-start gap-2 text-base text-[#1A2433] font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{" "}
                      Documented workflows for all core processes
                    </li>
                    <li className="flex items-start gap-2 text-base text-[#1A2433] font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{" "}
                      Staff trained and adopting new systems
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-zinc-200">
                <Link
                  to="/client-results"
                  className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                >
                  See all client results <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FRACTIONAL COO CALLOUT */}
        <section className="py-24 bg-light-section">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
              Nonprofit Fractional COO
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Executive-level operations without an executive-level salary.
            </h2>
            <p className="text-lg text-zinc-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Most nonprofits need senior operational leadership before they can
              justify a full-time COO. Our fractional model gives you
              experienced executive support at a fraction of the cost.
            </p>
            <Link to="/fractional-coo">
              <Button
                variant="outline"
                className="font-bold px-8 py-6 h-auto text-lg rounded-full border-primary text-primary hover:bg-primary hover:text-black transition-all"
              >
                Explore Fractional COO Services{" "}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* SCALE FRAMEWORK CALLOUT */}
        <section className="py-20 bg-white border-y border-zinc-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
              SCALE™ Business Readiness
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold mb-4 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Is your nonprofit ready for what comes next?
            </h2>
            <p className="text-lg text-zinc-600 mb-8 max-w-2xl mx-auto">
              Take the free SCALE™ Business Readiness Assessment. Get a
              scorecard across Structure, Culture, Alignment, Liability &
              Governance, and Execution.
            </p>
            <Link to="/scale/assessment">
              <Button className="bg-primary text-black hover:bg-primary/90 font-bold px-8 py-6 h-auto text-lg rounded-full btn-glow">
                Take the Free Assessment
              </Button>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-light-section border-t border-[#0B1D33]/10">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Frequently asked questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden"
                >
                  <summary
                    className="flex items-center justify-between cursor-pointer p-6 font-bold text-[#1A2433] text-lg list-none"
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

        {/* SCALE Intersection */}
        <ScaleIntersection
          pillar="Nonprofits"
          dimensions={[
            "Structure",
            "Culture",
            "Alignment",
            "Liability & Governance Readiness",
            "Execution",
          ]}
          context="Nonprofits feel SCALE pressure acutely—board governance, funder accountability, and staff capacity all have to hold together. SCALE diagnoses where the mission is outpacing the systems underneath it."
          theme="light"
        />

        {/* FINAL CTA */}
        <section className="py-32 bg-dark-section relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.15),transparent)]"></div>
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <h2
              className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Your mission deserves systems that can keep up.
            </h2>
            <p className="text-lg text-zinc-400 mb-12 max-w-xl mx-auto">
              In 30 minutes, we'll help identify what's holding your nonprofit
              back and tell you what we'd do next.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-black hover:bg-primary/90 font-bold px-10 h-14 text-base rounded-full btn-glow transition-all hover:-translate-y-1"
                >
                  Book a Nonprofit Strategy Call
                </Button>
              </Link>
              <Link to="/scale/assessment">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/5 border-white/15 text-white hover:bg-white/10 font-bold px-10 h-14 text-base rounded-full transition-all backdrop-blur-md"
                >
                  Start a Free Assessment
                </Button>
              </Link>
            </div>
            <div className="mt-10">
              <TrustSignals variant="dark" compact />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
