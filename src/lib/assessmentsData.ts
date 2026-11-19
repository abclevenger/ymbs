/**
 * Assessment catalog and symptom-routing data for the /assessments hub.
 *
 * Only assessments that actually exist are marked `live: true` and given an
 * `href`. Disciplines without a live self-serve tool offer a consultation CTA
 * instead — never a fabricated quiz.
 */

export interface AssessmentItem {
  name: string;
  desc: string;
  href?: string;
  cta: string;
  live: boolean;
}

export interface AssessmentGroup {
  category: string;
  icon: string;
  blurb: string;
  items: AssessmentItem[];
}

export const assessmentCatalog: AssessmentGroup[] = [
  {
    category: "Organizational",
    icon: "Compass",
    blurb:
      "When the problem crosses departments, start here. The SCALE™ Assessment looks across all four disciplines.",
    items: [
      {
        name: "SCALE™ / Organizational Readiness Assessment",
        desc: "Diagnoses the whole organization across Structure, Culture, Alignment, Liability & Governance, and Execution. Free, under 10 minutes.",
        href: "/scale/assessment",
        cta: "Take the Assessment",
        live: true,
      },
    ],
  },
  {
    category: "Operations",
    icon: "Settings",
    blurb:
      "Process, documentation, governance, and accountability. No live self-serve tool yet—start with a consultation.",
    items: [
      {
        name: "Operational Readiness Consultation",
        desc: "A guided review of workflows, documentation gaps, and governance readiness with Thania Clevenger.",
        cta: "Talk About Operations",
        live: false,
      },
    ],
  },
  {
    category: "Technology",
    icon: "Cpu",
    blurb:
      "Assess, right-size, and secure your technology without the vendor chaos.",
    items: [
      {
        name: "Technology Assessment",
        desc: "Evaluates your stack, integrations, vendor strategy, and where technology is creating friction instead of value.",
        href: "/assessments/technology",
        cta: "Take the Assessment",
        live: true,
      },
      {
        name: "Cybersecurity Readiness Assessment",
        desc: "Identifies your security posture and the highest-impact fixes—without enterprise budget assumptions.",
        href: "/assessments/cyber-readiness",
        cta: "Take the Assessment",
        live: true,
      },
      {
        name: "System Health Check",
        desc: "A quick check on whether your core systems are healthy, redundant, and documented.",
        href: "/assessments/system-health",
        cta: "Take the Assessment",
        live: true,
      },
    ],
  },
  {
    category: "Communications",
    icon: "Search",
    blurb:
      "Messaging, reputation, and visibility. Strategic communications readiness, not marketing tactics.",
    items: [
      {
        name: "SEO / Visibility Assessment",
        desc: "Shows how findable you are online and where visibility is leaking across search, content, and structure.",
        href: "/assessments/seo",
        cta: "Take the Assessment",
        live: true,
      },
      {
        name: "Communications & Reputation Consultation",
        desc: "A guided review of messaging consistency, stakeholder communication, and reputation readiness with Michelle Griffith.",
        cta: "Strengthen Your Communications",
        live: false,
      },
    ],
  },
  {
    category: "Leadership",
    icon: "Users",
    blurb:
      "Alignment, decision rights, and execution. No live self-serve tool yet—start with a consultation.",
    items: [
      {
        name: "Leadership Alignment Consultation",
        desc: "A guided review of decision rights, team alignment, and execution cadence with Nestor Ortiz.",
        cta: "Align Your Leadership",
        live: false,
      },
    ],
  },
];

export interface SymptomRoute {
  id: string;
  label: string;
  area: string;
  areaHref: string;
  recommendation: string;
  assessmentHref?: string;
  assessmentLabel?: string;
}

export const symptomRoutes: SymptomRoute[] = [
  {
    id: "everything",
    label: "It feels like everything at once",
    area: "Organizational",
    areaHref: "/scale",
    recommendation:
      "Start with the SCALE™ Assessment. It looks across all four disciplines to find what's actually holding you back.",
    assessmentHref: "/scale/assessment",
    assessmentLabel: "Take the SCALE™ Assessment",
  },
  {
    id: "workflows",
    label: "Workflows live in people's heads",
    area: "Operations",
    areaHref: "/services/operations",
    recommendation:
      "This is usually an operations and documentation problem. Start with a consultation to map where knowledge is fragile.",
  },
  {
    id: "tools",
    label: "Our tools don't talk to each other",
    area: "Technology",
    areaHref: "/services/technology",
    recommendation:
      "A disconnected tech stack is a technology and operations problem. The Technology Assessment finds the gaps.",
    assessmentHref: "/assessments/technology",
    assessmentLabel: "Take the Technology Assessment",
  },
  {
    id: "security",
    label: "We're not sure our security is adequate",
    area: "Technology",
    areaHref: "/services/technology/cybersecurity",
    recommendation:
      "Security exposure carries real risk. The Cybersecurity Readiness Assessment shows where you stand.",
    assessmentHref: "/assessments/cyber-readiness",
    assessmentLabel: "Take the Cyber Readiness Assessment",
  },
  {
    id: "decisions",
    label: "Leadership can't make decisions",
    area: "Leadership",
    areaHref: "/services/leadership",
    recommendation:
      "Stalled decisions are usually a leadership alignment problem. Start with a consultation on decision rights and alignment.",
  },
  {
    id: "messaging",
    label: "Our messaging is inconsistent or risky",
    area: "Communications",
    areaHref: "/services/communications",
    recommendation:
      "Inconsistent or high-stakes messaging is a communications problem. Start with a consultation on messaging and reputation readiness.",
  },
  {
    id: "visibility",
    label: "We're hard to find online",
    area: "Communications",
    areaHref: "/services/communications",
    recommendation:
      "Online visibility is a communications and technology question. The SEO / Visibility Assessment shows where you stand.",
    assessmentHref: "/assessments/seo",
    assessmentLabel: "Take the SEO / Visibility Assessment",
  },
  {
    id: "growth",
    label: "Growth is exposing cracks",
    area: "Organizational",
    areaHref: "/scale",
    recommendation:
      "Growth breaks systems that were never built to scale. The SCALE™ Assessment finds the cracks before they become crises.",
    assessmentHref: "/scale/assessment",
    assessmentLabel: "Take the SCALE™ Assessment",
  },
];
