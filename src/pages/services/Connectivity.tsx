import SubServicePage from "@/components/SubServicePage";

export default function ConnectivityPage() {
  return (
    <SubServicePage
      path="/services/technology/connectivity"
      pageTitle="Enterprise Connectivity & Communications"
      title="Enterprise Connectivity & Communications"
      description="Vendor-neutral connectivity, phone systems, and unified communications strategy for nonprofits, law firms, and mission-driven organizations."
      pillar="Technology"
      parent={{ label: "Technology", path: "/services/technology" }}
      heroSubtitle="When your internet, phones, or communications systems fail, your organization stops. YMBS helps you build connectivity that is reliable, right-sized, and built for how you actually work."
      problems={[
        "Your phone system is outdated, unreliable, or unable to support remote or hybrid work.",
        "You are overpaying for connectivity because no one has reviewed the contracts in years.",
        "Staff use personal phones or consumer apps for business communication—creating risk and inconsistency.",
        "Your internet is slow or unreliable at the worst moments.",
        "You have no clear picture of what you are paying for across connectivity vendors.",
        "A connectivity outage would halt your operations and you have no redundancy plan.",
      ]}
      solutions={[
        {
          title: "Connectivity Audit",
          desc: "We inventory what you have, what you are paying, and where the gaps and risks are.",
        },
        {
          title: "Vendor-Neutral Selection",
          desc: "We evaluate providers based on reliability, cost, and fit—not commissions. You stay free to choose your own carrier.",
        },
        {
          title: "Unified Communications",
          desc: "We help you consolidate phone, messaging, and video into systems your team will actually use.",
        },
        {
          title: "Redundancy & Resilience",
          desc: "We design connectivity that stays up when it matters most, with failover that is tested, not assumed.",
        },
        {
          title: "Contract & Cost Optimization",
          desc: "We review contracts to eliminate unnecessary services, negotiate better terms, and stop paying for what you do not use.",
        },
        {
          title: "Implementation & Adoption",
          desc: "We manage the transition and train your team so the new systems work from day one.",
        },
      ]}
      outcomes={[
        { metric: "30–40%", label: "Connectivity cost reduction" },
        { metric: "99.9%", label: "Target uptime" },
        { metric: "Unified", label: "Communications platform" },
        { metric: "Documented", label: "Vendor contracts & costs" },
      ]}
      faqs={[
        {
          q: "Do you sell phone or internet service?",
          a: "No. We are vendor-neutral advisors. We help you evaluate and select the right providers, but you maintain the relationship and the choice. We have no financial incentive to recommend one carrier over another.",
        },
        {
          q: "Can you help with remote and hybrid work setups?",
          a: "Yes. Modern connectivity and communications systems should support your team wherever they work. We help you build systems that do not depend on everyone being in the same building.",
        },
        {
          q: "How do you reduce connectivity costs?",
          a: "Most organizations are paying for services they no longer use, redundant connections, or contracts that were never renegotiated. We audit, eliminate waste, and renegotiate where appropriate.",
        },
        {
          q: "What if we need redundancy for critical operations?",
          a: "We design failover connectivity so a single outage does not halt your operations. The right level of redundancy depends on your risk profile and the cost of downtime for your organization.",
        },
      ]}
      relatedArticleSlugs={["why-your-new-tech-stack-failed"]}
      relatedServices={[
        { label: "Technology Strategy", path: "/services/technology" },
        {
          label: "Cybersecurity & Risk",
          path: "/services/technology/cybersecurity",
        },
        {
          label: "IoT & Physical Security",
          path: "/services/technology/iot-physical-security",
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
