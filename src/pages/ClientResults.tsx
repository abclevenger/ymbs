import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { track, initScrollDepthTracking } from "@/lib/analytics";
import { useEffect } from "react";
import {
  Testimonial,
  OutcomeSnapshot,
  Credential,
  FrameworkProof,
  IndustryExperience,
  BeforeAfter,
  ProofStrip,
} from "@/components/proof/ProofComponents";
import {
  VERIFIED_CREDENTIALS,
  VERIFIED_FRAMEWORKS,
  VERIFIED_INDUSTRY_EXPERIENCE,
  VERIFIED_TRANSFORMATIONS,
  VERIFIED_OUTCOMES,
  VERIFIED_TESTIMONIALS,
  VERIFIED_PROOF_STRIP,
} from "@/lib/verifiedProof";

const PATH = "/client-results";
const TITLE = "Client Results & Proof | YMBS";
const DESCRIPTION =
  "Verified client outcomes, credentials, frameworks, and industry experience from YMBS—fractional operations, technology, communications, and leadership advisory.";

const serif = { fontFamily: "'Playfair Display', Georgia, serif" };

export default function ClientResults() {
  useEffect(() => {
    track.highIntentPageView(PATH, "Client Results");
    const cleanup = initScrollDepthTracking(PATH);
    return cleanup;
  }, []);

  return (
    <>
      <SEOHead
        title={TITLE}
        description={DESCRIPTION}
        canonical={PATH}
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Client Results & Proof",
            description: DESCRIPTION,
            url: `https://ymbs.pro${PATH}`,
          },
        ]}
      />
      <div className="flex flex-col min-h-screen">
        {/* HERO */}
        <section className="bg-dark-section text-white pt-32 pb-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(212,160,23,0.12),transparent)]"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="text-primary font-bold tracking-wider uppercase text-sm mb-6">
              Client Results & Proof
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold mb-8 text-balance leading-tight"
              style={serif}
            >
              Built from experience. Not theory—done it.
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-balance">
              YMBS brings senior-level experience across legal practices,
              nonprofit and business operations, marketing and PR departments,
              IT infrastructure, and leadership systems. Here's what that looks
              like in practice.
            </p>
          </div>
        </section>

        {/* PROOF STRIP */}
        <section className="py-10 bg-white border-b border-zinc-200">
          <div className="max-w-5xl mx-auto px-6">
            <ProofStrip items={VERIFIED_PROOF_STRIP} variant="light" />
          </div>
        </section>

        {/* CREDENTIALS */}
        <section className="py-20 bg-light-section">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2433]"
                style={serif}
              >
                Credentials
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Professional credentials held by the YMBS team.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {VERIFIED_CREDENTIALS.map((cred, i) => (
                <Credential key={i} data={cred} variant="light" />
              ))}
            </div>
            <p className="text-center text-sm text-zinc-500 italic mt-8">
              Additional credentials will be added as they are verified.
            </p>
          </div>
        </section>

        {/* FRAMEWORKS */}
        <section className="py-20 bg-white border-y border-zinc-200">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2433]"
                style={serif}
              >
                Frameworks & Methodologies
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Proprietary systems that give YMBS work structure and
                accountability.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {VERIFIED_FRAMEWORKS.filter(
                (fw) => fw.status !== "pending-review",
              ).map((fw, i) => (
                <FrameworkProof key={i} data={fw} variant="light" />
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRY EXPERIENCE */}
        <section className="py-20 bg-light-section">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2433]"
                style={serif}
              >
                Industry Experience
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Category-level experience across the YMBS team. Details may be
                generalized to protect client confidentiality.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {VERIFIED_INDUSTRY_EXPERIENCE.map((exp, i) => (
                <IndustryExperience key={i} data={exp} variant="light" />
              ))}
            </div>
          </div>
        </section>

        {/* ILLUSTRATIVE DELIVERABLES — methods & example work products */}
        <section className="py-20 bg-white border-y border-zinc-200">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2433]"
                style={serif}
              >
                What a YMBS Engagement Produces
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Illustrative deliverables and methods—examples of the work
                product an engagement produces. These are representative, not
                tied to a specific named client.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  discipline: "Operations",
                  items: [
                    "Documented SOPs and process maps",
                    "Governance framework with clear decision rights",
                    "Board-ready reporting structure",
                    "Compliance-ready documentation",
                  ],
                },
                {
                  discipline: "Technology",
                  items: [
                    "Living Technology Record inventory",
                    "Vendor-neutral technology roadmap",
                    "CRM / workflow buildout",
                    "Cybersecurity risk review",
                  ],
                },
                {
                  discipline: "Communications",
                  items: [
                    "Messaging framework",
                    "Stakeholder communication plan",
                    "Crisis response playbook",
                    "Executive briefing prep",
                  ],
                },
                {
                  discipline: "Leadership",
                  items: [
                    "Strategic planning framework",
                    "Accountability and decision-rights map",
                    "Change leadership plan",
                    "Executive alignment sessions",
                  ],
                },
                {
                  discipline: "Assessment",
                  items: [
                    "SCALE™ readiness scorecard",
                    "Priority action roadmap",
                    "Pillar-by-pillar findings",
                    "Recommended next steps",
                  ],
                },
                {
                  discipline: "Engagement",
                  items: [
                    "Project-based implementation",
                    "Fractional executive support",
                    "Ongoing advisory",
                    "Diagnostic assessment",
                  ],
                },
              ].map((group, i) => (
                <div
                  key={i}
                  className="bg-light-section rounded-2xl p-6 border border-zinc-200"
                >
                  <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
                    {group.discipline}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-zinc-700 leading-snug"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-zinc-500 italic mt-8 max-w-2xl mx-auto">
              Example work products shown for illustration. Actual deliverables
              depend on the organization, scope, and priorities of each
              engagement.
            </p>
          </div>
        </section>

        {/* TRANSFORMATIONS (shown only when verified examples exist) */}
        {VERIFIED_TRANSFORMATIONS.some((t) => t.verified) && (
          <section className="py-20 bg-white border-y border-zinc-200">
            <div className="max-w-5xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2433]"
                  style={serif}
                >
                  The Kind of Change We Work Toward
                </h2>
                <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                  Examples of the type of transformation YMBS works toward—not
                  guaranteed outcomes.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {VERIFIED_TRANSFORMATIONS.filter((t) => t.verified).map(
                  (t, i) => (
                    <BeforeAfter key={i} data={t} variant="light" />
                  ),
                )}
              </div>
            </div>
          </section>
        )}

        {/* OUTCOMES (empty until verified) */}
        {VERIFIED_OUTCOMES.length > 0 && (
          <section className="py-20 bg-light-section">
            <div className="max-w-5xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2433]"
                  style={serif}
                >
                  Measurable Outcomes
                </h2>
                <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                  Representative engagement outcomes. Details may be generalized
                  to protect client confidentiality.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {VERIFIED_OUTCOMES.map((o, i) => (
                  <OutcomeSnapshot key={i} data={o} variant="light" />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* TESTIMONIALS (shown only when verified testimonials exist) */}
        {VERIFIED_TESTIMONIALS.some((t) => t.verified) && (
          <section className="py-20 bg-white border-y border-zinc-200">
            <div className="max-w-5xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2433]"
                  style={serif}
                >
                  What Clients Say
                </h2>
                <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                  Role-attributed testimonials. Named testimonials will be added
                  as permissions are confirmed.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {VERIFIED_TESTIMONIALS.filter((t) => t.verified).map((t, i) => (
                  <Testimonial key={i} data={t} variant="light" />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-24 bg-dark-section text-white text-center px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.15),transparent)]"></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={serif}>
              See what YMBS can do for your organization.
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
                    "client_results_final_cta",
                    "Client Results",
                  )
                }
              >
                <button className="bg-primary text-black hover:bg-primary/90 font-bold text-lg px-8 py-6 h-auto rounded-full btn-glow transition-all">
                  Get Clarity
                </button>
              </Link>
              <Link to="/scale/assessment">
                <button className="bg-white/5 border border-white/15 text-white hover:bg-white/10 font-bold text-lg px-8 py-6 h-auto rounded-full transition-all backdrop-blur-md">
                  Take the SCALE™ Assessment
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
