// Static data for the Support portal — extracted from Support.tsx for modularity.
import {
  MessageSquare,
  Globe,
  Zap,
  Puzzle,
  CreditCard,
  AlertTriangle,
  LifeBuoy,
  Briefcase,
  Laptop,
  ShieldAlert,
  Megaphone,
  Users,
  Map,
  ClipboardCheck,
  Scale,
  Search,
  type LucideIcon,
} from "lucide-react";

export interface SupportService {
  id: string;
  icon: LucideIcon;
  label: string;
  emergency?: boolean;
}

export const services: SupportService[] = [
  { id: "operations", icon: Briefcase, label: "Operations" },
  { id: "technology", icon: Laptop, label: "Technology" },
  { id: "cybersecurity", icon: ShieldAlert, label: "Cybersecurity / Risk" },
  { id: "communications", icon: Megaphone, label: "Communications" },
  { id: "leadership", icon: Users, label: "Leadership" },
  { id: "strategic_planning", icon: Map, label: "Strategic Planning" },
  { id: "tech_audit", icon: ClipboardCheck, label: "Tech Audit" },
  { id: "seo_audit", icon: Search, label: "SEO Audit" },
  { id: "legal_software", icon: Scale, label: "Legal Software Eval" },
  { id: "website", icon: Globe, label: "Website & Funnels" },
  { id: "automations", icon: Zap, label: "Automations" },
  { id: "crm", icon: MessageSquare, label: "CRM / GoHighLevel" },
  { id: "integrations", icon: Puzzle, label: "Integrations" },
  { id: "billing", icon: CreditCard, label: "Billing" },
  { id: "general", icon: LifeBuoy, label: "General Support" },
  {
    id: "emergency",
    icon: AlertTriangle,
    label: "Technical Emergency",
    emergency: true,
  },
];

export const faqs = [
  {
    q: "How long does it take to get a response?",
    a: "Standard tickets are addressed within 24 hours. Critical emergencies are routed to our on-call team immediately.",
    category: "General",
  },
  {
    q: "How do I reset my CRM password?",
    a: "You can reset your password directly from the login screen. If you're locked out, submit a 'Login Issue' ticket.",
    category: "CRM",
  },
  {
    q: "Where can I find my billing invoices?",
    a: "Invoices are available in your client portal under the Billing tab, or you can request them via a Billing support ticket.",
    category: "Billing",
  },
  {
    q: "Can I request a new feature for my website?",
    a: "Absolutely! Select 'Website & Funnels' and choose 'Feature Request' as your issue type.",
    category: "Website",
  },
  {
    q: "How do I report an automation that stopped working?",
    a: "Select 'Automations' from the service grid, describe the trigger and expected vs actual behavior in the dynamic fields.",
    category: "Automations",
  },
  {
    q: "What happens when I submit a critical priority ticket?",
    a: "Critical tickets trigger immediate SMS and email alerts to our on-call team. You'll also see a 'Call Now' button for direct escalation.",
    category: "General",
  },
  {
    q: "How do I integrate a new tool with my existing stack?",
    a: "Choose 'Integrations' from the service grid and provide the platform name and workflow details so we can assess compatibility.",
    category: "Integrations",
  },
  {
    q: "Can I attach screenshots or videos to my ticket?",
    a: "Yes! The upload area supports images, PDFs, videos, and screen recordings. Drag and drop or click to browse.",
    category: "General",
  },
];
