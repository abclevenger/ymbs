// Centralized CRM submission utility for Lead Connector (external-tracking/events).
// Every form on the site MUST route through `submitLead` so that:
//   - credentials live in one place
//   - the field map is declared once
//   - errors are never silently swallowed
//   - success is only returned when the CRM actually accepts the request

import { buildAttributionPayload } from "@/lib/attribution";

// ---------------------------------------------------------------------------
// Configuration (public, browser-side tracking credentials)
// ---------------------------------------------------------------------------
const CRM_ENDPOINT =
  "https://backend.leadconnectorhq.com/external-tracking/events";
const TRACKING_ID = "tk_0c9cb01afb344d2cb49ff2c3af4fb9ba";
const LOCATION_ID = "Qox9LgP4rnP1Zvis428l";
const API_VERSION = "2021-07-28";

// ---------------------------------------------------------------------------
// Central field map
// ---------------------------------------------------------------------------
// Standard Contact fields use plain keys. Custom fields use the `contact.*`
// convention already established in the app. Fields marked
// REQUIRES_CRM_FIELD_CONFIRMATION are new custom fields that must be created
// in the CRM location before they will populate — see FORM_AUDIT_AFTER_FIX.md.
// ---------------------------------------------------------------------------
export const CRM_FIELDS = {
  // Standard fields
  firstName: "first_name",
  lastName: "last_name",
  email: "email",
  phone: "phone",
  organization: "organization",

  // Contact form
  inquiryMessage: "contact.inquiry_message",
  selectedNeeds: "contact.selected_needs",

  // Executive Readiness
  executiveReadinessType: "contact.executive_readiness_type",
  executiveReadinessScenario: "contact.executive_readiness_scenario",
  executiveReadinessDate: "contact.executive_readiness_target_date",

  // SCALE assessment — registered custom fields (IDs from CRM location Qox9LgP4rnP1Zvis428l)
  scaleScore: "NwWqffKEn8vxG07oj8T2",
  scaleStructureScore: "0Zsw4UlMjYSMXymuw5Uz",
  scaleCultureScore: "FeNTIPS1k10EjBiOvgVw",
  scaleAlignmentScore: "ZLJURnFP4llENc8kCZUZ",
  scaleLiabilityGovernanceScore: "LvPzihNTrjT2jEgA8GwH",
  scaleExecutionScore: "0W8c85WlI7mHxdEBW6Mq",
  scaleAnswers: "A4xFZ7sRUJwl8ygRCSB5",

  // Assessment scores
  cyberScore: "contact.cyber_score", // REQUIRES_CRM_FIELD_CONFIRMATION
  cyberAnswers: "contact.cyber_answers", // REQUIRES_CRM_FIELD_CONFIRMATION
  seoScore: "contact.seo_score", // REQUIRES_CRM_FIELD_CONFIRMATION
  seoAnswers: "contact.seo_answers", // REQUIRES_CRM_FIELD_CONFIRMATION
  technologyScore: "contact.technology_score", // REQUIRES_CRM_FIELD_CONFIRMATION
  technologyAnswers: "contact.technology_answers", // REQUIRES_CRM_FIELD_CONFIRMATION
  systemHealthScore: "contact.system_health_score",
  assessmentType: "Vvt1cTv7xKfUFjPOHY5r",
  assessmentResult: "syvXHNJXoO5iQRzrnW2k",

  // Support portal
  supportService: "contact.support_service",
  supportPriority: "contact.support_priority",
  supportIssueType: "contact.support_issue_type",
  supportDescription: "contact.support_description",
  supportPlatform: "contact.support_platform", // REQUIRES_CRM_FIELD_CONFIRMATION
  supportWorkflowName: "contact.support_workflow_name", // REQUIRES_CRM_FIELD_CONFIRMATION
  supportLoginIssue: "contact.support_login_issue", // REQUIRES_CRM_FIELD_CONFIRMATION
  supportUrl: "contact.support_url", // REQUIRES_CRM_FIELD_CONFIRMATION
  supportBrowser: "contact.support_browser", // REQUIRES_CRM_FIELD_CONFIRMATION
  supportDesiredChange: "contact.support_desired_change", // REQUIRES_CRM_FIELD_CONFIRMATION
  supportTrigger: "contact.support_trigger", // REQUIRES_CRM_FIELD_CONFIRMATION
  supportExpectedVsActual: "contact.support_expected_vs_actual", // REQUIRES_CRM_FIELD_CONFIRMATION
  supportInvoiceNumber: "contact.support_invoice_number", // REQUIRES_CRM_FIELD_CONFIRMATION
  supportBillingContact: "contact.support_billing_contact", // REQUIRES_CRM_FIELD_CONFIRMATION
  supportSystemDown: "contact.support_system_down", // REQUIRES_CRM_FIELD_CONFIRMATION
  supportUsersAffected: "contact.support_users_affected", // REQUIRES_CRM_FIELD_CONFIRMATION
  supportRevenueImpact: "contact.support_revenue_impact", // REQUIRES_CRM_FIELD_CONFIRMATION
  supportAttachments: "contact.support_attachments", // REQUIRES_CRM_FIELD_CONFIRMATION
} as const;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface SubmitLeadInput {
  formId: string;
  source: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  organization?: string;
  /** Custom fields keyed by the full CRM field name (e.g. "contact.scale_score"). */
  customFields?: Record<string, string>;
  /** Human-readable labels parallel to every formData key, for the CRM UI. */
  fieldLabels?: Record<string, string>;
  /** Include UTM first/last-touch attribution custom fields. */
  includeAttribution?: boolean;
  /** Extra metadata merged into the top-level tracking payload. */
  metadata?: Record<string, unknown>;
}

export interface CrmSuccess {
  ok: true;
}

export interface CrmFailure {
  ok: false;
  error: string;
  status?: number;
}

export type CrmResult = CrmSuccess | CrmFailure;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function isMobile(): boolean {
  if (typeof navigator === "undefined") return false;
  return /Mobile|Android|iPhone/i.test(navigator.userAgent);
}

/** Split a full name into first / last, handling multi-word first names gracefully. */
export function splitFullName(fullName: string): {
  firstName: string;
  lastName: string;
} {
  const trimmed = (fullName || "").trim();
  if (!trimmed) return { firstName: "", lastName: "" };
  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

function buildLabels(
  formData: Record<string, string>,
  explicit: Record<string, string> = {},
): Record<string, string> {
  const labels: Record<string, string> = { ...explicit };
  for (const key of Object.keys(formData)) {
    if (labels[key]) continue;
    labels[key] = key.replace(/^contact\./, "").replace(/_/g, " ");
  }
  return labels;
}

// ---------------------------------------------------------------------------
// Core submission
// ---------------------------------------------------------------------------
export async function submitLead(input: SubmitLeadInput): Promise<CrmResult> {
  const {
    formId,
    source,
    firstName = "",
    lastName = "",
    email = "",
    phone = "",
    organization = "",
    customFields = {},
    fieldLabels = {},
    includeAttribution = false,
    metadata = {},
  } = input;

  const formData: Record<string, string> = {
    first_name: firstName,
    last_name: lastName,
    email,
    phone,
    organization,
    ...customFields,
  };

  if (includeAttribution) {
    Object.assign(formData, buildAttributionPayload());
  }

  // Drop empty values so we don't overwrite existing CRM data with blanks.
  const cleanedFormData = Object.fromEntries(
    Object.entries(formData).filter(
      ([, v]) => v !== undefined && v !== null && v !== "",
    ),
  );

  const payload = {
    type: "external_form_submission",
    timestamp: Date.now(),
    formId,
    source,
    formData: cleanedFormData,
    formLabels: buildLabels(cleanedFormData, fieldLabels),
    url: typeof window !== "undefined" ? window.location.href : "",
    title: typeof document !== "undefined" ? document.title : "",
    path: typeof window !== "undefined" ? window.location.pathname : "",
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    trackingId: TRACKING_ID,
    locationId: LOCATION_ID,
    // Reuse the site's analytics session (set by /__vibe/analytics.js) so the
    // submission joins the visit's page views; fall back to a fresh id when
    // the cookie is absent or unreadable (sandboxed iframe).
    sessionId: (() => {
      try {
        const sid = document.cookie.match(
          /(?:^|;\s*)__vibe_sid=([0-9a-f-]{36})(?:;|$)/,
        )?.[1];
        if (sid) return sid;
      } catch {
        // document.cookie can throw in sandboxed iframes — fall through.
      }
      return typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random()}`;
    })(),
    properties: {
      deviceType: isMobile() ? "mobile" : "desktop",
      source,
      ...metadata,
    },
  };

  try {
    const response = await fetch(CRM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        version: API_VERSION,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      console.error(
        `[crm] ${formId} submission failed: HTTP ${response.status}`,
        errorText,
      );
      return {
        ok: false,
        error: `CRM rejected submission (HTTP ${response.status})`,
        status: response.status,
      };
    }

    return { ok: true };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unknown network error";
    console.error(`[crm] ${formId} submission network error:`, err);
    return { ok: false, error: message };
  }
}

// ---------------------------------------------------------------------------
// Attachment handling
// ---------------------------------------------------------------------------
// This project is frontend-only (no backend / no storage provider such as S3,
// Firebase, or Cloudinary is configured). The LeadConnector external-tracking
// endpoint accepts JSON only and does NOT support file binaries, so we must
// NOT embed file bytes in the payload.
//
// `captureAttachments` reads + validates the selected files and returns
// structured metadata (name, type, size) that is sent to the CRM as a custom
// field. When a storage provider is later configured, replace the body of
// `uploadAttachment` to return a hosted URL per file — the rest of the flow
// (validation, CRM field, success gating) already supports it.
// ---------------------------------------------------------------------------
export interface CapturedAttachment {
  name: string;
  type: string;
  size: number;
  /** Hosted URL once a storage provider is configured; empty until then. */
  url?: string;
}

export const ATTACHMENT_LIMITS = {
  maxFiles: 5,
  maxSizeBytes: 10 * 1024 * 1024, // 10 MB per file
  acceptedTypes: [
    "image/png",
    "image/jpeg",
    "image/gif",
    "image/webp",
    "application/pdf",
    "video/mp4",
    "video/quicktime",
    "video/webm",
  ],
};

export interface AttachmentResult {
  ok: boolean;
  attachments?: CapturedAttachment[];
  error?: string;
}

export function validateFile(file: File): string | null {
  if (file.size > ATTACHMENT_LIMITS.maxSizeBytes) {
    return `${file.name} exceeds the 10 MB limit.`;
  }
  if (!ATTACHMENT_LIMITS.acceptedTypes.includes(file.type)) {
    return `${file.name} is not a supported file type.`;
  }
  return null;
}

export async function captureAttachments(
  files: FileList | File[] | null,
): Promise<AttachmentResult> {
  if (!files || files.length === 0) {
    return { ok: true, attachments: [] };
  }
  const list = Array.from(files);

  if (list.length > ATTACHMENT_LIMITS.maxFiles) {
    return {
      ok: false,
      error: `You can attach a maximum of ${ATTACHMENT_LIMITS.maxFiles} files.`,
    };
  }

  for (const file of list) {
    const err = validateFile(file);
    if (err) return { ok: false, error: err };
  }

  // No storage provider configured — capture metadata only.
  // See note above: plug a hosted-upload implementation in here when available.
  const attachments: CapturedAttachment[] = list.map((f) => ({
    name: f.name,
    type: f.type,
    size: f.size,
  }));

  return { ok: true, attachments };
}

/** Serialize captured attachments for the CRM custom field. */
export function serializeAttachments(
  attachments: CapturedAttachment[],
): string {
  if (attachments.length === 0) return "";
  return JSON.stringify(attachments);
}
