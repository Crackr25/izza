import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import act from "../../Assets/Projects/CONTENT-WRITING-NEWS-STORY.pdf";
import act1 from "../../Assets/Projects/DELA-ROSA-IZZA-JOY-ASSIGNMENT.pdf";
import act2 from "../../Assets/Projects/Feature-Story-about-the-Holy-Week.pdf";
import act3 from "../../Assets/Projects/DELA-ROSA-2K4-Infographic.pdf";
import act4 from "../../Assets/Projects/FIRST-DRAFT-DELA-ROSA-IZZA-JOY.pdf";
import act5 from "../../Assets/Projects/TCM-222-PERSUADING-DELA-ROSA-2K4.pdf";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Content Writing - News Story"
              ghLink={act}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Dela Rosa Joy - Assignment"
              ghLink={act1}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Feature Story about the Holy Week"
              ghLink={act2}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard title="InfoGraphic" ghLink={act3} />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="First Draft Dela Rosa Joy"
              ghLink={act4}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="TCM 222 - Persuading Dela Rosa Joy"
              ghLink={act5}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
