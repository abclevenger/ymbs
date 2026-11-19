import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText, Compass, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { track } from "@/lib/analytics";
import {
  partnerAuthority,
  getInsightsByAuthor,
  type PartnerAuthority,
} from "@/lib/partnerAuthority";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
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

/**
 * Cross-links a partner to their authored insights, relevant solutions,
 * industries, and the central assessments hub. Strengthens internal
 * authority clusters: Partner → Insights → Pillar → Solution → Assessment.
 */
export default function PartnerAuthorityLinks({
  slug,
}: {
  slug: PartnerAuthority["slug"];
}) {
  const auth = partnerAuthority[slug];
  const insights = getInsightsByAuthor(auth.name);

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="py-20 bg-light-section border-t border-zinc-100"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div variants={fadeUp} className="text-center mb-12">
          <h2
            className="text-2xl md:text-3xl font-bold mb-3 text-[#1A2433] tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Explore {auth.name.split(" ")[0]}&rsquo;s work
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Connected across {auth.pillar}, the solutions{" "}
            {auth.name.split(" ")[0]} contributes to, and the insights{" "}
            {auth.name.split(" ")[0]} has authored.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Authored insights */}
          {insights.length > 0 && (
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-2xl border border-zinc-200 p-7"
            >
              <div className="flex items-center gap-2 mb-5">
                <BookOpen className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-[#1A2433]">Authored insights</h3>
              </div>
              <ul className="space-y-3">
                {insights.map((ins) => (
                  <li key={ins.slug}>
                    <Link
                      to={`/insights/${ins.slug}`}
                      className="text-sm text-zinc-700 hover:text-primary inline-flex items-start gap-2 group"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform" />
                      <span>
                        <span className="font-medium">{ins.title}</span>
                        <span className="block text-xs text-zinc-400 mt-0.5">
                          {ins.category} · {ins.readTime}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Solutions this pillar participates in */}
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-2xl border border-zinc-200 p-7"
          >
            <div className="flex items-center gap-2 mb-5">
              <Compass className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-[#1A2433]">
                Solutions {auth.name.split(" ")[0]} contributes to
              </h3>
            </div>
            <ul className="space-y-3">
              {auth.solutions.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/solutions/${s.slug}`}
                    className="text-sm text-zinc-700 hover:text-primary inline-flex items-start gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform" />
                    <span className="font-medium">{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pillar + assessments */}
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-2xl border border-zinc-200 p-7"
          >
            <div className="flex items-center gap-2 mb-5">
              <Layers className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-[#1A2433]">Pillar & assessments</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link
                  to={auth.pillarHref}
                  className="text-sm text-zinc-700 hover:text-primary inline-flex items-start gap-2 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform" />
                  <span className="font-medium">{auth.pillar} services</span>
                </Link>
              </li>
              <li>
                <Link
                  to={auth.startHref}
                  className="text-sm text-zinc-700 hover:text-primary inline-flex items-start gap-2 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform" />
                  <span className="font-medium">{auth.startLabel}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/assessments"
                  className="text-sm text-zinc-700 hover:text-primary inline-flex items-start gap-2 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform" />
                  <span className="font-medium">All YMBS assessments</span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Industries */}
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-2xl border border-zinc-200 p-7"
          >
            <div className="flex items-center gap-2 mb-5">
              <FileText className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-[#1A2433]">Industries served</h3>
            </div>
            <ul className="space-y-3">
              {auth.industries.map((ind) => (
                <li key={ind.href}>
                  <Link
                    to={ind.href}
                    className="text-sm text-zinc-700 hover:text-primary inline-flex items-start gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform" />
                    <span className="font-medium">{ind.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Pillar-specific CTA */}
        <motion.div variants={fadeUp} className="text-center mt-10">
          <Link to="/contact">
            <Button
              className="bg-primary text-black hover:bg-primary/90 font-bold px-8 h-12 rounded-full"
              onClick={() =>
                track.discoveryCallClick("partner-authority", auth.pillar)
              }
            >
              {auth.ctaLabel} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
