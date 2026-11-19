import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Centralized JSON-LD schema injection utility for YMBS.
 * Every hook injects a uniquely-ID'd <script type="application/ld+json"> tag
 * and cleans it up on unmount to prevent duplicate schema across SPA navigations.
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

function injectSchema(id: string, schema: object) {
  document.getElementById(id)?.remove();
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
  return () => {
    document.getElementById(id)?.remove();
  };
}

/* ── BreadcrumbList ── */

function buildBreadcrumbs(pathname: string) {
  const routeLabels: Record<string, string> = {
    services: "Services",
    operations: "Operations",
    technology: "Technology",
    leadership: "Leadership",
    communications: "Communications",
    "nonprofit-consulting": "Nonprofit Consulting",
    "law-firm-technology": "Law Firm Technology",
    "fractional-coo": "Fractional COO",
    "integrated-executive-advisory": "Integrated Executive Advisory",
    "strategic-planning": "Strategic Planning",
    "mission-foundation": "Mission Foundation",
    "company-profile": "Company Profile",
    "client-results": "Client Results",
    "case-studies": "Case Studies",
    team: "Team",
    "thania-clevenger": "Thania Clevenger",
    "ashley-clevenger": "Ashley Clevenger",
    "michelle-griffith": "Michelle Griffith",
    "nestor-ortiz": "Nestor Ortiz",
    contact: "Contact",
    assessments: "Assessments",
    "organizational-growth": "Organizational Growth Readiness",
    "ai-adoption": "AI Adoption",
    "technology-modernization": "Technology Modernization",
    "organizational-change": "Organizational Change",
    solutions: "Solutions",
    blog: "Blog",
    scale: "SCALE Framework",
  };

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const items: object[] = [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
  ];
  let current = "";
  segments.forEach((seg, i) => {
    current += "/" + seg;
    const label =
      routeLabels[seg] || seg.charAt(0).toUpperCase() + seg.slice(1);
    items.push({
      "@type": "ListItem",
      position: i + 2,
      name: label,
      item: `${SITE_URL}${current}`,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

/**
 * Injects BreadcrumbList schema based on the current route.
 * Skips the homepage.
 */
export function useBreadcrumbSchema() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") return;
    const schema = buildBreadcrumbs(location.pathname);
    if (!schema) return;
    return injectSchema("breadcrumb-schema", schema);
  }, [location.pathname]);
}

/* ── Service / ProfessionalService ── */

export interface ServiceSchemaOpts {
  path: string;
  name: string;
  description: string;
  serviceType: string;
  areaServed?: string[];
  audience?: string[];
  provider?: string;
}

export function useServiceSchema(opts: ServiceSchemaOpts) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: opts.name,
      description: opts.description,
      serviceType: opts.serviceType,
      url: `${SITE_URL}${opts.path}`,
      provider: {
        "@type": "Organization",
        name: "Yellow Mountain Business Solutions",
        url: SITE_URL,
      },
      areaServed: (opts.areaServed || ["United States"]).map((a) => ({
        "@type": "Country",
        name: a,
      })),
      audience: opts.audience
        ? {
            "@type": "BusinessAudience",
            audienceType: opts.audience.join(", "),
          }
        : undefined,
    };
    return injectSchema("service-schema", schema);
  }, [opts.path, opts.name, opts.description, opts.serviceType]);
}

/* ── Person ── */

export interface PersonSchemaOpts {
  path: string;
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  sameAs?: string[];
  knowsAbout?: string[];
}

export function usePersonSchema(opts: PersonSchemaOpts) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: opts.name,
      jobTitle: opts.jobTitle,
      description: opts.description,
      url: `${SITE_URL}${opts.path}`,
      image: opts.image,
      worksFor: ORG,
      sameAs: opts.sameAs,
      knowsAbout: opts.knowsAbout,
    };
    return injectSchema("person-schema", schema);
  }, [opts.path, opts.name, opts.jobTitle, opts.description, opts.image]);
}

/* ── FAQPage ── */

export function useFaqSchema(faqs: { q: string; a: string }[]) {
  useEffect(() => {
    if (!faqs || faqs.length === 0) return;
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    return injectSchema("faq-schema", schema);
  }, [faqs]);
}

/* ── WebPage (generic) ── */

export interface WebPageSchemaOpts {
  path: string;
  name: string;
  description: string;
}

export function useWebPageSchema(opts: WebPageSchemaOpts) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: opts.name,
      description: opts.description,
      url: `${SITE_URL}${opts.path}`,
      isPartOf: { ...ORG, "@type": "Organization" },
    };
    return injectSchema("webpage-schema", schema);
  }, [opts.path, opts.name, opts.description]);
}

/* ── Article (case studies / blog) ── */

export interface ArticleSchemaOpts {
  path: string;
  headline: string;
  description: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}

export function useArticleSchema(opts: ArticleSchemaOpts) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: opts.headline,
      description: opts.description,
      url: `${SITE_URL}${opts.path}`,
      image: opts.image ? [opts.image] : undefined,
      author: opts.author
        ? { "@type": "Person", name: opts.author, url: `${SITE_URL}/team` }
        : undefined,
      publisher: { ...ORG, "@type": "Organization" },
      datePublished: opts.datePublished,
      dateModified: opts.dateModified || opts.datePublished,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}${opts.path}`,
      },
    };
    return injectSchema("article-schema", schema);
  }, [
    opts.path,
    opts.headline,
    opts.description,
    opts.author,
    opts.datePublished,
    opts.dateModified,
    opts.image,
  ]);
}
