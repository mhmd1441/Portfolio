import { Col, Row } from "react-bootstrap";
import {
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiNginx,
  SiOpenapiinitiative,
  SiPostman,
  SiSwagger,
} from "react-icons/si";
import { VscCode, VscVscode } from "react-icons/vsc";

const tools = [
  { label: "Git", icon: <SiGit /> },
  { label: "GitHub", icon: <SiGithub /> },
  { label: "Postman", icon: <SiPostman /> },
  { label: "Swagger", icon: <SiSwagger /> },
  { label: "OpenAPI", icon: <SiOpenapiinitiative /> },
  { label: "Docker", icon: <SiDocker /> },
  { label: "Nginx", icon: <SiNginx /> },
  { label: "VS Code", icon: <VscVscode /> },
  { label: "Visual Studio", icon: <VscCode /> },
  { label: "Figma", icon: <SiFigma /> },
];

function Toolstack() {
  return (
    <Row className="skill-grid">
      {tools.map((tool) => (
        <Col xs={6} sm={4} md={3} lg={2} className="tech-icons" key={tool.label}>
          {tool.icon}
          <span>{tool.label}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
