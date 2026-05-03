import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hello, I am <span className="purple">Mohamad Moumneh</span> from{" "}
            <span className="purple">Beirut, Lebanon</span>. I am a senior
            Computer Science student at Antonine University, passionate about
            backend development, full-stack systems, and building products that
            can create real impact.
          </p>
          <p>
            I care about clean architecture, secure APIs, thoughtful user
            experience, and software that feels reliable from the first click.
          </p>
          <p className="quote-line">
            "Strive to build things that make a difference."
          </p>
          <footer className="blockquote-footer">Mohamad Moumneh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
