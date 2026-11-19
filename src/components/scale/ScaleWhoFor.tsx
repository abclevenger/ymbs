import { Building, HeartHandshake, Gavel, Shield } from "lucide-react";

const items = [
  {
    title: "Growing Businesses",
    desc: "Growth is exposing weaknesses that weren't obvious before. The systems underneath haven't kept up.",
    icon: Building,
  },
  {
    title: "Nonprofits",
    desc: "Board accountability, grant readiness, and operational capacity need to match the mission's ambition.",
    icon: HeartHandshake,
  },
  {
    title: "Law Firms & Professional Services",
    desc: "Practice management, intake, and governance decisions that carry real financial and reputational risk.",
    icon: Gavel,
  },
  {
    title: "Mission-Driven Organizations",
    desc: "Stakeholder trust, sensitive communications, and leadership transitions that can't be improvised.",
    icon: Shield,
  },
];

export default function ScaleWhoFor() {
  return (
    <section className="py-24 bg-light-section border-t border-zinc-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900 tracking-tight">
            Who SCALE Is For
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Organizations complex enough to need senior expertise—but not ready
            to hire four full-time executives.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
