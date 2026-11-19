import SubServicePage from "@/components/SubServicePage";

export default function WebsiteSeoPage() {
  return (
    <SubServicePage
      path="/services/technology/website-seo"
      pageTitle="Website Development & SEO"
      title="Website Development & SEO"
      description="Websites and SEO for nonprofits, law firms, and mission-driven organizations—built to qualify leads, book conversations, and turn traffic into measurable revenue."
      pillar="Technology"
      parent={{ label: "Technology", path: "/services/technology" }}
      heroSubtitle="If your website is not qualifying leads, booking conversations, and turning traffic into measurable revenue, it is not a growth system. It is a digital brochure."
      problems={[
        "Your website looks professional but generates no leads or inquiries.",
        "You cannot be found for the searches your ideal clients actually use.",
        "Your site was built by a designer, not built to convert.",
        "You have no idea where your traffic comes from or what it does.",
        "Your site is slow, hard to update, or broken on mobile.",
        "You paid for SEO once and saw no lasting results.",
      ]}
      solutions={[
        {
          title: "Conversion-First Design",
          desc: "We build sites designed to turn visitors into conversations—not just to look good.",
        },
        {
          title: "SEO Strategy",
          desc: "We target the searches your ideal clients actually use, with content and structure built to rank and convert.",
        },
        {
          title: "Lead Capture Systems",
          desc: "Forms, booking, and intake systems that make it easy for qualified visitors to take the next step.",
        },
        {
          title: "Analytics & Attribution",
          desc: "We install tracking so you know where leads come from and which pages produce business.",
        },
        {
          title: "Performance & Accessibility",
          desc: "Fast, mobile-first, and accessible sites that perform for users and search engines.",
        },
        {
          title: "Ongoing Optimization",
          desc: "SEO and conversion are not one-time projects. We monitor, refine, and improve over time.",
        },
      ]}
      outcomes={[
        { metric: "2–4x", label: "Increase in qualified inquiries" },
        { metric: "Page 1", label: "For target search terms" },
        { metric: "Measurable", label: "Lead attribution" },
        { metric: "Mobile-first", label: "Fast & accessible" },
      ]}
      faqs={[
        {
          q: "Do you build on a specific platform?",
          a: "We are platform-agnostic. The right platform depends on your needs, budget, and who will maintain the site. We help you choose and can build on several platforms.",
        },
        {
          q: "How long until we see SEO results?",
          a: "SEO is a compounding investment. Meaningful movement typically begins within 60–90 days, with stronger results building over 6–12 months. Anyone promising instant results is not being honest.",
        },
        {
          q: "Can you fix an existing site rather than rebuild?",
          a: "Often yes. We assess whether your current site can be optimized or whether a rebuild is the better investment. We do not recommend rebuilding unless it is genuinely necessary.",
        },
        {
          q: "Do you offer ongoing SEO and maintenance?",
          a: "Yes. SEO and conversion optimization are ongoing, not one-time. We offer continued optimization, content, and technical maintenance.",
        },
      ]}
      relatedArticleSlugs={["why-your-new-tech-stack-failed"]}
      relatedServices={[
        { label: "Technology Strategy", path: "/services/technology" },
        {
          label: "CRM & Workflow Systems",
          path: "/services/technology/crm-workflow",
        },
        {
          label: "Online Reputation Management",
          path: "/services/communications/reputation-management",
        },
        { label: "SEO Assessment", path: "/assessments/seo" },
      ]}
      expert={{
        name: "Ashley Clevenger",
        title: "Business Technology, Growth & Sales Operations",
        path: "/ashley-clevenger",
      }}
    />
  );
}
