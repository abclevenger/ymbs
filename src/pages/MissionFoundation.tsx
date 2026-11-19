import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Users,
  Cpu,
  MessageSquare,
  Shield,
  HeartHandshake,
  ClipboardList,
  Layers,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function MissionFoundation() {
  const frameworks = [
    {
      icon: Shield,
      title: "Governance",
      subtitle: "Board Governance Framework",
      challenge: "Our board roles and decision-making are unclear.",
      link: "/services/operations",
    },
    {
      icon: ClipboardList,
      title: "Operations",
      subtitle: "Operational Readiness Framework",
      challenge: "Our processes are inconsistent or undocumented.",
      link: "/services/operations",
    },
    {
      icon: Users,
      title: "People",
      subtitle: "People & Practices Framework",
      challenge: "Our team has grown faster than our management systems.",
      link: "/services/leadership",
    },
    {
      icon: HeartHandshake,
      title: "Leadership",
      subtitle: "Leadership Development Framework",
      challenge: "Our leadership team isn't aligned.",
      link: "/services/leadership",
    },
    {
      icon: MessageSquare,
      title: "Communications",
      subtitle: "Reputation & Crisis Readiness Framework",
      challenge:
        "We're not prepared for sensitive or high-stakes communication.",
      link: "/services/communications",
    },
    {
      icon: Cpu,
      title: "Technology",
      subtitle: "Technology Readiness Framework",
      challenge: "Our systems aren't supporting the organization anymore.",
      link: "/services/technology",
    },
  ];

  return (
    <>
      <SEOHead
        title="Mission Foundation Framework | YMBS"
        description="A structured system for strengthening the operating foundation of mission-driven organizations. Six frameworks covering governance, operations, people, leadership, communications, and technology."
        canonical="/mission-foundation"
      />
      <div className="flex flex-col min-h-screen">
        {/* HERO */}
        <section className="bg-dark-section text-white pt-32 pb-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(212,160,23,0.12),transparent)]"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="text-primary font-bold tracking-wider uppercase text-sm mb-6">
              BUILD Layer · Mission Foundation™ Framework
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold mb-8 text-balance leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Structured implementation programs designed to strengthen the
              systems an organization depends on
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-balance mb-6">
              Six connected frameworks covering governance, operations, people,
              leadership, communications, and technology—built for
              mission-driven organizations.
            </p>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
              Assess identifies the problem. Mission Foundation helps build the
              solution.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 font-bold text-lg px-8 py-6 h-auto rounded-full btn-glow"
              >
                Book a YMBS Discovery Call
              </Button>
            </Link>
          </div>
        </section>

        {/* IDENTIFY YOUR CHALLENGE */}
        <section className="py-24 bg-light-section">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Identify your challenge
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Select the area that sounds most like your organization. We'll
                route you to the right framework.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {frameworks.map((fw, i) => {
                const Icon = fw.icon;
                return (
                  <Link
                    key={i}
                    to={fw.link}
                    className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:border-primary/30 transition-all duration-300 flex flex-col group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3
                      className="text-lg font-bold mb-1 text-[#1A2433]"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      {fw.title}
                    </h3>
                    <p className="text-sm text-primary font-bold uppercase tracking-wider mb-4">
                      {fw.subtitle}
                    </p>
                    <p className="text-zinc-600 leading-relaxed mb-6 flex-grow italic">
                      "{fw.challenge}"
                    </p>
                    <span className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      Explore framework <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ASSESS → BUILD → LEAD CONTEXT */}
        <section className="py-24 bg-dark-section text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Where Mission Foundation fits
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                Mission Foundation sits within the BUILD layer of the YMBS
                engagement model.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "ASSESS",
                  title: "Find the real problem",
                  desc: "Diagnose what's broken before you spend money fixing the wrong thing.",
                  link: "/assessments/system-health",
                  cta: "Start an Assessment",
                },
                {
                  step: "BUILD",
                  title: "Fix what's getting in the way",
                  desc: "Mission Foundation frameworks implement the solution with clear scope and deliverables.",
                  featured: true,
                },
                {
                  step: "LEAD",
                  title: "Provide ongoing senior support",
                  desc: "Fractional executive access and integrated advisory.",
                  link: "/integrated-executive-advisory",
                  cta: "Explore Advisory",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-8 flex flex-col border transition-all ${s.featured ? "border-primary/30 bg-white/[0.03] shadow-xl" : "border-white/10 bg-white/[0.02]"}`}
                >
                  <p className="text-sm font-bold uppercase tracking-wider mb-3 text-primary">
                    {s.step}
                  </p>
                  <h3
                    className="text-xl font-bold mb-3 text-white"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed mb-6 flex-grow">
                    {s.desc}
                  </p>
                  {s.link && (
                    <Link to={s.link}>
                      <Button
                        variant="outline"
                        className="w-full font-bold rounded-full h-12 border-primary text-primary hover:bg-primary hover:text-black"
                      >
                        {s.cta}
                      </Button>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-dark-section relative overflow-hidden border-t border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.15),transparent)]"></div>
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <h2
              className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Not sure which framework you need?
            </h2>
            <p className="text-lg text-zinc-400 mb-12 max-w-xl mx-auto">
              Get clarity. We'll help you identify the right starting point.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 font-bold px-10 h-14 text-base rounded-full btn-glow transition-all hover:-translate-y-1"
              >
                Get Clarity
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
