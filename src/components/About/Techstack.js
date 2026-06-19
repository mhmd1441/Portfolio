import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiJava,
} from "react-icons/di";
import {
  SiDotnet,
  SiExpo,
  SiLaravel,
  SiMysql,
  SiPostman,
  SiPostgresql,
  SiReact,
} from "react-icons/si";

const skills = [
  { label: "React", icon: <SiReact /> },
  { label: "React Native", icon: <SiReact /> },
  { label: "Expo", icon: <SiExpo /> },
  { label: "Laravel", icon: <SiLaravel /> },
  { label: "Laravel Sanctum", icon: <SiLaravel /> },
  { label: "ASP.NET Core", icon: <SiDotnet /> },
  { label: "PostgreSQL", icon: <SiPostgresql /> },
  { label: "MySQL", icon: <SiMysql /> },
  { label: "JavaScript", icon: <DiJavascript1 /> },
  { label: "Java", icon: <DiJava /> },
  { label: "C++", icon: <CgCPlusPlus /> },
  { label: "REST APIs", icon: <SiPostman /> },
];

function Techstack() {
  return (
    <Row className="skill-grid">
      {skills.map((skill) => (
        <Col xs={6} sm={4} md={3} lg={2} className="tech-icons reveal" key={skill.label}>
          {skill.icon}
          <span>{skill.label}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
