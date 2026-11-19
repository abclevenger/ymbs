import CaseStudyTemplate, {
  CaseStudyData,
} from "@/components/CaseStudyTemplate";

const data: CaseStudyData = {
  slug: "law-firm-intake-automation",
  client: "Florida Law Firm — Intake & CRM Automation",
  industry: "Legal Services",
  tags: ["Technology", "Operations"],
  problem:
    "Leads entered through disconnected channels. Staff manually copied data from the website into a separate CRM. Follow-up was sporadic, and the firm was losing leads to slow response times.",
  impact:
    "Leads were going cold before anyone responded. The firm was paying for three separate software subscriptions that didn't integrate, and staff spent hours on manual data entry. Partner visibility into pipeline health was nonexistent.",
  approach:
    "YMBS mapped the entire intake process, consolidated the tech stack into one platform, and built automated multi-channel follow-up workflows.",
  implementation:
    "Deployed a unified CRM with automated SMS and email follow-up, centralized calendar booking, and a drag-and-drop pipeline board for partner visibility. Eliminated three redundant subscriptions and connected all web forms directly to the CRM with automated routing.",
  results: [
    "Lead response time dropped from hours to under 20 seconds",
    "30% increase in retained clients from the same ad spend",
    "10 hours per week recovered for staff",
    "Three redundant software subscriptions eliminated",
  ],
  disciplines: ["Technology", "Operations"],
  pillarContributions: [
    {
      discipline: "Technology",
      changes:
        "Consolidated the tech stack into one platform, connected all web forms directly to the CRM, and deployed automated multi-channel follow-up.",
      partner: "Ashley Clevenger",
      partnerHref: "/ashley-clevenger",
    },
    {
      discipline: "Operations",
      changes:
        "Mapped the entire intake process end to end, eliminated double data entry, and recovered staff hours for higher-value work.",
      partner: "Thania Clevenger",
      partnerHref: "/thania-clevenger",
    },
  ],
  scaleDimensions: ["Structure", "Execution"],
  relatedServices: [
    { label: "Technology Strategy", href: "/services/technology" },
    {
      label: "CRM & Workflow Automation",
      href: "/services/technology/crm-workflow",
    },
    { label: "Law Firm Technology", href: "/law-firm-technology" },
  ],
  quote:
    "We were paying for three tools that did the same thing. Ashley consolidated our stack, automated the busywork, and our team actually uses the systems now.",
  quoteAuthor: "Managing Partner",
  quoteTitle: "Florida Law Firm",
};

export default function CaseStudyLawFirmIntake() {
  return <CaseStudyTemplate data={data} />;
}
