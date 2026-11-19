import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Cpu,
  Search,
  Settings,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { track } from "@/lib/analytics";
import { assessmentCatalog } from "@/lib/assessmentsData";

const iconMap: Record<string, typeof Compass> = {
  Compass,
  Settings,
  Cpu,
  Search,
  Users,
};

/**
 * Assessment catalog grouped by discipline. Live, self-serve assessments link
 * to the tool; disciplines without a live tool offer a consultation CTA.
 */
export default function AssessmentCatalog() {
  return (
    <div className="space-y-10">
      {assessmentCatalog.map((group) => {
        const Icon = iconMap[group.icon] || Compass;
        return (
          <div key={group.category}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-[#1A2433]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {group.category}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {group.blurb}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-light-section rounded-2xl border border-zinc-200 p-6 flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3">
                    {item.live ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-green-600">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Live
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Consultation
                      </span>
                    )}
                  </div>
                  <h4 className="text-base font-bold text-[#1A2433] mb-2">
                    {item.name}
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-5 flex-grow">
                    {item.desc}
                  </p>
                  {item.live && item.href ? (
                    <Link to={item.href}>
                      <Button
                        variant="outline"
                        className="w-full font-bold rounded-full border-primary text-primary hover:bg-primary hover:text-black transition-all"
                        onClick={() =>
                          track.assessmentFunnelStep(item.name, "hub-click")
                        }
                      >
                        {item.cta} <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/contact">
                      <Button
                        variant="outline"
                        className="w-full font-bold rounded-full border-zinc-300 text-[#1A2433] hover:border-primary/40 hover:text-primary transition-all"
                      >
                        {item.cta} <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
