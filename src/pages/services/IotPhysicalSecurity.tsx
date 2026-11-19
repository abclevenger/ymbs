import SubServicePage from "@/components/SubServicePage";

export default function IotPhysicalSecurityPage() {
  return (
    <SubServicePage
      path="/services/technology/iot-physical-security"
      pageTitle="IoT & Physical Security"
      title="IoT & Physical Security"
      description="IoT, physical security, and smart facility systems for nonprofits, law firms, and mission-driven organizations—vendor-neutral strategy and implementation."
      pillar="Technology"
      parent={{ label: "Technology", path: "/services/technology" }}
      heroSubtitle="Physical security and smart facility systems should protect your people and assets without creating new digital risk. YMBS helps you design and deploy them correctly."
      problems={[
        "Your physical security systems—cameras, access control, alarms—are outdated or disconnected.",
        "You added smart devices without considering the cybersecurity implications.",
        "You have no clear picture of who has access to your facilities and systems.",
        "Your IoT devices are on the same network as sensitive business data.",
        "You need to upgrade physical security but do not know what is worth the investment.",
        "A physical security incident would be costly and you have no documented response plan.",
      ]}
      solutions={[
        {
          title: "Physical Security Assessment",
          desc: "We evaluate your cameras, access control, alarms, and facility systems against your actual risk profile.",
        },
        {
          title: "Network Segmentation",
          desc: "We ensure IoT and physical security devices are isolated from your business data network to prevent lateral attacks.",
        },
        {
          title: "Vendor-Neutral Selection",
          desc: "We recommend physical security platforms based on reliability, integration, and total cost—not reseller margins.",
        },
        {
          title: "Access Management",
          desc: "We help you document and control who has access to facilities and systems, and remove access when it is no longer needed.",
        },
        {
          title: "Integration",
          desc: "We connect physical and digital security so incidents trigger the right response across both.",
        },
        {
          title: "Incident Planning",
          desc: "We build response plans that cover both physical and digital dimensions of a security event.",
        },
      ]}
      outcomes={[
        { metric: "Documented", label: "Access & security posture" },
        { metric: "Isolated", label: "IoT from business network" },
        { metric: "Integrated", label: "Physical + digital security" },
        { metric: "Prepared", label: "Incident response plan" },
      ]}
      faqs={[
        {
          q: "Do you install cameras and access control hardware?",
          a: "We design the strategy and manage vendor selection and integration. Physical installation is handled by qualified partners, while we ensure the systems are specified, secured, and integrated correctly.",
        },
        {
          q: "Why does IoT create cybersecurity risk?",
          a: "Many IoT devices ship with weak default security and receive infrequent updates. When they sit on the same network as your business data, a compromised device can become a doorway into everything else. Network segmentation is the fix.",
        },
        {
          q: "Can you help with compliance requirements for physical security?",
          a: "Yes. We help you document your physical security posture to meet funder, client, or regulatory requirements where applicable.",
        },
        {
          q: "How do you choose which physical security systems to recommend?",
          a: "We evaluate reliability, integration capability, total cost of ownership, and your team's ability to manage the system. We have no financial incentive to recommend one vendor over another.",
        },
      ]}
      relatedArticleSlugs={["cybersecurity-basics-mission-driven-orgs"]}
      relatedServices={[
        { label: "Technology Strategy", path: "/services/technology" },
        {
          label: "Cybersecurity & Risk",
          path: "/services/technology/cybersecurity",
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
