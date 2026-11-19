import CaseStudyTemplate, {
  CaseStudyData,
} from "@/components/CaseStudyTemplate";

const data: CaseStudyData = {
  slug: "nonprofit-tech-consolidation",
  client: "Regional Nonprofit — Technology Stack Consolidation",
  industry: "Nonprofit",
  tags: ["Technology", "Operations"],
  problem:
    "The organization had acquired software organically over several years—one tool for email, another for donor tracking, a separate calendar app, and a clunky form builder for volunteer intake. None of the systems talked to each other.",
  impact:
    "Staff spent over $1,500/month on redundant software. If a volunteer also became a donor, there was no way of knowing without manually cross-referencing two databases. Administrative burden was crushing the small team.",
  approach:
    "YMBS audited the entire technology stack, mapped core workflows, and migrated operations to a single unified platform.",
  implementation:
    "Consolidated donors, volunteers, and partners into one intelligent database. Built automated email and SMS journeys for onboarding. Replaced third-party form builders with native integrated tools. Trained staff on the new unified system.",
  results: [
    "$1,200/month in software overhead eliminated",
    "100% data centralization across donors, volunteers, and partners",
    "Automated nurture sequences replaced manual follow-up",
    "Single source of truth for the entire organization",
  ],
  disciplines: ["Technology", "Operations"],
  pillarContributions: [
    {
      discipline: "Technology",
      changes:
        "Audited the full tech stack, consolidated donors, volunteers, and partners into one intelligent database, and replaced redundant tools with native integrations.",
      partner: "Ashley Clevenger",
      partnerHref: "/ashley-clevenger",
    },
    {
      discipline: "Operations",
      changes:
        "Mapped core workflows and built automated onboarding and nurture sequences that replaced manual follow-up—freeing the small team for higher-value work.",
      partner: "Thania Clevenger",
      partnerHref: "/thania-clevenger",
    },
  ],
  scaleDimensions: ["Structure", "Execution"],
  relatedServices: [
    { label: "Technology Strategy", href: "/services/technology" },
    {
      label: "Software Solutions",
      href: "/services/technology/software-solutions",
    },
    { label: "Nonprofit Consulting", href: "/nonprofit-consulting" },
  ],
};

export default function CaseStudyNonprofitTech() {
  return <CaseStudyTemplate data={data} />;
}
