import { useParams } from "react-router-dom";
import { resolvePostSlug } from "@/lib/redirects";
import NotFound from "./NotFound";
import SEOHead from "@/components/SEOHead";

/**
 * On blog.ymbs.pro, handles two redirect cases:
 *
 * 1. /blog/:slug → /:slug
 *    The canonical article URL on the subdomain is /:slug (not /blog/:slug),
 *    so /blog/:slug redirects to prevent a duplicate indexable URL.
 *
 * 2. /post/:slug → /:slug (current canonical slug)
 *    Old /post/ URLs from the previous blog platform redirect to the matching
 *    current article. If no legitimate replacement exists, render a real 404
 *    rather than redirecting to the homepage.
 *
 * Uses replace() so the old path never enters browser history.
 */
export default function BlogSubdomainRedirect() {
  const params = useParams<{ slug?: string }>();
  const slug = params.slug;

  // Determine the destination based on the current path.
  let destination: string | null = null;

  if (slug) {
    const currentPath = window.location.pathname;
    if (currentPath.startsWith("/post/")) {
      // Legacy /post/:slug → current canonical slug (or 404)
      const mapped = resolvePostSlug(slug);
      destination = mapped ? `/${mapped}` : null;
    } else {
      // /blog/:slug → /:slug (canonical subdomain path, which canonicalizes
      // to ymbs.pro/insights/:slug via the Article SEO hook)
      destination = `/${slug}`;
    }
  }

  if (destination) {
    window.location.replace(destination);
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B1D33] text-white">
        <SEOHead
          title="Redirecting… | YMBS"
          description="Redirecting you to the correct page."
          canonical="/redirect"
          noIndex
        />
        <p className="text-white/60">Redirecting…</p>
      </div>
    );
  }

  // No legitimate replacement — return a real 404 instead of redirecting home.
  return <NotFound />;
}
