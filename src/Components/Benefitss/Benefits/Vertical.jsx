import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Benefits.css";
import rocket from "../BenefitAssets/rocket.svg";
import ShopLook from "../BenefitAssets/ShopLook.svg";

export default function Vertical() {
  return (
    <Container className="h-100 pb-5">
      <div className="card-container mt-3">
        <Row className="g-0 .benefit_inital ">
          <Col md="6" lg="6" className="d-flex justify-content-start">
            <div className="image-container py-4">
              <img src={rocket} alt="..." className="image" />
            </div>
          </Col>
          <Col md="6" lg="5" className="d-flex align-items-center ml-5">
            <div className="card-body text-left ml-5">
              <div className="benefit-common-style">
                <h2 className="benefit-common-style text-white">
                  Take Your Brand to{" "}
                  <span className="text-red">Next Level</span>
                </h2>
              </div>
              <p className="text-white" style={{ fontSize: "25px", wordSpacing: "3px" }}>
                Thrilling Experiences for customers industry leadership
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
