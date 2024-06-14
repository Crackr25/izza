import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            We offer a complete range of financial analysis reports and
            financial statements that meet the applicable accounting standards.
            From preparing general ledger reports and financial statements to
            Financial Statement Analysis.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
