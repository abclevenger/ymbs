const signals = [
  "You've outgrown the way your organization currently operates.",
  "Your systems don't work together.",
  "Leadership is stuck in day-to-day execution.",
  "Important work depends too heavily on one person.",
  "You know something needs to change, but you're not sure what to fix first.",
  "You need senior expertise, but another full-time executive doesn't make sense.",
];

/**
 * Self-identification signals — helps visitors recognize their own
 * situation. Clean two-column editorial checklist, not alarmist.
 */
export default function SelfIdentification() {
  return (
    <section className="py-16 md:py-20 bg-light-section border-t border-zinc-100">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
            You may need YMBS if...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
          {signals.map((s, i) => (
            <div key={i} className="flex items-start gap-3.5">
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs mt-0.5"
                aria-hidden="true"
              >
                ✓
              </span>
              <p className="text-[16px] text-[#1A2433] leading-relaxed font-medium">
                {s}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
