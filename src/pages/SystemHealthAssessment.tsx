import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import {
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  AlertTriangle,
  CheckCircle,
  Twitter,
  Linkedin,
  Mail,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { submitLead, splitFullName, CRM_FIELDS } from "@/lib/crm";

const questions = [
  {
    id: "q1",
    title: "How do you currently track your sales pipeline and leads?",
    options: [
      {
        text: "We have a fully automated CRM with visible deal stages.",
        score: 10,
      },
      {
        text: "We use a CRM, but it requires a lot of manual data entry.",
        score: 5,
      },
      { text: "We use spreadsheets or rely on our team's memory.", score: 0 },
    ],
  },
  {
    id: "q2",
    title: "When a new lead contacts you, how quickly do they get a response?",
    options: [
      { text: "Instantly. We have automated SMS/email follow-ups.", score: 10 },
      {
        text: "Usually within a few hours when someone checks the inbox.",
        score: 5,
      },
      {
        text: "It can take a day or more, depending on how busy we are.",
        score: 0,
      },
    ],
  },
  {
    id: "q3",
    title: "How many different software tools does your team use daily?",
    options: [
      { text: "1-2 unified platforms that handle everything.", score: 10 },
      {
        text: "3-5 tools, but they don't really talk to each other.",
        score: 5,
      },
      { text: "More than 5. It's a mess of logins and tabs.", score: 0 },
    ],
  },
  {
    id: "q4",
    title: "How do you generate reviews and testimonials from clients?",
    options: [
      { text: "It's fully automated after a successful outcome.", score: 10 },
      { text: "We manually ask them sometimes.", score: 5 },
      { text: "We don't really have a process for this.", score: 0 },
    ],
  },
  {
    id: "q5",
    title:
      "If a key team member left tomorrow, what happens to their processes?",
    options: [
      {
        text: "Nothing stops. Everything is documented and systemized.",
        score: 10,
      },
      {
        text: "It would be a rough transition, but we'd figure it out.",
        score: 5,
      },
      {
        text: "We'd be completely lost. They hold all the knowledge.",
        score: 0,
      },
    ],
  },
  {
    id: "q6",
    title: "How do you handle client or donor onboarding?",
    options: [
      { text: "It is a fully automated, templated process.", score: 10 },
      {
        text: "We have a checklist, but it involves a lot of manual emails.",
        score: 5,
      },
      { text: "Every onboarding is custom and built from scratch.", score: 0 },
    ],
  },
  {
    id: "q7",
    title: "Are your financial and operational metrics available in real-time?",
    options: [
      {
        text: "Yes, we have live dashboards that pull from our systems.",
        score: 10,
      },
      {
        text: "We get reports, but they take days to compile manually.",
        score: 5,
      },
      {
        text: "We only see our numbers when the accountant sends them monthly.",
        score: 0,
      },
    ],
  },
  {
    id: "q8",
    title: "How scalable is your current technology stack?",
    options: [
      {
        text: "Very. We could double our workload tomorrow without breaking.",
        score: 10,
      },
      {
        text: "Somewhat. We would need to hire more people to manage the systems.",
        score: 5,
      },
      {
        text: "Not at all. We are already stretched to the breaking point.",
        score: 0,
      },
    ],
  },
];

export default function SystemHealthAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const { toast } = useToast();

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleOptionSelect = (questionId: string, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        setCurrentStep((prev) => prev + 1); // Move to lead capture
      }
    }, 400);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing fields",
        description: "Please fill out your name and email to get your results.",
        variant: "destructive",
      });
      return;
    }
    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const { firstName, lastName } = splitFullName(formData.name);
    const score = Object.values(answers).reduce((a, b) => a + b, 0);

    const result = await submitLead({
      formId: "System Health Assessment",
      source: "System Health Assessment",
      firstName,
      lastName,
      email: formData.email,
      customFields: {
        [CRM_FIELDS.systemHealthScore]: score.toString(),
        [CRM_FIELDS.assessmentType]: "System Health",
        [CRM_FIELDS.assessmentResult]: resultTier.title,
      },
      fieldLabels: {
        [CRM_FIELDS.systemHealthScore]: "System Health Score",
        [CRM_FIELDS.assessmentType]: "Assessment Type",
        [CRM_FIELDS.assessmentResult]: "Assessment Result",
      },
    });

    setIsSubmitting(false);

    if (!result.ok) {
      setSubmitError(
        "We couldn't save your assessment. Please check your connection and try again.",
      );
      return;
    }

    setShowResults(true);
  };

  const totalScore = Object.values(answers).reduce(
    (acc, curr) => acc + curr,
    0,
  );
  const maxScore = questions.length * 10;
  const percentage = (totalScore / maxScore) * 100;

  let resultTier = { title: "", desc: "", color: "", icon: null as any };
  if (percentage >= 80) {
    resultTier = {
      title: "Optimized & Scalable",
      desc: "Your operational systems are strong. You have high visibility, automated follow-up, and clear processes. Your focus should be on scaling and refining what already works.",
      color: "text-green-600",
      icon: <CheckCircle className="w-16 h-16 text-green-600 mb-4" />,
    };
  } else if (percentage >= 50) {
    resultTier = {
      title: "Functional but Fragmented",
      desc: "You are getting by, but your systems are creating friction. Manual data entry and disconnected tools are likely slowing down your growth and causing leads to slip through the cracks.",
      color: "text-yellow-600",
      icon: <AlertTriangle className="w-16 h-16 text-yellow-600 mb-4" />,
    };
  } else {
    resultTier = {
      title: "High Operational Risk",
      desc: "Your organization is running on manual effort and tribal knowledge. This is a critical bottleneck for growth. You urgently need to consolidate your tools and automate your core processes.",
      color: "text-red-600",
      icon: <ShieldAlert className="w-16 h-16 text-red-600 mb-4" />,
    };
  }

  return (
    <div className="min-h-screen bg-muted/30 py-24 px-6 flex flex-col items-center">
      <SEOHead
        title="System Health Quiz | YMBS"
        description="Free system health quiz from YMBS. Assess your CRM, automation, onboarding, data, and scalability to find the gaps slowing your organization down."
        canonical="/assessments/system-health"
      />

      <div className="max-w-3xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-dark">
            System Health Assessment
          </h1>
          <p className="text-lg text-muted-foreground">
            Find out if your operational systems are built to scale or designed
            to break.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
          {!showResults && (
            <div className="p-8 border-b bg-muted/10">
              <div className="flex justify-between text-sm font-medium text-muted-foreground mb-4">
                <span>
                  Step {Math.min(currentStep + 1, questions.length + 1)} of{" "}
                  {questions.length + 1}
                </span>
                <span>
                  {Math.round((currentStep / (questions.length + 1)) * 100)}%
                </span>
              </div>
              <Progress
                value={(currentStep / (questions.length + 1)) * 100}
                className="h-2"
              />
            </div>
          )}

          <div className="p-8 md:p-12 min-h-[400px] flex flex-col justify-center relative">
            <AnimatePresence mode="wait">
              {/* Questions */}
              {!showResults && currentStep < questions.length && (
                <motion.div
                  key={`q-${currentStep}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-brand-dark leading-tight">
                    {questions[currentStep].title}
                  </h2>
                  <div className="space-y-4">
                    {questions[currentStep].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() =>
                          handleOptionSelect(
                            questions[currentStep].id,
                            option.score,
                          )
                        }
                        className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group
                          ${
                            answers[questions[currentStep].id] === option.score
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50 hover:bg-muted/50"
                          }`}
                      >
                        <span className="text-lg font-medium text-brand-dark group-hover:text-primary transition-colors">
                          {option.text}
                        </span>
                        {answers[questions[currentStep].id] ===
                          option.score && (
                          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 ml-4" />
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Lead Capture */}
              {!showResults && currentStep === questions.length && (
                <motion.div
                  key="lead-capture"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="text-center max-w-md mx-auto"
                >
                  <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-brand-dark">
                    Assessment Complete
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Enter your details to instantly view your System Health
                    score and get a custom PDF report.
                  </p>

                  <form
                    onSubmit={handleFormSubmit}
                    className="space-y-4 text-left"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="h-12"
                      />
                    </div>
                    {submitError && (
                      <p className="text-sm text-red-500 flex items-center gap-1.5 mb-3">
                        <AlertCircle className="w-4 h-4" /> {submitError}
                      </p>
                    )}
                    <Button
                      type="submit"
                      className="w-full h-12 text-lg font-bold bg-brand-dark text-white hover:bg-brand-dark/90 mt-4"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          CALCULATING...
                        </>
                      ) : (
                        "SHOW MY RESULTS"
                      )}
                    </Button>
                  </form>
                </motion.div>
              )}

              {/* Results */}
              {showResults && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <div className="flex justify-center">{resultTier.icon}</div>
                  <h2 className={`text-4xl font-bold mb-2 ${resultTier.color}`}>
                    {resultTier.title}
                  </h2>
                  <p className="text-2xl font-bold text-brand-dark mb-6">
                    Score: {totalScore} / {maxScore}
                  </p>

                  <div className="w-full bg-muted rounded-full h-4 mb-8 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-full rounded-full ${percentage >= 80 ? "bg-green-500" : percentage >= 50 ? "bg-yellow-500" : "bg-red-500"}`}
                    />
                  </div>

                  <div className="bg-muted/30 p-8 rounded-xl border border-border mb-8 text-left">
                    <h3 className="font-bold text-xl mb-4 text-brand-dark">
                      What this means:
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {resultTier.desc}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6 h-auto text-lg">
                      GET CLARITY
                    </Button>
                    <Button
                      variant="outline"
                      className="font-bold px-8 py-6 h-auto text-lg"
                      onClick={() => window.location.reload()}
                    >
                      RETAKE ASSESSMENT
                    </Button>
                  </div>

                  <div className="border-t border-border pt-8">
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">
                      Share your results
                    </p>
                    <div className="flex gap-4 justify-center">
                      <a
                        href={`https://twitter.com/intent/tweet?text=I just scored ${totalScore}/${maxScore} on the YMBS System Health Assessment! Check your operational health here: https://ymbs.pro/assessments/system-health`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-muted rounded-full hover:bg-primary/20 transition-colors"
                        aria-label="Share on Twitter"
                      >
                        <Twitter className="w-5 h-5 text-brand-dark" />
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://ymbs.pro/assessments/system-health`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-muted rounded-full hover:bg-primary/20 transition-colors"
                        aria-label="Share on LinkedIn"
                      >
                        <Linkedin className="w-5 h-5 text-brand-dark" />
                      </a>
                      <a
                        href={`mailto:?subject=System Health Assessment&body=I just took the YMBS System Health Assessment. You can take it here: https://ymbs.pro/assessments/system-health`}
                        className="p-3 bg-muted rounded-full hover:bg-primary/20 transition-colors"
                        aria-label="Share via Email"
                      >
                        <Mail className="w-5 h-5 text-brand-dark" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
