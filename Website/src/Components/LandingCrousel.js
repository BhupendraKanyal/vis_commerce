
import React from 'react';
import { Carousel,Row,Col, } from 'react-bootstrap';
import IKEAtestimonial from './Helpers/IKEAtestimonial.png';
import LovesacTestimonial from './Helpers/LovesacTestimonial.png';
import MacysTestimonial from './Helpers/MacysTestimonial.png';
import ShopifyTestimonial from './Helpers/ShopifyTestimonial.png';
import WayfairTestimonial from './Helpers/WayfairTestimonial.png';

export const ImgCarousel = ()=> {
    return (
  <>
   <Carousel>
      <Carousel.Item>
        <Row>
          <Col sm={4} className='imgColsCr'>
            <img
              className="d-block w-100"
              src={WayfairTestimonial}
              alt="First slide"
            />
          </Col>
          <Col sm={4} className='imgColsCr'>
            <img
              className="d-block w-100"
              src={LovesacTestimonial}
              alt="Second slide"
            />
          </Col>
          <Col sm={4} className='imgColsCr'>
            <img
              className="d-block w-100"
              src={IKEAtestimonial}
              alt="Third slide"
            />
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col sm={4} className='imgColsCr'>
            <img
              className="d-block w-100"
              src={ShopifyTestimonial}
              alt="First slide"
            />
          </Col>
          <Col sm={4} className='imgColsCr'>
            <img
              className="d-block w-100"
              src={MacysTestimonial}
              alt="Second slide"
            />
          </Col>
          <Col sm={4} className='imgColsCr'>
            <img
              className="d-block w-100"
              src={IKEAtestimonial}
              alt="Third slide"
            />
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  </>
    )
  }

  export const MobImgCarousel = ()=> {
    return (
  <>
   <Carousel>
      <Carousel.Item>
        <Row>
          <Col sm={12} className='imgColsCr'>
            <img
              className="d-block w-100"
              src={WayfairTestimonial}
              alt="First slide"
            />
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col sm={12} className='imgColsCr'>
            <img
              className="d-block w-100"
              src={LovesacTestimonial}
              alt="Second slide"
            />
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col sm={12} className='imgColsCr'>
            <img
              className="d-block w-100"
              src={IKEAtestimonial}
              alt="Third slide"
            />
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
       <Row>
       <Col sm={12} className='imgColsCr'>
            <img
              className="d-block w-100"
              src={ShopifyTestimonial}
              alt="First slide"
            />
          </Col>
       </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
        <Col sm={12} className='imgColsCr'>
            <img
              className="d-block w-100"
              src={MacysTestimonial}
              alt="Second slide"
            />
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col sm={12} className='imgColsCr'>
            <img
              className="d-block w-100"
              src={IKEAtestimonial}
              alt="Third slide"
            />
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  </>
    )
  }

