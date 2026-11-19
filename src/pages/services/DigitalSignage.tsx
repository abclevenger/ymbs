import SubServicePage from "@/components/SubServicePage";

export default function DigitalSignagePage() {
  return (
    <SubServicePage
      path="/services/technology/digital-signage"
      pageTitle="Digital Signage & Display Systems"
      title="Digital Signage & Display Systems"
      description="Digital signage and display system strategy for nonprofits, law firms, and mission-driven organizations—vendor-neutral selection, deployment, and content management."
      pillar="Technology"
      parent={{ label: "Technology", path: "/services/technology" }}
      heroSubtitle="Digital signage should communicate, not just display. YMBS helps you select, deploy, and manage display systems that serve your audience and your operations."
      problems={[
        "You have screens that show outdated or irrelevant content because no one manages them.",
        "You purchased displays without a content or management strategy.",
        "Your signage runs on consumer devices that fail or cannot be managed centrally.",
        "You need to communicate across multiple locations but have no centralized system.",
        "The content on your screens does not reflect your current messaging or brand.",
        "You are unsure whether the investment in digital signage is actually worth it.",
      ]}
      solutions={[
        {
          title: "Needs Assessment",
          desc: "We determine whether digital signage serves a real communication need and where it delivers measurable value.",
        },
        {
          title: "Vendor-Neutral Selection",
          desc: "We evaluate display, media player, and content management platforms based on reliability, scalability, and total cost.",
        },
        {
          title: "Centralized Management",
          desc: "We design systems you can manage from one place across all your locations.",
        },
        {
          title: "Content Strategy",
          desc: "We help you define what your screens should communicate and how to keep it current.",
        },
        {
          title: "Deployment & Integration",
          desc: "We manage installation, network integration, and content scheduling so the system works from launch.",
        },
        {
          title: "Ongoing Support",
          desc: "We provide training and support so your team can keep content fresh without calling a vendor every time.",
        },
      ]}
      outcomes={[
        { metric: "Centralized", label: "Multi-location management" },
        { metric: "Current", label: "Content that stays relevant" },
        { metric: "Right-sized", label: "No overbuying on hardware" },
        { metric: "Managed", label: "By your own team" },
      ]}
      faqs={[
        {
          q: "Do we really need digital signage?",
          a: "Sometimes. We start by assessing whether signage solves a real communication problem for your audience. If it does not, we will tell you rather than sell you hardware.",
        },
        {
          q: "Can you help with content creation?",
          a: "We help define the content strategy and can support creation. The goal is a system your team can keep current without depending on an outside vendor for every update.",
        },
        {
          q: "What platforms do you recommend?",
          a: "We are vendor-neutral. The right platform depends on your locations, content needs, and who will manage it. We evaluate options against your requirements, not against reseller margins.",
        },
        {
          q: "Can signage integrate with our other systems?",
          a: "Often yes. Modern digital signage can integrate with scheduling, emergency alerts, and data dashboards. We design integration where it adds real value.",
        },
      ]}
      relatedArticleSlugs={["why-your-new-tech-stack-failed"]}
      relatedServices={[
        { label: "Technology Strategy", path: "/services/technology" },
        {
          label: "Enterprise Connectivity",
          path: "/services/technology/connectivity",
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
