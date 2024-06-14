import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            We are <span className="purple">IBT3A Accounting </span> provide
            both online and in-person bookkeeping services for businesses of all
            sizes. Our services are flexible and customized to your specific
            needs, from basic tasks to complex analyses like wholesale billing
            or receivables analyses.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
