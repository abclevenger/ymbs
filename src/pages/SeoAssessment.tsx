import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import {
  SearchCheck,
  SearchX,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { submitLead, CRM_FIELDS } from "@/lib/crm";

const questions = [
  {
    id: "q1",
    question:
      "When you search for your organization's exact name, what shows up?",
    options: [
      {
        value: "first",
        label: "We are the first result, with a full knowledge panel",
        score: 3,
      },
      {
        value: "page1",
        label: "We are on page 1, but maybe not the top",
        score: 2,
      },
      { value: "buried", label: "We are buried on page 2 or lower", score: 1 },
      { value: "unknown", label: "I haven't checked recently", score: 0 },
    ],
  },
  {
    id: "q2",
    question: "Do you have a Google Business Profile claimed and updated?",
    options: [
      {
        value: "yes",
        label: "Yes, fully optimized with recent posts and reviews",
        score: 3,
      },
      { value: "basic", label: "Yes, but it just has basic info", score: 2 },
      { value: "unclaimed", label: "No, or it's unclaimed", score: 0 },
    ],
  },
  {
    id: "q3",
    question: "How often do you publish new, relevant content on your website?",
    options: [
      { value: "weekly", label: "Weekly or multiple times a month", score: 3 },
      { value: "monthly", label: "Once a month or so", score: 2 },
      {
        value: "rarely",
        label: "Rarely, maybe once or twice a year",
        score: 1,
      },
      { value: "never", label: "Never", score: 0 },
    ],
  },
  {
    id: "q4",
    question: "Is your website mobile-friendly and fast-loading?",
    options: [
      {
        value: "yes",
        label: "Yes, it works perfectly on mobile and loads instantly",
        score: 3,
      },
      { value: "mostly", label: "Mostly, but could be faster", score: 2 },
      { value: "no", label: "No, it's clunky on mobile", score: 0 },
    ],
  },
  {
    id: "q5",
    question: "Do you track your website traffic and keyword rankings?",
    options: [
      {
        value: "yes",
        label: "Yes, using Google Analytics and Search Console",
        score: 3,
      },
      {
        value: "some",
        label: "We have Analytics but rarely look at it",
        score: 1,
      },
      { value: "no", label: "No tracking in place", score: 0 },
    ],
  },
];

export default function SeoAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [isLeadCaptured, setIsLeadCaptured] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [analyzerUrl, setAnalyzerUrl] = useState("");
  const [iframeUrl, setIframeUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    if (analyzerUrl) {
      setIsAnalyzing(true);
      setIframeUrl("");
      setTimeout(() => {
        const url =
          "https://seo.ymbs.pro/go/url/?domain_analyzer=" +
          encodeURIComponent(analyzerUrl) +
          "&hostname=dashboard.searchatlas.com&userId=84791";
        setIframeUrl(url);
        setIsAnalyzing(false);
      }, 2500);
    }
  };

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
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleBack = () => {
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
      formId: "SEO Assessment Form",
      source: "SEO Assessment",
      firstName,
      email,
      customFields: {
        [CRM_FIELDS.seoScore]: percentage.toString(),
        [CRM_FIELDS.seoAnswers]: JSON.stringify(answers),
        [CRM_FIELDS.assessmentType]: "SEO",
        [CRM_FIELDS.assessmentResult]: resultContent.title,
      },
      fieldLabels: {
        [CRM_FIELDS.seoScore]: "SEO Score",
        [CRM_FIELDS.seoAnswers]: "SEO Answers",
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
        icon: <SearchCheck className="w-16 h-16 text-green-500 mb-6" />,
        title: "Strong Visibility",
        description:
          "Your organization has a solid SEO foundation. You are discoverable and actively managing your online presence. Focus on scaling content production.",
        color: "text-green-500",
      };
    } else if (percentage >= 40) {
      return {
        icon: <AlertTriangle className="w-16 h-16 text-yellow-500 mb-6" />,
        title: "Moderate Visibility",
        description:
          "You have the basics down, but you are leaving traffic on the table. A focused effort on technical SEO and content strategy could significantly boost your reach.",
        color: "text-yellow-500",
      };
    } else {
      return {
        icon: <SearchX className="w-16 h-16 text-destructive mb-6" />,
        title: "Poor Visibility",
        description:
          "Your organization is hard to find online. You are missing critical SEO fundamentals, which means people searching for your services cannot find you.",
        color: "text-destructive",
      };
    }
  };

  if (isComplete && !isLeadCaptured) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center py-20 px-6 bg-muted/30">
        <SEOHead
          title="SEO & Visibility Assessment | YMBS"
          description="Free SEO and visibility assessment from YMBS. See how your organization ranks, how findable you are, and what is keeping you hidden."
          canonical="/assessments/seo"
        />

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
        <SEOHead
          title="SEO & Visibility Assessment | YMBS"
          description="Free SEO and visibility assessment from YMBS. See how your organization ranks, how findable you are, and what is keeping you hidden."
          canonical="/assessments/seo"
        />
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
                      Claim and optimize your Google Business Profile
                      immediately.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-white/90">
                      Run a technical site speed audit to ensure mobile
                      friendliness.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-white/90">
                      Schedule a formal SEO Audit with YMBS for a comprehensive
                      keyword strategy.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-12">
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

              <div className="w-full border-t border-border pt-8 mt-4">
                <h3 className="text-xl font-bold mb-4">
                  Want a deeper technical look?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Run your website through our automated Search Atlas analyzer
                  for a comprehensive technical breakdown.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-lg mx-auto">
                  <Input
                    value={analyzerUrl}
                    onChange={(e) => setAnalyzerUrl(e.target.value)}
                    placeholder="Enter a website URL"
                    className="bg-white text-black border-[#B0B0B0] h-12"
                  />
                  <Button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="bg-[#2D6CCA] hover:bg-[#2D6CCA]/90 text-white font-bold h-12 px-8 shrink-0"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      "Analyze My Site"
                    )}
                  </Button>
                </div>

                {isAnalyzing && (
                  <div className="mt-8 w-full max-w-lg mx-auto text-center animate-in fade-in">
                    <p className="text-sm font-medium text-muted-foreground mb-4">
                      Scanning your website for SEO opportunities...
                    </p>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                        className="h-full bg-[#2D6CCA]"
                      />
                    </div>
                  </div>
                )}

                {iframeUrl && !isAnalyzing && (
                  <div className="mt-8 w-full border rounded-xl overflow-hidden shadow-lg bg-white flex flex-col animate-in fade-in slide-in-from-bottom-4">
                    <div className="bg-muted p-3 flex justify-between items-center border-b">
                      <span className="font-semibold text-sm">
                        SEO Report Preview
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(iframeUrl, "_blank")}
                      >
                        Open in New Tab
                      </Button>
                    </div>
                    <iframe
                      src={iframeUrl}
                      className="w-full h-[600px] border-none bg-white"
                      title="SEO Report Preview"
                    />
                  </div>
                )}
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
    <div className="min-h-[80vh] flex flex-col items-center py-20 px-6 bg-muted/30">
      <SEOHead
        title="SEO & Visibility Assessment | YMBS"
        description="Free SEO and visibility assessment from YMBS. See how your organization ranks, how findable you are, and what is keeping you hidden."
        canonical="/assessments/seo"
      />
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SEO & Visibility Audit
          </h1>
          <p className="text-xl text-muted-foreground">
            Find out how easy it is for people to find your organization online.
          </p>
        </div>

        <Card className="mb-12 border-primary/20 bg-primary/5 shadow-sm">
          <CardContent className="p-8 text-center flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-2 text-brand-dark">
              Instant Automated SEO Audit
            </h2>
            <p className="text-muted-foreground mb-6">
              Enter your website URL below for an instant, comprehensive
              technical SEO analysis powered by Search Atlas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
              <Input
                value={analyzerUrl}
                onChange={(e) => setAnalyzerUrl(e.target.value)}
                placeholder="Enter a website URL (e.g. yourdomain.com)"
                className="bg-white text-black border-[#B0B0B0] h-12"
              />
              <Button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="bg-[#2D6CCA] hover:bg-[#2D6CCA]/90 text-white font-bold h-12 px-8 shrink-0"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Analyze My Site"
                )}
              </Button>
            </div>

            {isAnalyzing && (
              <div className="mt-8 w-full max-w-lg mx-auto text-center animate-in fade-in">
                <p className="text-sm font-medium text-muted-foreground mb-4">
                  Scanning your website for SEO opportunities...
                </p>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                    className="h-full bg-[#2D6CCA]"
                  />
                </div>
              </div>
            )}

            {iframeUrl && !isAnalyzing && (
              <div className="mt-8 w-full border rounded-xl overflow-hidden shadow-lg bg-white flex flex-col animate-in fade-in slide-in-from-bottom-4">
                <div className="bg-muted p-3 flex justify-between items-center border-b">
                  <span className="font-semibold text-sm text-foreground">
                    SEO Report Preview
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(iframeUrl, "_blank")}
                  >
                    Open in New Tab
                  </Button>
                </div>
                <iframe
                  src={iframeUrl}
                  className="w-full h-[600px] border-none bg-white"
                  title="SEO Report Preview"
                />
              </div>
            )}
          </CardContent>
        </Card>

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
  );
}
