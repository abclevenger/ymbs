import CaseStudyTemplate, {
  CaseStudyData,
} from "@/components/CaseStudyTemplate";

const data: CaseStudyData = {
  slug: "law-firm-website-transformation",
  client: "Florida Law Firm — Website Transformation",
  industry: "Legal Services",
  tags: ["Technology", "Communications"],
  problem:
    "The firm's website was built years ago by a freelancer. It looked professional but wasn't qualifying leads, booking conversations, or turning traffic into measurable revenue.",
  impact:
    "The website functioned as a digital brochure—not a growth system. Traffic was arriving but converting at a fraction of what it should have been. There was no clear lead ownership or follow-up process.",
  approach:
    "YMBS rebuilt the website as an integrated lead generation system with conversion-focused architecture, SEO optimization, and CRM-connected forms.",
  implementation:
    "Redesigned with conversion-first layout, implemented technical and local SEO, connected all forms directly to the CRM with automated routing, and built a booking pipeline with automated follow-up sequences.",
  results: [
    "Website transformed from digital brochure to lead generation system",
    "All forms connected directly to CRM with automated routing",
    "Technical and local SEO foundation established",
    "Clear lead ownership and follow-up process",
  ],
  disciplines: ["Technology", "Communications"],
  pillarContributions: [
    {
      discipline: "Technology",
      changes:
        "Rebuilt the website as an integrated lead system—conversion-first architecture, technical and local SEO, and CRM-connected forms with automated routing.",
      partner: "Ashley Clevenger",
      partnerHref: "/ashley-clevenger",
    },
    {
      discipline: "Communications",
      changes:
        "Reshaped the firm's messaging so the site qualified leads and booked conversations rather than acting as a passive digital brochure.",
      partner: "Michelle Griffith",
      partnerHref: "/michelle-griffith",
    },
  ],
  scaleDimensions: ["Structure", "Alignment"],
  relatedServices: [
    {
      label: "Website Development & SEO",
      href: "/services/technology/website-seo",
    },
    { label: "Law Firm Technology", href: "/law-firm-technology" },
    { label: "Communications", href: "/services/communications" },
  ],
};

export default function CaseStudyLawFirmWebsite() {
  return <CaseStudyTemplate data={data} />;
}
