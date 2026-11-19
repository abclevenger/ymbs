import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  ShieldCheck,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { captureAttribution, buildAttributionPayload } from "@/lib/attribution";
import { submitLead } from "@/lib/crm";
import { track } from "@/lib/analytics";
import SEOHead from "@/components/SEOHead";

export default function AssessmentResults() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [attributionDebug, setAttributionDebug] = useState<Record<
    string,
    string
  > | null>(null);

  useEffect(() => {
    captureAttribution();
    // For QA visibility — remove in production
    setAttributionDebug(buildAttributionPayload());
    track.highIntentPageView("/assessments/results", "Assessment");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const organization = formData.get("organization") as string;

    setIsSubmitting(true);
    setSubmitError(null);

    const result = await submitLead({
      formId: "Assessment Results Capture",
      source: "Assessment Results",
      firstName,
      email,
      phone,
      organization,
      includeAttribution: true,
    });

    setIsSubmitting(false);

    if (!result.ok) {
      setSubmitError(
        "We couldn't deliver your results. Please check your connection and try again.",
      );
      return;
    }

    track.assessmentCompleted("general");
    track.contactFormSubmitted("assessment", undefined);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center py-20 px-6 bg-muted/30">
        <div className="max-w-xl w-full text-center">
          <Card className="border-border shadow-lg">
            <CardContent className="pt-12 pb-12 px-8 flex flex-col items-center">
              <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Results Delivered</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                Your full assessment report and personalized recommendations are
                on the way. We'll be in touch within one business day to
                schedule your review.
              </p>
              <Link to="/contact">
                <Button size="lg" className="font-bold px-8">
                  Get Clarity <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center py-20 px-6 bg-muted/30">
      <SEOHead
        title="Assessment Results | YMBS"
        description="Your YMBS assessment results and recommended next steps."
        canonical="/assessments/results"
        noIndex
      />
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Your Assessment Results Are Ready
          </h1>
          <p className="text-xl text-muted-foreground">
            Enter your details to unlock your full report and personalized
            recommendations.
          </p>
        </div>

        <Card className="border-border shadow-lg">
          <CardContent className="pt-12 pb-12 px-8">
            <form
              onSubmit={handleSubmit}
              className="w-full space-y-5 text-left"
            >
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
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
                <p className="text-sm text-red-500 flex items-center gap-1.5 mb-3">
                  <AlertCircle className="w-4 h-4" /> {submitError}
                </p>
              )}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full font-bold mt-4"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    UNLOCK MY RESULTS <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>

            {/* Attribution debug panel — QA only */}
            {attributionDebug &&
              Object.values(attributionDebug).some((v) => v) && (
                <div className="mt-8 pt-6 border-t border-zinc-200">
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                    Attribution Captured (QA)
                  </p>
                  <div className="bg-zinc-50 rounded-lg p-4 text-xs space-y-1 max-h-40 overflow-y-auto">
                    {Object.entries(attributionDebug)
                      .filter(([, v]) => v)
                      .map(([k, v]) => (
                        <div key={k} className="flex justify-between gap-2">
                          <span className="text-zinc-500">
                            {k.replace("contact.", "")}:
                          </span>
                          <span className="text-zinc-700 font-medium truncate">
                            {v}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              )}
          </CardContent>
        </Card>

        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            <p className="text-xs text-muted-foreground font-medium">
              Personalized Report
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <p className="text-xs text-muted-foreground font-medium">
              No Obligation
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-primary" />
            <p className="text-xs text-muted-foreground font-medium">
              Actionable Next Steps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
