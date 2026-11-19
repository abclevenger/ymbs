import { describe, expect, it } from "vitest";
import { pillars, restoreScaleDraft } from "@/components/scale/scaleAssessmentData";

const completeDraft = () =>
  Object.fromEntries(pillars.map((p) => [p.letter, Array(p.questions.length).fill(3)]));

describe("SCALE draft restoration", () => {
  it("ignores empty and malformed drafts", () => {
    expect(restoreScaleDraft(null)).toBeNull();
    expect(restoreScaleDraft({})).toBeNull();
    expect(restoreScaleDraft({ S: [99] })).toBeNull();
    expect(restoreScaleDraft([])).toBeNull();
  });

  it("resumes at the first unanswered item within the first pillar", () => {
    const restored = restoreScaleDraft({ S: [0, 4] });
    expect(restored).toMatchObject({
      pillarIndex: 0,
      questionIndex: 2,
      complete: false,
    });
    expect(restored?.answers.S).toEqual([0, 4]);
  });

  it("resumes at the next pillar when the preceding pillar is complete", () => {
    const restored = restoreScaleDraft({ S: Array(pillars[0].questions.length).fill(2), C: [1] });
    expect(restored).toMatchObject({ pillarIndex: 1, questionIndex: 1, complete: false });
  });

  it("does not count invalid or sparse answers", () => {
    const restored = restoreScaleDraft({ S: [3, null, 4], C: ["4"] });
    expect(restored?.answers.S).toEqual([3]);
    expect(restored).toMatchObject({ pillarIndex: 0, questionIndex: 1, complete: false });
  });

  it("takes a completed draft to lead capture instead of restarting", () => {
    const restored = restoreScaleDraft(completeDraft());
    expect(restored?.complete).toBe(true);
    expect(restored?.answers.E).toHaveLength(pillars[pillars.length - 1].questions.length);
  });
});
