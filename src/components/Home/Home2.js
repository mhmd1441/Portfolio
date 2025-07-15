import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’ve developed a deep passion for programming, and although I'm
              still learning, I believe I’ve gained valuable skills along the
              way. 🤷‍♂️
              <br />
              <br />I am proficient in languages and frameworks like
              <i>
                <b className="purple">
                  C++, Laravel, PHP, Java, ReactJS, React Native
                </b>
              </i>
              <br />
              <br />
              My areas of interest include creating innovative{" "}
              <i>
                <b className="purple">Web Technologies and Products</b>
              </i>
              <br />
              <br />
              Whenever I can, I love leveraging my skills to build cutting-edge
              products using <b className="purple">Laravel</b> and modern{" "}
              <i>
                <b className="purple">JavaScript Libraries and Frameworks</b>
              </i>
              , including
              <i>
                <b className="purple">React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Mhmd1441"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mhmdmoumneh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
