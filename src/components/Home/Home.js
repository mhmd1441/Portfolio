import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import heroWebp from "../../Assets/avatarHome.webp";
import heroJpg from "../../Assets/avatarHome.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiOutlineDownload, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CV_FILE_NAME, CV_URL, downloadCv } from "../../utils/downloadCv";
import { EVENTS, trackEvent } from "../../analytics";
import { useAnalyticsView } from "../../hooks/useAnalyticsView";

function Home() {
  const heroRef = useRef(null);

  useAnalyticsView(EVENTS.SECTION_VIEW, heroRef, { section_name: "home_hero" });

  useEffect(() => {
    document.title = "Mohamad Moumneh | Portfolio";
  }, []);

  const handleDownload = (event) => {
    event.preventDefault();
    downloadCv("home_hero");
  };

  return (
    <section>
      <Container ref={heroRef} fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="home-row">
            <Col md={7} className="home-header">
              <div className="available-badge">
                <span className="available-dot" />
                Open to full-time opportunities
              </div>
              <p className="hero-kicker">Software Engineer · Web · Mobile · Intelligent Systems</p>
              <p className="heading">Hello, I'm</p>
              <h1 className="heading-name">
                <strong className="main-name">Mohamad Moumneh</strong>
              </h1>
              <div className="Loop">
                <Type />
              </div>
              <p className="hero-summary">
                Beirut, Lebanon. I build practical web, mobile, CMS, ERP, and
                intelligent software systems that solve real business problems.
              </p>
              <div className="hero-cta">
                <Link
                  to="/project"
                  className="btn btn-primary hero-btn-primary"
                  onClick={() =>
                    trackEvent(EVENTS.NAV_CLICK, { to: "/project", location: "home_hero" })
                  }
                >
                  <AiOutlineFundProjectionScreen aria-hidden="true" /> View My Work
                </Link>
                <a
                  href={CV_URL}
                  download={CV_FILE_NAME}
                  onClick={handleDownload}
                  className="btn hero-btn-outline"
                >
                  <AiOutlineDownload aria-hidden="true" /> Download CV
                </a>
              </div>
            </Col>

            <Col md={5} className="home-visual">
              <picture>
                <source srcSet={heroWebp} type="image/webp" />
                <img
                  src={heroJpg}
                  width={900}
                  height={600}
                  fetchPriority="high"
                  decoding="async"
                  alt="Illustration of Mohamad Moumneh coding on a laptop"
                  className="img-fluid hero-image"
                />
              </picture>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
