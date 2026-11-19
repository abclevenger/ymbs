import { Link } from "react-router-dom";

/* =========================================================================
 *  ClientsBar
 *
 *  A compact, editorial client-logo strip that reinforces credibility
 *  without inventing claims. Logos link to /client-results where verified
 *  experience and deliverables are shown. Uses YMBS design tokens only.
 *
 *  Layout notes:
 *  - Desktop: 4 columns × 2 rows so each logo gets ample width to be
 *    recognizable (avoids squeezing 8 logos into one narrow row).
 *  - Tablet: 4 columns.
 *  - Mobile: 2 columns with generous image space.
 *  - Each logo sits in a consistent light card with subtle border/shadow
 *    so light-colored logos remain visible against the cream section.
 *  - object-contain preserves every logo's aspect ratio (no stretch/crop).
 * ========================================================================= */

const CLIENTS = [
  {
    name: "GreenBuilt Alliance",
    src: "https://files.leadconnectorhq.com/file/68aa7400aca9cd4aa1c27e9f/greenbuiltalliance-logo-horizontal-1.webp",
    alt: "GreenBuilt Alliance logo",
  },
  {
    name: "LearningGate Charter",
    src: "https://files.leadconnectorhq.com/file/68aa744abfc2773c724f0c81/learninggate-charter-logo-1.png",
    alt: "LearningGate Charter logo",
  },
  {
    name: "LaBelle",
    src: "https://files.leadconnectorhq.com/file/68aa749644664f37d4f5db94/labelle-logo.png",
    alt: "LaBelle logo",
  },
  {
    name: "John T. Floyd",
    src: "https://files.leadconnectorhq.com/file/6aff7520d50d9db796040be1/john-t-floyd-logo.png",
    alt: "John T. Floyd logo",
  },
  {
    name: "Clarity",
    src: "https://files.leadconnectorhq.com/file/6aff7551ff777b8c6ec527f2/6a761f579a9c7792ea91d511.svg",
    alt: "Clarity logo",
  },
  {
    name: "Asheville",
    src: "https://files.leadconnectorhq.com/file/6aff7594cad0c906333a1e46/6a8713ffc1e1ff9023f5b52c-1.svg",
    alt: "Asheville logo",
  },
  {
    name: "Alliance Party",
    src: "https://files.leadconnectorhq.com/file/6aff76cbff777b8c6ec55125/alliance-party-logo-1.png",
    alt: "Alliance Party logo",
  },
  {
    name: "Jump Start Legal Justice Center",
    src: "https://files.leadconnectorhq.com/file/6aff773ad50d9db796044d65/jump-start-legal-justice-center-logo.png",
    alt: "Jump Start Legal Justice Center logo",
  },
] as const;

export default function ClientsBar() {
  return (
    <section
      className="py-12 md:py-16 bg-[hsl(var(--brand-warm))]"
      aria-label="Organizations we have supported"
      aria-labelledby="clients-bar-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <p
          id="clients-bar-heading"
          className="text-center text-xs font-bold tracking-[0.2em] uppercase text-[hsl(var(--muted-foreground))] mb-8"
        >
          Organizations We&rsquo;ve Supported
        </p>
        <Link
          to="/client-results"
          className="block group"
          aria-label="View verified experience and deliverables"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 md:gap-6 items-stretch justify-items-center">
            {CLIENTS.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center h-24 sm:h-28 md:h-32 w-full rounded-xl bg-white border border-black/5 shadow-sm px-5 md:px-7 transition-all duration-200 group-hover:opacity-80 group-hover:shadow-md"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  loading="lazy"
                  width={220}
                  height={120}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </Link>
        <p className="text-center text-xs text-[hsl(var(--muted-foreground))] mt-7 max-w-xl mx-auto">
          Representative experience from across the YMBS team.{" "}
          <Link
            to="/client-results"
            className="font-bold text-[hsl(var(--primary))] hover:underline"
          >
            View Experience & Deliverables
          </Link>
        </p>
      </div>
    </section>
  );
}
