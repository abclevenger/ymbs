import SubServicePage from "@/components/SubServicePage";

export default function GovernancePage() {
  return (
    <SubServicePage
      path="/services/operations/governance"
      pageTitle="Board Governance & Decision Rights"
      title="Board Governance & Decision Rights"
      description="Governance structure, board accountability, and decision rights for nonprofits and mission-driven organizations—clear ownership, documented processes, and audit-ready operations."
      pillar="Operations"
      parent={{ label: "Operations", path: "/services/operations" }}
      heroSubtitle="Unclear governance is not a personality problem—it is a structure problem. YMBS helps boards and leadership define who decides, who acts, and how accountability actually works."
      problems={[
        "Board roles and decision rights are unclear, so every decision becomes a negotiation.",
        "The same topics reappear on every agenda because nothing actually gets decided.",
        "Key processes exist only in people's heads and are not documented.",
        "The board lacks the visibility and reporting it needs to govern effectively.",
        "Governance feels reactive rather than structured.",
        "Audit or funder requirements expose gaps in documentation and accountability.",
      ]}
      solutions={[
        {
          title: "Governance Review",
          desc: "We clarify board roles, decision rights, and the boundary between governance and operations.",
        },
        {
          title: "Decision Framework",
          desc: "We define which decisions belong to the board, which to the executive, and which require joint sign-off.",
        },
        {
          title: "Process Documentation",
          desc: "We document the core processes that keep the organization running so they are repeatable and transferable.",
        },
        {
          title: "Board Reporting",
          desc: "We build reporting that gives the board the visibility it needs without burying it in detail.",
        },
        {
          title: "Meeting Structure",
          desc: "We restructure agendas around decisions, not updates, so meetings produce action.",
        },
        {
          title: "Audit Readiness",
          desc: "We ensure governance documentation is complete, current, and defensible.",
        },
      ]}
      outcomes={[
        { metric: "Clear", label: "Decision rights" },
        { metric: "Documented", label: "Core processes" },
        { metric: "Decisive", label: "Board meetings" },
        { metric: "Audit-ready", label: "Governance records" },
      ]}
      faqs={[
        {
          q: "Is this only for nonprofits?",
          a: "Governance applies to any organization with a board or oversight body. While much of our work is with nonprofits, the principles of clear decision rights and documented accountability apply to law firms, associations, and mission-driven organizations as well.",
        },
        {
          q: "How do you avoid disrupting the board?",
          a: "We work alongside existing leadership, not against it. We clarify structure and facilitate alignment rather than imposing changes from the outside. The board owns the decisions; we provide the framework.",
        },
        {
          q: "Can you help with a dysfunctional board?",
          a: "Dysfunction is usually a structure problem, not a people problem. When decision rights, roles, and meeting structure are unclear, even capable people struggle. We address the structure first, which often resolves the symptoms.",
        },
        {
          q: "How long does a governance engagement take?",
          a: "A governance review typically runs 60–90 days, depending on complexity. Ongoing fractional support is available for organizations that want sustained governance leadership.",
        },
        {
          q: "Does YMBS provide legal review of bylaws or contracts?",
          a: "No. YMBS identifies governance gaps and documents processes, but we are not a law firm and do not provide legal advice. When a matter requires licensed counsel—bylaws, employment law, or compliance review—we coordinate the handoff to Mission Impact Legal or another appropriate legal provider under a separate engagement.",
        },
      ]}
      relatedArticleSlugs={[
        "nonprofit-board-governance-essentials",
        "getting-your-board-to-make-decisions",
      ]}
      relatedServices={[
        { label: "Operations & Governance", path: "/services/operations" },
        { label: "Strategic Planning", path: "/strategic-planning" },
        { label: "Fractional COO", path: "/fractional-coo" },
        { label: "Nonprofit Consulting", path: "/nonprofit-consulting" },
      ]}
      expert={{
        name: "Thania Clevenger",
        title: "Fractional COO | Operations & Governance",
        path: "/thania-clevenger",
      }}
    />
  );
}
