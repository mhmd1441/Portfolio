import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import cvPreviewWebp from "../../Assets/cv-preview.webp";
import cvPreviewJpg from "../../Assets/cv-preview.jpg";
import { AiOutlineDownload } from "react-icons/ai";
import { downloadCv } from "../../utils/downloadCv";

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
              <button
                type="button"
                onClick={() => downloadCv("resume_page")}
                className="resume-download-btn btn btn-primary"
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </button>
            </div>
            <div className="resume-preview-frame">
              <picture>
                <source srcSet={cvPreviewWebp} type="image/webp" />
                <img
                  className="resume-preview-image"
                  src={cvPreviewJpg}
                  width={1400}
                  height={1812}
                  decoding="async"
                  alt="Preview of Mohamad Moumneh's CV"
                />
              </picture>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
