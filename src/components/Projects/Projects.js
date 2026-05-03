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
        <p className="section-eyebrow">Portfolio</p>
        <h1 className="project-heading">
          Selected <strong className="purple">Projects</strong>
        </h1>
        <p className="section-subtitle">
          A focused look at the systems I have built across backend APIs,
          mobile-first products, and full-stack web applications.
        </p>
        <Row className="project-grid">
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DeliverAsYouGo}
              isBlog={false}
              title="Deliver As You Go"
              description="A delivery management platform connecting clients, drivers, and admins with real-time tracking, payments, automated driver allocation, live chat, and analytics."
              tags={["Laravel", "MySQL", "Google Maps", "Stripe"]}
              ghLink="https://github.com/RaphaelM02/Deliver-As-You-Go.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Logo}
              isBlog={false}
              title="Pharmacy Zone"
              description="A Laravel healthcare platform for browsing medicines, locating pharmacies, placing orders, and connecting users with pharmacists through real-time chat."
              tags={["Laravel", "MySQL", "Live Chat", "Healthcare"]}
              ghLink="https://github.com/mhmd1441/Pharmacy-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfoliologo}
              isBlog={false}
              title="Personal Portfolio"
              description="A responsive portfolio website built to present my skills, projects, resume, and developer profile in a polished, recruiter-friendly format."
              tags={["React", "Bootstrap", "CSS", "Portfolio"]}
              ghLink="https://github.com/mhmd1441/Portfolio.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfoliologo}
              isBlog={false}
              title="CommuTech"
              description="A mobile-first civic technology platform for reporting infrastructure issues, tracking citizen reports, assigning workers, and enabling supervisor oversight."
              tags={["React Native", "Expo", "Laravel", "PostgreSQL"]}
              ghLink="https://github.com/mhmd1441/CommuTech"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfoliologo}
              isBlog={false}
              title="Task Management System"
              description="A role-based enterprise workflow system with secure API design, MVC integration, JWT authentication, RBAC, DTOs, and Swagger documentation."
              tags={["ASP.NET Core", "MVC", "JWT", "PostgreSQL"]}
              ghLink="https://github.com/mhmd1441/Advanced-Programming"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
