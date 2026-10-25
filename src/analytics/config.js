/**
 * Google Analytics 4 configuration.
 *
 * The measurement ID is public by design (it ships to every visitor's
 * browser), so it is safe to keep here rather than in an .env file.
 */
export const GA_MEASUREMENT_ID = "G-PWWDG6X4WT";

/** Only send data from the deployed site, never from `npm start` or tests. */
export const ANALYTICS_ENABLED = process.env.NODE_ENV === "production";

/**
 * Event names sent to GA4. Keep them snake_case and under 40 characters
 * (GA4 limit). Mark the important ones as "Key events" in the GA admin.
 */
export const EVENTS = {
  PAGE_VIEW: "page_view",
  SECTION_VIEW: "section_view",
  PROJECT_VIEW: "project_view",
  CV_DOWNLOAD: "cv_download",
  CV_DOWNLOAD_FAILED: "cv_download_failed",
  CV_OPEN: "cv_open",
  GITHUB_CLICK: "github_click",
  LINKEDIN_CLICK: "linkedin_click",
  EMAIL_CLICK: "email_click",
  PHONE_CLICK: "phone_click",
  NAV_CLICK: "nav_click",
  OUTBOUND_CLICK: "outbound_click",
};
