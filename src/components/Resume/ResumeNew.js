import React, { useState, useEffect } from "react";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { AiFillFacebook } from "react-icons/ai";
function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <Row className="justify-content-center">
            <Col md={5}>
              <h4 className="my-2">
                {" "}
                <b className="purple"> Contact Us </b>{" "}
              </h4>
              <p className="mt-5">
                <strong>
                  {" "}
                  <b className="purple"> Address: </b>
                </strong>
                <br />
                123 Main Street, Suite 101 <br />
                City, State, ZIP Code
              </p>
              <p className="my-5">
                <strong>
                  {" "}
                  <b className="purple">Phone: </b>
                </strong>{" "}
                (555) 123-4567
                <br />
                <strong>
                  {" "}
                  <b className="purple"> Email: </b>
                </strong>{" "}
                IBT3Aaccountingfirm@gmail.com
              </p>
              <p className="my-5">
                <strong>
                  {" "}
                  <b className="purple"> Office Hours: </b>
                </strong>
                <br />
                Monday - Friday: 9:00 AM - 5:00 PM <br />
                Saturday: By appointment only <br />
                Sunday: Closed
              </p>
              <h5 className="my-2">
                {" "}
                <b className="purple"> Social Media </b>
              </h5>
              <p>
                {" "}
                <b className="purple"> Connect with us: </b> IBT3A ACCOUNTING
                FIRM
              </p>
              <a
                href="https://www.facebook.com/IBT3AACCOUNTINGFIRM"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillFacebook />
              </a>
              <h5 className="mt-5">Contact Form</h5>
              <strong> [Name] </strong> IBT3A ACCOUNTING FIRM <br />{" "}
              <strong> [Email Address] </strong>
              IBT3Aaccountingfirm@gmail.com <br />
              <strong>[Phone Number] </strong> 09997689856
              <h5 className="mt-5">
                {" "}
                <b className="purple"> Privacy Policy </b>{" "}
              </h5>
              <p className="text-justify">
                BT3A Accounting is committed to protecting the privacy of our
                clients and users. This Privacy Policy outlines how we collect,
                use, disclose, and safeguard your information when you use our
                bookkeeping/accounting services. <br />{" "}
                <h5 className="mt-5">
                  {" "}
                  <b className="purple"> Information We Collect </b>{" "}
                </h5>
                We may collect personal information, including but not limited
                to: - Contact information, such as your name, email address,
                phone number, and postal address. - Financial information, such
                as bank account details, credit/debit card numbers, and other
                payment information. - Business information, such as company
                name, business address, and tax identification number. - Other
                information you provide to us when using our services or
                communicating with us.{" "}
              </p>
              <h5 className="mt-5">
                {" "}
                <b className="purple">How We Use Your Information </b>
              </h5>{" "}
              <p className="text-justify">
                <br /> We may use the information we collect for various
                purposes, including but not limited to: <br />
                Providing and maintaining our bookkeeping/accounting services.
                <br />
                Processing transactions and payments.
                <br />
                Communicating with you about your account and our services.
                <br />
                Providing customer support.
                <br />
                Complying with legal obligations.
                <br />
                Improving our services and developing new features.
                <br />
                Preventing fraudulent activities and ensuring the security of
                our platform.
              </p>
              <h5 className="mt-5">
                <b className="purple"> Information Sharing </b>
              </h5>
              <p className="text-justify">
                With service providers who assist us in operating our business
                and providing our services.
                <br />
                With your consent or at your direction.
                <br />
                In response to a legal request or when required by law.
                <br />
                To protect our rights, property, or safety, or the rights,
                property, or safety of others.
                <br />
                In connection with a merger, acquisition, or sale of assets.
                <br />
              </p>
              <h5 className="mt-5">
                <b className="purple"> Data Security </b>
              </h5>
              We take reasonable measures to protect the security of your
              information. However, please be aware that no method of
              transmission over the internet or electronic storage is completely
              secure. Your Choices You have the right to access, update, or
              delete your personal information. You may also opt-out of
              receiving promotional emails from us. Please contact us if you
              wish to exercise any of these rights. Changes to This Privacy
              Policy We may update this Privacy Policy from time to time. Any
              changes will be posted on this page, and the effective date will
              be updated accordingly.
              <h5 className="mt-5">
                {" "}
                <b className="purple"> Call to Action </b>
              </h5>
              <p>
                Ready to take control of your finances? Contact us today for a
                free consultation!
              </p>
              <h5 className="mt-5">
                {" "}
                <b className="purple"> Accessibility </b>{" "}
              </h5>
              <p>
                Our office is wheelchair accessible. Please let us know if you
                require any additional accommodations.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
