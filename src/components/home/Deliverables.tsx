const deliverables = [
  "Operational roadmap",
  "Technology stack assessment",
  "Workflow / CRM buildout",
  "Communications plan",
  "Governance framework",
  "Executive action plan",
  "SOPs and process documentation",
  "Priority implementation plan",
];

/**
 * Deliverable signals — tangible outputs visitors may receive. Compact
 * 4x2 grid on desktop. Positioned before SCALE™ to set expectations.
 */
export default function Deliverables() {
  return (
    <section className="py-16 md:py-20 bg-alt-section">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-9 max-w-2xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
            What the work can produce
          </p>
          <h2
            className="text-2xl md:text-[1.75rem] font-bold text-[#1A2433] tracking-tight leading-[1.15]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Practical outputs. Not just recommendations.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {deliverables.map((d, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-4 rounded-xl border border-zinc-200 bg-white/60"
            >
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs"
                aria-hidden="true"
              >
                ✓
              </span>
              <span className="text-[15px] font-semibold text-[#1A2433] leading-snug">
                {d}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-[13px] text-zinc-500 mt-6 max-w-xl mx-auto">
          Deliverables depend on the organization, priorities, and scope of
          engagement.
        </p>
      </div>
    </section>
  );
}
