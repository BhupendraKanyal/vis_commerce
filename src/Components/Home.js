import React, { useState } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
// import LandingV from "./Helpers/concept_office.webm";
import LandingV from "./Helpers/Herosectionfinalvideo.webm";
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
import YouTubeModal, { Customized3D, FormModal } from './Helpers/YouTubeModal/YouTubeModal';
import { ListModal } from "./Helpers/ListModal/ListModal";


import Collaborationvideo from './Helpers/Collaboration.webp';
import Customizevideo from './Helpers/Material.webp';
import Lightingvideo from './Helpers/Lighting.webp';
import ButtonImg from './Helpers/Button.svg';

import  CatalogBackground from './Helpers/CatalogBackground.webp';

const HomeComponent = () => {
  const divBackground = {
    backgroundImage: `url(${backImg})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    background:
      "background: linear-gradient(180deg, rgba(18, 18, 18, 0.00) 0%, rgba(18, 18, 18, 0.00) 0.01%, #02030B 49.53%)",
  };
  const CatalogBack = {
    backgroundImage: `url(${CatalogBackground})`,
    borderRadius:'40px',
  }
  const [currVlinkName, setCurrVlinkName] = useState('customize')
  const handleIframeVid = (e)=>{
    let currVlinkName = e.currentTarget.name
    setCurrVlinkName(currVlinkName)
  }
  
  const [showModal, setShowModal] = useState(false)
  const [showFormModal, setShowFormModal] = useState(false)
  const playVideo = () => {
    setShowModal(!showModal)
  }
  const handleContact = () => {
    setShowFormModal(!showFormModal)
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
            <FormModal showFormModal={showFormModal} handleContact={handleContact} />
          </Row>
          <Row>
            <Col xs={12} md={7}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '', height: '100%' }}>
                <h2 className='headingF'>3DCommerce Solutions</h2>
                <ul className='ulListF'>
                  <li>Enhance Online and Instore Commerce</li>
                  <li>Custom Solutions for Home and Office Decor Companies</li>
                  <li>Web & Native Apps on Smartphones, Tablets, PC’s.</li>
                  <li>3D, AI, Web, Crypto technologies.</li>
                </ul>
                <div className='Commerce3DDiv'><img className='Commerce3D2' src={Commerce3D} /></div>
                <div className='watchVideoDiv'>
                  <Button className='contactBt' onClick={handleContact}>Contact Us <img src={contactIcon} alt="Play Icon" /></Button>
                  <div className='playButtonDiv' >
                    <Button className='playButton' onClick={playVideo}>
                      <img src={Play} alt="Play Icon" />
                    </Button>
                  </div>
                  <p style={{ margin: '0 0 0 4px' }}>Video</p>

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
              <Button variant='none' style={{ borderRadius: '1.5rem', marginRight: '10px', color: '#FFF' }}><img src={Showroom} /><p>Showroom3D</p></Button>
              <Button variant='none' style={{ borderRadius: '1.5rem', marginRight: '10px', color: '#FFF' }}><img src={Catalog} /><p>Catalog3D</p></Button>
              <Button variant='none' style={{ borderRadius: '1.5rem', marginRight: '10px', color: '#FFF' }}><img src={Material} /><p>Customize3D</p></Button>
              <Button variant='none' style={{ borderRadius: '1.5rem', marginRight: '10px', color: '#FFF' }}><img src={Collaboration} /><p>Collaboration3D</p></Button>
              <Button variant='none' style={{ borderRadius: '1.5rem', marginRight: '10px', color: '#FFF' }}><img src={Lightning} /><p>Lightning3D</p></Button>
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
</Container>


        
        <Container>
        <div style={CatalogBack} className="topBottomPad rowPadd catalogContainer">
          <ListModal />
          </div>
          </Container>
        
        <Container>
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
                <Button name="customize" onClick={handleIframeVid}  className="iframeCtrlDiv">
                  {/* <div className="videoCustDiv">
                <img src={Customizevideo} />
                </div> */}
                <div className="iframeBtDiv">
                  
                  <img  className="iframePlayImg" src={ButtonImg} />
                  <h4>Customize<span>3D</span></h4>
                  {/* <div className="iframePlayDiv">
                    <img name="customize" onClick={handleIframeVid} className="iframePlayImg" src={ButtonImg} />
                    <p>Play</p>
                    </div> */}
                </div>
                </Button>

                <Button name="collaboration" onClick={handleIframeVid}  className="iframeCtrlDiv">
                  {/* <div className="videoCustDiv">
                <img src={Collaborationvideo} />
                </div> */}
                <div className="iframeBtDiv">
                  
                  <img  className="iframePlayImg" src={ButtonImg} />
                  <h4>Collaboration<span>3D</span></h4>
                  {/* <div className="iframePlayDiv">
                    <img name="collaboration" onClick={handleIframeVid} className="iframePlayImg" src={ButtonImg} />
                    <p>Play</p>
                    </div> */}
                </div>
                </Button>


                <Button name="lighting"  onClick={handleIframeVid} className="iframeCtrlDiv">
                  {/* <div className="videoCustDiv">
                <img src={Lightingvideo} />
                </div> */}
                <div className="iframeBtDiv">
                  
                  <img  className="iframePlayImg" src={ButtonImg} />
                  <h4>Lighting<span>3D</span></h4>
                  {/* <div className="iframePlayDiv">
                    <img name="lighting"  onClick={handleIframeVid} className="iframePlayImg" src={ButtonImg} />
                    <p>Play</p>
                    </div> */}
                </div>
                </Button>



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
