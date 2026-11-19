import SolutionPage, { SolutionData } from "@/components/SolutionPage";

const data: SolutionData = {
  slug: "organizational-change",
  title: "Organizational Change",
  eyebrow: "Solutions · Change",
  headline: "Change keeps stalling — and it's not a motivation problem.",
  intro:
    "Most change initiatives fail not because people resist change, but because the systems, communication, and leadership around the change weren't ready. YMBS helps organizations move through change with all four disciplines aligned.",
  description:
    "Organizational change from YMBS — lead change with operations, technology, communications, and leadership aligned so the change actually takes hold.",
  problem:
    "A new strategy is announced, a new system is launched, a reorganization is decided — and months later nothing has actually changed. The change was declared but not built. Workflows weren't redesigned, the technology wasn't ready, the change wasn't communicated, and leadership didn't align around what 'done' looks like.",
  whyCrossDiscipline:
    "Change touches everything. Operations has to redesign how work happens. Technology has to support the new way. Communications has to explain it so people understand and trust it. Leadership has to align, model it, and hold the organization accountable. Change managed in one department alone is why initiatives quietly die.",
  contributions: [
    {
      name: "Operations",
      points: [
        "Redesign workflows for the new way of working",
        "Document the new processes so they're repeatable",
        "Build accountability into the changed work",
      ],
      partner: "Thania Clevenger",
      partnerHref: "/thania-clevenger",
      pillarHref: "/services/operations",
    },
    {
      name: "Technology",
      points: [
        "Ensure systems support the change",
        "Remove technical friction blocking adoption",
        "Document what changed in the technology",
      ],
      partner: "Ashley Clevenger",
      partnerHref: "/ashley-clevenger",
      pillarHref: "/services/technology",
    },
    {
      name: "Communications",
      points: [
        "Explain the change and the reason honestly",
        "Align internal messaging across the organization",
        "Manage stakeholder communication",
        "Protect trust during uncertainty",
      ],
      partner: "Michelle Griffith",
      partnerHref: "/michelle-griffith",
      pillarHref: "/services/communications",
    },
    {
      name: "Leadership",
      points: [
        "Align leadership around the change",
        "Model the new behavior",
        "Build execution cadence and accountability",
        "Manage resistance with clarity, not pressure",
      ],
      partner: "Nestor Ortiz",
      partnerHref: "/nestor-ortiz",
      pillarHref: "/services/leadership",
    },
  ],
  engagement: [
    "Start with the SCALE™ Assessment to find what the change will stress.",
    "Build a change plan across the disciplines that need to move together.",
    "Execute with operations, technology, communications, and leadership coordinated.",
    "Measure whether the change actually took hold and adjust.",
  ],
  outcomes: [
    "Change that takes hold instead of fading",
    "Workflows redesigned for the new reality",
    "Staff who understand and trust the change",
    "Leadership aligned and accountable for execution",
  ],
  startAssessment: {
    label: "Take the SCALE™ Assessment",
    href: "/scale/assessment",
  },
  relatedInsights: [
    {
      slug: "aligning-internal-communications-change",
      title: "Aligning Internal Communications During Change",
    },
    {
      slug: "getting-your-board-to-make-decisions",
      title: "Getting Your Board to Make Decisions",
    },
  ],
};

export default function SolutionOrganizationalChange() {
  return <SolutionPage data={data} />;
}
