import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/lib/blogPosts";
import ScaleIntersection from "@/components/ScaleIntersection";

// Maps each pillar to its most relevant SCALE dimensions
const PILLAR_SCALE: Record<string, { dimensions: string[]; context: string }> =
  {
    Technology: {
      dimensions: [
        "Structure",
        "Liability & Governance Readiness",
        "Execution",
      ],
      context:
        "Technology is the Structure your organization runs on. Disconnected systems create risk and break Execution—so SCALE evaluates your tech stack as a readiness dimension, not just a tools list.",
    },
    Operations: {
      dimensions: [
        "Structure",
        "Alignment",
        "Liability & Governance Readiness",
        "Execution",
      ],
      context:
        "Operations work lives at the center of SCALE—documenting Structure, clarifying governance and Liability readiness, and building the Execution cadence that keeps decisions from stalling.",
    },
    Communications: {
      dimensions: ["Culture", "Alignment", "Execution"],
      context:
        "Communications is how Culture and Alignment become visible. When leaders communicate poorly, trust erodes and Execution stalls—so SCALE treats messaging and reputation as a readiness issue, not an afterthought.",
    },
    Leadership: {
      dimensions: ["Culture", "Alignment", "Execution"],
      context:
        "Leadership is the Culture and Alignment engine inside SCALE. Without aligned leadership, Structure breaks down and Execution stalls—so YMBS diagnoses the human system before recommending a fix.",
    },
  };

export interface SubServiceProps {
  path: string;
  title: string;
  pageTitle: string;
  description: string;
  heroSubtitle: string;
  parent: { label: string; path: string };
  pillar: string;
  assessmentPath?: string;
  problems: string[];
  solutions: { title: string; desc: string }[];
  outcomes: { metric: string; label: string }[];
  faqs: { q: string; a: string }[];
  relatedServices: { label: string; path: string }[];
  relatedArticleSlugs?: string[];
  expert: { name: string; title: string; path: string };
  ctaText?: string;
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

const PILLAR_ASSESSMENT: Record<string, string> = {
  Technology: "/assessments/technology",
  Communications: "/services/communications",
  Operations: "/services/operations",
  Leadership: "/services/leadership",
};

export function SubServiceSeo({
  opts,
}: {
  opts: Omit<
    SubServiceProps,
    | "heroSubtitle"
    | "parent"
    | "problems"
    | "solutions"
    | "outcomes"
    | "relatedServices"
    | "relatedArticleSlugs"
    | "expert"
    | "ctaText"
    | "assessmentPath"
  >;
}) {
  return (
    <SEOHead
      title={`${opts.pageTitle} | YMBS`}
      description={opts.description}
      canonical={opts.path}
      schemaJson={[
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: opts.pageTitle,
          description: opts.description,
          serviceType: opts.pillar,
          url: `https://ymbs.pro${opts.path}`,
          provider: {
            "@type": "Organization",
            name: "Yellow Mountain Business Solutions",
            url: "https://ymbs.pro",
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: opts.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ]}
    />
  );
}

export default function SubServicePage(props: SubServiceProps) {
  const assessmentPath =
    props.assessmentPath ||
    PILLAR_ASSESSMENT[props.pillar] ||
    "/assessments/system-health";

  const relatedArticles = (props.relatedArticleSlugs || [])
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 3);

  return (
    <div className="min-h-screen selection:bg-primary selection:text-[#0B1D33]">
      <SubServiceSeo opts={props} />
      <div className="bg-white border-b border-zinc-200">
        <div className="max-w-6xl mx-auto py-4">
          <Breadcrumbs />
        </div>
      </div>

      <section className="relative py-24 md:py-32 bg-[#0B1D33] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-20" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4"
          >
            {props.pillar}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {props.title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed"
          >
            {props.heroSubtitle}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 font-bold px-10 h-14 rounded-full w-full sm:w-auto"
              >
                {props.ctaText || "Get Clarity"}
              </Button>
            </Link>
            <Link to={assessmentPath}>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/5 border-white/15 text-white hover:bg-white/10 font-semibold px-10 h-14 rounded-full w-full sm:w-auto backdrop-blur-md"
              >
                Start an Assessment
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 md:py-32 bg-[#F8F8F6]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto px-6"
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Where this breaks down
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              The symptoms organizations experience before getting this right.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {props.problems.map((p, i) => (
              <motion.div
                variants={fadeUp}
                key={i}
                className="bg-white border border-zinc-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm"
              >
                <span className="text-primary font-bold text-xl mt-0.5 shrink-0">
                  —
                </span>
                <p className="text-zinc-700 leading-relaxed text-lg">{p}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-24 md:py-32 bg-[#0B1D33] text-white relative overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto px-6 relative z-10"
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              How YMBS approaches it
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {props.solutions.map((s, i) => (
              <motion.div
                variants={fadeUp}
                key={i}
                className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-8"
              >
                <h3
                  className="text-xl font-bold mb-3 text-white"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto px-6"
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What changes
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {props.outcomes.map((o, i) => (
              <motion.div
                variants={fadeUp}
                key={i}
                className="text-center p-6 rounded-2xl bg-zinc-50 border border-zinc-200"
              >
                <p
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {o.metric}
                </p>
                <p className="text-sm text-zinc-600 font-medium">{o.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-24 md:py-32 bg-[#F8F8F6]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto px-6"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-zinc-900 tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Common questions
          </motion.h2>
          <Accordion type="single" collapsible className="space-y-4">
            {props.faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm border-b"
              >
                <AccordionTrigger className="p-6 text-left font-bold text-lg text-zinc-900 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-zinc-600 leading-relaxed text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </section>

      {/* SCALE Intersection */}
      {PILLAR_SCALE[props.pillar] && (
        <ScaleIntersection
          pillar={props.pillar}
          dimensions={PILLAR_SCALE[props.pillar].dimensions}
          context={PILLAR_SCALE[props.pillar].context}
          theme="light"
        />
      )}

      <section className="py-24 bg-white border-t border-zinc-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-8 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                Led by
              </p>
              <h3
                className="text-2xl font-bold mb-1 text-zinc-900"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {props.expert.name}
              </h3>
              <p className="text-sm text-zinc-500 mb-4">{props.expert.title}</p>
              <Link
                to={props.expert.path}
                className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
              >
                Meet {props.expert.name.split(" ")[0]}{" "}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-8 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                Related services
              </p>
              <ul className="space-y-3">
                {props.relatedServices.map((r, i) => (
                  <li key={i}>
                    <Link
                      to={r.path}
                      className="text-zinc-900 font-medium hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="py-24 bg-[#F8F8F6] border-t border-zinc-200">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto px-6"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold mb-12 text-center text-zinc-900 tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Related insights
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <motion.div
                  variants={fadeUp}
                  key={article.slug}
                  className="bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex flex-col overflow-hidden"
                >
                  <Link to={`/insights/${article.slug}`} className="block">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-40 object-cover"
                    />
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      {article.category}
                    </p>
                    <h3
                      className="text-lg font-bold mb-2 text-zinc-900 leading-tight"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      <Link
                        to={`/insights/${article.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-4 flex-grow line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-zinc-500">
                      <span>{article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      <section className="py-24 md:py-32 bg-[#0B1D33] text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-10" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto px-6 relative z-10"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Find out what this is costing you.
          </h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
            In 30 minutes, we'll help identify what's actually holding your
            organization back and tell you what we'd do next.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary text-black hover:bg-primary/90 font-bold px-10 h-14 rounded-full shadow-lg shadow-primary/20"
            >
              Get Clarity
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
