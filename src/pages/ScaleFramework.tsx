import SEOHead from "@/components/SEOHead";
import ScaleHero from "@/components/scale/ScaleHero";
import ScaleOverview from "@/components/scale/ScaleOverview";
import ScaleStages from "@/components/scale/ScaleStages";
import ScalePillarMap from "@/components/scale/ScalePillarMap";
import ScaleLiabilityCallout from "@/components/scale/ScaleLiabilityCallout";
import ScaleProducts from "@/components/scale/ScaleProducts";
import ScaleJourney from "@/components/scale/ScaleJourney";
import ScaleHowUsed from "@/components/scale/ScaleHowUsed";
import ScalePartnerNetwork from "@/components/scale/ScalePartnerNetwork";
import ScaleTeam from "@/components/scale/ScaleTeam";
import ScaleWhoFor from "@/components/scale/ScaleWhoFor";
import ScaleWorkshops from "@/components/scale/ScaleWorkshops";
import ScaleDisclaimer from "@/components/scale/ScaleDisclaimer";
import ScaleFinalCta from "@/components/scale/ScaleFinalCta";

/**
 * The SCALE™ Framework page — YMBS's proprietary business-readiness
 * methodology. Refactored into composable section components; content,
 * routing, schema, and tracking preserved.
 *
 * Section order:
 *  Hero → Overview → Five Pillars → Pillar Map (four disciplines through SCALE)
 *  → Liability Callout → Product Suite → Client Journey → How YMBS Uses SCALE
 *  → Partner Network → Team → Who It's For → Workshops → Disclaimer → Final CTA
 */
export default function ScaleFramework() {
  return (
    <>
      <SEOHead
        title="The SCALE™ Framework — YMBS Business Readiness Methodology"
        description="The SCALE™ Framework is YMBS's proprietary methodology for diagnosing organizational readiness across Structure, Culture, Alignment, Liability & Governance, and Execution—so your organization can scale without chaos."
        canonical="/scale"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "The SCALE™ Framework",
            description:
              "YMBS's proprietary methodology for diagnosing organizational readiness across Structure, Culture, Alignment, Liability & Governance, and Execution.",
            url: "https://ymbs.pro/scale",
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "The SCALE™ Framework",
            description:
              "A proprietary business-readiness methodology that diagnoses organizations across five dimensions before recommending solutions.",
            serviceType: "Business Readiness Assessment & Methodology",
            url: "https://ymbs.pro/scale",
            provider: {
              "@type": "Organization",
              name: "Yellow Mountain Business Solutions",
              url: "https://ymbs.pro",
            },
            audience: {
              "@type": "BusinessAudience",
              audienceType:
                "Growing businesses, Nonprofits, Law firms, Mission-driven organizations",
            },
          },
        ]}
      />
      <div className="flex flex-col min-h-screen">
        <ScaleHero />
        <ScaleOverview />
        <ScaleStages />
        <ScalePillarMap />
        <ScaleLiabilityCallout />
        <ScaleProducts />
        <ScaleJourney />
        <ScaleHowUsed />
        <ScalePartnerNetwork />
        <ScaleTeam />
        <ScaleWhoFor />
        <ScaleWorkshops />
        <ScaleDisclaimer />
        <ScaleFinalCta />
      </div>
    </>
  );
}
