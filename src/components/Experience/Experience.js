import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import {
  FaAws,
  FaBuilding,
  FaCode,
  FaExternalLinkAlt,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";
import { SiGoogle, SiMeta } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { AiFillRobot } from "react-icons/ai";
import { EVENTS, trackEvent } from "../../analytics";

const experiences = [
  {
    company: "touch Lebanon",
    role: "Full-Stack Developer — Internship",
    duration: "Aug 2025 – Sep 2025 · 2 mos · Beirut, Lebanon · On-site",
    icon: <FaMobileAlt />,
    tags: ["Laravel API", "React SPA", "Relational DB", "Nginx", "Git", "GitHub"],
    bullets: [
      "Built a role-based CMS end-to-end at one of Lebanon's two national mobile network operators: dashboards, menu/content hierarchy, approvals workflow, and feedback loop",
      "Backend: REST endpoints with full validation, status/ordering logic, soft deletes, and list endpoints with filters and pagination",
      "Frontend: SPA with reusable components (menus, content sections, loaders), accessible forms, clean state handling, and scalable UI/UX designs",
      "Delivery: structured README with screenshots for reviewers, no source exposure, deployment tested and running behind Nginx",
    ],
  },
  {
    company: "XpertBot",
    role: "Back-End Developer — Internship",
    duration: "Oct 2024 – Mar 2025 · 6 mos · Lebanon · Hybrid",
    icon: <FaCode />,
    tags: ["Laravel", "PHP", "REST APIs", "Postman", "Git", "JSON", "SSH", "MySQL"],
    bullets: [
      "Engaged in a comprehensive 6-month web development program with a focus on Laravel and backend technologies",
      "Built RESTful APIs, managed server communication via SSH, and tested endpoints with Postman",
      "Applied core Laravel principles: routing, controllers, middleware, and database migrations to build efficient web applications",
      "Developed proficiency in Git version control and structured data handling with JSON",
      "Optimized API throughput by 20%, enhancing data delivery efficiency and overall performance",
    ],
  },
  {
    company: "Ciatek IT & Software Solutions",
    role: "Web Developer — Internship",
    duration: "May 2024 – Aug 2024 · 4 mos · Beirut, Lebanon · On-site",
    icon: <FaLaptopCode />,
    tags: ["React", "TypeScript", "Django", "PostgreSQL", "Python", "Tailwind CSS", "Zustand", "Redux Toolkit", "Odoo", "Vite", "WooCommerce"],
    bullets: [
      "Worked on the Galoper ERP software in a team environment using Git and GitHub for collaborative development",
      "Expanded the Galoper backend using PostgreSQL and Django ORM, ensuring reliable data storage and seamless object-relational mapping",
      "Integrated REST APIs to facilitate front-end/back-end communication and optimized data exchange",
      "Synchronized Galoper with WooCommerce using RESTful API techniques and Python programming",
      "Developed front-end features in React, TypeScript, Vite, and Tailwind CSS, with Zustand and Redux Toolkit for state management",
      "Contributed to Odoo ERP modules as part of the broader platform integration work",
    ],
  },
  {
    company: "Bank Audi",
    role: "Information Technology Operations Analyst — Full-time",
    duration: "Oct 2023 – May 2024 · 8 mos · Beirut, Lebanon · On-site",
    icon: <FaBuilding />,
    tags: ["Jira", "FortiSIEM", "TrendMicro", "Oracle", "SOC/NOC", "Virtual Servers", "IT Operations"],
    bullets: [
      "Identified and resolved hardware and software issues, providing efficient service desk support across user devices",
      "Maintained smooth IT operations including server backups, system performance optimization, and infrastructure upkeep",
      "Proficient with ticketing systems (Jira) and IT service management tools for incident tracking and resolution",
      "Monitored SOC and NOC environments for high-security incidents: blocked malicious IPs, hashes, URLs, and emails",
      "Worked with FortiSIEM, TrendMicro, virtual servers, and Oracle systems as part of the IT infrastructure stack",
    ],
  },
];

const certifications = [
  {
    name: "AWS Cloud Practitioner (CLF-C01) — Hands On",
    issuer: "Udemy",
    date: "Nov 2024",
    icon: <FaAws />,
    link: "https://ude.my/UC-a7f43520-b538-40ca-8757-3ee46554fa7a",
    badge: null,
  },
  {
    name: "Foundations of Cybersecurity",
    issuer: "Google · Coursera",
    date: "Jan 2024",
    icon: <SiGoogle />,
    link: "https://coursera.org/verify/QUAL6YLA5B2W",
    badge: null,
  },
  {
    name: "Java Programming: Solving Problems with Software",
    issuer: "Duke University · Coursera",
    date: "Nov 2023",
    icon: <DiJava />,
    link: "https://coursera.org/verify/UXBCPBUJS5E8",
    badge: "With Honors",
  },
  {
    name: "Introduction to Front-End Development",
    issuer: "Meta · Coursera",
    date: "Jun 2023",
    icon: <SiMeta />,
    link: "https://coursera.org/verify/JVAPQAX8K6M9",
    badge: null,
  },
  {
    name: "The Magic of Artificial Intelligence",
    issuer: "Antonine University",
    date: "Nov 2023",
    icon: <AiFillRobot />,
    link: null,
    badge: "Seminar",
  },
];

function Experience() {
  useEffect(() => {
    document.title = "Experience | Mohamad Moumneh";
  }, []);

  return (
    <div className="experience-section">
      <Particle />
      <Container>
        {/* Work Experience */}
        <p className="section-eyebrow reveal">Career</p>
        <h1 className="project-heading reveal">
          Work <strong className="purple">Experience</strong>
        </h1>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item reveal" key={i}>
              <div className="timeline-dot">
                <span className="timeline-icon" aria-hidden="true">
                  {exp.icon}
                </span>
              </div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-company">{exp.company}</h3>
                    <p className="timeline-role">{exp.role}</p>
                  </div>
                  <span className="timeline-duration">{exp.duration}</span>
                </div>
                <ul className="timeline-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <div className="timeline-tags">
                  {exp.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <p className="section-eyebrow reveal" style={{ marginTop: "72px" }}>
          Learning
        </p>
        <h2 className="project-heading reveal">
          Certifications &amp; <strong className="purple">Courses</strong>
        </h2>

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <div className="cert-card reveal" key={i}>
              <div className="cert-icon" aria-hidden="true">
                {cert.icon}
              </div>
              <div className="cert-body">
                <p className="cert-name">{cert.name}</p>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
                {cert.badge && (
                  <span className="cert-badge">{cert.badge}</span>
                )}
              </div>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-verify"
                  aria-label={`Verify ${cert.name}`}
                  onClick={() =>
                    trackEvent(EVENTS.OUTBOUND_CLICK, {
                      location: "certifications",
                      label: cert.name,
                      url: cert.link,
                    })
                  }
                >
                  <FaExternalLinkAlt aria-hidden="true" /> Verify
                </a>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Experience;
