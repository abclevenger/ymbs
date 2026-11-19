import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export interface ProofCardData {
  problem: string;
  intervention: string;
  result: string;
  pillars: string[];
  link?: string;
  linkText?: string;
}

export function ProofCard({
  data,
  variant = "light",
}: {
  data: ProofCardData;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`rounded-2xl p-8 border ${
        isDark
          ? "bg-white/5 border-white/10"
          : "bg-white border-zinc-200 shadow-sm"
      }`}
    >
      <div className="space-y-5">
        <div>
          <p
            className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? "text-zinc-500" : "text-zinc-400"}`}
          >
            Problem
          </p>
          <p
            className={`text-base leading-relaxed ${isDark ? "text-zinc-300" : "text-zinc-600"}`}
          >
            {data.problem}
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider mb-2 text-primary">
            YMBS Intervention
          </p>
          <p
            className={`text-base leading-relaxed ${isDark ? "text-zinc-300" : "text-zinc-600"}`}
          >
            {data.intervention}
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider mb-2 text-primary">
            Result
          </p>
          <p
            className={`text-base font-medium leading-relaxed ${isDark ? "text-white" : "text-[#1A2433]"}`}
          >
            {data.result}
          </p>
        </div>
      </div>
      <div
        className={`mt-6 pt-6 flex items-center justify-between ${isDark ? "border-white/10" : "border-zinc-200"} border-t`}
      >
        <div className="flex flex-wrap gap-2">
          {data.pillars.map((p, i) => (
            <span
              key={i}
              className="px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-wider uppercase"
            >
              {p}
            </span>
          ))}
        </div>
        {data.link && (
          <Link
            to={data.link}
            className="text-primary font-bold text-sm hover:gap-2 flex items-center gap-1.5 transition-all"
          >
            {data.linkText || "Read more"}
            <CheckCircle2 className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
