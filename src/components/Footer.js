import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { EVENTS, trackEvent } from "../analytics";

const LOCATION = "footer";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/project", label: "Projects" },
  { to: "/resume", label: "Resume" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-main">
          {/* Brand */}
          <Col md={4} className="footer-brand">
            <h4 className="footer-name">Mohamad Moumneh</h4>
            <p className="footer-tagline">
              Backend &amp; Full-Stack Developer
            </p>
            <p className="footer-location">📍 Beirut, Lebanon</p>
            <a
              href="mailto:mmoumneh14@gmail.com"
              className="footer-email"
              onClick={() => trackEvent(EVENTS.EMAIL_CLICK, { location: LOCATION })}
            >
              <HiOutlineMail aria-hidden="true" /> mmoumneh14@gmail.com
            </a>
          </Col>

          {/* Navigation */}
          <Col md={4} className="footer-nav">
            <h5 className="footer-nav-heading">Navigation</h5>
            <ul className="footer-nav-links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() =>
                      trackEvent(EVENTS.NAV_CLICK, { to: link.to, location: LOCATION })
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Social */}
          <Col md={4} className="footer-social-col">
            <h5 className="footer-nav-heading">Connect</h5>
            <div className="footer-social-links">
              <a
                href="https://github.com/Mhmd1441"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                onClick={() => trackEvent(EVENTS.GITHUB_CLICK, { location: LOCATION })}
              >
                <AiFillGithub aria-hidden="true" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mhmdmoumneh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                onClick={() => trackEvent(EVENTS.LINKEDIN_CLICK, { location: LOCATION })}
              >
                <FaLinkedinIn aria-hidden="true" /> LinkedIn
              </a>
              <a
                href="mailto:mmoumneh14@gmail.com"
                aria-label="Email"
                onClick={() => trackEvent(EVENTS.EMAIL_CLICK, { location: LOCATION })}
              >
                <HiOutlineMail aria-hidden="true" /> Email
              </a>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom">
          <span>© {year} Mohamad Moumneh — All rights reserved.</span>
          <span>Designed &amp; built by Mohamad Moumneh</span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
