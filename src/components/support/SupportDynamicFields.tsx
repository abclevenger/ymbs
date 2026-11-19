// Dynamic contextual fields rendered per selected service category in the
// Support form. Each field has a `name` that maps to a discrete CRM custom
// field via the dynamicFieldMap in Support.tsx.
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Laptop, Globe, Zap, CreditCard, AlertTriangle } from "lucide-react";

export function SupportDynamicFields({ service }: { service: string }) {
  switch (service) {
    case "technology":
    case "crm":
    case "integrations":
      return (
        <div className="space-y-4 border p-6 rounded-xl bg-zinc-50 border-border">
          <h4 className="font-semibold text-zinc-900 flex items-center gap-2">
            <Laptop className="w-4 h-4 text-primary" /> Technical Details
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="platform">Platform / Tool Name</Label>
              <Input
                id="platform"
                name="platform"
                placeholder="e.g. GoHighLevel, Slack"
                className="bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="workflow_name">Workflow / Pipeline Name</Label>
              <Input
                id="workflow_name"
                name="workflow_name"
                placeholder="e.g. Lead Nurture"
                className="bg-white"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2 pt-2">
            <Checkbox id="login_issue" name="login_issue" value="yes" />
            <Label htmlFor="login_issue" className="font-normal cursor-pointer">
              This is a login or access issue
            </Label>
          </div>
        </div>
      );
    case "website":
    case "seo_audit":
      return (
        <div className="space-y-4 border p-6 rounded-xl bg-zinc-50 border-border">
          <h4 className="font-semibold text-zinc-900 flex items-center gap-2">
            <Globe className="w-4 h-4 text-primary" /> Website Details
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="url">Page URL Affected</Label>
              <Input
                id="url"
                name="url"
                placeholder="https://..."
                className="bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="browser">Browser & Device</Label>
              <Input
                id="browser"
                name="browser"
                placeholder="e.g. Chrome on iPhone"
                className="bg-white"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="desired_change">
              Desired Change / Expected Result
            </Label>
            <Input
              id="desired_change"
              name="desired_change"
              placeholder="Brief description of what should happen"
              className="bg-white"
            />
          </div>
        </div>
      );
    case "automations":
      return (
        <div className="space-y-4 border p-6 rounded-xl bg-zinc-50 border-border">
          <h4 className="font-semibold text-zinc-900 flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" /> Automation Details
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="trigger">What triggers this automation?</Label>
              <Input
                id="trigger"
                name="trigger"
                placeholder="e.g. Form submitted"
                className="bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="workflow_name">Workflow Name</Label>
              <Input
                id="workflow_name"
                name="workflow_name"
                placeholder="Name of the automation"
                className="bg-white"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="expected_vs_actual">
              Expected vs Actual Result
            </Label>
            <Textarea
              id="expected_vs_actual"
              name="expected_vs_actual"
              placeholder="It should have done X, but it did Y..."
              className="h-20 bg-white"
            />
          </div>
        </div>
      );
    case "billing":
      return (
        <div className="space-y-4 border p-6 rounded-xl bg-zinc-50 border-border">
          <h4 className="font-semibold text-zinc-900 flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-primary" /> Billing Details
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="invoice_number">
                Invoice Number (if applicable)
              </Label>
              <Input
                id="invoice_number"
                name="invoice_number"
                placeholder="INV-0000"
                className="bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billing_contact">Billing Contact Email</Label>
              <Input
                id="billing_contact"
                name="billing_contact"
                type="email"
                placeholder="finance@company.com"
                className="bg-white"
              />
            </div>
          </div>
        </div>
      );
    case "emergency":
      return (
        <div className="space-y-4 border border-red-200 p-6 rounded-xl bg-red-50">
          <h4 className="font-semibold text-red-900 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-600" /> Emergency Context
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="system_down" className="text-red-800">
                Is a critical system completely down?
              </Label>
              <Select name="system_down" required>
                <SelectTrigger className="border-red-200 bg-white">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes - Completely Down">
                    Yes - Completely Down
                  </SelectItem>
                  <SelectItem value="No - Partially Functional">
                    No - Partially Functional
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="users_affected" className="text-red-800">
                Number of Users Affected
              </Label>
              <Input
                id="users_affected"
                name="users_affected"
                type="number"
                placeholder="e.g. 10"
                className="border-red-200 bg-white"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="revenue_impact" className="text-red-800">
              Revenue Impact / Urgency
            </Label>
            <Input
              id="revenue_impact"
              name="revenue_impact"
              placeholder="e.g. Blocking sales calls"
              className="border-red-200 bg-white"
            />
          </div>
        </div>
      );
    default:
      return null;
  }
}

// Maps each dynamic form field name to its CRM custom field key.
export const dynamicFieldMap: Record<string, string> = {
  platform: "contact.support_platform",
  workflow_name: "contact.support_workflow_name",
  url: "contact.support_url",
  browser: "contact.support_browser",
  desired_change: "contact.support_desired_change",
  trigger: "contact.support_trigger",
  expected_vs_actual: "contact.support_expected_vs_actual",
  invoice_number: "contact.support_invoice_number",
  billing_contact: "contact.support_billing_contact",
  system_down: "contact.support_system_down",
  users_affected: "contact.support_users_affected",
  revenue_impact: "contact.support_revenue_impact",
};
