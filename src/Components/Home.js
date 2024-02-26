import React, { useState } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import LandingV from "./Helpers/concept_office.webm";
import Play from "./Helpers/Play.svg";
import Showroom from "./Helpers/Showroom.svg";
import Catalog from "./Helpers/Catalog.svg";
import Material from "./Helpers/Material.svg";
import Collaboration from "./Helpers/Collaboration.svg";
import Lightning from "./Helpers/Lightning.svg";
import Commerce3D from "./Helpers/Commerce3D.svg";
import ShowCase from "./Helpers/Showcase_and_sell_Video_Loop.webm";
import backImg from "./Helpers/backImg.webp";
import LV from "./Helpers/Hero_Section_Lighting_.webm";
import lightingDetail from "./Helpers/lightingDetail.svg";
import furniture from "./Helpers/furniture.png";
import { MdFiberManualRecord } from "react-icons/md";

import coloredfabric from './Helpers/coloredfabric.svg';
import { ImgCarousel, MobImgCarousel } from './LandingCrousel.js'
import contactIcon from './Helpers/contactIcon.svg'
import YouTubeModal, { Customized3D } from './Helpers/YouTubeModal/YouTubeModal';
import { ListModal } from "./Helpers/ListModal/ListModal";
import CommonNormal from './Helpers/CommonNormal.svg';
import CommonHover from './Helpers/Commonhover.svg';


import FurnitureNormal from './Helpers/FurnitureNormal.svg';
import FurnitureHover from './Helpers/Furniturehover.svg';


import LightingNormal from './Helpers/LightingNormal.svg';
import LightingHover from './Helpers/Lightinghover.svg';

import PaintsNormal from './Helpers/PaintsNormal.svg';
import PaintsHover from './Helpers/Paintshover.svg';

import FlooringNormal from './Helpers/FlooringNormal.svg';
import FlooringHover from './Helpers/Flooringhover.svg';


import SanitaryNormal from './Helpers/sanitarynormal.svg';
import SanitaryHover from './Helpers/sanitaryhover.svg';

import CatalogFurniture from './Helpers/CatalogFurniture.webp';
import Cataloglighting from './Helpers/Cataloglighting.webp';
import CatalogCommon from './Helpers/CatalogCommon.webp';
import CatalogPaints from './Helpers/CatalogPaints.webp';
import CatalogFlooring from './Helpers/CatalogFlooring.webp';
import CatalogSanitaryware from './Helpers/CatalogSanitaryware.webp';

import Collaborationvideo from './Helpers/CollaborationVideo.webp';
import Customizevideo from './Helpers/MaterialVideo.webp';
import Lightingvideo from './Helpers/LightingVideo.webp';
import ButtonImg from './Helpers/Button.svg';

const HomeComponent = () => {
  const divBackground = {
    backgroundImage: `url(${backImg})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    background:
      "background: linear-gradient(180deg, rgba(18, 18, 18, 0.00) 0%, rgba(18, 18, 18, 0.00) 0.01%, #02030B 49.53%)",
  };
  const [currVlinkName, setCurrVlinkName] = useState('customize')
  const handleIframeVid = (e)=>{
    let currVlinkName = e.currentTarget.name
    setCurrVlinkName(currVlinkName)
  }
  const dynamicData = [
    {
      name: "Common",
      imgUrl: CatalogCommon
    },
    {
      name: "Furniture",
      imgUrl: CatalogFurniture
    },
    { 
      name: 'Lighting',
      imgUrl: Cataloglighting 
    },
    { 
      name: 'Paints',
      imgUrl: CatalogPaints 
    },
    { 
      name: 'Flooring',
      imgUrl: CatalogFlooring 
    },
    { 
      name: 'Sanitaryware',
      imgUrl: CatalogSanitaryware 
    }]
  const handleClick = (e) => {
    const nameVal = e.currentTarget.name
    let vals = dynamicData.find(val => val.name == nameVal)
    setCatalogStateVal(vals)
  }
  const [catalogStateVal, setCatalogStateVal] = useState(dynamicData[0])
  const [showModal, setShowModal] = useState(false)
  const playVideo = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <div style={divBackground}>
        <Container>
          <Row className='Commerce3DRow'>
            <img className='Commerce3D' src={Commerce3D} />
          </Row>
          <Row>
            <YouTubeModal showModal={showModal} playvideo={playVideo} />
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
                  <Button className='contactBt' >Contact Us <img src={contactIcon} alt="Play Icon" /></Button>
                  <div className='playButtonDiv' >
                    <Button className='playButton' onClick={playVideo}>
                      <img src={Play} alt="Play Icon" />
                    </Button>
                  </div>
                  <p style={{ margin: '0 0 0 4px' }}>Watch Video</p>

                </div>



              </div>

            </Col>
            <Col xs={12} md={5}>
              <div className='LandingVDiv'>
                <video width="100%" className='LandingV' autoPlay muted loop >
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
        <Row className="topPad" style={{display:"none"}}>
          <Col xs={12} md={4} className="d-flex align-items-center cols">
            <div className="showCaseParentDiv">
              <div
                className="showCaseDiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding: "",
                  height: "100%",
                }}
              >
                <h4 className="heading">Insights</h4>
                <h2>Showcase & Sell</h2>
              </div>
              <Button>Try Now</Button>
            </div>
          </Col>
          <Col xs={12} md={8} className="cols">
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "15px",
                padding: "",
              }}
            >
              <video
                width="100%"
                autoPlay
                muted
                loop
                style={{ objectFit: "cover" }}
              >
                <source src={ShowCase} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>
        </Row>

        <Row className="topBottomPad rowPadd">
          <Col xs={12} md={6} className="aboutServicesCol">
            <div style={{ overflow: "auto" }} className="aboutServices">
              <h3>Catalog3D</h3>
              <div className="servicesButtonDiv servicesButtonDivF col-md-3">
                <ButtonGroup>
                <Button onClick={(e) => handleClick(e)} name="Common">
                    <img className="normalIcon" src={CommonNormal} />
                    <img className="hoverIcon" src={CommonHover} />
                    Common
                  </Button>
                  <Button onClick={(e) => handleClick(e)} name="Furniture">
                  <img className="normalIcon" src={FurnitureNormal} />
                    <img className="hoverIcon" src={FurnitureHover} />
                    Furniture
                  </Button>
                  <Button onClick={(e) => handleClick(e)} name="Lighting">
                  <img className="normalIcon" src={LightingNormal} />
                    <img className="hoverIcon" src={LightingHover} />
                    Lighting
                  </Button>
                  <Button onClick={(e) => handleClick(e)} name="Paints">
                  <img className="normalIcon" src={PaintsNormal} />
                    <img className="hoverIcon" src={PaintsHover} />
                    Paints
                  </Button>
                  <Button onClick={(e) => handleClick(e)} name="Flooring">
                  <img className="normalIcon" src={FlooringNormal} />
                    <img className="hoverIcon" src={FlooringHover} />
                    Flooring
                  </Button>
                  <Button onClick={(e) => handleClick(e)} name="Sanitaryware">
                  <img className="normalIcon" src={SanitaryNormal} />
                    <img className="hoverIcon" src={SanitaryHover} />
                    Sanitaryware
                  </Button>
                </ButtonGroup>
              </div>
              <div className="row container">
                <div className="servicesButtonDiv servicesButtonDivS col-md-3">
                  <Button onClick={(e) => handleClick(e)} name="Common">
                    <img className="normalIcon" src={CommonNormal} />
                    <img className="hoverIcon" src={CommonHover} />
                    Common
                  </Button>
                  <Button onClick={(e) => handleClick(e)} name="Furniture">
                  <img className="normalIcon" src={FurnitureNormal} />
                    <img className="hoverIcon" src={FurnitureHover} />
                    Furniture
                  </Button>
                  <Button onClick={(e) => handleClick(e)} name="Lighting">
                  <img className="normalIcon" src={LightingNormal} />
                    <img className="hoverIcon" src={LightingHover} />
                    Lighting
                  </Button>
                  <Button onClick={(e) => handleClick(e)} name="Paints">
                  <img className="normalIcon" src={PaintsNormal} />
                    <img className="hoverIcon" src={PaintsHover} />
                    Paints
                  </Button>
                  <Button onClick={(e) => handleClick(e)} name="Flooring">
                  <img className="normalIcon" src={FlooringNormal} />
                    <img className="hoverIcon" src={FlooringHover} />
                    Flooring
                  </Button>
                  <Button onClick={(e) => handleClick(e)} name="Sanitaryware">
                  <img className="normalIcon" src={SanitaryNormal} />
                    <img className="hoverIcon" src={SanitaryHover} />
                    Sanitaryware
                  </Button>
                  
                </div>
                <div className="servicesDetailDiv col-md-7">
                  <h5 style={{ color: "#18181b" }}>{catalogStateVal?.name}</h5>
                  <ListModal catalogStateVal={catalogStateVal.name || dynamicData[0].name}/>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="catalog3DCol">
            <div className="catalog3DColImgDiv">
              <img src={catalogStateVal?.imgUrl} alt="catalog3DCol" />
            </div>
          </Col>
        </Row>

        <Row className="topBottomPad rowPadd" style={{display:"none"}}>
          <Col
            xs={12}
            md={7}
            className="d-flex align-items-center cols"
            style={{ borderRadius: "20px" }}
          >
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "15px",
                height: "100%",
              }}
            >
              <video
                autoPlay
                muted
                loop
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              >
                <source src={LV} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>

          <Col xs={12} md={5} className="cols material3dCol cols">
            <div className="material3dDiv">
              <div className="material3dImgDiv">
                <img src={coloredfabric} alt="coloredfabric" />
              </div>
              <div className="material3dDivCh">
                <h3>
                  Material<span>3D</span>
                </h3>
                <p>
                  Your platform for captivating digital material <br />
                  realism
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="rowPadd">
        <Col md={2} xs={12} className="hideCol"></Col>
        <Col md={8} xs={12} className="Customized3DCol">
      <Customized3D currVlinkName={currVlinkName}/>
    </Col>
    <Col md={2} xs={12} className="hideCol"></Col>
    </Row>
    <Row className="rowPadd">
    <Col md={2} xs={12} className="hideCol"></Col>
    <Col md={8} xs={12} className="iframePDivCol">
              <div className="iframePDiv">
                <div className="iframeCtrlDiv">
                  <div className="videoCustDiv">
                <img src={Customizevideo} />
                </div>
                <div className="iframeBtDiv">
                  <h4>Customize<span>3D</span></h4>
                  <div className="iframePlayDiv">
                    <img name="customize" onClick={handleIframeVid} className="iframePlayImg" src={ButtonImg} />
                    <p>Play</p>
                    </div>
                </div>
                </div>

                <div className="iframeCtrlDiv">
                  <div className="videoCustDiv">
                <img src={Collaborationvideo} />
                </div>
                <div className="iframeBtDiv">
                  <h4>Collaboration<span>3D</span></h4>
                  <div className="iframePlayDiv">
                    <img name="collaboration" onClick={handleIframeVid} className="iframePlayImg" src={ButtonImg} />
                    <p>Play</p>
                    </div>
                </div>
                </div>


                <div className="iframeCtrlDiv">
                  <div className="videoCustDiv">
                <img src={Lightingvideo} />
                </div>
                <div className="iframeBtDiv">
                  <h4>Lighting<span>3D</span></h4>
                  <div className="iframePlayDiv">
                    <img name="lighting"  onClick={handleIframeVid} className="iframePlayImg" src={ButtonImg} />
                    <p>Play</p>
                    </div>
                </div>
                </div>



                </div>
    </Col>
    <Col md={2} xs={12} className="hideCol"></Col>
    </Row>

        <Row className="deskCrousel topBottomPadMore rowPadd">
          <ImgCarousel />
        </Row>
        <Row className="MobCrousel topBottomPadMore rowPadd">
          <MobImgCarousel />
        </Row>
      </Container>
    </>
  );  
};

export default HomeComponent;
