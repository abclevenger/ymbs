import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

// Route label map for readable breadcrumb names
const routeLabels: Record<string, string> = {
  "": "Home",
  services: "Services",
  operations: "Operations",
  technology: "Technology",
  leadership: "Leadership",
  communications: "Communications",
  seo: "SEO Services",
  insights: "Insights",
  contact: "Contact",
  team: "About",
  elevation: "ELEVATION",
  portfolio: "Portfolio",
  support: "Support",
  assessments: "Assessments",
  "system-health": "System Health Quiz",
  "cyber-readiness": "Cyber Readiness",
  "seo-audit": "SEO Audit",
  dashboard: "Dashboard",
  policy: "Privacy Policy",
  terms: "Terms",
  accessibility: "Accessibility",
  a2p: "A2P Services",
  sitemap: "Sitemap",
  suppliers: "Suppliers",
  "llm-knowledge": "AI Knowledge Base",
  "nonprofit-consulting": "Nonprofit Consulting",
  "law-firm-technology": "Law Firm Technology",
  "fractional-coo": "Fractional COO",
  "strategic-planning": "Strategic Planning",
  "mission-foundation": "Mission Foundation",
  "integrated-executive-advisory": "Executive Advisory",
  "company-profile": "Company Profile",
  "client-results": "Client Results",
  scale: "SCALE™",
  "michelle-griffith": "Michelle Griffith",
  "executive-readiness-intensive": "Executive Readiness Intensive",
  "law-firm-pr-system": "Law Firm PR System",
  "thania-clevenger": "Thania Clevenger",
  "ashley-clevenger": "Ashley Clevenger",
  "nestor-levenger": "Nestor Clevenger",
  "nestor-ortiz": "Nestor Ortiz",
  "case-studies": "Case Studies",
  "law-firm-intake-automation": "Law Firm Intake Automation",
  "nonprofit-tech-consolidation": "Nonprofit Tech Consolidation",
  "law-firm-website-transformation": "Law Firm Website Transformation",
  "nonprofit-governance-operations": "Nonprofit Governance & Operations",
  "executive-readiness-stakeholder-comms":
    "Executive Readiness & Stakeholder Comms",
  results: "Results",
  "analytics-dashboard": "Analytics Dashboard",
};

function getLabel(segment: string): string {
  return (
    routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
  );
}

function buildPathSegments(
  pathname: string,
): { label: string; href: string }[] {
  const segments = pathname.split("/").filter(Boolean);
  const crumbs: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
  ];
  let current = "";
  segments.forEach((seg) => {
    current += "/" + seg;
    crumbs.push({ label: getLabel(seg), href: current });
  });
  return crumbs;
}

export function Breadcrumbs() {
  const location = useLocation();
  const crumbs = buildPathSegments(location.pathname);

  // Don't show on homepage or form-focused pages
  const hiddenRoutes = ["/contact", "/support"];
  if (crumbs.length <= 1 || hiddenRoutes.includes(location.pathname))
    return null;

  return (
    <div className="max-w-7xl mx-auto px-6 pt-6">
      <Breadcrumb>
        <BreadcrumbList>
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <Fragment key={crumb.href}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="text-zinc-900 font-medium">
                      {crumb.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link
                        to={crumb.href}
                        className="text-zinc-500 hover:text-primary transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
