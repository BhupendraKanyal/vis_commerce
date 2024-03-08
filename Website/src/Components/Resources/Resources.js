import React, { useState } from "react";
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import { CarouselComponent, sectionFirst } from "./Helpers";
import './style.css'
export const Resources = () => {
    return (
        <>
            <Container>
                <FirstSection />
                <Row className="crouselRow">
                    <div>
                <CarouselComponent />
                </div>
                </Row>
            </Container>
        </>
    )
}

const FirstSection = () => {
    return (
        <>
            <Row className="ResourceFSectionRow">
                <h4>{sectionFirst?.heading}</h4>
                <Col xs={12} md={5} lg={5}>
                    <div>
                        <div >
                            <Button>Physical Twin</Button>
                        </div>
                        <img src={sectionFirst?.imageF} />
                    </div>
                </Col>
                <Col xs={12} md={2} lg={2}>
                    <div>
                        <div>
                            <img src={sectionFirst?.imageS} />
                            <p>Ai & 3D <br/>Technology</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={5} lg={5}>
                    <div>
                        <div >
                            <Button>Digital Twin</Button>
                        </div>
                        <img src={sectionFirst?.imageT} />
                    </div>
                </Col>
            </Row>
        </>
    )
}