import CaseStudyTemplate, {
  CaseStudyData,
} from "@/components/CaseStudyTemplate";

const data: CaseStudyData = {
  slug: "nonprofit-governance-operations",
  client: "Nonprofit — Governance & Operations Overhaul",
  industry: "Nonprofit",
  tags: ["Operations", "Leadership"],
  problem:
    "Board roles and decision-making were unclear. Key processes existed only in people's heads. Documentation was scattered, incomplete, or non-existent.",
  impact:
    "The board lacked visibility and accountability. Upcoming audits were a source of anxiety. The organization was at risk if key staff left, as institutional knowledge was undocumented.",
  approach:
    "YMBS conducted a governance review, documented all core processes, and built a compliance-ready operational foundation.",
  implementation:
    "Documented SOPs for every core process, clarified decision rights and board roles, built board-ready reporting structures, and created a governance framework with clear accountability metrics.",
  results: [
    "Clear board roles and decision rights documented",
    "Core processes extracted from tribal knowledge into SOPs",
    "Audit-ready documentation framework established",
    "Board reporting structure implemented",
  ],
  disciplines: ["Operations", "Leadership"],
  pillarContributions: [
    {
      discipline: "Operations",
      changes:
        "Documented SOPs for every core process, clarified decision rights and board roles, and built a compliance-ready, audit-ready operational foundation.",
      partner: "Thania Clevenger",
      partnerHref: "/thania-clevenger",
    },
    {
      discipline: "Leadership",
      changes:
        "Built board-ready reporting and accountability metrics so the board gained visibility and the leadership team owned clear outcomes.",
      partner: "Nestor Ortiz",
      partnerHref: "/nestor-ortiz",
    },
  ],
  scaleDimensions: [
    "Structure",
    "Liability & Governance Readiness",
    "Alignment",
  ],
  relatedServices: [
    { label: "Governance", href: "/services/operations/governance" },
    { label: "Operations", href: "/services/operations" },
    { label: "Nonprofit Consulting", href: "/nonprofit-consulting" },
  ],
  quote:
    "YMBS found operational gaps we'd been working around for years. Within 90 days we had documented processes, clear ownership, and a board that finally had the visibility they needed.",
  quoteAuthor: "Executive Director",
  quoteTitle: "Regional Nonprofit",
};

export default function CaseStudyNonprofitGovernance() {
  return <CaseStudyTemplate data={data} />;
}
