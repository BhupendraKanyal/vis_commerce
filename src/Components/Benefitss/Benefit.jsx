import React from "react";
import { Row, Col } from "react-bootstrap";
import BenefitCardMain from "./Benefits/BenefitCardMain";
import Vertical from "./Benefits/Vertical";
import BenefitCard from "./Benefits/BenefitCard";

// import ImageContent from "./Components/ImageContent";
import Colloboration from "./Benefits/Colloboration";
import MyComponent from "./Benefits/Benefits";
import ShopImg from "./Benefits/Shop";
import Revenue from "./Benefits/Revenue";
import Benefits from "./Benefits/Benefits";
import "./Benefits/Benefits.css";
function Benefit() {
  return (
    <div className="benefit_inital">
      <Benefits />

      <BenefitCardMain />
      <Colloboration />
      <Revenue />
      <ShopImg />
      <Vertical />
    </div>

    // <Row>
    //   <Col lg={4} md={6} xs={12}>
    //     <BenefitCard />
    //   </Col>
    //   <Col lg={4} md={6} xs={12}>
    //     <BenefitCard />
    //   </Col>
    //   <Col lg={4} md={6} xs={12}>
    //     <BenefitCard />
    //   </Col>
    // </Row>
  );
}

export default Benefit;
