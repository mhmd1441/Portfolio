import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DeliverAsYouGo from "../../Assets/Projects/DeliverAsYouGo.webp";
import portfoliologo from "../../Assets/logo.png";
import PharmacyLogo from "../../Assets/Projects/PharmacyLogo.webp";
import CommuTechLogo from "../../Assets/Projects/CommuTechLogo.webp";
import MisstralsLogo from "../../Assets/Projects/MisstralsLogo.png";
import TaskFlowLogo from "../../Assets/Projects/TaskFlowLogo.webp";
import InventStockLogo from "../../Assets/Projects/InventStockLogo.jpg";
import { EVENTS } from "../../analytics";
import { useAnalyticsView } from "../../hooks/useAnalyticsView";

const projects = [
  {
    title: "InventStock",
    description:
      "A multi-user inventory and counter-management system for an automotive spare-parts shop, replacing spreadsheet workflows with fast search, accurate stock control, multi-currency sales, customer debt tracking, and audited returns.",
    tags: [".NET 8", "ASP.NET Core", "PostgreSQL", "Next.js", "TypeScript", "Docker"],
    ghLink: "https://github.com/mhmd1441/InventStock",
    image: { src: InventStockLogo, width: 2752, height: 1536 },
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
    title: "Misstrals",
    description:
      "A luxury fashion e-commerce platform that combines editorial design, fast product discovery, secure checkout, and a privacy-first digital outfit builder.",
    tags: ["Laravel 12", "React", "PostgreSQL", "Redis", "Meilisearch", "Stripe"],
    ghLink: "https://github.com/mhmd1441/Misstrals",
    image: { src: MisstralsLogo, width: 1280, height: 1280 },
  },
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
  const projectsRef = useRef(null);

  useAnalyticsView(EVENTS.SECTION_VIEW, projectsRef, { section_name: "projects_list" });

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
        <Row ref={projectsRef} className="project-grid">
          {projects.map((project) => (
            <Col md={6} lg={4} className="project-card reveal" key={project.title}>
              <ProjectCard
                imgPath={project.image.src}
                imgWidth={project.image.width}
                imgHeight={project.image.height}
                title={project.title}
                description={project.description}
                tags={project.tags}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
