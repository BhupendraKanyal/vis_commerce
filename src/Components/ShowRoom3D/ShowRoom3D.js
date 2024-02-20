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

import chandeliers from './assets/chandeliers.png';
import wallLamps from './assets/wallLamps.png';
import floorLamps from './assets/floorLamps.png';
import deskLamps from './assets/deskLamps.png';
import realistic from './assets/realistic.svg';
import realisticRef from './assets/realisticRef.svg';
import onOff from './assets/onOff.svg';
import lightColor from './assets/lightColor.svg';
import intensity from './assets/intensity.svg';
import lightControl from '../Helpers/Hero_Section_Lighting_.webm';
import collaboration3D from './assets/collaboration3D.webp';
import showCaseMore from './assets/showCaseMore.png';
import { Chairs, DifferentChairs, NativeDevices } from './Helpers';
import backImg from '../Helpers/backImg.webp'
import { Helpers } from '../Pricing/Helper';
import comp1 from './assets/comp1.webp';
import comp2 from './assets/comp2.webp';
import space3DF from './assets/space3DF.webp';
import space3DS from './assets/space3DS.webp';
import redArrow from './assets/redArrow.svg';
export const ShowRoom3D = () => {
    const divBackground = {
        backgroundImage: `url(${backImg})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        background: 'background: linear-gradient(180deg, rgba(18, 18, 18, 0.00) 0%, rgba(18, 18, 18, 0.00) 0.01%, #02030B 49.53%)'
    };
    return (
        
<>
<div style={divBackground}>
    <Container>
            <Row className='ShowroomRow'>
                <Col xs={12} md={6} className='ShowroomCol'>
                    <div className='ShowroomDiv'>
                        <h2 className=''>Showroom<span>3D</span></h2>
                        <p>Custom 3DCommerce solutions for Home & Office-décor companies</p>
                    </div>
                    <div className='tryOuts'>
                        <Button className='formBt' type="button">
                            Try Now
                        </Button>
                        <Button className='contactBt' type="button">
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
            </Container>
            </div>
            <Container>
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
                <Col xs={12} md={6} className='leatherCol'>
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
                    <DifferentChairs />
                </Col>
            </Row>

            <Row className='lightningrow'>
                <h4>Lighting<span>3D</span></h4>
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
                    <div className='lightCtrl'>
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
            <Row className='collaboration3DRow'>
                <h3>Collaboration<span>3D</span></h3>
                <Col md={5} xs={12}>
                    <img src={collaboration3D} />
                </Col>
                <Col md={1} xs={12}> </Col>
                <Col md={6} xs={12} className='collaboration3DCol'>
                    <p>Enable two or more users to experience 3DCommerce in real time</p>
                    <ul>
                        {/* <li>•	 Version Control</li> */}
                        <li>Version Control</li>
                        <li>Share style collaboration</li>
                        <li>Audio, Video and Chat integration</li>
                        <li>In context comments</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col md={6} xs={12} className='space3DCol'>
                    <div>
                        <img src={space3DF} />
                    </div>
                </Col>
                <Col md={6} xs={12}>
                    <div className='space3DColS'>
                        <img  src={space3DS} />
                    </div>
                </Col>
            </Row>
            <Row className='showCaseMoreRow'>
                <Col md={5} xs={12}>
                <h5 className='showCaseMore'>Showcase More<br/>
with Instore <br/>
<span>Catalog3D</span></h5>
</Col>
<Col md={1} xs={12}></Col>
<Col md={6} xs={12}>
    <div>
        <img src={showCaseMore} />
    </div>
</Col>
            </Row>
            <Row>
                <Col md={6} xs={12}>
                    <div>
                        <img src={comp1} />
                    </div>
                </Col>
                <Col md={6} xs={12}>
                    <div>
                        <img src={comp2} />
                    </div>
                </Col>
            </Row>
           
            <NativeDevices />
            
           
        </Container>
        </>

    )
}