import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import cvPreview from "../../Assets/cv-preview.png";
import { CV_URL, downloadCv } from "../../utils/downloadCv";
import { EVENTS, trackEvent } from "../../analytics";

const LOCATION = "resume_page";

/**
 * The CV is shown as a designed preview image on every device, so the page
 * looks identical everywhere. Browser PDF viewers were tried and rejected:
 * each browser wraps the document in its own toolbar and grey frame, which
 * cannot be styled from the page. The full PDF is one click away via the
 * preview itself, "Open in new tab", or "Download CV".
 */
function ResumeNew() {
  useEffect(() => {
    document.title = "Resume | Mohamad Moumneh";
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row className="resume">
          <div className="resume-preview-shell">
            <div className="resume-preview-header">
              <div>
                <p className="resume-label">Resume</p>
                <h1>Mohamad Moumneh</h1>
                <p className="resume-copy">
                  A concise overview of my skills, projects, education, and
                  development experience.
                </p>
              </div>
              <div className="resume-actions">
                <button
                  type="button"
                  onClick={() => downloadCv(LOCATION)}
                  className="resume-download-btn btn btn-primary"
                >
                  <AiOutlineDownload aria-hidden="true" />
                  &nbsp;Download CV
                </button>
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn hero-btn-outline resume-open-btn"
                  onClick={() => trackEvent(EVENTS.CV_OPEN, { location: LOCATION })}
                >
                  <HiOutlineExternalLink aria-hidden="true" />
                  &nbsp;Open in new tab
                </a>
              </div>
            </div>

            <div className="resume-preview-frame">
              <figure className="resume-preview-figure">
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-preview-link"
                  aria-label="View the full CV as a PDF"
                  onClick={() => trackEvent(EVENTS.CV_OPEN, { location: "resume_preview" })}
                >
                  <img
                    className="resume-preview-image"
                    src={cvPreview}
                    width={1654}
                    height={2339}
                    decoding="async"
                    alt="Preview of Mohamad Moumneh's CV"
                  />
                  <span className="resume-preview-hint" aria-hidden="true">
                    <HiOutlineExternalLink /> View full PDF
                  </span>
                </a>
                <figcaption className="resume-preview-note">
                  Click the preview or use the buttons above for the full PDF.
                </figcaption>
              </figure>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
