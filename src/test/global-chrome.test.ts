import { describe, expect, it } from "vitest";
import { readFileSync } from "fs";
import { join } from "path";
import { resolveSiteHref } from "@/components/layout/SiteLink";

const read = (path: string) => readFileSync(join(process.cwd(), path), "utf-8");

describe("Shared YMBS site header and footer", () => {
  it("uses the same header and footer on the main website and blog subdomain", () => {
    const layout = read("src/components/layout/Layout.tsx");
    const blog = read("src/components/layout/BlogLayout.tsx");
    for (const source of [layout, blog]) {
      expect(source).toContain("<Header />");
      expect(source).toContain("<Footer />");
    }
    expect(blog).not.toContain("function BlogHeader");
    expect(blog).not.toContain("function BlogFooter");
  });

  it("routes blog header and footer links to the main YMBS domain", () => {
    for (const path of [
      "/",
      "/contact",
      "/support",
      "/insights",
      "/scale/assessment",
    ]) {
      expect(resolveSiteHref(path, "blog.ymbs.pro")).toBe(
        `https://ymbs.pro${path}`,
      );
    }
  });

  it("keeps main website routes relative for SPA navigation", () => {
    expect(resolveSiteHref("/contact", "ymbs.pro")).toBe("/contact");
    expect(resolveSiteHref("/services", "www.ymbs.pro")).toBe("/services");
    expect(resolveSiteHref("/scale", "localhost")).toBe("/scale");
  });

  it("preserves non-internal destinations", () => {
    expect(resolveSiteHref("mailto:info@ymbs.pro", "blog.ymbs.pro")).toBe(
      "mailto:info@ymbs.pro",
    );
    expect(resolveSiteHref("https://example.com/", "blog.ymbs.pro")).toBe(
      "https://example.com/",
    );
  });
});
