import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { track, initScrollDepthTracking } from "@/lib/analytics";
import { ProofCard } from "@/components/ProofCard";
import { TrustSignals } from "@/components/TrustSignals";
import ScaleIntersection from "@/components/ScaleIntersection";
import SEOHead from "@/components/SEOHead";
import CrossDisciplineSection from "@/components/home/CrossDisciplineSection";

const PATH = "/services/leadership";
const TITLE = "Fractional Leadership & Advisory | YMBS";
const DESCRIPTION =
  "Fractional leadership and senior advisory support for organizations that need experience, direction, and accountability without another full-time executive. Led by Nestor Ortiz.";

const faqs = [
  {
    q: "What does a fractional leadership advisor actually do?",
    a: "A fractional leadership advisor provides experienced executive guidance without the cost of a full-time hire. We facilitate alignment sessions, build accountability structures, guide strategic planning, and help leadership teams make better decisions—so strategy actually turns into execution.",
  },
  {
    q: "How is this different from leadership coaching?",
    a: "Leadership coaching focuses on individual development. Fractional leadership advisory focuses on the leadership system—how decisions get made, who owns what, how teams stay aligned, and how strategy moves from conversation to action. You get executive-level strategy and facilitation, not just personal coaching.",
  },
  {
    q: "What is Compass 16?",
    a: "Compass 16 is the leadership methodology Nestor uses to build leadership systems—alignment, accountability, decision-making, and execution. It gives organizations a structured framework for turning leadership intent into organizational action.",
  },
  {
    q: "Can leadership work be combined with other YMBS disciplines?",
    a: "Yes. Leadership decisions almost always affect operations, communications, and technology. Because YMBS brings all four disciplines under one team, we can coordinate the expertise you need without managing multiple disconnected vendors.",
  },
];

const scenarios = [
  {
    title: "Agreement Without Action",
    desc: "Leadership agrees in the room but diverges in execution. Priorities shift and departments move in opposite directions.",
  },
  {
    title: "Unclear Ownership",
    desc: "No one knows who owns what. Decisions stall, accountability is invisible, and execution depends on individual heroics.",
  },
  {
    title: "Strategy Without Follow-Through",
    desc: "Strategic plans exist on paper but never translate into coordinated action. The same decisions get revisited every quarter.",
  },
  {
    title: "Avoided Conversations",
    desc: "Difficult conversations are avoided. Conflict simmers beneath the surface and erodes trust and momentum.",
  },
  {
    title: "Leadership Gaps",
    desc: "The organization needs senior leadership experience but another full-time executive doesn't make sense right now.",
  },
  {
    title: "Board Misalignment",
    desc: "Board and executive team are out of sync. Governance, decision rights, and strategic direction are unclear.",
  },
];

const deliverables = [
  "Leadership alignment framework",
  "Accountability matrix",
  "Strategic priority roadmap",
  "Decision-rights matrix",
  "Operating cadence structure",
  "Facilitation session design",
  "Organizational health review",
  "Priority implementation plan",
];

export default function Leadership() {
  useEffect(() => {
    track.highIntentPageView(PATH, "Leadership");
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
            name: "Fractional Leadership & Advisory",
            description: DESCRIPTION,
            serviceType: "Leadership Consulting",
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
            name: "Fractional Leadership & Advisory",
            description:
              "Leadership development, strategic planning, facilitation, and team alignment.",
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
              Fractional Leadership & Advisory
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold mb-8 text-balance leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Alignment that turns strategy into execution.
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-balance mb-6">
              YMBS helps nonprofits, law firms, and mission-driven organizations
              strengthen the systems behind sustainable growth—operations,
              technology, communications, and leadership—through one integrated
              senior-level team.
            </p>
            <p className="text-sm font-bold tracking-widest uppercase text-primary mb-8">
              Led by Nestor Ortiz · Leadership, Organizational Development &
              Executive Strategy
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                onClick={() =>
                  track.discoveryCallClick("leadership_hero", "Leadership")
                }
              >
                <Button
                  size="lg"
                  className="bg-primary text-black hover:bg-primary/90 font-bold text-lg px-8 py-6 h-auto rounded-full btn-glow"
                >
                  Get Clarity
                </Button>
              </Link>
              <Link to="/nestor-ortiz">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/5 border-white/15 text-white hover:bg-white/10 font-bold text-lg px-8 py-6 h-auto rounded-full transition-all backdrop-blur-md"
                >
                  Meet Nestor
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. SITUATIONS THAT SIGNAL A LEADERSHIP NEED */}
        <section className="py-20 bg-light-section">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                When leadership alignment is the bottleneck
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                The signs that leadership systems can't keep up with where the
                organization is going.
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
                Where leadership support makes the difference
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                We both advise and help execute—building the leadership systems
                the organization needs to function and scale.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Executive Alignment",
                  desc: "Facilitated sessions that get leadership teams aligned on priorities, decisions, and direction—so execution doesn't stall.",
                },
                {
                  title: "Strategic Planning",
                  desc: "Build shared strategic plans with clear priorities, owners, and timelines that actually get followed.",
                },
                {
                  title: "Accountability Systems",
                  desc: "Decision-rights matrices and operating cadences that keep momentum from fading after the planning session.",
                },
                {
                  title: "Team Dynamics & Conflict",
                  desc: "Resolve the difficult conversations that erode trust and keep the organization from moving forward.",
                },
                {
                  title: "Fractional Leadership Support",
                  desc: "Experienced executive leadership embedded in your team—without a full-time executive salary.",
                },
                {
                  title: "Governance Readiness",
                  desc: "Board alignment, decision rights, and governance frameworks that hold up under scrutiny.",
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
                What changes when leadership aligns
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
                    "Leadership",
                    "case_study",
                    "board_alignment_strategic_planning",
                  )
                }
              >
                <ProofCard
                  data={{
                    problem:
                      "Board meetings felt like endless discussions that never led to action items. Priorities shifted constantly and different departments were moving in opposite directions.",
                    intervention:
                      "Facilitated alignment sessions, established clear strategic priorities, and built an accountability framework with assigned owners and timelines.",
                    result:
                      "Leadership aligned on clear priorities. Accountability matrix with named owners. Decisions made in days, not quarters. Execution cadence sustained momentum.",
                    pillars: ["Leadership", "Operations"],
                    link: "/client-results",
                    linkText: "See all client results",
                  }}
                />
              </div>
              <div
                onClick={() =>
                  track.proofEngagement(
                    "Leadership",
                    "case_study",
                    "team_accountability_framework",
                  )
                }
              >
                <ProofCard
                  data={{
                    problem:
                      "A growing organization had no clear decision rights or accountability structure. Leaders were unsure who owned what, and execution stalled after every planning session.",
                    intervention:
                      "Nestor facilitated a decision-rights workshop, built an accountability matrix, and established a monthly operating cadence with clear follow-through.",
                    result:
                      "Clear ownership for every major initiative. Monthly cadence kept momentum. Leaders stopped revisiting the same decisions. Strategy turned into action.",
                    pillars: ["Leadership"],
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
              Leadership support is available as a focused project, ongoing
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
                  track.discoveryCallClick("leadership_engage", "Leadership")
                }
              >
                <Button
                  size="lg"
                  className="bg-primary text-black hover:bg-primary/90 font-bold text-lg px-8 py-6 h-auto rounded-full btn-glow"
                >
                  Get Clarity
                </Button>
              </Link>
              <Link to="/strategic-planning">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-bold rounded-full border-primary text-primary hover:bg-primary hover:text-black transition-all px-8 py-6 h-auto text-lg"
                >
                  Explore Strategic Planning
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 7. LEADERSHIP WITHIN THE INTEGRATED YMBS MODEL */}
        <section className="py-20 bg-white border-t border-zinc-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
              The problem may not be where it appears
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Leadership within the integrated YMBS model
            </h2>
            <p className="text-lg text-zinc-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              A leadership transition needs communications, operations, and
              leadership working together. A board conflict requires governance
              and alignment support. YMBS looks across the organization before
              recommending the solution.
            </p>
            <p className="text-base text-zinc-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Nestor helps translate Culture, Alignment, and Execution into
              leadership systems that hold—so that decisions made in the room
              actually turn into coordinated action.{" "}
              <Link
                to="/scale"
                className="text-primary hover:text-primary/80 underline underline-offset-4"
              >
                Learn how SCALE™ works →
              </Link>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services/operations">
                <Button
                  variant="outline"
                  className="font-bold rounded-full border-primary text-primary hover:bg-primary hover:text-black"
                >
                  Leadership + Operations
                </Button>
              </Link>
              <Link to="/services/communications">
                <Button
                  variant="outline"
                  className="font-bold rounded-full border-primary text-primary hover:bg-primary hover:text-black"
                >
                  Leadership + Communications
                </Button>
              </Link>
              <Link to="/integrated-executive-advisory">
                <Button
                  variant="outline"
                  className="font-bold rounded-full border-primary text-primary hover:bg-primary hover:text-black"
                >
                  Integrated Advisory
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* COMPASS 16 METHODOLOGY */}
        <section className="py-20 bg-light-section border-t border-zinc-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
              The Leadership Methodology
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Compass 16
            </h2>
            <p className="text-lg text-zinc-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Just as Technology has the Living Technology Record and
              Communications has V.I.T.A.L.™, Leadership at YMBS is built on
              Compass 16—a structured framework for building leadership systems
              that turn alignment into accountability and strategy into
              execution.
            </p>
            {/* COPY NEEDED — MICHELLE / NESTOR: Confirm Compass 16 description, structure, and how the 16 points map to leadership dimensions */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                "Alignment",
                "Accountability",
                "Decision-Making",
                "Execution",
              ].map((dim, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-zinc-200"
                >
                  <h3
                    className="text-base font-bold mb-1 text-[#1A2433]"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {dim}
                  </h3>
                </div>
              ))}
            </div>
            <p className="text-sm text-zinc-500 italic mt-6">
              Compass 16 gives leadership work a recognizable mechanism—not just
              coaching, but a system.
            </p>
          </div>
        </section>

        {/* SCALE™ connection */}
        <ScaleIntersection
          pillar="Leadership"
          dimensions={["Culture", "Alignment", "Execution"]}
          context="Leadership is the Culture and Alignment engine inside SCALE. Without aligned leadership, Structure breaks down and Execution stalls—so YMBS diagnoses the human system before recommending a fix."
          theme="light"
        />

        {/* Cross-discipline connection */}
        <CrossDisciplineSection current="Leadership" />

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
              Get your team moving in the same direction.
            </h2>
            <p className="text-xl text-white/70 mb-4 text-balance">
              Stop revisiting the same decisions. Let's build true alignment.
            </p>
            <p className="text-sm text-white/50 mb-10">
              30 minutes • No obligation • Leave with clearer priorities
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                onClick={() =>
                  track.discoveryCallClick("leadership_final_cta", "Leadership")
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
