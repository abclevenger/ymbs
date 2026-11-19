import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Linkedin,
  MonitorSmartphone,
  Shield,
  Bot,
  Server,
  Code,
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

export default function AshleyClevenger() {
  useEffect(() => {
    track.highIntentPageView("/ashley-clevenger", "Partner");
  }, []);
  return (
    <>
      <SEOHead
        title="Ashley Clevenger — Business Technology, Growth & Sales Operations | YMBS"
        description="Ashley Clevenger, Technology Strategist and Founder of YMBS. Connects business, technology, and sales operations—building CRM, automation, AI, cybersecurity, and revenue systems that drive growth."
        canonical="/ashley-clevenger"
        ogImage="https://vibe.filesafe.space/1776094666446468637/attachments/51e89f65-186a-4fdc-84c6-eadc6e1a2e2c.jpg"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ashley Clevenger",
          jobTitle:
            "Business Technology, Growth & Sales Operations | Founder, YMBS",
          description:
            "Ashley Clevenger, Technology Strategist and Founder of YMBS. Connects business, technology, and sales operations—building CRM, automation, AI, cybersecurity, and revenue systems that drive growth. 21+ years across mission-critical systems.",
          url: "https://ymbs.pro/ashley-clevenger",
          image:
            "https://vibe.filesafe.space/1776094666446468637/attachments/51e89f65-186a-4fdc-84c6-eadc6e1a2e2c.jpg",
          worksFor: {
            "@type": "Organization",
            name: "Yellow Mountain Business Solutions",
            alternateName: "YMBS",
            url: "https://ymbs.pro",
          },
          knowsAbout: [
            "Business Technology",
            "Growth & Sales Operations",
            "CRM & Revenue Operations",
            "AI & Automation",
            "Cybersecurity",
            "Systems Integration",
          ],
        }}
      />
      <div className="flex flex-col min-h-screen bg-brand-dark text-white">
        {/* HERO */}
        <section className="relative pt-32 pb-32 flex items-center justify-center text-center px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.12),transparent)]"></div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeUp}
              className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8 border-2 border-white/10"
            >
              <img
                src="https://vibe.filesafe.space/1776094666446468637/attachments/51e89f65-186a-4fdc-84c6-eadc6e1a2e2c.jpg"
                alt="Ashley Clevenger, Business Technology, Growth & Sales Operations Strategist at Yellow Mountain Business Solutions"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-sm font-bold tracking-widest uppercase text-primary mb-4"
            >
              Business Technology, Growth & Sales Operations | Founder, YMBS
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Ashley Clevenger
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-zinc-400 mb-6 max-w-3xl mx-auto leading-relaxed text-balance"
            >
              He connects business, technology, and sales operations—building
              CRM, automation, AI, and revenue systems that turn disconnected
              tools into infrastructure that drives growth.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-xl text-zinc-300 mb-10 max-w-3xl mx-auto leading-relaxed text-balance"
            >
              21+ years across mission-critical systems, public safety
              technology, federal automation, broadband infrastructure, and
              entrepreneurship. He turns technology from overhead into
              advantage.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/services/technology">
                <Button className="btn-glow bg-primary text-black hover:bg-primary/90 font-bold px-8 py-6 h-auto text-lg rounded-full">
                  Explore Technology Services
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

        {/* CREDIBILITY BLOCK */}
        <section className="py-20 bg-[#0A0A0C] border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Built in environments where systems cannot fail.
            </h2>
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
              <p>
                Ashley brings 21+ years of experience across mission-critical
                systems where downtime was not an option. His background
                includes U.S. Coast Guard information systems, Sailor of the
                Quarter recognition, public safety technology, management of a
                $1.2M technology grant, documented IT cost reduction, federal
                process automation, and broadband/telecommunications
                infrastructure.
              </p>
              <p>
                He works with executive directors, managing partners, and
                leadership teams who are tired of technology feeling like a
                liability. He conducts deep technology audits, oversees
                right-sized implementations, and cuts through vendor chaos to
                help organizations consolidate their tech stack.
              </p>
              <p>
                Additional expertise includes SEO, website design, custom
                application development, and UCaaS solutions. He doesn't
                recommend software and leave—he implements it and makes sure
                staff actually use it.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-12">
              {[
                {
                  stat: "Coast Guard",
                  label: "Mission-critical systems background",
                },
                {
                  stat: "Vendor-neutral",
                  label: "Technology advisory approach",
                },
                {
                  stat: "Implements",
                  label: "Doesn't just recommend—builds & trains",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center"
                >
                  <p className="text-2xl font-bold text-primary mb-1">
                    {s.stat}
                  </p>
                  <p className="text-sm text-zinc-400 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="py-24 bg-brand-dark border-t border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Areas of Expertise
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Growth & Sales Operations",
                  desc: "CRM, revenue operations, customer journey, and sales systems that turn technology into growth.",
                },
                {
                  icon: Bot,
                  title: "AI & Automation",
                  desc: "Workflow automation, AI communications, and internal AI assistants that remove busywork.",
                },
                {
                  icon: MonitorSmartphone,
                  title: "Business Technology Strategy",
                  desc: "Vendor-neutral audits, roadmaps, and right-sized implementations that fit the organization.",
                },
                {
                  icon: Shield,
                  title: "Cybersecurity & Risk",
                  desc: "Security audits, compliance, and incident response planning that protects the organization.",
                },
                {
                  icon: Server,
                  title: "Infrastructure & UCaaS / CCaaS",
                  desc: "Network design, SD-WAN, unified communications, and cloud migration.",
                },
                {
                  icon: Code,
                  title: "Digital Systems & SEO",
                  desc: "Custom web applications, SEO, website rebuilds, and API integrations that drive visibility.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] transition-colors"
                  >
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
        <section className="py-24 bg-[#0A0A0C] border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6">
            <h2
              className="text-3xl font-bold mb-8 text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Engage With Ashley
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/services/technology"
                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all group"
              >
                <h3 className="text-xl font-bold mb-3 text-white">
                  Technology Strategy & Systems
                </h3>
                <p className="text-zinc-400 mb-4">
                  Assess, right-size, and implement your technology stack
                  without the vendor chaos.
                </p>
                <span className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                to="/assessments/technology"
                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all group"
              >
                <h3 className="text-xl font-bold mb-3 text-white">
                  Free Technology Assessment
                </h3>
                <p className="text-zinc-400 mb-4">
                  Get a clear inventory of what you have and what's slowing your
                  team down.
                </p>
                <span className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Start assessment <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* WHEN TO CALL */}
        <section className="py-20 bg-[#0A0A0C] border-t border-white/10">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2
              className="text-3xl font-bold mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              When to call Ashley
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Technology decisions are getting expensive, fragmented, risky, or
              difficult to implement.
            </p>
          </div>
        </section>

        {/* SCALE Contribution */}
        <ScaleIntersection
          pillar="Ashley's Role"
          dimensions={[
            "Structure",
            "Liability & Governance Readiness",
            "Execution",
          ]}
          context="Ashley owns the technology dimension of SCALE—evaluating whether the systems underneath the organization actually support Structure, manage risk, and enable Execution rather than blocking it."
          theme="dark"
        />

        <PartnerAuthorityLinks slug="ashley-clevenger" />

        {/* CTA */}
        <section className="py-24 bg-brand-dark border-t border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.15),transparent)]"></div>
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Ready to make your tech feel calm again?
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
