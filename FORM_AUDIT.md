# YMBS Form & CRM Integration Audit

**Audit date:** 2026-09-23
**CRM platform:** Lead Connector (external-tracking/events endpoint)
**Endpoint:** `https://backend.leadconnectorhq.com/external-tracking/events`
**Shared credentials (public, browser-side):**
- `trackingId`: `tk_0c9cb01afb344d2cb49ff2c3af4fb9ba`
- `locationId`: `Qox9LgP4rnP1Zvis428l`
- API version header: `2021-07-28`

All forms POST a payload of `type: "external_form_submission"` with a `formData` object and a parallel `formLabels` object. The CRM uses the `formData` keys to map to contact/custom fields. Keys prefixed with `contact.` map to **custom fields** on the Contact object; unprefixed keys (`first_name`, `last_name`, `email`, `phone`, `organization`) map to **standard Contact fields**.

---

## Form Inventory (9 forms found)

| # | Form | Route | formId | Reaches CRM? | Target CRM Object |
|---|------|-------|--------|--------------|-------------------|
| 1 | Multi-Step Contact Form | `/contact` | `Multi-Step Contact Form` | ✅ Yes | Contact (standard + custom) |
| 2 | Assessment Results Capture | `/assessments/results` | `Assessment Results Capture` | ✅ Yes | Contact (standard + custom) |
| 3 | Cyber Readiness Assessment | `/assessments/cyber-readiness` | `Cyber Readiness Assessment Form` | ✅ Yes | Contact (standard only) |
| 4 | SEO Assessment | `/assessments/seo` | `SEO Assessment Form` | ✅ Yes | Contact (standard only) |
| 5 | Technology Assessment | `/assessments/technology` | `Technology Assessment Form` | ✅ Yes | Contact (standard + attribution custom) |
| 6 | System Health Assessment | `/assessments/system-health` | `System Health Assessment` | ✅ Yes | Contact (standard + 1 custom) |
| 7 | Support Portal Ticket | `/support` | `Support Portal Ticket` | ✅ Yes | Contact (standard + 4 custom) |
| 8 | Executive Readiness Booking | `/executive-readiness-intensive#booking` | *(none)* | ❌ **No — chain breaks** | None |
| 9 | SCALE Assessment | `/scale/assessment` | *(none)* | ❌ **No — no form at all** | None (analytics only) |

---

## Per-Form Field Mapping Tables

### 1. Multi-Step Contact Form (`/contact`)

**Validation:** Step-gated. Needs selection (≥1), message (≥10 chars), firstName (≥2 chars), email (regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`). Phone/company optional, no validation.

| Form field (name) | Label | Type | Required | Validation | CRM field key | CRM data type | Transform | Mapping |
|---|---|---|---|---|---|---|---|---|
| `firstName` | First Name | text | Yes | ≥2 chars | `first_name` | string (standard) | none | ✅ Confirmed |
| `lastName` | Last Name | text | No | none | `last_name` | string (standard) | none | ✅ Confirmed |
| `email` | Email Address | email | Yes | regex | `email` | string (standard) | none | ✅ Confirmed |
| `phone` | Phone Number | tel | No | none | `phone` | string (standard) | none | ✅ Confirmed |
| `company` | Organization | text | No | none | `organization` | string (standard) | none | ✅ Confirmed |
| `message` | (bottleneck) | textarea | Yes | ≥10 chars | `contact.inquiry_message` | string (custom) | none | ✅ Confirmed |
| `selectedNeeds` | Selected Needs | multi-select chips | Yes (≥1) | none | `contact.selected_needs` | string (custom) | `Array.join(", ")` | ✅ Confirmed |
| — (attribution) | First/Latest Touch | auto | — | — | `contact.first_touch_*` / `contact.latest_touch_*` (8 fields) | string (custom) | from sessionStorage | ✅ Confirmed |

**Data-loss risks:** `lastName` is optional and unvalidated — a contact may be created with only a first name. Phone has no format normalization.

---

### 2. Assessment Results Capture (`/assessments/results`)

**Validation:** Native HTML `required` on firstName + email only. Phone/organization optional.

| Form field | Label | Type | Required | Validation | CRM field key | CRM data type | Transform | Mapping |
|---|---|---|---|---|---|---|---|---|
| `firstName` | First Name | text | Yes | required | `first_name` | string (standard) | none | ✅ Confirmed |
| `email` | Email Address | email | Yes | required | `email` | string (standard) | none | ✅ Confirmed |
| `phone` | Phone Number | tel | No | none | `phone` | string (standard) | none | ✅ Confirmed |
| `organization` | Organization | text | No | none | `organization` | string (standard) | none | ✅ Confirmed |
| — (attribution) | First/Latest Touch | auto | — | — | `contact.first_touch_*` / `contact.latest_touch_*` (12 fields) | string (custom) | from sessionStorage | ✅ Confirmed |

**Note:** `formLabels` for attribution fields are generated dynamically via `Object.fromEntries` — labels are derived from key names. Functionally fine but labels are raw key strings.

---

### 3. Cyber Readiness Assessment (`/assessments/cyber-readiness`)

**Validation:** Native `required` on firstName + email. Quiz answers (8 questions, scored 0–3) are **never sent to CRM**.

| Form field | Label | Type | Required | Validation | CRM field key | CRM data type | Transform | Mapping |
|---|---|---|---|---|---|---|---|---|
| `firstName` | First Name | text | Yes | required | `first_name` | string (standard) | none | ✅ Confirmed |
| `email` | Email Address | email | Yes | required | `email` | string (standard) | none | ✅ Confirmed |

**⚠️ Data-loss risk (HIGH):** The 8-question assessment score and individual answers are computed and displayed on-screen but are **never transmitted to the CRM**. The CRM receives only a name + email with no indication this was a cyber assessment, no score, and no answers. The `formId` ("Cyber Readiness Assessment Form") is the only discriminator. A lead's actual security posture is lost.

---

### 4. SEO Assessment (`/assessments/seo`)

**Validation:** Native `required` on firstName + email. Quiz answers (5 questions) **never sent to CRM**.

| Form field | Label | Type | Required | Validation | CRM field key | CRM data type | Transform | Mapping |
|---|---|---|---|---|---|---|---|---|
| `firstName` | First Name | text | Yes | required | `first_name` | string (standard) | none | ✅ Confirmed |
| `email` | Email Address | email | Yes | required | `email` | string (standard) | none | ✅ Confirmed |

**⚠️ Data-loss risk (HIGH):** Same as Cyber — score (0–100%), tier label, and per-question answers are displayed but never sent. The `analyzerUrl` (Search Atlas website input) is also not captured. Only `formId` distinguishes this lead.

---

### 5. Technology Assessment (`/assessments/technology`)

**Validation:** Native `required` on firstName + email. Quiz answers (8 questions) **never sent to CRM**.

| Form field | Label | Type | Required | Validation | CRM field key | CRM data type | Transform | Mapping |
|---|---|---|---|---|---|---|---|---|
| `firstName` | First Name | text | Yes | required | `first_name` | string (standard) | none | ✅ Confirmed |
| `email` | Email Address | email | Yes | required | `email` | string (standard) | none | ✅ Confirmed |
| — (attribution) | First/Latest Touch | auto | — | — | `contact.first_touch_*` / `contact.latest_touch_*` (8 fields) | string (custom) | from sessionStorage | ✅ Confirmed |

**⚠️ Data-loss risk (HIGH):** Score and answers not sent. Attribution is included (unlike Cyber/SEO), which is an inconsistency.

---

### 6. System Health Assessment (`/assessments/system-health`)

**Validation:** Manual check `if (!formData.name || !formData.email)` → toast error. No email format validation.

| Form field | Label | Type | Required | Validation | CRM field key | CRM data type | Transform | Mapping |
|---|---|---|---|---|---|---|---|---|
| `name` | Full Name | text | Yes | non-empty | `first_name` + `last_name` | string (standard) | `split(" ")[0]` → first; `slice(1).join(" ")` → last | ✅ Confirmed |
| `email` | Work Email | email | Yes | non-empty (no regex) | `email` | string (standard) | none | ✅ Confirmed |
| — (score) | System Health Score | computed | — | — | `contact.system_health_score` | string (custom) | `Object.values(answers).reduce(...).toString()` | ✅ Confirmed |

**Note:** This is the **only** scored assessment that actually sends its score to the CRM (as a custom field). Good pattern — but inconsistent with Cyber/SEO/Tech which do not.

**⚠️ Mismatch:** `name` field is labeled "Full Name" but split into first/last on a single space. Multi-word first names or names without spaces produce incorrect splits (e.g., "Mary" → first="Mary", last="").

---

### 7. Support Portal Ticket (`/support`)

**Validation:** Native `required` on first_name, last_name, email, organization, priority, issue_type, description. Dynamic fields vary by service. File upload input exists but **is never read or sent**.

| Form field | Label | Type | Required | Validation | CRM field key | CRM data type | Transform | Mapping |
|---|---|---|---|---|---|---|---|---|
| `first_name` | First Name | text | Yes | required | `first_name` | string (standard) | none | ✅ Confirmed |
| `last_name` | Last Name | text | Yes | required | `last_name` | string (standard) | none | ✅ Confirmed |
| `email` | Email Address | email | Yes | required | `email` | string (standard) | none | ✅ Confirmed |
| `phone` | Phone Number | tel | No | none | `phone` | string (standard) | none | ✅ Confirmed |
| `organization` | Company Name | text | Yes | required | `organization` | string (standard) | none | ✅ Confirmed |
| `selectedService` | Service Category | select-grid | Yes (step 1) | none | `contact.support_service` | string (custom) | none | ✅ Confirmed |
| `priority` | Priority | select | Yes | required | `contact.support_priority` | string (custom) | none | ✅ Confirmed |
| `issue_type` | Issue Type | select | Yes | required | `contact.support_issue_type` | string (custom) | none | ✅ Confirmed |
| `description` | Description | textarea | Yes | required | `contact.support_description` | string (custom) | base + appended dynamic fields | ✅ Confirmed |
| `platform` | Platform / Tool | text | No | none | *(appended to description)* | — | string concat | ⚠️ Folded into description text |
| `workflow_name` | Workflow Name | text | No | none | *(appended to description)* | — | string concat | ⚠️ Folded into description text |
| `login_issue` | Login issue | checkbox | No | none | *(appended to description)* | — | "Yes" if checked | ⚠️ Folded into description text |
| `url` | Page URL | text | No | none | *(appended to description)* | — | string concat | ⚠️ Folded into description text |
| `browser` | Browser & Device | text | No | none | *(appended to description)* | — | string concat | ⚠️ Folded into description text |
| `desired_change` | Desired Change | text | No | none | *(appended to description)* | — | string concat | ⚠️ Folded into description text |
| `trigger` | Trigger | text | No | none | *(appended to description)* | — | string concat | ⚠️ Folded into description text |
| `expected_vs_actual` | Expected vs Actual | textarea | No | none | *(appended to description)* | — | string concat | ⚠️ Folded into description text |
| `invoice_number` | Invoice Number | text | No | none | *(appended to description)* | — | string concat | ⚠️ Folded into description text |
| `billing_contact` | Billing Contact Email | email | No | none | *(appended to description)* | — | string concat | ⚠️ Folded into description text |
| `system_down` | System Down | select | No (req UI) | required attr | *(appended to description)* | — | string concat | ⚠️ Folded into description text |
| `users_affected` | Users Affected | number | No | none | *(appended to description)* | — | string concat | ⚠️ Folded into description text |
| `revenue_impact` | Revenue Impact | text | No | none | *(appended to description)* | — | string concat | ⚠️ Folded into description text |
| `file-upload` | Attachments | file (multiple) | No | none | *(not sent)* | — | — | ❌ **Missing — data loss** |

**⚠️ Data-loss risks:**
- **File attachments are never transmitted.** The `<input type="file">` has no `name` and is never read by `handleSubmit`. Users are told they can upload screenshots/videos — these are silently discarded.
- **All dynamic/contextual fields are flattened into the `description` free-text string** rather than mapped to discrete CRM custom fields. This makes structured reporting, filtering, and automation on those fields impossible in the CRM. The data is technically preserved but unstructured.
- A 1.5s `setTimeout` "simulated API call" runs before the real fetch — adds latency but does not affect delivery.

---

### 8. Executive Readiness Booking (`/executive-readiness-intensive#booking`) — ❌ CHAIN BREAKS

**Validation:** Native `required` on name, company, email, scenario. Controlled inputs via React state.

| Form field | Label | Type | Required | Validation | CRM field key | CRM data type | Transform | Mapping |
|---|---|---|---|---|---|---|---|---|
| `name` | Full Name | text | Yes | required | — | — | — | ❌ **Missing** |
| `company` | Company / Organization | text | Yes | required | — | — | — | ❌ **Missing** |
| `email` | Email | email | Yes | required | — | — | — | ❌ **Missing** |
| `phone` | Phone | tel | No | none | — | — | — | ❌ **Missing** |
| `date` | Target Date | date | No | none | — | — | — | ❌ **Missing** |
| `scenario` | Describe Your Scenario | textarea | Yes | required | — | — | — | ❌ **Missing** |

**🔴 Where the chain breaks:** `handleSubmit` (line 58–61) does **only** `e.preventDefault()` and `setSubmitted(true)`. There is:
- No `fetch()` to the CRM endpoint
- No `trackingPayload` construction
- No `track.*` analytics call
- No `formId`

The form data lives only in React state and is discarded on unmount/navigation. The success screen ("Request received. Michelle will personally review your scenario…") is shown despite no data being transmitted anywhere. **This is a complete lead-capture failure** — every Executive Readiness booking request is lost.

---

### 9. SCALE Assessment (`/scale/assessment`) — ❌ NO FORM

The SCALE assessment is a 26-question quiz across 5 pillars (Structure, Culture, Alignment, Liability & Governance, Execution). It has **no lead-capture form and no CRM submission whatsoever**.

- `track.assessmentStarted`, `track.assessmentFunnelStep`, `track.assessmentCompleted` fire GA4 events only (analytics, not CRM).
- Results (overall score, per-pillar scores, strongest/weakest, recommendations) are computed and displayed client-side only.
- The only conversion path is a "Get Clarity" button linking to `/contact`.

**🔴 Data-loss risk (HIGH):** A user can complete the entire 26-question assessment, see their full scorecard, and leave without ever entering contact info or having any record created in the CRM. There is no lead gate. All assessment data is lost unless the user manually clicks through to `/contact` and fills out a separate form (which itself does not capture the SCALE score).

---

## Cross-Cutting Issues

### A. Inconsistent score capture
| Assessment | Score sent to CRM? | Answers sent? |
|---|---|---|
| System Health | ✅ Yes (`contact.system_health_score`) | ❌ No |
| Cyber | ❌ No | ❌ No |
| SEO | ❌ No | ❌ No |
| Technology | ❌ No | ❌ No |
| SCALE | ❌ No (no CRM at all) | ❌ No |

Only System Health sends its score. The others lose all diagnostic data.

### B. Inconsistent attribution capture
| Form | Attribution (UTM first/last touch) sent? |
|---|---|
| Contact | ✅ Yes (8 fields) |
| Assessment Results | ✅ Yes (12 fields) |
| Technology | ✅ Yes (8 fields) |
| Cyber | ❌ No |
| SEO | ❌ No |
| System Health | ❌ No |
| Support | ❌ No |
| Executive Readiness | ❌ No (no CRM at all) |

### C. Inconsistent field naming
- Contact uses `firstName`/`lastName` (camelCase) → mapped to `first_name`/`last_name`.
- Support uses `first_name`/`last_name` (snake_case) directly.
- System Health uses a single `name` field split into first/last.
- Assessment Results uses `firstName` + `organization` (not `company`).

### D. No error handling / delivery confirmation
Every CRM `fetch` (except System Health) uses `.catch(() => {})` — silently swallowing network failures. If the CRM endpoint is down or returns an error, the user still sees a success message. **Leads can be silently lost with no indication.** System Health logs to console but still proceeds to success.

### E. No deduplication strategy
All forms create contacts via the same endpoint with no explicit upsert/dedupe logic visible. A user completing multiple assessments with the same email may create duplicate contacts depending on CRM-side matching configuration (not verifiable from front-end code).

### F. `locationId` / `trackingId` hardcoded
The same `trackingId` and `locationId` are hardcoded in 7 files. Not a bug, but a maintenance risk — a change requires editing all 7 files.

---

## Summary of Critical Findings

| Severity | Finding | Forms affected |
|---|---|---|
| 🔴 Critical | **Executive Readiness form sends nothing to CRM** — all booking requests lost | Executive Readiness |
| 🔴 Critical | **SCALE assessment has no lead gate / no CRM** — all assessment data lost | SCALE |
| 🔴 High | **File attachments never transmitted** despite UI promising upload | Support |
| 🟠 High | **Assessment scores & answers not sent to CRM** (Cyber, SEO, Technology) | 3 forms |
| 🟠 Medium | **All CRM fetch errors silently swallowed** — false success states | 6 forms |
| 🟠 Medium | **Support dynamic fields flattened into description** — unstructured in CRM | Support |
| 🟡 Low | **Inconsistent attribution capture** across forms | 4 forms |
| 🟡 Low | **Inconsistent field naming** (camelCase vs snake_case vs single-name) | All |
| 🟡 Low | **System Health name-split** produces bad first/last for edge cases | System Health |
