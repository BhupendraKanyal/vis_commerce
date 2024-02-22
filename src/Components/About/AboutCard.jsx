import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Vision from "./AboutAssets/Vision.svg";
import Values from "./AboutAssets/Values.svg";
import Mission from "./AboutAssets/Mission.svg";
import "./AboutCard.css";

const AboutCard = () => {
  return (
    <Container className=" marginBottom">
      <Row className="colsDesF">
      <Col xs={12} md={1} className="hideCol"></Col>
        <Col xs={12} md={5} className="equalcols">
          <div>
          <div className="parentDivVision">
            <div className="imgDivVision">
              <img src={Vision} alt="Vision" />
            </div>
            <div className="pDivVision">
            <p className="about-text textRed ">Our Vision</p>
              <p className="about-description-p pb-2">
              Visualization Powered Commerce
              </p>
            </div>
          </div>
          </div>
        </Col>
        <Col xs={12} md={5} className="equalcols mmDiv">
        <div>
          <div className="parentDivVision">
            <div className="imgDivVision">
              <img src={Mission} alt="Vision" className="about-image" />
            </div>
            <div className="pDivVision withMarg">
            <p className="about-text textRed ">Mission</p>
              <p className="about-description-p pb-2">
                Empower home/office décor sector. Develop/deploy 3DCommerce
                innovations. Empower home-owners for interior design.
              </p>
            </div>
          </div>
          </div>
        </Col>
        <Col xs={12} md={1} className="hideCol"></Col>
      </Row>
      <Row className="colsDesS">
      <Col xs={12} md={5} className="equalcols">
          <div>
          <div className="parentDivVision">
            <div className="imgDivVisionS">
              <img src={Values} alt="Vision"  />
            </div>
            <div className="pDivVision">
            <p className="about-text textRed ">Values</p>
              <p className="about-description-p pb-2">
              Customer oriented
Balance interests of stakeholders. 
Environmental protection and dharma
              </p>
            </div>
          </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutCard;
