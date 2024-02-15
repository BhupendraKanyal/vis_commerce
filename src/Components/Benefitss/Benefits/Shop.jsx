import React from "react";
import { Container } from "react-bootstrap";
import ShopImage from "../BenefitAssets/Benefits/Shop-the-look.webp"; // Import the image

const ShopImg = () => {
  return (
    <Container className="my-5">
      <h1 className="text-red">Shop The Look</h1>
      <h4 className="text-white mb-3">
        Sell product in bulk with shop the look feature{" "}
      </h4>
      <img src={ShopImage} alt="Shop the Look" className="img-fluid" />
    </Container>
  );
};

export default ShopImg;
