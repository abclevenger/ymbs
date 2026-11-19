import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Target,
  Users,
  Cpu,
  MessageSquare,
  Compass,
  ClipboardList,
  TrendingUp,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function StrategicPlanning() {
  const problems = [
    "Priorities keep changing with no clear rationale.",
    "Board and leadership aren't aligned on what matters most.",
    "Plans are too broad to guide day-to-day decisions.",
    "Accountability is unclear—nobody knows who owns what.",
    "Meetings revisit the same decisions every quarter.",
    "Execution stalls within weeks of the planning session.",
  ];

  const steps = [
    {
      icon: Compass,
      title: "Discover",
      desc: "Understand the organization's current state, challenges, and constraints.",
    },
    {
      icon: Users,
      title: "Align",
      desc: "Get leadership and stakeholders aligned on priorities and direction.",
    },
    {
      icon: Target,
      title: "Decide",
      desc: "Establish clear strategic priorities and measurable goals.",
    },
    {
      icon: ClipboardList,
      title: "Build",
      desc: "Create the execution roadmap with owners, timelines, and milestones.",
    },
    {
      icon: TrendingUp,
      title: "Implement",
      desc: "Support follow-through with cadence, reporting, and accountability.",
    },
    {
      icon: CheckCircle2,
      title: "Measure",
      desc: "Track progress, adjust course, and sustain momentum.",
    },
  ];

  const pillars = [
    {
      icon: ClipboardList,
      title: "Operations",
      desc: "Can the organization actually execute the plan?",
      link: "/services/operations",
    },
    {
      icon: Cpu,
      title: "Technology",
      desc: "Do the systems support the plan?",
      link: "/services/technology",
    },
    {
      icon: MessageSquare,
      title: "Communications",
      desc: "Can leadership explain the plan to stakeholders?",
      link: "/services/communications",
    },
    {
      icon: Users,
      title: "Leadership",
      desc: "Is everyone actually aligned?",
      link: "/services/leadership",
    },
  ];

  return (
    <>
      <SEOHead
        title="Strategic Planning That Gets Executed | YMBS"
        description="Strategic planning that turns into action. YMBS helps leadership teams align on priorities, assign ownership, and build a roadmap people actually execute."
        canonical="/strategic-planning"
      />
      <div className="flex flex-col min-h-screen">
        {/* HERO */}
        <section className="bg-dark-section text-white pt-32 pb-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(212,160,23,0.12),transparent)]"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="text-primary font-bold tracking-wider uppercase text-sm mb-6">
              Strategic Planning
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold mb-8 text-balance leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Strategic Planning That Turns Into Action
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-balance mb-10">
              Most organizations don't need another binder. They need leadership
              alignment, clear priorities, accountable owners, and a system for
              execution.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 font-bold text-lg px-8 py-6 h-auto rounded-full btn-glow"
              >
                Book a Strategy Call
              </Button>
            </Link>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-24 bg-light-section">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Why most strategic plans don't survive the quarter
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {problems.map((problem, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-zinc-700 leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* YMBS APPROACH */}
        <section className="py-24 bg-dark-section text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                The YMBS Approach
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                Strategy + execution. Not one without the other.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, i) => {
                const Icon = step.icon;
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
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY YMBS — INTEGRATED MODEL */}
        <section className="py-24 bg-light-section">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Why strategic planning needs all four disciplines
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Strategic planning doesn't exist in isolation. The plan affects
                every part of the organization.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <Link
                    key={i}
                    to={pillar.link}
                    className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:border-primary/30 transition-all duration-300 flex flex-col group"
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
                      {pillar.title}
                    </h3>
                    <p className="text-zinc-600 leading-relaxed mb-6 flex-grow">
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

        {/* CTA */}
        <section className="py-32 bg-dark-section relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.15),transparent)]"></div>
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <h2
              className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Stop planning. Start executing.
            </h2>
            <p className="text-lg text-zinc-400 mb-12 max-w-xl mx-auto">
              In 30 minutes, we'll help identify what's holding your
              organization back and tell you what we'd do next.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 font-bold px-10 h-14 text-base rounded-full btn-glow transition-all hover:-translate-y-1"
              >
                Book a Strategy Call
              </Button>
            </Link>
            <p className="mt-6 text-sm text-zinc-500">
              No obligation. No hard pitch. Just clarity.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
