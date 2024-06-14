import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            We provide comprehensive tax services for individuals and
            businesses, including preparation, filing, and expert consulting.
            Our experienced team ensures accurate filings and maximizes tax
            savings.Trust us to handle your tax needs efficiently, offering
            personalized advice to help you navigate complex tax situations and
            achieve your financial goals."
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Streamline your finances and empower your business with our
            outsourced bookkeeping and accounting."{" "}
          </p>
          <footer className="blockquote-footer">IBT3A Accounting</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
