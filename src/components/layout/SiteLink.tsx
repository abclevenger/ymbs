import { forwardRef } from "react";
import { Link as RouterLink, type LinkProps } from "react-router-dom";

const MAIN_SITE = "https://ymbs.pro";

/** Blog lives on a separate hostname; navigation always points to main site. */
export function isBlogSubdomain(): boolean {
  return typeof window !== "undefined" && window.location.hostname === "blog.ymbs.pro";
}

export function mainSiteHref(path: string): string {
  return isBlogSubdomain() && path.startsWith("/")
    ? `${MAIN_SITE}${path}`
    : path;
}

/**
 * Shared navigation link for the main website and blog subdomain.
 * On the main domain it preserves React Router's client navigation.
 * On blog.ymbs.pro it uses real cross-domain anchors to the main website.
 */
export const SiteLink = forwardRef<HTMLAnchorElement, LinkProps>(
  function SiteLink({ to, ...props }, ref) {
    if (isBlogSubdomain()) {
      const path =
        typeof to === "string"
          ? to
          : `${to.pathname ?? "/"}${to.search ?? ""}${to.hash ?? ""}`;
      return <a {...props} href={mainSiteHref(path)} ref={ref} />;
    }
    return <RouterLink to={to} {...props} ref={ref} />;
  },
);
