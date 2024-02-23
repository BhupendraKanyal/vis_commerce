import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import increaseArrow from './assets/increaseArrow.svg';
import growRevenue from './assets/growRevenue.svg';
import newRevenue from './assets/newRevenue.svg';
import increaseProfit from './assets/increaseProfit.svg';
import sellBig from './assets/sellBig.svg';
import Commerce3D from '../Helpers/Commerce3D.svg';
import contactIcon from '../Helpers/contactIcon.svg';
import increaseIcon from './assets/increaseIcon.svg';
import BFirst from './assets/BFirst.svg';
import BSecond from './assets/BSecond.svg';
import BThird from './assets/BThird.svg';
import collab3D from './assets/collab3D.svg';
import monitor from './assets/Monitor.svg';
import dinning from './assets/dinning.webp';
import bookself from './assets/bookself.webp';
import Chair from './assets/Chair.webp';
import hdImg from './assets/hdImg.svg';
import Shoplook from './assets/Shop-the-look.webp';
import rocket from './assets/rocket.svg';


import './style.css'
export const Benefit = () => {
    return (
        <>
            <Container>
                <Row className='Commerce3DRowRev'>
                    <img className='Commerce3D' src={Commerce3D} />
                </Row>
                <Row>
                    <Col md={6} xs={12}>
                        <div className="benefitsImgPDiv">
                            <div className="benefitsImgDiv">
                                <img src={increaseArrow} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} xs={12}>
                        <div>
                            <div className="benefits">
                                <h4>
                                    Benefits
                                </h4>
                                <div className="benefitsPPFlex">
                                    <div className="benefitsPFlex">
                                        <div className="benefitsFlex">
                                            <img src={growRevenue} />
                                            <p>Grow<br /><span>Revenue</span></p>
                                        </div>
                                        <div className="benefitsFlex">
                                            <img src={newRevenue} />
                                            <p>New Revenue Stream<br /><span>Through HDRenders</span></p>
                                        </div>
                                    </div>
                                    <div className="benefitsPFlex">
                                        <div className="benefitsFlex">
                                            <img src={increaseProfit} />
                                            <p>Increase<br /><span>Profits</span></p>
                                        </div>
                                        <div className="benefitsFlex">
                                            <img src={sellBig} />
                                            <p>Sell Big Tickets<br /><span>Items Effectively</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Button className='contactBt' >Contact Us <img src={contactIcon} alt="Play Icon" /></Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="cardsRow">
                    <Col xs={12} md={1} className="hideCol hideBenefitCol"></Col>
                    <Col md={4} xs={12} className="showBenefitCol">
                        <div>
                            <div className="card cardDiv">
                                <div className="card-heading">
                                    <div className="card-heading-div">
                                        <h3>Increase</h3>
                                        <p>Sales</p>
                                    </div>
                                    <div className="increaseIconDiv">
                                        <img src={increaseIcon} />
                                    </div>
                                </div>
                                <div className="cardDivImg">
                                    <img src={BFirst} />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="showBenefitCol">
                        <div>
                            <div className="card cardDiv">
                                <div className="card-heading">
                                    <div className="card-heading-div">
                                        <h3>Increase</h3>
                                        <p>Order Value</p>
                                    </div>
                                    <div className="increaseIconDiv">
                                        <img src={increaseIcon} />
                                    </div>
                                </div>
                                <div className="cardDivImg">
                                    <img src={BSecond} />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="showBenefitCol">
                        <div>
                            <div className="card cardDiv">
                                <div className="card-heading">
                                    <div className="card-heading-div">
                                        <h3>Sell Faster</h3>
                                        <p>With 3DCollaboration</p>
                                    </div>
                                    <div className="increaseIconDiv">
                                        <img src={increaseIcon} />
                                    </div>
                                </div>
                                <div className="cardDivImg">
                                    <img src={BThird} />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={1} className="hideCol hideBenefitCol"></Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="befitCollabPDiv">
                            <div className="befitCollabDiv">
                                <h4>Collaboration<span>3D</span></h4>
                                <ul className="befitCollabUlDiv">
                                    <li>Deep Engagement with buyer & seller</li>
                                    <li>Showcase your product in real time</li>
                                    <li>3D Space with Audio and Video chat</li>
                                </ul>
                            </div>
                            <div className="befitCollabImgDiv">
                                <img src={collab3D} />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="monitorImgDiv">
                            <img src={monitor} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="benefitRevenueDiv">
                        <h4><span>New Revenue Stream</span></h4>
                        <p>with high quality HD Renders</p>
                    </div>
                    <Col xs={12} md={6}>
                        <div className="benefitRevenue">
                            <div className="dinningDiv">
                                <img src={dinning} />
                                <p className="benefitRevenuePara">
                                    <span>Your<br />Products<br /></span>
                                    <span>Add to Showroom3D <br />and created HD Rendered <br /></span>
                                    <span>Images & Videos</span>
                                </p>
                            </div>
                            <div className="dinningDiv">
                                <img src={bookself} />
                                <img src={Chair} />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src={hdImg} />
                            <h4 className="HDRendered">HDRendered Images/Video</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div>
                        <div className="shopTheLook">
                            <h4>Shop The Look</h4>
                            <p>Sell product in bulk with shop the look feature </p>
                        </div>

                        <div>
                            <img src={Shoplook} />
                        </div>
                    </div>
                </Row>
                <Row className="rocketRow">
                    <Col xs={12} md={6}>
                        <div className="rocketDiv">
                            <img src={rocket} />
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="rocketCol">
                        <div className="rocketPDiv">
                            <div className="rocketDiv">
                                <h4>Take your Brand to <br />
                                    <span>Next Level</span></h4>
                                <p>Thrilling Experiences for customers <br />
                                    industry leadership</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}