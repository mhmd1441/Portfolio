import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/avatarHome.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="home-row">
            <Col md={7} className="home-header">
              <p className="hero-kicker">Backend Developer | Full-Stack Builder</p>
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
