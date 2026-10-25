import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { HiOutlineMail, HiArrowRight } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { EVENTS, trackEvent } from "../../analytics";
import { useAnalyticsView } from "../../hooks/useAnalyticsView";

const LOCATION = "home_contact";

function Home2() {
  const introductionRef = useRef(null);
  const contactRef = useRef(null);

  useAnalyticsView(EVENTS.SECTION_VIEW, introductionRef, { section_name: "home_introduction" });
  useAnalyticsView(EVENTS.SECTION_VIEW, contactRef, { section_name: "home_contact" });

  return (
    <Container fluid className="home-about-section">
      <Container>
        <Row ref={introductionRef} className="intro-row">
          <Col md={8} className="home-about-description">
            <p className="section-eyebrow">Introduction</p>
            <h2 className="section-title">
              Building <span className="purple">useful software</span> with
              purpose
            </h2>
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
              More about me <HiArrowRight aria-hidden="true" />
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
          <Col ref={contactRef} md={12} className="contact-section">
            <p className="section-eyebrow">Get in touch</p>
            <h2 className="section-title">
              Let&apos;s build something <span className="purple">together</span>
            </h2>
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
                <HiOutlineMail aria-hidden="true" />
                <span>mmoumneh14@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mhmdmoumneh"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                onClick={() => trackEvent(EVENTS.LINKEDIN_CLICK, { location: LOCATION })}
              >
                <FaLinkedinIn aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
