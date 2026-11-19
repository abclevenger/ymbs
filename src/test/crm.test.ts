import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  submitLead,
  CRM_FIELDS,
  splitFullName,
  validateFile,
  captureAttachments,
  serializeAttachments,
  ATTACHMENT_LIMITS,
} from "@/lib/crm";

// ---------------------------------------------------------------------------
// fetch mock helpers
// ---------------------------------------------------------------------------
function mockFetchOk() {
  return vi.fn().mockResolvedValue(
    new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }),
  );
}

function mockFetchStatus(status: number, body = "Bad Request") {
  return vi
    .fn()
    .mockResolvedValue(
      new Response(body, { status, headers: { "Content-Type": "text/plain" } }),
    );
}

const baseInput = {
  formId: "Test Form",
  source: "Test Source",
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@example.com",
  phone: "555-1234",
  organization: "Acme",
};

let fetchSpy: ReturnType<typeof vi.fn>;

beforeEach(() => {
  fetchSpy = mockFetchOk();
  vi.stubGlobal("fetch", fetchSpy);
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

// ---------------------------------------------------------------------------
// submitLead
// ---------------------------------------------------------------------------
describe("submitLead — successful submission", () => {
  it("returns ok:true on HTTP 200", async () => {
    const result = await submitLead(baseInput);
    expect(result.ok).toBe(true);
  });

  it("sends a POST to the LeadConnector endpoint with correct envelope", async () => {
    await submitLead(baseInput);

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const [url, init] = fetchSpy.mock.calls[0];
    expect(url).toBe(
      "https://backend.leadconnectorhq.com/external-tracking/events",
    );
    expect(init.method).toBe("POST");
    expect(init.headers["Content-Type"]).toBe("application/json");
    expect(init.headers.version).toBe("2021-07-28");

    const body = JSON.parse(init.body);
    expect(body.type).toBe("external_form_submission");
    expect(body.formId).toBe("Test Form");
    expect(body.source).toBe("Test Source");
    expect(body.trackingId).toBe("tk_0c9cb01afb344d2cb49ff2c3af4fb9ba");
    expect(body.locationId).toBe("Qox9LgP4rnP1Zvis428l");
    expect(body.formData.first_name).toBe("Jane");
    expect(body.formData.last_name).toBe("Doe");
    expect(body.formData.email).toBe("jane@example.com");
  });

  it("maps custom fields using the contact.* convention", async () => {
    await submitLead({
      ...baseInput,
      customFields: {
        [CRM_FIELDS.scaleScore]: "72",
        [CRM_FIELDS.scaleAnswers]: '{"S":[3,2]}',
      },
    });
    const body = JSON.parse(fetchSpy.mock.calls[0][1].body);
    expect(body.formData["contact.scale_score"]).toBe("72");
    expect(body.formData["contact.scale_answers"]).toBe('{"S":[3,2]}');
  });

  it("includes human-readable formLabels parallel to formData", async () => {
    await submitLead({
      ...baseInput,
      customFields: { [CRM_FIELDS.cyberScore]: "45" },
      fieldLabels: { [CRM_FIELDS.cyberScore]: "Cyber Score" },
    });
    const body = JSON.parse(fetchSpy.mock.calls[0][1].body);
    expect(body.formLabels["contact.cyber_score"]).toBe("Cyber Score");
    expect(body.formLabels.first_name).toBe("first name");
  });

  it("drops empty values so existing CRM data is not overwritten with blanks", async () => {
    await submitLead({ ...baseInput, phone: "", organization: "" });
    const body = JSON.parse(fetchSpy.mock.calls[0][1].body);
    expect(body.formData).not.toHaveProperty("phone");
    expect(body.formData).not.toHaveProperty("organization");
  });
});

describe("submitLead — failure handling", () => {
  it("returns ok:false with status on non-200 response", async () => {
    vi.stubGlobal("fetch", mockFetchStatus(400, "Bad field"));
    const result = await submitLead(baseInput);
    expect(result.ok).toBe(false);
    const failure = result as Extract<typeof result, { ok: false }>;
    expect(failure.status).toBe(400);
    expect(failure.error).toContain("400");
  });

  it("returns ok:false on network error (never silently swallows)", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new TypeError("Failed to fetch")),
    );
    const result = await submitLead(baseInput);
    expect(result.ok).toBe(false);
    const failure = result as Extract<typeof result, { ok: false }>;
    expect(failure.error).toBe("Failed to fetch");
  });

  it("logs error detail to console in development", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    vi.stubGlobal("fetch", mockFetchStatus(500, "Server boom"));
    await submitLead(baseInput);
    expect(errorSpy).toHaveBeenCalled();
    const logged = errorSpy.mock.calls[0][0];
    expect(logged).toContain("Test Form");
  });
});

// ---------------------------------------------------------------------------
// splitFullName
// ---------------------------------------------------------------------------
describe("splitFullName", () => {
  it("splits a two-word name", () => {
    expect(splitFullName("Jane Doe")).toEqual({
      firstName: "Jane",
      lastName: "Doe",
    });
  });

  it("handles multi-word last names", () => {
    expect(splitFullName("Mary Jane Watson")).toEqual({
      firstName: "Mary",
      lastName: "Jane Watson",
    });
  });

  it("handles single-word names (no crash, empty last name)", () => {
    expect(splitFullName("Prince")).toEqual({
      firstName: "Prince",
      lastName: "",
    });
  });

  it("handles empty input", () => {
    expect(splitFullName("")).toEqual({ firstName: "", lastName: "" });
  });
});

// ---------------------------------------------------------------------------
// Assessment score mapping (field map integrity)
// ---------------------------------------------------------------------------
describe("CRM field map — assessment scores", () => {
  it("defines a score + answers field for every scored assessment", () => {
    expect(CRM_FIELDS.cyberScore).toBe("contact.cyber_score");
    expect(CRM_FIELDS.cyberAnswers).toBe("contact.cyber_answers");
    expect(CRM_FIELDS.seoScore).toBe("contact.seo_score");
    expect(CRM_FIELDS.seoAnswers).toBe("contact.seo_answers");
    expect(CRM_FIELDS.technologyScore).toBe("contact.technology_score");
    expect(CRM_FIELDS.technologyAnswers).toBe("contact.technology_answers");
    expect(CRM_FIELDS.systemHealthScore).toBe("contact.system_health_score");
  });

  it("defines all six SCALE score fields", () => {
    expect(CRM_FIELDS.scaleScore).toBe("contact.scale_score");
    expect(CRM_FIELDS.scaleStructureScore).toBe(
      "contact.scale_structure_score",
    );
    expect(CRM_FIELDS.scaleCultureScore).toBe("contact.scale_culture_score");
    expect(CRM_FIELDS.scaleAlignmentScore).toBe(
      "contact.scale_alignment_score",
    );
    expect(CRM_FIELDS.scaleLiabilityGovernanceScore).toBe(
      "contact.scale_liability_governance_score",
    );
    expect(CRM_FIELDS.scaleExecutionScore).toBe(
      "contact.scale_execution_score",
    );
  });

  it("defines discrete support dynamic-field mappings (not flattened)", () => {
    expect(CRM_FIELDS.supportPlatform).toBe("contact.support_platform");
    expect(CRM_FIELDS.supportUrl).toBe("contact.support_url");
    expect(CRM_FIELDS.supportTrigger).toBe("contact.support_trigger");
    expect(CRM_FIELDS.supportIssueType).toBe("contact.support_issue_type");
    expect(CRM_FIELDS.supportPriority).toBe("contact.support_priority");
  });

  it("defines executive readiness booking fields", () => {
    expect(CRM_FIELDS.executiveReadinessType).toBe(
      "contact.executive_readiness_type",
    );
    expect(CRM_FIELDS.executiveReadinessScenario).toBe(
      "contact.executive_readiness_scenario",
    );
    expect(CRM_FIELDS.executiveReadinessDate).toBe(
      "contact.executive_readiness_target_date",
    );
  });
});

// ---------------------------------------------------------------------------
// Attachment handling
// ---------------------------------------------------------------------------
describe("validateFile", () => {
  it("accepts a valid image under the size limit", () => {
    const file = new File(["x"], "shot.png", { type: "image/png" });
    expect(validateFile(file)).toBeNull();
  });

  it("rejects files over the size limit", () => {
    const big = new File(
      [new Uint8Array(ATTACHMENT_LIMITS.maxSizeBytes + 1)],
      "big.png",
      { type: "image/png" },
    );
    expect(validateFile(big)).toContain("10 MB");
  });

  it("rejects unsupported file types", () => {
    const file = new File(["x"], "evil.exe", {
      type: "application/x-msdownload",
    });
    expect(validateFile(file)).toContain("not a supported file type");
  });
});

describe("captureAttachments", () => {
  it("returns empty list for no files", async () => {
    const result = await captureAttachments(null);
    expect(result.ok).toBe(true);
    expect(result.attachments).toEqual([]);
  });

  it("captures metadata for valid files", async () => {
    const files = [
      new File(["x"], "a.png", { type: "image/png" }),
      new File(["y"], "b.pdf", { type: "application/pdf" }),
    ];
    const result = await captureAttachments(files);
    expect(result.ok).toBe(true);
    expect(result.attachments).toHaveLength(2);
    expect(result.attachments![0].name).toBe("a.png");
    expect(result.attachments![0].type).toBe("image/png");
  });

  it("rejects more than the max file count", async () => {
    const files = Array.from(
      { length: ATTACHMENT_LIMITS.maxFiles + 1 },
      (_, i) => new File(["x"], `${i}.png`, { type: "image/png" }),
    );
    const result = await captureAttachments(files);
    expect(result.ok).toBe(false);
    expect(result.error).toContain("maximum");
  });

  it("fails on an invalid file type", async () => {
    const files = [
      new File(["x"], "bad.exe", { type: "application/octet-stream" }),
    ];
    const result = await captureAttachments(files);
    expect(result.ok).toBe(false);
  });
});

describe("serializeAttachments", () => {
  it("serializes to JSON", () => {
    const serialized = serializeAttachments([
      { name: "a.png", type: "image/png", size: 1024 },
    ]);
    expect(JSON.parse(serialized)[0].name).toBe("a.png");
  });

  it("returns empty string for no attachments", () => {
    expect(serializeAttachments([])).toBe("");
  });
});

// ---------------------------------------------------------------------------
// Duplicate-submit prevention (contract)
// ---------------------------------------------------------------------------
describe("duplicate submit prevention contract", () => {
  it("submitLead is idempotent at the call level — caller controls gating", async () => {
    // The utility itself performs a single fetch per call. Duplicate prevention
    // is the caller's responsibility (disabled submit button while submitting).
    // This test documents that contract: each call = exactly one fetch.

    await submitLead(baseInput);
    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });
});
