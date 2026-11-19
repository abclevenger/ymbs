/**
 * Story stage configuration for the BusinessTransformationStory scroll section.
 * Timing values are normalized 0→1 scroll progress through the sticky section.
 *
 * Narrative order (text visible from the very first frame):
 *   1. Diagnose  — what's holding you back (fragmented network visible)
 *   2. Fragmented — growth shouldn't create chaos (strain emphasized)
 *   3. Align     — bring in the right expertise (network organizes)
 *   4. Coordinated — one advisory team (clean aligned structure)
 */

export interface StoryStage {
  id: "diagnose" | "fragmented" | "align" | "coordinated";
  /** Short chapter name shown on the chapter navigation */
  chapter: string;
  /** Window of overall scroll progress this stage occupies */
  start: number;
  end: number;
  headline: string;
  body?: string;
}

export const stages: StoryStage[] = [
  {
    id: "diagnose",
    chapter: "Diagnose",
    start: 0,
    end: 0.22,
    headline: "First, we find what's actually holding you back.",
    body: "Fragmented systems, disconnected tools, unclear ownership, and too many handoffs create drag across the organization.",
  },
  {
    id: "fragmented",
    chapter: "Strain",
    start: 0.22,
    end: 0.46,
    headline: "Growth shouldn't create more chaos.",
    body: "Too many tools. Too many handoffs. Too much depends on individual people.",
  },
  {
    id: "align",
    chapter: "Align",
    start: 0.46,
    end: 0.72,
    headline: "Then we bring in exactly the expertise you need.",
    body: "Operations · Technology · Communications · Leadership",
  },
  {
    id: "coordinated",
    chapter: "Coordinate",
    start: 0.72,
    end: 1,
    headline: "One coordinated advisory team.",
    body: "Senior-level expertise. Fractional by design. Built around what your organization actually needs.",
  },
];

export type DisciplineId =
  "operations" | "technology" | "communications" | "leadership";

export interface Discipline {
  id: DisciplineId;
  label: string;
  href: string;
  blurb: string;
}

/** The four disciplines — compass positions live in the component */
export const disciplines: readonly Discipline[] = [
  {
    id: "operations",
    label: "Operations",
    href: "/services/operations",
    blurb:
      "Structure, processes, and execution that let the business scale intentionally.",
  },
  {
    id: "technology",
    label: "Technology",
    href: "/services/technology",
    blurb:
      "Systems, automation, data, and cybersecurity aligned to how you actually work.",
  },
  {
    id: "communications",
    label: "Communications",
    href: "/services/communications",
    blurb:
      "Executive messaging, marketing, and reputation that sound like one organization.",
  },
  {
    id: "leadership",
    label: "Leadership",
    href: "/services/leadership",
    blurb:
      "Governance, policies, and people practices that keep everyone pulling together.",
  },
] as const;

/** SCALE™ framework markers */
export const scaleMarkers = [
  { letter: "S", name: "Structure", shortLabel: "Structure" },
  { letter: "C", name: "Culture", shortLabel: "Culture" },
  { letter: "A", name: "Alignment", shortLabel: "Alignment" },
  {
    letter: "L",
    name: "Liability & Governance",
    shortLabel: "Legal & Gov.",
  },
  { letter: "E", name: "Execution", shortLabel: "Execution" },
];

/**
 * Fragmented business nodes — scattered in stage 1, then migrate toward
 * their parent discipline in later stages. `cluster` maps to a discipline id.
 */
export interface FragmentNode {
  label: string;
  /** initial scattered position (percentage of viewport, 0-100) */
  ix: number;
  iy: number;
  /** small organic drift seed */
  drift: number;
  /** target discipline cluster */
  cluster: "operations" | "technology" | "communications" | "leadership";
  size: "sm" | "md";
}

export const fragmentNodes: FragmentNode[] = [
  {
    label: "CRM",
    ix: 28,
    iy: 28,
    drift: 0.7,
    cluster: "technology",
    size: "md",
  },
  {
    label: "Email",
    ix: 72,
    iy: 22,
    drift: 1.1,
    cluster: "communications",
    size: "sm",
  },
  {
    label: "Spreadsheets",
    ix: 24,
    iy: 68,
    drift: 0.9,
    cluster: "operations",
    size: "sm",
  },
  {
    label: "Vendors",
    ix: 78,
    iy: 65,
    drift: 1.3,
    cluster: "operations",
    size: "md",
  },
  {
    label: "Employees",
    ix: 32,
    iy: 82,
    drift: 0.6,
    cluster: "leadership",
    size: "md",
  },
  {
    label: "Policies",
    ix: 68,
    iy: 80,
    drift: 1.0,
    cluster: "leadership",
    size: "sm",
  },
  {
    label: "Marketing",
    ix: 82,
    iy: 45,
    drift: 0.8,
    cluster: "communications",
    size: "md",
  },
  {
    label: "Cybersecurity",
    ix: 30,
    iy: 50,
    drift: 1.2,
    cluster: "technology",
    size: "sm",
  },
  {
    label: "Processes",
    ix: 45,
    iy: 18,
    drift: 0.5,
    cluster: "operations",
    size: "md",
  },
  {
    label: "Data",
    ix: 60,
    iy: 72,
    drift: 1.4,
    cluster: "technology",
    size: "sm",
  },
  {
    label: "Governance",
    ix: 38,
    iy: 88,
    drift: 0.9,
    cluster: "leadership",
    size: "sm",
  },
  {
    label: "Reputation",
    ix: 76,
    iy: 12,
    drift: 0.7,
    cluster: "communications",
    size: "sm",
  },
];
