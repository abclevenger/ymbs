import { Shield, Users, Star } from "lucide-react";

interface TrustSignalsProps {
  variant?: "light" | "dark";
  showRating?: boolean;
  className?: string;
  /** Compact: single inline row of badges (for tight spaces) */
  compact?: boolean;
}

export function TrustSignals({
  variant = "light",
  showRating = true,
  className = "",
  compact = false,
}: TrustSignalsProps) {
  const isDark = variant === "dark";

  const signals = [{ icon: Shield, label: "Veteran-Owned" }];

  return (
    <div className={className}>
      {showRating && (
        <div
          className={`flex items-center justify-center gap-2 ${compact ? "mb-3" : "mb-5"} ${isDark ? "text-white" : "text-[#1A2433]"}`}
        >
          <div className="flex gap-0.5" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
          <span
            className={`text-sm font-medium ${isDark ? "text-white/70" : "text-zinc-500"}`}
          >
            Senior fractional leadership under one roof
          </span>
        </div>
      )}

      <div
        className={`flex flex-wrap items-center justify-center ${compact ? "gap-x-4 gap-y-2" : "gap-x-6 gap-y-3"} ${isDark ? "text-white/60" : "text-zinc-500"}`}
      >
        {signals.map((signal, i) => {
          const Icon = signal.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-1.5 text-sm font-medium"
            >
              <Icon
                className="w-4 h-4 text-primary shrink-0"
                aria-hidden="true"
              />
              <span>{signal.label}</span>
            </div>
          );
        })}
      </div>

      {!compact && (
        <div
          className={`flex items-center justify-center gap-2 mt-5 ${isDark ? "text-white/50" : "text-zinc-400"}`}
        >
          <Users className="w-4 h-4 shrink-0" aria-hidden="true" />
          <p className="text-xs text-center max-w-md">
            No obligation. No hard pitch. Just clarity. Your information is
            never shared.
          </p>
        </div>
      )}
    </div>
  );
}
