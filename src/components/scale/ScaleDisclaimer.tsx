import { FileWarning } from "lucide-react";

export default function ScaleDisclaimer() {
  return (
    <section className="py-20 bg-alt-section border-t border-zinc-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl border border-zinc-200 p-8">
          <div className="flex items-start gap-4">
            <FileWarning className="w-6 h-6 text-zinc-400 shrink-0 mt-1" />
            <p className="text-zinc-600 leading-relaxed text-sm">
              <span className="font-bold text-zinc-900">Disclaimer: </span>
              YMBS provides business consulting, technology, operations,
              marketing, leadership, and strategic advisory services. YMBS is
              not a law firm and does not provide legal advice. The SCALE&trade;
              Framework may identify areas where review by legal counsel,
              accounting, insurance, HR, or other licensed professionals should
              be considered. Any professional services are provided
              independently under separate engagements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
