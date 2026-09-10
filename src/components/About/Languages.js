import { Row, Col } from "react-bootstrap";

const languages = [
  {
    lang: "Arabic",
    level: "Native",
    proficiency: 100,
    description: "Mother tongue",
  },
  {
    lang: "English",
    level: "Fluent",
    proficiency: 92,
    description: "Professional working proficiency",
  },
  {
    lang: "French",
    level: "Proficient",
    proficiency: 80,
description: "TCF B2 Certification (Campus France Liban)",
  },
];

function Languages() {
  return (
    <Row className="skill-grid" style={{ marginTop: "8px" }}>
      {languages.map((l) => (
        <Col xs={12} sm={6} md={4} key={l.lang} className="reveal">
          <div className="lang-card">
            <div className="lang-header">
              <span className="lang-name">{l.lang}</span>
              <span className="lang-level">{l.level}</span>
            </div>
            <div className="lang-bar-track">
              <div
                className="lang-bar-fill"
                style={{ width: `${l.proficiency}%` }}
              />
            </div>
            <p className="lang-description">{l.description}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Languages;
