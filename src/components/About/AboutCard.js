import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view reveal">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            I am <span className="purple">Mohamad Moumneh</span>, a graduate of
            the Department of Technology in Computer Science at{" "}
            <span className="purple">Antonine University, Beirut, Lebanon</span>
            , holding a Bachelor of Technology in Computer Science (May 2026).
          </p>
          <p>
            I got into software because I wanted to build things people actually
            use. What drives me is the gap between working code and
            production-ready systems — authentication that holds up under
            pressure, APIs that behave predictably, and architectures where
            every piece has a clear reason to exist.
          </p>
          <p>
            Outside of coding, I follow developments in distributed systems,
            enjoy breaking down how large-scale products are built, and
            occasionally lose track of time reading about database internals.
          </p>
          <p className="quote-line">
            "Build things that are worth maintaining."
          </p>
          <footer className="blockquote-footer">Mohamad Moumneh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
