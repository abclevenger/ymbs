import { CheckCircle2, Shield } from "lucide-react";

const does = [
  "Identify whether contracts and policies exist",
  "Flag where decision authority is unclear",
  "Note when insurance or compliance review may be warranted",
  "Recommend outside professional review when appropriate",
];

const doesNot = [
  "Interpret laws or determine legal compliance",
  "Provide legal opinions or advice",
  "Review contracts as legal counsel",
  "Determine legal rights or obligations",
  "Imply SCALE™ constitutes legal review",
];

export default function ScaleLiabilityCallout() {
  return (
    <section className="py-24 bg-dark-section relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(252,223,2,0.05),transparent_70%)] pointer-events-none"></div>
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="card-dark rounded-3xl p-10 md:p-14">
          <div className="flex items-start gap-5 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Liability & Governance Readiness — not legal review
              </h3>
              <p className="text-lg text-zinc-400 leading-relaxed">
                The purpose of this pillar is to{" "}
                <span className="text-white font-semibold">
                  identify potential business risk and determine whether
                  specialized professional review should be considered.
                </span>
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5">
              <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">
                What YMBS Does
              </p>
              <ul className="space-y-3">
                {does.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5">
              <p className="text-red-400 font-bold text-sm uppercase tracking-widest mb-4">
                What YMBS Does Not Do
              </p>
              <ul className="space-y-3">
                {doesNot.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400">
                    <span className="text-red-400/70 shrink-0 mt-0.5">✕</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
