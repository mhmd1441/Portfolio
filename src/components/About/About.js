import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Languages from "./Languages";
import aboutWebp from "../../Assets/about.webp";
import aboutJpg from "../../Assets/about.jpg";
import Toolstack from "./Toolstack";

function About() {
  useEffect(() => {
    document.title = "About | Mohamad Moumneh";
  }, []);

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="about-hero-row">
          <Col md={7} className="about-copy">
            <p className="section-eyebrow reveal">Profile</p>
            <h1 className="section-title reveal">
              Know who <strong className="purple">I am</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} className="about-img reveal">
            <picture>
              <source srcSet={aboutWebp} type="image/webp" />
              <img
                src={aboutJpg}
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
                alt="Illustration of a developer workspace with a laptop and code"
                className="img-fluid"
              />
            </picture>
          </Col>
        </Row>
        <h2 className="project-heading reveal">
          <strong className="purple">Languages</strong> I Speak
        </h2>
        <Languages />

        <h2 className="project-heading reveal">
          Professional <strong className="purple">Skillset</strong>
        </h2>

        <Techstack />

        <h2 className="project-heading reveal">
          <strong className="purple">Tools</strong> I use
        </h2>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
