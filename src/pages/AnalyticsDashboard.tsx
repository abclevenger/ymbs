import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  TrendingUp,
  Users,
  Phone,
  Mail,
  CalendarCheck,
  FileText,
  Target,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { track, initScrollDepthTracking } from "@/lib/analytics";
import SEOHead from "@/components/SEOHead";

export default function AnalyticsDashboard() {
  useEffect(() => {
    const cleanup = initScrollDepthTracking("/analytics-dashboard");
    return cleanup;
  }, []);

  const events = [
    {
      name: "discovery_call_click",
      category: "Primary",
      status: "Active",
      description:
        "Fires when any Discovery Call CTA is clicked. Tracks cta_location and pillar.",
    },
    {
      name: "discovery_call_booked",
      category: "Primary",
      status: "Active",
      description:
        "Fires on successful contact form submission with discovery intent. Tracks pillar.",
    },
    {
      name: "assessment_started",
      category: "Secondary",
      status: "Active",
      description: "Fires when an assessment CTA is clicked. Tracks pillar.",
    },
    {
      name: "assessment_completed",
      category: "Primary",
      status: "Active",
      description: "Fires on assessment form submission. Tracks pillar.",
    },
    {
      name: "assessment_review_booked",
      category: "Primary",
      status: "Active",
      description: "Fires when assessment review is booked. Tracks pillar.",
    },
    {
      name: "integrated_advisory_interest",
      category: "Primary",
      status: "Active",
      description:
        "Fires on Integrated Executive Advisory CTA clicks. Tracks cta_location.",
    },
    {
      name: "contact_form_submitted",
      category: "Primary",
      status: "Active",
      description:
        "Fires on successful contact form submission. Tracks pillar and industry.",
    },
    {
      name: "case_study_viewed",
      category: "Secondary",
      status: "Active",
      description:
        "Fires when a case study or expert profile is viewed. Tracks pillar.",
    },
    {
      name: "high_intent_page_view",
      category: "Secondary",
      status: "Active",
      description:
        "Fires on high-intent page load (pillar pages, Integrated Advisory). Tracks page_path and pillar.",
    },
    {
      name: "phone_click",
      category: "Secondary",
      status: "Active",
      description: "Fires on tel: link clicks. Tracks page_path.",
    },
    {
      name: "email_click",
      category: "Secondary",
      status: "Active",
      description: "Fires on mailto: link clicks. Tracks page_path.",
    },
    {
      name: "proof_engagement",
      category: "Secondary",
      status: "Active",
      description:
        "Fires on ProofCard interaction. Tracks pillar, proof_type, case_study.",
    },
    {
      name: "scroll_depth",
      category: "Diagnostic",
      status: "Active",
      description:
        "Fires at 25%, 50%, 75%, 90% scroll on key pages. Tracks scroll_percent and page_path.",
    },
    {
      name: "cta_exposure",
      category: "Diagnostic",
      status: "Active",
      description:
        "Fires when a CTA enters viewport (50% visible). Tracks cta_label and cta_location.",
    },
    {
      name: "assessment_funnel_step",
      category: "Diagnostic",
      status: "Active",
      description:
        "Fires at each assessment funnel step. Tracks assessment_type and funnel_step.",
    },
  ];

  const pillars = [
    {
      name: "Operations",
      route: "/services/operations",
      events: [
        "high_intent_page_view",
        "discovery_call_click",
        "assessment_started",
        "proof_engagement",
      ],
      proofCards: true,
    },
    {
      name: "Technology",
      route: "/services/technology",
      events: [
        "high_intent_page_view",
        "discovery_call_click",
        "assessment_started",
        "proof_engagement",
      ],
      proofCards: true,
    },
    {
      name: "Communications",
      route: "/services/communications",
      events: [
        "high_intent_page_view",
        "discovery_call_click",
        "assessment_started",
        "proof_engagement",
      ],
      proofCards: true,
    },
    {
      name: "Leadership",
      route: "/services/leadership",
      events: [
        "high_intent_page_view",
        "discovery_call_click",
        "assessment_started",
        "proof_engagement",
      ],
      proofCards: true,
    },
    {
      name: "Integrated",
      route: "/integrated-executive-advisory",
      events: [
        "high_intent_page_view",
        "discovery_call_click",
        "integrated_advisory_interest",
        "proof_engagement",
      ],
      proofCards: true,
    },
  ];

  const funnelStages = [
    {
      stage: "Visit",
      description: "User enters the site",
      metric: "Users / Sessions",
    },
    {
      stage: "Engage",
      description: "Views a high-intent page or interacts with an assessment",
      metric: "high_intent_page_view",
    },
    {
      stage: "Discover",
      description: "Books a YMBS Discovery Call",
      metric: "discovery_call_click → discovery_call_booked",
    },
    {
      stage: "Assess",
      description:
        "Diagnostic or professional assessment recommended or started",
      metric: "assessment_started → assessment_completed",
    },
    {
      stage: "Build",
      description: "Scoped implementation project proposed",
      metric: "CRM pipeline: Assessment → Build Opportunity",
    },
    {
      stage: "Lead",
      description: "Fractional or Integrated Executive Advisory proposed",
      metric: "CRM pipeline: Qualified → Proposal",
    },
    {
      stage: "Close",
      description: "Opportunity becomes a client",
      metric: "CRM pipeline: Contract → Active",
    },
  ];

  const keyEvents = [
    {
      event: "discovery_call_booked",
      type: "Primary",
      note: "Mark as GA4 key event (conversion)",
    },
    {
      event: "assessment_completed",
      type: "Primary",
      note: "Mark as GA4 key event (conversion)",
    },
    {
      event: "contact_form_submitted",
      type: "Primary",
      note: "Mark as GA4 key event (conversion)",
    },
    {
      event: "integrated_advisory_interest",
      type: "Primary",
      note: "Mark as GA4 key event (conversion)",
    },
    {
      event: "assessment_started",
      type: "Secondary",
      note: "Track but do not mark as key event",
    },
    {
      event: "discovery_call_click",
      type: "Secondary",
      note: "Track but do not mark as key event",
    },
    {
      event: "phone_click",
      type: "Secondary",
      note: "Track but do not mark as key event",
    },
  ];

  const qaChecks = [
    {
      check: "Dev/preview traffic excluded from production GA4",
      status: true,
      detail:
        "isProduction() filters localhost, vibepreview.com, staging, 127.0.0.1",
    },
    {
      check: "Standardized parameter naming",
      status: true,
      detail:
        "page_path, cta_location, cta_label, pillar, service, industry, assessment_type",
    },
    {
      check: "No duplicate event firing",
      status: true,
      detail:
        "Single trackEvent call per user action; no GTM auto-collect overlap",
    },
    {
      check: "Contact form fires only on success",
      status: true,
      detail:
        "track.contactFormSubmitted fires after validation passes in Contact.tsx",
    },
    {
      check: "Scroll depth on high-value pages",
      status: true,
      detail: "Homepage, all pillar pages, Integrated Advisory, Contact",
    },
    {
      check: "CTA exposure tracking",
      status: true,
      detail: "IntersectionObserver available via observeCtaExposure()",
    },
    {
      check: "Proof engagement tracking",
      status: true,
      detail: "All ProofCard wrappers fire proof_engagement on click",
    },
    {
      check: "First-touch attribution preserved",
      status: false,
      detail: "Requires CRM custom field configuration (manual setup)",
    },
    {
      check: "Opportunity attribution copy",
      status: false,
      detail: "Requires CRM workflow automation (manual setup)",
    },
    {
      check: "Internal IP filtering",
      status: false,
      detail: "Configure in GA4 Admin > Data Streams > Filters",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-light-section">
      <SEOHead
        title="Analytics Baseline Dashboard | YMBS"
        description="YMBS analytics baseline dashboard — tracked conversion events, attribution fields, and measurement setup."
        canonical="/analytics-dashboard"
        noIndex
      />
      {/* HEADER */}
      <section className="bg-dark-section text-white pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-8 h-8 text-primary" />
            <span className="text-primary font-bold tracking-wider uppercase text-sm">
              Phase 10 — Analytics QA & Baseline
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Analytics Validation & Baseline Dashboard
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Verification that the YMBS measurement system is accurate, complete,
            and useful. This page documents every configured event, pillar
            coverage, proof coverage, QA status, and the recommended 30-day
            baseline plan.
          </p>
        </div>
      </section>

      {/* GA4 EVENT VALIDATION */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4 text-[#1A2433]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            GA4 Event Validation Checklist
          </h2>
          <p className="text-zinc-600 mb-10 max-w-2xl">
            All 15 configured events. Verify each in GA4 DebugView and Realtime
            before collecting baseline data.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-zinc-300">
                  <th className="py-3 pr-4 font-bold text-[#1A2433]">
                    Event Name
                  </th>
                  <th className="py-3 pr-4 font-bold text-[#1A2433]">
                    Category
                  </th>
                  <th className="py-3 pr-4 font-bold text-[#1A2433]">Status</th>
                  <th className="py-3 font-bold text-[#1A2433]">Description</th>
                </tr>
              </thead>
              <tbody>
                {events.map((e, i) => (
                  <tr
                    key={i}
                    className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors"
                  >
                    <td className="py-3 pr-4 font-mono text-sm text-primary font-bold">
                      {e.name}
                    </td>
                    <td className="py-3 pr-4">
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                          e.category === "Primary"
                            ? "bg-primary/15 text-primary"
                            : e.category === "Secondary"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-zinc-200 text-zinc-600"
                        }`}
                      >
                        {e.category}
                      </span>
                    </td>
                    <td className="py-3 pr-4">
                      <span className="flex items-center gap-1.5 text-sm font-bold text-green-600">
                        <CheckCircle2 className="w-4 h-4" /> {e.status}
                      </span>
                    </td>
                    <td className="py-3 text-sm text-zinc-600">
                      {e.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* KEY EVENTS */}
      <section className="py-20 bg-light-section border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4 text-[#1A2433]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            GA4 Key Events (Conversions)
          </h2>
          <p className="text-zinc-600 mb-10 max-w-2xl">
            Not every interaction is a key event. Only mark these as conversions
            in GA4 to avoid inflated reporting.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {keyEvents.map((ke, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 border flex items-start gap-4 ${
                  ke.type === "Primary"
                    ? "bg-white border-primary/30"
                    : "bg-zinc-50 border-zinc-200"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    ke.type === "Primary" ? "bg-primary/10" : "bg-zinc-200"
                  }`}
                >
                  {ke.type === "Primary" ? (
                    <Target className="w-5 h-5 text-primary" />
                  ) : (
                    <BarChart3 className="w-5 h-5 text-zinc-500" />
                  )}
                </div>
                <div>
                  <p className="font-mono text-sm font-bold text-[#1A2433]">
                    {ke.event}
                  </p>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${ke.type === "Primary" ? "text-primary" : "text-zinc-400"}`}
                  >
                    {ke.type}
                  </span>
                  <p className="text-sm text-zinc-600 mt-2">{ke.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLAR COVERAGE */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4 text-[#1A2433]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Pillar Tracking Coverage
          </h2>
          <p className="text-zinc-600 mb-10 max-w-2xl">
            All four pillars plus Integrated Advisory use the same event
            architecture.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className="text-lg font-bold text-[#1A2433]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {p.name}
                  </h3>
                  {p.proofCards && (
                    <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                      Proof Cards
                    </span>
                  )}
                </div>
                <ul className="space-y-2 mb-4">
                  {p.events.map((e, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-zinc-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                      <span className="font-mono text-xs">{e}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={p.route}
                  className="text-primary font-bold text-sm flex items-center gap-1.5 hover:gap-2.5 transition-all"
                >
                  View page <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF COVERAGE */}
      <section className="py-20 bg-light-section border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4 text-[#1A2433]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            ProofCard Coverage
          </h2>
          <p className="text-zinc-600 mb-10 max-w-2xl">
            Context-specific proof cards with engagement tracking on every major
            page.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { page: "Homepage", cards: 3, pillar: "All", status: true },
              {
                page: "Operations",
                cards: 2,
                pillar: "Operations",
                status: true,
              },
              {
                page: "Technology",
                cards: 2,
                pillar: "Technology",
                status: true,
              },
              {
                page: "Communications",
                cards: 2,
                pillar: "Communications",
                status: true,
              },
              {
                page: "Leadership",
                cards: 2,
                pillar: "Leadership",
                status: true,
              },
              {
                page: "Integrated Executive Advisory",
                cards: 2,
                pillar: "Integrated",
                status: true,
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 border border-zinc-200 flex items-center justify-between"
              >
                <div>
                  <p className="font-bold text-[#1A2433]">{p.page}</p>
                  <p className="text-sm text-zinc-500">
                    {p.cards} proof cards · {p.pillar}
                  </p>
                </div>
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNNEL */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4 text-[#1A2433]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Conversion Funnel Stages
          </h2>
          <p className="text-zinc-600 mb-10 max-w-2xl">
            The full YMBS buyer journey from visit to close.
          </p>
          <div className="space-y-3">
            {funnelStages.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-zinc-50 rounded-xl p-5 border border-zinc-200"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-sm">
                    {i + 1}
                  </span>
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-[#1A2433]">{s.stage}</p>
                  <p className="text-sm text-zinc-600">{s.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Metric
                  </p>
                  <p className="text-sm font-mono text-primary">{s.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QA CHECKLIST */}
      <section className="py-20 bg-light-section border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4 text-[#1A2433]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Data Quality & QA Checklist
          </h2>
          <p className="text-zinc-600 mb-10 max-w-2xl">
            Automated checks (code-level) and manual checks requiring external
            configuration.
          </p>
          <div className="space-y-3">
            {qaChecks.map((q, i) => (
              <div
                key={i}
                className={`rounded-xl p-5 border flex items-start gap-4 ${
                  q.status
                    ? "bg-green-50 border-green-200"
                    : "bg-amber-50 border-amber-200"
                }`}
              >
                {q.status ? (
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-bold text-[#1A2433]">{q.check}</p>
                  <p className="text-sm text-zinc-600 mt-1">{q.detail}</p>
                  {!q.status && (
                    <span className="inline-block mt-2 px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wider">
                      Manual Setup Required
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BASELINE PLAN */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4 text-[#1A2433]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            30-Day Baseline Plan
          </h2>
          <p className="text-zinc-600 mb-10 max-w-2xl">
            Freeze major conversion changes. Collect real data. Then optimize
            based on evidence.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                phase: "Days 1–10",
                title: "Verify",
                items: [
                  "Confirm all events in GA4 DebugView",
                  "Test mobile conversion paths",
                  "Validate CRM attribution fields",
                  "Filter internal/preview traffic",
                ],
              },
              {
                phase: "Days 11–20",
                title: "Collect",
                items: [
                  "Record baseline conversion rates",
                  "Track pillar performance",
                  "Monitor assessment funnel",
                  "Identify drop-off points",
                ],
              },
              {
                phase: "Days 21–30",
                title: "Analyze",
                items: [
                  "Compare traffic vs revenue by pillar",
                  "Identify largest funnel leak",
                  "Plan ONE evidence-backed test",
                  "Document baseline metrics",
                ],
              },
            ].map((phase, i) => (
              <div
                key={i}
                className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200"
              >
                <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">
                  {phase.phase}
                </p>
                <h3
                  className="text-xl font-bold mb-4 text-[#1A2433]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {phase.title}
                </h3>
                <ul className="space-y-2">
                  {phase.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-zinc-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BASELINE METRICS TO RECORD */}
      <section className="py-20 bg-light-section border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4 text-[#1A2433]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Baseline Metrics to Record
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-2xl p-6 border border-zinc-200">
              <h3 className="font-bold text-[#1A2433] mb-4">Website</h3>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>Homepage CTA click rate</li>
                <li>Discovery bookings</li>
                <li>Pillar CTA rate by page</li>
                <li>Assessment start rate</li>
                <li>Assessment completion rate</li>
                <li>Scroll depth on key pages</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-zinc-200">
              <h3 className="font-bold text-[#1A2433] mb-4">CRM</h3>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>Lead-to-qualified rate</li>
                <li>Qualified-to-proposal rate</li>
                <li>Proposal-to-close rate</li>
                <li>Revenue by entry pillar</li>
                <li>Revenue by traffic source</li>
                <li>Cross-pillar expansion count</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* KNOWN LIMITATIONS */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4 text-[#1A2433]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Known Limitations
          </h2>
          <div className="space-y-3">
            {[
              "First-touch / latest-touch attribution requires CRM custom field configuration (manual setup in CRM admin)",
              "Opportunity attribution copy requires CRM workflow automation to copy source data into opportunity records",
              "Internal IP filtering must be configured in GA4 Admin (Data Streams > Filters)",
              "CTA exposure tracking (IntersectionObserver) is available but not yet wired to specific elements — call observeCtaExposure() on target elements",
              "Assessment funnel step tracking requires assessment pages to call track.assessmentFunnelStep() at each stage",
              "Consent/privacy mode depends on CMP implementation — ensure GA4 loads after consent where required",
            ].map((limitation, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-amber-50 rounded-xl p-4 border border-amber-200"
              >
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-zinc-700">{limitation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOMMENDED NEXT STEP */}
      <section className="py-24 bg-dark-section text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.15),transparent)]"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-primary font-bold tracking-wider uppercase text-sm mb-4">
            Recommended Next Step
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Verify events in GA4 DebugView, then freeze changes for 30 days.
          </h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
            One prioritized action: confirm all 15 events fire correctly in GA4
            DebugView using real user interactions. Then collect baseline data
            before optimizing.
          </p>
          <Link to="/">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 border-white/15 text-white hover:bg-white/10 font-bold px-8 py-6 h-auto rounded-full transition-all backdrop-blur-md"
            >
              Return to Homepage
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
