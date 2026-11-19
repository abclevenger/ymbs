/**
 * SEO helpers for YMBS.
 *
 * Per-page <title>, <meta description>, canonical, Open Graph, and Twitter
 * Card tags are managed declaratively by the <SEOHead> component
 * (react-helmet-async). The helpers below build JSON-LD schema objects for
 * blog articles and the blog index so those pages can pass them to <SEOHead>.
 */

const SITE_URL = "https://ymbs.pro";

const ORG = {
  "@type": "Organization",
  name: "Yellow Mountain Business Solutions",
  alternateName: "YMBS",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  description:
    "YMBS is an integrated consulting firm specializing in operations, technology, communications, and leadership for nonprofits, law firms, and mission-driven organizations.",
};

interface ArticleSeoOptions {
  title: string;
  description: string;
  canonicalPath: string; // e.g. /insights/my-article
  image?: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
}

/**
 * Builds the Article JSON-LD schema for a blog/insights article. All URLs
 * point to the canonical ymbs.pro version so the blog.ymbs.pro subdomain does
 * not create duplicate indexable pages. Pass the returned object to <SEOHead>
 * via the schemaJson prop.
 */
export function buildArticleSchema(opts: ArticleSeoOptions) {
  const canonicalUrl = `${SITE_URL}${opts.canonicalPath}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: canonicalUrl,
    image: opts.image ? [opts.image] : undefined,
    author: opts.author
      ? {
          "@type": "Person",
          name: opts.author,
          url: `${SITE_URL}/team`,
        }
      : undefined,
    publisher: {
      ...ORG,
      "@type": "Organization",
      logo: {
        "@type": "ImageObject",
        url: "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a834be399074f5ef633b4a6.svg",
      },
    },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };
}

/**
 * Builds the WebPage JSON-LD schema for the blog/insights index page.
 * Canonical is /insights on ymbs.pro (the single blog hub).
 */
export function buildBlogIndexSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Insights & Resources | YMBS",
    description:
      "Practical insights on operations, technology, communications, leadership, and organizational growth for leaders who need clear next steps—not consulting jargon.",
    url: `${SITE_URL}/insights`,
    isPartOf: { ...ORG, "@type": "Organization" },
  };
}
