// UTM / source attribution capture utility for first-touch and latest-touch tracking

export interface AttributionData {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  referrer: string;
  landing_page: string;
  captured_at: string;
}

const FIRST_TOUCH_KEY = "ymbs_first_touch";
const LATEST_TOUCH_KEY = "ymbs_latest_touch";

function getUTMParams(): Omit<
  AttributionData,
  "referrer" | "landing_page" | "captured_at"
> {
  if (typeof window === "undefined") {
    return {
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_term: "",
      utm_content: "",
    };
  }
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_term: params.get("utm_term") || "",
    utm_content: params.get("utm_content") || "",
  };
}

function buildAttribution(): AttributionData {
  return {
    ...getUTMParams(),
    referrer: document.referrer || "",
    landing_page: window.location.pathname || "/",
    captured_at: new Date().toISOString(),
  };
}

// Capture first-touch (only once) and latest-touch (every visit with UTMs)
export function captureAttribution(): void {
  if (typeof window === "undefined") return;

  const attribution = buildAttribution();
  const hasUTM =
    attribution.utm_source ||
    attribution.utm_medium ||
    attribution.utm_campaign;

  // First touch: only set once, never overwrite
  if (!sessionStorage.getItem(FIRST_TOUCH_KEY)) {
    const firstTouch = hasUTM
      ? attribution
      : {
          ...attribution,
          utm_source: attribution.referrer ? "referral" : "direct",
          utm_medium: attribution.referrer ? "referral" : "none",
        };
    sessionStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(firstTouch));
  }

  // Latest touch: always update if there are UTMs or referrer
  if (hasUTM || attribution.referrer) {
    sessionStorage.setItem(LATEST_TOUCH_KEY, JSON.stringify(attribution));
  } else if (!sessionStorage.getItem(LATEST_TOUCH_KEY)) {
    // Fallback: set latest = first if no UTMs present
    const first = sessionStorage.getItem(FIRST_TOUCH_KEY);
    if (first) sessionStorage.setItem(LATEST_TOUCH_KEY, first);
  }
}

export function getFirstTouch(): AttributionData | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(FIRST_TOUCH_KEY);
  return raw ? JSON.parse(raw) : null;
}

export function getLatestTouch(): AttributionData | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(LATEST_TOUCH_KEY);
  return raw ? JSON.parse(raw) : null;
}

// Build CRM custom field payload from attribution data
export function buildAttributionPayload(): Record<string, string> {
  const first = getFirstTouch();
  const latest = getLatestTouch();

  return {
    "contact.first_touch_source": first?.utm_source || "",
    "contact.first_touch_medium": first?.utm_medium || "",
    "contact.first_touch_campaign": first?.utm_campaign || "",
    "contact.first_touch_landing_page": first?.landing_page || "",
    "contact.first_touch_referrer": first?.referrer || "",
    "contact.first_touch_date": first?.captured_at || "",
    "contact.latest_touch_source": latest?.utm_source || "",
    "contact.latest_touch_medium": latest?.utm_medium || "",
    "contact.latest_touch_campaign": latest?.utm_campaign || "",
    "contact.latest_touch_landing_page": latest?.landing_page || "",
    "contact.latest_touch_referrer": latest?.referrer || "",
    "contact.latest_touch_date": latest?.captured_at || "",
  };
}
