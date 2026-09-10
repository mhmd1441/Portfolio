import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiIntellijidea,
  SiNginx,
  SiPostman,
  SiSwagger,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const tools = [
  { label: "Git", icon: <SiGit /> },
  { label: "GitHub", icon: <SiGithub /> },
  { label: "VS Code", icon: <VscVscode /> },
  { label: "IntelliJ IDEA", icon: <SiIntellijidea /> },
  { label: "Postman", icon: <SiPostman /> },
  { label: "Swagger", icon: <SiSwagger /> },
  { label: "Docker", icon: <SiDocker /> },
  { label: "Nginx", icon: <SiNginx /> },
  { label: "Figma", icon: <SiFigma /> },
];

function Toolstack() {
  return (
    <Row className="skill-grid">
      {tools.map((tool) => (
        <Col xs={6} sm={4} md={3} lg={2} className="tech-icons reveal" key={tool.label}>
          {React.cloneElement(tool.icon, { "aria-hidden": "true" })}
          <span>{tool.label}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
