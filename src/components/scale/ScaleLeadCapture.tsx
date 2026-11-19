// Lead-capture gate shown after the SCALE quiz is completed, before results.
// Submits to the CRM with all pillar scores + answers. Results are only
// revealed after a confirmed successful CRM submission.
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  isSubmitting: boolean;
  submitError: string | null;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function ScaleLeadCapture({
  isSubmitting,
  submitError,
  onSubmit,
}: Props) {
  return (
    <section className="py-16 px-6 bg-light-section flex-1">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-light rounded-3xl p-10 md:p-14 text-center"
        >
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">
            Your SCALE™ Scorecard is Ready
          </h2>
          <p className="text-lg text-zinc-500 mb-8 max-w-md mx-auto">
            Enter your details to unlock your full scorecard across all five
            pillars. We'll also send your results to your inbox.
          </p>

          <form
            onSubmit={onSubmit}
            className="space-y-4 text-left max-w-md mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@company.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="organization">Organization</Label>
              <Input
                id="organization"
                name="organization"
                placeholder="Acme Corp"
              />
            </div>

            {submitError && (
              <p className="text-sm text-red-500 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> {submitError}
              </p>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-black hover:bg-primary/90 font-bold text-lg py-7 h-auto rounded-full transition-all hover:-translate-y-0.5"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                  Saving Your Results...
                </>
              ) : (
                <>
                  Reveal My Scorecard <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
