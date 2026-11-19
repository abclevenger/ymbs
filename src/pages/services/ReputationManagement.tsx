import SubServicePage from "@/components/SubServicePage";

export default function ReputationManagementPage() {
  return (
    <SubServicePage
      path="/services/communications/reputation-management"
      pageTitle="Online Reputation Management"
      title="Online Reputation Management"
      description="Reputation strategy and monitoring for nonprofits, law firms, and mission-driven organizations—protect trust before a crisis, not after."
      pillar="Communications"
      parent={{ label: "Communications", path: "/services/communications" }}
      heroSubtitle="Your reputation is built over years and damaged in hours. YMBS helps you understand, monitor, and protect how your organization is perceived—before a moment becomes a crisis."
      problems={[
        "You do not know what is being said about your organization online.",
        "A single negative review or article dominates how people find you.",
        "You have no plan for responding to public criticism or a crisis.",
        "Your leadership is unprepared for media questions or difficult public moments.",
        "Reputation feels like something that happens to you, not something you manage.",
        "A reputation event would damage funding, trust, or client relationships and you are unprepared.",
      ]}
      solutions={[
        {
          title: "Reputation Assessment",
          desc: "We map what exists online about your organization and identify exposures before they become problems.",
        },
        {
          title: "Monitoring Strategy",
          desc: "We set up practical monitoring so you know what is being said and can respond before it escalates.",
        },
        {
          title: "Crisis Readiness",
          desc: "We build response plans so when something happens, you act from a plan—not from panic.",
        },
        {
          title: "Executive Preparation",
          desc: "We prepare leaders for media interviews, public statements, and difficult questions.",
        },
        {
          title: "Stakeholder Communication",
          desc: "We help you communicate with boards, funders, clients, and the public in ways that protect trust.",
        },
        {
          title: "Ongoing Counsel",
          desc: "Reputation is not a one-time fix. We provide ongoing advisory as situations evolve.",
        },
      ]}
      outcomes={[
        { metric: "Aware", label: "Of your online reputation" },
        { metric: "Prepared", label: "Crisis response plan" },
        { metric: "Ready", label: "Executive media preparation" },
        { metric: "Trusted", label: "Stakeholder communication" },
      ]}
      faqs={[
        {
          q: "Is this the same as SEO?",
          a: "No. SEO helps you be found; reputation management helps ensure what people find is accurate and fair. They work together, but they are different disciplines. We address SEO separately where relevant.",
        },
        {
          q: "Can you remove negative content about us?",
          a: "We cannot guarantee removal of legitimate content, and we will not make false promises. We focus on accurate representation, response strategy, and building a reputation that withstands criticism. Where content is false or violates platform policies, we help you pursue the appropriate channels.",
        },
        {
          q: "What if a crisis is already happening?",
          a: "We help you respond with a clear plan, honest messaging, and disciplined execution. The best time to prepare was before the crisis; the second best time is now.",
        },
        {
          q: "How is this different from traditional PR?",
          a: "Traditional PR often focuses on promotion. Reputation management focuses on trust—protecting the credibility that lets your organization operate. We lead with readiness, not press releases.",
        },
      ]}
      relatedArticleSlugs={[
        "crisis-communications-readiness",
        "aligning-internal-communications-change",
      ]}
      relatedServices={[
        { label: "Communications Strategy", path: "/services/communications" },
        {
          label: "Executive Readiness Intensive",
          path: "/executive-readiness-intensive",
        },
        {
          label: "Website Development & SEO",
          path: "/services/technology/website-seo",
        },
        { label: "Michelle Griffith", path: "/michelle-griffith" },
      ]}
      expert={{
        name: "Michelle Griffith",
        title: "Strategic Communications, Operations & Growth",
        path: "/michelle-griffith",
      }}
    />
  );
}
