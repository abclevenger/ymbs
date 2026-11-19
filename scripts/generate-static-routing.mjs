#!/usr/bin/env node
/**
 * Static routing fallback generator.
 *
 * Generates static HTML files in public/ that provide:
 *   - meta-refresh + canonical redirects for legacy URLs
 *   - A branded 404.html with noindex
 *
 * This is the FALLBACK mechanism for hosts that do NOT support
 * Cloudflare Pages Functions (functions/_middleware.ts) or _redirects.
 *
 * On Cloudflare Pages with Functions enabled, the _middleware.ts
 * handles routing at the edge and these static files are not used.
 *
 * On hosts that serve public/ as static files (SPA fallback to index.html),
 * these files intercept the request BEFORE the SPA fallback:
 *   - /technology/index.html → redirect to /services/technology
 *   - /404.html → branded 404 with noindex
 *
 * Run after changing src/lib/routes.ts:
 *   bun scripts/generate-static-routing.mjs
 */

import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";

// Import route data from the authoritative source (bun handles .ts imports)
import {
  validPageRoutes,
  noIndexRoutes,
  dynamicRoutePrefixes,
  homepageAliases,
  legacyRedirects,
} from "../src/lib/routes.ts";

const PUBLIC_DIR = join(process.cwd(), "public");

/**
 * Generate a meta-refresh redirect HTML file.
 * This is a fallback for static hosts. The canonical redirect is the
 * 301 from the edge function. This file ensures that even on a pure
 * static host, the URL does not serve the SPA shell.
 *
 * The meta-refresh + canonical tag tells Google this is not the
 * canonical version, and the JS redirect handles users.
 */
function generateRedirectHtml(destination) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Redirecting…</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${destination}">
<meta http-equiv="refresh" content="0; url=${destination}">
<script>window.location.replace("${destination}");</script>
</head>
<body>
<p>Redirecting to <a href="${destination}">${destination}</a>.</p>
</body>
</html>
`;
}

/**
 * Generate the branded 404 page.
 * This is served with HTTP 404 status by the edge function or by
 * hosts that support a custom 404.html.
 */
function generate404Html() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Page Not Found | YMBS</title>
<meta name="robots" content="noindex, follow">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  body { margin:0; min-height:100vh; display:flex; align-items:center; justify-content:center;
         background:#0B1D33; color:#fff; font-family:Georgia,serif; }
  .c { text-align:center; padding:2rem; }
  h1 { font-size:3rem; margin:0 0 1rem; color:#C9A227; }
  p { font-size:1.25rem; color:rgba(255,255,255,0.7); margin:0 0 1.5rem; }
  a { color:#C9A227; text-decoration:underline; font-size:1.1rem; }
</style>
</head>
<body>
<div class="c">
  <h1>404</h1>
  <p>The page you were looking for could not be found.</p>
  <a href="/">Return to YMBS Home</a>
</div>
</body>
</html>
`;
}

function ensureDir(filePath) {
  const dir = dirname(filePath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

function writeFile(filePath, content) {
  ensureDir(filePath);
  writeFileSync(filePath, content, "utf-8");
  console.log(`  ✓ ${filePath.replace(process.cwd(), ".")}`);
}

// ─── Main ───
console.log("Generating static routing fallback files...\n");

let count = 0;

// 1. Generate 404.html
writeFile(join(PUBLIC_DIR, "404.html"), generate404Html());
count++;

// 2. Generate redirect files for each legacy URL
for (const [src, dest] of Object.entries(legacyRedirects)) {
  let filePath;

  if (src.endsWith(".html")) {
    // /technology/digital-signage.html → public/technology/digital-signage.html
    filePath = join(PUBLIC_DIR, src);
  } else if (src.endsWith("/")) {
    // /mission-foundation/ → public/mission-foundation/index.html
    filePath = join(PUBLIC_DIR, src.replace(/\/+$/, ""), "index.html");
  } else {
    // /technology → public/technology/index.html
    filePath = join(PUBLIC_DIR, src, "index.html");
  }

  writeFile(filePath, generateRedirectHtml(dest));
  count++;
}

// 3. Generate homepage alias redirects
for (const alias of homepageAliases) {
  if (alias.endsWith(".html")) {
    // /index.html → public/index.html (BUT this conflicts with the SPA!)
    // Skip .html homepage aliases — they're handled by the edge function
    // and would conflict with the SPA's index.html
    continue;
  }
  const filePath = join(PUBLIC_DIR, alias, "index.html");
  writeFile(filePath, generateRedirectHtml("/"));
  count++;
}

console.log(`\n✅ Generated ${count} static routing files in public/`);
console.log(
  "\nNote: On Cloudflare Pages with Functions enabled, functions/_middleware.ts",
);
console.log(
  "handles routing at the edge. These static files are a fallback for other hosts.\n",
);
