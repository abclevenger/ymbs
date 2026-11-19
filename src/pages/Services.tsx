import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Settings2,
  MonitorSmartphone,
  Users,
  MessageSquare,
  Search,
  Layers,
  Crown,
  CheckCircle2,
  Scale,
} from "lucide-react";
import { Link } from "react-router-dom";
import ScaleIntersection from "@/components/ScaleIntersection";
import SEOHead from "@/components/SEOHead";

export default function Services() {
  const pillars = [
    {
      title: "Operations",
      icon: <Settings2 className="w-10 h-10 text-primary" />,
      desc: "Structure, processes, execution and organizational alignment that help businesses operate more effectively and scale intentionally.",
      link: "/services/operations",
    },
    {
      title: "Technology",
      icon: <MonitorSmartphone className="w-10 h-10 text-primary" />,
      desc: "Business technology, automation, cybersecurity, systems and infrastructure aligned around how the organization actually works.",
      link: "/services/technology",
    },
    {
      title: "Communications",
      icon: <MessageSquare className="w-10 h-10 text-primary" />,
      desc: "Strategic communications, public relations, messaging and brand support that strengthen how organizations communicate internally and externally.",
      link: "/services/communications",
    },
    {
      title: "Leadership",
      icon: <Users className="w-10 h-10 text-primary" />,
      desc: "Fractional leadership and senior advisory support for organizations that need experience, direction and accountability without another full-time executive.",
      link: "/services/leadership",
    },
  ];

  const offerLadder = [
    {
      level: "01",
      label: "Assess",
      title: "Find the problem",
      icon: <Search className="w-8 h-8 text-primary" />,
      desc: "Not sure where to start? Begin with the SCALE™ Assessment. Already know the area? Pick a focused diagnostic.",
      items: [
        {
          name: "SCALE™ Assessment (start here)",
          link: "/scale/assessment",
        },
        { name: "Technology Assessment", link: "/assessments/technology" },
        {
          name: "Cyber Readiness Assessment",
          link: "/assessments/cyber-readiness",
        },
        { name: "System Health Quiz", link: "/assessments/system-health" },
      ],
      featured: true,
    },
    {
      level: "02",
      label: "Build",
      title: "Fix the problem",
      icon: <Layers className="w-8 h-8 text-primary" />,
      desc: "Structured implementation projects with clear scope, deliverables, and timelines.",
      items: [
        { name: "Mission Foundation™", link: "/mission-foundation" },
        { name: "Strategic Planning", link: "/strategic-planning" },
        {
          name: "Technology Stack Implementation",
          link: "/services/technology",
        },
        {
          name: "Communications Readiness Program",
          link: "/services/communications",
        },
        { name: "SEO & Website Strategy", link: "/services/seo" },
      ],
    },
    {
      level: "03",
      label: "Lead",
      title: "Provide ongoing senior leadership",
      icon: <Crown className="w-8 h-8 text-primary" />,
      desc: "Fractional executive access and integrated advisory for organizations that need senior capability.",
      items: [
        {
          name: "Integrated Executive Advisory",
          link: "/integrated-executive-advisory",
        },
        { name: "Fractional COO", link: "/fractional-coo" },
        { name: "Fractional CCO", link: "/services/communications" },
        { name: "Technology Advisory", link: "/services/technology" },
      ],
    },
  ];

  const whoWeHelp = [
    {
      title: "Nonprofit Consulting",
      desc: "Operations, technology, governance, and leadership for mission-driven organizations.",
      link: "/nonprofit-consulting",
    },
    {
      title: "Law Firm Technology",
      desc: "Practice management, CRM, intake, cybersecurity, and legal technology consulting.",
      link: "/law-firm-technology",
    },
    {
      title: "Fractional COO",
      desc: "Executive-level operations leadership without a full-time COO salary.",
      link: "/fractional-coo",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Services | Operations, Technology, Communications & Leadership | YMBS"
        description="One integrated advisory team covering operations, technology, communications, and leadership. Three ways to engage: Assess, Build, Lead."
        canonical="/services"
      />
      <section className="relative pt-32 pb-32 flex items-center justify-center text-center px-6 overflow-hidden bg-dark-section">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(212,160,23,0.15),transparent)]"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <p className="text-primary font-bold tracking-wider uppercase text-sm mb-6 drop-shadow-md">
            Our Expertise
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold mb-8 text-balance leading-tight text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Operations, Technology, Communications & Leadership
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto text-balance">
            One integrated advisory team helping organizations fix broken
            systems across four disciplines. We don't just hand you a
            strategy—we stay to implement.
          </p>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-24 bg-light-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Four disciplines. One team.
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Most organizations hire separate consultants for each area. YMBS
              brings them together.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => (
              <Link
                key={i}
                to={pillar.link}
                className="group bg-white rounded-xl p-10 border border-border hover:border-primary hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <div className="mb-6 bg-muted/50 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8 flex-grow">
                  {pillar.desc}
                </p>
                <div className="flex items-center text-brand-dark font-bold group-hover:text-primary transition-colors">
                  Learn more{" "}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Ladder */}
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Three ways to engage
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From diagnosis to implementation to ongoing executive support.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {offerLadder.map((tier, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 flex flex-col border transition-all duration-300 ${
                  tier.featured
                    ? "bg-dark-section border-primary/30 text-white shadow-xl md:scale-105"
                    : "bg-white border-zinc-200 hover:border-primary/30"
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${tier.featured ? "bg-primary/15" : "bg-primary/10"}`}
                  >
                    {tier.icon}
                  </div>
                  <div>
                    <p
                      className={`text-sm font-bold uppercase tracking-wider ${tier.featured ? "text-primary" : "text-primary"}`}
                    >
                      {tier.label}
                    </p>
                    <p
                      className={`text-xs ${tier.featured ? "text-zinc-400" : "text-zinc-500"}`}
                    >
                      Level {tier.level}
                    </p>
                  </div>
                </div>
                <h3
                  className={`text-2xl font-bold mb-3 ${tier.featured ? "text-white" : "text-[#1A2433]"}`}
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {tier.title}
                </h3>
                <p
                  className={`text-base mb-8 leading-relaxed ${tier.featured ? "text-zinc-400" : "text-zinc-600"}`}
                >
                  {tier.desc}
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.items.map((item, j) => (
                    <li key={j}>
                      <Link
                        to={item.link}
                        className={`flex items-center gap-3 text-sm font-medium group/item ${tier.featured ? "text-zinc-300 hover:text-primary" : "text-zinc-700 hover:text-primary"} transition-colors`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {item.name}
                        <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
                {tier.featured && (
                  <span className="text-xs font-bold text-primary uppercase tracking-widest text-center">
                    Flagship Offer
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-24 bg-light-section border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Who We Help
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Specialized consulting for organizations where the stakes are high
              and the systems need to work.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whoWeHelp.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="group bg-white rounded-xl p-8 border border-border hover:border-primary hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <h3
                  className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-base text-muted-foreground mb-6 flex-grow">
                  {item.desc}
                </p>
                <div className="flex items-center text-brand-dark font-bold group-hover:text-primary transition-colors text-sm">
                  Learn more{" "}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SCALE Intersection */}
      <ScaleIntersection
        pillar="Every YMBS Engagement"
        dimensions={[
          "Structure",
          "Culture",
          "Alignment",
          "Liability & Governance Readiness",
          "Execution",
        ]}
        context="Every engagement—Assess, Build, or Lead—runs through the SCALE™ Framework. We diagnose across five dimensions first, so the solution addresses the root cause instead of the symptom."
        theme="light"
      />

      {/* CTA */}
      <section className="py-24 bg-dark-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.15),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2
            className="text-4xl font-bold mb-6 text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Not sure where to start?
          </h2>
          <p className="text-xl text-zinc-400 mb-10">
            Book a General YMBS Discovery Call. We'll route the opportunity
            internally—you don't need to diagnose which consultant you need
            before scheduling.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary text-black hover:bg-primary/90 font-bold px-8 py-6 h-auto text-lg rounded-full btn-glow"
            >
              Get Clarity
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
