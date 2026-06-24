import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import pdfFile from "../../Assets/Mohamad_Moumneh_CV.pdf";

const pdfFileName = "Mohamad_Moumneh_CV.pdf";

function ResumeNew() {
  useEffect(() => {
    document.title = "Resume | Mohamad Moumneh";
  }, []);
  const handleDownload = async () => {
    const response = await fetch(pdfFile);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = pdfFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
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
                onClick={handleDownload}
                className="resume-download-btn btn btn-primary"
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </button>
            </div>
            <div className="resume-preview-frame">
              <iframe
                src={pdfFile}
                className="resume-preview-image"
                title="Mohamad Moumneh CV"
                style={{ width: "100%", height: "900px", border: "none" }}
              />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;