/**
 * Authority-link map for each YMBS partner. Connects each partner to their
 * primary pillar, authored/reviewed insights, relevant case studies,
 * solutions, assessments, and industries — strengthening internal authority
 * clusters without changing existing partner URLs.
 *
 * Only real, existing content is linked. No fabricated articles or results.
 */

import { blogPosts } from "./blogPosts";

export interface PartnerAuthority {
  /** Partner URL slug */
  slug:
    | "ashley-clevenger"
    | "thania-clevenger"
    | "michelle-griffith"
    | "nestor-ortiz";
  name: string;
  pillar: string;
  pillarHref: string;
  /** Pillar-specific consultation CTA */
  ctaLabel: string;
  /** Assessment or consultation to start with */
  startHref: string;
  startLabel: string;
  /** Solutions this partner's pillar participates in */
  solutions: { slug: string; title: string }[];
  /** Industries this partner's pillar serves */
  industries: { href: string; title: string }[];
}

export const partnerAuthority: Record<
  PartnerAuthority["slug"],
  PartnerAuthority
> = {
  "ashley-clevenger": {
    slug: "ashley-clevenger",
    name: "Ashley Clevenger",
    pillar: "Technology",
    pillarHref: "/services/technology",
    ctaLabel: "Review Your Technology",
    startHref: "/assessments/technology",
    startLabel: "Take the Technology Assessment",
    solutions: [
      { slug: "ai-adoption", title: "AI Adoption That Actually Delivers" },
      { slug: "technology-modernization", title: "Technology Modernization" },
      {
        slug: "organizational-growth",
        title: "Organizational Growth Readiness",
      },
    ],
    industries: [
      { href: "/law-firm-technology", title: "Law Firms" },
      { href: "/nonprofit-consulting", title: "Nonprofits" },
      { href: "/professional-services", title: "Professional Services" },
    ],
  },
  "thania-clevenger": {
    slug: "thania-clevenger",
    name: "Thania Clevenger",
    pillar: "Operations",
    pillarHref: "/services/operations",
    ctaLabel: "Talk About Operations",
    startHref: "/scale/assessment",
    startLabel: "Take the SCALE™ Assessment",
    solutions: [
      {
        slug: "organizational-growth",
        title: "Organizational Growth Readiness",
      },
      { slug: "organizational-change", title: "Organizational Change" },
      { slug: "technology-modernization", title: "Technology Modernization" },
    ],
    industries: [
      { href: "/nonprofit-consulting", title: "Nonprofits" },
      { href: "/professional-services", title: "Professional Services" },
      {
        href: "/mission-driven-organizations",
        title: "Mission-Driven Organizations",
      },
    ],
  },
  "michelle-griffith": {
    slug: "michelle-griffith",
    name: "Michelle Griffith",
    pillar: "Communications",
    pillarHref: "/services/communications",
    ctaLabel: "Strengthen Your Communications",
    startHref: "/assessments/seo",
    startLabel: "Take the SEO / Visibility Assessment",
    solutions: [
      { slug: "ai-adoption", title: "AI Adoption That Actually Delivers" },
      { slug: "organizational-change", title: "Organizational Change" },
    ],
    industries: [
      { href: "/law-firm-technology", title: "Law Firms" },
      { href: "/nonprofit-consulting", title: "Nonprofits" },
      {
        href: "/mission-driven-organizations",
        title: "Mission-Driven Organizations",
      },
    ],
  },
  "nestor-ortiz": {
    slug: "nestor-ortiz",
    name: "Nestor Ortiz",
    pillar: "Leadership",
    pillarHref: "/services/leadership",
    ctaLabel: "Align Your Leadership",
    startHref: "/scale/assessment",
    startLabel: "Take the SCALE™ Assessment",
    solutions: [
      {
        slug: "organizational-growth",
        title: "Organizational Growth Readiness",
      },
      { slug: "organizational-change", title: "Organizational Change" },
    ],
    industries: [
      { href: "/nonprofit-consulting", title: "Nonprofits" },
      { href: "/professional-services", title: "Professional Services" },
      {
        href: "/mission-driven-organizations",
        title: "Mission-Driven Organizations",
      },
    ],
  },
};

/** Returns the insights authored by a given partner, by name. */
export function getInsightsByAuthor(authorName: string) {
  return blogPosts.filter((p) => p.author === authorName);
}
