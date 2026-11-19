import SubServicePage from "@/components/SubServicePage";

export default function AiAutomationPage() {
  return (
    <SubServicePage
      path="/services/technology/ai-automation"
      pageTitle="AI & Business Automation"
      title="AI & Business Automation"
      description="Practical AI and automation strategy for nonprofits, law firms, and mission-driven organizations—reduce manual work, improve accuracy, and free your team for higher-value tasks."
      pillar="Technology"
      parent={{ label: "Technology", path: "/services/technology" }}
      heroSubtitle="Stop doing work software should do. YMBS helps organizations identify where AI and automation create real value—and where they create expensive noise."
      problems={[
        "Staff spend hours on repetitive tasks a workflow could handle automatically.",
        "You hear about AI everywhere but have no clear way to evaluate what is real versus hype.",
        "Data moves between systems manually, creating delays and errors.",
        "You automated one piece of a process and created a new bottleneck downstream.",
        "Leadership wants AI adoption but the team does not trust or understand the tools.",
      ]}
      solutions={[
        {
          title: "Opportunity Assessment",
          desc: "We map your workflows to find where automation and AI produce measurable time savings—not where they look impressive in a demo.",
        },
        {
          title: "Vendor-Neutral Selection",
          desc: "We evaluate automation and AI tools against how your organization actually works, not against a sales pitch.",
        },
        {
          title: "Workflow-First Implementation",
          desc: "We define the process before the tool. Automation built on a broken workflow just makes the brokenness faster.",
        },
        {
          title: "Responsible AI Guidance",
          desc: "We help you understand where AI is appropriate, where it is risky, and how to govern its use across your organization.",
        },
        {
          title: "Adoption & Training",
          desc: "We train your team to trust and use the new systems so the investment actually sticks.",
        },
        {
          title: "Ongoing Optimization",
          desc: "Automation is not set-and-forget. We monitor, refine, and expand what works.",
        },
      ]}
      outcomes={[
        { metric: "10–20 hrs", label: "Saved per week per role" },
        { metric: "90%", label: "Reduction in manual data entry" },
        { metric: "3–7x", label: "Typical ROI" },
        { metric: "60 days", label: "To first measurable win" },
      ]}
      faqs={[
        {
          q: "Do we need to be a large organization to benefit from AI?",
          a: "No. Many of the highest-ROI automation opportunities exist in small and midsize organizations precisely because manual workarounds have accumulated over time. The right question is not size—it is where repetitive work is consuming skilled people's time.",
        },
        {
          q: "Will automation replace our staff?",
          a: "The goal is to remove repetitive work from skilled people so they can do higher-value work. In most mission-driven organizations, the constraint is capacity, not headcount. Automation creates capacity without reducing people.",
        },
        {
          q: "What if we already tried automation and it failed?",
          a: "Most automation failures stem from automating an undefined or broken process. We start by understanding the workflow, then determine whether automation is even the right answer before selecting a tool.",
        },
        {
          q: "How do you choose which AI tools to recommend?",
          a: "We are vendor-neutral. Recommendations are based on fit with your workflows, integration requirements, total cost, and your team's ability to adopt the tool—not on partner commissions.",
        },
      ]}
      relatedArticleSlugs={[
        "ai-for-small-business-reality-check",
        "why-your-new-tech-stack-failed",
      ]}
      relatedServices={[
        { label: "Technology Strategy", path: "/services/technology" },
        {
          label: "CRM & Workflow Systems",
          path: "/services/technology/crm-workflow",
        },
        {
          label: "Cybersecurity & Risk",
          path: "/services/technology/cybersecurity",
        },
        { label: "Technology Assessment", path: "/assessments/technology" },
      ]}
      expert={{
        name: "Ashley Clevenger",
        title: "Business Technology, Growth & Sales Operations",
        path: "/ashley-clevenger",
      }}
    />
  );
}
