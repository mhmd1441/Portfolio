import React, { useRef } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { EVENTS, trackEvent } from "../../analytics";
import { useAnalyticsView } from "../../hooks/useAnalyticsView";

function ProjectCards(props) {
  const cardRef = useRef(null);

  useAnalyticsView(EVENTS.PROJECT_VIEW, cardRef, { project_name: props.title });

  return (
    <Card ref={cardRef} className="project-card-view">
      {props.imgPath && (
        <Card.Img
          variant="top"
          src={props.imgPath}
          width={props.imgWidth}
          height={props.imgHeight}
          loading="lazy"
          decoding="async"
          alt={`${props.title} logo`}
        />
      )}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        {props.tags && (
          <div className="project-tags">
            {props.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
        <div className="project-actions">
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent(EVENTS.GITHUB_CLICK, {
                location: "project_card",
                project: props.title,
              })
            }
          >
            <BsGithub aria-hidden="true" /> &nbsp;GitHub
          </Button>
          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent(EVENTS.OUTBOUND_CLICK, {
                  location: "project_card",
                  project: props.title,
                  url: props.demoLink,
                })
              }
            >
              Live Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
