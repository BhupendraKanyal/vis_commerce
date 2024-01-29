import React, { useState,useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import LandingV from './Helpers/LandingV.mp4'
import Play from './Helpers/Play.svg'
import Showroom from './Helpers/Showroom.svg'
import Catalog from './Helpers/Catalog.svg'
import Material from './Helpers/Material.svg'
import Collaboration from './Helpers/Collaboration.svg'
import Lightning from './Helpers/Lightning.svg'
import Commerce3D from './Helpers/Commerce3D.svg'
import ShowCase from './Helpers/ShowCase.mp4'
import officeChair from './Helpers/officeChair.png'
import backImg from './Helpers/backImg.webp';
import plusIcon from './Helpers/plusIcon.svg';
import myRoom from './Helpers/myRoom.svg';
import Furniture from './Helpers/furniture.svg';
import Lighting from './Helpers/Lighting.svg';
import Paints from './Helpers/Paints.svg';
import doorWindows from './Helpers/doorWindows.svg';
import tilesCarpet from './Helpers/tilesCarpet.svg';
import LV from './Helpers/LV.webm';
import lightingDetail from './Helpers/lightingDetail.svg';
import Circlelogo from './Helpers/Circlelogo.svg';

import { MdFiberManualRecord } from 'react-icons/md';

import lovesac from './Helpers/lovesac.jpeg'
import { FaStar } from 'react-icons/fa'
import Quardrant from './Helpers/Quardrant.svg'

import { div_meta_data } from './Helpers/crousel_meta/landing_meta';
import MyCarousel,{ImgCarousel} from './LandingCrousel.js'
const HomeComponent = () => {
    const divBackground = {
        backgroundImage: `url(${backImg})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        background: 'background: linear-gradient(180deg, rgba(18, 18, 18, 0.00) 0%, rgba(18, 18, 18, 0.00) 0.01%, #02030B 49.53%);'
    };
  const [crouselIndex,setCrouselIndex] = useState(0)
  const currentCrousel = (val)=>{
    setCrouselIndex(val)
  }
  const childRefHandleNext = useRef(null);
  const childRefHandlePrev = useRef(null);
  const handleNext = ()=>{
    if (childRefHandleNext.current) {
        childRefHandleNext.current.handleNext();
      }
  }
  const handlePrev = ()=>{
    if (childRefHandlePrev.current) {
        childRefHandlePrev.current.handleNext();
      }
  }
    return (
        <>
            <div style={divBackground}>
                <Container>
                    <Row className='Commerce3DRow'>
                        <img className='Commerce3D' src={Commerce3D} />
                    </Row>
                    <Row>
                        <Col xs={12} md={7}>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '', height: '100%' }}>
                                <h2 className='headingF'>3DCommerce Solutions</h2>
                                <ul className='ulListF'>
                                    <li>Furniture, Lighting, Paints, Flooring, Sanitaryware sectors.</li>
                                    <li>Instore and Online.</li>
                                    <li>Web & Native Apps on Smartphones, Tablets, PC’s.</li>
                                    <li>3D, AI, Web, Crypto technologies.</li>
                                </ul>
                                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '30px', alignItems: 'center' }}>
                                    <Button variant="danger" style={{ borderRadius: '1.5rem', padding: '0.6rem 3rem' }}>Contact Us</Button>
                                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '15px', marginRight: '15px' }}>
                                        <Button className='playButton'>
                                            <img src={Play} alt="Play Icon" />
                                        </Button>
                                    </div>
                                    <p style={{ margin: '0 0 0 4px' }}>Watch Video</p>
                                </div>



                            </div>

                        </Col>
                        <Col xs={12} md={5}>
                            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px', padding: '' }}>
                                <video width="100%" className='LandingV' autoPlay muted loop style={{ objectFit: 'cover', clipPath: 'polygon(53% 3%, 95% 7%, 91% 80%, 42% 97%, 7% 77%, 4% 6%)' }}>
                                    <source src={LandingV} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className='ThreeDButtons' style={{ display: 'flex', flexDirection: 'row', padding: '20px' }}>
                            <Button variant='none' style={{ borderRadius: '1.5rem', marginRight: '10px', color: '#FFF' }}><img src={Showroom} /><p>Showroom<span>3D</span></p></Button>
                            <Button variant='none' style={{ borderRadius: '1.5rem', marginRight: '10px', color: '#FFF' }}><img src={Catalog} /><p>Catalog<span>3D</span></p></Button>
                            <Button variant='none' style={{ borderRadius: '1.5rem', marginRight: '10px', color: '#FFF' }}><img src={Collaboration} /><p>Collaboration<span>3D</span></p></Button>
                            <Button variant='none' style={{ borderRadius: '1.5rem', marginRight: '10px', color: '#FFF' }}><img src={Material} /><p>Material<span>3D</span></p></Button>
                            <Button variant='none' style={{ borderRadius: '1.5rem', marginRight: '10px', color: '#FFF' }}><img src={Lightning} /><p>Lightning<span>3D</span></p></Button>
                        </div>
                    </Row>
                </Container>
            </div>
            <Container>

                <Row style={{ marginTop: '50px' }}>
                    <Col xs={12} md={4} className='d-flex align-items-center'>
                        <div className='showCaseParentDiv'>
                            <div className='showCaseDiv' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '', height: '100%' }}>
                                <h4 className='heading'>Insights</h4>
                                <h2>Showcase & Sell</h2>
                            </div>
                            <Button>Try Now</Button>
                        </div>


                    </Col>
                    <Col xs={12} md={8}>
                        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px', padding: '' }}>
                            <video width="100%" autoPlay muted loop style={{ objectFit: 'cover' }}>
                                <source src={ShowCase} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </Col>
                </Row>

                <Row style={{}}>
                    <Col xs={12} md={8} className='d-flex align-items-center' style={{ borderRadius: '20px' }}>
                        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px', height: '100%' }}>
                            <video autoPlay muted loop style={{ objectFit: 'cover', width: '100%', height: '100%' }}>
                                <source src={LV} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </Col>

                    {/* <Col xs={12} md={4}>
                        <div className='officeChairParentDiv'>
                            <div className='officeChairDiv' style={{ flex: 1 }}>
                                <div>
                                    <h3>Catalog3D</h3>
                                    <Button className='d-flex justify-content-center align-items-center'><img className='officeChairBt' src={plusIcon} /><span>Your Products</span></Button>
                                </div>
                                <img src={officeChair} />
                            </div>
                            <div className='officeChairButtonsParentDiv'>
                                <Button className='officeChairButtons' style={{ marginTop: '0' }}><img src={myRoom} /><span>My Room</span></Button>
                                <Button className='officeChairButtons'><img src={Furniture} /><span>Furniture</span></Button>
                                <Button className='officeChairButtons'><img src={Lighting} /><span>Lighting</span></Button>
                                <Button className='officeChairButtons'><img src={Paints} /><span>Paints</span></Button>
                                <Button className='officeChairButtons'><img src={doorWindows} /><span>Door/Windows</span></Button>
                                <Button className='officeChairButtons'><img src={tilesCarpet} /><span>Tiles/Carpet</span></Button>
                            </div>
                        </div>
                    </Col> */}

                </Row>
                <Row style={{ marginTop: '50px', marginBottom: '50px' }} >


                    <Col xs={12} md={6} style={{ paddingRight: '0px' }}>
                        <div className='aboutServices'>
                            <h3>About Catalog</h3>
                            <div className='row container'>
                                <div className="servicesButtonDiv col-md-3" >
                                    <Button><MdFiberManualRecord className='bulletIcon' /><span>Sample Room</span></Button>
                                    <Button><MdFiberManualRecord className='bulletIcon' /><span>Furniture</span></Button>
                                    <Button><MdFiberManualRecord className='bulletIcon' /><span>Lighting</span></Button>
                                    <Button><MdFiberManualRecord className='bulletIcon' /><span>Paints</span></Button>
                                    <Button><MdFiberManualRecord className='bulletIcon' /><span>Tiles</span></Button>
                                    <Button><MdFiberManualRecord className='bulletIcon' /><span>Flooring</span></Button>
                                    <Button><MdFiberManualRecord className='bulletIcon' /><span>Door/Windows</span></Button>
                                    <Button><MdFiberManualRecord className='bulletIcon' /><span>Accesssories</span></Button>
                                </div>
                                <div className='servicesDetailDiv col-md-7'>
                                    <h5 style={{ color: '#FF4233' }}>Furniture</h5>
                                    <p style={{ color: '#fff' }}>Step into the Future of Furnishing! Elevate your brand with VisCommerce's immersive 3D models, showcasing your furniture in stunning realism. Transform the shopping experience and engage customers like never before.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} style={{ background: '#424242', textAlign: 'center' }}>
                        <div style={{borderTopLeftRadius:'20px',borderBottomLeftRadius:'20px'}}><img  src={lightingDetail} /></div>
                    </Col>
                </Row>
                <Row style={{marginBottom:'50px'}}>
                    <Col xs={12} md={3} className='d-flex align-items-center'>
                        <div className='industryInsight'>
                            <h3>
                                Testimonials
                            </h3>
                            <h4>
                                Industry Insights
                            </h4>
                        </div>
                    </Col>
                    <Col xs={12} md={5}>
                       <MyCarousel currentCrousel={currentCrousel}/>
                    </Col>
                    <Col xs={12} md={4} className='d-flex align-items-center'>
                        {crouselIndex && crouselIndex==div_meta_data.length-1 ? div_meta_data[0] : div_meta_data[crouselIndex+1]}
                    </Col>
                    {/* <button onClick={handleNext}>Call Child Function 1</button>
      <button onClick={handlePrev}>Call Child Function 2</button> */}
                </Row>


            

               
                <Row style={{marginBottom:'50px'}}>
                    <h4 style={{color:'#FF422E',fontWeight:'800',textAlign:'center'}}>HDRenders</h4>
                    <ImgCarousel />
                </Row>
            </Container>
        </>
    );
};

export default HomeComponent;
