import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar2.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> Myself
            </h1>
            <p className="home-about-body">
              CURRENTLY STUDYING AT UNIVERSITY OF SCIENCE
              AND TECHNOLOGY OF SOUTHERN PHILIPPINES A 2ND YEAR TAKING UP &nbsp;
              <i>
                <b className="purple">
                  BACHELOR OF SCIENCE IN TECHNOLOGY COMMUNICATION MANAGEMENT{" "}
                </b>
              </i>
              <br />
              <br />
              THIS WEBSITE SERVES AS A PORTFOLIO IN OUR CONTENT WRITING COURSE.
              &nbsp;
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
