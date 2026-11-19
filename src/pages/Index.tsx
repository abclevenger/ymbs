import { useEffect } from "react";
import { track, initScrollDepthTracking } from "@/lib/analytics";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/home/HeroSection";
import FractionalModel from "@/components/home/FractionalModel";
import BusinessTransformationStory from "@/components/home/BusinessTransformationStory";
import FourDisciplines from "@/components/home/FourDisciplines";
import { HomepageProofStrip } from "@/components/proof/HomepageProof";
import WhoWeServe from "@/components/home/WhoWeServe";
import ProblemDiscovery from "@/components/home/ProblemDiscovery";
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

      {/* Clear visitor journey: position → understand → choose → act.
          Keep HowWeWork mounted because the hero links to #how-we-work. */}
      <HeroSection />
      <FractionalModel />
      <BusinessTransformationStory />
      <FourDisciplines />
      <HomepageProofStrip variant="light" />
      <WhoWeServe />
      <ProblemDiscovery />
      <MountainDivider orientation="light-to-dark" />
      <HowWeWork />
      <MountainDivider orientation="dark-to-light" />
      <Deliverables />
      <MountainDivider orientation="light-to-dark" />
      <ScaleSection />
      <MountainDivider orientation="dark-to-light" />
      <TeamSection />
      <MountainDivider orientation="light-to-dark" />
      <FinalCta />
    </div>
  );
}
