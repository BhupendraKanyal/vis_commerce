import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Select from "./Select";
import Link from "./Link";
import "./CardNew.css";

function ImageContent({ id, image, title, subtitle }) {
  return (
    <div>
      <Card
        className="text-white p-3 m-5 "
        style={{
          backgroundColor: "#2f2f2e",
          minWidth: "20rem",
          margin: "0 10px",
        }}
      >
        <Row className="align-items-start justify-content-start">
          <Col xs={12} lg={6} className="">
            <div>
              <Card.Img
                variant="top"
                src={image}
                className="w-100" // Ensure the image fills its container
              />
            </div>
          </Col>
          <Col xs={12} lg={6} className="pl-lg-5 mt-3  ">
            <div className="d-flex flex-column justify-content-between  px-5">
              <div>
                <Card.Title
                  style={{ fontSize: "45px" }}
                  className="text-md-right custom-text mb-2"
                >
                  {title}
                  <span style={{ color: "#FF4233" }}>3D</span>
                </Card.Title>
                <Card.Text
                  style={{
                    wordSpacing: "3px",
                    letterSpacing: "1px",
                    fontSize: "28px",
                  }}
                  className="text-md-right subtitle mb-2"
                >
                  {subtitle}
                </Card.Text>
              </div>
              <div className="pt-5 pb-2">
                <Select id={id}/>
              </div>
              <p style={{ color: "#F8493B" }} className="mt-2">
                Select Your Screen First
              </p>
              <Link />
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default ImageContent;
