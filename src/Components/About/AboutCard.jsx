import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Vision from "./AboutAssets/Vision.svg";
import Values from "./AboutAssets/Values.svg";
import Mission from "./AboutAssets/Mission.svg";
import "./AboutCard.css"; // Import custom CSS file for styling

const AboutCard = () => {
  return (
    <Container className="mt-5   marginBottom">
      <Row className="about-row">
        <Col xs={12} md={6} lg={6} className="about-col text-center">
          <div
            className="about-content"
            style={{
              width: "500px",
              height: "400px", // Adjusted height calculation
              border: "2px solid white",
              marginBottom: "20px",
            }}
          >
            <div className="p-4">
              <img src={Vision} alt="Vision" className="about-image" />
              <p className="about-text textRed">Our Vision</p>
              <p className="about-description">
                Visualization Powered Commerce
              </p>
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          lg={6}
          className="about-col text-center mb-3 mb-lg-0"
        >
          <div
            className="about-content"
            style={{
              width: "500px",
              height: "400px", // Adjusted height calculation
              border: "2px solid white",
              marginBottom: "20px",
            }}
          >
            <div className="p-3">
              <img src={Mission} alt="Values" className="about-image" />
              <p className="about-text textRed ">Values</p>
              <p className="about-description pb-2">
                Empower home/office décor sector. Develop/deploy 3DCommerce
                innovations. Empower home-owners for interior design.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={12} className="about-col mb-5 text-center">
          <div
            className="about-content mt-5"
            style={{
              width: "500px",
              height: "400px", // Adjusted height calculation
              border: "2px solid white",
              marginBottom: "20px",
            }}
          >
            <div className="p-3">
              <img src={Values} alt="Mission" className="about-image" />
              <p className="about-text textRed">Mission</p>
              <p className="about-description">
                Customer oriented. Balance interests of stakeholders.
                Environmental protection and dharma.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutCard;
