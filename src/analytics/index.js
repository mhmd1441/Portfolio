import { ANALYTICS_ENABLED, EVENTS, GA_MEASUREMENT_ID } from "./config";

export { EVENTS };

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

/**
 * Loads the GA4 tag and records the first page view.
 *
 * Call this once, before React renders. The full landing URL (including any
 * ?utm_* parameters) is captured here and passed as `page_location`, so the
 * campaign attribution survives even though the URL is cleaned right after.
 */
export function initAnalytics() {
  if (!ANALYTICS_ENABLED || typeof window === "undefined") return;

  const landingUrl = window.location.href;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { page_location: landingUrl });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  stripUtmParams();
}

/**
 * Removes ?utm_* parameters from the address bar without reloading, so links
 * copied from the site are clean and in-app navigation never re-sends them.
 */
function stripUtmParams() {
  const url = new URL(window.location.href);
  const hadUtm = UTM_KEYS.some((key) => url.searchParams.has(key));
  if (!hadUtm) return;

  UTM_KEYS.forEach((key) => url.searchParams.delete(key));
  window.history.replaceState(window.history.state, "", url.toString());
}

/**
 * Sends a custom event to GA4. Safe to call anywhere: it is a no-op in
 * development, in tests, and when an ad-blocker prevents gtag from loading.
 *
 * @param {string} name   One of EVENTS.
 * @param {object} params Extra dimensions, e.g. { location: "home_hero" }.
 */
export function trackEvent(name, params = {}) {
  if (!ANALYTICS_ENABLED || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
