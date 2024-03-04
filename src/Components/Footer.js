import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Linkendin from './Helpers/Linkendin.svg';
import Facebook from './Helpers/Facebook.svg';
import Twitter from './Helpers/Twitter.svg';
import Insta from './Helpers/Insta.svg';
import phone from './Helpers/phone.svg';
import mail from './Helpers/mail.svg';
import sphere from './Helpers/sphere.svg';
export const Footer = () => {
    const infoValues = [{imageUrl:phone,value:'0123654789'},{imageUrl:mail,value:'info@viscommerce.com'},{imageUrl:sphere,value:'www.viscommerce.com',isLink:true}]
    return (
        <div style={{ background: '#282828', paddingTop: '50px', paddingBottom: '50px' }}>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="footerFDiv">
                            <h2>
                                More <span style={{ color: '#FF422E' }}>Links</span>
                            </h2>
                        </div>
                    </Col>
                    <Col xs={12} md={2}></Col>
                    <Col xs={12} md={4} className="d-flex justify-content-end align-items-end">
                        <div className="socialLinks">
                            <img src={Linkendin} />
                            <img src={Facebook} />
                            <img src={Twitter} />
                            <img src={Insta} />
                        </div>
                    </Col>
                </Row>
                <Row className="footerUrls">
                    <Col xs={12} md={3}>
                        <div>
                            <h5>Company</h5>
                            <ul className='footerUrlsUl list-unstyled'>
                                <li><a>Team</a></li>
                                <li><a>Patent pending with USTPO, IPO</a></li>
                            </ul>
                        </div>

                    </Col>
                    <Col xs={12} md={3}>
                        <div>
                            <h5>Resources</h5>
                            <ul className='footerUrlsUl list-unstyled'>
                                <li><a>Supports</a></li>
                                <li><a>Terms and Privacy</a></li>
                                <li><a>Cookie settings</a></li>
                            </ul>
                        </div>

                    </Col>

                    {/* <Col xs={12} md={1}>
                    </Col> */}
                    {/* <Col xs={12} md={5}>
                        <div className="subscribeDiv" style={{ background: '#FFF', padding: '20px', borderRadius: '20px' }}>
                            <h3 style={{ color: '#111', fontWeight: '800' }}>Keep up to date on VisCommerce</h3>
                            <p style={{ color: '#111', fontWeight: '500', fontSize: '20px', marginTop: '-6px' }}>Subscribe</p>
                            <div className="d-flex subscribeInputDiv" style={{paddingBottom:'10px'}}>
                                <input type="text" className="subscribeInput" placeholder="Enter Your E-mail Id here" />
                                <Button className="subscribeButton">Sbscribe </Button>
                            </div>
                        </div>
                    </Col> */}
                    <Col xs={12} md={3}>
                    <h5>Contact</h5>
                        <div className="contactInfoP">
                                {
                                    infoValues.map((val,idx)=>{
                                        return(
                                            <div key={idx} className="contactInfoDiv">
                                                <img src={val?.imageUrl} />
                                                <a>{val?.value}</a>
                                            </div>
                                        )
                                    })
                                }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}