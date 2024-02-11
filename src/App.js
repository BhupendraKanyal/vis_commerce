import React from "react";
import { Row, Col } from "react-bootstrap";
import BenefitCard from "./Benefits/BenefitCard";
import Vertical from "./Benefits/Vertical";
// import ImageContent from "./Components/ImageContent";
import Colloboration from "./Benefits/Colloboration";
import MyComponent from "./Benefits/Benefits";
import ShopImg from "./Benefits/Shop";
import Revenue from "./Benefits/Revenue";
import Benefits from "./Benefits/Benefits";
function App() {
  return (
    <>
      
      <Colloboration />
      <Vertical />
      <ShopImg />
      <Revenue />
      <Benefits />
   <BenefitCard /> ---- working on currently 
    </>
  

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

export default App;
