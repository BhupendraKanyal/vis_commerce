import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import BenefitCard from "./BenefitCard";
import B1 from "../BenefitAssets/B1 .svg";
import B2 from "../BenefitAssets/B2 .svg";
import B3 from "../BenefitAssets/B3 .svg";

import Increase from "../BenefitAssets/increaseArr.svg";
import Decrease from "../BenefitAssets/Decrease.svg";

const BenefitCardMain = () => {
  var data = [
    {
      id: 1,
      title: "Reduce",
      subtitle: "Order Return",
      image: B1,
      state: Decrease,
    },
    {
      id: 2,
      title: "Increase",
      subtitle: "Order Value",
      image: B2,
      state: Increase,
    },
    {
      id: 3,
      title: "Sell Faster",
      subtitle: "With 3DCollaboration",
      image: B3,
      state: Decrease,
    },
  ];

  return (
    <Container>
      <Row className="justify-content-start">
        {data.map((data, index) => (
          <Col xs={12} sm={6} md={4} lg={4} xl={4} className="mb-3" key={index}>
            <BenefitCard
              title={data.title}
              subtitle={data.subtitle}
              image={data.image}
              state={data.state}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BenefitCardMain;
