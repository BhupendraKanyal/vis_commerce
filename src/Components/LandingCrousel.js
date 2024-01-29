
import React, { useState, useEffect } from 'react';
import { Carousel, Button,Container,Row,Col } from 'react-bootstrap';
import { crousel_meta } from './Helpers/crousel_meta/landing_meta.js';
const MyCarousel = React.forwardRef(({currentCrousel},ref)=>{
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState(crousel_meta);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 10000); 

    return () => clearInterval(intervalId);
  }, [index]); 

  const handleSelect = (selectedIndex) => {
    currentCrousel(selectedIndex)
    setIndex(selectedIndex);
  };

  const handleNext = () => {
    const newIndex = index === items.length - 1 ? 0 : index + 1;
    currentCrousel(newIndex)
    setIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = index === 0 ? items.length - 1 : index - 1;
    currentCrousel(newIndex)
    setIndex(newIndex);
  };
  React.useImperativeHandle(ref, () => ({
    handleNext,
    handlePrev
  }));

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}  controls={false} indicators={false}>
        {items.map((item) => (
          item
        ))}
      </Carousel>
    </div>
  );
})

export default MyCarousel;


export const ImgCarousel = ()=> {
    return (
      <Container>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <Row>
                  <Col md={4}>
                    <img
                      className="d-block w-100"
                      src="https://via.placeholder.com/300"
                      alt="First slide"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="d-block w-100"
                      src="https://via.placeholder.com/300"
                      alt="Second slide"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="d-block w-100"
                      src="https://via.placeholder.com/300"
                      alt="Third slide"
                    />
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col md={4}>
                    <img
                      className="d-block w-100"
                      src="https://via.placeholder.com/300"
                      alt="First slide"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="d-block w-100"
                      src="https://via.placeholder.com/300"
                      alt="Second slide"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="d-block w-100"
                      src="https://via.placeholder.com/300"
                      alt="Third slide"
                    />
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }

