import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const workshops = [
  {
    title: "SCALE Your Organization",
    desc: "A full-organization readiness diagnostic workshop across all five pillars.",
  },
  {
    title: "SCALE Your Leadership Team",
    desc: "Alignment, accountability, and decision-rights exercises for executive teams.",
  },
  {
    title: "SCALE Your Technology",
    desc: "Audit your tech stack, identify waste, and build a vendor-neutral roadmap.",
  },
  {
    title: "SCALE Your Growth Systems",
    desc: "Map your customer journey, CRM, and revenue operations end to end.",
  },
  {
    title: "SCALE Your Nonprofit",
    desc: "Governance, board alignment, and operational capacity for mission-driven organizations.",
  },
  {
    title: "Custom SCALE™ Session",
    desc: "Tailored to your organization's specific challenges and upcoming decisions.",
  },
];

export default function ScaleWorkshops() {
  return (
    <section className="py-24 bg-alt-section border-t border-zinc-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 bg-white mb-6">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-600">
              Speaking & Workshops
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900 tracking-tight">
            SCALE&trade; Workshops
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Interactive, practical sessions—not keynote speeches. Your team
            works through real scenarios using the SCALE&trade; framework and
            leaves with takeaways they can apply immediately.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((w, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm flex flex-col"
            >
              <h3 className="text-lg font-bold text-zinc-900 mb-3">
                {w.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed flex-grow">
                {w.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/contact">
            <Button className="bg-primary text-black hover:bg-primary/90 font-bold px-8 h-14 rounded-full">
              Book a SCALE&trade; Workshop{" "}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
