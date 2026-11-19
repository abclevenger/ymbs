import CaseStudyTemplate, {
  CaseStudyData,
} from "@/components/CaseStudyTemplate";

const data: CaseStudyData = {
  slug: "executive-readiness-stakeholder-comms",
  client:
    "Mission-Driven Organization — Executive Readiness & Stakeholder Communications",
  industry: "Mission-Driven",
  tags: ["Communications", "Leadership"],
  problem:
    "Leadership team needed to communicate a difficult decision to staff, board, and community stakeholders simultaneously. There was no messaging framework, no stakeholder plan, and no preparation for difficult questions.",
  impact:
    "The leadership team was anxious about the announcement. Without preparation, the risk of miscommunication, stakeholder backlash, and reputational damage was high.",
  approach:
    "YMBS prepared executives with a messaging framework, stakeholder communication plan, and difficult Q&A preparation.",
  implementation:
    "Built a structured messaging framework aligned across all channels. Mapped stakeholder groups and tailored communication for each. Conducted mock Q&A sessions to prepare leadership for difficult questions. Created a rollout timeline for staff, board, and community.",
  results: [
    "Composed, disciplined leadership across all stakeholder communications",
    "Consistent messaging framework deployed across all channels",
    "Stakeholder groups received tailored, relevant communication",
    "Leadership entered difficult meetings prepared and confident",
  ],
  disciplines: ["Communications", "Leadership"],
  pillarContributions: [
    {
      discipline: "Communications",
      changes:
        "Built a structured messaging framework and a stakeholder communication plan tailored to each audience. Conducted mock Q&A so the message held under pressure.",
      partner: "Michelle Griffith",
      partnerHref: "/michelle-griffith",
    },
    {
      discipline: "Leadership",
      changes:
        "Prepared the leadership team to deliver the message with composure, aligned on who would speak, and built the confidence to handle difficult questions.",
      partner: "Nestor Ortiz",
      partnerHref: "/nestor-ortiz",
    },
  ],
  scaleDimensions: ["Culture", "Alignment"],
  relatedServices: [
    {
      label: "Executive Communications",
      href: "/services/communications/executive-communications",
    },
    {
      label: "Reputation Management",
      href: "/services/communications/reputation-management",
    },
    { label: "Leadership", href: "/services/leadership" },
  ],
  quote:
    "Michelle prepared our leadership team for a difficult board presentation and community meeting. We walked in composed, disciplined, and prepared.",
  quoteAuthor: "Board Chair",
  quoteTitle: "Mission-Driven Organization",
};

export default function CaseStudyExecutiveReadiness() {
  return <CaseStudyTemplate data={data} />;
}
