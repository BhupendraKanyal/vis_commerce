import React, { useState,useRef } from 'react';
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
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
import furniture from './Helpers/furniture.png'
import { MdFiberManualRecord } from 'react-icons/md';

import lovesac from './Helpers/lovesac.jpeg'
import { FaStar } from 'react-icons/fa'
import Quardrant from './Helpers/Quardrant.svg'
import coloredfabric from './Helpers/coloredfabric.svg'
import { div_meta_data } from './Helpers/crousel_meta/landing_meta';
import MyCarousel,{ImgCarousel} from './LandingCrousel.js'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
const HomeComponent = () => {
    const [crouselIndex,setCrouselIndex] = useState(0)
    const childRef = useRef()
    const handleParentButtonClick =(e)=>{
        const nameVal = e.currentTarget.name
        if(nameVal == 'prevClick') {
            childRef.current.handleSelect(crouselIndex == 0 ? div_meta_data.length-1 : crouselIndex-1)
        }
        if(nameVal == 'nextClick') {
            childRef.current.handleSelect(crouselIndex == div_meta_data.length-1 ? 0 : crouselIndex+1)
        }
    }
    const divBackground = {
        backgroundImage: `url(${backImg})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        background: 'background: linear-gradient(180deg, rgba(18, 18, 18, 0.00) 0%, rgba(18, 18, 18, 0.00) 0.01%, #02030B 49.53%);'
    };
  
  const currentCrousel = (val)=>{
    setCrouselIndex(val)
  }
  
  const dynamicData = [{name:'Furniture',value:`Showcase your furniture Instore and online. On common smartphone, tablets and pc's. 
  Our solutions offer high material fedility. We leverage Nvidia, Adobe tecnologies. We conform to 3DCommerce asset guidelines. Showcase your furniture under diverse lighting conditions. for example under sunlight and night lighting. Help your costumers make the right choices using our Collaboration3D technology
  `,imgUrl:furniture},{name:'Lighting',value:'Illuminate Your Potential! With Viscommerce, your lighting products become stars with our 3D capabilities. Let your brilliance shine through, captivating customers and setting your brand apart in the world of luminous possibilities.',imgUrl:lightingDetail},]
  const handleClick = (e)=>{
    const nameVal = e.currentTarget.name
    let vals = dynamicData.find(val=>val.name == nameVal)
    setCatalogStateVal(vals)
  }
  const [catalogStateVal,setCatalogStateVal]  = useState(dynamicData[0])

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
                                <div className='Commerce3DDiv'><img className='Commerce3D2' src={Commerce3D} /></div>
                                <div className='watchVideoDiv'>
                                    <Button className='contactBt' variant="danger" >Contact Us</Button>
                                    <div className='playButtonDiv' >
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
                        <div className='ThreeDButtons'>
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

                <Row style={{ marginTop: '50px', marginBottom: '50px' }} >


                    <Col xs={12} md={6} className='aboutServicesCol'>
                        <div style={{overflow:'auto'}} className='aboutServices'>
                            <h3>Catalog3D</h3>
                            <div className="servicesButtonDiv servicesButtonDivF col-md-3" >
                                    <ButtonGroup>
                                    <Button onClick={(e)=>handleClick(e)} name='Furniture'><MdFiberManualRecord className='bulletIcon' />Sample Room</Button>
                                    <Button onClick={(e)=>handleClick(e)} name='Furniture'><MdFiberManualRecord className='bulletIcon' />Furniture</Button>
                                    <Button onClick={(e)=>handleClick(e)} name='Lighting'><MdFiberManualRecord className='bulletIcon' />Lighting</Button>
                                    <Button onClick={(e)=>handleClick(e)} name='Furniture'><MdFiberManualRecord className='bulletIcon' />Paints</Button>
                                    <Button onClick={(e)=>handleClick(e)} name='Furniture'><MdFiberManualRecord className='bulletIcon' />Tiles</Button>
                                    <Button onClick={(e)=>handleClick(e)} name='Furniture'><MdFiberManualRecord className='bulletIcon' />Flooring</Button>
                                    <Button onClick={(e)=>handleClick(e)} name='Furniture'><MdFiberManualRecord className='bulletIcon' />Door/Windows</Button>
                                    <Button  onClick={(e)=>handleClick(e)} name='Furniture'><MdFiberManualRecord className='bulletIcon' />Accesssories</Button>
                                </ButtonGroup>
                                </div>
                            <div className='row container'>
                                <div className="servicesButtonDiv servicesButtonDivS col-md-3" >
                                    <Button onClick={(e)=>handleClick(e)} name='Furniture'><MdFiberManualRecord className='bulletIcon' />Sample Room</Button>
                                    <Button onClick={(e)=>handleClick(e)} name='Furniture'><MdFiberManualRecord className='bulletIcon' />Furniture</Button>
                                    <Button onClick={(e)=>handleClick(e)} name='Lighting'><MdFiberManualRecord className='bulletIcon' />Lighting</Button>
                                    <Button onClick={(e)=>handleClick(e)} name='Furniture'><MdFiberManualRecord className='bulletIcon' />Paints</Button>
                                    <Button onClick={(e)=>handleClick(e)} name='Furniture'><MdFiberManualRecord className='bulletIcon' />Tiles</Button>
                                    <Button onClick={(e)=>handleClick(e)} name='Furniture'><MdFiberManualRecord className='bulletIcon' />Flooring</Button>
                                    <Button onClick={(e)=>handleClick(e)} name='Furniture'><MdFiberManualRecord className='bulletIcon' />Door/Windows</Button>
                                    <Button style={{marginBottom:'25px'}} onClick={(e)=>handleClick(e)} name='Furniture'><MdFiberManualRecord className='bulletIcon' />Accesssories</Button>
                                </div>
                                <div className='servicesDetailDiv col-md-7'>
                                    <h5 style={{ color: '#FF4233' }}>{catalogStateVal?.name}</h5>
                                    <p style={{ color: '#fff' }}>{catalogStateVal?.value}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}  className='catalog3DCol'>
                        <div  className='catalog3DColImgDiv'><img  src={catalogStateVal?.imgUrl} /></div>
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

                   <Col  xs={12} md={4} className='d-flex cols align-items-center'>
                        <div style={{background:'#F8493B',borderRadius:'20px'}}>
                        <div style={{padding:'30px 30px 20px 30px'}}>
                            <h3 style={{color:'#000'}}>Material<span style={{color:'#fff'}}>3D</span></h3>
                            <p>Your platform for captivating digital material realism</p>
                        </div>


                        <div style={{display: 'flex',justifyContent:'flex-end'}}>
                            <img src={coloredfabric} style={{width:'300px',padding:'10px'}}/>
                        </div>
                        </div>
                   </Col>

                </Row>

                <Row style={{marginBottom:'60px'}}>
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
                       <MyCarousel ref={childRef} currentCrousel={currentCrousel}/>
                    </Col>
                    <Col xs={12} md={4} className='sCrousel' >
                        <div className=''>
                        <div className='sCrouselDiv'>
                            {crouselIndex && crouselIndex==div_meta_data.length-1 ? div_meta_data[0] : div_meta_data[crouselIndex+1]}
                            </div>
                        <div className='crouselBtn'>
                        <Button name='prevClick' onClick={handleParentButtonClick}><BsArrowLeft /></Button>
                        <Button name='nextClick' onClick={handleParentButtonClick}><BsArrowRight /></Button>
                        </div>
                        </div>
                    </Col>
                </Row>


                    
                    <ImgCarousel />
                  
            </Container>
        </>
    );
};

export default HomeComponent;
