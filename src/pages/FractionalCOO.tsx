import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { TrustSignals } from "@/components/TrustSignals";
import ScaleIntersection from "@/components/ScaleIntersection";
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  DollarSign,
  Building2,
  Users,
  Shield,
  Linkedin,
  MapPin,
  TrendingUp,
} from "lucide-react";

const faqs = [
  {
    q: "What does a fractional COO actually do?",
    a: "A fractional COO is a seasoned operations executive who works with your organization part-time—usually 1–3 days per week. They take ownership of operational execution, governance, process documentation, team accountability, and strategic implementation. Unlike a consultant who hands you a report and leaves, a fractional COO stays to execute.",
  },
  {
    q: "How much does a fractional COO cost?",
    a: "A fractional COO typically costs a fraction of a full-time COO salary ($150K–$300K+). Engagements are scoped based on your needs—whether project-based, ongoing part-time, or a combined COO + CCO partnership. Most organizations find the fractional model delivers executive-level outcomes at 20–40% of a full-time hire.",
  },
  {
    q: "Is a fractional COO right for nonprofits?",
    a: "Yes. Nonprofits often need senior operational leadership before they can justify a full-time COO. A fractional COO gives you executive support for governance, board reporting, audit readiness, staff accountability, and process documentation—without the overhead of a permanent executive salary.",
  },
  {
    q: "How is this different from hiring a consultant?",
    a: "Consultants deliver recommendations. A fractional COO delivers execution. They sit in your leadership meetings, own operational outcomes, manage staff accountability, and make sure decisions actually get implemented. They are embedded in your team, not external to it.",
  },
  {
    q: "Can a fractional COO help with governance and board reporting?",
    a: "Yes. Governance frameworks, board-ready reporting structures, decision rights documentation, and compliance readiness are core deliverables. We help your board get the visibility it needs without overwhelming staff with manual reporting.",
  },
  {
    q: "What happens when we outgrow a fractional COO?",
    a: "We build the operational foundation, document the systems, and help you transition to a full-time COO when the time is right. Many of our clients use the fractional model to bridge the gap until they can justify a permanent hire—and we help them define what that role should look like.",
  },
];

export default function FractionalCOO() {
  const deliverables = [
    "Operational structure and reporting lines",
    "Governance frameworks and board-ready reporting",
    "Documented workflows and standard operating procedures",
    "Audit readiness and compliance documentation",
    "Performance dashboards and KPI tracking",
    "Vendor management and operational vendor strategy",
    "Staff accountability matrices and role clarity",
    "Strategic planning facilitation and execution support",
  ];

  const engagementModels = [
    {
      icon: Clock,
      title: "Project-Based",
      desc: "A defined operational initiative—governance setup, audit prep, workflow documentation, or a systems reset. Fixed scope, fixed timeline.",
      best: "Best for: Organizations with a specific operational gap to close.",
    },
    {
      icon: Building2,
      title: "Fractional COO",
      desc: "Ongoing senior operational leadership without a full-time hire. We function as your part-time COO, embedded in your leadership team.",
      best: "Best for: Organizations that need executive operations support but can't justify a full-time COO.",
      featured: true,
    },
    {
      icon: Users,
      title: "COO + CCO Partnership",
      desc: "Combined Fractional COO and Fractional Chief Communications Officer. Thania handles what needs to happen; Michelle handles how it's communicated.",
      best: "Best for: Organizations navigating transitions, restructures, or reputation-sensitive changes.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Fractional COO Services | Operations & Governance | YMBS"
        description="Fractional COO services for nonprofits, small businesses, and mission-driven organizations. Executive-level operations leadership without a full-time salary. Led by Thania Clevenger."
        canonical="/fractional-coo"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Fractional COO Services",
            description:
              "Fractional COO services for nonprofits, small businesses, and mission-driven organizations. Executive-level operations leadership without a full-time salary. Led by Thania Clevenger.",
            serviceType: "Fractional COO",
            url: "https://ymbs.pro/fractional-coo",
            provider: {
              "@type": "Organization",
              name: "Yellow Mountain Business Solutions",
              url: "https://ymbs.pro",
            },
            areaServed: [{ "@type": "Country", name: "United States" }],
            audience: {
              "@type": "BusinessAudience",
              audienceType:
                "Nonprofits, Small Businesses, Mission-Driven Organizations",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Fractional COO Services",
            description:
              "Executive-level operations leadership without a full-time salary.",
            url: "https://ymbs.pro/fractional-coo",
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
            <div className="mb-8 inline-block relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors duration-500"></div>
              <img
                src="https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904440722007d7ffee3e5b.png"
                alt="Thania Clevenger — Fractional COO at YMBS"
                className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-white/10 object-cover mx-auto relative z-10"
              />
              <a
                href="https://www.linkedin.com/in/thania-clevenger/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-0 right-0 w-8 h-8 bg-brand-dark rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all z-20"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <p className="text-primary font-bold tracking-wider uppercase text-sm mb-6">
              Fractional COO | Led by Thania Clevenger
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold mb-8 text-balance leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Fractional COO Services for Organizations That Need Executive
              Operations—Without the Full-Time Hire
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-balance mb-10">
              You need senior operational leadership, but you can't justify a
              full-time COO salary. A fractional COO gives you experienced
              executive support at a fraction of the cost—embedded in your team,
              accountable for results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-black hover:bg-primary/90 font-bold text-lg px-8 py-6 h-auto rounded-full btn-glow"
                >
                  Get Clarity
                </Button>
              </Link>
              <Link to="/scale/assessment">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/5 border-white/15 text-white hover:bg-white/10 font-bold text-lg px-8 py-6 h-auto rounded-full transition-all backdrop-blur-md"
                >
                  Start a Readiness Assessment
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="bg-white border-b border-zinc-200 py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-bold uppercase tracking-widest text-zinc-500">
            <span className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" /> Executive-Level
              Operations
            </span>
            <span className="hidden md:inline text-zinc-300">·</span>
            <span className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-primary" /> Nonprofit & Small
              Business Focus
            </span>
            <span className="hidden md:inline text-zinc-300">·</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Florida-Based,
              National Reach
            </span>
          </div>
        </section>

        {/* WHAT IS A FRACTIONAL COO */}
        <section className="py-24 bg-light-section">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
              <h2
                className="text-3xl font-bold mb-6 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                What does a Fractional COO actually do?
              </h2>
              <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                A fractional COO is a seasoned operations executive who works
                with your organization part-time—usually 1–3 days per week. They
                take ownership of operational execution, governance, process
                documentation, and team accountability.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Unlike a consultant who hands you a report and leaves, a
                fractional COO stays to implement. They sit in your leadership
                meetings, own operational outcomes, and make sure decisions
                actually get executed.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
              <h3
                className="text-2xl font-bold mb-6 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                What We Deliver
              </h3>
              <ul className="space-y-3">
                {deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ENGAGEMENT MODELS */}
        <section className="py-24 bg-dark-section text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Engagement models
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                Choose the level of operational support that fits where your
                organization is right now.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {engagementModels.map((model, i) => {
                const Icon = model.icon;
                return (
                  <div
                    key={i}
                    className={`rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                      model.featured
                        ? "bg-white/5 border border-primary/30 shadow-[0_0_30px_rgba(212,160,23,0.08)]"
                        : "bg-white/[0.02] border border-white/10 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="mb-6 bg-white/5 w-14 h-14 rounded-xl flex items-center justify-center border border-white/10">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3
                      className="text-2xl font-bold mb-4 text-white"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      {model.title}
                    </h3>
                    <p className="text-zinc-400 mb-6 flex-grow leading-relaxed">
                      {model.desc}
                    </p>
                    <p className="text-sm text-primary font-medium pt-4 border-t border-white/10">
                      {model.best}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FRACTIONAL COO VS FULL-TIME */}
        <section className="py-24 bg-light-section">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Fractional COO vs. Full-Time COO
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-8 h-8 text-primary" />
                  <h3
                    className="text-xl font-bold text-[#1A2433]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Fractional COO
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-zinc-700">
                      Fraction of a full-time executive salary
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-zinc-700">
                      Flexible engagement—scale up or down as needed
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-zinc-700">
                      Immediate access to experienced leadership
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-zinc-700">
                      No benefits, equity, or long-term overhead
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-zinc-700">
                      Integrated with the broader YMBS team
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-8 h-8 text-zinc-400" />
                  <h3
                    className="text-xl font-bold text-zinc-500"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Full-Time COO
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-400 mt-0.5">✕</span>
                    <span className="text-zinc-500">
                      $150K–$300K+ annual salary plus benefits
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-400 mt-0.5">✕</span>
                    <span className="text-zinc-500">
                      Long hiring process—3–6 months to fill
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-400 mt-0.5">✕</span>
                    <span className="text-zinc-500">
                      Commitment to a full-time role you may not need yet
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-400 mt-0.5">✕</span>
                    <span className="text-zinc-500">
                      Benefits, equity, and overhead costs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-400 mt-0.5">✕</span>
                    <span className="text-zinc-500">
                      Single discipline—no integrated team behind them
                    </span>
                  </li>
                </ul>
              </div>
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
                  Governance
                </span>
              </div>
              <h3
                className="text-2xl font-bold mb-4 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Nonprofit Governance & Operations
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    Problem
                  </p>
                  <p className="text-base text-zinc-600 leading-relaxed mb-4">
                    Board roles and decision-making were unclear. Key processes
                    existed only in people's heads. Documentation was scattered,
                    incomplete, or non-existent.
                  </p>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    YMBS Approach
                  </p>
                  <p className="text-base text-zinc-600 leading-relaxed">
                    Governance review, documented all core processes, and built
                    a compliance-ready operational foundation.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    Result
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-base text-[#1A2433] font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{" "}
                      Clear board roles and decision rights documented
                    </li>
                    <li className="flex items-start gap-2 text-base text-[#1A2433] font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{" "}
                      Core processes extracted into SOPs
                    </li>
                    <li className="flex items-start gap-2 text-base text-[#1A2433] font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{" "}
                      Audit-ready documentation framework
                    </li>
                    <li className="flex items-start gap-2 text-base text-[#1A2433] font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{" "}
                      Board reporting structure implemented
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

        {/* CROSS-LINKS */}
        <section className="py-20 bg-light-section border-t border-zinc-200">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <p className="text-primary font-bold text-sm tracking-widest uppercase mb-3">
                  Operations + Communications
                </p>
                <h3
                  className="text-xl font-bold mb-3 text-[#1A2433]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Decisions and communication move together.
                </h3>
                <p className="text-zinc-600 mb-4">
                  Thania determines what needs to happen. Michelle determines
                  how it's communicated.
                </p>
                <Link to="/services/communications">
                  <Button
                    variant="outline"
                    className="font-bold rounded-full border-primary text-primary hover:bg-primary hover:text-black transition-all text-sm"
                  >
                    Explore Communications{" "}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="text-center">
                <p className="text-primary font-bold text-sm tracking-widest uppercase mb-3">
                  Operations + Technology
                </p>
                <h3
                  className="text-xl font-bold mb-3 text-[#1A2433]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  System implementation needs operational readiness.
                </h3>
                <p className="text-zinc-600 mb-4">
                  New software fails without documented workflows. Our teams
                  work together.
                </p>
                <Link to="/services/technology">
                  <Button
                    variant="outline"
                    className="font-bold rounded-full border-primary text-primary hover:bg-primary hover:text-black transition-all text-sm"
                  >
                    Explore Technology <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white border-t border-zinc-200">
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
                  className="group bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden"
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
          pillar="Fractional COO"
          dimensions={[
            "Structure",
            "Alignment",
            "Liability & Governance Readiness",
            "Execution",
          ]}
          context="A fractional COO operationalizes SCALE—building the Structure and governance readiness the assessment identifies, then sustaining Execution through an ongoing operating cadence."
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
              Need executive operations support without the executive salary?
            </h2>
            <p className="text-lg text-zinc-400 mb-12 max-w-xl mx-auto">
              Let's talk about whether a fractional COO is the right fit for
              where your organization is right now.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-black hover:bg-primary/90 font-bold px-10 h-14 text-base rounded-full btn-glow transition-all hover:-translate-y-1"
                >
                  Get Clarity
                </Button>
              </Link>
              <Link to="/scale/assessment">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/5 border-white/15 text-white hover:bg-white/10 font-bold px-10 h-14 text-base rounded-full transition-all backdrop-blur-md"
                >
                  Start a Readiness Assessment
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
