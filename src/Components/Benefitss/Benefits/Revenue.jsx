import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Benefitt.css";
import hdImage from "../BenefitAssets/HdImage.svg";
import Bookshelf from "../BenefitAssets/S1 .webp";
import Chair from "../BenefitAssets/Chari.webp";
import DiningTable from "../BenefitAssets/s2.webp";

export default function Revenue() {
  return (
    <Container className="mt-5 h-100 text-white ">
      <Row className="h-100">
        {/* Left */}
        <Col xs={12} md={6} className="d-flex align-items-center">
          <div className="card-body text-left">
            <div className="card-title benefit-common-style mb-5">
              <h2 className="text-red"> New Revenue system</h2>
              <h5>with high quality HD Renders</h5>
            </div>
            {/* Four boxes */}
            <Row className="d-flex flex-wrap justify-content-between">
              <Col xs={6} className="mb-3">
                <div className="box d-flex justify-content-center align-items-center">
                  <img src={DiningTable} alt="" className="box-img img-fluid" />
                </div>
              </Col>
              <Col xs={6} className="mb-3">
                <div className="box ">
                  <h2>Your</h2>
                  <h2> Products</h2>
                  <h4>
                    Add to Showroom3D and create HD Rendered{" "}
                    <span className="textRed">Images & Videos</span>
                  </h4>
                </div>
              </Col>
              <Col xs={6} className="mb-3">
                <div className="box">
                  <img src={Bookshelf} alt="" className="box-img img-fluid" />
                </div>
              </Col>
              <Col xs={6}>
                <div className="box ">
                  <img src={Chair} alt="" className="box-img img-fluid" />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        {/* Right */}
        <Col xs={12} md={6}>
          <div
            className="collo-image-container  d-flex justify-content-center align-items-center flex-column"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <img src={hdImage} alt="..." className=" collo-image img-fluid" />
            <h5 className="my-5">HDRendered Images/Video</h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
