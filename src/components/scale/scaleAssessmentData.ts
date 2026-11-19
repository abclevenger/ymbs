// SCALE assessment pillar definitions and scoring helpers.
export type Answer = 0 | 1 | 2 | 3 | 4;

export interface Question {
  text: string;
}

export interface Pillar {
  letter: string;
  name: string;
  color: string;
  questions: Question[];
}

export const pillars: Pillar[] = [
  {
    letter: "S",
    name: "Structure",
    color: "from-blue-500 to-blue-600",
    questions: [
      {
        text: "Roles and decision rights are clearly defined and documented across the organization.",
      },
      {
        text: "Standard Operating Procedures (SOPs) exist for critical workflows and are kept current.",
      },
      {
        text: "Our technology systems (CRM, automation, reporting) are integrated and actively used.",
      },
      {
        text: "Reporting lines are clear—everyone knows who is accountable for what.",
      },
      {
        text: "Our operational infrastructure supports our current scale without constant workarounds.",
      },
    ],
  },
  {
    letter: "C",
    name: "Culture",
    color: "from-purple-500 to-purple-600",
    questions: [
      {
        text: "Trust and transparency are visibly present in leadership-team communication.",
      },
      {
        text: "Leadership behavior consistently reflects stated company values.",
      },
      {
        text: "Accountability practices are enforced—missed commitments have consequences.",
      },
      {
        text: "Team dynamics are healthy; cross-functional collaboration happens without friction.",
      },
      {
        text: "Employees are engaged and understand how their work connects to company goals.",
      },
    ],
  },
  {
    letter: "A",
    name: "Alignment",
    color: "from-emerald-500 to-emerald-600",
    questions: [
      {
        text: "Ownership goals and leadership priorities are documented and shared.",
      },
      {
        text: "Our strategic direction is clear and understood by the entire leadership team.",
      },
      {
        text: "KPIs and metrics are defined, tracked, and reviewed on a regular cadence.",
      },
      {
        text: "Resource allocation aligns with strategic priorities—not just historical habit.",
      },
      {
        text: "Departments are aligned; silos do not block execution or information flow.",
      },
    ],
  },
  {
    letter: "L",
    name: "Liability & Governance Readiness",
    color: "from-amber-500 to-amber-600",
    questions: [
      {
        text: "Key contracts and agreements exist, are current, and are organized.",
      },
      {
        text: "Employee policies and handbooks are documented and accessible.",
      },
      {
        text: "Decision-making authority is clear and documented for major business decisions.",
      },
      { text: "Insurance coverage has been reviewed in the past 12 months." },
      {
        text: "Compliance processes and risk-management procedures are documented.",
      },
      {
        text: "Corporate records and vendor relationships are organized and reviewable.",
      },
    ],
  },
  {
    letter: "E",
    name: "Execution",
    color: "from-rose-500 to-rose-600",
    questions: [
      {
        text: "We run a consistent operating cadence (leadership meetings, reviews, check-ins).",
      },
      {
        text: "Dashboards or KPI reports are used to track performance regularly.",
      },
      {
        text: "Project management practices are followed—deadlines and ownership are visible.",
      },
      {
        text: "Follow-through is reliable; commitments are completed without constant chasing.",
      },
      {
        text: "Performance tracking is used to measure progress and adjust course.",
      },
    ],
  },
];

/** Restore an existing SCALE draft and identify the first unanswered question. */
export function restoreScaleDraft(raw: unknown): {
  answers: Record<string, Answer[]>;
  pillarIndex: number;
  questionIndex: number;
  complete: boolean;
} | null {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  const source = raw as Record<string, unknown>;
  const answers: Record<string, Answer[]> = {};
  let answered = 0;
  let firstMissing: { pillarIndex: number; questionIndex: number } | null = null;

  for (let pillarIndex = 0; pillarIndex < pillars.length; pillarIndex++) {
    const pillar = pillars[pillarIndex];
    const stored = source[pillar.letter];
    const values: Answer[] = [];
    if (Array.isArray(stored)) {
      for (let j = 0; j < Math.min(stored.length, pillar.questions.length); j++) {
        const candidate: unknown = stored[j];
        // Invalid values and sparse entries must not count as answered.
        if (typeof candidate !== "number" || !Number.isInteger(candidate) || candidate < 0 || candidate > 4) break;
        values.push(candidate as Answer);
      }
    }
    if (values.length > 0) answers[pillar.letter] = values;
    answered += values.length;
    if (!firstMissing && values.length < pillar.questions.length) {
      firstMissing = { pillarIndex, questionIndex: values.length };
    }
  }

  if (answered === 0) return null;
  return {
    answers,
    pillarIndex: firstMissing?.pillarIndex ?? pillars.length - 1,
    questionIndex: firstMissing?.questionIndex ?? pillars[pillars.length - 1].questions.length - 1,
    complete: firstMissing === null,
  };
}

export const scaleOptions = [
  { value: 0, label: "Strongly Disagree" },
  { value: 1, label: "Disagree" },
  { value: 2, label: "Neutral" },
  { value: 3, label: "Agree" },
  { value: 4, label: "Strongly Agree" },
];

export function getScoreLabel(score: number) {
  if (score >= 80)
    return { label: "Ready", color: "text-emerald-600", bg: "bg-emerald-50" };
  if (score >= 60)
    return {
      label: "Mostly Ready",
      color: "text-amber-600",
      bg: "bg-amber-50",
    };
  if (score >= 40)
    return {
      label: "Developing",
      color: "text-orange-600",
      bg: "bg-orange-50",
    };
  return { label: "At Risk", color: "text-red-600", bg: "bg-red-50" };
}
