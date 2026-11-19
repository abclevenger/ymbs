import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { useEffect } from "react";
import { track, initScrollDepthTracking } from "@/lib/analytics";
import {
  Testimonial,
  OutcomeSnapshot,
  Credential,
  FrameworkProof,
  IndustryExperience,
  BeforeAfter,
  ProofStrip,
} from "@/components/proof/ProofComponents";

/* =========================================================================
 *  YMBS CASE STUDY TEMPLATE
 *
 *  Reusable structure for case studies organized around PROBLEMS.
 *
 *  Structure:
 *    Situation → Challenge → What YMBS Did → Disciplines Involved →
 *    Deliverables → Result → Client Quote → Related Services
 *
 *  Do NOT populate Result or Client Quote unless verified data exists.
 *  Use [VERIFIED RESULT NEEDED] / [VERIFIED TESTIMONIAL NEEDED] placeholders.
 *  ========================================================================= */

const serif = { fontFamily: "'Playfair Display', Georgia, serif" };

export interface CaseStudyData {
  slug: string;
  title: string;
  situation: string;
  challenge: string;
  whatYmbsDid: string;
  disciplines: string[];
  deliverables: string[];
  result?: string; // undefined if not verified
  clientQuote?: {
    quote: string;
    author: string;
    title: string;
  };
  relatedServices: { label: string; link: string }[];
  scaleDimensions: string[];
}

export default function CaseStudyTemplate({ data }: { data: CaseStudyData }) {
  const path = `/case-studies/${data.slug}`;

  useEffect(() => {
    track.highIntentPageView(path, `Case Study: ${data.title}`);
    const cleanup = initScrollDepthTracking(path);
    return cleanup;
  }, [path, data.title]);

  return (
    <>
      <SEOHead
        title={`${data.title} | YMBS Case Study`}
        description={data.challenge.slice(0, 155)}
        canonical={path}
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: data.title,
            description: data.challenge,
            url: `https://ymbs.pro${path}`,
            author: {
              "@type": "Organization",
              name: "Yellow Mountain Business Solutions",
            },
            publisher: {
              "@type": "Organization",
              name: "Yellow Mountain Business Solutions",
              url: "https://ymbs.pro",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://ymbs.pro",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Client Results",
                item: "https://ymbs.pro/client-results",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: data.title,
                item: `https://ymbs.pro${path}`,
              },
            ],
          },
        ]}
      />
      <div className="flex flex-col min-h-screen">
        {/* HERO */}
        <section className="bg-dark-section text-white pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(212,160,23,0.12),transparent)]"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <p className="text-primary font-bold tracking-wider uppercase text-sm mb-4">
              Case Study
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight"
              style={serif}
            >
              {data.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {data.disciplines.map((d, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-wider uppercase"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SITUATION */}
        <section className="py-16 bg-light-section">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
              The Situation
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed">
              {data.situation}
            </p>
          </div>
        </section>

        {/* CHALLENGE */}
        <section className="py-16 bg-white border-y border-zinc-200">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
              The Challenge
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed">
              {data.challenge}
            </p>
          </div>
        </section>

        {/* WHAT YMBS DID */}
        <section className="py-16 bg-light-section">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
              What YMBS Did
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed">
              {data.whatYmbsDid}
            </p>
          </div>
        </section>

        {/* DISCIPLINES + SCALE */}
        <section className="py-16 bg-white border-y border-zinc-200">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
                  Disciplines Involved
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.disciplines.map((d, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
                  SCALE™ Dimensions
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.scaleDimensions.map((s, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-zinc-100 text-zinc-700 rounded-full text-sm font-bold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section className="py-16 bg-light-section">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-6">
              Deliverables
            </p>
            <ul className="space-y-3">
              {data.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-base text-zinc-700">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* RESULT */}
        <section className="py-16 bg-white border-y border-zinc-200">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
              The Result
            </p>
            {data.result ? (
              <p className="text-lg text-zinc-700 leading-relaxed font-medium">
                {data.result}
              </p>
            ) : (
              <p className="text-lg text-amber-600 italic leading-relaxed">
                [VERIFIED RESULT NEEDED — do not publish outcomes until
                confirmed by the engagement team]
              </p>
            )}
          </div>
        </section>

        {/* CLIENT QUOTE */}
        {data.clientQuote && (
          <section className="py-16 bg-light-section">
            <div className="max-w-3xl mx-auto px-6">
              <figure className="rounded-2xl p-8 bg-white border border-zinc-200 shadow-sm">
                <blockquote
                  className="text-lg leading-relaxed mb-6 italic text-[#1A2433]"
                  style={serif}
                >
                  "{data.clientQuote.quote}"
                </blockquote>
                <figcaption className="pt-4 border-t border-zinc-200">
                  <p className="font-bold text-[#1A2433]" style={serif}>
                    {data.clientQuote.author}
                  </p>
                  <p className="text-sm text-primary font-medium mt-0.5">
                    {data.clientQuote.title}
                  </p>
                </figcaption>
              </figure>
            </div>
          </section>
        )}

        {/* RELATED SERVICES */}
        <section className="py-16 bg-white border-t border-zinc-200">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-6">
              Related Services
            </p>
            <div className="flex flex-wrap gap-3">
              {data.relatedServices.map((s, i) => (
                <Link
                  key={i}
                  to={s.link}
                  className="px-5 py-2.5 rounded-full border border-primary text-primary font-bold text-sm hover:bg-primary hover:text-black transition-all"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-dark-section text-white text-center px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.15),transparent)]"></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={serif}>
              Facing a similar challenge?
            </h2>
            <p className="text-xl text-white/70 mb-4 text-balance">
              Start with a 30-minute fit conversation.
            </p>
            <p className="text-sm text-white/50 mb-10">
              30 minutes • No obligation • Leave with clearer priorities
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                onClick={() =>
                  track.discoveryCallClick(
                    `case_study_${data.slug}_cta`,
                    `Case Study: ${data.title}`,
                  )
                }
              >
                <button className="bg-primary text-black hover:bg-primary/90 font-bold text-lg px-8 py-6 h-auto rounded-full btn-glow transition-all">
                  Get Clarity
                </button>
              </Link>
              <Link to="/client-results">
                <button className="bg-white/5 border border-white/15 text-white hover:bg-white/10 font-bold text-lg px-8 py-6 h-auto rounded-full transition-all backdrop-blur-md">
                  See All Client Results
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
