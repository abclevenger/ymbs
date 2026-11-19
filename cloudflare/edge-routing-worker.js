/**
 * Cloudflare Worker — Edge routing for ymbs.pro
 *
 * Deploy this as a Cloudflare Worker on the ymbs.pro zone (route: *ymbs.pro/*)
 * via the Cloudflare dashboard or wrangler. It runs BEFORE the origin and
 * handles:
 *   - Legacy URL 301 redirects (real HTTP 301, not client-side)
 *   - Homepage alias 301 redirects
 *   - True 404 for unknown URLs (not 200 + SPA shell)
 *   - Valid route + static asset passthrough to origin
 *
 * This mirrors src/lib/routes.ts (the single source of truth). When routes
 * change, update BOTH files and run: node scripts/generate-static-routing.mjs
 *
 * Deploy:
 *   1. Cloudflare Dashboard → Workers & Pages → Create Worker
 *   2. Paste this file content
 *   3. Add a route: *ymbs.pro/* (or the specific zone)
 *   4. Save & Deploy
 *
 * Or via wrangler (see wrangler.toml in this folder):
 *   npx wrangler deploy cloudflare/edge-routing-worker.js
 */

// ─── Mirror of src/lib/routes.ts ───
const validPageRoutes = [
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
  "/services/technology/ai-automation",
  "/services/technology/cybersecurity",
  "/services/technology/connectivity",
  "/services/technology/crm-workflow",
  "/services/technology/website-seo",
  "/services/technology/iot-physical-security",
  "/services/technology/digital-signage",
  "/services/technology/software-solutions",
  "/services/technology/mobility-workforce",
  "/services/communications/reputation-management",
  "/services/communications/executive-communications",
  "/services/operations/governance",
  "/services/leadership/community-engagement",
];

const noIndexRoutes = [
  "/analytics-dashboard",
  "/assessments/dashboard",
  "/assessments/results",
];

const dynamicRoutePrefixes = ["/insights/"];

const homepageAliases = [
  "/home",
  "/home/",
  "/index",
  "/index.html",
  "/home.html",
];

const legacyRedirects = {
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
  "/leadership/community-research-engagement.html":
    "/services/leadership/community-engagement",
  "/mission-foundation/board-governance-framework.html":
    "/services/operations/governance",
  "/mission-foundation/": "/mission-foundation",
  "/nonprofit-strategy-development-vs-traditional-business-models.html":
    "/nonprofit-consulting",
  "/unlock-nonprofit-success-strategic-development.html":
    "/nonprofit-consulting",
  "/empowering-nonprofits-florida-ymbs-consulting-insights.html":
    "/nonprofit-consulting",
  "/blog": "/insights",
  "/operations": "/services/operations",
  "/technology": "/services/technology",
  "/communications": "/services/communications",
  "/leadership": "/services/leadership",
};

// Static asset extensions — always pass through to origin (never 404)
const staticAssetExtensions = [
  ".js",
  ".mjs",
  ".css",
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".svg",
  ".webp",
  ".ico",
  ".woff",
  ".woff2",
  ".ttf",
  ".eot",
  ".otf",
  ".xml",
  ".txt",
  ".json",
  ".webmanifest",
  ".map",
  ".avif",
  ".mp4",
  ".webm",
  ".pdf",
];

// Platform-owned paths must not be mistaken for public SPA pages.
// Keep these requests routed to the origin without modification.
const runtimePathPrefixes = ["/__vibe/", "/cdn-cgi/", "/.well-known/"];

// ─── Helpers ───
function normalize(pathname) {
  return pathname.replace(/\/+$/, "") || "/";
}

function resolveRedirect(pathname) {
  const normalized = normalize(pathname);
  const lower = normalized.toLowerCase();

  if (legacyRedirects[lower]) return legacyRedirects[lower];

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

function isValidRoute(pathname) {
  const normalized = normalize(pathname);
  if (validPageRoutes.includes(normalized)) return true;
  if (noIndexRoutes.includes(normalized)) return true;
  return dynamicRoutePrefixes.some((p) => normalized.startsWith(p));
}

function isStaticAsset(pathname) {
  return staticAssetExtensions.some((ext) => pathname.endsWith(ext));
}

// ─── Worker ───
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Preserve non-page methods (API submissions and preflight requests).
    if (request.method !== "GET" && request.method !== "HEAD") {
      return fetch(request);
    }

    // Platform runtime, verification endpoints and static assets bypass the SPA router.
    if (
      runtimePathPrefixes.some((prefix) => pathname.startsWith(prefix)) ||
      isStaticAsset(pathname)
    ) {
      return fetch(request);
    }

    // 2. Check for redirects FIRST (before any SPA fallback)
    const redirectDest = resolveRedirect(pathname);
    if (redirectDest) {
      const dest = new URL(redirectDest, url.origin).toString();
      return Response.redirect(dest, 301);
    }

    // 3. Valid application route → pass through to origin (SPA)
    if (isValidRoute(pathname)) {
      return fetch(request);
    }

    // 4. Unknown URL → real HTTP 404 (not 200 + SPA shell)
    // Return a minimal branded 404 with noindex header.
    return new Response(
      `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, follow">
<title>Page Not Found | YMBS</title>
<style>
  body{margin:0;font-family:Georgia,serif;background:#0a1f3d;color:#f5f1e8;
       display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center;padding:2rem}
  .wrap{max-width:480px}
  h1{font-size:2.5rem;margin:0 0 1rem;color:#d4af37}
  p{font-size:1.125rem;line-height:1.6;opacity:.85;margin:0 0 2rem}
  a{display:inline-block;padding:.75rem 1.5rem;background:#d4af37;color:#0a1f3d;
    text-decoration:none;font-weight:600;border-radius:.375rem}
</style>
</head>
<body>
  <div class="wrap">
    <h1>404</h1>
    <p>The page you're looking for doesn't exist or has moved.</p>
    <a href="/">Return to YMBS</a>
  </div>
</body>
</html>`,
      {
        status: 404,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "X-Robots-Tag": "noindex, follow",
        },
      },
    );
  },
};
