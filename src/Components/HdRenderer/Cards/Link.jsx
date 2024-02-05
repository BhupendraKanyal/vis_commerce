import React from "react";
import { Row, Col } from "react-bootstrap";
import watch from "../assets/watch-icon.svg";
import TryNow from "../assets/tryNow-gray.svg";
import "./card.css";

const Link = () => {
  return (
    <Row className="justify-content-start align-items-center">
      <Col xs={6} sm={6} md={6} lg={6} className="d-flex justify-content-start">
        <img src={TryNow} className="mt-2 customize-tryNow" alt="" />
      </Col>
      <Col xs={6} sm={6} md={6} lg={6} className="d-flex justify-content-start">
        <img src={watch} className="customize-video" alt="" />
      </Col>
    </Row>
  );
};

export default Link;
