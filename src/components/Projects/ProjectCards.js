import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ textAlign: "center" }}>
      <Card.Body>
        <Card.Title style={{ textAlign: "center", verticalAlign: "middle" }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button
          variant={"outline-primary"}
          href={props.demoLink || props.ghLink}
          target="_blank"
          style={{ justifyContent: "flex-end" }}
        >
          View Activity
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
