import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { TrustSignals } from "@/components/TrustSignals";
import {
  ArrowRight,
  Users,
  Cpu,
  MessageSquare,
  ClipboardList,
  CalendarCheck,
  TrendingUp,
  Shield,
  Search,
  FileText,
  Layers,
  Network,
} from "lucide-react";
import { track, initScrollDepthTracking } from "@/lib/analytics";
import { ProofCard } from "@/components/ProofCard";
import ScaleIntersection from "@/components/ScaleIntersection";

export default function IntegratedExecutiveAdvisory() {
  useEffect(() => {
    track.highIntentPageView("/integrated-executive-advisory", "Integrated");
    const cleanup = initScrollDepthTracking("/integrated-executive-advisory");
    return cleanup;
  }, []);

  const idealFor = [
    "Scaling quickly and outgrowing current systems",
    "Restructuring or reorganizing",
    "Navigating leadership transitions",
    "Experiencing operational complexity",
    "Preparing for major technology change",
    "Facing governance problems",
    "Struggling with execution",
    "Facing reputation-sensitive decisions",
    "Preparing for audit or significant organizational scrutiny",
    "Trying to professionalize without hiring several full-time executives",
  ];

  const structure = [
    {
      icon: Search,
      title: "Executive Diagnostic",
      desc: "Initial cross-functional assessment across operations, technology, communications, and leadership. Output: Executive Priority Roadmap.",
    },
    {
      icon: CalendarCheck,
      title: "Monthly Executive Advisory",
      desc: "Scheduled leadership strategy meeting, priority review, decision support, risk identification, accountability tracking, and access to relevant YMBS experts.",
    },
    {
      icon: Users,
      title: "Specialist Workstreams",
      desc: "Pull in the appropriate specialist based on priorities—Ashley for technology, Thania for governance, Michelle for sensitive announcements, Nestor for leadership alignment.",
    },
    {
      icon: ClipboardList,
      title: "Execution Support",
      desc: "Not just recommendations—we help implement the changes alongside your team.",
    },
    {
      icon: TrendingUp,
      title: "Quarterly Executive Review",
      desc: "Goals, progress, risks, unresolved issues, organizational changes, technology priorities, leadership issues, stakeholder concerns, and next-quarter priorities. Output: Quarterly Executive Priorities Brief.",
    },
  ];

  const fractionalRoles = [
    {
      title: "Fractional COO",
      desc: "Operations and governance",
      lead: "Thania Clevenger",
      link: "/fractional-coo",
    },
    {
      title: "Fractional CCO",
      desc: "Executive communications and stakeholder trust",
      lead: "Michelle Griffith",
      link: "/services/communications",
    },
    {
      title: "Technology Advisory",
      desc: "Systems, vendors, AI, cybersecurity",
      lead: "Ashley Clevenger",
      link: "/services/technology",
    },
    {
      title: "Leadership Advisory",
      desc: "Executive alignment and organizational development",
      lead: "Nestor Ortiz",
      link: "/services/leadership",
    },
  ];

  const comparisons = [
    {
      q: "Assessment vs Consulting Project",
      a: "An assessment diagnoses the problem and produces a roadmap. A consulting project implements the solution. Assessments are scoped diagnostics; projects have fixed scope and defined deliverables.",
    },
    {
      q: "Project vs Fractional Support",
      a: "A project has a defined start, deliverables, and end date. Fractional support provides ongoing senior leadership capacity on a monthly basis—ideal when you need executive expertise without a full-time hire.",
    },
    {
      q: "Fractional COO vs Integrated Executive Advisory",
      a: "A Fractional COO provides ongoing operations leadership. Integrated Executive Advisory provides coordinated access to all four disciplines—operations, technology, communications, and leadership—working from one plan.",
    },
    {
      q: "When Do We Need Multiple YMBS Specialists?",
      a: "When the problem crosses departments. Technology implementation that fails because of adoption needs operations and leadership. An organizational restructure needs operations, communications, and leadership. When multiple areas are involved simultaneously, Integrated Executive Advisory is the right fit.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Integrated Executive Advisory | YMBS"
        description="One senior advisory team across operations, technology, communications, and leadership. For organizations scaling quickly, restructuring, or navigating major change."
        canonical="/integrated-executive-advisory"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Integrated Executive Advisory",
            description:
              "One senior advisory team across operations, technology, communications, and leadership. For organizations scaling quickly, restructuring, or navigating major change.",
            serviceType: "Executive Advisory",
            url: "https://ymbs.pro/integrated-executive-advisory",
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
            name: "Integrated Executive Advisory",
            description:
              "One coordinated executive team across operations, technology, communications, and leadership.",
            url: "https://ymbs.pro/integrated-executive-advisory",
          },
        ]}
      />

      <div className="flex flex-col min-h-screen">
        {/* HERO */}
        <section className="bg-dark-section text-white pt-32 pb-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(212,160,23,0.15),transparent)]"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="text-primary font-bold tracking-wider uppercase text-sm mb-6">
              Flagship Service
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold mb-8 text-balance leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Integrated Executive Advisory
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-balance mb-6">
              One organization. One roadmap. The right expertise at the right
              time.
            </p>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto text-balance mb-10">
              Senior expertise across operations, technology, communications,
              and leadership—working from one coordinated plan. Not four
              unrelated consultants. One coordinated executive advisory team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                onClick={() => {
                  track.discoveryCallClick("integrated_hero", "Integrated");
                  track.integratedAdvisoryInterest("hero_primary");
                }}
              >
                <Button
                  size="lg"
                  className="bg-primary text-black hover:bg-primary/90 font-bold text-lg px-8 py-6 h-auto rounded-full btn-glow"
                >
                  Book a YMBS Discovery Call
                </Button>
              </Link>
              <Link
                to="/contact"
                onClick={() =>
                  track.integratedAdvisoryInterest("hero_secondary")
                }
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/5 border-white/15 text-white hover:bg-white/10 font-bold text-lg px-8 py-6 h-auto rounded-full transition-all backdrop-blur-md"
                >
                  Explore Integrated Executive Advisory
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CORE PROMISE */}
        <section className="py-24 bg-light-section">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Most organizational problems do not stay inside one department.
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
              Technology affects operations. Operational change affects people.
              Leadership decisions affect communication. YMBS coordinates those
              disciplines so the organization moves forward as one system.
            </p>
          </div>
        </section>

        {/* IDEAL FOR */}
        <section className="py-24 bg-white border-t border-zinc-200">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Built for organizations facing significant change
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Complex enough to need senior expertise but may not need four
                full-time executive hires.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {idealFor.map((item, i) => (
                <div
                  key={i}
                  className="bg-zinc-50 p-6 rounded-xl border border-zinc-200 flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-zinc-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENGAGEMENT STRUCTURE */}
        <section className="py-24 bg-dark-section text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                How the engagement works
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                A structured, ongoing advisory relationship—not a one-time
                project. The client should not pay for unnecessary involvement
                from every expert every month. The value is access and
                coordination.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {structure.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="card-dark rounded-2xl p-8 flex flex-col group"
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
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROOF — Multi-Pillar Case Studies */}
        <section className="py-16 bg-light-section border-t border-zinc-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                When multiple disciplines work together
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Multi-pillar engagements where the problem crossed departments.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div
                onClick={() =>
                  track.proofEngagement(
                    "Integrated",
                    "case_study",
                    "nonprofit_transformation",
                  )
                }
              >
                <ProofCard
                  data={{
                    problem:
                      "A nonprofit was outgrowing its systems. Governance was unclear, technology was fragmented, and leadership was misaligned on priorities. The board lacked visibility.",
                    intervention:
                      "Deployed Thania for governance and operations, Ashley for technology consolidation, and Nestor for leadership alignment—coordinated through one advisory plan.",
                    result:
                      "Documented governance structure, consolidated five tools into two, aligned leadership on three clear priorities, and built a board reporting dashboard.",
                    pillars: ["Operations", "Technology", "Leadership"],
                    link: "/client-results",
                    linkText: "See all client results",
                  }}
                />
              </div>
              <div
                onClick={() =>
                  track.proofEngagement(
                    "Integrated",
                    "case_study",
                    "law_firm_modernization",
                  )
                }
              >
                <ProofCard
                  data={{
                    problem:
                      "A law firm's intake, CRM, and phone systems were disconnected. Staff were manually re-entering data. Leadership wanted to modernize but didn't know where to start.",
                    intervention:
                      "Ashley evaluated and implemented practice management software, Thania redesigned intake workflows, and Michelle prepared leadership for staff communication about the changes.",
                    result:
                      "One unified intake-to-matter workflow. Automated data routing. Staff adoption through clear communication. Leadership prepared for every stakeholder conversation.",
                    pillars: ["Technology", "Operations", "Communications"],
                    link: "/client-results",
                    linkText: "See all client results",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SPECIALIST WORKSTREAMS */}
        <section className="py-24 bg-light-section">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                The team behind the advisory
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Four senior specialists. One coordinated engagement. Pulled in
                as required—not all billed every month.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {fractionalRoles.map((role, i) => (
                <Link
                  key={i}
                  to={role.link}
                  className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:border-primary/30 transition-all duration-300 flex flex-col group"
                >
                  <h3
                    className="text-xl font-bold mb-2 text-[#1A2433]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {role.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed mb-2 flex-grow">
                    {role.desc}
                  </p>
                  <p className="text-sm text-primary font-bold mb-4">
                    Led by {role.lead}
                  </p>
                  <span className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNER NETWORK HANDOFF */}
        <section className="py-20 bg-alt-section border-t border-zinc-200">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-2xl border border-zinc-200 p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Network className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-grow">
                <h3
                  className="text-xl font-bold text-[#1A2433] mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  One coordinated team. Trusted specialists when you need them.
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  The four-person core team handles operations, technology,
                  communications, and leadership. When an engagement surfaces a
                  regulated issue—legal, accounting, insurance, HR, or
                  cybersecurity—YMBS coordinates the right licensed specialist
                  through our trusted network. You remain free to use your own
                  providers.
                </p>
              </div>
              <Link
                to="/partners"
                className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all whitespace-nowrap"
              >
                Explore the specialist network{" "}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* PRICING CLARITY */}
        <section className="py-20 bg-white border-t border-zinc-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2
              className="text-3xl font-bold mb-6 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Investment
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto mb-6">
              Engagements are scoped based on organizational complexity and
              level of implementation support required. Monthly engagement—not
              commodity hourly billing.
            </p>
            <div className="grid md:grid-cols-4 gap-4 mt-8">
              <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-200">
                <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                  Assessments
                </p>
                <p className="text-zinc-600 text-sm">
                  Fixed fee or scoped diagnostic
                </p>
              </div>
              <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-200">
                <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                  Projects
                </p>
                <p className="text-zinc-600 text-sm">
                  Fixed scope / defined deliverables
                </p>
              </div>
              <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-200">
                <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                  Fractional Advisory
                </p>
                <p className="text-zinc-600 text-sm">Monthly engagement</p>
              </div>
              <div className="bg-zinc-50 rounded-xl p-6 border-2 border-primary/30">
                <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                  Integrated Advisory
                </p>
                <p className="text-zinc-600 text-sm">
                  Monthly, based on complexity
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON FAQ */}
        <section className="py-24 bg-light-section border-t border-zinc-200">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Which engagement is right for you?
              </h2>
            </div>
            <div className="space-y-4">
              {comparisons.map((item, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden"
                >
                  <summary
                    className="flex items-center justify-between cursor-pointer p-6 font-bold text-[#1A2433] text-lg list-none"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {item.q}
                    <ArrowRight className="w-5 h-5 text-primary transition-transform duration-300 group-open:rotate-90 shrink-0 ml-4" />
                  </summary>
                  <div className="px-6 pb-6 text-zinc-600 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SCALE Intersection */}
        <ScaleIntersection
          pillar="Integrated Executive Advisory"
          dimensions={[
            "Structure",
            "Culture",
            "Alignment",
            "Liability & Governance Readiness",
            "Execution",
          ]}
          context="Integrated Executive Advisory is SCALE in its fullest form—four experts working from one roadmap across all five dimensions, because the hardest problems never stay inside one pillar."
          theme="light"
        />

        {/* CTA */}
        <section className="py-32 bg-dark-section relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.18),transparent)]"></div>
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <h2
              className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Senior leadership capacity. Without four executive salaries.
            </h2>
            <p className="text-lg text-zinc-400 mb-12 max-w-xl mx-auto">
              Let's talk about whether Integrated Executive Advisory is the
              right fit for your organization.
            </p>
            <Link
              to="/contact"
              onClick={() => {
                track.discoveryCallClick("integrated_final_cta", "Integrated");
                track.integratedAdvisoryInterest("final_cta");
              }}
            >
              <Button
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 font-bold px-10 h-14 text-base rounded-full btn-glow transition-all hover:-translate-y-1"
              >
                Book a YMBS Discovery Call
              </Button>
            </Link>
            <div className="mt-10">
              <TrustSignals variant="dark" compact />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
