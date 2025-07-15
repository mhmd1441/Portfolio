import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Mohamad Moumneh </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am currently a senior Computer Science Student at Antonine University
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mohamad Moumneh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
