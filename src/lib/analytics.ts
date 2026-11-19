// GA4 event tracking utility for YMBS conversion measurement
// Phase 10: standardized params, dev filtering, scroll depth, CTA exposure, proof engagement

type GA4Event =
  | "discovery_call_click"
  | "discovery_call_booked"
  | "assessment_started"
  | "assessment_completed"
  | "assessment_review_booked"
  | "integrated_advisory_interest"
  | "contact_form_submitted"
  | "case_study_viewed"
  | "high_intent_page_view"
  | "phone_click"
  | "email_click"
  | "proof_engagement"
  | "scroll_depth"
  | "cta_exposure"
  | "assessment_funnel_step"
  | "exit_intent"
  | "sticky_cta_viewed";

interface EventParams {
  page_path?: string;
  page_title?: string;
  pillar?: string;
  service?: string;
  cta_location?: string;
  cta_label?: string;
  industry?: string;
  assessment_type?: string;
  lead_type?: string;
  traffic_source?: string;
  proof_type?: string;
  case_study?: string;
  scroll_percent?: string;
  funnel_step?: string;
  /** Which domain the event originated from (ymbs.pro or blog.ymbs.pro) */
  source_domain?: string;
  [key: string]: string | undefined;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Detect non-production environments to prevent analytics pollution
function isProduction(): boolean {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  // Exclude localhost, preview/staging domains, and dev ports
  return (
    !host.includes("localhost") &&
    !host.includes("vibepreview.com") &&
    !host.includes("127.0.0.1") &&
    !host.includes("::1") &&
    !host.includes("staging") &&
    !host.includes("preview")
  );
}

export function trackEvent(event: GA4Event, params?: EventParams): void {
  if (typeof window === "undefined") return;

  // Tag every event with the originating domain for cross-domain attribution
  const enrichedParams: EventParams = {
    source_domain:
      typeof window !== "undefined" ? window.location.hostname : undefined,
    ...params,
  };

  // Only send to production GA4 / dataLayer — skip in dev/preview
  if (isProduction()) {
    if (window.dataLayer) {
      window.dataLayer.push({ event, ...enrichedParams });
    }
    if (window.gtag) {
      window.gtag("event", event, enrichedParams);
    }
  }

  // Dev logging always
  if (process.env.NODE_ENV !== "production") {
    console.debug(`[analytics] ${event}`, enrichedParams);
  }
}

/**
 * Initializes GA4 cross-domain measurement so sessions are linked
 * across ymbs.pro and blog.ymbs.pro. Call once on app mount.
 * The GA4 config in index.html should include both domains in
 * linked_domains; this helper ensures the linker is active.
 */
export function initCrossDomainTracking(): void {
  if (typeof window === "undefined" || !isProduction()) return;

  // Allow the GA4 linker to decorate outbound links to the main site
  if (window.gtag) {
    window.gtag("set", "linker", {
      domains: ["ymbs.pro", "blog.ymbs.pro"],
      decorate_forms: true,
      accept_incoming: true,
    });
  }
}

// Convenience helpers
export const track = {
  discoveryCallClick: (location?: string, pillar?: string) =>
    trackEvent("discovery_call_click", { cta_location: location, pillar }),
  discoveryCallBooked: (pillar?: string) =>
    trackEvent("discovery_call_booked", { pillar }),
  assessmentStarted: (pillar: string) =>
    trackEvent("assessment_started", { pillar }),
  assessmentCompleted: (pillar: string) =>
    trackEvent("assessment_completed", { pillar }),
  assessmentReviewBooked: (pillar: string) =>
    trackEvent("assessment_review_booked", { pillar }),
  assessmentFunnelStep: (assessmentType: string, step: string) =>
    trackEvent("assessment_funnel_step", {
      assessment_type: assessmentType,
      funnel_step: step,
    }),
  integratedAdvisoryInterest: (location?: string) =>
    trackEvent("integrated_advisory_interest", { cta_location: location }),
  contactFormSubmitted: (pillar?: string, industry?: string) =>
    trackEvent("contact_form_submitted", { pillar, industry }),
  caseStudyViewed: (pillar?: string) =>
    trackEvent("case_study_viewed", { pillar }),
  highIntentPageView: (page: string, pillar?: string) =>
    trackEvent("high_intent_page_view", { page_path: page, pillar }),
  phoneClick: (page?: string) => trackEvent("phone_click", { page_path: page }),
  emailClick: (page?: string) => trackEvent("email_click", { page_path: page }),
  proofEngagement: (pillar: string, proofType: string, caseStudy?: string) =>
    trackEvent("proof_engagement", {
      pillar,
      proof_type: proofType,
      case_study: caseStudy,
    }),
  scrollDepth: (percent: number, pagePath?: string) =>
    trackEvent("scroll_depth", {
      scroll_percent: String(percent),
      page_path: pagePath,
    }),
  ctaExposure: (ctaLabel: string, ctaLocation: string) =>
    trackEvent("cta_exposure", {
      cta_label: ctaLabel,
      cta_location: ctaLocation,
    }),
  exitIntent: (label: string) =>
    trackEvent("exit_intent", { cta_label: label }),
  stickyCtaViewed: () => trackEvent("sticky_cta_viewed"),
};

// Scroll depth tracking hook — fires at 25, 50, 75, 90 thresholds
export function initScrollDepthTracking(pagePath: string): () => void {
  if (typeof window === "undefined") return () => {};
  const thresholds = [25, 50, 75, 90];
  const fired = new Set<number>();

  const handler = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const percent = Math.round((scrollTop / docHeight) * 100);
    for (const t of thresholds) {
      if (percent >= t && !fired.has(t)) {
        fired.add(t);
        track.scrollDepth(t, pagePath);
      }
    }
  };

  window.addEventListener("scroll", handler, { passive: true });
  return () => window.removeEventListener("scroll", handler);
}

// CTA exposure tracking via IntersectionObserver
export function observeCtaExposure(
  element: HTMLElement,
  ctaLabel: string,
  ctaLocation: string,
): () => void {
  if (typeof window === "undefined" || !("IntersectionObserver" in window))
    return () => {};
  let exposed = false;
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !exposed) {
          exposed = true;
          track.ctaExposure(ctaLabel, ctaLocation);
          observer.disconnect();
        }
      }
    },
    { threshold: 0.5 },
  );
  observer.observe(element);
  return () => observer.disconnect();
}
