import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Settings,
  Cpu,
  Search,
  Users,
  Compass,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { track, initScrollDepthTracking } from "@/lib/analytics";
import SEOHead from "@/components/SEOHead";

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

export interface PillarContribution {
  name: "Operations" | "Technology" | "Communications" | "Leadership";
  points: string[];
  /** Authority partner link for this pillar */
  partner: string;
  partnerHref: string;
  pillarHref: string;
}

export interface SolutionData {
  slug: string;
  /** Browser title (no | YMBS suffix) */
  title: string;
  /** Hero eyebrow */
  eyebrow: string;
  /** H1 */
  headline: string;
  /** Hero supporting copy */
  intro: string;
  /** Meta description */
  description: string;
  /** What problem is the organization experiencing? */
  problem: string;
  /** Why does this problem usually involve more than one discipline? */
  whyCrossDiscipline: string;
  /** Which YMBS pillars participate + what each contributes */
  contributions: PillarContribution[];
  /** What does the engagement look like? */
  engagement: string[];
  /** What outcomes can the organization expect? (no fabricated metrics) */
  outcomes: string[];
  /** What assessment or consultation should they start with? */
  startAssessment: {
    label: string;
    href: string;
  };
  /** Related insights (slugs) */
  relatedInsights?: { slug: string; title: string }[];
  /** Related case studies */
  relatedCaseStudies?: { slug: string; title: string }[];
}

const pillarIcons: Record<PillarContribution["name"], typeof Settings> = {
  Operations: Settings,
  Technology: Cpu,
  Communications: Search,
  Leadership: Users,
};

/**
 * Reusable cross-pillar solution page. Demonstrates that real organizational
 * problems cross disciplines — it is NOT a generic service page. Each page
 * shows which pillars participate and what each contributes.
 */
export default function SolutionPage({ data }: { data: SolutionData }) {
  const path = `/solutions/${data.slug}`;

  useEffect(() => {
    track.highIntentPageView(path, "Solutions");
    const cleanup = initScrollDepthTracking(path);
    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.slug]);

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title={`${data.title} | YMBS`}
        description={data.description}
        canonical={path}
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: data.title,
            description: data.description,
            url: `https://ymbs.pro${path}`,
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: data.title,
            description: data.description,
            serviceType: "Integrated Advisory Solution",
            url: `https://ymbs.pro${path}`,
            provider: {
              "@type": "Organization",
              name: "Yellow Mountain Business Solutions",
              url: "https://ymbs.pro",
            },
            areaServed: [{ "@type": "Country", name: "United States" }],
            audience: {
              "@type": "BusinessAudience",
              audienceType: "Growing businesses, Nonprofits, Law firms",
            },
          },
        ]}
      />
      {/* Hero */}
      <section className="relative pt-36 pb-28 md:pt-44 md:pb-32 flex items-center justify-center text-center px-6 overflow-hidden bg-dark-section">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(252,223,2,0.12),transparent)]"></div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-3xl mx-auto text-white"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <Compass className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-300">
              {data.eyebrow}
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold mb-6 leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {data.headline}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {data.intro}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to={data.startAssessment.href}>
              <Button
                className="btn-glow bg-primary text-black hover:bg-primary/90 font-bold text-base px-10 h-14 rounded-full transition-all duration-300 hover:-translate-y-1"
                onClick={() => track.discoveryCallClick("solution-hero")}
              >
                {data.startAssessment.label}{" "}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="bg-white/5 border-white/15 text-white hover:bg-white/10 font-semibold text-base px-10 h-14 rounded-full transition-all duration-300 backdrop-blur-md"
              >
                Get Clarity
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* The problem + why it crosses disciplines */}
      <section className="py-20 md:py-24 bg-light-section">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-4xl mx-auto px-6"
        >
          <motion.div variants={fadeUp} className="mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-5 text-[#1A2433] tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              The problem
            </h2>
            <p className="text-lg text-zinc-700 leading-relaxed">
              {data.problem}
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-2xl border border-zinc-200 p-8 md:p-10"
          >
            <h3
              className="text-xl md:text-2xl font-bold mb-4 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Why this is rarely one discipline
            </h3>
            <p className="text-lg text-zinc-700 leading-relaxed">
              {data.whyCrossDiscipline}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Four-pillar contribution section */}
      <section className="py-20 md:py-24 bg-white border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2433] tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              How the four disciplines work together
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Each YMBS pillar contributes a different piece. Coordinated under
              one team, they address the root cause instead of the symptom.
            </p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-2 gap-6"
          >
            {data.contributions.map((c) => {
              const Icon = pillarIcons[c.name];
              return (
                <motion.div
                  key={c.name}
                  variants={fadeUp}
                  className="bg-light-section rounded-2xl border border-zinc-200 p-8 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3
                      className="text-xl font-bold text-[#1A2433]"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      {c.name}
                    </h3>
                  </div>
                  <ul className="space-y-3 mb-6 flex-grow">
                    {c.points.map((p, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-zinc-700"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="leading-snug">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-5 border-t border-zinc-100 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                    <Link
                      to={c.pillarHref}
                      className="font-bold text-primary hover:underline inline-flex items-center gap-1"
                    >
                      {c.name} services <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to={c.partnerHref}
                      className="text-zinc-500 hover:text-primary"
                    >
                      Led by {c.partner}
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Engagement + outcomes */}
      <section className="py-20 md:py-24 bg-light-section">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold mb-5 text-[#1A2433] tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What the engagement looks like
            </h2>
            <ul className="space-y-4">
              {data.engagement.map((e, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-700">
                  <span className="text-primary font-bold shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-relaxed">{e}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold mb-5 text-[#1A2433] tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What you can expect
            </h2>
            <ul className="space-y-4">
              {data.outcomes.map((o, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Related insights + case studies */}
      {data.relatedInsights?.length || data.relatedCaseStudies?.length ? (
        <section className="py-16 bg-white border-t border-zinc-100">
          <div className="max-w-5xl mx-auto px-6">
            <h2
              className="text-2xl font-bold mb-8 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Related proof &amp; insights
            </h2>
            <div className="flex flex-wrap gap-3">
              {data.relatedCaseStudies?.map((cs) => (
                <Link
                  key={cs.slug}
                  to={`/case-studies/${cs.slug}`}
                  className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-[#1A2433] hover:border-primary/40 hover:text-primary transition-all"
                >
                  {cs.title}
                </Link>
              ))}
              {data.relatedInsights?.map((ins) => (
                <Link
                  key={ins.slug}
                  to={`/insights/${ins.slug}`}
                  className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-[#1A2433] hover:border-primary/40 hover:text-primary transition-all"
                >
                  {ins.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Closing CTA */}
      <section className="py-24 bg-dark-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(252,223,2,0.15),transparent)]"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Start with the diagnostic
          </h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
            {data.startAssessment.label} finds where this problem actually lives
            across your organization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={data.startAssessment.href}>
              <Button className="btn-glow bg-primary text-black hover:bg-primary/90 font-bold px-10 h-14 text-base rounded-full transition-all hover:-translate-y-1">
                {data.startAssessment.label}{" "}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="bg-white/5 border-white/15 text-white hover:bg-white/10 font-bold px-10 h-14 text-base rounded-full transition-all backdrop-blur-md"
              >
                Get Clarity
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
