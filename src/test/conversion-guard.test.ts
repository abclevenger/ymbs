import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { whoWeHelp } from "@/components/layout/navData";

const source = (path: string) => readFileSync(join(process.cwd(), path), "utf8");

describe("YMBS homepage conversion guardrails", () => {
  it("keeps the core story, disciplines, deliverables, SCALE and final CTA", () => {
    const home = source("src/pages/Index.tsx");
    for (const component of ["HeroSection", "BusinessTransformationStory", "FourDisciplines", "WhoWeServe", "ProblemDiscovery", "HowWeWork", "Deliverables", "ScaleSection", "TeamSection", "FinalCta"]) {
      expect(home).toContain("<" + component + " ");
    }
    expect(home).not.toContain("<SelfIdentification");
    expect(home).not.toContain("<CoreStatement");
    expect(home).not.toContain("<EngagementModels");
  });

  it("uses all five canonical audiences with actionable destination links", () => {
    const component = source("src/components/home/WhoWeServe.tsx");
    expect(whoWeHelp).toHaveLength(5);
    expect(component).toContain("whoWeHelp.map");
    expect(component).toContain("to={audience.href}");
  });

  it("preserves a visitor's challenge while the second step unmounts", () => {
    const contact = source("src/pages/Contact.tsx");
    expect(contact).toContain('const [challenge, setChallenge] = useState("")');
    expect(contact).toContain("value={challenge}");
    expect(contact).toContain("onChange={(e) => setChallenge(e.target.value)}");
    expect(contact).toContain("const message = challenge.trim()");
    expect(contact).toContain("[CRM_FIELDS.inquiryMessage]: message");
  });

  it("tracks submitted requests without falsely claiming a booked call", () => {
    const contact = source("src/pages/Contact.tsx");
    expect(contact).toContain("track.contactFormSubmitted");
    expect(contact).not.toContain("track.discoveryCallBooked");
    expect(contact).not.toContain("A copy of your request has been sent");
  });

  it("keeps client-facing labels accurate", () => {
    expect(source("src/components/layout/Header.tsx")).toContain("Help Center");
    expect(source("src/pages/ClientResults.tsx")).toContain("Our Experience & Deliverables");
    expect(source("src/components/TrustSignals.tsx")).not.toContain("<Star");
  });
});
