import { Helmet } from "react-helmet-async";

const SITE_URL = "https://ymbs.pro";
const SITE_NAME = "Yellow Mountain Business Solutions";
const DEFAULT_OG_IMAGE =
  "https://vibe.filesafe.space/1776094666446468637/assets/a457cb22-ba78-45fd-ae0e-82b0d85afbc4.png";

export interface SEOHeadProps {
  /** Full <title> text (include "| YMBS" suffix where appropriate). */
  title: string;
  /** Meta description (≤160 chars). */
  description: string;
  /** Canonical path, e.g. "/services/operations" or "/". */
  canonical: string;
  /** OG / Twitter image URL. Falls back to the default social card. */
  ogImage?: string;
  /** OG type — "website" (default) or "article". */
  ogType?: string;
  /** When true, adds noindex,nofollow. */
  noIndex?: boolean;
  /** Optional JSON-LD schema (single object or array of objects). */
  schemaJson?: object | object[];
}

/**
 * Centralized <head> management for every page. Sets title, description,
 * canonical, Open Graph, Twitter Card, robots (when noIndex), and optional
 * JSON-LD schema via react-helmet-async. This is the single source of truth
 * for per-page metadata — pages should NOT also set document.title or meta
 * tags imperatively.
 */
export default function SEOHead({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  noIndex = false,
  schemaJson,
}: SEOHeadProps) {
  const url = `${SITE_URL}${canonical}`;
  const image = ogImage || DEFAULT_OG_IMAGE;
  const schemas = schemaJson
    ? Array.isArray(schemaJson)
      ? schemaJson
      : [schemaJson]
    : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
