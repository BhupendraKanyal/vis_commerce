import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./Benefitt.css";
import rocket from "../BenefitAssets/rocket.svg";
import ShopLook from "../BenefitAssets/ShopLook.svg";

export default function Vertical() {
  return (
    <Container className="h-100">
      <Card
        style={{ maxWidth: "1240px", maxHeight: "640px" }}
        className="bg-color mt-3"
      >
        <Row className="g-0 ">
          <Col md="6" lg="6" className="d-flex justify-content-start">
            <div className="image-container py-4">
              <Card.Img src={rocket} alt="..." fluid className="image" />
            </div>
          </Col>
          <Col md="6" lg="6" className="d-flex align-items-center ml-5">
            <Card.Body className="text-left ml-5">
              <Card.Title className="benefit-common-style">
                <h2 className="benefit-common-style">Take Your Brand to</h2><span className="text-red">Next Level</span>
              </Card.Title>
              <Card.Text style={{fontSize:"25px",wordSpacing:"3px"}}>
                Thrilling Experiences for customers industry leadership
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
