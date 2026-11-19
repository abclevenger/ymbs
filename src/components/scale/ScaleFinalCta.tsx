import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ScaleFinalCta() {
  return (
    <section className="py-40 bg-dark-section relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(252,223,2,0.15),transparent)]"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight leading-tight">
          Find out if your business is ready for what comes next.
        </h2>
        <p className="text-xl text-zinc-400 mb-14 max-w-2xl mx-auto">
          Take the free SCALE&trade; Assessment and get your personalized
          scorecard in under 10 minutes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/scale/assessment">
            <Button className="btn-glow bg-primary text-black hover:bg-primary/90 font-bold px-12 py-8 h-auto text-xl rounded-full transition-all duration-300 hover:-translate-y-1">
              Take the Free Assessment <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              variant="outline"
              className="bg-white/5 border-white/10 text-white hover:bg-white/10 font-bold px-12 py-8 h-auto text-xl rounded-full transition-all duration-300 backdrop-blur-md"
            >
              Get Clarity
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
