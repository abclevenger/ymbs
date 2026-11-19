import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const read = (path: string) => readFileSync(join(process.cwd(), path), "utf8");

describe("YMBS flexible expertise messaging", () => {
  const hero = read("src/components/home/HeroSection.tsx");
  const fractional = read("src/components/home/FractionalModel.tsx");

  it("explains flexible support without consultant jargon in the hero card", () => {
    expect(hero).toContain('label: "Senior expertise, on your terms."');
    expect(hero).toContain("The right experience for a project, ongoing guidance");
    expect(hero).not.toContain('label: "Fractional engagement"');
  });

  it("presents the explanation on desktop and mobile", () => {
    expect(hero.split("proofPoints.map(({ icon: Icon, label, detail }) => (").length - 1).toBe(2);
    expect(hero.split("{detail &&").length - 1).toBe(2);
  });

  it("avoids unverified guarantees that YMBS has already fixed client problems", () => {
    expect(fractional).not.toContain("— and fixed them.");
    expect(fractional).toContain("Our specialists bring experience");
  });
});
