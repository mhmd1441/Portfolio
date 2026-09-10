import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DeliverAsYouGo from "../../Assets/Projects/DeliverAsYouGo.webp";
import portfoliologo from "../../Assets/logo.png";
import PharmacyLogo from "../../Assets/Projects/PharmacyLogo.webp";
import CommuTechLogo from "../../Assets/Projects/CommuTechLogo.webp";
import TaskFlowLogo from "../../Assets/Projects/TaskFlowLogo.webp";

const projects = [
  {
    title: "Deliver As You Go",
    description:
      "A delivery management platform connecting clients, drivers, and admins with real-time tracking, payments, automated driver allocation, live chat, and analytics.",
    tags: ["Laravel", "MySQL", "Google Maps", "Stripe"],
    ghLink: "https://github.com/RaphaelM02/Deliver-As-You-Go",
    image: { src: DeliverAsYouGo, width: 400, height: 400 },
  },
  {
    title: "Pharmacy Zone",
    description:
      "A Laravel healthcare platform for browsing medicines, locating pharmacies, placing orders, and connecting users with pharmacists through real-time chat.",
    tags: ["Laravel", "MySQL", "Live Chat", "Healthcare"],
    ghLink: "https://github.com/mhmd1441/Pharmacy-Project",
    image: { src: PharmacyLogo, width: 400, height: 400 },
  },
  {
    title: "CommuTech",
    description:
      "A mobile-first civic technology platform for reporting infrastructure issues, tracking citizen reports, assigning workers, and enabling supervisor oversight.",
    tags: ["React Native", "Expo", "Laravel", "PostgreSQL"],
    ghLink: "https://github.com/mhmd1441/CommuTech",
    image: { src: CommuTechLogo, width: 700, height: 300 },
  },
  {
    title: "TaskFlow",
    description:
      "A role-based enterprise workflow system with secure API design, MVC integration, JWT authentication, RBAC, DTOs, and Swagger documentation.",
    tags: ["ASP.NET Core", "MVC", "JWT", "PostgreSQL"],
    ghLink: "https://github.com/mhmd1441/TaskFlow",
    image: { src: TaskFlowLogo, width: 680, height: 400 },
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive portfolio website built to present my skills, projects, resume, and developer profile in a polished, recruiter-friendly format.",
    tags: ["React", "Bootstrap", "CSS", "Portfolio"],
    ghLink: "https://github.com/mhmd1441/Portfolio",
    image: { src: portfoliologo, width: 500, height: 500 },
  },
];

function Projects() {
  useEffect(() => {
    document.title = "Projects | Mohamad Moumneh";
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <p className="section-eyebrow reveal">Portfolio</p>
        <h1 className="project-heading reveal">
          Selected <strong className="purple">Projects</strong>
        </h1>
        <p className="section-subtitle reveal">
          A focused look at the systems I have built across backend APIs,
          mobile-first products, and full-stack web applications.
        </p>
        <Row className="project-grid">
          {projects.map((project) => (
            <Col md={4} className="project-card reveal" key={project.title}>
              <ProjectCard
                imgPath={project.image.src}
                imgWidth={project.image.width}
                imgHeight={project.image.height}
                title={project.title}
                description={project.description}
                tags={project.tags}
                ghLink={project.ghLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
