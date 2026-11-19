# Cloudflare Worker — Edge Routing for ymbs.pro

## Problem

The AI Studio hosting platform serves the YMBS site as a static SPA with a catch-all fallback that returns **HTTP 200** for every path — including legacy URLs that should 301 and unknown URLs that should 404. The `functions/_middleware.ts` (Cloudflare Pages Function) and `public/_redirects` in this repo are **not executed** by the AI Studio platform.

## Solution

Deploy this Cloudflare Worker at the edge (on the `ymbs.pro` zone) to intercept requests **before** they reach the origin. It mirrors `src/lib/routes.ts` (the single source of truth) and handles:

| Request type | Response |
|---|---|
| Legacy `.html` URL, `/blog`, `/operations`, etc. | **301** → canonical destination |
| `/home`, `/index`, `/index.html` | **301** → `/` |
| Valid SPA route (`/scale`, `/contact`, `/insights/:slug`, …) | **200** → passthrough to origin |
| Static asset (`.js`, `.css`, `.svg`, …) | passthrough to origin |
| Unknown URL | **404** + branded page + `X-Robots-Tag: noindex, follow` |

## Deployment

### Option A — Cloudflare Dashboard (no CLI)

1. Log in to the **Cloudflare dashboard** for the `ymbs.pro` zone.
2. Go to **Workers & Pages → Create → Create Worker**.
3. Name it `ymbs-edge-routing`.
4. Paste the contents of `cloudflare/edge-routing-worker.js`.
5. **Save and Deploy**.
6. Go to **Workers Routes → Add route**:
   - Route: `*ymbs.pro/*`
   - Worker: `ymbs-edge-routing`
7. Save.

### Option B — Wrangler CLI

```bash
cd cloudflare
npx wrangler deploy edge-routing-worker.js --name ymbs-edge-routing --compatibility-date 2024-01-01
```

Then add the route in the dashboard (or via `wrangler.toml`):

```toml
routes = [{ pattern = "*ymbs.pro/*", zone_name = "ymbs.pro" }]
```

## Keeping in sync

This Worker mirrors `src/lib/routes.ts`. When routes change:

1. Update `src/lib/routes.ts`
2. Update `functions/_middleware.ts`
3. Update `cloudflare/edge-routing-worker.js`
4. Run `node scripts/generate-static-routing.mjs`
5. Run `npm test` (route-sync test verifies all stay aligned)
6. Redeploy the Worker

## Verification after deployment

```bash
# Legacy redirect → 301
curl -sI https://ymbs.pro/technology | grep -iE "HTTP|location"
curl -sI https://ymbs.pro/blog | grep -iE "HTTP|location"
curl -sI https://ymbs.pro/operations | grep -iE "HTTP|location"

# Homepage alias → 301
curl -sI https://ymbs.pro/index.html | grep -iE "HTTP|location"
curl -sI https://ymbs.pro/home | grep -iE "HTTP|location"

# Valid route → 200
curl -sI https://ymbs.pro/ | grep -i "HTTP"
curl -sI https://ymbs.pro/scale | grep -i "HTTP"
curl -sI https://ymbs.pro/contact | grep -i "HTTP"

# Unknown URL → 404
curl -sI https://ymbs.pro/this-page-does-not-exist | grep -i "HTTP"
curl -sI https://ymbs.pro/seo-404-test-987654 | grep -i "HTTP"
```

Expected:
- Legacy/alias → `HTTP/2 301` with correct `Location`
- Valid → `HTTP/2 200`
- Unknown → `HTTP/2 404`

## What this does NOT change

- No changes to the origin SPA, assets, sitemap, robots.txt, or analytics.
- No changes to valid routes — they pass through untouched.
- No changes to static assets — they pass through with original caching.
- The Worker only intervenes on redirects and unknown paths.
