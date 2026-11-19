import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  MapPin,
  Building2,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import ScaleIntersection from "@/components/ScaleIntersection";
import { team, capabilities } from "@/components/CompanyProfileData";
import SEOHead from "@/components/SEOHead";

export default function CompanyProfile() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="YMBS Company Profile & Capabilities | Yellow Mountain Business Solutions"
        description="Yellow Mountain Business Solutions — company profile, capabilities, leadership team, engagement model, and credentials. Updated 2026."
        canonical="/company-profile"
      />
      {/* HERO */}
      <section className="bg-dark-section text-white pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(212,160,23,0.12),transparent)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-primary font-bold tracking-wider uppercase text-sm mb-4">
            Updated 2026
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-8 text-balance leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Yellow Mountain Business Solutions — Company Profile & Capabilities
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto text-balance mb-10">
            An integrated consulting firm specializing in operations,
            technology, communications, and leadership for nonprofits, law
            firms, and mission-driven organizations.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary text-black hover:bg-primary/90 font-bold text-lg px-8 py-6 h-auto rounded-full btn-glow"
            >
              Get Clarity
            </Button>
          </Link>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-24 bg-light-section">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-bold mb-8 text-[#1A2433]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Company Overview
          </h2>
          <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
            <p>
              Yellow Mountain Business Solutions (YMBS) is a veteran-owned
              consulting firm based in Land O Lakes, Florida, serving
              organizations nationally. Founded by Ashley Clevenger, YMBS was
              built to solve the problem of siloed consulting—where
              organizations hire one firm for operations, another for
              technology, and a third for leadership development.
            </p>
            <p>
              YMBS brings four disciplines together under one roof: Operations,
              Technology, Communications, and Leadership. The team works
              alongside leadership teams to identify what's broken, create a
              practical plan, and help implement the changes needed to build a
              stronger organization.
            </p>
            <p>
              The YMBS model is built on a simple principle:{" "}
              <strong className="text-[#1A2433]">
                scale follows structure.
              </strong>{" "}
              Organizations that grow faster than their operational foundation
              eventually hit a wall. YMBS helps them fix the systems behind the
              chaos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-12">
            {[
              {
                icon: Building2,
                label: "Legal Name",
                value: "Yellow Mountain Business Solutions",
              },
              {
                icon: MapPin,
                label: "Headquarters",
                value: "Land O Lakes, Florida",
              },
              {
                icon: Shield,
                label: "Service Region",
                value: "United States (Remote & On-Site)",
              },
              { icon: Award, label: "Status", value: "Veteran-Owned Business" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-zinc-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-base font-medium text-[#1A2433]">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOUR-PILLAR MODEL */}
      <section className="py-24 bg-dark-section text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              The Four-Pillar Model
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              One integrated advisory team across four disciplines.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <div key={i} className="card-dark rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-primary uppercase tracking-widest">
                  {cap.pillar}
                </h3>
                <ul className="space-y-3">
                  {cap.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-zinc-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="py-24 bg-light-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Leadership Team
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Clients work directly with experienced advisors—not junior
              associates.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <Link
                key={i}
                to={member.profileLink}
                className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:border-primary/30 transition-all block"
              >
                <h3
                  className="text-xl font-bold mb-1 text-[#1A2433]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {member.name}
                </h3>
                <p className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
                  {member.role}
                </p>
                <p className="text-base text-zinc-600 leading-relaxed">
                  {member.focus}
                </p>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link
              to="/team"
              className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
            >
              Meet the full team <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-zinc-300">·</span>
            <Link
              to="/scale"
              className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
            >
              The SCALE™ Framework <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-zinc-300">·</span>
            <Link
              to="/services"
              className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
            >
              Explore services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SERVED */}
      <section className="py-24 bg-white border-y border-zinc-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-8 text-[#1A2433] text-center"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Industries Served
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Nonprofits & Mission-Driven Organizations",
              "Law Firms & Professional Services",
              "Associations & Membership Organizations",
              "Founder-Led Growth Companies",
              "Public Sector & Public Safety",
              "Community Services & Education",
            ].map((industry, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-zinc-50 p-4 rounded-xl border border-zinc-100"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-base font-medium text-zinc-700">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODEL */}
      <section className="py-24 bg-dark-section text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.12),transparent)]"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Engagement Model
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Three levels of engagement, from diagnosis to ongoing executive
              support.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                level: "Assess",
                title: "Diagnose the problem",
                desc: "Technology, cyber, system health, and SCALE™ readiness assessments.",
                price: "Free — $2,500",
              },
              {
                level: "Build",
                title: "Structured implementation",
                desc: "Mission Foundation™ frameworks, strategic planning, technology stack implementation.",
                price: "$5,000–$25,000",
              },
              {
                level: "Lead",
                title: "Ongoing executive support",
                desc: "Fractional COO, Fractional CCO, Integrated Executive Advisory.",
                price: "$3,500–$12,000/mo",
                featured: true,
              },
            ].map((tier, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 border ${tier.featured ? "bg-white/5 border-primary/30 shadow-xl" : "bg-white/[0.02] border-white/10"}`}
              >
                <p className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                  {tier.level}
                </p>
                <h3
                  className="text-xl font-bold mb-3 text-white"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {tier.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
                  {tier.desc}
                </p>
                <p className="text-lg font-bold text-primary">{tier.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER ECOSYSTEM */}
      <section className="py-24 bg-light-section">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Partner Ecosystem
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Independent strategy with access to a broad technology and
              specialist ecosystem. YMBS remains the strategic advisor—partners
              provide specialized expertise where appropriate.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Legal Services",
              "Accounting & Tax",
              "Insurance",
              "Human Resources",
              "Cybersecurity Specialists",
              "Banking & Capital",
              "Benefits Administration",
              "Technology Vendors",
              "Broadband & Connectivity",
            ].map((partner, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white p-4 rounded-xl border border-zinc-200"
              >
                <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                <span className="text-base font-medium text-zinc-700">
                  {partner}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-zinc-400 italic mt-8 max-w-2xl mx-auto text-center leading-relaxed">
            YMBS is not a law firm and does not provide legal advice. Legal
            services are provided independently under separate engagements,
            including through Mission Impact Legal or other appropriate legal
            providers.
          </p>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-20 bg-white border-y border-zinc-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-10 text-[#1A2433] text-center"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Credentials & Recognition
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "Veteran-Owned", label: "Business Status" },
              { stat: "4", label: "Integrated Disciplines" },
              { stat: "1", label: "Coordinated Team" },
              { stat: "National", label: "Service Area" },
            ].map((cred, i) => (
              <div key={i}>
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {cred.stat}
                </p>
                <p className="text-sm text-zinc-600 font-medium">
                  {cred.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="bg-white/5 rounded-xl flex items-center justify-center p-4 border border-zinc-200 shadow-sm h-24 w-36">
              <img
                src="https://vibe.filesafe.space/1776094666446468637/attachments/82593cbf-0d03-4aeb-9662-05cf227aaceb.png"
                alt="Veteran Owned Business"
                className="w-full h-auto max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SCALE Intersection */}
      <ScaleIntersection
        pillar="YMBS"
        dimensions={[
          "Structure",
          "Culture",
          "Alignment",
          "Liability & Governance Readiness",
          "Execution",
        ]}
        context="Everything YMBS does runs through the SCALE™ Framework—diagnosing readiness across five dimensions before recommending a solution, so the organization scales on solid ground rather than hidden risk."
        theme="light"
      />

      {/* CTA */}
      <section className="py-24 bg-dark-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.15),transparent)]"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Ready to talk?
          </h2>
          <p className="text-xl text-zinc-400 mb-10">
            Get clarity. We'll help identify what's holding your organization
            back.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary text-black hover:bg-primary/90 font-bold px-8 py-6 h-auto text-lg rounded-full btn-glow"
            >
              Get Clarity <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
