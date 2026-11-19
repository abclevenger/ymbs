import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mic, Building2, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { track } from "@/lib/analytics";
import SEOHead from "@/components/SEOHead";
import MichelleExperience from "@/components/MichelleExperience";
import PartnerAuthorityLinks from "@/components/PartnerAuthorityLinks";

/*
 * MICHELLE REVIEW: Confirm biography, title, years of experience, APR wording,
 * current affiliations, and prior-employer description before publication.
 * Confirm which named clients may be published.
 * Confirm the exact Clearview title and employment description.
 * Confirm permission to use campaign outcomes.
 * Confirm any revenue or participation metrics.
 * Confirm wording involving federal agencies, congressional recognition, and national initiatives.
 * Confirm current professional affiliations.
 * MICHELLE REVIEW: Do not publish V.I.T.A.L. until usage rights, attribution,
 * and ownership are confirmed. It originated with Andy and was used by Clearview.
 * Attribution, permission, ownership, compensation, and potential trademark use
 * remain unresolved. It may remain in this source-only comment only.
 * THANIA REVIEW: Confirm the public SCALE™ description, Michelle's mapping to
 * the framework, trademark formatting, and any statement assigning ownership
 * of a SCALE™ function to an individual.
 * These markers are internal-only and must not render on the public page.
 */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const compactServices = [
  {
    icon: Mic,
    title: "Spokesperson Ready",
    desc: "Executive preparation for interviews, testimony, board presentations, and high-stakes Q&A.",
  },
  {
    icon: Building2,
    title: "Message & Reputation Foundation",
    desc: "Messaging framework, positioning, and stakeholder alignment for launches, transitions, and major announcements.",
  },
  {
    icon: Handshake,
    title: "Embedded Communications Partner",
    desc: "Ongoing senior communications counsel without a full-time communications executive.",
  },
];

export default function MichelleGriffith() {
  useEffect(() => {
    track.highIntentPageView("/michelle-griffith", "Partner");
  }, []);
  return (
    <>
      <SEOHead
        title="Michelle Griffith, APR | Strategic Communications Consulting | YMBS"
        description="Michelle Griffith, APR, leads Communications at YMBS. Strategic communications consulting, executive media training, crisis communications, and reputation advisory for nonprofits, law firms, and mission-driven organizations."
        canonical="/michelle-griffith"
        ogImage="https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a90453a9a0fb7c669893ce7.png"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Michelle Griffith, APR",
          jobTitle:
            "Communications Consultant | Strategic Communications, Operations & Growth",
          description:
            "Michelle Griffith, APR, leads Communications at YMBS. Strategic communications consulting, executive media training, crisis communications, and reputation advisory for nonprofits, law firms, and mission-driven organizations.",
          url: "https://ymbs.pro/michelle-griffith",
          image:
            "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a90453a9a0fb7c669893ce7.png",
          worksFor: {
            "@type": "Organization",
            name: "Yellow Mountain Business Solutions",
            alternateName: "YMBS",
            url: "https://ymbs.pro",
          },
          knowsAbout: [
            "Strategic Communications",
            "Executive Media Training",
            "Crisis Communications",
            "Reputation Management",
            "Executive Readiness",
            "Stakeholder Communications",
            "Fractional Communications Leadership",
          ],
        }}
      />
      <div className="flex flex-col min-h-screen">
        {/* 1. PROFILE HERO */}
        <section className="relative pt-32 pb-32 md:pt-40 md:pb-48 flex items-center justify-center text-center px-6 overflow-hidden bg-dark-section">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:64px_64px]"></div>
          <div className="absolute inset-0 hero-gradient"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.12),transparent)]"></div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-4xl mx-auto text-white"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-zinc-300">
                Communications Consultant · YMBS
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.05] tracking-tight text-balance"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Messaging that builds trust and consistency.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-3xl mx-auto font-medium text-balance leading-relaxed"
            >
              Michelle helps executives, boards, and leadership teams
              communicate clearly when trust, reputation, and organizational
              credibility are at stake. Her work includes message development,
              executive preparation, strategic communications, and crisis
              readiness.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8"
            >
              <Link to="/contact">
                <Button className="btn-glow bg-primary text-black hover:bg-primary/90 font-bold text-lg px-10 py-7 h-auto rounded-full transition-all duration-300 transform hover:-translate-y-1">
                  Talk With Michelle <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services/communications">
                <Button
                  variant="outline"
                  className="bg-white/5 border-white/10 text-white hover:bg-white/10 font-bold text-lg px-10 py-7 h-auto rounded-full transition-all duration-300 backdrop-blur-md"
                >
                  Explore Communications Services
                </Button>
              </Link>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-lg text-zinc-400 font-medium"
            >
              Part of Yellow Mountain Business Solutions · Available for
              fractional, project, and advisory engagements
            </motion.p>
          </motion.div>
        </section>

        {/* 2. CONCISE BIOGRAPHY */}
        <section className="py-24 md:py-32 bg-light-section border-b border-zinc-100">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-7xl mx-auto px-6"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp}>
                <div className="relative">
                  <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden bg-black shadow-2xl">
                    <img
                      src="https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a90453a9a0fb7c669893ce7.png"
                      alt="Michelle Griffith, APR — Communications Consultant at YMBS"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h2
                  className="text-3xl md:text-5xl font-bold mb-8 text-[#1A2433] tracking-tight leading-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Michelle Griffith, APR
                </h2>
                <div className="space-y-6 text-lg text-zinc-600 leading-relaxed max-w-[680px]">
                  <p>
                    Michelle Griffith, APR, leads Communications at YMBS. She
                    brings senior communications leadership experience, helping
                    executives, boards, and spokespeople communicate with
                    clarity—during media interviews, stakeholder conversations,
                    organizational launches, and high-pressure situations.
                  </p>
                  <p>
                    Her approach combines message discipline, practical
                    preparation, and calm, candid counsel. Michelle helps
                    leadership teams understand what needs to be said, who needs
                    to hear it, and how to communicate it consistently across
                    audiences and channels.
                  </p>
                  <p>
                    At YMBS, Michelle works alongside specialists in Operations,
                    Technology, and Leadership, giving clients access to
                    integrated senior-level support without building multiple
                    disconnected consulting relationships.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* 3. PROBLEMS + 5. SELECTED EXPERIENCE (extracted) */}
        <MichelleExperience />

        {/* 4. APPROACH & AREAS OF EXPERTISE (compact services) */}
        <section className="py-24 md:py-32 bg-light-section">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-5xl mx-auto px-6"
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2
                className="text-3xl md:text-5xl font-bold mb-6 text-[#1A2433] tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Approach and areas of expertise
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                Michelle's work is grounded in message discipline, practical
                preparation, and calm, candid counsel. Three connected service
                areas—each scoped to the organization's needs.
              </p>
            </motion.div>

            <div className="space-y-4">
              {compactServices.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm flex items-start gap-5 hover:border-primary/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3
                        className="text-lg font-bold text-[#1A2433] mb-1"
                        style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                      >
                        {svc.title}
                      </h3>
                      <p className="text-base text-zinc-600 leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div variants={fadeUp} className="text-center mt-10">
              <Link to="/services/communications">
                <Button
                  variant="outline"
                  className="font-bold px-8 py-6 h-auto text-lg rounded-full border-primary text-primary hover:bg-primary hover:text-black transition-all"
                >
                  Explore Communications Services{" "}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* 6. MICHELLE'S ROLE WITHIN THE INTEGRATED TEAM */}
        <section className="py-24 md:py-32 bg-dark-section relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.1),transparent)]"></div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-5xl mx-auto px-6 text-center relative z-10"
          >
            <motion.div variants={fadeUp}>
              <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">
                Michelle + YMBS
              </span>
              <h2
                className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-tight leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Communications expertise as part of an integrated operating
                team.
              </h2>
              <p className="text-xl text-zinc-300 leading-relaxed max-w-[680px] mx-auto mb-6">
                Michelle doesn't arrive as a standalone PR consultant. She's
                part of the YMBS team—meaning operations, technology,
                leadership, and communications are aligned under one roof. When
                your operational changes need a communications strategy, it's
                already in the room.
              </p>
              <p className="text-base text-zinc-400 leading-relaxed max-w-[680px] mx-auto mb-10">
                Michelle helps translate Culture, Alignment, and Execution into
                clear, trustworthy communication—so that leadership decisions
                are understood across the organization.{" "}
                <Link
                  to="/scale"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  Learn how SCALE™ works →
                </Link>
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/team">
                  <Button
                    variant="outline"
                    className="font-bold px-8 py-6 h-auto text-lg rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/30"
                  >
                    Meet the Full Team <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/services/communications">
                  <Button
                    variant="outline"
                    className="font-bold px-8 py-6 h-auto text-lg rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/30"
                  >
                    Explore Communications Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <PartnerAuthorityLinks slug="michelle-griffith" />

        {/* 7. CLOSING CTA */}
        <section className="py-32 md:py-40 bg-light-section relative overflow-hidden">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto px-6 text-center relative z-10"
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-8 text-[#1A2433] tracking-tight leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Make sure your message is as ready as your organization.
            </h2>
            <p className="text-xl text-zinc-600 mb-12 text-balance leading-relaxed max-w-2xl mx-auto">
              Whether you are preparing for growth, a major announcement, a
              difficult interview, or a reputational challenge, YMBS can help
              you determine what needs to be said and what should happen next.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact">
                <Button className="btn-glow bg-primary text-black hover:bg-primary/90 font-bold px-12 py-8 h-auto text-xl rounded-full transition-all duration-300 hover:-translate-y-1">
                  Talk With Michelle <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services/communications">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-black font-bold px-12 py-8 h-auto text-xl rounded-full transition-all duration-300"
                >
                  Explore Communications Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
