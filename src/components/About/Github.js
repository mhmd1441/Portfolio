import { GitHubCalendar } from "react-github-calendar";
import { Row, Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { EVENTS, trackEvent } from "../../analytics";

const GITHUB_USER = "Mhmd1441";
const GITHUB_URL = `https://github.com/${GITHUB_USER}`;

/**
 * Contribution calendar only. The github-readme-stats image cards were removed
 * because the public service is unreliable (it returned 503 "deployment paused"
 * during review), which left broken images on this page for every visitor.
 */
function Github() {
  return (
    <Row className="github-row">
      <h2 className="project-heading github-heading">
        Days I <strong className="purple">Code</strong>
      </h2>

      <Col xs={12} className="reveal github-calendar">
        <GitHubCalendar
          username={GITHUB_USER}
          blockSize={15}
          blockMargin={5}
          colorScheme="dark"
          theme={{
            dark: ["#0f1e38", "#1e3a8a", "#2563eb", "#3b82f6", "#60a5fa"],
          }}
          fontSize={16}
          errorMessage="The contribution calendar could not be loaded right now. See the full activity on GitHub."
        />
      </Col>

      <Col xs={12} className="reveal github-profile-link">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn hero-btn-outline"
          onClick={() => trackEvent(EVENTS.GITHUB_CLICK, { location: "about_calendar" })}
        >
          <FaGithub aria-hidden="true" /> View profile on GitHub
        </a>
      </Col>
    </Row>
  );
}

export default Github;
