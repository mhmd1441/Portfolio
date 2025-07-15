import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone, I am <span className="purple">Mohamad Moumneh</span>
            {` `}
            from <span className="purple">Beirut, Lebanon</span>.
            <br />
            I am currently a senior Computer Science student at Antonine University, passionate about software development and building impactful solutions.
            <br />
            <br />
            You can connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/mhmdmoumneh"
              target="_blank"
              rel="noreferrer"
              className="purple"
            >
              LinkedIn
            </a>
            .
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Mohamad Moumneh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
