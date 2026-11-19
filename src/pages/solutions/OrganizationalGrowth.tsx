import SolutionPage, { SolutionData } from "@/components/SolutionPage";

const data: SolutionData = {
  slug: "organizational-growth",
  title: "Organizational Growth Readiness",
  eyebrow: "Solutions · Growth",
  headline: "Growth is exposing cracks you didn't have before.",
  intro:
    "When revenue outpaces the systems underneath it, the same success that looks strong on the outside starts breaking the organization on the inside. YMBS finds what's not ready and fixes it before it becomes a crisis.",
  description:
    "Organizational growth readiness from YMBS — diagnose the operations, technology, communications, and leadership gaps that growth exposes, then fix the systems behind the business.",
  problem:
    "The organization is growing, but the systems underneath haven't kept up. Workflows live in people's heads, the tech stack is a patchwork, messaging is inconsistent, and leadership decisions stall. The symptoms look like different problems in different departments — but they share a root: the business underneath the growth was never built for what comes next.",
  whyCrossDiscipline:
    "Growth doesn't break one department — it breaks the connections between them. A process gap shows up as a technology complaint. A leadership gap shows up as a communications failure. An operations gap shows up as customer disappointment. Solving only the department that's loudest leaves the real weakness untouched. YMBS looks across operations, technology, communications, and leadership to find what growth is actually stressing.",
  contributions: [
    {
      name: "Operations",
      points: [
        "Document the workflows growth outgrew",
        "Clarify roles, decision rights, and ownership",
        "Build governance and accountability infrastructure",
        "Make tribal knowledge transferable",
      ],
      partner: "Thania Clevenger",
      partnerHref: "/thania-clevenger",
      pillarHref: "/services/operations",
    },
    {
      name: "Technology",
      points: [
        "Right-size systems that no longer fit",
        "Connect disconnected tools into one stack",
        "Build a vendor-neutral technology roadmap",
        "Establish a Living Technology Record",
      ],
      partner: "Ashley Clevenger",
      partnerHref: "/ashley-clevenger",
      pillarHref: "/services/technology",
    },
    {
      name: "Communications",
      points: [
        "Align messaging across a larger organization",
        "Prepare leaders for higher-stakes communication",
        "Protect reputation as visibility grows",
        "Clarify stakeholder communication",
      ],
      partner: "Michelle Griffith",
      partnerHref: "/michelle-griffith",
      pillarHref: "/services/communications",
    },
    {
      name: "Leadership",
      points: [
        "Align leadership around shared priorities",
        "Clarify decision rights at the new scale",
        "Build execution cadence and accountability",
        "Manage the change growth requires",
      ],
      partner: "Nestor Ortiz",
      partnerHref: "/nestor-ortiz",
      pillarHref: "/services/leadership",
    },
  ],
  engagement: [
    "Start with the SCALE™ Assessment to find what growth is actually stressing.",
    "Build a prioritized roadmap across the disciplines that need attention.",
    "Execute the fixes with the right pillar leads — coordinated, not siloed.",
    "Review progress on a cadence so the systems keep up with the growth.",
  ],
  outcomes: [
    "Documented workflows that survive staff changes",
    "A technology stack that supports the next stage, not the last one",
    "Consistent messaging as the organization grows more visible",
    "Leadership aligned around clear decision rights and execution cadence",
  ],
  startAssessment: {
    label: "Take the SCALE™ Assessment",
    href: "/scale/assessment",
  },
  relatedInsights: [
    {
      slug: "when-to-hire-fractional-coo",
      title: "When to Hire a Fractional COO",
    },
    {
      slug: "tribal-knowledge-trap-nonprofits",
      title: "The 'Tribal Knowledge' Trap",
    },
  ],
};

export default function SolutionOrganizationalGrowth() {
  return <SolutionPage data={data} />;
}
