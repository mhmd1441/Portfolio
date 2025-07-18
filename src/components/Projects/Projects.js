import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DeliverAsYouGo from "../../Assets/Projects/DeliverAsYouGo.png";
import portfoliologo from "../../Assets/logo.png";
import Logo from "../../Assets/Projects/PharmacyLogo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DeliverAsYouGo}
              isBlog={false}
              title="Deliver As You Go"
              description="The Delivery App System connects clients and drivers via a scalable web platform, enabling real-time tracking, multi-payment options, and automated driver allocation, while admins manage approvals, loyalty programs, and analytics. Built with Laravel, MySQL, and APIs (Google Maps, Stripe), it ensures secure, user-friendly delivery management with features like live chat, GPS tracking, and multi-currency support."
              ghLink="https://github.com/RaphaelM02/Deliver-As-You-Go.git"
            />
          </Col>

          <Col md={4} className="project-card" color="#3b82f6">
            <ProjectCard
              imgPath={Logo}
              isBlog={false}
              title="Pharmacy Zone"
              description="Pharmacy Zone is a Laravel-based backend project designed to enhance 
              user access to essential pharmaceutical services. The platform allows users to:
              Browse and purchase medicines with detailed descriptions, including allergy information and precautions.
              View available pharmacies nearby to either place an order or visit in person.
              Engage in live chat with licensed pharmacists, enabling real-time answers to any medical or product-related questions.
              Pharmacy Zone aims to bridge the gap between patients and pharmacists by offering a reliable, accessible, and informative digital healthcare experience."
              ghLink="https://github.com/mhmd1441/Pharmacy-Project"
            />
          </Col>

          <Col md={4} className="project-card" color="#3b82f6">
            <ProjectCard
              imgPath={portfoliologo}
              isBlog={false}
              title="Personal Portfolio"
              description="This is my personal portfolio website, showcasing my skills, projects,
               and experience as a developer. Built with React, JavaScript, and CSS,
                it serves as a central place to highlight my work and share what I’m learning."
              ghLink="https://github.com/mhmd1441/Portfolio.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
