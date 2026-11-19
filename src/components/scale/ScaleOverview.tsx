import { ArrowRight, Dna } from "lucide-react";

const siloPoints = [
  "A technology problem may actually be a process problem.",
  "A communications problem may actually be a leadership problem.",
  "A leadership problem may stem from unclear structure or accountability.",
  "An operational issue may expose technology, communications, governance, or leadership weaknesses.",
];

/**
 * Combines the elevator pitch, "What SCALE Is" plain-English section, the
 * "Organizations don't experience problems in silos" section, and the
 * Organizational DNA section into one cohesive overview.
 */
export default function ScaleOverview() {
  return (
    <>
      {/* Elevator Pitch */}
      <section className="py-24 bg-alt-section border-b border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 tracking-tight">
            The one-sentence pitch
          </h2>
          <p className="text-xl md:text-2xl text-zinc-700 leading-relaxed font-medium text-balance">
            &ldquo;YMBS is your strategic business quarterback—we identify the
            problem, coordinate the solution, and bring in the right specialists
            when necessary.&rdquo;
          </p>
        </div>
      </section>

      {/* What SCALE Is — Plain English */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900 tracking-tight">
              What SCALE Is
            </h2>
          </div>
          <div className="space-y-6 text-lg text-zinc-700 leading-relaxed">
            <p>
              SCALE is not a workshop, a binder, or a one-time audit. It is the
              lens YMBS uses to understand an organization before recommending
              anything. When a problem surfaces—whether it looks like a
              technology issue, a staffing issue, or a governance issue—SCALE
              asks:{" "}
              <span className="font-semibold text-zinc-900">
                what is actually underneath it?
              </span>
            </p>
            <p>
              Most consultants solve one department. YMBS fixes the systems
              between departments. SCALE is how we decide what to look at, in
              what order, and with whom—so the solution addresses the root cause
              instead of the symptom.
            </p>
            <p>
              The five dimensions give leadership a shared language for talking
              about readiness. They make it possible to compare a governance
              gap, a technology gap, and a culture gap on the same scorecard—and
              to prioritize the one that is holding the organization back the
              most.
            </p>
          </div>
        </div>
      </section>

      {/* Organizations Don't Experience Problems in Silos */}
      <section className="py-24 bg-dark-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(252,223,2,0.05),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-tight leading-tight">
            Organizations don&rsquo;t experience problems in silos.
          </h2>
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-12 max-w-2xl mx-auto">
            So YMBS doesn&rsquo;t diagnose them in silos. We look across the
            whole organization before recommending a solution.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            {siloPoints.map((item, i) => (
              <div
                key={i}
                className="card-dark rounded-2xl p-6 flex items-start gap-3"
              >
                <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-1" />
                <p className="text-zinc-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational DNA */}
      <section className="py-24 bg-light-section border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <Dna className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900 tracking-tight">
                Organizational DNA
              </h2>
              <p className="text-lg text-zinc-700 leading-relaxed mb-6">
                Every organization has an operating DNA—the combination of
                structure, culture, alignment, governance, and execution habits
                that determines whether it can absorb growth or will break under
                it. SCALE is how YMBS reads that DNA.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed">
                When the DNA is healthy, growth creates momentum. When it is
                not, growth creates chaos. The same revenue that feels like
                success on the outside can be quietly breaking the organization
                on the inside—because the systems underneath were never built
                for what comes next.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
