import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { HiOutlineMail, HiArrowRight } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { EVENTS, trackEvent } from "../../analytics";

const LOCATION = "home_contact";

function Home2() {
  return (
    <Container fluid className="home-about-section">
      <Container>
        <Row className="intro-row">
          <Col md={8} className="home-about-description">
            <p className="section-eyebrow">Introduction</p>
            <h1 className="section-title">
              Building <span className="purple">useful software</span> with
              purpose
            </h1>
            <p className="home-about-body">
              Computer Science graduate from Antonine University, Beirut,
              focused on backend and full-stack development. I turn ideas into
              structured, reliable web and mobile applications that real people
              can depend on.
            </p>
            <Link
              to="/about"
              className="home-about-link"
              onClick={() =>
                trackEvent(EVENTS.NAV_CLICK, { to: "/about", location: "home_intro" })
              }
            >
              More about me <HiArrowRight />
            </Link>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img
                src={myImg}
                width={400}
                height={400}
                loading="lazy"
                decoding="async"
                className="img-fluid"
                alt="Illustration of Mohamad Moumneh"
              />
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
              <a
                href="mailto:mmoumneh14@gmail.com"
                className="contact-link contact-link--primary"
                onClick={() => trackEvent(EVENTS.EMAIL_CLICK, { location: LOCATION })}
              >
                <HiOutlineMail />
                <span>mmoumneh14@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mhmdmoumneh"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                onClick={() => trackEvent(EVENTS.LINKEDIN_CLICK, { location: LOCATION })}
              >
                <FaLinkedinIn />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Mhmd1441"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                onClick={() => trackEvent(EVENTS.GITHUB_CLICK, { location: LOCATION })}
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
