import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mic, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { track, initScrollDepthTracking } from "@/lib/analytics";
import { TrustSignals } from "@/components/TrustSignals";
import CommunicationsServices from "@/components/CommunicationsServices";
import { ProofCard } from "@/components/ProofCard";
import SEOHead from "@/components/SEOHead";
import ScaleIntersection from "@/components/ScaleIntersection";
import CrossDisciplineSection from "@/components/home/CrossDisciplineSection";

const deliverables = [
  "Communications plan",
  "Message framework",
  "Stakeholder map",
  "Crisis response playbook",
  "Holding statement templates",
  "Executive briefing prep",
  "Q&A preparation guide",
  "Reputation assessment",
];

const faqs = [
  {
    q: "What is executive communications readiness?",
    a: "Executive communications readiness is the preparation leaders need before high-stakes moments—board presentations, media interviews, community meetings, crisis response, and difficult Q&A. It's not generic media training. It's scenario-specific preparation that ensures a leader walks into the room composed, disciplined, and ready.",
  },
  {
    q: "How is this different from traditional PR?",
    a: "Traditional PR focuses on press releases, media placements, and publicity. Executive communications focuses on preparing the leader themselves—their message, their delivery, their composure under pressure. PR gets you in front of an audience. Executive readiness makes sure you're ready when you get there.",
  },
  {
    q: "Can you help with crisis communications?",
    a: "Yes. We help organizations prepare for and navigate reputation-sensitive situations—public controversy, leadership transitions, difficult announcements, and crisis response. We build response playbooks, holding statements, and prepare leadership for difficult questions before they happen.",
  },
  {
    q: "Do you offer ongoing fractional communications leadership?",
    a: "Yes. For organizations that need senior communications counsel without a full-time hire, we offer fractional Chief Communications Officer engagements. This gives you ongoing access to executive-level communications strategy and advisory.",
  },
  {
    q: "What types of organizations hire executive communications advisors?",
    a: "Organizations preparing for board presentations, media interviews, major announcements, leadership transitions, public scrutiny, or crisis response. We work with nonprofits, law firms, professional services firms, and mission-driven organizations facing high-stakes communication moments.",
  },
];

const scenarios = [
  {
    title: "Board Presentations",
    desc: "Walk in composed, disciplined, and ready for tough questions.",
  },
  {
    title: "Media Interviews",
    desc: "Stay on message, handle curveballs, and protect your reputation.",
  },
  {
    title: "Crisis Response",
    desc: "Respond with a clear framework before the situation escalates.",
  },
  {
    title: "Leadership Transitions",
    desc: "Communicate change with clarity to staff, board, and stakeholders.",
  },
  {
    title: "Major Announcements",
    desc: "Control the narrative before it controls you.",
  },
  {
    title: "Difficult Q&A",
    desc: "Prepare for the hardest questions before you face them.",
  },
];

export default function Communications() {
  useEffect(() => {
    track.highIntentPageView("/services/communications", "Communications");
    const cleanup = initScrollDepthTracking("/services/communications");
    return cleanup;
  }, []);
  return (
    <>
      <SEOHead
        title="Strategic Communications Consulting & Executive Media Training | YMBS"
        description="Strategic communications consulting, executive media training, and crisis communications led by Michelle Griffith, APR. Messaging that builds trust and consistency for nonprofits, law firms, and mission-driven organizations."
        canonical="/services/communications"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Executive Communications & Reputation",
            description:
              "Executive readiness, messaging, reputation, and high-stakes communication strategy for leaders facing board presentations, media interviews, and crisis moments.",
            serviceType: "Executive Communications Consulting",
            url: "https://ymbs.pro/services/communications",
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
            name: "Executive Communications & Reputation",
            description:
              "Executive readiness, messaging, reputation, and high-stakes communication strategy.",
            url: "https://ymbs.pro/services/communications",
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
              Executive Communications & Reputation
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold mb-8 text-balance leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Messaging that builds trust and consistency.
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-balance mb-6">
              YMBS helps nonprofits, law firms, and mission-driven organizations
              strengthen the systems behind sustainable growth—operations,
              technology, communications, and leadership—through one integrated
              senior-level team.
            </p>
            <p className="text-sm font-bold tracking-widest uppercase text-primary mb-8">
              Led by Michelle Griffith, APR · Communications Consultant
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                onClick={() =>
                  track.discoveryCallClick(
                    "communications_hero",
                    "Communications",
                  )
                }
              >
                <Button
                  size="lg"
                  className="bg-primary text-black hover:bg-primary/90 font-bold text-lg px-8 py-6 h-auto rounded-full btn-glow"
                >
                  Get Clarity
                </Button>
              </Link>
              <Link to="/michelle-griffith">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/5 border-white/15 text-white hover:bg-white/10 font-bold text-lg px-8 py-6 h-auto rounded-full transition-all backdrop-blur-md"
                >
                  Meet Michelle
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. SITUATIONS THAT SIGNAL A COMMUNICATIONS NEED */}
        <section className="py-20 bg-light-section">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                When the message, reputation, or organization is on the line
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                The moments that decide whether leadership earns trust—or loses
                it.
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

        {/* 3. THREE WAYS TO ENGAGE + 4. CRISIS READINESS */}
        <CommunicationsServices />

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

        {/* 5. HOW ENGAGEMENT WORKS */}
        <section className="py-16 bg-white border-t border-zinc-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
              How you can work with us
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold mb-6 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Bring us in where you need us
            </h2>
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
                What changes when the message is prepared
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
                    "Communications",
                    "case_study",
                    "board_presentation_prep",
                  )
                }
              >
                <ProofCard
                  data={{
                    problem:
                      "Leadership faced a difficult board presentation and a contentious community meeting. The team was unprepared for tough Q&A and lacked a unified message.",
                    intervention:
                      "Michelle prepared the leadership team with message frameworks, mock Q&A, and on-camera rehearsal tailored to the specific scenario.",
                    result:
                      "Leadership walked in composed and prepared. Unified message framework across the team. Difficult Q&A handled with discipline and composure.",
                    pillars: ["Communications"],
                    link: "/client-results",
                    linkText: "See all client results",
                  }}
                />
              </div>
              <div
                onClick={() =>
                  track.proofEngagement(
                    "Communications",
                    "case_study",
                    "leadership_transition_messaging",
                  )
                }
              >
                <ProofCard
                  data={{
                    problem:
                      "An organization navigating a leadership transition had no stakeholder communication plan. Staff, board, and donors were hearing different messages.",
                    intervention:
                      "Built a stakeholder communication framework, messaging timeline, and prepared the incoming executive for difficult Q&A with staff and board.",
                    result:
                      "Consistent messaging across all stakeholders. Smooth transition with minimal disruption. Incoming leader prepared for high-pressure conversations.",
                    pillars: ["Communications", "Leadership"],
                    link: "/client-results",
                    linkText: "See all client results",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. COMMUNICATIONS WITHIN THE INTEGRATED YMBS MODEL */}
        <section className="py-20 bg-light-section border-t border-zinc-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
              The problem may not be where it appears
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Communications within the integrated YMBS model
            </h2>
            <p className="text-lg text-zinc-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              A leadership decision may become a communications problem. An
              organizational restructure needs operations, communications, and
              leadership working together. YMBS looks across the organization
              before recommending the solution.
            </p>
            <p className="text-base text-zinc-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Michelle helps translate Culture, Alignment, and Execution into
              clear, trustworthy communication—so that leadership decisions are
              understood across the organization.{" "}
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
                  Operations + Communications
                </Button>
              </Link>
              <Link to="/services/leadership">
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

        {/* 7. MICHELLE INTRODUCTION */}
        <section className="py-20 bg-white border-t border-zinc-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
              Led by
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Michelle Griffith, APR
            </h2>
            <p className="text-lg text-zinc-600 mb-8 max-w-2xl mx-auto">
              Communications Consultant. Michelle brings senior communications
              leadership experience, helping executives, boards, and
              spokespeople communicate with clarity during high-pressure
              situations.
            </p>
            <Link to="/michelle-griffith">
              <Button
                variant="outline"
                className="font-bold px-8 py-6 h-auto text-lg rounded-full border-primary text-primary hover:bg-primary hover:text-black transition-all"
              >
                Meet Michelle <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* 8. CONCISE FAQ */}
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

        {/* SCALE™ connection */}
        <ScaleIntersection
          pillar="Communications"
          dimensions={["Culture", "Alignment", "Execution"]}
          context="Communications strengthens how leaders translate strategy into clear, trustworthy messaging — supporting the culture and alignment that keep execution on track."
        />

        {/* Cross-discipline connection */}
        <CrossDisciplineSection current="Communications" />

        {/* 9. CLOSING CTA */}
        <section className="py-24 bg-dark-section text-white text-center px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.15),transparent)]"></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Ready to prepare for what's next?
            </h2>
            <p className="text-xl text-white/70 mb-10 text-balance">
              Walk into the room prepared. Let's build a communications strategy
              that holds under pressure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                onClick={() =>
                  track.discoveryCallClick(
                    "communications_final_cta",
                    "Communications",
                  )
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
