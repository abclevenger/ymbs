import SubServicePage from "@/components/SubServicePage";

export default function SoftwareSolutionsPage() {
  return (
    <SubServicePage
      path="/services/technology/software-solutions"
      pageTitle="Software Selection & Implementation"
      title="Software Selection & Implementation"
      description="Vendor-neutral software evaluation, selection, and implementation for nonprofits, law firms, and mission-driven organizations—right-sized tools your team will actually use."
      pillar="Technology"
      parent={{ label: "Technology", path: "/services/technology" }}
      heroSubtitle="The wrong software choice costs tens of thousands of dollars, months of disruption, and the goodwill of your team. YMBS helps you choose and implement software that fits how you actually work."
      problems={[
        "You bought software based on a polished demo and it did not fit your real workflows.",
        "You have overlapping tools that do the same thing and none do it well.",
        "Implementation stalled because no one mapped the process before the tool.",
        "Your team created workarounds because the official software was too hard to use.",
        "You are locked into expensive contracts for tools you no longer need.",
        "You have no clear way to evaluate whether a new tool is worth the investment.",
      ]}
      solutions={[
        {
          title: "Requirements Definition",
          desc: "We map your workflows first, then define what the software must actually do—before evaluating a single vendor.",
        },
        {
          title: "Vendor-Neutral Evaluation",
          desc: "We evaluate platforms against your requirements, integration needs, and total cost—not sales demos.",
        },
        {
          title: "Total Cost Analysis",
          desc: "We account for implementation, training, migration, support, and switching costs—not just the sticker price.",
        },
        {
          title: "Implementation Management",
          desc: "We manage the rollout so it happens on schedule, with minimal disruption to your operations.",
        },
        {
          title: "Data Migration",
          desc: "We plan and execute data migration carefully so nothing is lost in the transition.",
        },
        {
          title: "Adoption & Training",
          desc: "We train your team and build adoption into the rollout so the investment actually sticks.",
        },
      ]}
      outcomes={[
        { metric: "Right-sized", label: "Tools that fit" },
        { metric: "30–40%", label: "Tool consolidation" },
        { metric: "Adopted", label: "By the people who use it" },
        { metric: "No lock-in", label: "You own the choice" },
      ]}
      faqs={[
        {
          q: "Do you resell software or earn commissions?",
          a: "No. We are vendor-neutral. We have no financial incentive to recommend one platform over another. You choose and own the relationship with the vendor.",
        },
        {
          q: "Can you help us decide whether to keep or replace a tool?",
          a: "Yes. We assess what you have against what you need and give you an honest recommendation. Sometimes the right answer is to configure what you already own rather than buy something new.",
        },
        {
          q: "How do you prevent implementation failure?",
          a: "Most failures come from buying before understanding the workflow. We define the process first, then match the tool to it, and manage adoption throughout. The technology is the easy part—the process and people are what determine success.",
        },
        {
          q: "What about custom software development?",
          a: "Custom development is sometimes the right answer, but rarely the first one. We help you determine whether an off-the-shelf solution fits before investing in custom builds.",
        },
      ]}
      relatedArticleSlugs={[
        "why-your-new-tech-stack-failed",
        "evaluating-legal-practice-management-software",
      ]}
      relatedServices={[
        { label: "Technology Strategy", path: "/services/technology" },
        {
          label: "CRM & Workflow Systems",
          path: "/services/technology/crm-workflow",
        },
        {
          label: "AI & Automation",
          path: "/services/technology/ai-automation",
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
