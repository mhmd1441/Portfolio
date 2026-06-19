import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="intro-row">
          <Col md={8} className="home-about-description">
            <p className="section-eyebrow">About me</p>
            <h1 className="section-title">
              Building <span className="purple">useful software</span> with
              purpose
            </h1>
            <p className="home-about-body">
              I am a Bachelor of Technology in Computer Science graduate from
              Antonine University, Beirut — focused on backend development,
              full-stack products, and mobile-first systems. I turn ideas into
              structured, reliable applications that real people can depend on.
              <br />
              <br />I work with{" "}
              <b className="purple">
                Laravel, PHP, React, React Native, ASP.NET Core, Java, C++,
                PostgreSQL, and MySQL
              </b>
              .
              <br />
              <br />
              My strongest interest is building practical platforms with clear
              architecture, secure authentication, clean APIs, and polished user
              experiences.
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* Contact */}
        <Row>
          <Col md={12} className="contact-section">
            <p className="section-eyebrow">Get in touch</p>
            <h1 className="section-title">
              Let&apos;s build something <span className="purple">together</span>
            </h1>
            <p className="contact-copy">
              Whether it's a job opportunity, a collaboration, or just a
              technical conversation — my inbox is open. I typically respond
              within 24 hours.
            </p>
            <div className="contact-actions">
              <a href="mailto:mmoumneh14@gmail.com" className="contact-link contact-link--primary">
                <HiOutlineMail />
                <span>mmoumneh14@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mhmdmoumneh"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaLinkedinIn />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Mhmd1441"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
