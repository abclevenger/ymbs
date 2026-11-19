import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import {
  isBlogHost,
  default as BlogLayout,
} from "@/components/layout/BlogLayout";
import { resolveLegacyRedirect, resolveBlogRedirect } from "@/lib/redirects";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Operations from "./pages/Operations";
import Leadership from "./pages/Leadership";
import Communications from "./pages/Communications";
import Services from "./pages/Services";

import Insights from "./pages/Insights";
import CyberAssessment from "./pages/CyberAssessment";
import TechAssessment from "./pages/TechAssessment";
import SeoAssessment from "./pages/SeoAssessment";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";
import A2p from "./pages/A2p";
import Accessibility from "./pages/Accessibility";
import Layout from "./components/layout/Layout";
import SystemHealthAssessment from "./pages/SystemHealthAssessment";
import AssessmentDashboard from "./pages/AssessmentDashboard";
import Elevation from "./pages/Elevation";
import SeoServices from "./pages/SeoServices";
import Portfolio from "./pages/Portfolio";
import Team from "./pages/Team";
import Sitemap from "./pages/Sitemap";
import Suppliers from "./pages/Suppliers";
import Support from "./pages/Support";
import LlmKnowledge from "./pages/LlmKnowledge";
import ScaleFramework from "./pages/ScaleFramework";
import ScaleAssessment from "./pages/ScaleAssessment";
import MichelleGriffith from "./pages/MichelleGriffith";
import ExecutiveReadinessIntensive from "./pages/ExecutiveReadinessIntensive";
import LawFirmPRSystem from "./pages/LawFirmPRSystem";
import NonprofitConsulting from "./pages/NonprofitConsulting";
import LawFirmTechnology from "./pages/LawFirmTechnology";
import FractionalCOO from "./pages/FractionalCOO";
import StrategicPlanning from "./pages/StrategicPlanning";
import MissionFoundation from "./pages/MissionFoundation";
import IntegratedExecutiveAdvisory from "./pages/IntegratedExecutiveAdvisory";
import CompanyProfile from "./pages/CompanyProfile";
import ClientResults from "./pages/ClientResults";
import ThaniaClevenger from "./pages/ThaniaClevenger";
import AshleyClevenger from "./pages/AshleyClevenger";
import NestorOrtiz from "./pages/NestorOrtiz";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import CaseStudyLawFirmIntake from "./pages/CaseStudyLawFirmIntake";
import CaseStudyNonprofitTech from "./pages/CaseStudyNonprofitTech";
import CaseStudyLawFirmWebsite from "./pages/CaseStudyLawFirmWebsite";
import CaseStudyNonprofitGovernance from "./pages/CaseStudyNonprofitGovernance";
import CaseStudyExecutiveReadiness from "./pages/CaseStudyExecutiveReadiness";
import AssessmentResults from "./pages/AssessmentResults";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import BlogSubdomainRedirect from "./pages/BlogSubdomainRedirect";
import InsightsArticle from "./pages/InsightsArticle";
import AiAutomation from "./pages/services/AiAutomation";
import Cybersecurity from "./pages/services/Cybersecurity";
import Connectivity from "./pages/services/Connectivity";
import CrmWorkflow from "./pages/services/CrmWorkflow";
import WebsiteSeo from "./pages/services/WebsiteSeo";
import IotPhysicalSecurity from "./pages/services/IotPhysicalSecurity";
import DigitalSignage from "./pages/services/DigitalSignage";
import SoftwareSolutions from "./pages/services/SoftwareSolutions";
import MobilityWorkforce from "./pages/services/MobilityWorkforce";
import ReputationManagement from "./pages/services/ReputationManagement";
import ExecutiveCommunications from "./pages/services/ExecutiveCommunications";
import Governance from "./pages/services/Governance";
import CommunityEngagement from "./pages/services/CommunityEngagement";
import { initCrossDomainTracking } from "@/lib/analytics";
import { MotionConfig } from "framer-motion";
import { useEffect } from "react";
import TechnologyHub from "./pages/TechnologyHub";
import ProfessionalServices from "./pages/ProfessionalServices";
import MissionDriven from "./pages/MissionDriven";
import PartnerNetwork from "./pages/PartnerNetwork";
import AssessmentsHub from "./pages/AssessmentsHub";
import SolutionOrganizationalGrowth from "./pages/solutions/OrganizationalGrowth";
import SolutionAiAdoption from "./pages/solutions/AiAdoption";
import SolutionTechnologyModernization from "./pages/solutions/TechnologyModernization";
import SolutionOrganizationalChange from "./pages/solutions/OrganizationalChange";
const queryClient = new QueryClient();

const onBlogHost = isBlogHost();
initCrossDomainTracking();

/**
 * Client-side fallback for legacy .html URLs on the main domain.
 * The server (_redirects) already issues 301s, but this guarantees a
 * correct redirect even on hosts that ignore _redirects, and prevents
 * the NotFound shell from rendering as a soft-404.
 * Renders NotFound when no legacy match exists.
 */
function LegacyRedirectHandler() {
  const location = useLocation();
  const dest =
    resolveLegacyRedirect(location.pathname) ||
    resolveBlogRedirect(location.pathname);
  useEffect(() => {
    if (dest) {
      window.location.replace(dest);
    }
  }, [dest, location.pathname]);
  if (dest) {
    // Redirect screen — noindex so the brief flash is never indexed
    useEffect(() => {
      let meta = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "robots";
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", "noindex");
      return () => {
        if (meta?.getAttribute("content") === "noindex") meta.remove();
      };
    }, []);
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B1D33] text-white">
        <p className="text-white/60">Redirecting…</p>
      </div>
    );
  }
  return <NotFound />;
}

/**
 * Redirects the retired /blog routes to the canonical /insights blog.
 * /blog → /insights
 * /blog/:slug → /insights/:slug
 * Uses window.location.replace so the old URL never enters browser history
 * and Google treats it as a 301-style consolidation.
 */
function BlogRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1D33] text-white">
      <p className="text-white/60">Redirecting…</p>
    </div>
  );
}

function BlogSlugRedirect() {
  const location = useLocation();
  const slug = location.pathname.split("/").filter(Boolean)[1];
  const dest = slug ? `/insights/${slug}` : "/insights";
  useEffect(() => {
    window.location.replace(dest);
  }, [dest]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1D33] text-white">
      <p className="text-white/60">Redirecting…</p>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <MotionConfig reducedMotion="user">
          <BrowserRouter>
            {onBlogHost ? (
              <BlogLayout>
                <Routes>
                  <Route path="/" element={<Blog />} />
                  <Route path="/:slug" element={<BlogArticle />} />
                  {/* On the subdomain, /blog/:slug redirects to /:slug (canonical) */}
                  <Route
                    path="/blog/:slug"
                    element={<BlogSubdomainRedirect />}
                  />
                  {/* Legacy /post/:slug → canonical article, or 404 if no replacement */}
                  <Route
                    path="/post/:slug"
                    element={<BlogSubdomainRedirect />}
                  />
                  {/* Multi-segment unknown paths (e.g. /behind-the-brand/tag/x) → 404, not blog index */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BlogLayout>
            ) : (
              <Layout>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/operations" element={<Operations />} />
                  <Route
                    path="/services/technology"
                    element={<TechnologyHub />}
                  />
                  <Route path="/services/leadership" element={<Leadership />} />
                  <Route
                    path="/services/communications"
                    element={<Communications />}
                  />
                  {/* Keeping old routes for backward compatibility if needed, or redirecting. We'll just map them to the same components for now */}
                  <Route path="/insights" element={<Insights />} />
                  <Route
                    path="/assessments/cyber-readiness"
                    element={<CyberAssessment />}
                  />
                  <Route
                    path="/assessments/technology"
                    element={<TechAssessment />}
                  />
                  <Route path="/assessments/seo" element={<SeoAssessment />} />
                  <Route
                    path="/assessments/system-health"
                    element={<SystemHealthAssessment />}
                  />
                  <Route
                    path="/assessments/dashboard"
                    element={<AssessmentDashboard />}
                  />
                  {/* Central assessments hub — diagnostic entry point */}
                  <Route path="/assessments" element={<AssessmentsHub />} />
                  {/* Cross-pillar solution pages — enter through the problem */}
                  <Route
                    path="/solutions/organizational-growth"
                    element={<SolutionOrganizationalGrowth />}
                  />
                  <Route
                    path="/solutions/ai-adoption"
                    element={<SolutionAiAdoption />}
                  />
                  <Route
                    path="/solutions/technology-modernization"
                    element={<SolutionTechnologyModernization />}
                  />
                  <Route
                    path="/solutions/organizational-change"
                    element={<SolutionOrganizationalChange />}
                  />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/policy" element={<Policy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/a2p" element={<A2p />} />
                  <Route path="/accessibility" element={<Accessibility />} />
                  <Route path="/elevation" element={<Elevation />} />
                  <Route path="/services/seo" element={<SeoServices />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/sitemap" element={<Sitemap />} />
                  <Route path="/suppliers" element={<Suppliers />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/llm-knowledge" element={<LlmKnowledge />} />
                  <Route path="/scale" element={<ScaleFramework />} />
                  <Route
                    path="/scale/assessment"
                    element={<ScaleAssessment />}
                  />
                  <Route
                    path="/michelle-griffith"
                    element={<MichelleGriffith />}
                  />
                  <Route
                    path="/executive-readiness-intensive"
                    element={<ExecutiveReadinessIntensive />}
                  />
                  <Route
                    path="/law-firm-pr-system"
                    element={<LawFirmPRSystem />}
                  />
                  <Route
                    path="/nonprofit-consulting"
                    element={<NonprofitConsulting />}
                  />
                  <Route
                    path="/professional-services"
                    element={<ProfessionalServices />}
                  />
                  <Route
                    path="/mission-driven-organizations"
                    element={<MissionDriven />}
                  />
                  <Route path="/partners" element={<PartnerNetwork />} />
                  <Route
                    path="/law-firm-technology"
                    element={<LawFirmTechnology />}
                  />
                  <Route path="/fractional-coo" element={<FractionalCOO />} />
                  <Route
                    path="/strategic-planning"
                    element={<StrategicPlanning />}
                  />
                  <Route
                    path="/mission-foundation"
                    element={<MissionFoundation />}
                  />
                  <Route
                    path="/integrated-executive-advisory"
                    element={<IntegratedExecutiveAdvisory />}
                  />
                  <Route path="/company-profile" element={<CompanyProfile />} />
                  <Route path="/client-results" element={<ClientResults />} />
                  <Route
                    path="/thania-clevenger"
                    element={<ThaniaClevenger />}
                  />
                  <Route
                    path="/ashley-clevenger"
                    element={<AshleyClevenger />}
                  />
                  <Route path="/nestor-ortiz" element={<NestorOrtiz />} />
                  <Route
                    path="/analytics-dashboard"
                    element={<AnalyticsDashboard />}
                  />
                  <Route
                    path="/case-studies/law-firm-intake-automation"
                    element={<CaseStudyLawFirmIntake />}
                  />
                  <Route
                    path="/case-studies/nonprofit-tech-consolidation"
                    element={<CaseStudyNonprofitTech />}
                  />
                  <Route
                    path="/case-studies/law-firm-website-transformation"
                    element={<CaseStudyLawFirmWebsite />}
                  />
                  <Route
                    path="/case-studies/nonprofit-governance-operations"
                    element={<CaseStudyNonprofitGovernance />}
                  />
                  <Route
                    path="/case-studies/executive-readiness-stakeholder-comms"
                    element={<CaseStudyExecutiveReadiness />}
                  />
                  <Route
                    path="/assessments/results"
                    element={<AssessmentResults />}
                  />
                  {/* Insights — the single canonical blog. /insights/:slug is the
                    article detail page. */}
                  <Route path="/insights/:slug" element={<InsightsArticle />} />
                  {/* Legacy /blog routes redirect to /insights to consolidate the
                    two blog systems into one canonical blog. */}
                  <Route
                    path="/blog"
                    element={<BlogRedirect to="/insights" />}
                  />
                  <Route path="/blog/:slug" element={<BlogSlugRedirect />} />
                  {/* Technology sub-services */}
                  <Route
                    path="/services/technology/ai-automation"
                    element={<AiAutomation />}
                  />
                  <Route
                    path="/services/technology/cybersecurity"
                    element={<Cybersecurity />}
                  />
                  <Route
                    path="/services/technology/connectivity"
                    element={<Connectivity />}
                  />
                  <Route
                    path="/services/technology/crm-workflow"
                    element={<CrmWorkflow />}
                  />
                  <Route
                    path="/services/technology/website-seo"
                    element={<WebsiteSeo />}
                  />
                  <Route
                    path="/services/technology/iot-physical-security"
                    element={<IotPhysicalSecurity />}
                  />
                  <Route
                    path="/services/technology/digital-signage"
                    element={<DigitalSignage />}
                  />
                  <Route
                    path="/services/technology/software-solutions"
                    element={<SoftwareSolutions />}
                  />
                  <Route
                    path="/services/technology/mobility-workforce"
                    element={<MobilityWorkforce />}
                  />
                  {/* Communications sub-services */}
                  <Route
                    path="/services/communications/reputation-management"
                    element={<ReputationManagement />}
                  />
                  <Route
                    path="/services/communications/executive-communications"
                    element={<ExecutiveCommunications />}
                  />
                  {/* Operations sub-services */}
                  <Route
                    path="/services/operations/governance"
                    element={<Governance />}
                  />
                  {/* Leadership sub-services */}
                  <Route
                    path="/services/leadership/community-engagement"
                    element={<CommunityEngagement />}
                  />
                  {/* Legacy .html URLs redirect (server 301 first); else NotFound */}
                  <Route path="*" element={<LegacyRedirectHandler />} />
                </Routes>
              </Layout>
            )}
          </BrowserRouter>
        </MotionConfig>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
