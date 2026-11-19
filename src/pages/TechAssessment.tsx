import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import {
  MonitorCheck,
  MonitorX,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Twitter,
  Linkedin,
  Mail,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { track, initScrollDepthTracking } from "@/lib/analytics";
import SEOHead from "@/components/SEOHead";
import { captureAttribution } from "@/lib/attribution";
import { submitLead, CRM_FIELDS } from "@/lib/crm";

const questions = [
  {
    id: "q1",
    question: "How many software tools does your team use daily?",
    options: [
      {
        value: "few",
        label: "1-3 core tools that integrate perfectly",
        score: 3,
      },
      { value: "some", label: "4-7 tools, some integration", score: 2 },
      { value: "many", label: "8+ tools, mostly disconnected", score: 1 },
      {
        value: "unknown",
        label: "I'm not exactly sure what everyone is using",
        score: 0,
      },
    ],
  },
  {
    id: "q2",
    question: "How often do you deal with double data entry?",
    options: [
      { value: "never", label: "Never, systems sync automatically", score: 3 },
      { value: "rarely", label: "Rarely, only for edge cases", score: 2 },
      { value: "often", label: "Often, it's a daily frustration", score: 1 },
      { value: "always", label: "Always, it's how we operate", score: 0 },
    ],
  },
  {
    id: "q3",
    question:
      "Are you paying for software subscriptions that aren't being used?",
    options: [
      { value: "no", label: "No, we audit our tech stack regularly", score: 3 },
      { value: "maybe", label: "Maybe a few, but nothing major", score: 2 },
      { value: "yes", label: "Yes, definitely", score: 1 },
      { value: "unknown", label: "I have no idea", score: 0 },
    ],
  },
  {
    id: "q4",
    question: "How difficult is it to onboard a new employee to your systems?",
    options: [
      {
        value: "easy",
        label: "Very easy, everything is documented and central",
        score: 3,
      },
      {
        value: "moderate",
        label: "Moderate, takes a few days of shadowing",
        score: 2,
      },
      {
        value: "hard",
        label: "Hard, takes weeks to figure everything out",
        score: 1,
      },
      {
        value: "nightmare",
        label: "A nightmare, they just figure it out over time",
        score: 0,
      },
    ],
  },
  {
    id: "q5",
    question: "Do your tools provide clear, actionable data for leadership?",
    options: [
      { value: "yes", label: "Yes, we have real-time dashboards", score: 3 },
      {
        value: "somewhat",
        label: "Somewhat, but it requires manual report building",
        score: 2,
      },
      { value: "no", label: "No, getting data is a major project", score: 1 },
      { value: "none", label: "We don't really track data", score: 0 },
    ],
  },
  {
    id: "q6",
    question: "How do you manage IT support requests and issues?",
    options: [
      {
        value: "ticketing",
        label: "We use a central ticketing system with clear SLAs",
        score: 3,
      },
      {
        value: "email",
        label: "We email or message the IT person/MSP directly",
        score: 1,
      },
      {
        value: "none",
        label: "We don't really have a formal process",
        score: 0,
      },
    ],
  },
  {
    id: "q7",
    question: "Do you have a clear strategy for remote or hybrid work?",
    options: [
      {
        value: "yes",
        label: "Yes, all tools are cloud-based and accessible anywhere",
        score: 3,
      },
      {
        value: "mixed",
        label: "Most are, but we rely on VPNs or local servers for some",
        score: 2,
      },
      {
        value: "no",
        label: "No, working remotely is very difficult",
        score: 0,
      },
    ],
  },
  {
    id: "q8",
    question:
      "Are your technology systems compliant with relevant industry regulations?",
    options: [
      {
        value: "yes",
        label: "Yes, we undergo regular compliance audits",
        score: 3,
      },
      {
        value: "maybe",
        label: "We think so, but haven't audited recently",
        score: 1,
      },
      {
        value: "no",
        label: "No, or we are not sure what applies to us",
        score: 0,
      },
    ],
  },
];

export default function TechAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [isLeadCaptured, setIsLeadCaptured] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    captureAttribution();
    const cleanup = initScrollDepthTracking("/assessments/technology");
    track.highIntentPageView("/assessments/technology", "Technology");
    return cleanup;
  }, []);

  // Track form abandonment
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (!isComplete) {
        track.assessmentFunnelStep(
          "technology_assessment",
          `abandoned_at_question_${currentStep + 1}`,
        );
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [currentStep, isComplete]);

  const handleOptionSelect = (value: string) => {
    const option = questions[currentStep].options.find(
      (o) => o.value === value,
    );
    if (option) {
      setAnswers((prev) => ({
        ...prev,
        [questions[currentStep].id]: option.score,
      }));
    }
  };

  const handleNext = () => {
    track.assessmentFunnelStep(
      "technology_assessment",
      `question_${currentStep + 1}_answered`,
    );
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      track.assessmentFunnelStep("technology_assessment", "completed");
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    track.assessmentFunnelStep(
      "technology_assessment",
      `question_${currentStep + 1}_back`,
    );
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const email = formData.get("email") as string;

    setIsSubmitting(true);
    setSubmitError(null);

    const { percentage } = calculateScore();
    const resultContent = getResultContent(percentage);

    const result = await submitLead({
      formId: "Technology Assessment Form",
      source: "Technology Assessment",
      firstName,
      email,
      includeAttribution: true,
      customFields: {
        [CRM_FIELDS.technologyScore]: percentage.toString(),
        [CRM_FIELDS.technologyAnswers]: JSON.stringify(answers),
        [CRM_FIELDS.assessmentType]: "Technology",
        [CRM_FIELDS.assessmentResult]: resultContent.title,
      },
      fieldLabels: {
        [CRM_FIELDS.technologyScore]: "Technology Score",
        [CRM_FIELDS.technologyAnswers]: "Technology Answers",
        [CRM_FIELDS.assessmentType]: "Assessment Type",
        [CRM_FIELDS.assessmentResult]: "Assessment Result",
      },
    });

    setIsSubmitting(false);

    if (!result.ok) {
      setSubmitError(
        "We couldn't save your assessment results. Please check your connection and try again.",
      );
      return;
    }

    track.assessmentStarted("Technology");
    track.assessmentCompleted("Technology");
    track.contactFormSubmitted("Technology", undefined);
    setIsLeadCaptured(true);
  };

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce(
      (acc, curr) => acc + curr,
      0,
    );
    const maxScore = questions.length * 3;
    const percentage = Math.round((totalScore / maxScore) * 100);
    return { totalScore, percentage };
  };

  const getResultContent = (percentage: number) => {
    if (percentage >= 80) {
      return {
        icon: <MonitorCheck className="w-16 h-16 text-green-500 mb-6" />,
        title: "Optimized Tech Stack",
        description:
          "Your technology infrastructure is well-aligned with your operations. Your tools integrate well, and your team is using them effectively. Keep auditing annually to stay lean.",
        color: "text-green-500",
      };
    } else if (percentage >= 40) {
      return {
        icon: <AlertTriangle className="w-16 h-16 text-yellow-500 mb-6" />,
        title: "Fragmented Systems",
        description:
          "You have decent tools, but they aren't working together. Your team is likely wasting time on data entry and workarounds. A technology audit could consolidate your stack and save money.",
        color: "text-yellow-500",
      };
    } else {
      return {
        icon: <MonitorX className="w-16 h-16 text-destructive mb-6" />,
        title: "Critical Tech Debt",
        description:
          "Your technology is actively holding your organization back. You are likely paying for unused tools while struggling with manual processes. A full reset and consolidation is highly recommended.",
        color: "text-destructive",
      };
    }
  };

  if (isComplete && !isLeadCaptured) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center py-20 px-6 bg-muted/30">
        <div className="max-w-xl w-full text-center">
          <Card className="border-border shadow-lg">
            <CardContent className="pt-12 pb-12 px-8 flex flex-col items-center">
              <h2 className="text-3xl font-bold mb-4">Your Report is Ready</h2>
              <p className="text-muted-foreground mb-8">
                Enter your email to view your results instantly and get a
                detailed PDF report sent to your inbox.
              </p>
              <form
                onSubmit={handleLeadSubmit}
                className="w-full space-y-4 text-left"
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
                    "VIEW MY RESULTS & GET PDF"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (isComplete && isLeadCaptured) {
    const { percentage } = calculateScore();
    const result = getResultContent(percentage);

    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center py-20 px-6 bg-muted/30">
        <div className="max-w-2xl w-full text-center">
          <Card className="border-border shadow-lg">
            <CardContent className="pt-12 pb-12 px-8 flex flex-col items-center">
              {result.icon}
              <h2 className="text-4xl font-bold mb-4">Assessment Complete</h2>
              <p className={`text-2xl font-bold mb-6 ${result.color}`}>
                {result.title}
              </p>

              <div className="w-full bg-muted rounded-full h-4 mb-8 overflow-hidden">
                <div
                  className={`h-full ${percentage >= 80 ? "bg-green-500" : percentage >= 40 ? "bg-yellow-500" : "bg-destructive"}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <p className="text-lg text-muted-foreground mb-10 leading-relaxed text-balance">
                {result.description}
              </p>

              <div className="bg-brand-dark text-white rounded-xl p-8 w-full text-left mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Recommended Next Steps:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-white/90">
                      Review your current software subscriptions and cancel
                      unused tools.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-white/90">
                      Identify the top 2 processes causing manual data entry and
                      explore integrations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-white/90">
                      Schedule a formal technology audit with YMBS to build a
                      consolidation roadmap.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-8">
                <Button size="lg" className="font-bold px-8">
                  Get Clarity
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    setIsComplete(false);
                    setIsLeadCaptured(false);
                    setCurrentStep(0);
                    setAnswers({});
                  }}
                >
                  RETAKE ASSESSMENT
                </Button>
              </div>

              <div className="border-t border-border pt-8 w-full mt-4">
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">
                  Share your results
                </p>
                <div className="flex gap-4 justify-center">
                  <a
                    href={`https://twitter.com/intent/tweet?text=I just took the YMBS Technology Assessment and scored ${percentage}%! Check your tech stack here: https://ymbs.pro/assessments/technology`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-5 h-5 text-brand-dark" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=https://ymbs.pro/assessments/technology`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-brand-dark" />
                  </a>
                  <a
                    href={`mailto:?subject=Technology Assessment&body=I just took the YMBS Technology Assessment. You can take it here: https://ymbs.pro/assessments/technology`}
                    className="p-3 bg-muted rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="Share via Email"
                  >
                    <Mail className="w-5 h-5 text-brand-dark" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const progress = (currentStep / questions.length) * 100;
  const hasAnsweredCurrent = answers[currentQuestion.id] !== undefined;

  return (
    <>
      <SEOHead
        title="Technology Assessment | YMBS"
        description="Free technology assessment from YMBS. Find out how connected, scalable, and secure your technology stack really is—and what to fix first."
        canonical="/assessments/technology"
      />
      <div className="min-h-[80vh] flex flex-col items-center py-20 px-6 bg-muted/30">
        <div className="max-w-3xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Technology Assessment
            </h1>
            <p className="text-xl text-muted-foreground">
              Find out if your tech stack is helping or hurting your
              organization.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between text-sm font-medium text-muted-foreground mb-2">
              <span>
                Question {currentStep + 1} of {questions.length}
              </span>
              <span>{Math.round(progress)}% Completed</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="border-border shadow-sm overflow-hidden">
            <CardContent className="p-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 md:p-12"
                >
                  <h2 className="text-2xl font-bold mb-8 text-brand-dark leading-tight">
                    {currentQuestion.question}
                  </h2>

                  <RadioGroup
                    className="space-y-4"
                    value={
                      questions[currentStep].options.find(
                        (o) => o.score === answers[currentQuestion.id],
                      )?.value
                    }
                    onValueChange={handleOptionSelect}
                  >
                    {currentQuestion.options.map((option, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 space-y-0 p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5"
                      >
                        <RadioGroupItem
                          value={option.value}
                          id={`option-${idx}`}
                          className="mt-0.5"
                        />
                        <Label
                          htmlFor={`option-${idx}`}
                          className="text-base font-medium cursor-pointer leading-relaxed flex-grow"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>

                  <div className="flex justify-between mt-12 pt-6 border-t border-border">
                    <Button
                      variant="ghost"
                      onClick={handleBack}
                      disabled={currentStep === 0}
                      className="font-medium"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      disabled={!hasAnsweredCurrent}
                      className="font-bold px-8"
                    >
                      {currentStep === questions.length - 1
                        ? "See Results"
                        : "Next Question"}{" "}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
