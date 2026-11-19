import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { track, initScrollDepthTracking } from "@/lib/analytics";
import { TrustSignals } from "@/components/TrustSignals";
import { ProofCard } from "@/components/ProofCard";
import ScaleIntersection from "@/components/ScaleIntersection";
import SEOHead from "@/components/SEOHead";
import CrossDisciplineSection from "@/components/home/CrossDisciplineSection";

const PATH = "/services/operations";
const TITLE = "Fractional Operations Support | YMBS";
const DESCRIPTION =
  "Structure, processes, execution and organizational alignment that help businesses operate more effectively and scale intentionally. Led by Thania Clevenger.";

const faqs = [
  {
    q: "What does a fractional COO actually do?",
    a: "A fractional COO provides experienced operational leadership without the cost of a full-time executive. They document workflows, clarify governance, build accountability structures, and ensure the organization can function and scale without depending on one person's institutional knowledge.",
  },
  {
    q: "How is this different from hiring an operations manager?",
    a: "An operations manager executes within existing systems. A fractional COO builds the systems themselves—governance frameworks, decision rights, process documentation, and the operational infrastructure that lets the rest of the team execute effectively. You get executive-level strategy, not just task management.",
  },
  {
    q: "Do you work with nonprofits on governance and compliance?",
    a: "Yes. Nonprofit governance, board readiness, compliance documentation, and audit preparation are core operations capabilities. We help boards clarify decision rights, document policies, and build the operational foundation that funders and regulators expect.",
  },
  {
    q: "Can operations work be combined with other YMBS disciplines?",
    a: "Yes. Operational changes often require communications support, technology alignment, or leadership facilitation. Because YMBS brings all four disciplines under one team, we can coordinate the expertise you need without managing multiple disconnected vendors.",
  },
];

const scenarios = [
  {
    title: "Tribal Knowledge",
    desc: "Key processes live in one person's head. If they leave, operations grind to a halt.",
  },
  {
    title: "Audit & Board Pressure",
    desc: "Documentation is scattered, incomplete, or non-existent—and a review is coming.",
  },
  {
    title: "Unclear Ownership",
    desc: "No one knows who owns what. Decisions stall and accountability is invisible.",
  },
  {
    title: "Growth Chaos",
    desc: "The informal systems that got you here are breaking down as you scale.",
  },
  {
    title: "Process Bottlenecks",
    desc: "Your team spends more time figuring out how to do the work than doing it.",
  },
  {
    title: "Governance Gaps",
    desc: "Board roles, decision rights, and compliance frameworks are undefined or outdated.",
  },
];

const deliverables = [
  "Operational roadmap",
  "Workflow documentation & SOPs",
  "Governance framework",
  "Decision-rights matrix",
  "Board-ready reporting structure",
  "Compliance readiness review",
  "Process bottleneck analysis",
  "Priority implementation plan",
];

export default function Operations() {
  useEffect(() => {
    track.highIntentPageView(PATH, "Operations");
    const cleanup = initScrollDepthTracking(PATH);
    return cleanup;
  }, []);
  return (
    <>
      <SEOHead
        title={TITLE}
        description={DESCRIPTION}
        canonical={PATH}
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Fractional Operations Support",
            description: DESCRIPTION,
            serviceType: "Operations Consulting",
            url: `https://ymbs.pro${PATH}`,
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
            name: "Fractional Operations Support",
            description:
              "Structure, processes, governance, and execution that help organizations scale intentionally.",
            url: `https://ymbs.pro${PATH}`,
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
        {/* 1. HERO */}
        <section className="bg-dark-section text-white pt-32 pb-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(212,160,23,0.12),transparent)]"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="text-primary font-bold tracking-wider uppercase text-sm mb-6">
              Operations & Governance
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold mb-8 text-balance leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Structure that holds up under growth.
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-balance mb-6">
              YMBS helps nonprofits, law firms, and mission-driven organizations
              strengthen the systems behind sustainable growth—operations,
              technology, communications, and leadership—through one integrated
              senior-level team.
            </p>
            <p className="text-sm font-bold tracking-widest uppercase text-primary mb-8">
              Led by Thania Clevenger · Fractional COO | Operations, Governance
              & Organizational Strategy
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                onClick={() =>
                  track.discoveryCallClick("operations_hero", "Operations")
                }
              >
                <Button
                  size="lg"
                  className="bg-primary text-black hover:bg-primary/90 font-bold text-lg px-8 py-6 h-auto rounded-full btn-glow"
                >
                  Get Clarity
                </Button>
              </Link>
              <Link to="/thania-clevenger">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/5 border-white/15 text-white hover:bg-white/10 font-bold text-lg px-8 py-6 h-auto rounded-full transition-all backdrop-blur-md"
                >
                  Meet Thania
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. SITUATIONS THAT SIGNAL AN OPERATIONS NEED */}
        <section className="py-20 bg-light-section">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                When the systems behind the work start breaking down
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                The signs that operational infrastructure can't keep up with
                where the organization is going.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scenarios.map((scenario, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm"
                >
                  <h3
                    className="text-lg font-bold mb-2 text-[#1A2433]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {scenario.title}
                  </h3>
                  <p className="text-base text-zinc-600 leading-relaxed">
                    {scenario.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. AREAS OF SUPPORT */}
        <section className="py-20 bg-white border-y border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Where operations support makes the difference
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                We both advise and help execute—building the systems the
                organization needs to function and scale.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Operational Strategy",
                  desc: "Assess how the organization actually runs today and build a plan to get where it needs to go.",
                },
                {
                  title: "Process & Workflow Design",
                  desc: "Document workflows, eliminate bottlenecks, and build repeatable processes that don't depend on one person.",
                },
                {
                  title: "SOP Development",
                  desc: "Standard operating procedures that capture institutional knowledge before it walks out the door.",
                },
                {
                  title: "Organizational Structure",
                  desc: "Clarify roles, reporting lines, and ownership so decisions don't stall and work doesn't fall through cracks.",
                },
                {
                  title: "Governance Readiness",
                  desc: "Board decision rights, policy frameworks, and compliance documentation that hold up under scrutiny.",
                },
                {
                  title: "Fractional COO Support",
                  desc: "Experienced operational leadership embedded in your team—without a full-time executive salary.",
                },
              ].map((area, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:border-primary/30 transition-all duration-300 flex flex-col"
                >
                  <h3
                    className="text-xl font-bold mb-3 text-[#1A2433]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {area.title}
                  </h3>
                  <p className="text-base text-zinc-600 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-zinc-500 italic mt-8">
              Engagements are scoped to the organization's needs.
            </p>
          </div>
        </section>

        {/* 4. WHAT THE WORK MAY PRODUCE */}
        <section className="py-16 bg-light-section border-t border-zinc-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#1A2433]"
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
              {deliverables.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 border border-zinc-200 flex items-start gap-3"
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

        {/* 5. REPRESENTATIVE OUTCOME */}
        <section className="py-16 bg-white border-t border-zinc-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                What changes when operations are documented
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Representative engagement outcomes. Details may be generalized
                to protect client confidentiality.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div
                onClick={() =>
                  track.proofEngagement(
                    "Operations",
                    "case_study",
                    "nonprofit_governance_ops",
                  )
                }
              >
                <ProofCard
                  data={{
                    problem:
                      "Board roles and decision-making were unclear. Key processes existed only in people's heads. Documentation was scattered, incomplete, or non-existent.",
                    intervention:
                      "Governance review, documented all core processes, and built a compliance-ready operational foundation with clear board reporting.",
                    result:
                      "Clear board roles and decision rights documented. Core processes extracted into SOPs. Audit-ready documentation framework. Board reporting structure implemented.",
                    pillars: ["Operations", "Leadership"],
                    link: "/client-results",
                    linkText: "See all client results",
                  }}
                />
              </div>
              <div
                onClick={() =>
                  track.proofEngagement(
                    "Operations",
                    "case_study",
                    "fractional_coo_scaling",
                  )
                }
              >
                <ProofCard
                  data={{
                    problem:
                      "A growing organization had outgrown its informal systems. Workflows were inconsistent, ownership was unclear, and execution depended on tribal knowledge held by one or two people.",
                    intervention:
                      "Embedded fractional COO support to document workflows, build an accountability matrix, and establish a monthly operating cadence with clear follow-through.",
                    result:
                      "Documented processes removed single-person dependency. Clear ownership for every major initiative. Monthly cadence sustained momentum. Organization could scale without chaos.",
                    pillars: ["Operations"],
                    link: "/client-results",
                    linkText: "See all client results",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. HOW ENGAGEMENT WORKS */}
        <section className="py-20 bg-light-section border-t border-zinc-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
              How you can work with us
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Bring us in where you need us
            </h2>
            <p className="text-lg text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Operations support is available as a focused project, ongoing
              fractional COO engagement, strategic advisory, or hands-on
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
                    className="text-base font-bold mb-2 text-[#1A2433]"
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
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                onClick={() =>
                  track.discoveryCallClick("operations_engage", "Operations")
                }
              >
                <Button
                  size="lg"
                  className="bg-primary text-black hover:bg-primary/90 font-bold text-lg px-8 py-6 h-auto rounded-full btn-glow"
                >
                  Get Clarity
                </Button>
              </Link>
              <Link to="/fractional-coo">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-bold rounded-full border-primary text-primary hover:bg-primary hover:text-black transition-all px-8 py-6 h-auto text-lg"
                >
                  Explore Fractional COO
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 7. OPERATIONS WITHIN THE INTEGRATED YMBS MODEL */}
        <section className="py-20 bg-white border-t border-zinc-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
              The problem may not be where it appears
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Operations within the integrated YMBS model
            </h2>
            <p className="text-lg text-zinc-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              An operations problem may actually be a technology problem. A
              governance change may require communications support. A
              restructure needs leadership alignment. YMBS looks across the
              organization before recommending the solution.
            </p>
            <p className="text-base text-zinc-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Thania helps translate Structure, Liability & Governance
              Readiness, and Execution into clear ownership and documented
              systems—so that the organization can function without depending on
              any single person.{" "}
              <Link
                to="/scale"
                className="text-primary hover:text-primary/80 underline underline-offset-4"
              >
                Learn how SCALE™ works →
              </Link>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services/technology">
                <Button
                  variant="outline"
                  className="font-bold rounded-full border-primary text-primary hover:bg-primary hover:text-black"
                >
                  Operations + Technology
                </Button>
              </Link>
              <Link to="/services/communications">
                <Button
                  variant="outline"
                  className="font-bold rounded-full border-primary text-primary hover:bg-primary hover:text-black"
                >
                  Operations + Communications
                </Button>
              </Link>
              <Link to="/services/leadership">
                <Button
                  variant="outline"
                  className="font-bold rounded-full border-primary text-primary hover:bg-primary hover:text-black"
                >
                  Operations + Leadership
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* SCALE™ connection */}
        <ScaleIntersection
          pillar="Operations"
          dimensions={[
            "Structure",
            "Alignment",
            "Liability & Governance Readiness",
            "Execution",
          ]}
          context="Operations work lives at the center of SCALE—documenting Structure, clarifying governance and Liability readiness, and building the Execution cadence that keeps decisions from stalling."
          theme="light"
        />

        {/* Legal & Governance disclosure */}
        <section className="py-8 bg-light-section border-t border-zinc-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="border-t border-zinc-200 pt-6">
              <p className="text-[13px] leading-relaxed text-zinc-500">
                <strong className="font-semibold text-zinc-600">
                  Legal & Governance Disclosure:
                </strong>{" "}
                YMBS does not provide legal advice or act as legal counsel. As
                part of our business and operational consulting services, we
                work with business owners and organizational leaders to identify
                potential legal and regulatory requirements, understand
                operational and compliance risks, and develop business processes
                that support responsible operations. When an issue requires
                legal interpretation, advice, or representation, YMBS will
                recommend that the client retain qualified legal counsel.
              </p>
            </div>
          </div>
        </section>

        {/* Cross-discipline connection */}
        <CrossDisciplineSection current="Operations" />

        {/* FAQ */}
        <section className="py-20 bg-light-section border-t border-zinc-200">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
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

        {/* CLOSING CTA */}
        <section className="py-24 bg-dark-section text-white text-center px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.15),transparent)]"></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Ready to stabilize your operations?
            </h2>
            <p className="text-xl text-white/70 mb-4 text-balance">
              Stop relying on tribal knowledge. Let's build systems that scale
              with your mission.
            </p>
            <p className="text-sm text-white/50 mb-10">
              30 minutes • No obligation • Leave with clearer priorities
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                onClick={() =>
                  track.discoveryCallClick("operations_final_cta", "Operations")
                }
              >
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
                  Take the SCALE™ Assessment
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
