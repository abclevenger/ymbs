import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Target,
  Compass,
  HeartHandshake,
  ClipboardList,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { track } from "@/lib/analytics";
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

export default function NestorOrtiz() {
  useEffect(() => {
    track.highIntentPageView("/nestor-ortiz", "Partner");
  }, []);
  return (
    <>
      <SEOHead
        title="Nestor Ortiz — Leadership, Organizational Development & Executive Strategy | YMBS"
        description="Nestor Ortiz, Leadership & Organizational Strategy Advisor at YMBS. Builds leadership systems, executive alignment, organizational culture, accountability, and change leadership—turning strategy into action."
        canonical="/nestor-ortiz"
        ogImage="https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a9047cf0dae815363fd4e1d.png"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Nestor Ortiz",
          jobTitle:
            "Leadership, Organizational Development & Executive Strategy | Leadership & Organizational Strategy Advisor",
          description:
            "Nestor Ortiz, Leadership & Organizational Strategy Advisor at YMBS. Builds leadership systems, executive alignment, organizational culture, accountability, and change leadership—turning strategy into action.",
          url: "https://ymbs.pro/nestor-ortiz",
          image:
            "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a9047cf0dae815363fd4e1d.png",
          worksFor: {
            "@type": "Organization",
            name: "Yellow Mountain Business Solutions",
            alternateName: "YMBS",
            url: "https://ymbs.pro",
          },
          knowsAbout: [
            "Leadership Systems",
            "Executive Alignment",
            "Organizational Culture",
            "Accountability",
            "Strategic Planning",
            "Change Leadership",
            "Facilitation",
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
                src="https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a9047cf0dae815363fd4e1d.png"
                alt="Nestor Ortiz — Leadership & Organizational Strategy Advisor at YMBS"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-sm font-bold tracking-widest uppercase text-primary mb-4"
            >
              Leadership, Organizational Development & Executive Strategy
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Nestor Ortiz
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-zinc-300 mb-10 max-w-3xl mx-auto leading-relaxed text-balance"
            >
              He builds leadership systems, executive alignment, and
              accountability. Nestor specializes in organizational culture,
              change leadership, and guiding boards and leadership teams through
              complex transitions—turning strategy into action.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/services/leadership">
                <Button className="btn-glow bg-primary text-black hover:bg-primary/90 font-bold px-8 py-6 h-auto text-lg rounded-full">
                  Explore Leadership Services
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
              Who Nestor Advises
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
              <p>
                Nestor works with executive teams and boards where leadership
                agrees in the room but diverges in execution. He facilitates
                alignment sessions, builds shared plans, and coaches leaders
                through the hard conversations that most organizations avoid.
              </p>
              <p>
                With years of experience guiding boards and leadership teams
                through complex transitions, he ensures that the vision set in
                the boardroom translates directly into execution. His approach
                is outcomes-oriented: decisions get made, ownership gets
                assigned, and teams move forward together.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-12">
              {[
                { stat: "50+", label: "Teams developed" },
                { stat: "100+", label: "Alignment sessions facilitated" },
                { stat: "Multi-year", label: "Strategic plans executed" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm text-center"
                >
                  <p className="text-3xl font-bold text-primary mb-1">
                    {s.stat}
                  </p>
                  <p className="text-sm text-zinc-500 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="py-24 bg-dark-section relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.05),transparent_70%)] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                What Nestor Fixes
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Users,
                  title: "Leadership Systems & Alignment",
                  desc: "Teams agree in the room but diverge in execution. Nestor builds true executive alignment.",
                },
                {
                  icon: Target,
                  title: "Strategic Planning",
                  desc: "Turns leadership priorities into a practical roadmap people actually execute.",
                },
                {
                  icon: Compass,
                  title: "Facilitation & Change Leadership",
                  desc: "Guides boards and teams through difficult decisions and complex transitions.",
                },
                {
                  icon: HeartHandshake,
                  title: "Organizational Culture & Health",
                  desc: "Builds trust, accountability, and culture that sustains performance.",
                },
                {
                  icon: Users,
                  title: "Leadership Development",
                  desc: "Coaches leaders and builds teams that perform without founder dependency.",
                },
                {
                  icon: ClipboardList,
                  title: "Accountability Systems",
                  desc: "Clear ownership, decision rights, and follow-through frameworks.",
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
              Engage With Nestor
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/services/leadership"
                className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-primary/30 transition-all group"
              >
                <h3 className="text-xl font-bold mb-3 text-[#1A2433]">
                  Leadership & Organizational Strategy
                </h3>
                <p className="text-zinc-600 mb-4">
                  Facilitation, coaching, team alignment, and organizational
                  health.
                </p>
                <span className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                to="/strategic-planning"
                className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-primary/30 transition-all group"
              >
                <h3 className="text-xl font-bold mb-3 text-[#1A2433]">
                  Strategic Planning
                </h3>
                <p className="text-zinc-600 mb-4">
                  Turn leadership priorities into a practical roadmap people
                  execute.
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
              When to call Nestor
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Leadership is misaligned, difficult decisions are stalled, or
              strategy isn't turning into action.
            </p>
          </div>
        </section>

        {/* SCALE Contribution */}
        <ScaleIntersection
          pillar="Nestor's Role"
          dimensions={["Culture", "Alignment", "Execution"]}
          context="Nestor leads the Culture and Alignment work inside SCALE—getting leadership teams aligned in the room and building the accountability systems that turn strategy into Execution."
          theme="light"
        />

        <PartnerAuthorityLinks slug="nestor-ortiz" />

        {/* CTA */}
        <section className="py-24 bg-dark-section relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.15),transparent)]"></div>
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Ready to get your team moving in the same direction?
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
