import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

export default function Sitemap() {
  const sections = [
    {
      heading: "Company",
      links: [
        { title: "Home", path: "/" },
        { title: "About / Team", path: "/team" },
        { title: "Company Profile", path: "/company-profile" },
        { title: "Client Results", path: "/client-results" },
        { title: "Portfolio", path: "/portfolio" },
        { title: "Trusted Specialist Network", path: "/partners" },
        { title: "Insights & Resources", path: "/insights" },
        { title: "Contact / Get Clarity", path: "/contact" },
      ],
    },
    {
      heading: "Who We Help",
      links: [
        { title: "Nonprofit Consulting", path: "/nonprofit-consulting" },
        {
          title: "Law Firm Technology Consulting",
          path: "/law-firm-technology",
        },
        {
          title: "Professional Services",
          path: "/professional-services",
        },
        {
          title: "Mission-Driven Organizations",
          path: "/mission-driven-organizations",
        },
        { title: "Fractional COO", path: "/fractional-coo" },
      ],
    },
    {
      heading: "What We Do",
      links: [
        { title: "Operations & Governance", path: "/services/operations" },
        {
          title: "Technology Strategy & Systems",
          path: "/services/technology",
        },
        {
          title: "Executive Communications & Reputation",
          path: "/services/communications",
        },
        {
          title: "Leadership & Organizational Strategy",
          path: "/services/leadership",
        },
        { title: "Strategic Planning", path: "/strategic-planning" },
        { title: "Mission Foundation™", path: "/mission-foundation" },
        {
          title: "Integrated Executive Advisory",
          path: "/integrated-executive-advisory",
        },
        { title: "SCALE™ Framework", path: "/scale" },
        { title: "ELEVATION Platform", path: "/elevation" },
        { title: "SEO Services", path: "/services/seo" },
        {
          title: "AI & Automation",
          path: "/services/technology/ai-automation",
        },
        {
          title: "Cybersecurity & Risk",
          path: "/services/technology/cybersecurity",
        },
        {
          title: "Connectivity & Comms",
          path: "/services/technology/connectivity",
        },
        { title: "CRM & Workflow", path: "/services/technology/crm-workflow" },
        { title: "Website & SEO", path: "/services/technology/website-seo" },
        {
          title: "IoT & Physical Security",
          path: "/services/technology/iot-physical-security",
        },
        {
          title: "Digital Signage",
          path: "/services/technology/digital-signage",
        },
        {
          title: "Software Selection",
          path: "/services/technology/software-solutions",
        },
        {
          title: "Mobility & Workforce",
          path: "/services/technology/mobility-workforce",
        },
        {
          title: "Reputation Management",
          path: "/services/communications/reputation-management",
        },
        {
          title: "Executive Communications",
          path: "/services/communications/executive-communications",
        },
        { title: "Board Governance", path: "/services/operations/governance" },
        {
          title: "Community Engagement",
          path: "/services/leadership/community-engagement",
        },
      ],
    },
    {
      heading: "Solutions",
      links: [
        {
          title: "Organizational Growth Readiness",
          path: "/solutions/organizational-growth",
        },
        { title: "AI Adoption", path: "/solutions/ai-adoption" },
        {
          title: "Technology Modernization",
          path: "/solutions/technology-modernization",
        },
        {
          title: "Organizational Change",
          path: "/solutions/organizational-change",
        },
      ],
    },
    {
      heading: "Assessments",
      links: [
        {
          title: "All Assessments — Find the Real Problem",
          path: "/assessments",
        },
        { title: "Assessment Dashboard", path: "/assessments/dashboard" },
        { title: "SCALE™ Readiness Assessment", path: "/scale/assessment" },
        { title: "System Health Quiz", path: "/assessments/system-health" },
        {
          title: "Cyber Readiness Assessment",
          path: "/assessments/cyber-readiness",
        },
        { title: "Technology Audit", path: "/assessments/technology" },
        { title: "SEO Audit", path: "/assessments/seo" },
        { title: "Assessment Results", path: "/assessments/results" },
      ],
    },
    {
      heading: "Case Studies",
      links: [
        { title: "All Case Studies", path: "/client-results" },
        {
          title: "Law Firm Intake & CRM Automation",
          path: "/case-studies/law-firm-intake-automation",
        },
        {
          title: "Nonprofit Technology Consolidation",
          path: "/case-studies/nonprofit-tech-consolidation",
        },
        {
          title: "Law Firm Website Transformation",
          path: "/case-studies/law-firm-website-transformation",
        },
        {
          title: "Nonprofit Governance & Operations",
          path: "/case-studies/nonprofit-governance-operations",
        },
        {
          title: "Executive Readiness & Stakeholder Comms",
          path: "/case-studies/executive-readiness-stakeholder-comms",
        },
      ],
    },
    {
      heading: "Signature Offers",
      links: [
        {
          title: "Executive Readiness Intensive",
          path: "/executive-readiness-intensive",
        },
        {
          title: "Law Firm Authority & PR System",
          path: "/law-firm-pr-system",
        },
      ],
    },
    {
      heading: "Team Profiles",
      links: [
        {
          title: "Thania Clevenger — Fractional COO",
          path: "/thania-clevenger",
        },
        {
          title:
            "Ashley Clevenger — Business Technology, Growth & Sales Operations",
          path: "/ashley-clevenger",
        },
        {
          title:
            "Michelle Griffith — Strategic Communications, Operations & Growth",
          path: "/michelle-griffith",
        },
        {
          title:
            "Nestor Ortiz — Leadership, Organizational Development & Executive Strategy",
          path: "/nestor-ortiz",
        },
      ],
    },
    {
      heading: "Resources & Support",
      links: [
        { title: "Support Portal", path: "/support" },
        { title: "AI Knowledge Base", path: "/llm-knowledge" },
        { title: "Technology Suppliers", path: "/suppliers" },
        { title: "Analytics Dashboard", path: "/analytics-dashboard" },
        { title: "Portfolio", path: "/portfolio" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { title: "Privacy Policy", path: "/policy" },
        { title: "Terms of Service", path: "/terms" },
        { title: "Accessibility", path: "/accessibility" },
        { title: "A2P Services", path: "/a2p" },
      ],
    },
  ];

  return (
    <div className="py-24 px-6 max-w-5xl mx-auto min-h-[80vh]">
      <SEOHead
        title="Sitemap | YMBS"
        description="Complete sitemap of Yellow Mountain Business Solutions—operations, technology, communications, leadership, assessments, and company pages."
        canonical="/sitemap"
      />
      <h1
        className="text-4xl md:text-5xl font-bold mb-4 text-brand-dark"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Sitemap
      </h1>
      <p className="text-lg text-zinc-600 mb-12">
        A complete list of pages on the Yellow Mountain Business Solutions
        website.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
        {sections.map((section, si) => (
          <div key={si}>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              {section.heading}
            </h2>
            <ul className="space-y-3">
              {section.links.map((link, li) => (
                <li key={li} className="border-b border-zinc-100 pb-2">
                  <Link
                    to={link.path}
                    className="text-base font-medium text-zinc-700 hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
