import { GitHubCalendar } from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row className="github-row">
      <h1 className="project-heading github-heading">
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="Mhmd1441"
        blockSize={15}
        blockMargin={5}
        color="#38bdf8"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
