/**
 * Legacy URL redirect module — now re-exports from the authoritative
 * route registry (src/lib/routes.ts) to maintain a single source of truth.
 *
 * Post-slug redirects (for blog.ymbs.pro subdomain) remain here as they
 * are subdomain-specific and not part of the main-domain route registry.
 */

export {
  legacyRedirects,
  resolveLegacyRedirect,
  homepageAliases,
  validPageRoutes,
  noIndexRoutes,
  dynamicRoutePrefixes,
  isValidPageRoute,
} from "@/lib/routes";

/**
 * Returns the canonical destination for a /blog/:slug path, mapping it to
 * /insights/:slug. Returns null if the path is not a /blog route.
 */
export function resolveBlogRedirect(pathname: string): string | null {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  if (normalized === "/blog") return "/insights";
  if (normalized.startsWith("/blog/")) {
    const slug = normalized.replace("/blog/", "");
    return `/insights/${slug}`;
  }
  return null;
}

/**
 * Old /post/ slugs (from the previous blog platform) → current blog slugs.
 * Used on the blog.ymbs.pro subdomain where /post/:slug should redirect to
 * the canonical article. If a slug has no modern replacement it should 404.
 */
export const postSlugRedirects: Record<string, string> = {
  "cybersecurity-guide-for-small-business-leaders":
    "cybersecurity-basics-mission-driven-orgs",
  "effective-cybersecurity-playbook-smb":
    "cybersecurity-basics-mission-driven-orgs",
};

/**
 * Returns the current blog slug for an old /post/ slug, or null if the old
 * post has no legitimate replacement (should 404/410).
 */
export function resolvePostSlug(oldSlug: string): string | null {
  return postSlugRedirects[oldSlug] ?? null;
}
