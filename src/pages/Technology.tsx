import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Linkedin,
  MonitorSmartphone,
  Server,
  Code,
  Bot,
  TrendingUp,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { track } from "@/lib/analytics";
import ScaleIntersection from "@/components/ScaleIntersection";
import SEOHead from "@/components/SEOHead";

export default function Technology() {
  useEffect(() => {
    track.highIntentPageView("/services/technology", "Technology");
  }, []);
  const navigate = useNavigate();

  const services = [
    {
      id: "tech-strategy",
      icon: <MonitorSmartphone className="w-8 h-8 text-primary" />,
      title: "Technology Strategy",
      desc: "Map your systems, fix what's broken, and build a clear roadmap. We evaluate and implement platforms without vendor chaos.",
      bullets: [
        "Systems audits & roadmaps",
        "Vendor selection & rollout",
        "Workflow optimization",
      ],
      featured: false,
    },
    {
      id: "tech-infrastructure",
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "Infrastructure & Connectivity",
      desc: "Reliable networks and communications systems that securely connect your people, locations, and data.",
      bullets: [
        "Network design & SD-WAN",
        "UCaaS & business phone systems",
        "Cloud migration & support",
      ],
      featured: false,
    },
    {
      id: "tech-web-dev",
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Web & App Development",
      desc: "Build or rescue the digital platforms your organization depends on. Custom web apps, internal portals, and high-performance websites.",
      bullets: [
        "Custom web applications",
        "Website rebuilds & CMS",
        "API integrations",
      ],
      featured: true,
    },
    {
      id: "tech-ai",
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "AI & Automation",
      desc: "Automate repetitive work and improve responsiveness with AI-powered systems that enhance, not replace, human judgment.",
      bullets: [
        "Workflow automation",
        "AI communications & chatbots",
        "Internal AI assistants",
      ],
      featured: false,
    },
    {
      id: "tech-digital-growth",
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Digital Growth",
      desc: "Treat SEO and digital performance as technical systems. We build the infrastructure for visibility and online credibility.",
      bullets: [
        "Technical & Local SEO",
        "Reputation management",
        "Conversion optimization",
      ],
      featured: false,
    },
  ];

  const platforms = [
    {
      category: "Core Systems",
      items: [
        "CRM & Operations Software",
        "Contact Center & UCaaS",
        "Legal Practice Systems",
      ],
    },
    {
      category: "Infrastructure",
      items: [
        "Cloud & Hybrid Environments",
        "SD-WAN & Connectivity",
        "Physical Security & IoT",
      ],
    },
    {
      category: "Automation & Web",
      items: ["Custom Applications", "Marketing Automation", "AI Assistants"],
    },
  ];

  return (
    <>
      <SEOHead
        title="Technology Strategy & Systems Consulting | YMBS"
        description="Business technology, CRM, automation, AI, cybersecurity, and digital platforms for mission-driven organizations. Led by Technology Strategist Ashley Clevenger."
        canonical="/services/technology"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Technology Strategy & Systems Consulting",
            description:
              "Business technology, CRM, automation, AI, cybersecurity, and digital platforms for mission-driven organizations. Led by Technology Strategist Ashley Clevenger.",
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
            name: "Technology Strategy & Systems Consulting",
            description:
              "Vendor-neutral technology strategy, systems, automation, AI, cybersecurity, and digital platforms.",
            url: "https://ymbs.pro/services/technology",
          },
        ]}
      />
      <div className="flex flex-col min-h-screen bg-[#0D2038] text-white font-sans selection:bg-primary selection:text-black">
        {/* 1. HERO SECTION */}
        <section className="pt-24 pb-20 px-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[85vh] bg-[#0D2038]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(252,223,2,0.12),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          <div className="max-w-4xl mx-auto relative z-10 text-center w-full">
            <div className="mb-8 inline-block relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors duration-500"></div>
              <img
                src="https://ymbs.pro/assets/mr_ashley_clevenger_new.jpg"
                alt="Ashley Clevenger, Business Technology, Growth & Sales Operations Strategist at Yellow Mountain Business Solutions"
                className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-white/10 object-cover mx-auto relative z-10"
              />
              <a
                href="https://www.linkedin.com/in/abclevenger/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-0 right-0 w-8 h-8 bg-brand-dark rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all z-20"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm font-bold tracking-widest uppercase text-primary mb-6">
              Technology Department · Led by Ashley Clevenger, Business
              Technology, Growth & Sales Operations
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight font-serif tracking-tight">
              Technology Strategy That Fits the Way Your Organization Actually
              Works
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-3xl mx-auto leading-relaxed text-balance">
              Vendor-neutral technology consulting. We assess what you have,
              recommend what fits, implement it, and make sure your team
              actually uses it.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                size="lg"
                onClick={() => {
                  track.assessmentStarted("Technology");
                  navigate("/assessments/technology");
                }}
                className="w-full sm:w-auto bg-primary text-black hover:bg-primary/90 font-bold text-lg px-8 py-6 h-auto rounded-full btn-glow transition-all duration-300"
              >
                Start a Free Assessment
              </Button>
              <Button
                size="lg"
                onClick={() => {
                  track.discoveryCallClick("technology_hero");
                  navigate("/contact");
                }}
                variant="outline"
                className="w-full sm:w-auto bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white font-bold text-lg px-8 py-6 h-auto rounded-full transition-all duration-300"
              >
                Get Clarity
              </Button>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="border-y border-white/10 bg-white/5 py-6 relative z-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm font-bold uppercase tracking-widest text-zinc-400">
            <span>Trusted By Nonprofits</span>
            <span className="hidden md:inline">·</span>
            <span>Law Firms</span>
            <span className="hidden md:inline">·</span>
            <span>Mission-Driven Orgs</span>
            <span className="hidden md:inline">·</span>
            <span className="flex items-center gap-2 text-zinc-300">
              <Shield className="w-4 h-4 text-primary" /> Secure & Compliant
            </span>
          </div>
        </section>

        {/* 2. PROBLEMS WE SOLVE */}
        <section className="py-24 md:py-32 bg-[#EDF3F8] relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#132238] leading-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Technology shouldn't feel like a liability.
                </h2>
                <p className="text-lg md:text-xl text-[#526172] mb-8 leading-relaxed">
                  Most technology problems don't start with a single
                  failure—they build up over time. Disconnected systems,
                  unfinished projects, and outdated tools quietly drain time and
                  budget until the cost becomes impossible to ignore.
                </p>
                <Button
                  onClick={() => navigate("/contact")}
                  variant="link"
                  className="text-primary hover:text-primary/80 font-bold p-0 h-auto text-lg flex items-center gap-2"
                >
                  Let's fix your systems <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-4">
                {[
                  "Platforms that don't integrate, forcing manual data entry.",
                  "Paying for redundant tools that staff barely use.",
                  "Unfinished software projects that never delivered.",
                  "Outdated websites that fail to represent your mission.",
                  "Lack of a clear roadmap, leading to reactive IT spending.",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#DCE3EA] shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="mt-0.5 bg-primary/20 p-1.5 rounded-full shrink-0">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-[#526172] text-lg leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE SERVICES */}
        <section className="py-24 md:py-32 bg-[#F7F8FA] border-t border-[#DCE3EA] relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#132238]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Our Core Capabilities
              </h2>
              <p className="text-lg md:text-xl text-[#526172] leading-relaxed">
                We support organizations across the entire technology
                lifecycle—from strategy and infrastructure to custom development
                and automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-8 flex flex-col h-full transition-all duration-300 ${
                    service.featured
                      ? "bg-white border border-primary/30 shadow-[0_0_30px_rgba(201,151,24,0.08)] hover:border-primary/50 hover:shadow-lg"
                      : "bg-white border border-[#DCE3EA] shadow-sm hover:shadow-md hover:border-primary/20"
                  }`}
                >
                  <div className="mb-6 bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center border border-[#DCE3EA]">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#132238]">
                    {service.title}
                  </h3>
                  <p className="text-[#526172] mb-8 flex-grow leading-relaxed text-lg">
                    {service.desc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-[#526172]"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-base">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 border-t border-[#DCE3EA]">
                    <button
                      onClick={() => navigate("/contact")}
                      className="text-primary font-bold hover:text-primary/70 transition-colors flex items-center gap-2 group"
                    >
                      Discuss this{" "}
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}

              {/* "Not sure where to start?" Card */}
              <div className="rounded-2xl p-8 flex flex-col h-full bg-primary text-black shadow-lg">
                <h3 className="text-2xl font-bold mb-4">
                  Not sure where to start?
                </h3>
                <p className="text-black/80 mb-8 flex-grow leading-relaxed text-lg font-medium">
                  The best first step is a comprehensive technology assessment.
                  We'll audit your current systems, identify risks, and build a
                  clear roadmap.
                </p>
                <Button
                  onClick={() => navigate("/assessments/technology")}
                  className="w-full bg-black text-white hover:bg-zinc-800 font-bold rounded-full py-6 text-lg"
                >
                  GET AN ASSESSMENT
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FEATURED: CYBERSECURITY */}
        <section className="py-24 bg-[#0D2038] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-6">
                    <Shield className="w-4 h-4" /> Specialized Service
                  </div>
                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Cybersecurity & Risk Protection
                  </h2>
                  <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed">
                    Strong technology requires strong security. We help
                    organizations identify vulnerabilities, implement layered
                    safeguards, and protect operations and data before an
                    incident forces the issue.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button
                      size="lg"
                      onClick={() => navigate("/assessments/cyber-readiness")}
                      className="bg-primary text-black hover:bg-primary/90 font-bold rounded-full px-8 py-6 h-auto"
                    >
                      TAKE THE CYBER READINESS QUIZ
                    </Button>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "13-Layer Security Audits",
                    "Compliance & Governance",
                    "Threat Monitoring",
                    "Staff Security Training",
                    "Incident Response Planning",
                    "Data Backup & Recovery",
                  ].map((feature, i) => (
                    <div
                      key={i}
                      className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                    >
                      <span className="text-zinc-200 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PLATFORMS & ECOSYSTEMS */}
        <section className="py-24 md:py-32 bg-[#F3F1EB] border-t border-[#DCE3EA]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-[#132238]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Platforms We Support
              </h2>
              <p className="text-lg text-[#526172] leading-relaxed">
                We design systems to work together, not in silos. Here is a
                structured view of the capabilities we support across
                infrastructure, software, and growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {platforms.map((eco, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#DCE3EA] p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
                >
                  <h3 className="text-xl font-bold mb-6 text-[#132238] border-b border-[#DCE3EA] pb-4">
                    {eco.category}
                  </h3>
                  <ul className="space-y-4">
                    {eco.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 text-[#526172]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. ENGAGEMENT PROCESS */}
        <section className="py-24 md:py-32 bg-[#0D2038] border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-16 text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              How We Work With You
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-white/15 -z-10"></div>

              {[
                {
                  title: "Discovery",
                  desc: "We audit your systems, identify gaps, and understand your capacity.",
                },
                {
                  title: "Strategy",
                  desc: "We build a tailored roadmap aligned with your budget and timeline.",
                },
                {
                  title: "Execution",
                  desc: "We manage the implementation so your team doesn't have to.",
                },
                {
                  title: "Support",
                  desc: "Ongoing fractional support to keep systems running smoothly.",
                },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#0D2038] border-2 border-primary text-primary flex items-center justify-center font-bold text-2xl mb-6 shadow-[0_0_15px_rgba(201,151,24,0.2)] z-10">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-zinc-300 leading-relaxed text-center">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof — Technology Case Study */}
        <section className="py-16 bg-white border-t border-[#DCE3EA]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-[#0D2038] rounded-2xl p-8 border border-white/10 shadow-lg">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-bold tracking-wider uppercase">
                  Florida Law Firm
                </span>
                <span className="px-3 py-1 bg-primary/15 text-primary rounded-full text-sm font-bold tracking-wider uppercase">
                  Technology
                </span>
                <span className="px-3 py-1 bg-primary/15 text-primary rounded-full text-sm font-bold tracking-wider uppercase">
                  Operations
                </span>
              </div>
              <h3
                className="text-2xl font-bold mb-4 text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Law Firm Intake & Tech Stack Consolidation
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
                    Problem
                  </p>
                  <p className="text-base text-zinc-400 leading-relaxed mb-4">
                    Leads entered through disconnected channels. Staff manually
                    copied data. Three software subscriptions didn't integrate.
                    Follow-up was sporadic.
                  </p>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
                    YMBS Approach
                  </p>
                  <p className="text-base text-zinc-400 leading-relaxed">
                    Mapped the entire intake process, consolidated the tech
                    stack into one platform, and built automated multi-channel
                    follow-up workflows.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    Result
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-base text-white font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{" "}
                      Lead response time dropped to under 20 seconds
                    </li>
                    <li className="flex items-start gap-2 text-base text-white font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{" "}
                      30% increase in retained clients from same ad spend
                    </li>
                    <li className="flex items-start gap-2 text-base text-white font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{" "}
                      10 hours per week recovered for staff
                    </li>
                    <li className="flex items-start gap-2 text-base text-white font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{" "}
                      Three redundant subscriptions eliminated
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
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

        {/* Cross-link to Operations */}
        <section className="py-16 bg-[#EDF3F8] border-t border-[#DCE3EA]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
              Technology + Operations
            </p>
            <h3
              className="text-2xl font-bold mb-4 text-[#132238]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              System implementation works best when operations are ready.
            </h3>
            <p className="text-lg text-[#526172] mb-6 max-w-2xl mx-auto">
              Our technology and operations teams work together so new systems
              land cleanly with documented workflows and trained teams.
            </p>
            <Link to="/services/operations">
              <Button
                variant="outline"
                className="font-bold rounded-full border-primary text-primary hover:bg-primary hover:text-black transition-all"
              >
                Explore Operations Services
              </Button>
            </Link>
          </div>
        </section>
        {/* Entry Assessment — Technology */}
        <section className="py-16 bg-[#F7F8FA] border-t border-[#DCE3EA]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-[#0D2038] rounded-2xl p-8 border-2 border-primary/30 text-center shadow-lg">
              <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
                Entry Assessment
              </p>
              <h3
                className="text-2xl font-bold mb-4 text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Technology Systems Assessment
              </h3>
              <p className="text-lg text-zinc-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                Understand your current technology environment and determine
                what should be kept, replaced, integrated, consolidated,
                automated, or secured. Includes system inventory, software
                review, cybersecurity risk review, AI/automation opportunities,
                vendor review, and a prioritized roadmap.
              </p>
              <p className="text-sm text-zinc-500 mb-6 italic">
                Professional assessments are scoped based on organization size
                and complexity.
              </p>
              <Button
                onClick={() => navigate("/assessments/technology")}
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 font-bold px-8 py-6 h-auto rounded-full btn-glow"
              >
                Start a Technology Systems Assessment
              </Button>
            </div>
          </div>
        </section>

        {/* Cross-Pillar Triggers */}
        <section className="py-16 bg-white border-t border-[#DCE3EA]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
              The problem may not be where it appears
            </p>
            <h3
              className="text-2xl font-bold mb-4 text-[#132238]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Technology problems often cross departments.
            </h3>
            <p className="text-lg text-[#526172] mb-8 max-w-2xl mx-auto leading-relaxed">
              A technology problem may actually be a workflow problem. A
              software implementation fails because of adoption—an operations
              and leadership issue. YMBS looks across the organization before
              recommending the solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services/operations">
                <Button
                  variant="outline"
                  className="font-bold rounded-full border-primary text-primary hover:bg-primary hover:text-black"
                >
                  Technology + Operations
                </Button>
              </Link>
              <Link to="/services/leadership">
                <Button
                  variant="outline"
                  className="font-bold rounded-full border-primary text-primary hover:bg-primary hover:text-black"
                >
                  Technology + Leadership
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

        {/* SCALE Intersection */}
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

        {/* Best Next Step */}
        <section className="py-16 bg-[#EDF3F8] border-t border-[#DCE3EA]">
          <div className="max-w-4xl mx-auto px-6">
            <h3
              className="text-2xl font-bold mb-8 text-center text-[#132238]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What should you do next?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 border border-[#DCE3EA] shadow-sm flex flex-col">
                <p className="text-base text-[#526172] mb-2 font-medium">
                  If you're not sure what the problem is:
                </p>
                <p
                  className="text-lg font-bold text-[#132238] mb-6 flex-grow"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Start with an assessment.
                </p>
                <Button
                  onClick={() => navigate("/assessments/technology")}
                  variant="outline"
                  className="w-full font-bold rounded-full h-12 border-primary text-primary hover:bg-primary hover:text-black"
                >
                  Start an Assessment
                </Button>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-[#DCE3EA] shadow-sm flex flex-col">
                <p className="text-base text-[#526172] mb-2 font-medium">
                  If you need ongoing senior support:
                </p>
                <p
                  className="text-lg font-bold text-[#132238] mb-6 flex-grow"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Explore Technology Advisory.
                </p>
                <Link to="/integrated-executive-advisory">
                  <Button
                    variant="outline"
                    className="w-full font-bold rounded-full h-12 border-primary text-primary hover:bg-primary hover:text-black"
                  >
                    Explore Advisory
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Before Final CTA */}
        <section className="py-16 bg-[#F3F1EB] border-t border-[#DCE3EA]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-2xl p-8 border border-[#DCE3EA] shadow-sm">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-[#132238] text-white rounded-full text-sm font-bold tracking-wider uppercase">
                  Florida Law Firm
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wider uppercase">
                  Technology
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wider uppercase">
                  Operations
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    Problem
                  </p>
                  <p className="text-base text-[#526172] leading-relaxed">
                    Five disconnected systems, manual intake, and no clear
                    technology roadmap.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    YMBS Intervention
                  </p>
                  <p className="text-base text-[#526172] leading-relaxed">
                    Consolidated tech stack, automated intake workflow, and
                    built a prioritized technology roadmap.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    Result
                  </p>
                  <p className="text-base font-medium text-[#132238] leading-relaxed">
                    One unified system, automated follow-up, and hours recovered
                    per week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Final CTA */}
        <section className="py-32 bg-[#08172A] relative overflow-hidden border-t border-white/10 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,151,24,0.08),transparent_60%)]"></div>
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Ready to make your tech feel calm again?
            </h2>
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
              Schedule a discovery call to explore how technology strategy and
              digital transformation can support your mission.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                size="lg"
                onClick={() => navigate("/contact")}
                className="w-full sm:w-auto bg-primary text-black hover:bg-primary/90 font-bold text-lg px-10 py-6 h-auto rounded-full btn-glow"
              >
                Get Clarity
              </Button>
            </div>

            <p className="text-sm text-zinc-500 font-medium">
              No obligation. No pitch. 30 minutes.
            </p>
          </div>
        </section>

        {/* TECHNOLOGY FOCUS AREAS — links to sub-service pages */}
        <section className="py-16 bg-white border-t border-zinc-200">
          <div className="max-w-6xl mx-auto px-6">
            <h3
              className="text-2xl font-bold mb-3 text-center text-[#132238]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Technology focus areas
            </h3>
            <p className="text-center text-[#526172] mb-10 max-w-xl mx-auto">
              Explore the specific technology disciplines YMBS deploys across
              operations, security, and growth.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                {
                  label: "AI & Automation",
                  path: "/services/technology/ai-automation",
                },
                {
                  label: "Cybersecurity & Risk",
                  path: "/services/technology/cybersecurity",
                },
                {
                  label: "Connectivity & Comms",
                  path: "/services/technology/connectivity",
                },
                {
                  label: "CRM & Workflow",
                  path: "/services/technology/crm-workflow",
                },
                {
                  label: "Website & SEO",
                  path: "/services/technology/website-seo",
                },
                {
                  label: "IoT & Physical Security",
                  path: "/services/technology/iot-physical-security",
                },
                {
                  label: "Digital Signage",
                  path: "/services/technology/digital-signage",
                },
                {
                  label: "Software Selection",
                  path: "/services/technology/software-solutions",
                },
                {
                  label: "Mobility & Workforce",
                  path: "/services/technology/mobility-workforce",
                },
              ].map((area, i) => (
                <Link
                  key={i}
                  to={area.path}
                  className="bg-zinc-50 rounded-xl p-5 border border-[#DCE3EA] hover:border-primary hover:shadow-md transition-all text-center"
                >
                  <span className="text-sm font-bold text-[#132238] hover:text-primary transition-colors">
                    {area.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section className="py-16 bg-light-section border-t border-zinc-200">
          <div className="max-w-5xl mx-auto px-6">
            <h3
              className="text-2xl font-bold mb-8 text-center text-[#132238]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Related services
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/services/seo"
                className="bg-white rounded-2xl p-6 border border-[#DCE3EA] hover:border-primary hover:shadow-md transition-all flex flex-col"
              >
                <h4 className="text-lg font-bold mb-2 text-[#132238]">
                  SEO & Website Strategy
                </h4>
                <p className="text-sm text-[#526172] mb-4 flex-grow">
                  Data-driven SEO strategies that put your organization in front
                  of people actively searching for your services.
                </p>
                <span className="text-primary font-bold text-sm">
                  Explore SEO Services →
                </span>
              </Link>
              <Link
                to="/elevation"
                className="bg-white rounded-2xl p-6 border border-[#DCE3EA] hover:border-primary hover:shadow-md transition-all flex flex-col"
              >
                <h4 className="text-lg font-bold mb-2 text-[#132238]">
                  ELEVATION Platform
                </h4>
                <p className="text-sm text-[#526172] mb-4 flex-grow">
                  A unified CRM, automation, and communications platform—fully
                  built, managed, and optimized by our team.
                </p>
                <span className="text-primary font-bold text-sm">
                  Explore ELEVATION →
                </span>
              </Link>
              <Link
                to="/assessments/technology"
                className="bg-white rounded-2xl p-6 border border-[#DCE3EA] hover:border-primary hover:shadow-md transition-all flex flex-col"
              >
                <h4 className="text-lg font-bold mb-2 text-[#132238]">
                  Technology Systems Assessment
                </h4>
                <p className="text-sm text-[#526172] mb-4 flex-grow">
                  Get a full audit of your current technology stack with a
                  prioritized implementation roadmap.
                </p>
                <span className="text-primary font-bold text-sm">
                  Start Assessment →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
