import {
  CheckCircle2,
  Mic,
  Building2,
  Handshake,
  AlertTriangle,
} from "lucide-react";

export default function CommunicationsServices() {
  return (
    <>
      {/* THREE PRIMARY SERVICES */}
      <section className="py-20 bg-white border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Three ways to engage
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Each scoped to the organization's needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Mic,
                title: "Spokesperson Ready",
                best: "Best for executives or teams preparing for an interview, testimony, keynote, board presentation, or high-stakes Q&A.",
                items: [
                  "Message development",
                  "Interview and presentation preparation",
                  "Mock questions and practice",
                  "Real-time feedback",
                  "Individual or small-group coaching",
                ],
              },
              {
                icon: Building2,
                title: "Message & Reputation Foundation",
                best: "Best for organizations preparing for a launch, rebrand, leadership transition, major announcement, or new communications infrastructure.",
                items: [
                  "Discovery and positioning",
                  "Key messages and organizational narrative",
                  "Audience and stakeholder mapping",
                  "Boilerplate and talking-point development",
                  "Launch or implementation planning",
                  "Communications ownership and approval guidance",
                ],
              },
              {
                icon: Handshake,
                title: "Embedded Communications Partner",
                best: "Best for leadership teams that need an ongoing senior communications voice without hiring a full-time communications executive.",
                items: [
                  "Ongoing message oversight",
                  "Leadership and spokesperson preparation",
                  "Reputation and issue-readiness support",
                  "Fast-turnaround talking points and statements",
                  "Regular leadership strategy sessions",
                  "Quarterly communications review",
                ],
              },
            ].map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:border-primary/30 transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 text-[#1A2433]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-sm text-zinc-500 mb-5 font-medium">
                    {svc.best}
                  </p>
                  <ul className="space-y-2 flex-grow">
                    {svc.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-base text-zinc-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <p className="text-center text-sm text-zinc-500 italic mt-8">
            Engagements are scoped to the organization's needs.
          </p>
        </div>
      </section>

      {/* CRISIS READINESS */}
      <section className="py-16 bg-light-section">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
            <AlertTriangle className="w-7 h-7 text-primary" />
          </div>
          <h3
            className="text-2xl md:text-3xl font-bold mb-4 text-[#1A2433]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Crisis-readiness support
          </h3>
          <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Crisis-readiness support may include vulnerability reviews,
            communications roles and approval paths, holding-statement
            preparation, spokesperson readiness, and situation-specific counsel.
            Availability and response expectations are defined in each
            engagement.
          </p>
        </div>
      </section>
    </>
  );
}
