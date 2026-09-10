import React, { useEffect, useRef, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { BsBriefcase } from "react-icons/bs";
import { EVENTS, trackEvent } from "../analytics";

const iconClassName = "nav-icon";

const iconProps = { className: iconClassName, "aria-hidden": "true" };

const links = [
  { to: "/", label: "Home", icon: <AiOutlineHome {...iconProps} /> },
  { to: "/about", label: "About", icon: <AiOutlineUser {...iconProps} /> },
  { to: "/experience", label: "Experience", icon: <BsBriefcase {...iconProps} /> },
  { to: "/project", label: "Projects", icon: <AiOutlineFundProjectionScreen {...iconProps} /> },
  { to: "/resume", label: "Resume", icon: <CgFileDocument {...iconProps} /> },
];

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        updateExpanded(false);
      }
    }
    if (expand) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [expand]);

  const isActive = (path) => location.pathname === path;

  const handleNavClick = (to) => {
    updateExpanded(false);
    trackEvent(EVENTS.NAV_CLICK, { to, location: "navbar" });
  };

  return (
    <Navbar
      ref={navRef}
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <img
            src={logo}
            width={500}
            height={500}
            className="img-fluid logo"
            alt="Mohamad Moumneh — home"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {links.map((link) => (
              <Nav.Item key={link.to}>
                <Nav.Link
                  as={Link}
                  to={link.to}
                  className={isActive(link.to) ? "nav-link-active" : ""}
                  onClick={() => handleNavClick(link.to)}
                >
                  {link.icon} {link.label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
