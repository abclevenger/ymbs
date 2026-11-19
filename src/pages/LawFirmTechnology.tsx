import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { TrustSignals } from "@/components/TrustSignals";
import ScaleIntersection from "@/components/ScaleIntersection";
import {
  CheckCircle2,
  ArrowRight,
  Scale,
  Cpu,
  Phone,
  Bot,
  Shield,
  FileText,
  BarChart3,
  Users,
  Building2,
  MapPin,
  Clock,
  AlertCircle,
} from "lucide-react";

const faqs = [
  {
    q: "Do you sell legal software?",
    a: "No. We are vendor-neutral. We evaluate platforms based on fit, not commissions or partnerships. If a vendor offers a referral fee, we disclose it. Our recommendations are based on what actually works for your firm.",
  },
  {
    q: "Can you help us switch practice management systems?",
    a: "Yes. We manage the full migration—from data export and cleanup to configuration, testing, and staff training. Most firms underestimate the operational disruption of a switch. We minimize it.",
  },
  {
    q: "Do you work with solo and small firms?",
    a: "Yes. We work with firms from 3 attorneys to 50+. The technology needs scale, but the principles—clean intake, connected systems, documented workflows, and secure data—apply at every size.",
  },
  {
    q: "What about cybersecurity compliance?",
    a: "We assess your current security posture against common legal industry frameworks, identify gaps, and help you implement layered protections. For formal compliance opinions, we coordinate with licensed cybersecurity and legal compliance specialists.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "A technology assessment takes 2–3 weeks. A full implementation—new practice management platform, CRM, intake, and automation—typically runs 60–120 days depending on firm size and data complexity.",
  },
  {
    q: "Can you integrate our existing phone system?",
    a: "Yes. We evaluate UCaaS and business phone platforms, configure call routing for intake, integrate with your CRM, and ensure attorneys and staff have the right communication tools without paying for features nobody uses.",
  },
];

export default function LawFirmTechnology() {
  const services = [
    {
      icon: Scale,
      title: "Practice Management Software",
      desc: "Evaluate, select, and implement the right legal practice management platform for your firm.",
    },
    {
      icon: Users,
      title: "CRM & Intake",
      desc: "Streamline client intake, lead tracking, and onboarding so no potential client falls through the cracks.",
    },
    {
      icon: Bot,
      title: "Automation",
      desc: "Automate document generation, reminders, billing workflows, and repetitive administrative tasks.",
    },
    {
      icon: Phone,
      title: "Phone Systems",
      desc: "Modern UCaaS and business phone systems designed for legal intake and client communication.",
    },
    {
      icon: Cpu,
      title: "AI for Law Firms",
      desc: "Practical AI tools that assist with research, drafting, and intake—without replacing judgment.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      desc: "Protect client data with layered security, compliance frameworks, and staff training.",
    },
    {
      icon: FileText,
      title: "Document Workflows",
      desc: "Design document management systems that make filing, retrieval, and versioning effortless.",
    },
    {
      icon: BarChart3,
      title: "Reporting & Dashboards",
      desc: "Get real-time visibility into caseloads, revenue, intake conversion, and firm performance.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Assessment",
      desc: "What systems do you currently have? We audit your full technology stack and identify gaps.",
    },
    {
      step: "02",
      title: "Strategy",
      desc: "What should you keep, replace, or consolidate? We build a roadmap aligned with your budget.",
    },
    {
      step: "03",
      title: "Selection",
      desc: "Which platforms actually fit a law firm? Vendor-neutral evaluation and recommendation.",
    },
    {
      step: "04",
      title: "Implementation",
      desc: "How do we make it work? We manage rollout, data migration, and configuration.",
    },
    {
      step: "05",
      title: "Adoption",
      desc: "How do we make sure staff use it? Training, documentation, and change management.",
    },
    {
      step: "06",
      title: "Optimization",
      desc: "What should be improved next? Ongoing refinement as your firm grows.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Law Firm Technology Consulting | Practice Management & Operations | YMBS"
        description="Vendor-neutral law firm technology consulting. We help firms evaluate, implement, and adopt practice management, CRM, intake, automation, cybersecurity, and AI—without the vendor chaos."
        canonical="/law-firm-technology"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Law Firm Technology & Operations Consulting",
            description:
              "Vendor-neutral technology and operations consulting for law firms. Practice management software, CRM, intake, automation, AI, cybersecurity, and document workflows.",
            serviceType: "Law Firm Technology Consulting",
            url: "https://ymbs.pro/law-firm-technology",
            provider: {
              "@type": "Organization",
              name: "Yellow Mountain Business Solutions",
              url: "https://ymbs.pro",
            },
            areaServed: [{ "@type": "Country", name: "United States" }],
            audience: {
              "@type": "BusinessAudience",
              audienceType: "Law Firms, Professional Services",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Law Firm Technology & Operations Consulting",
            description:
              "Technology and operations consulting for law firms—practice management, CRM, intake, automation, and cybersecurity.",
            url: "https://ymbs.pro/law-firm-technology",
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
              Law Firm Technology & Operations
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold mb-8 text-balance leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Technology and Operations Consulting for Law Firms
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-balance mb-10">
              From practice management software to cybersecurity, we help law
              firms evaluate, implement, and adopt the right technology—without
              the vendor chaos.
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
              <Link to="/assessments/technology">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/5 border-white/15 text-white hover:bg-white/10 font-bold text-lg px-8 py-6 h-auto rounded-full transition-all backdrop-blur-md"
                >
                  Start a Technology Audit
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-zinc-500">
              Based in Florida. Serving law firms nationally.
            </p>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="bg-white border-b border-zinc-200 py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-bold uppercase tracking-widest text-zinc-500">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" /> Vendor-Neutral
            </span>
            <span className="hidden md:inline text-zinc-300">·</span>
            <span className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-primary" /> 20+ Years
              Technology Experience
            </span>
            <span className="hidden md:inline text-zinc-300">·</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Florida-Based,
              National Reach
            </span>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="py-24 bg-light-section">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Most law firms don't have a technology problem. They have a
                systems problem.
              </h2>
              <p className="text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                You're paying for practice management software, a separate CRM,
                a phone system, a document tool, a billing platform—and none of
                them talk to each other. Intake is scattered. Staff use
                workarounds. IT costs keep climbing with nothing to show for it.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Disconnected Intake",
                  desc: "Leads enter through the website, phone, email, and walk-ins—each tracked differently or not at all.",
                },
                {
                  title: "Tool Sprawl",
                  desc: "Five subscriptions doing what two should. Nobody knows which system has the source of truth.",
                },
                {
                  title: "Adoption Failure",
                  desc: "You bought good software. Half the staff still uses email and spreadsheets because nobody trained them.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-zinc-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <h3
                    className="text-lg font-bold mb-2 text-[#1A2433]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-24 bg-white border-t border-zinc-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                What we help law firms with
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Vendor-neutral technology consulting across the entire firm
                operations lifecycle.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={i}
                    className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3
                      className="text-lg font-bold mb-2 text-[#1A2433]"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      {svc.title}
                    </h3>
                    <p className="text-zinc-600 leading-relaxed text-sm">
                      {svc.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* VENDOR-NEUTRAL MODEL */}
        <section className="py-24 bg-dark-section text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Vendor-neutral. Implementation-focused.
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                We don't sell software. We don't get kickbacks. We evaluate what
                actually fits your firm, implement it, and make sure your team
                uses it.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((step, i) => (
                <div key={i} className="card-dark rounded-2xl p-8">
                  <div
                    className="text-4xl font-bold text-primary/20 mb-4"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {step.step}
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 text-white"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROOF — Case Study */}
        <section className="py-16 bg-white border-t border-zinc-200">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-[#1A2433] text-white rounded-full text-sm font-bold tracking-wider uppercase">
                  Law Firm
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wider uppercase">
                  Technology
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wider uppercase">
                  Operations
                </span>
              </div>
              <h3
                className="text-2xl font-bold mb-4 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Law Firm Intake & Technology Consolidation
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    Problem
                  </p>
                  <p className="text-base text-zinc-600 leading-relaxed mb-4">
                    A growing law firm had leads entering through five
                    disconnected channels—website form, phone, email, referrals,
                    and walk-ins. No unified CRM. No automated intake routing.
                    Staff manually entered data into three separate systems.
                  </p>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    YMBS Approach
                  </p>
                  <p className="text-base text-zinc-600 leading-relaxed">
                    Audited the full technology stack, consolidated redundant
                    tools, implemented a unified CRM with automated intake
                    routing, and configured phone systems to sync with the new
                    workflow.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    Result
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-base text-[#1A2433] font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{" "}
                      Unified intake process with automated lead routing
                    </li>
                    <li className="flex items-start gap-2 text-base text-[#1A2433] font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{" "}
                      Eliminated 3 redundant software subscriptions
                    </li>
                    <li className="flex items-start gap-2 text-base text-[#1A2433] font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{" "}
                      Clear lead ownership across the firm
                    </li>
                    <li className="flex items-start gap-2 text-base text-[#1A2433] font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{" "}
                      Faster response times on new inquiries
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

        {/* CROSS-LINK TO OPERATIONS */}
        <section className="py-20 bg-light-section border-t border-[#0B1D33]/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
              Technology + Operations
            </p>
            <h3
              className="text-2xl font-bold mb-4 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Software implementation fails without operational readiness.
            </h3>
            <p className="text-lg text-zinc-600 mb-6 max-w-2xl mx-auto">
              Our technology and operations teams work together so new systems
              land cleanly with documented workflows and trained staff.
            </p>
            <Link to="/services/operations">
              <Button
                variant="outline"
                className="font-bold rounded-full border-primary text-primary hover:bg-primary hover:text-black transition-all"
              >
                Explore Operations Services{" "}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
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

        {/* RELATED SERVICES */}
        <section className="py-16 bg-light-section border-t border-zinc-200">
          <div className="max-w-5xl mx-auto px-6">
            <h3
              className="text-2xl font-bold mb-8 text-center text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Related services for law firms
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/law-firm-pr-system"
                className="bg-white rounded-2xl p-6 border border-zinc-200 hover:border-primary hover:shadow-md transition-all flex flex-col"
              >
                <h4 className="text-lg font-bold mb-2 text-[#1A2433]">
                  Law Firm Authority & PR System
                </h4>
                <p className="text-sm text-zinc-500 mb-4 flex-grow">
                  Build a messaging framework, media toolkit, and authority
                  content engine that positions your partners as industry
                  leaders.
                </p>
                <span className="text-primary font-bold text-sm">
                  Explore PR System →
                </span>
              </Link>
              <Link
                to="/services/communications"
                className="bg-white rounded-2xl p-6 border border-zinc-200 hover:border-primary hover:shadow-md transition-all flex flex-col"
              >
                <h4 className="text-lg font-bold mb-2 text-[#1A2433]">
                  Executive Communications
                </h4>
                <p className="text-sm text-zinc-500 mb-4 flex-grow">
                  Prepare partners for media interviews, public statements, and
                  high-stakes stakeholder communication.
                </p>
                <span className="text-primary font-bold text-sm">
                  Explore Communications →
                </span>
              </Link>
              <Link
                to="/assessments/technology"
                className="bg-white rounded-2xl p-6 border border-zinc-200 hover:border-primary hover:shadow-md transition-all flex flex-col"
              >
                <h4 className="text-lg font-bold mb-2 text-[#1A2433]">
                  Technology Systems Assessment
                </h4>
                <p className="text-sm text-zinc-500 mb-4 flex-grow">
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

        {/* SCALE Intersection */}
        <ScaleIntersection
          pillar="Law Firms"
          dimensions={[
            "Structure",
            "Alignment",
            "Liability & Governance Readiness",
            "Execution",
          ]}
          context="Law firms carry real financial and reputational risk. SCALE maps intake workflows, technology, accountability, and communication together—so a software decision doesn't outpace the governance behind it."
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
              Stop letting broken technology slow your firm down.
            </h2>
            <p className="text-lg text-zinc-400 mb-12 max-w-xl mx-auto">
              In 30 minutes, we'll audit your current systems and tell you what
              we'd do next.
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
              <Link to="/assessments/technology">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/5 border-white/15 text-white hover:bg-white/10 font-bold px-10 h-14 text-base rounded-full transition-all backdrop-blur-md"
                >
                  Start a Technology Audit
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
