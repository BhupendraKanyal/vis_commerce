import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Benefitt.css";
import rocket from "../BenefitAssets/rocket.svg";
import ShopLook from "../BenefitAssets/ShopLook.svg";
import monitor from "../BenefitAssets/Monitor.svg";
import Collab3D from "../BenefitAssets/Collab3D.svg";

export default function Colloboration() {
  return (
    <Container className="h-100 text-white">
      <div
        style={{ maxWidth: "1240px", maxHeight: "640px" }}
        className="mt-3 card"
      >
           {/* left */}
    
<Row className="g-0 ">
  {/* left */}
  <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex align-items-center ">
    <div className="card-body text-left">
      <div className="card-title benefit-common-style">
        <h2 className="benefit-common-style">
          Collaboration<span className="text-red">3D</span>
        </h2>
      </div>
      <div style={{ fontSize: "25px", wordSpacing: "3px" }}>
        <ul>
          <li>Deep Engagement with buyer & seller</li>
          <li>
            Showcase your product in real-time 3D Space with Audio and
            Video chat
          </li>
        </ul>
      </div>
      <div>
        <img src={Collab3D} alt="" style={{ maxWidth: "100%", height: "auto" }} />
      </div>
    </div>
  </Col>
          {/* right */}
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex justify-content-center align-items-center ">
            <div className="collo-image-container py-4">
              <img src={monitor} alt="..." className="collo-image img-fluid" style={{ width: "100%",height:"100%" }} />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
