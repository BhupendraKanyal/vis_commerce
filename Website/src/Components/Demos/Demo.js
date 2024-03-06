import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import material3D from './assets/material3D.png';
import showRoom3D from './assets/showRoom3D.png';
import collaboration3D from './assets/collaboration3D.webp';
import buttonImg from './assets/watch-icon.svg';
import './style.css';
import { IoIosArrowDown } from "react-icons/io";
import { SlScreenDesktop } from "react-icons/sl";
import { FaTabletAlt } from "react-icons/fa";
import { FcAndroidOs } from "react-icons/fc";

export const Demos = () => {
    const demoContent = [{ name: 'Showroom', imgUrl: showRoom3D, content: '(Ergonomic Office Room)' },{name:'Material',imgUrl:material3D,content:'(Your platform for captivating digital material realism)'},{name:'Collaboration',imgUrl:collaboration3D,content:'(Proof Of Concept) '}]
    const [currentBt, setCurrentBt] = useState({})
   
    const handleClick = (e) => {
        const nameVal = e.currentTarget.name
        if (currentBt && nameVal == currentBt?.name) setCurrentBt({ name: nameVal, show: !currentBt?.show })
        else {
            setCurrentBt({ name: nameVal, show: true })
        }
    }
    return (
        <>
            <Container>
                {demoContent.map((val, idx) => {
                    return (<Row key={idx} style={{ marginTop: '80px', marginBottom: '100px' }} className="DemosRow">
                        <Col xs={12} md={6} className="demosFImgCol">
                            <div className="demosFImgDiv">
                                <img src={val?.imgUrl} />
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="demosDescDiv">
                                <div className="demosHeadings">
                                    <h5>{val?.name}<span>3D</span></h5>
                                    <p>{val?.content}</p>
                                </div>
                                <div className="demoButtonsDiv">
                                    <div className="selectButtonDiv">
                                        <Button name={`${val?.name}3D`} onClick={handleClick}>Select Screen <IoIosArrowDown /></Button>
                                    </div>
                                    {
                                        //    currentBt && currentBt?.find(vals=>vals?.name == `${val?.name}3D`)?.show 
                                        currentBt && currentBt?.name == `${val?.name}3D` && currentBt?.show && 
                                        <div className="demoIconsDiv">
                                            <div className="demoIcons">
                                                <a><SlScreenDesktop className="screenIcons"/></a>
                                                <a><FaTabletAlt  className="screenIcons"/></a>
                                                <a><FcAndroidOs  className="screenIcons" /></a>
                                            </div>
                                        </div>
                                    }
                                    <div className="tryWatchDiv">
                                        <div className="tryWatch">
                                            <Button className="formBt btn btn-primary">Try Now</Button>
                                            <img src={buttonImg} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>)
                })
                }
            </Container>
        </>
    )
}