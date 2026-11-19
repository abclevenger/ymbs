import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

/**
 * TrailGuide Pixel — injected at runtime so it survives HTML optimizers
 * (NitroPack/Cloudflare) that strip static <script> tags from index.html.
 * Added to document.head once; persists across SPA navigation.
 */
(function injectTrailGuide() {
  if (document.getElementById("sa-dynamic-optimization")) return;
  const s = document.createElement("script");
  s.setAttribute("nowprocket", "");
  s.setAttribute("nitro-exclude", "");
  s.type = "text/javascript";
  s.id = "sa-dynamic-optimization";
  s.setAttribute("data-uuid", "b5246913-dc40-4f3d-877d-be51133d3a77");
  s.src = "https://seo.ymbs.pro/scripts/dynamic_optimization.js";
  document.head.appendChild(s);
})();

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);
