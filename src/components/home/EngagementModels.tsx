const modes = [
  {
    title: "Project-Based",
    desc: "Focused expertise around a defined initiative or problem.",
  },
  {
    title: "Fractional",
    desc: "Ongoing senior-level support without another full-time executive.",
  },
  {
    title: "Advisory",
    desc: "Strategic guidance, prioritization, and decision support.",
  },
  {
    title: "Implementation Support",
    desc: "Hands-on help putting the plan, systems, and processes into practice.",
  },
];

/**
 * Engagement clarity — four ways to work with YMBS. Compact band that
 * helps visitors understand engagement options without pricing tiers.
 */
export default function EngagementModels() {
  return (
    <section className="py-14 md:py-20 bg-light-section border-t border-zinc-100">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
            How you can work with us
          </p>
          <h2
            className="text-2xl md:text-[1.75rem] font-bold text-[#1A2433] tracking-tight leading-[1.15]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Bring us in where you need us.
          </h2>
        </div>

        {/* Compact editorial band — not full cards. Subtle dividers keep it
            visually subordinate so it reads as engagement options, not a
            fourth service section. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x divide-zinc-200">
          {modes.map((m, i) => (
            <div key={i} className="px-5 py-4 sm:py-5">
              <h3
                className="text-[17px] font-bold mb-2 text-[#1A2433]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {m.title}
              </h3>
              <p className="text-[15px] text-zinc-600 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
