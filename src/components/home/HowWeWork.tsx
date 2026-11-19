const steps = [
  {
    num: "01",
    title: "Get clarity",
    desc: "A 30-minute conversation to understand what's changing and where progress is stuck.",
  },
  {
    num: "02",
    title: "Set priorities",
    desc: "We identify which operational, technology, communications, or leadership needs matter most right now.",
  },
  {
    num: "03",
    title: "Bring in the right expertise",
    desc: "The appropriate specialist — or coordinated team — is engaged around your priorities.",
  },
  {
    num: "04",
    title: "Implement & improve",
    desc: "Practical follow-through, then ongoing fractional guidance to sustain the gains.",
  },
];

/**
 * How we work — dark navy section. Four-step progression shown together
 * in one row on desktop (lg:grid-cols-4) with subtle connecting dividers.
 * The section id supports the hero "See how we work →" anchor link.
 */
export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="py-20 md:py-24 bg-dark-section relative overflow-hidden scroll-mt-24"
    >
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px] -translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
            How we work
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            The right resources. The right tools. The right time.
          </h2>
        </div>

        {/* All four steps visible immediately — no animation hiding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/5 rounded-2xl p-7 flex flex-col hover:bg-white/[0.05] transition-all relative"
            >
              {/* Subtle connector between cards on desktop */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden lg:block absolute top-1/2 -right-[14px] w-[18px] h-px bg-white/15 -translate-y-1/2 z-10"
                />
              )}
              <span className="text-2xl font-bold text-primary mb-3.5">
                {s.num}
              </span>
              <h3
                className="text-[1.15rem] font-bold mb-2.5 text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {s.title}
              </h3>
              <p className="text-[15px] text-zinc-300 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Process certainty — compact journey summary, subordinate to the four steps.
            Hidden on mobile (the four-step cards above already communicate this). */}
        <div className="hidden sm:flex mt-12 flex-wrap items-center justify-center gap-3 text-sm">
          <span className="text-zinc-300 font-medium">
            30-minute conversation
          </span>
          <span className="text-primary/60" aria-hidden="true">
            ↓
          </span>
          <span className="text-zinc-300 font-medium">
            Priorities identified
          </span>
          <span className="text-primary/60" aria-hidden="true">
            ↓
          </span>
          <span className="text-zinc-300 font-medium">
            Right expertise engaged
          </span>
          <span className="text-primary/60" aria-hidden="true">
            ↓
          </span>
          <span className="text-zinc-300 font-medium">Action plan</span>
          <span className="text-primary/60" aria-hidden="true">
            ↓
          </span>
          <span className="text-zinc-300 font-medium">
            Implementation &amp; follow-through
          </span>
        </div>
      </div>
    </section>
  );
}
