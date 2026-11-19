import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ProofStrip } from "@/components/proof/ProofComponents";
import { VERIFIED_PROOF_STRIP } from "@/lib/verifiedProof";

const serif = { fontFamily: "'Playfair Display', Georgia, serif" };

/* =========================================================================
 *  Homepage Proof Insertion Points
 *
 *  This component renders a compact, editorial proof strip that can be
 *  inserted at 2-3 natural locations on the homepage without adding a
 *  large new section. It surfaces verified credibility signals only.
 *  ========================================================================= */

export function HomepageProofStrip({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  return (
    <div className="py-8">
      <div className="max-w-5xl mx-auto px-6">
        <p
          className={`text-center text-sm font-bold tracking-widest uppercase mb-5 ${
            variant === "dark" ? "text-primary" : "text-primary"
          }`}
        >
          Built from experience across
        </p>
        <ProofStrip items={VERIFIED_PROOF_STRIP} variant={variant} />
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* Proof CTA — compact block linking to /client-results                    */
/* ----------------------------------------------------------------------- */

export function HomepageProofCta({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div className="py-6">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p
          className={`text-sm ${isDark ? "text-white/60" : "text-zinc-600"} mb-3`}
        >
          Want to see what that experience looks like in practice?
        </p>
        <Link
          to="/client-results"
          className={`inline-flex items-center gap-1.5 text-sm font-bold ${
            isDark ? "text-primary" : "text-primary"
          } hover:gap-2.5 transition-all`}
        >
          Explore Experience & Deliverables
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
