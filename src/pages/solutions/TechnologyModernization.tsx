import SolutionPage, { SolutionData } from "@/components/SolutionPage";

const data: SolutionData = {
  slug: "technology-modernization",
  title: "Technology Modernization",
  eyebrow: "Solutions · Technology",
  headline: "Your tech stack grew piece by piece. Now it doesn't fit together.",
  intro:
    "Modernization isn't buying new software — it's making technology serve the organization again. YMBS helps you assess, right-size, and modernize without the vendor chaos, with operations, communications, and leadership aligned to the change.",
  description:
    "Technology modernization from YMBS — assess, right-size, and modernize your tech stack with operations, communications, and leadership aligned, without vendor lock-in.",
  problem:
    "Over years, the organization accumulated tools that each solved one problem. Now they don't integrate, staff duplicate data across them, costs keep climbing, and no one has a complete picture of what's actually in place. Modernization feels overwhelming because the inventory itself doesn't exist.",
  whyCrossDiscipline:
    "Modernizing technology without touching the workflows it supports just moves the problem. New tools fail when the operations around them aren't ready, when leadership hasn't aligned on priorities, and when the change isn't communicated. YMBS modernizes the technology and the organization around it together.",
  contributions: [
    {
      name: "Technology",
      points: [
        "Build a complete technology inventory",
        "Establish a Living Technology Record",
        "Right-size the stack and eliminate redundancy",
        "Create a vendor-neutral modernization roadmap",
      ],
      partner: "Ashley Clevenger",
      partnerHref: "/ashley-clevenger",
      pillarHref: "/services/technology",
    },
    {
      name: "Operations",
      points: [
        "Redesign workflows the new systems support",
        "Document processes so adoption can stick",
        "Eliminate double data entry and friction",
        "Build governance around the new tools",
      ],
      partner: "Thania Clevenger",
      partnerHref: "/thania-clevenger",
      pillarHref: "/services/operations",
    },
    {
      name: "Communications",
      points: [
        "Communicate the change to staff and stakeholders",
        "Set expectations on what improves and when",
        "Manage reputation during the transition",
      ],
      partner: "Michelle Griffith",
      partnerHref: "/michelle-griffith",
      pillarHref: "/services/communications",
    },
    {
      name: "Leadership",
      points: [
        "Align leadership on modernization priorities",
        "Drive adoption with clear accountability",
        "Manage the change across the organization",
      ],
      partner: "Nestor Ortiz",
      partnerHref: "/nestor-ortiz",
      pillarHref: "/services/leadership",
    },
  ],
  engagement: [
    "Start with the Technology Assessment to inventory what exists.",
    "Build a Living Technology Record of systems, vendors, contracts, and costs.",
    "Right-size the stack and build a vendor-neutral roadmap.",
    "Implement with operations, communications, and leadership coordinated.",
  ],
  outcomes: [
    "A complete, maintained record of your technology",
    "Reduced cost from eliminated redundant tools",
    "Systems that integrate instead of fragment",
    "Adoption that sticks because the organization was ready",
  ],
  startAssessment: {
    label: "Take the Technology Assessment",
    href: "/assessments/technology",
  },
  relatedInsights: [
    {
      slug: "why-your-new-tech-stack-failed",
      title: "Why Your New Tech Stack Failed",
    },
    {
      slug: "crm-selection-nonprofits-guide",
      title: "CRM Selection for Nonprofits",
    },
  ],
  relatedCaseStudies: [
    {
      slug: "nonprofit-tech-consolidation",
      title: "Nonprofit Tech Consolidation",
    },
    {
      slug: "law-firm-intake-automation",
      title: "Law Firm Intake Automation",
    },
  ],
};

export default function SolutionTechnologyModernization() {
  return <SolutionPage data={data} />;
}
