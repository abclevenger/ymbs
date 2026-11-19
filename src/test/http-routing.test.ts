/**
 * HTTP routing regression tests.
 *
 * These tests validate the ROUTING LOGIC that determines HTTP status codes,
 * NOT the React Router behavior. They verify that:
 *   - Valid pages return 200
 *   - Legacy URLs redirect (301) to correct destinations
 *   - Homepage aliases redirect (301) to /
 *   - Unknown URLs return 404
 *   - No redirect chains or loops exist
 *   - Redirect destinations are valid pages
 *
 * The actual HTTP response is produced by functions/_middleware.ts (edge)
 * or the static fallback files. These tests verify the LOGIC that drives
 * both, using the shared resolveLegacyRedirect / isValidPageRoute functions.
 *
 * Run: bunx vitest run src/test/http-routing.test.ts
 */

import { describe, it, expect } from "vitest";
import {
  validPageRoutes,
  noIndexRoutes,
  dynamicRoutePrefixes,
  homepageAliases,
  legacyRedirects,
  resolveLegacyRedirect,
  isValidPageRoute,
} from "@/lib/routes";
import { resolveBlogRedirect } from "@/lib/redirects";

// ─── Helpers that mirror functions/_middleware.ts logic ───

/**
 * Simulates the edge function's HTTP response decision.
 * Returns { status, location } for a given pathname.
 */
function simulateEdgeResponse(pathname: string): {
  status: number;
  location: string | null;
} {
  // 1. Check redirects first
  const redirectDest = resolveLegacyRedirect(pathname);
  if (redirectDest) {
    return { status: 301, location: redirectDest };
  }

  // 2. Check if valid route
  if (isValidPageRoute(pathname)) {
    return { status: 200, location: null };
  }

  // 3. Unknown → 404
  return { status: 404, location: null };
}

// ─── Tests ───

describe("HTTP Routing — Valid Pages (200)", () => {
  const sampleValidRoutes = [
    "/",
    "/services",
    "/services/operations",
    "/services/technology",
    "/services/communications",
    "/services/leadership",
    "/insights",
    "/scale",
    "/scale/assessment",
    "/team",
    "/contact",
    "/nonprofit-consulting",
    "/michelle-griffith",
    "/assessments",
    "/solutions/ai-adoption",
    "/case-studies/law-firm-intake-automation",
  ];

  for (const route of sampleValidRoutes) {
    it(`GET ${route} → 200`, () => {
      const res = simulateEdgeResponse(route);
      expect(res.status).toBe(200);
      expect(res.location).toBeNull();
    });
  }

  it("dynamic /insights/:slug routes return 200", () => {
    expect(simulateEdgeResponse("/insights/some-article").status).toBe(200);
    expect(simulateEdgeResponse("/insights/another-post").status).toBe(200);
  });

  it("noindex utility routes return 200 (not 404)", () => {
    for (const route of noIndexRoutes) {
      expect(simulateEdgeResponse(route).status).toBe(200);
    }
  });
});

describe("HTTP Routing — Legacy Redirects (301)", () => {
  const sampleLegacyUrls = [
    { from: "/technology", to: "/services/technology" },
    { from: "/operations", to: "/services/operations" },
    { from: "/communications", to: "/services/communications" },
    { from: "/leadership", to: "/services/leadership" },
    { from: "/blog", to: "/insights" },
    {
      from: "/technology/digital-signage-menu-boards.html",
      to: "/services/technology/digital-signage",
    },
    {
      from: "/technology/ai-communications.html",
      to: "/services/technology/ai-automation",
    },
    {
      from: "/technology/online-reputation-management.html",
      to: "/services/communications/reputation-management",
    },
    {
      from: "/mission-foundation/board-governance-framework.html",
      to: "/services/operations/governance",
    },
    {
      from: "/nonprofit-strategy-development-vs-traditional-business-models.html",
      to: "/nonprofit-consulting",
    },
  ];

  for (const { from, to } of sampleLegacyUrls) {
    it(`GET ${from} → 301 → ${to}`, () => {
      const res = simulateEdgeResponse(from);
      expect(res.status).toBe(301);
      expect(res.location).toBe(to);
    });
  }

  it("/blog/:slug → 301 → /insights/:slug", () => {
    const res = simulateEdgeResponse("/blog/some-article");
    expect(res.status).toBe(301);
    expect(res.location).toBe("/insights/some-article");
  });

  it("all legacyRedirects produce 301 to correct destination", () => {
    for (const [src, dest] of Object.entries(legacyRedirects)) {
      const res = simulateEdgeResponse(src);
      expect(res.status).toBe(301);
      expect(res.location).toBe(dest);
    }
  });

  it("legacy URLs are case-insensitive", () => {
    expect(simulateEdgeResponse("/Technology").status).toBe(301);
    expect(simulateEdgeResponse("/BLOG").status).toBe(301);
  });

  it("legacy URLs with trailing slashes redirect correctly", () => {
    expect(simulateEdgeResponse("/technology/").location).toBe(
      "/services/technology",
    );
    expect(simulateEdgeResponse("/blog/").location).toBe("/insights");
  });
});

describe("HTTP Routing — Homepage Aliases (301 → /)", () => {
  for (const alias of homepageAliases) {
    it(`GET ${alias} → 301 → /`, () => {
      const res = simulateEdgeResponse(alias);
      expect(res.status).toBe(301);
      expect(res.location).toBe("/");
    });
  }
});

describe("HTTP Routing — Unknown URLs (404)", () => {
  const unknownUrls = [
    "/this-page-does-not-exist-xyz",
    "/seo-404-test-987654",
    "/financial-oversight",
    "/welcome-room",
    "/podcast",
    "/learn-more",
    "/testimonial",
    "/ymbs-demo",
    "/home-page-9693",
    "/preview",
    "/cybersecurity-services",
    "/a2p-tos",
    "/terms-of-use",
    "/technology/cybersecurity-risk.html",
    "/leadership/michelle-griffith.html",
    "/legal-software/mycase.html",
    "/affiliate-program.html",
    "/elevating-public-voice.html",
  ];

  for (const url of unknownUrls) {
    it(`GET ${url} → 404`, () => {
      const res = simulateEdgeResponse(url);
      expect(res.status).toBe(404);
      expect(res.location).toBeNull();
    });
  }
});

describe("HTTP Routing — Redirect Integrity", () => {
  it("no redirect creates a loop (source === destination)", () => {
    for (const [src, dest] of Object.entries(legacyRedirects)) {
      expect(src).not.toBe(dest);
    }
  });

  it("no redirect destination is itself a redirect (no chains)", () => {
    for (const dest of Object.values(legacyRedirects)) {
      const normalized = dest.replace(/\/+$/, "") || "/";
      expect(legacyRedirects[normalized.toLowerCase()]).toBeUndefined();
      // Also check homepage aliases
      expect(homepageAliases).not.toContain(normalized);
    }
  });

  it("all redirect destinations are valid page routes (200)", () => {
    for (const dest of Object.values(legacyRedirects)) {
      if (dest.startsWith("/insights/")) {
        // Dynamic route — check prefix
        expect(dynamicRoutePrefixes.some((p) => dest.startsWith(p))).toBe(true);
      } else {
        expect(validPageRoutes).toContain(dest);
      }
    }
  });

  it("redirect destinations do not return 404", () => {
    for (const dest of Object.values(legacyRedirects)) {
      const res = simulateEdgeResponse(dest);
      expect(res.status).toBe(200);
    }
  });

  it("homepage alias redirects are single-hop (→ /, not → /home → /)", () => {
    for (const alias of homepageAliases) {
      const dest = resolveLegacyRedirect(alias);
      expect(dest).toBe("/");
      // / is not itself a redirect
      expect(resolveLegacyRedirect("/")).toBeNull();
    }
  });
});

describe("HTTP Routing — Static Fallback Files", () => {
  it("public/404.html exists", () => {
    const { existsSync } = require("fs");
    const { join } = require("path");
    expect(existsSync(join(process.cwd(), "public", "404.html"))).toBe(true);
  });

  it("static redirect files exist for all legacy URLs", () => {
    const { existsSync } = require("fs");
    const { join } = require("path");
    const publicDir = join(process.cwd(), "public");

    for (const src of Object.keys(legacyRedirects)) {
      let filePath: string;
      if (src.endsWith(".html")) {
        filePath = join(publicDir, src);
      } else if (src.endsWith("/")) {
        filePath = join(publicDir, src.replace(/\/+$/, ""), "index.html");
      } else {
        filePath = join(publicDir, src, "index.html");
      }
      expect(existsSync(filePath)).toBe(true);
    }
  });
});

describe("HTTP Routing — Blog Subdomain Redirects", () => {
  it("/blog/:slug resolves to /insights/:slug", () => {
    expect(resolveBlogRedirect("/blog/some-article")).toBe(
      "/insights/some-article",
    );
  });

  it("/blog resolves to /insights", () => {
    expect(resolveBlogRedirect("/blog")).toBe("/insights");
  });

  it("non-blog paths return null", () => {
    expect(resolveBlogRedirect("/services")).toBeNull();
    expect(resolveBlogRedirect("/insights")).toBeNull();
  });
});
