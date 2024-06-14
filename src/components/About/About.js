import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "./FEATURE STORY.pdf";
import pdf2 from "./INFOGRAPHIC2.pdf";
import vid1 from "./1.mp4";
import vid2 from "./2.mp4";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function About() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{ justifyContent: "center", paddingBottom: "50px" }}
          >
            <h1
              className="purple"
              style={{ fontSize: "2.1em", paddingBottom: "20px" }}
            >
              FEATURE WRITING STORY ABOUT WOMEN EMPOWERMENT
            </h1>
          </Col>
          <Col
            md={12}
            style={{ justifyContent: "center", paddingBottom: "50px" }}
          >
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Col>

          <Col
            md={12}
            style={{ justifyContent: "center", paddingBottom: "50px" }}
          >
            <p style={{ fontSize: "1.3em", paddingBottom: "20px" }}>
              Empowered women empower the world. Together, let's break barriers
              and inspire future generations <br />
              <b className="purple">#BABAEKAHINDIBABAELANG</b>
            </p>
          </Col>
          <Col
            md={12}
            style={{ justifyContent: "center", paddingBottom: "50px" }}
          >
            <Document file={pdf2} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Col>
          <Col md={12} className="d-flex justify-content-around">
            <div
              className="video-wrapper"
              style={{ width: "82%", height: "500px" }}
            >
              <h2
                className="purple"
                style={{ fontSize: "2em", paddingBottom: "20px" }}
              >
                #StrongerWomen{" "}
              </h2>
              <iframe
                src={vid1}
                title="Video 1"
                allowFullScreen
                className="responsive-video"
                style={{ width: "100%", height: "100%" }}
                muted
              ></iframe>
            </div>
          </Col>
          <Col md={12} className="d-flex justify-content-around mt-5">
            <div
              className="video-wrapper"
              style={{ width: "82%", height: "500px" }}
            >
              <h2
                className="purple mt-5"
                style={{ fontSize: "2em", paddingBottom: "20px" }}
              >
                #WomenRights{" "}
              </h2>
              <iframe
                src={vid2}
                title="Video 2"
                allowFullScreen
                className="responsive-video"
                style={{ width: "100%", height: "100%" }}
                muted
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
