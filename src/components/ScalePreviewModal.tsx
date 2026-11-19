import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowRight, Clock, ClipboardList } from "lucide-react";
import { track } from "@/lib/analytics";

const pillars = [
  { letter: "S", name: "Structure", desc: "Roles, workflows, accountability" },
  { letter: "C", name: "Culture", desc: "Values, behavior, trust" },
  { letter: "A", name: "Alignment", desc: "Priorities, people, systems" },
  {
    letter: "L",
    name: "Liability & Governance",
    desc: "Risk, controls, decision rights",
  },
  {
    letter: "E",
    name: "Execution",
    desc: "Implementation, measurement, review",
  },
];

interface ScalePreviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * Lightweight SCALE™ assessment preview modal. Shows the five pillars and
 * what the assessment covers, then lets the visitor start the full
 * interactive assessment. Reduces drop-off versus a full page navigation
 * from the hero CTA.
 */
export default function ScalePreviewModal({
  open,
  onOpenChange,
}: ScalePreviewModalProps) {
  const navigate = useNavigate();

  const handleStart = () => {
    onOpenChange(false);
    navigate("/scale/assessment");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[560px] p-0 overflow-hidden">
        <div className="bg-dark-section px-7 py-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
            SCALE™ Business Readiness Assessment
          </p>
          <DialogTitle
            className="text-2xl font-bold text-white tracking-tight mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Is your business ready for what comes next?
          </DialogTitle>
          <DialogDescription className="text-zinc-400 text-sm">
            Get a quick read across five pillars in under 10 minutes.
          </DialogDescription>
        </div>

        <div className="px-7 py-6">
          <div className="grid grid-cols-5 gap-2 mb-6">
            {pillars.map((p) => (
              <div
                key={p.letter}
                className="flex flex-col items-center text-center"
              >
                <span
                  className="text-2xl font-bold text-primary mb-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {p.letter}
                </span>
                <span className="text-[10px] font-bold text-[#1A2433] uppercase tracking-wide leading-tight">
                  {p.name}
                </span>
              </div>
            ))}
          </div>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <ClipboardList className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-zinc-600 leading-relaxed">
                5–6 questions per pillar across Structure, Culture, Alignment,
                Liability &amp; Governance, and Execution.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-zinc-600 leading-relaxed">
                Simple agree/disagree scale. Your SCALE™ Score in under 10
                minutes.
              </span>
            </li>
          </ul>

          <button
            onClick={() => {
              track.assessmentStarted("SCALE");
              track.assessmentFunnelStep("SCALE", "preview_started");
              handleStart();
            }}
            className="btn-glow w-full bg-primary text-black hover:bg-primary/90 font-bold text-base px-8 h-13 py-4 rounded-full transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            Start the Assessment <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-center text-xs text-zinc-400 mt-3">
            No email required to see your scorecard.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
