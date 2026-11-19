import { useEffect } from "react";
import { track, initScrollDepthTracking } from "@/lib/analytics";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/home/HeroSection";
import CoreStatement from "@/components/home/CoreStatement";
import FractionalModel from "@/components/home/FractionalModel";
import BusinessTransformationStory from "@/components/home/BusinessTransformationStory";
import FourDisciplines from "@/components/home/FourDisciplines";
import {
  HomepageProofStrip,
  HomepageProofCta,
} from "@/components/proof/HomepageProof";
import EngagementModels from "@/components/home/EngagementModels";
import WhoWeServe from "@/components/home/WhoWeServe";
import ProblemDiscovery from "@/components/home/ProblemDiscovery";
import SelfIdentification from "@/components/home/SelfIdentification";
import HowWeWork from "@/components/home/HowWeWork";
import Deliverables from "@/components/home/Deliverables";
import ScaleSection from "@/components/home/ScaleSection";
import TeamSection from "@/components/home/TeamSection";
import FinalCta from "@/components/home/FinalCta";
import MountainDivider from "@/components/MountainDivider";

export default function Index() {
  useEffect(() => {
    track.highIntentPageView("/", "Home");
    const cleanup = initScrollDepthTracking("/");
    return cleanup;
  }, []);

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-[#0B1D33]">
      <SEOHead
        title="Fractional Operations, Technology, Communications & Leadership Advisory | YMBS"
        description="YMBS gives small and mid-sized businesses, nonprofits, and mission-driven organizations fractional access to senior specialists across operations, technology, communications, and leadership—without a full executive team."
        canonical="/"
        ogImage="https://vibe.filesafe.space/1776094666446468637/assets/a457cb22-ba78-45fd-ae0e-82b0d85afbc4.png"
      />

      {/* 1 — Hero (dark) */}
      <HeroSection />

      {/* 2 — Core statement (dark) */}
      <CoreStatement />

      {/* 3 — Fractional model (light) */}
      <FractionalModel />

      {/* 3b — Scroll-driven transformation story (dark) */}
      <BusinessTransformationStory />

      {/* 4 — Four disciplines (white) */}
      <FourDisciplines />

      {/* 4a — Compact proof strip (below disciplines) */}
      <HomepageProofStrip variant="light" />

      {/* 4b — Engagement clarity (light) */}
      <EngagementModels />

      {/* 5 — Who we serve (light) */}
      <WhoWeServe />

      {/* 5b — Self-identification signals (light) */}
      <SelfIdentification />

      <MountainDivider orientation="light-to-dark" />

      {/* 6 — How we work (dark) */}
      <HowWeWork />

      <MountainDivider orientation="dark-to-light" />

      {/* 6b — Deliverable signals (light) */}
      <Deliverables />

      {/* 6c — Proof CTA (above SCALE) */}
      <HomepageProofCta variant="light" />

      <MountainDivider orientation="light-to-dark" />

      {/* 7 — SCALE framework (dark, animated DNA helix) */}
      <ScaleSection />

      <MountainDivider orientation="dark-to-light" />

      {/* 8 — Team (light) */}
      <TeamSection />

      <MountainDivider orientation="light-to-dark" />

      {/* 9 — Final CTA (dark) */}
      <FinalCta />
    </div>
  );
}
