/**
 * Authoritative route registry for ymbs.pro.
 *
 * This is the SINGLE SOURCE OF TRUTH for:
 *   - valid application page routes (200)
 *   - intentionally noindex routes
 *   - dynamic route prefixes (e.g. /insights/:slug)
 *   - homepage aliases (301 → /)
 *   - legacy redirect mappings (301 → canonical)
 *
 * Consumed by:
 *   - src/lib/redirects.ts (re-exports for client-side fallback)
 *   - functions/_middleware.ts (mirrors this data for edge 301/404)
 *   - scripts/generate-static-routing.mjs (mirrors for static fallback files)
 *   - src/test/route-sync.test.ts (verifies all three stay in sync)
 *
 * When you add/remove/rename a route, update this file AND run:
 *   node scripts/generate-static-routing.mjs
 * Then run the route-sync test to verify the edge + static files match.
 */

/** Main-domain valid page routes that return HTTP 200 + SPA. */
export const validPageRoutes: string[] = [
  "/",
  "/services",
  "/services/operations",
  "/services/technology",
  "/services/leadership",
  "/services/communications",
  "/insights",
  "/assessments",
  "/assessments/cyber-readiness",
  "/assessments/technology",
  "/assessments/seo",
  "/assessments/system-health",
  "/solutions/organizational-growth",
  "/solutions/ai-adoption",
  "/solutions/technology-modernization",
  "/solutions/organizational-change",
  "/contact",
  "/policy",
  "/terms",
  "/a2p",
  "/accessibility",
  "/elevation",
  "/services/seo",
  "/portfolio",
  "/team",
  "/sitemap",
  "/suppliers",
  "/support",
  "/llm-knowledge",
  "/scale",
  "/scale/assessment",
  "/michelle-griffith",
  "/executive-readiness-intensive",
  "/law-firm-pr-system",
  "/nonprofit-consulting",
  "/professional-services",
  "/mission-driven-organizations",
  "/partners",
  "/law-firm-technology",
  "/fractional-coo",
  "/strategic-planning",
  "/mission-foundation",
  "/integrated-executive-advisory",
  "/company-profile",
  "/client-results",
  "/thania-clevenger",
  "/ashley-clevenger",
  "/nestor-ortiz",
  "/case-studies/law-firm-intake-automation",
  "/case-studies/nonprofit-tech-consolidation",
  "/case-studies/law-firm-website-transformation",
  "/case-studies/nonprofit-governance-operations",
  "/case-studies/executive-readiness-stakeholder-comms",
  // Technology sub-services
  "/services/technology/ai-automation",
  "/services/technology/cybersecurity",
  "/services/technology/connectivity",
  "/services/technology/crm-workflow",
  "/services/technology/website-seo",
  "/services/technology/iot-physical-security",
  "/services/technology/digital-signage",
  "/services/technology/software-solutions",
  "/services/technology/mobility-workforce",
  // Communications sub-services
  "/services/communications/reputation-management",
  "/services/communications/executive-communications",
  // Operations sub-services
  "/services/operations/governance",
  // Leadership sub-services
  "/services/leadership/community-engagement",
];

/** Routes that are valid (200) but intentionally noindex (app/utility pages). */
export const noIndexRoutes: string[] = [
  "/analytics-dashboard",
  "/assessments/dashboard",
  "/assessments/results",
];

/** Dynamic route prefixes — paths starting with these are valid (200). */
export const dynamicRoutePrefixes: string[] = ["/insights/"];

/** Homepage aliases that should 301 → /. */
export const homepageAliases: string[] = [
  "/home",
  "/home/",
  "/index",
  "/index.html",
  "/home.html",
];

/**
 * Legacy URL → canonical destination redirect map.
 * Keys are lowercased. All produce HTTP 301.
 */
export const legacyRedirects: Record<string, string> = {
  // Legacy .html service / technology pages → dedicated sub-service pages
  "/technology/digital-signage-menu-boards.html":
    "/services/technology/digital-signage",
  "/technology/iot-physical-security.html":
    "/services/technology/iot-physical-security",
  "/technology/ai-communications.html": "/services/technology/ai-automation",
  "/technology/online-reputation-management.html":
    "/services/communications/reputation-management",
  "/technology/software-solutions.html":
    "/services/technology/software-solutions",
  "/technology/mobility-workforce.html":
    "/services/technology/mobility-workforce",
  "/technology/digital-growth.html": "/services/technology/website-seo",
  "/technology-services/technology-assessment.html": "/assessments/technology",
  "/enterprise-connectivity.html": "/services/technology/connectivity",
  "/comprehensive-technology-audit-services.html": "/assessments/technology",

  // Legacy leadership page
  "/leadership/community-research-engagement.html":
    "/services/leadership/community-engagement",

  // Legacy Mission Foundation .html + trailing-slash variant
  "/mission-foundation/board-governance-framework.html":
    "/services/operations/governance",
  "/mission-foundation/": "/mission-foundation",

  // Legacy nonprofit content → nonprofit consulting money page
  "/nonprofit-strategy-development-vs-traditional-business-models.html":
    "/nonprofit-consulting",
  "/unlock-nonprofit-success-strategic-development.html":
    "/nonprofit-consulting",
  "/empowering-nonprofits-florida-ymbs-consulting-insights.html":
    "/nonprofit-consulting",

  // Blog consolidation: /blog → /insights (single canonical blog)
  "/blog": "/insights",

  // Short discipline URLs → canonical /services/* URLs.
  "/operations": "/services/operations",
  "/technology": "/services/technology",
  "/communications": "/services/communications",
  "/leadership": "/services/leadership",
};

/**
 * Returns the canonical destination for a main-domain legacy path, or null.
 * Normalises trailing slashes and case before lookup.
 * Also handles /blog/:slug → /insights/:slug.
 */
export function resolveLegacyRedirect(pathname: string): string | null {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  const lower = normalized.toLowerCase();

  if (legacyRedirects[lower]) return legacyRedirects[lower];
  if (legacyRedirects[pathname.toLowerCase()]) {
    return legacyRedirects[pathname.toLowerCase()];
  }

  // /blog/:slug → /insights/:slug
  if (lower === "/blog") return "/insights";
  if (lower.startsWith("/blog/")) {
    const slug = normalized.replace("/blog/", "");
    return `/insights/${slug}`;
  }

  // Homepage aliases
  if (homepageAliases.includes(lower)) return "/";

  return null;
}

/** Check if a pathname is a valid application page route (200). */
export function isValidPageRoute(pathname: string): boolean {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  if (validPageRoutes.includes(normalized)) return true;
  if (noIndexRoutes.includes(normalized)) return true;
  return dynamicRoutePrefixes.some((p) => normalized.startsWith(p));
}
