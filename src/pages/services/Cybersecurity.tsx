import SubServicePage from "@/components/SubServicePage";

export default function CybersecurityPage() {
  return (
    <SubServicePage
      path="/services/technology/cybersecurity"
      pageTitle="Cybersecurity & Risk Protection"
      title="Cybersecurity & Risk Protection"
      description="Vendor-neutral cybersecurity strategy for nonprofits, law firms, and mission-driven organizations—protect sensitive data, reduce breach risk, and build a defensible security posture."
      pillar="Technology"
      parent={{ label: "Technology", path: "/services/technology" }}
      heroSubtitle="You do not need an enterprise budget to build a defensible security posture. You need the right fundamentals, applied to how your organization actually operates."
      problems={[
        "You hold sensitive client, donor, or operational data but are unsure how well it is protected.",
        "Security decisions are reactive—made after an incident or a near-miss.",
        "You have security tools but no clear strategy tying them to actual risk.",
        "Staff reuse passwords, share logins, or click links they should not.",
        "You need to demonstrate security readiness to a board, funder, or client but have no documentation.",
        "A breach would be catastrophic, but no one owns prevention.",
      ]}
      solutions={[
        {
          title: "Risk Assessment",
          desc: "We identify your highest-risk exposures—the ones most likely to occur and most damaging if they do—so you invest in what matters.",
        },
        {
          title: "Security Fundamentals",
          desc: "Multi-factor authentication, password management, patch management, and backups. The basics that prevent the vast majority of breaches.",
        },
        {
          title: "Policy & Documentation",
          desc: "We help you document security practices so they are repeatable, auditable, and defensible to boards, funders, and clients.",
        },
        {
          title: "Vendor Risk Review",
          desc: "Your data lives in your vendors' systems. We evaluate whether your technology partners meet an acceptable security standard.",
        },
        {
          title: "Incident Response Planning",
          desc: "When something goes wrong, the plan should already exist. We build simple, practical response plans your team can actually execute.",
        },
        {
          title: "Staff Training",
          desc: "Most breaches start with a human. We build a practical training cadence that changes behavior—not a once-a-year compliance video.",
        },
      ]}
      outcomes={[
        { metric: "90%", label: "Of breaches preventable with fundamentals" },
        { metric: "MFA", label: "On every critical account" },
        { metric: "Documented", label: "Security posture & policies" },
        { metric: "Prepared", label: "Incident response plan" },
      ]}
      faqs={[
        {
          q: "Are we too small to be a target?",
          a: "No. Mission-driven organizations are often preferred targets precisely because they underinvest in security while holding sensitive data. Attackers do not target size—they target vulnerability.",
        },
        {
          q: "Do we need expensive enterprise security tools?",
          a: "Usually not. The vast majority of breaches are preventable with fundamentals that cost little or nothing. We start with the basics and only recommend advanced tools where your actual risk profile justifies them.",
        },
        {
          q: "Can you help us meet funder or client security requirements?",
          a: "Yes. We help you build a documented, defensible security posture that demonstrates readiness to boards, funders, and clients who require it.",
        },
        {
          q: "What if we already had a breach or suspect one?",
          a: "We help you assess the scope, contain the exposure, and build a plan to prevent recurrence. If forensic or legal expertise is required, we coordinate with the appropriate licensed professionals.",
        },
      ]}
      relatedArticleSlugs={[
        "cybersecurity-basics-mission-driven-orgs",
        "law-firm-cybersecurity-requirements",
      ]}
      relatedServices={[
        { label: "Technology Strategy", path: "/services/technology" },
        {
          label: "AI & Automation",
          path: "/services/technology/ai-automation",
        },
        {
          label: "Enterprise Connectivity",
          path: "/services/technology/connectivity",
        },
        {
          label: "Cyber Readiness Assessment",
          path: "/assessments/cyber-readiness",
        },
      ]}
      expert={{
        name: "Ashley Clevenger",
        title: "Business Technology, Growth & Sales Operations",
        path: "/ashley-clevenger",
      }}
    />
  );
}
