
import React, { useState, useEffect } from 'react';
import { Carousel, Button,Container,Row,Col } from 'react-bootstrap';
import { crousel_meta } from './Helpers/crousel_meta/landing_meta.js';
import hdRendererRight from './Helpers/hdRendererRight.png'
import hdRenderercenter from './Helpers/hdRenderercenter.png'
import hdRendererLeft from './Helpers/hdRendererLeft.png'
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
    <Row style={{marginTop:'20px',marginBottom:'100px'}}>
      <h4 style={{color:'#FF422E',fontWeight:'800',textAlign:'center',fontSize:'40px',marginBottom:'40px'}}>HDRenders</h4>
    <Col xs={12} md={4}>
      <img src={hdRendererLeft} style={{width:'auto',maxWidth:'100%'}} />
    </Col>
    <Col xs={12} md={4}>
      <img className='scaled-image' style={{width:'auto',maxWidth:'100%'}} src={hdRenderercenter} />
    </Col>
    <Col xs={12} md={4}>
      <img src={hdRendererLeft}  style={{width:'auto',maxWidth:'100%'}} />
    </Col>
  </Row>
    )
  }

