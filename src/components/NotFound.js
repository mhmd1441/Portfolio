import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";

function NotFound() {
  useEffect(() => {
    document.title = "Page not found | Mohamad Moumneh";
  }, []);

  return (
    <Container fluid className="not-found-section">
      <div className="not-found-card">
        <p className="section-eyebrow">Error 404</p>
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Page not found</h2>
        <p className="not-found-copy">
          The page you are looking for doesn&apos;t exist or has moved. Try one
          of these instead.
        </p>
        <div className="hero-cta not-found-actions">
          <Link to="/" className="btn btn-primary hero-btn-primary">
            <AiOutlineHome /> Back to Home
          </Link>
          <Link to="/project" className="btn hero-btn-outline">
            <AiOutlineFundProjectionScreen /> View Projects
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default NotFound;
