import React from 'react';
import { Container } from 'react-bootstrap';
import ShopImage from "../BenefitAssets/Benefits/Shop-the-look.webp"; // Import the image

const ShopImg = () => {
  return (
    <Container className='my-5'>
      <img src={ShopImage} alt="Shop the Look" className="img-fluid" />
    </Container>
  );
}

export default ShopImg;
