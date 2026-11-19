import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Building2,
  Target,
  Wrench,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { track, initScrollDepthTracking } from "@/lib/analytics";
import SEOHead from "@/components/SEOHead";
import { Scale } from "lucide-react";

export interface CaseStudyData {
  slug: string;
  client: string;
  industry: string;
  tags: string[];
  problem: string;
  impact: string;
  approach: string;
  implementation: string;
  results: string[];
  disciplines: string[];
  quote?: string;
  quoteAuthor?: string;
  quoteTitle?: string;
  /** Relevant SCALE™ dimensions only — do not force all five. */
  scaleDimensions?: string[];
  /** Related service/pillar pages for internal linking. */
  relatedServices?: { label: string; href: string }[];
  /**
   * Cross-pillar "what changed by discipline" breakdown. Only include
   * disciplines that actually participated in the engagement. Renders a
   * per-pillar contribution section so a case study shows multiple
   * disciplines contributing to one engagement.
   */
  pillarContributions?: {
    discipline: string;
    /** What changed for this discipline */
    changes: string;
    /** Optional authority partner who led this piece */
    partner?: string;
    partnerHref?: string;
  }[];
}

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
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function CaseStudyTemplate({ data }: { data: CaseStudyData }) {
  const description = `How YMBS helped ${data.client} solve ${data.industry.toLowerCase()} challenges across ${data.disciplines.join(", ")}.`;
  useEffect(() => {
    track.caseStudyViewed(data.disciplines[0]);
    const cleanup = initScrollDepthTracking(`/case-studies/${data.slug}`);
    return cleanup;
  }, [data]);

  const sections = [
    {
      icon: AlertTriangle,
      label: "Problem",
      content: data.problem,
      color: "text-red-500",
    },
    {
      icon: TrendingUp,
      label: "Business Impact",
      content: data.impact,
      color: "text-orange-500",
    },
    {
      icon: Target,
      label: "YMBS Approach",
      content: data.approach,
      color: "text-primary",
    },
    {
      icon: Wrench,
      label: "Implementation",
      content: data.implementation,
      color: "text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title={`${data.client} Case Study | YMBS`}
        description={description}
        canonical={`/case-studies/${data.slug}`}
        ogType="article"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `${data.client} Case Study`,
          description,
          url: `https://ymbs.pro/case-studies/${data.slug}`,
          publisher: {
            "@type": "Organization",
            name: "Yellow Mountain Business Solutions",
            alternateName: "YMBS",
            url: "https://ymbs.pro",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://ymbs.pro/case-studies/${data.slug}`,
          },
        }}
      />
      {/* HERO */}
      <section className="bg-dark-section text-white pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(212,160,23,0.12),transparent)]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            to="/client-results"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All Case Studies
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-bold tracking-wider uppercase">
              {data.industry}
            </span>
            {data.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-primary/15 text-primary rounded-full text-sm font-bold tracking-wider uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {data.client}
          </h1>
        </div>
      </section>

      {/* STRUCTURED SECTIONS */}
      <section className="py-20 bg-light-section">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto px-6"
        >
          <div className="space-y-8">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center border border-zinc-200">
                      <Icon className={`w-5 h-5 ${section.color}`} />
                    </div>
                    <h2
                      className="text-xl font-bold text-[#1A2433]"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      {section.label}
                    </h2>
                  </div>
                  <p className="text-lg text-zinc-600 leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* RESULTS */}
      <section className="py-20 bg-white border-y border-zinc-200">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2
            className="text-2xl md:text-3xl font-bold mb-8 text-[#1A2433] text-center"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Results
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.results.map((result, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-6 rounded-xl bg-zinc-50 border border-zinc-200"
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-base text-[#1A2433] font-medium leading-relaxed">
                  {result}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CROSS-PILLAR CONTRIBUTIONS — what changed by discipline */}
      {data.pillarContributions && data.pillarContributions.length > 0 && (
        <section className="py-20 bg-white border-y border-zinc-200">
          <div className="max-w-4xl mx-auto px-6">
            <h2
              className="text-2xl md:text-3xl font-bold mb-3 text-[#1A2433] text-center"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What changed by discipline
            </h2>
            <p className="text-center text-sm text-zinc-500 mb-8 max-w-xl mx-auto">
              Only the disciplines that actually participated in this
              engagement.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {data.pillarContributions.map((c, i) => (
                <div
                  key={i}
                  className="bg-zinc-50 rounded-2xl border border-zinc-200 p-6"
                >
                  <h3 className="font-bold text-primary text-sm uppercase tracking-wider mb-3">
                    {c.discipline}
                  </h3>
                  <p className="text-base text-[#1A2433] leading-relaxed mb-3">
                    {c.changes}
                  </p>
                  {c.partner && c.partnerHref && (
                    <Link
                      to={c.partnerHref}
                      className="text-xs text-zinc-500 hover:text-primary inline-flex items-center gap-1"
                    >
                      Led by {c.partner} <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CLIENT QUOTE */}
      {data.quote && (
        <section className="py-20 bg-dark-section relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.1),transparent)]"></div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto px-6 text-center relative z-10"
          >
            <div
              className="text-5xl text-primary mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              "
            </div>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 italic">
              {data.quote}
            </p>
            <div className="pt-4 border-t border-white/10">
              <p
                className="font-bold text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {data.quoteAuthor}
              </p>
              <p className="text-sm text-primary font-medium mt-1">
                {data.quoteTitle}
              </p>
            </div>
          </motion.div>
        </section>
      )}

      {/* DISCIPLINES + SCALE DIMENSIONS + RELATED SERVICES + CTA */}
      <section className="py-20 bg-light-section">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6 justify-center flex-wrap">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="font-bold text-[#1A2433]">
              YMBS Disciplines Involved:
            </span>
            {data.disciplines.map((d, i) => (
              <span key={i} className="text-primary font-medium">
                {d}
                {i < data.disciplines.length - 1 ? " ·" : ""}
              </span>
            ))}
          </div>

          {data.scaleDimensions && data.scaleDimensions.length > 0 && (
            <div className="flex items-center gap-3 mb-6 justify-center flex-wrap">
              <Scale className="w-4 h-4 text-primary" />
              <span className="font-bold text-[#1A2433]">
                SCALE™ Dimensions:
              </span>
              {data.scaleDimensions.map((d, i) => (
                <span key={i} className="text-primary font-medium">
                  {d}
                  {i < data.scaleDimensions.length - 1 ? " ·" : ""}
                </span>
              ))}
            </div>
          )}

          <p className="text-center text-sm text-zinc-500 mb-8">
            Diagnosed through the{" "}
            <Link
              to="/scale"
              className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
            >
              <Scale className="w-3.5 h-3.5" /> SCALE™ Framework
            </Link>{" "}
            — because the real problem rarely lives in a single discipline.
          </p>

          {data.relatedServices && data.relatedServices.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <span className="text-sm font-bold text-zinc-500 uppercase tracking-wider">
                Related Services:
              </span>
              {data.relatedServices.map((s, i) => (
                <Link
                  key={i}
                  to={s.href}
                  className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-[#1A2433] hover:border-primary/40 hover:text-primary transition-all"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          <div className="text-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 font-bold px-8 h-14 text-base rounded-full btn-glow transition-all hover:-translate-y-1"
              >
                Get Clarity <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
