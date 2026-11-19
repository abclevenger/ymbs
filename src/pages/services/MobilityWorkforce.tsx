import SubServicePage from "@/components/SubServicePage";

export default function MobilityWorkforcePage() {
  return (
    <SubServicePage
      path="/services/technology/mobility-workforce"
      pageTitle="Mobility & Workforce Enablement"
      title="Mobility & Workforce Enablement"
      description="Mobile, remote, and hybrid workforce technology strategy for nonprofits, law firms, and mission-driven organizations—vendor-neutral and built for how your team actually works."
      pillar="Technology"
      parent={{ label: "Technology", path: "/services/technology" }}
      heroSubtitle="Your team works from offices, homes, and the field. Your technology should follow them—not force them back to a desk. YMBS helps you enable a mobile workforce securely."
      problems={[
        "Your team cannot access the systems they need from outside the office.",
        "Staff use personal devices for work with no security or management policy.",
        "Remote and hybrid work exposed gaps your office setup used to hide.",
        "Your mobile tools are inconsistent across the team.",
        "You have no clear policy for device management, security, or support.",
        "Field staff are disconnected from the systems that support their work.",
      ]}
      solutions={[
        {
          title: "Workforce Needs Assessment",
          desc: "We understand how and where your team actually works, then design technology to support it.",
        },
        {
          title: "Device Strategy",
          desc: "We help you decide between company-managed and bring-your-own-device models based on security, cost, and usability.",
        },
        {
          title: "Secure Remote Access",
          desc: "We design access that lets your team work from anywhere without exposing your systems to unnecessary risk.",
        },
        {
          title: "Mobile Application Strategy",
          desc: "We ensure the tools your team needs on mobile actually work on mobile—not as cramped desktop versions.",
        },
        {
          title: "Policy & Documentation",
          desc: "We build clear policies for device management, security, and support so expectations are unambiguous.",
        },
        {
          title: "Support Model",
          desc: "We design a support approach that serves remote and field staff as well as those in the office.",
        },
      ]}
      outcomes={[
        { metric: "Anywhere", label: "Secure access to systems" },
        { metric: "Documented", label: "Device & security policy" },
        { metric: "Consistent", label: "Experience across devices" },
        { metric: "Supported", label: "Remote + field staff" },
      ]}
      faqs={[
        {
          q: "Should we provide devices or let staff use their own?",
          a: "It depends on your security requirements, budget, and team preferences. We help you evaluate both models and choose the one that balances security, cost, and usability for your organization.",
        },
        {
          q: "How do we secure work on personal devices?",
          a: "Through mobile device management, containerization, and clear policies that separate work data from personal data. We design the approach so personal privacy is respected while business data is protected.",
        },
        {
          q: "Can you help with field staff who have limited connectivity?",
          a: "Yes. We design systems that work offline or in low-connectivity environments and sync when a connection is available.",
        },
        {
          q: "What about support for remote workers?",
          a: "We design support models that do not assume everyone is in the same building. Remote and field staff deserve the same level of support as office staff.",
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
          label: "Enterprise Connectivity",
          path: "/services/technology/connectivity",
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
