import React from 'react';
import './style.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import showRoom from './assets/showRoom.png';
import accurate from './assets/accurate.svg';
import threesixty from './assets/threesixty.svg';
import company from './assets/company.svg';
import dynamics from './assets/dynamics.svg';
import lists from './assets/lists.svg';
import altf from './assets/altf.svg';
import BlackOfficeChair from './assets/BlackOfficeChair.png';
import chandeliers from './assets/chandeliers.png';
import wallLamps from './assets/wallLamps.png';
import floorLamps from './assets/floorLamps.png';
import deskLamps from './assets/deskLamps.png';
import realistic from './assets/realistic.svg';
import realisticRef from './assets/realisticRef.svg';
import onOff from './assets/onOff.svg';
import lightColor from './assets/lightColor.svg';
import intensity from './assets/intensity.svg';
import lightControl from './assets/lightControl.mp4';
import { Chairs } from './Helpers';
export const ShowRoom3D = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6} className='ShowroomCol'>
                    <div className=''>
                        <h2 className=''>Showroom<span>3D</span></h2>
                        <p>Custom 3DCommerce solutions for Home & Office-décor companies</p>
                    </div>
                    <div>
                        <Button className='formBt' type="button">
                            Try Now
                        </Button>
                        <Button className='formBt' type="button">
                            Contact Us
                        </Button>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div>
                        <img src={showRoom} />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={6}>
                    <Chairs />
                </Col>
                <Col xs={12} md={6}>
                    <div className='flexDivP'>
                    <h4>Catalog<span>3D</span></h4>
                    <h3>Create your next gen product catalog in 3D.</h3>
                    <p className='flexDivPTag'>Effortlessly add your products to interactive 3D models, showcasing them in unparalleled detail. Boost click-through rates and conversions with this captivating format, proven to increase purchase confidence and satisfaction.</p>
                    <div className='flexDivs'>
                    <div className='svgImgDivs'>
                        <img src={accurate} />
                        <p>Accurate<br/>
                           <span>Shape And Size</span>
                        </p>
                    </div>
                    <div className='svgImgDivs'>
                        <img src={threesixty} />
                        <p>360°<br/>
                           <span>Spins of the Product</span>
                        </p>
                    </div>
                    </div>
                    <div className='flexDivs'>
                    <div className='svgImgDivs'>
                        <img src={company} />
                        <p>Company<br/>
                           <span>Specific Taxonomy.</span>
                        </p>
                    </div>
                    <div className='svgImgDivs'>
                        <img src={threesixty} />
                        <p>High Fidelity<br/>
                           <span>Material</span>
                        </p>
                    </div>
                    </div>
                    
                    <div className='flexDivs'>
                    <div className='svgImgDivs'>
                        <img src={dynamics} />
                        <p>Dynamics<br/>
                           <span>Showcase moving parts</span>
                        </p>
                    </div>
                    </div>
                    </div>
                </Col>
            </Row>

            <Row style={{ marginBottom: '100px',marginTop:'50px' }}>
                <Col xs={12} md={6}>
                    <div className='customizeDiv'>
                        <h4>Customize<span>3D</span></h4>
                        <div className='listsDiv'>
                            <img src={lists} />
                            <p>Represent real-world materials such as leather digitally with high-fidelity</p>
                        </div>
                        <div className='listsDiv'>
                            <img src={lists} />
                            <p>Enable customization of any product with any material</p>
                        </div>
                        <div className='technologiesDiv'>
                          <p><span>Web App technology</span></p>
                          <div className='technologies'>
                            <img src={altf} />
                            <img src={altf} />
                            <img src={altf} />
                            <img src={altf} />
                          </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className='materialsPPDiv'>
                    <div className='materialsPDiv'>
                        <div className='materialsCDiv'>                          
                            <div className='materialsBtDiv'>
                            <h3>Select<br/>Material</h3>
                            <Button>Black Leather</Button>
                            <Button>Black Leather</Button>
                            <Button>Black Leather</Button>
                            </div>
                        </div>
                    </div>
                    <div className='chairsImgDivs'>
                      
                            <img src={BlackOfficeChair} />
                        
                    </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <h3>Lighting<span>3D</span></h3>
                <Col xs={12} md={3}>
                    <div>
                        <img src={chandeliers} />
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <div>
                        <img src={wallLamps} />
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <div>
                        <img src={floorLamps} />
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <div>
                        <img src={deskLamps} />
                    </div>
                </Col>
            </Row>

            <Row style={{ marginBottom: '100px',marginTop:'50px' }}>
                <Col xs={12} md={6}>
                    <div>
                        <h4><span>Light control in 3D space</span></h4>
                        <p>Add, delete, move, rotate lights in room.</p>
                    </div>
                    <div className='flexDivs'>
                    <div className='flexDivs flexDivss'>
                        <img src={realistic} />
                        <p>Realistic <br/> Shadows</p>
                    </div>
                    <div className='flexDivs flexDivss'>
                        <img src={realisticRef} />
                        <p>Realistic <br/> Reflections</p>
                    </div>
                    </div>
                    <div>
                    <div className='flexDivs'>
                        <img className='flexDivsImg' src={onOff} />
                        <p>On\Off</p>
                    </div>
                    <div className='flexDivs'>
                        <img className='flexDivsImg' src={lightColor} />
                        <p>Light Color</p>
                    </div>
                    <div className='flexDivs'>
                        <img className='flexDivsImg' src={intensity} />
                        <p>Intensity Control</p>
                    </div>
                    </div>
                </Col>
                <Col>
                <div className='vDiv'>
                <video width="100%" autoPlay muted loop style={{ objectFit: 'cover' }}>
                                <source src={lightControl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                </div>
                </Col>
            </Row>

        </Container>
    )
}