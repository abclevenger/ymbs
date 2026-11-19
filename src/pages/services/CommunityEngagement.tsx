import SubServicePage from "@/components/SubServicePage";

export default function CommunityEngagementPage() {
  return (
    <SubServicePage
      path="/services/leadership/community-engagement"
      pageTitle="Community Engagement & Stakeholder Strategy"
      title="Community Engagement & Stakeholder Strategy"
      description="Community engagement, stakeholder alignment, and public meeting strategy for nonprofits, law firms, and mission-driven organizations."
      pillar="Leadership"
      parent={{ label: "Leadership", path: "/services/leadership" }}
      heroSubtitle="When your organization needs to engage a community—around a decision, a transition, or a sensitive issue—strategy and preparation determine whether you build trust or lose it."
      problems={[
        "You need to engage a community on a sensitive issue and have no plan.",
        "Public meetings turn adversarial because the messaging was not prepared.",
        "Stakeholders hear different things from different leaders.",
        "You do not know who your key stakeholders are or what they care about.",
        "Community concerns are dismissed and trust erodes.",
        "Leadership is unprepared for difficult public questions.",
      ]}
      solutions={[
        {
          title: "Stakeholder Mapping",
          desc: "We identify who matters, what they care about, and how to reach them.",
        },
        {
          title: "Engagement Strategy",
          desc: "We design an approach that builds trust rather than checking a box.",
        },
        {
          title: "Messaging Preparation",
          desc: "We prepare leadership with clear, honest messaging and difficult-question responses.",
        },
        {
          title: "Meeting Facilitation",
          desc: "We facilitate difficult conversations so they produce understanding, not conflict.",
        },
        {
          title: "Communication Alignment",
          desc: "We ensure all leaders and spokespeople deliver the same message.",
        },
        {
          title: "Follow-Through",
          desc: "We help you close the loop with stakeholders so engagement leads to trust, not cynicism.",
        },
      ]}
      outcomes={[
        { metric: "Mapped", label: "Key stakeholders" },
        { metric: "Prepared", label: "Leadership messaging" },
        { metric: "Aligned", label: "One voice across leaders" },
        { metric: "Trusted", label: "Community engagement" },
      ]}
      faqs={[
        {
          q: "When should we start planning community engagement?",
          a: "Before you need it. The worst time to plan engagement is when a community is already upset. We help you build the strategy and relationships before the difficult moment arrives.",
        },
        {
          q: "Can you help with a meeting that is already expected to be difficult?",
          a: "Yes. We prepare leadership for the hardest questions, align the message, and can facilitate the meeting itself so it produces understanding rather than conflict.",
        },
        {
          q: "Is this the same as public relations?",
          a: "No. PR focuses on messaging outward; community engagement focuses on building trust through genuine two-way communication. They work together but serve different purposes.",
        },
        {
          q: "How do you measure whether engagement worked?",
          a: "We define success criteria in advance—trust indicators, stakeholder feedback, resolution of concerns—so engagement is measured by outcomes, not attendance.",
        },
      ]}
      relatedArticleSlugs={["getting-your-board-to-make-decisions"]}
      relatedServices={[
        {
          label: "Leadership & Organizational Strategy",
          path: "/services/leadership",
        },
        {
          label: "Executive Communications",
          path: "/services/communications/executive-communications",
        },
        { label: "Strategic Planning", path: "/strategic-planning" },
        { label: "Nestor Ortiz", path: "/nestor-ortiz" },
      ]}
      expert={{
        name: "Nestor Ortiz",
        title: "Leadership, Organizational Development & Executive Strategy",
        path: "/nestor-ortiz",
      }}
    />
  );
}
