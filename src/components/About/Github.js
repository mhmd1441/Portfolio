import { GitHubCalendar } from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

const GITHUB_USER = "Mhmd1441";

const statsUrl = `https://github-readme-stats.vercel.app/api?username=${GITHUB_USER}&show_icons=true&hide_border=true&bg_color=0d1c2e&title_color=3b82f6&icon_color=3b82f6&text_color=b7c4d5&ring_color=1e40af`;
const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USER}&layout=compact&hide_border=true&bg_color=0d1c2e&title_color=3b82f6&text_color=b7c4d5&langs_count=8`;

function Github() {
  return (
    <Row className="github-row">
      <h1 className="project-heading github-heading">
        Days I <strong className="purple">Code</strong>
      </h1>

      <Col xs={12} className="github-stats-row reveal">
        <img
          src={statsUrl}
          alt="Mohamad's GitHub stats"
          className="github-stat-img"
        />
        <img
          src={langsUrl}
          alt="Top languages"
          className="github-stat-img"
        />
      </Col>

      <Col xs={12} className="reveal" style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
        <GitHubCalendar
          username={GITHUB_USER}
          blockSize={15}
          blockMargin={5}
          colorScheme="dark"
          theme={{
            dark: ["#0f1e38", "#1e3a8a", "#2563eb", "#3b82f6", "#60a5fa"],
          }}
          fontSize={16}
        />
      </Col>
    </Row>
  );
}

export default Github;
