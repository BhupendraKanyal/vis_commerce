import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
import Link from "./Link";
import vi from "../../assets/showrroom.svg";

function CustomCard({ image, title, subtitle, id }) {
  return (
    <Container className="d-flex justify-content-center">
      <Card
        className="card-style my-3 mx-3"
        style={{
          borderBottom: "8px solid #FF4233",
          maxWidth: "25rem",
          borderRadius: "10px 10px 20px 20px",
        }}
      >
        <Card.Img
          variant="top"
          src={image}
          style={{ height: "250px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title style={{ color: "red" }} className="titles">
            <Row className="align-items-center">
              <Col>
                <div>
                  <h3 className="title">
                    {title} <span style={{ color: "#FF4233" }}>3D</span>
                  </h3>
                  <h6 className="subtitle">{subtitle}</h6>
                </div>
              </Col>
              <Col className="text-md-right">
                {/* {id === 0 ? <img src={shop} alt="" className="p-3" /> : ""} */}
              </Col>
            </Row>
            <Row>
              <Col>
                <select className="form-control form" required>
                  <option className="form" value="">
                    Select Screen
                  </option>
                </select>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link />
              </Col>
            </Row>
          </Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CustomCard;
