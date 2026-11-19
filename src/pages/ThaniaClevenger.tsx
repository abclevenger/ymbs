import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Linkedin,
  ClipboardList,
  Shield,
  Users,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { track } from "@/lib/analytics";
import { motion, Variants } from "framer-motion";
import ScaleIntersection from "@/components/ScaleIntersection";
import SEOHead from "@/components/SEOHead";
import PartnerAuthorityLinks from "@/components/PartnerAuthorityLinks";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ThaniaClevenger() {
  useEffect(() => {
    track.highIntentPageView("/thania-clevenger", "Partner");
  }, []);
  return (
    <>
      <SEOHead
        title="Thania Clevenger — Fractional COO | Operations, Governance & Organizational Strategy | YMBS"
        description="Thania Clevenger, Fractional COO at YMBS. Executive operations leadership, governance, organizational structure, accountability, compliance, and strategic execution for nonprofits and growing organizations."
        canonical="/thania-clevenger"
        ogImage="https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904440722007d7ffee3e5b.png"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Thania Clevenger",
          jobTitle:
            "Fractional COO | Operations, Governance & Organizational Strategy",
          description:
            "Thania Clevenger, Fractional COO at YMBS. Executive operations leadership, governance, organizational structure, accountability, compliance, and strategic execution for nonprofits and growing organizations.",
          url: "https://ymbs.pro/thania-clevenger",
          image:
            "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904440722007d7ffee3e5b.png",
          worksFor: {
            "@type": "Organization",
            name: "Yellow Mountain Business Solutions",
            alternateName: "YMBS",
            url: "https://ymbs.pro",
          },
          knowsAbout: [
            "Operations",
            "Governance",
            "Organizational Strategy",
            "Fractional COO",
            "Compliance",
            "Accountability",
            "Process Improvement",
          ],
        }}
      />
      <div className="flex flex-col min-h-screen">
        {/* HERO */}
        <section className="relative pt-32 pb-32 flex items-center justify-center text-center px-6 overflow-hidden bg-dark-section">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.12),transparent)]"></div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-4xl mx-auto text-white"
          >
            <motion.div
              variants={fadeUp}
              className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8 border-2 border-white/10"
            >
              <img
                src="https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904440722007d7ffee3e5b.png"
                alt="Thania Clevenger — Fractional COO at YMBS"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-sm font-bold tracking-widest uppercase text-primary mb-4"
            >
              Fractional COO | Operations, Governance & Organizational Strategy
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Thania Clevenger
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-zinc-300 mb-10 max-w-3xl mx-auto leading-relaxed text-balance"
            >
              The architect behind scalable organizational systems. She
              transforms tribal knowledge into documented workflows and builds
              compliance foundations that allow mission-driven organizations to
              scale safely.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/fractional-coo">
                <Button className="btn-glow bg-primary text-black hover:bg-primary/90 font-bold px-8 py-6 h-auto text-lg rounded-full">
                  Explore Fractional COO
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="bg-white/5 border-white/10 text-white hover:bg-white/10 font-bold px-8 py-6 h-auto text-lg rounded-full"
                >
                  Get Clarity
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* AUTHORITY */}
        <section className="py-24 bg-light-section">
          <div className="max-w-5xl mx-auto px-6">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Who Thania Advises
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
              <p>
                Thania works with executive directors, managing partners, and
                boards who know their operations need structure but don't have
                the time or senior capacity to build it themselves. She steps in
                as a Fractional COO—diagnosing what's broken, documenting what
                matters, and building the operational foundation that lets the
                organization scale without chaos.
              </p>
              <p>
                Her specialty is turning informal, people-dependent processes
                into documented, repeatable systems. When key processes live
                only in people's heads, the organization is at risk. Thania
                extracts that knowledge and builds SOPs, governance frameworks,
                and accountability structures that survive staff turnover.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-12">
              {[
                { stat: "Governance", label: "Structure & accountability" },
                { stat: "Operations", label: "Process & execution" },
                { stat: "Strategy", label: "Organizational readiness" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm text-center"
                >
                  <p className="text-2xl font-bold text-primary mb-1">
                    {s.stat}
                  </p>
                  <p className="text-sm text-zinc-500 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEMS SOLVED */}
        <section className="py-24 bg-dark-section relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.05),transparent_70%)] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                What Thania Fixes
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: ClipboardList,
                  title: "Tribal Knowledge Risk",
                  desc: "Key processes exist only in people's heads. Thania documents and structures them.",
                },
                {
                  icon: Shield,
                  title: "Governance & Compliance",
                  desc: "Board roles, decision rights, and audit-ready documentation frameworks.",
                },
                {
                  icon: Users,
                  title: "Operational Bottlenecks",
                  desc: "Diagnoses where work gets stuck and redesigns workflows for efficiency.",
                },
                {
                  icon: TrendingUp,
                  title: "Margin Recovery",
                  desc: "Identifies operational waste and recovers margin through process optimization.",
                },
                {
                  icon: ClipboardList,
                  title: "SOP Development",
                  desc: "Standard Operating Procedures that staff actually follow.",
                },
                {
                  icon: Shield,
                  title: "Board Reporting",
                  desc: "Clear reporting structures that give boards visibility without micromanagement.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="card-dark rounded-2xl p-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-24 bg-light-section">
          <div className="max-w-5xl mx-auto px-6">
            <h2
              className="text-3xl font-bold mb-8 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Engage With Thania
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/fractional-coo"
                className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-primary/30 transition-all group"
              >
                <h3 className="text-xl font-bold mb-3 text-[#1A2433]">
                  Fractional COO
                </h3>
                <p className="text-zinc-600 mb-4">
                  Executive-level operations leadership without a full-time COO
                  salary.
                </p>
                <span className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                to="/services/operations"
                className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-primary/30 transition-all group"
              >
                <h3 className="text-xl font-bold mb-3 text-[#1A2433]">
                  Operations & Governance
                </h3>
                <p className="text-zinc-600 mb-4">
                  Workflow documentation, governance frameworks, and audit
                  readiness.
                </p>
                <span className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* WHEN TO CALL */}
        <section className="py-20 bg-light-section">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2
              className="text-3xl font-bold mb-6 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              When to call Thania
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Your organization feels operationally stuck, governance is
              unclear, or growth is exposing process weaknesses.
            </p>
          </div>
        </section>

        {/* SCALE Contribution */}
        <ScaleIntersection
          pillar="Thania's Role"
          dimensions={[
            "Structure",
            "Alignment",
            "Liability & Governance Readiness",
            "Execution",
          ]}
          context="Thania leads the Structure and governance work inside SCALE—turning undocumented processes into accountable systems and making sure the organization is ready for what comes next."
          theme="light"
        />

        <PartnerAuthorityLinks slug="thania-clevenger" />

        {/* CTA */}
        <section className="py-24 bg-dark-section relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.15),transparent)]"></div>
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Ready to build an operation that scales?
            </h2>
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
    </>
  );
}
