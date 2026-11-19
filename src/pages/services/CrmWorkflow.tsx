import SubServicePage from "@/components/SubServicePage";

export default function CrmWorkflowPage() {
  return (
    <SubServicePage
      path="/services/technology/crm-workflow"
      pageTitle="CRM & Workflow Systems"
      title="CRM & Workflow Systems"
      description="Vendor-neutral CRM, workflow, and systems integration for nonprofits, law firms, and mission-driven organizations—fewer disconnected tools and systems people actually use."
      pillar="Technology"
      parent={{ label: "Technology", path: "/services/technology" }}
      heroSubtitle="Too many disconnected tools. Too much manual data entry. Too little visibility. YMBS helps you build systems that work together and that your team will actually use."
      problems={[
        "You use five tools that each do part of the job and none talk to each other.",
        "Data is entered manually into multiple systems, creating errors and delays.",
        "You cannot see your pipeline, intake, or operations in one place.",
        "Your CRM was purchased but never fully implemented or adopted.",
        "Staff created workarounds because the official systems were too hard to use.",
        "You have no clear picture of which tools are worth what you pay for them.",
      ]}
      solutions={[
        {
          title: "Systems Inventory",
          desc: "We map every tool you use, what it costs, what it does, and whether anyone actually uses it.",
        },
        {
          title: "Workflow Mapping",
          desc: "We document how work actually moves through your organization—then design systems around reality, not a demo.",
        },
        {
          title: "Vendor-Neutral Selection",
          desc: "We recommend CRM and workflow platforms based on fit, integration, and total cost—not commissions.",
        },
        {
          title: "Integration & Automation",
          desc: "We connect your systems so data flows automatically and manual entry is eliminated where possible.",
        },
        {
          title: "Implementation & Migration",
          desc: "We manage the transition from your old systems to the new ones with minimal disruption.",
        },
        {
          title: "Adoption & Training",
          desc: "We train your team and build adoption into the rollout so the new system sticks.",
        },
      ]}
      outcomes={[
        { metric: "30–40%", label: "Tool consolidation" },
        { metric: "90%", label: "Less manual data entry" },
        { metric: "One view", label: "Of pipeline & operations" },
        { metric: "Adopted", label: "By the people who use it" },
      ]}
      faqs={[
        {
          q: "Do you recommend a specific CRM?",
          a: "No. We are vendor-neutral. The right CRM depends on your workflows, budget, integration needs, and team. We evaluate options against your reality, not against a partner program.",
        },
        {
          q: "Can you fix a CRM we already purchased but never fully implemented?",
          a: "Yes. Many organizations have a powerful CRM sitting underused. We assess what you have, configure it properly, and drive adoption rather than starting over.",
        },
        {
          q: "How do you handle data migration from old systems?",
          a: "We plan migration carefully—mapping fields, cleaning data, and testing before going live. The goal is a clean transition with no lost records.",
        },
        {
          q: "What if our team resists the new system?",
          a: "Resistance usually means the system makes people's jobs harder. We design adoption into the rollout, train early, and adjust based on real feedback. If the system is right and the rollout is handled well, adoption follows.",
        },
      ]}
      relatedArticleSlugs={[
        "crm-selection-nonprofits-guide",
        "why-your-new-tech-stack-failed",
      ]}
      relatedServices={[
        { label: "Technology Strategy", path: "/services/technology" },
        {
          label: "AI & Automation",
          path: "/services/technology/ai-automation",
        },
        {
          label: "Website Development & SEO",
          path: "/services/technology/website-seo",
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
