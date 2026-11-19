# YMBS — SEO Indexability & Crawlability Audit

**Site:** https://ymbs.pro
**Date:** 2026-09-18
**Status:** AUDIT ONLY — no production changes made. Awaiting approval.

---

## Executive Summary

### Critical (actively preventing indexation)

1. **`_redirects` is NOT being honored by the edge/hosting layer.** Every URL — including all legacy `.html` URLs, `/technology`, `/operations`, `/blog`, `/blog/*`, and every soft-404 — returns **HTTP 200 with the SPA shell**. None of the 301s in `public/_redirects` fire at the server/edge. Redirects only happen *client-side* via `LegacyRedirectHandler`/`BlogRedirect` in `App.tsx` after the SPA boots. This is the single biggest driver of the GSC "Soft 404", "Crawled – currently not indexed", "Discovered – currently not indexed", and "Page with redirect" numbers.
2. **Soft-404s return HTTP 200 with no `<title>`, no canonical, and no `noindex` in the initial HTML.** Unknown/legacy URLs (e.g. `/financial-oversight`, `/welcome-room`, `/technology.html`, `/technology/cybersecurity-risk.html`, `/podcast`, `/learn-more`, etc.) serve a bare SPA shell. The `noindex` that `NotFound`/`LegacyRedirectHandler` injects is **client-side only** (react-helmet), so it is invisible to crawlers that read the initial HTML. Google sees a 200 with empty `<head>` → classifies as soft-404.

### High (hurting crawlability/indexation)

3. **Homepage variant duplication.** `/`, `/home`, `/home/`, `/index`, `/index.html`, `/home.html` all return **HTTP 200** with the same SPA shell. Only `/` is in the sitemap and has a self-referencing canonical (prerendered). The others are un-canonicalized, un-redirected duplicate home routes → likely the GSC "Duplicate without user-selected canonical" (1) and contribute to soft-404 count.
4. **`blog.ymbs.pro` is a separate legacy Nuxt/lead-connector platform, NOT the React SPA.** It has no canonical to ymbs.pro, no robots meta, and article URLs 404 on that host. The `isBlogHost()` branch in `App.tsx` never runs in production because the subdomain is served by a different system. This is an uncontrolled duplicate-content surface.

### Medium (cleanup / consistency)

5. **Trailing-slash inconsistency.** `/services/operations/` returns 200 (same as `/services/operations`). No normalization. Sitemap uses no-trailing-slash; canonicals use no-trailing-slash. Trailing-slash variants are un-canonicalized duplicates.
6. **Sitemap is accurate and clean** (83 URLs, all real, all 200, all self-canonical, none noindex, none blocked). No sitemap inconsistencies found. Three intentionally-noindex routes (`/analytics-dashboard`, `/assessments/dashboard`, `/assessments/results`) are correctly excluded from the sitemap.
7. **robots.txt is permissive** (no Disallow rules, sitemap declared). The GSC "Blocked by robots.txt — 7" is almost certainly stale (from the old blog.ymbs.pro platform or a prior robots config) — current robots.txt blocks nothing.

### Informational (exclusions behaving correctly — do NOT change)

- `/analytics-dashboard`, `/assessments/dashboard`, `/assessments/results` → `noindex,nofollow` (intentional; app/utility pages). Correctly excluded from sitemap.
- `/policy`, `/terms`, `/accessibility`, `/a2p`, `/suppliers`, `/support`, `/elevation`, `/sitemap`, `/llm-knowledge` → indexable but low-priority utility/legal pages. These are legitimate but low-value; some "Crawled – currently not indexed" is expected and acceptable for legal pages.
- The 33 "Alternate page with proper canonical tag" are the legacy `.html` and short-URL variants that *client-side* redirect — these are functioning as intended (consolidation), just not via server 301s.

---

## Master Table

| Priority | URL / Pattern | HTTP | Indexable | Sitemap | Robots | Noindex (initial HTML) | Canonical (initial HTML) | Redirect | Internal Links | Issue | Recommended Action |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Critical** | `/_redirects` rules (all legacy `.html`, `/technology`, `/operations`, `/blog`, `/blog/*`) | 200 | N/A | N/A | allow | none | none | **none (should be 301)** | — | Edge ignores `_redirects`; all return 200 SPA shell | Configure edge/host to honor `_redirects` (or move redirects to Cloudflare/edge rules) |
| **Critical** | `/financial-oversight`, `/welcome-room`, `/cybersecurity-services`, `/ymbs-demo`, `/podcast`, `/learn-more`, `/testimonial`, `/a2p-tos`, `/terms-of-use`, `/home-page-9693`, `/preview`, `/technology.html`, `/technology/cybersecurity-risk.html`, `/leadership/michelle-griffith.html`, `/legal-software/mycase.html`, etc. | 200 | No (soft-404) | No | allow | **none (client-side only)** | **none** | none | 0 | Soft-404: 200 + empty shell, no noindex in HTML | Return real 404/410 at edge, or inject noindex in initial HTML |
| **Critical** | `/home`, `/home/`, `/index`, `/index.html`, `/home.html` | 200 | Duplicate | No | allow | none | none | none | 0 | Duplicate homepage variants | 301 redirect all to `/` at edge |
| **High** | `blog.ymbs.pro/*` | 200 (Nuxt) | Duplicate host | No | none | none | **none** | none | — | Separate legacy platform, no canonical to ymbs.pro | Either shut down subdomain + 301 to ymbs.pro/insights, or add canonical |
| **Medium** | `/services/operations/` (trailing slash) and all trailing-slash variants | 200 | Duplicate | No | allow | none | none (prerendered canonical is no-slash) | none | — | Trailing-slash duplication | Normalize trailing slashes at edge (301 to no-slash) |
| **OK** | `/analytics-dashboard`, `/assessments/dashboard`, `/assessments/results` | 200 | No (intentional) | No | allow | `noindex,nofollow` (prerendered) | self | none | — | Intentional noindex | No change |
| **OK** | All 83 sitemap URLs | 200 | Yes | Yes | allow | none | self-referencing | none | varies | Clean | No change |

---

## Noindex Audit

### Intentional noindex (CORRECT — do not change)
- `/analytics-dashboard` → `noindex,nofollow` (prerendered in initial HTML) ✓
- `/assessments/dashboard` → `noindex,nofollow` (prerendered) ✓
- `/assessments/results` → `noindex,nofollow` (prerendered) ✓

### Suspicious noindex
**None found on real content pages.** All 50+ scanned content/service/team/insights/scale/solution/assessment pages return **no noindex** in their prerendered HTML. The GSC "Excluded by noindex tag — 22" is almost entirely:
- The 3 intentional app/utility pages above
- Legacy soft-404 URLs where `NotFound`/`LegacyRedirectHandler` inject `noindex` **client-side only** — but since these return an empty shell with no noindex in the *initial* HTML, Google may or may not honor it depending on rendering. These are not "suspicious noindex on real pages"; they are soft-404s (see Soft-404 section).

**Root cause of any noindex on legacy URLs:** `src/pages/NotFound.tsx` (line 21, `noIndex` prop) and `src/App.tsx` `LegacyRedirectHandler` (lines 114–125, injects `noindex` meta client-side). Both only run after JS hydration, so the noindex is absent from initial HTML.

---

## Canonical Audit

### Correct (self-referencing, prerendered in initial HTML)
All scanned real pages have correct self-referencing canonicals in the initial HTML:
`/`, `/services/operations`, `/services/technology`, `/services/communications`, `/services/leadership`, `/scale`, `/insights`, `/team`, `/nonprofit-consulting`, `/michelle-griffith`, `/case-studies/*`, `/solutions/*`, `/assessments`, etc.

### Questionable / Incorrect
- **Soft-404 URLs** (`/financial-oversight`, `/technology.html`, etc.): **no canonical in initial HTML** (empty shell). Not "incorrect canonical" — absent canonical. These should not be indexable at all.
- **Homepage variants** (`/home`, `/index`, `/index.html`, etc.): **no canonical in initial HTML** (empty shell, not prerendered). Duplicate homepage with no canonical → the GSC "Duplicate without user-selected canonical (1)".
- **`blog.ymbs.pro`**: **no canonical** to ymbs.pro at all. Entire subdomain is un-canonicalized duplicate content.
- **Trailing-slash variants** (`/services/operations/`): prerendered canonical points to no-slash version (correct), but the page itself returns 200 — a self-canonicalizing duplicate that relies on the canonical tag being honored.

No canonical was found pointing to a 404, a noindex page, or an unrelated page.

---

## Redirect Audit

### Redirect errors (likely the GSC "Redirect error — 3")
**The edge is not executing `_redirects` at all.** Every rule in `public/_redirects` returns HTTP 200 instead of 301. There are no actual server-side redirects happening. The "redirects" only work client-side via JS (`window.location.replace`), which Google may not follow consistently and which produces the "Page with redirect — 5" and "Redirect error — 3" categories (Google sees a 200, then a JS redirect, and may flag the chain/behavior).

### Redirect chains
- **None at the server level** (because no server redirects fire).
- Client-side: `/technology` → (JS) → `/services/technology` — single hop, but executed as a 200→JS-replace rather than a clean 301.
- `/blog/:slug` → (JS) → `/insights/:slug` — same pattern.

### Self-redirects / loops
- None found.

### Recommended
- Move all `public/_redirects` rules into the actual edge/hosting redirect mechanism (Cloudflare Page Rules / Redirect Rules, or whatever serves ymbs.pro) so they return real 301s.

---

## 404 Audit

### True 404s
- The SPA has no real 404 response. **Every unknown path returns HTTP 200** with the SPA shell. `NotFound` is a client-side-rendered 200. This is the root cause of "Not found (404) — 15" and "Soft 404 — 8": Google discovers these return 200 but render as a 404 message.

### Legacy URLs tested (all return 200 soft-404, no noindex in initial HTML)
`/financial-oversight`, `/welcome-room`, `/cybersecurity-services`, `/ymbs-demo`, `/home-page-9693`, `/preview`, `/podcast`, `/learn-more`, `/testimonial`, `/a2p-tos`, `/terms-of-use`, `/technology.html`, `/technology/cybersecurity-risk.html`, `/leadership/michelle-griffith.html`, `/leadership/ashley-clevenger.html`, `/leadership/strategic-planning-alignment.html`, `/smb-cybersecurity-playbook.html`, `/technology-services/cybersecurity-risk-cleanup.html`, `/technology-services/reporting-visibility.html`, `/technology/cybersecurity-risk.html`, `/elevating-public-voice.html`, `/affiliate-program.html`, `/strengthening-organizational-governance.html`, `/legal-software/mycase.html`, `/mission-foundation/strategic-alignment-framework.html`

### Recommendation per category
- **Legacy `.html` URLs with a known replacement** (in `legacyRedirects`): should be **301 at edge** to their canonical destination (already mapped in `src/lib/redirects.ts` + `public/_redirects`).
- **Legacy URLs with NO replacement** (`/financial-oversight`, `/welcome-room`, `/podcast`, `/learn-more`, `/testimonial`, `/ymbs-demo`, `/home-page-9693`, `/preview`, `/cybersecurity-services`, `/a2p-tos`, `/terms-of-use`): should return a **real 410 Gone** (or 404) at the edge, not a 200 shell.

---

## Soft 404 Audit

**Every URL not matching a real route returns HTTP 200 + an empty SPA shell** (no `<title>`, no canonical, no noindex, no description in the initial HTML). Google classifies these as soft-404s.

Likely candidates for GSC "Soft 404 — 8":
1. `/financial-oversight` — 200, empty shell
2. `/welcome-room` — 200, empty shell
3. `/podcast` — 200, empty shell
4. `/learn-more` — 200, empty shell
5. `/testimonial` — 200, empty shell
6. `/technology.html` — 200, empty shell (legacy .html, no edge redirect)
7. `/technology/cybersecurity-risk.html` — 200, empty shell
8. `/home-page-9693` — 200, empty shell

**Why Google classifies them as soft-404:** HTTP 200 but the initial HTML has no meaningful title, meta, H1, or body content — just `<div id="root">`. The `NotFound` component (with its 404 heading and noindex) only renders after JS hydration, which is absent from the crawled HTML.

---

## robots.txt Audit

`public/robots.txt`:
```
User-agent: Googlebot / Bingbot / Twitterbot / facebookexternalhit / *
Allow: /
Sitemap: https://ymbs.pro/sitemap.xml
```
- **No Disallow rules.** Nothing is blocked.
- GSC "Blocked by robots.txt — 7" is **stale** — likely from the old `blog.ymbs.pro` platform's robots.txt (which returns empty/no rules currently) or a prior config. Current robots.txt blocks nothing.
- No assets necessary for rendering are blocked.

---

## Sitemap Audit

`public/sitemap.xml` — **83 URLs.**

### Verification results
- All 83 URLs return HTTP 200 ✓
- None redirect ✓
- None contain noindex ✓
- None blocked by robots.txt ✓
- All use self-referencing canonicals ✓
- All use `https://ymbs.pro` (no staging/preview URLs) ✓
- No trailing-slash inconsistency in sitemap ✓
- No `.html` URLs in sitemap ✓

### Pages missing from sitemap (intentionally excluded, correct)
- `/analytics-dashboard` — noindex (correct exclusion)
- `/assessments/dashboard` — noindex (correct exclusion)
- `/assessments/results` — noindex (correct exclusion)

### Pages missing from sitemap that probably SHOULD be there
- None found. All indexable routes are present.

**Sitemap is clean. No changes needed.**

---

## Crawled – currently not indexed (~20)

Likely causes (based on live verification):

1. **DUPLICATE/OVERLAP — Legacy `.html` soft-404s.** URLs like `/technology.html`, `/technology/cybersecurity-risk.html`, `/leadership/michelle-griffith.html` return 200 with empty shells. Google crawls them, sees no unique content, excludes them. **Root cause: edge not honoring `_redirects`.**
2. **LOW UNIQUE VALUE — Utility/legal pages.** `/policy`, `/terms`, `/accessibility`, `/a2p`, `/suppliers`, `/support`, `/elevation`, `/sitemap`, `/llm-knowledge` are thin/boilerplate. Google may crawl and exclude as low-value. This is acceptable for legal pages.
3. **CANONICAL ISSUE — Trailing-slash variants.** `/services/operations/` etc. return 200 with a canonical to the no-slash version. Google may crawl the slash variant, see it canonicalizes away, and exclude it (contributing to "Alternate page with proper canonical" rather than "Crawled-not-indexed").
4. **DUPLICATE/OVERLAP — Short discipline URLs.** `/technology`, `/operations`, `/communications`, `/leadership` return 200 (shell) then JS-redirect to `/services/*`. Google crawls the 200, may exclude as duplicate/redirect.

---

## Discovered – currently not indexed (~21)

Likely causes:
1. **New solution/assessment/scale pages** created in recent phases — not yet recrawled. GSC is "several days behind." These are likely fine and just need time + internal links (which exist).
2. **Legacy `.html` URLs discovered via old backlinks/sitemaps** that now 200-soft-404. These waste crawl budget.
3. **`blog.ymbs.pro` URLs** discovered but on a non-canonical host.

Do not recommend drastic changes for genuinely new pages.

---

## Duplicate without user-selected canonical (1)

**Likely: a homepage variant** (`/home`, `/index`, `/index.html`, or `/home.html`). These return 200 with an empty shell (no prerendered canonical). Only `/` has a canonical. The variant with no canonical → "Duplicate without user-selected canonical."

**Fix:** 301 redirect `/home`, `/index`, `/index.html`, `/home.html`, `/home/` to `/` at the edge.

---

## Internal-Link Audit

- **No internal links found pointing to legacy/404 URLs** in source (`src/`). No `href="/blog"`, no `href="*.html"`, no links to `/financial-oversight` etc. The codebase is clean.
- All homepage/discipline/team links point to canonical `/services/*`, `/insights`, `/team`, etc.
- **No broken internal links found in the source.**

---

## Orphan Pages

- **None.** All sitemap URLs are reachable via navigation/footer/internal links. The sitemap matches the internal-link graph.

---

## .html Legacy URL Audit

**Intended strategy:** `.html` → clean URL 301 redirect (defined in `public/_redirects` and `src/lib/redirects.ts`).

**Actual behavior:** **The edge does NOT execute the 301s.** All `.html` URLs return 200 with the SPA shell. The client-side `LegacyRedirectHandler` then redirects via JS — but only for the ~20 URLs explicitly mapped in `legacyRedirects`. Unmapped `.html` URLs (e.g. `/technology/cybersecurity-risk.html`, `/leadership/michelle-griffith.html`, `/legal-software/mycase.html`) fall through to `NotFound` (soft-404).

**Inconsistency:** The mapped `.html` URLs get a JS redirect; the unmapped ones get a soft-404. Both return 200 initially. This is the core indexation problem.

---

## Homepage Duplication Check

| URL | HTTP | Title in HTML | Canonical in HTML |
|---|---|---|---|
| `/` | 200 | ✓ "Fractional Operations, Technology, Communications & Leadership Advisory \| YMBS" | ✓ self |
| `/home` | 200 | ✗ (empty shell) | ✗ |
| `/home/` | 200 | ✗ | ✗ |
| `/index` | 200 | ✗ | ✗ |
| `/index.html` | 200 | ✗ | ✗ |
| `/home.html` | 200 | ✗ | ✗ |

**5 duplicate homepage routes** with no canonical and no redirect. Only `/` is correct.

---

## JavaScript Rendering / SPA Audit

- **Real routes ARE prerendered** — initial HTML contains `<title>`, `<meta description>`, `<link canonical>`, and body content with `data-rh="true"` attributes. This is good (likely a prerender/Nitro layer at the edge for known routes).
- **Unknown/legacy routes are NOT prerendered** — they return a bare `<div id="root">` shell with no head meta. Google sees an empty page → soft-404.
- **The prerendering only applies to routes the prerenderer knows about** (the 83 real routes). Anything else gets the empty shell.

This means: the 83 real pages are indexable and well-rendered. Everything else is a soft-404 risk.

---

## SearchAtlas / TrailGuide Audit

- **Exactly ONE installation** — confirmed.
- Static copy in `index.html` (lines 41–43): `id="sa-dynamic-optimization"`, `data-uuid="b5246913-dc40-4f3d-877d-be51133d3a77"`, `src="https://seo.ymbs.pro/scripts/dynamic_optimization.js"`.
- Runtime injection in `src/main.tsx` (lines 11–20) with dedup guard (`if (document.getElementById(...)) return;`).
- No duplicate installations. No conflicting metadata generation observed. Does not appear to add noindex or overwrite canonicals.
- **No changes needed.** (Note: the runtime injection in `main.tsx` was added because an HTML optimizer was stripping the static tag; both copies coexist safely via the dedup guard.)

---

## Summary Counts

| Metric | Count |
|---|---|
| Total production URLs discovered (ymbs.pro) | ~88 (83 sitemap + 5 homepage variants) + unlimited soft-404 space |
| Total indexable URLs | 83 (sitemap, all clean) |
| Total intentionally non-indexable URLs | 3 (`/analytics-dashboard`, `/assessments/dashboard`, `/assessments/results`) |
| Total broken/problematic URLs | ~30+ legacy/soft-404 URLs returning 200 |
| Suspicious noindex pages (on real content) | **0** |
| Incorrect canonicals (on real pages) | **0** |
| Redirect errors | **All `_redirects` rules fail** (edge not honoring them) — 3+ in GSC |
| Redirect chains | 0 server-side; client-side single-hops only |
| Broken internal links (in source) | **0** |
| Sitemap inconsistencies | **0** (sitemap is clean) |
| Likely soft 404s | ~8+ (all legacy/unknown URLs returning 200 shell) |
| Likely orphan pages | **0** |
| Pages likely contributing to "Crawled – currently not indexed" | ~20 (legacy .html soft-404s + thin utility pages) |
| Pages likely contributing to "Discovered – currently not indexed" | ~21 (new pages not yet recrawled + legacy URLs) |

---

## Recommended Fix Order

### Batch 1 — Indexation blockers (CRITICAL)
1. **Configure the edge/hosting layer to honor `public/_redirects`** (or replicate the rules as Cloudflare Redirect Rules). This single fix resolves the majority of soft-404s, redirect errors, and crawled-not-indexed issues. *File: `public/_redirects` (correct as-is); action: edge config.*
2. **Return real 404/410 for unknown paths at the edge** instead of the SPA 200 shell. Either (a) let the SPA fallback only apply to known route prefixes, or (b) add a catch-all 404. *Responsible: edge/hosting config + `src/App.tsx` `LegacyRedirectHandler` (line 103).*
3. **301 redirect homepage variants** (`/home`, `/home/`, `/index`, `/index.html`, `/home.html`) to `/` at the edge. *Responsible: edge config.*

### Batch 2 — URL consolidation (HIGH)
4. **Shut down or canonicalize `blog.ymbs.pro`.** Either 301 the subdomain to `ymbs.pro/insights` or add `<link rel="canonical" href="https://ymbs.pro/insights/...">` to every blog subdomain page. *Responsible: blog.ymbs.pro platform config (not in this repo).*
5. **Normalize trailing slashes** — 301 `/services/operations/` → `/services/operations` at the edge for all routes. *Responsible: edge config.*
6. **Add 301s for unmapped legacy `.html` URLs** that have a logical replacement (e.g. `/leadership/michelle-griffith.html` → `/michelle-griffith`, `/technology/cybersecurity-risk.html` → `/services/technology/cybersecurity`). Extend `public/_redirects` + `src/lib/redirects.ts`. *Files: `public/_redirects`, `src/lib/redirects.ts`.*

### Batch 3 — Google quality / indexing (MEDIUM)
7. **Return 410 Gone for genuinely-removed legacy URLs** with no replacement (`/financial-oversight`, `/welcome-room`, `/podcast`, `/learn-more`, `/testimonial`, `/ymbs-demo`, `/home-page-9693`, `/preview`, `/cybersecurity-services`, `/a2p-tos`, `/terms-of-use`). *Responsible: edge config.*
8. **Review thin utility pages** (`/suppliers`, `/support`, `/elevation`, `/a2p`) — consider noindex if they have no SEO value, or add unique content. *Files: respective page components.*

### Batch 4 — Cleanup (LOW)
9. **Intentional noindex pages** (`/analytics-dashboard`, `/assessments/dashboard`, `/assessments/results`) — no change needed.
10. **Intentional alternate canonicals** (legacy `.html` → clean URL) — no change needed once edge 301s work.
11. **Legal pages** (`/policy`, `/terms`, `/accessibility`) — acceptable as crawled-not-indexed; no change needed.

---

## DO NOT IMPLEMENT FIXES YET.

Awaiting approval before modifying production behavior.
