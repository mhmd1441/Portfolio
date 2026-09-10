import pdfFile from "../Assets/Mohamad_Moumneh_CV.pdf";
import { EVENTS, trackEvent } from "../analytics";

export const CV_FILE_NAME = "Mohamad_Moumneh_CV.pdf";
export const CV_URL = pdfFile;

/**
 * Downloads the CV with a single, shared behaviour for every "Download CV"
 * button on the site.
 *
 * 1. Fetch the PDF and trigger a download with the proper file name.
 * 2. If anything fails (network, blocked blob URLs, old browsers), fall back
 *    to opening the PDF in a new tab so the visitor still gets the file.
 *
 * @param {string} location Where the click happened, for analytics
 *                          (e.g. "home_hero", "resume_page").
 */
export async function downloadCv(location) {
  trackEvent(EVENTS.CV_DOWNLOAD, { location });

  try {
    const response = await fetch(CV_URL);
    if (!response.ok) {
      throw new Error(`CV request failed with status ${response.status}`);
    }

    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = CV_FILE_NAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    trackEvent(EVENTS.CV_DOWNLOAD_FAILED, {
      location,
      reason: error instanceof Error ? error.message : String(error),
    });
    window.open(CV_URL, "_blank", "noopener,noreferrer");
  }
}
