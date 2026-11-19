import {
  Building2,
  Users,
  Target,
  Shield,
  Zap,
  Scale,
  FileWarning,
  ClipboardList,
  ArrowRight,
  LineChart,
  Presentation,
  BookOpen,
} from "lucide-react";

export const scaleStages = [
  {
    letter: "S",
    name: "Structure",
    icon: Building2,
    desc: "Organizational structure, roles, workflows, SOPs, technology, CRM, automation, and reporting lines.",
    checks: [
      "Roles & decision rights",
      "SOPs & workflows",
      "Technology & CRM systems",
      "Automation & reporting",
      "Operational infrastructure",
    ],
  },
  {
    letter: "C",
    name: "Culture",
    icon: Users,
    desc: "Trust, communication, leadership behavior, engagement, accountability, and team dynamics.",
    checks: [
      "Trust & transparency",
      "Leadership behavior",
      "Accountability practices",
      "Team dynamics",
      "Workplace communication",
    ],
  },
  {
    letter: "A",
    name: "Alignment",
    icon: Target,
    desc: "Ownership goals, leadership priorities, strategic direction, KPIs, and resource allocation.",
    checks: [
      "Ownership & leadership goals",
      "Strategic direction",
      "KPIs & metrics",
      "Resource allocation",
      "Departmental alignment",
    ],
  },
  {
    letter: "L",
    name: "Liability & Governance Readiness",
    icon: Shield,
    desc: "Business readiness and risk indicators—not legal conclusions. We identify when specialized professional review may be appropriate.",
    checks: [
      "Contracts & agreements exist",
      "Policies documented",
      "Decision authority clear",
      "Insurance coverage review",
      "Compliance processes documented",
      "Risk-management procedures",
    ],
  },
  {
    letter: "E",
    name: "Execution",
    icon: Zap,
    desc: "Operating cadence, dashboards, KPI reporting, project management, and performance tracking.",
    checks: [
      "Operating cadence",
      "Dashboards & KPI reporting",
      "Project management",
      "Follow-through & accountability",
      "Performance tracking",
    ],
  },
];

export const scaleProducts = [
  {
    name: "SCALE™ Framework",
    desc: "The overall YMBS methodology for business readiness.",
    icon: Scale,
  },
  {
    name: "SCALE™ Assessment",
    desc: "Initial business-readiness diagnostic across five pillars.",
    icon: ClipboardList,
  },
  {
    name: "SCALE™ Score",
    desc: "Overall business-readiness score from 0–100.",
    icon: Target,
  },
  {
    name: "SCALE™ Scorecard",
    desc: "Visual summary of the five pillar scores.",
    icon: FileWarning,
  },
  {
    name: "SCALE™ Strategy Session",
    desc: "Consultation reviewing assessment results.",
    icon: Users,
  },
  {
    name: "SCALE™ Roadmap",
    desc: "90-day implementation plan with clear ownership.",
    icon: ArrowRight,
  },
  {
    name: "SCALE™ Dashboard",
    desc: "Ongoing leadership dashboard for sustained execution.",
    icon: LineChart,
  },
  {
    name: "SCALE™ Review",
    desc: "Quarterly executive review to measure sustained gains.",
    icon: Presentation,
  },
  {
    name: "SCALE™ Workshop",
    desc: "Speaking and training program for leadership teams.",
    icon: BookOpen,
  },
];

export const scalePartners = [
  {
    category: "Legal",
    providers: "MILA, BizLaw, and other law firms as needed",
  },
  {
    category: "Accounting & Tax",
    providers: "Independent CPA / accounting partners",
  },
  { category: "Insurance", providers: "Commercial insurance professionals" },
  { category: "Human Resources", providers: "HR specialists and consultants" },
  {
    category: "Cybersecurity",
    providers: "Security specialists and managed providers",
  },
  {
    category: "Banking & Capital",
    providers: "Banks, lenders, and capital partners",
  },
  { category: "Benefits", providers: "Employee-benefits specialists" },
];

export const scaleTeamMapping = [
  {
    name: "Thania",
    areas:
      "Operations, Structure, Governance Processes, Leadership Alignment, Fractional COO Strategy",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904440722007d7ffee3e5b.png",
  },
  {
    name: "Ashley",
    areas:
      "Technology, AI, CRM, Automation, Telecommunications, Cybersecurity Strategy, Systems Integration",
    image:
      "https://vibe.filesafe.space/1776094666446468637/attachments/51e89f65-186a-4fdc-84c6-eadc6e1a2e2c.jpg",
  },
  {
    name: "Michelle",
    areas:
      "Communications, PR, Brand Positioning, Marketing Strategy, Visibility, Messaging",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a90453a9a0fb7c669893ce7.png",
  },
  {
    name: "Nestor",
    areas:
      "Leadership, People, Culture, Management, Organizational Development",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a9047cf0dae815363fd4e1d.png",
  },
];
