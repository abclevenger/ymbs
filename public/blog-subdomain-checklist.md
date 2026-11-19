# blog.ymbs.pro — Post-DNS Launch Checklist

This document covers the steps to verify after `blog.ymbs.pro` DNS is pointed
at the same host as `ymbs.pro`. The blog subdomain is configured to avoid
duplicate SEO pages — `ymbs.pro/blog/*` remains the canonical, indexable
version.

## DNS / Hosting

- [ ] Create a DNS record for `blog.ymbs.pro` (CNAME or A record) pointing to
      the same host as `ymbs.pro`.
- [ ] Ensure the hosting platform serves the same build for `blog.ymbs.pro`.
- [ ] Provision an SSL certificate for `blog.ymbs.pro` (HTTPS required).

## Canonical / SEO (no duplicate pages)

- [ ] Visit `https://blog.ymbs.pro/` → confirm `<link rel="canonical">`
      points to `https://ymbs.pro/blog`.
- [ ] Visit `https://blog.ymbs.pro/why-your-new-tech-stack-failed` → confirm
      canonical points to
      `https://ymbs.pro/blog/why-your-new-tech-stack-failed`.
- [ ] Visit `https://blog.ymbs.pro/blog/why-your-new-tech-stack-failed` →
      confirm it 301/JS-redirects to
      `https://blog.ymbs.pro/why-your-new-tech-stack-failed`.
- [ ] Confirm `public/sitemap.xml` contains ONLY `ymbs.pro/blog/*` URLs
      (no `blog.ymbs.pro` entries).
- [ ] Confirm `robots.txt` sitemap reference points to
      `https://ymbs.pro/sitemap.xml`.

## Schema / OG

- [ ] On a subdomain article, confirm Article JSON-LD `url` and
      `mainEntityOfPage` point to `https://ymbs.pro/blog/:slug`.
- [ ] Confirm `og:url` points to the canonical `ymbs.pro` URL.
- [ ] Confirm author links point to `https://ymbs.pro/ashley-clevenger`
      (etc.), not the subdomain.
- [ ] Confirm breadcrumbs (if added) use canonical `ymbs.pro` URLs.

## Analytics (cross-domain)

- [ ] Open GA4 Realtime → load `blog.ymbs.pro` → confirm events arrive.
- [ ] Confirm `source_domain` parameter = `blog.ymbs.pro` on subdomain
      events and `ymbs.pro` on main-site events.
- [ ] Confirm the GA4 linker decorates outbound links from the blog to
      `ymbs.pro/contact` (check `_gl` parameter in URL).
- [ ] Confirm no analytics fires on `vibepreview.com` / localhost.

## Status codes / 404s

- [ ] `https://blog.ymbs.pro/` → 200.
- [ ] `https://blog.ymbs.pro/:valid-slug` → 200.
- [ ] `https://blog.ymbs.pro/blog/:slug` → redirects to `/:slug`.
- [ ] `https://blog.ymbs.pro/nonexistent-slug` → 404 page renders.
- [ ] All sitemap URLs return 200.

## Mobile

- [ ] Test article pages on mobile — hero, body, CTA, related posts.
- [ ] Test mobile nav (sheet) opens and links work.
- [ ] Confirm CTAs are full-width and tap targets ≥ 48px.

## Final

- [ ] Run a site: search in Google for `blog.ymbs.pro` — subdomain pages
      should NOT be indexed (canonicals point to ymbs.pro).
- [ ] Submit `https://ymbs.pro/sitemap.xml` in Google Search Console.
- [ ] Request indexing for `https://ymbs.pro/blog` if not already indexed.
