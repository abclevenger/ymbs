import { ClipboardList, Target, Zap, Users, Presentation } from "lucide-react";

const moves = [
  {
    step: "Assess",
    desc: "Run the SCALE Assessment across all five dimensions to find the real problem.",
    icon: ClipboardList,
  },
  {
    step: "Prioritize",
    desc: "Build the SCALE Roadmap with clear ownership and the order that matters most.",
    icon: Target,
  },
  {
    step: "Implement",
    desc: "Execute the fixes across operations, technology, communications, and leadership.",
    icon: Zap,
  },
  {
    step: "Advise",
    desc: "Provide ongoing fractional and integrated executive support to keep momentum.",
    icon: Users,
  },
  {
    step: "Review",
    desc: "Quarterly SCALE Review to measure sustained gains and adjust the next move.",
    icon: Presentation,
  },
];

export default function ScaleHowUsed() {
  return (
    <section className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900 tracking-tight">
            How YMBS Uses SCALE
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Five moves that take an organization from diagnosis to sustained
            execution.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {moves.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  {s.step}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed flex-grow">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
