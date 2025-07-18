import React from "react";
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
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Mohamad Moumneh</strong>
              </h1>

              <div className="Loop" style={{ padding: 50, textAlign: "left",color: "#000"}}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "445px", 
                  maxWidth: "calc(100% - 5px)",
                  borderRadius: "10px", 
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
