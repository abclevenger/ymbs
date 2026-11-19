import SolutionPage, { SolutionData } from "@/components/SolutionPage";

const data: SolutionData = {
  slug: "ai-adoption",
  title: "AI Adoption That Actually Delivers",
  eyebrow: "Solutions · AI",
  headline: "You're being told to adopt AI. No one said what for.",
  intro:
    "Most AI implementations look impressive and deliver nothing measurable. YMBS helps organizations adopt AI where it actually creates value — with the operations, governance, communications, and leadership around it ready to support it.",
  description:
    "AI adoption from YMBS — adopt AI where it creates real value, with technology, operations, communications, and leadership aligned so adoption actually sticks.",
  problem:
    "Leadership sees a demo, gets excited, signs a contract, and expects transformation. Six months later, usage has collapsed and the old spreadsheets are back. The tool was purchased before the workflow was understood, the team was trained before the process was defined, and adoption was assumed rather than earned. AI becomes an expense instead of an investment.",
  whyCrossDiscipline:
    "AI adoption is never just a technology decision. The technology has to fit a workflow (operations), the people have to adopt it (leadership), the organization has to communicate what's changing and why (communications), and the whole thing needs governance so it's used responsibly. Adopting AI in one department without the others is exactly why implementations fail.",
  contributions: [
    {
      name: "Technology",
      points: [
        "Select platforms that fit the actual problem",
        "Secure AI use and data exposure",
        "Design integrations with existing systems",
        "Architect automation that's maintainable",
      ],
      partner: "Ashley Clevenger",
      partnerHref: "/ashley-clevenger",
      pillarHref: "/services/technology",
    },
    {
      name: "Operations",
      points: [
        "Map the workflows AI is meant to improve",
        "Build SOPs around the new way of working",
        "Govern where AI can and cannot be used",
        "Eliminate the friction AI should remove",
      ],
      partner: "Thania Clevenger",
      partnerHref: "/thania-clevenger",
      pillarHref: "/services/operations",
    },
    {
      name: "Communications",
      points: [
        "Communicate internally what's changing and why",
        "Set stakeholder expectations honestly",
        "Shape responsible AI-use messaging",
        "Protect reputation during the transition",
      ],
      partner: "Michelle Griffith",
      partnerHref: "/michelle-griffith",
      pillarHref: "/services/communications",
    },
    {
      name: "Leadership",
      points: [
        "Drive adoption with clear accountability",
        "Align leadership on where AI fits strategy",
        "Manage the change AI requires",
        "Keep a human in the loop where judgment matters",
      ],
      partner: "Nestor Ortiz",
      partnerHref: "/nestor-ortiz",
      pillarHref: "/services/leadership",
    },
  ],
  engagement: [
    "Identify the repetitive, predictable, low-risk tasks AI should handle first.",
    "Select and integrate the right platform — not the most impressive demo.",
    "Build the workflows, governance, and messaging around it.",
    "Measure what actually changed and expand what works.",
  ],
  outcomes: [
    "AI applied to the right problems, in the right order",
    "Adoption that sticks because the workflow was designed first",
    "Responsible-use governance so AI doesn't create new risk",
    "Measurable time recovered on repetitive work",
  ],
  startAssessment: {
    label: "Take the Technology Assessment",
    href: "/assessments/technology",
  },
  relatedInsights: [
    {
      slug: "ai-for-small-business-reality-check",
      title: "AI for Small Business: A Reality Check",
    },
    {
      slug: "why-your-new-tech-stack-failed",
      title: "Why Your New Tech Stack Failed",
    },
  ],
};

export default function SolutionAiAdoption() {
  return <SolutionPage data={data} />;
}
