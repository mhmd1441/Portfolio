import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/avatarHome.png";
import pdfFile from "../../Assets/Mohamad_Moumneh_CV.pdf";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiOutlineDownload } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

function Home() {
  useEffect(() => {
    document.title = "Mohamad Moumneh | Portfolio";
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="home-row">
            <Col md={7} className="home-header">
              <div className="available-badge">
                <span className="available-dot" />
                Open to opportunities
              </div>
              <p className="hero-kicker">Backend Developer · Full-Stack · Mobile</p>
              <h1 className="heading">Hello, I'm</h1>
              <h1 className="heading-name">
                <strong className="main-name">Mohamad Moumneh</strong>
              </h1>
              <div className="Loop">
                <Type />
              </div>
              <p className="hero-summary">
                I build practical, scalable web and mobile systems with Laravel,
                React, React Native, PostgreSQL, and ASP.NET Core.
              </p>
              <div className="hero-cta">
                <Link to="/project" className="btn btn-primary hero-btn-primary">
                  <AiOutlineFundProjectionScreen /> View My Work
                </Link>
                <a
                  href={pdfFile}
                  download="MohamadMoumnehCV.pdf"
                  className="btn hero-btn-outline"
                >
                  <AiOutlineDownload /> Download CV
                </a>
              </div>
            </Col>

            <Col md={5} className="home-visual">
              <img src={homeLogo} alt="home pic" className="img-fluid hero-image" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
