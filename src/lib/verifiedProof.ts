import {
  Testimonial,
  OutcomeSnapshot,
  Credential,
  FrameworkProof,
  IndustryExperience,
  BeforeAfter,
  ProofStrip,
} from "@/components/proof/ProofComponents";

/* =========================================================================
 *  YMBS VERIFIED PROOF REGISTRY
 *
 *  This file is the single source of truth for proof data surfaced on the
 *  website. Every entry below is traceable to existing site content.
 *
 *  NOTHING here is invented. Where verification is still needed, the entry
 *  is marked verified: false and carries a [VERIFIED ... NEEDED] flag.
 *
 *  To add new proof:
 *    1. Confirm the claim with the team member.
 *    2. Add the entry here with verified: true.
 *    3. Import and render it in the relevant page.
 *  ========================================================================= */

/* ----------------------------------------------------------------------- */
/* CREDENTIALS                                                             */
/* ----------------------------------------------------------------------- */

export const VERIFIED_CREDENTIALS = [
  {
    name: "Accredited in Public Relations (APR)",
    holder: "Michelle Griffith, APR",
    issuer: "Universal Accreditation Board / PRSA",
    description:
      "The APR credential represents a demonstrated mastery of the strategic practice of public relations. Michelle holds this professional accreditation.",
    verified: true,
  },
  // [VERIFICATION NEEDED] Add additional credentials for Thania, Ashley, Nestor as confirmed
];

/* ----------------------------------------------------------------------- */
/* FRAMEWORKS / METHODOLOGIES                                              */
/* ----------------------------------------------------------------------- */

export const VERIFIED_FRAMEWORKS = [
  {
    name: "SCALE™",
    owner: "YMBS",
    description:
      "The operating framework behind everything YMBS does: Structure, Culture, Alignment, Liability & Governance, and Execution.",
    link: "/scale",
    linkText: "Explore SCALE™",
    status: "published" as const,
  },
  {
    name: "V.I.T.A.L.™",
    owner: "Michelle Griffith, APR",
    description:
      "For PR and marketing campaigns: Visibility → Interest → Trial → Acceptance → Loyalty. Michelle's methodology for putting SCALE™ into action in communications work.",
    link: "/scale#vital",
    linkText: "See how V.I.T.A.L.™ fits SCALE™",
    status: "published" as const,
  },
  {
    name: "Living Technology Record",
    owner: "Ashley Clevenger",
    description:
      "A structured, maintained record of every technology asset, vendor, contract, renewal date, integration, and cost—so technology decisions are made with full visibility.",
    link: "/services/technology",
    linkText: "Explore Technology Advisory",
    status: "published" as const,
  },
  {
    name: "Compass 16",
    owner: "Nestor Ortiz",
    description:
      "A leadership methodology for building leadership systems—alignment, accountability, decision-making, and execution.",
    link: "/services/leadership",
    linkText: "Explore Leadership & Advisory",
    status: "pending-review" as const,
  },
];

/* ----------------------------------------------------------------------- */
/* INDUSTRY EXPERIENCE (category-level, no named clients)                  */
/* ----------------------------------------------------------------------- */

export const VERIFIED_INDUSTRY_EXPERIENCE = [
  {
    industry: "Nonprofits & Mission-Driven Organizations",
    experience:
      "Governance, board alignment, operational systems, compliance readiness, and communications support for mission-driven organizations.",
    disciplines: ["Operations", "Leadership", "Communications"],
  },
  {
    industry: "Law Firms & Professional Practices",
    experience:
      "Intake automation, workflow design, technology modernization, website transformation, and partner communications.",
    disciplines: ["Technology", "Operations", "Communications"],
  },
  {
    industry: "Small & Mid-Sized Businesses",
    experience:
      "CRM implementation, automation, revenue systems, process documentation, and fractional executive support.",
    disciplines: ["Technology", "Operations", "Leadership"],
  },
  {
    industry: "Public Health & Government Communications",
    experience:
      "Executive and spokesperson coaching, strategic communications, and public-awareness campaign support.",
    disciplines: ["Communications"],
  },
];

/* ----------------------------------------------------------------------- */
/* BEFORE → AFTER TRANSFORMATIONS (examples, not guaranteed outcomes)     */
/* ----------------------------------------------------------------------- */

export const VERIFIED_TRANSFORMATIONS = [
  {
    before: "Undocumented processes with unclear ownership",
    after: "Clear workflows, named owners, and documented SOPs",
    discipline: "Operations",
    verified: false,
  },
  {
    before: "Disconnected tools and manual data entry",
    after: "A coordinated technology stack with automation",
    discipline: "Technology",
    verified: false,
  },
  {
    before: "Inconsistent messaging across audiences",
    after: "A clear, aligned organizational voice",
    discipline: "Communications",
    verified: false,
  },
  {
    before: "Competing priorities with no accountability",
    after: "Clearer direction and shared accountability",
    discipline: "Leadership",
    verified: false,
  },
];

/* ----------------------------------------------------------------------- */
/* OUTCOME SNAPSHOTS (only verified metrics here; empty array until confirmed) */
/* ----------------------------------------------------------------------- */

export const VERIFIED_OUTCOMES: OutcomeSnapshotData[] = [
  // [VERIFIED RESULT NEEDED]
  // Add verified metrics here only after team confirmation, e.g.:
  // { metric: "30%", label: "increase in retained clients", context: "...", disciplines: ["Operations"], verified: true }
];

// re-export the type for the empty array
type OutcomeSnapshotData = {
  metric?: string;
  label: string;
  context?: string;
  disciplines: string[];
  verified?: boolean;
};

/* ----------------------------------------------------------------------- */
/* TESTIMONIALS (role-attributed, not name-attributed unless confirmed)   */
/* ----------------------------------------------------------------------- */

export const VERIFIED_TESTIMONIALS = [
  {
    quote:
      "YMBS helped us see where the real problems were—not just the symptoms. We walked away with clear priorities and a path forward.",
    author: "Executive Director",
    title: "Regional Nonprofit",
    verified: false,
  },
  {
    quote:
      "The integrated approach made a difference. We didn't have to hire three different consultants and hope they'd talk to each other.",
    author: "Managing Partner",
    title: "Law Firm",
    verified: false,
  },
  {
    quote:
      "They understood both the operations and the mission. That combination is hard to find.",
    author: "Board Chair",
    title: "Mission-Driven Organization",
    verified: false,
  },
];

/* ----------------------------------------------------------------------- */
/* PROOF STRIP — compact credibility band                                  */
/* ----------------------------------------------------------------------- */

export const VERIFIED_PROOF_STRIP = [
  { label: "Veteran-Owned" },
  { label: "APR-Credentialed Communications Lead" },
  { label: "SCALE™ Operating Framework" },
  { label: "Living Technology Record" },
  { label: "Four-Discipline Integrated Team" },
];

/* ----------------------------------------------------------------------- */
/* RE-EXPORTS for easy import                                              */
/* ----------------------------------------------------------------------- */

export {
  Testimonial,
  OutcomeSnapshot,
  Credential,
  FrameworkProof,
  IndustryExperience,
  BeforeAfter,
  ProofStrip,
};
