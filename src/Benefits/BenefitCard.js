import { Row, Col, Container } from "react-bootstrap";
import Building from "../BenefitAssets/Building.svg";
import Build1 from "../BenefitAssets/Build1.svg";

import Increase from "../BenefitAssets/Increase.svg";
import Decrease from "../BenefitAssets/Decrease.svg";
import "./Benefits.css";

const BenefitCard = () => {
  return (
    <Container>
      <Row >
        <Col xs={12} lg={4}>
          <div className="card-style p-3 mt-3">
            <div className="card-body">
              <Row>
                <Col xs={8}>
                  <h5 className="benefit-title">Reduce</h5>
                  <p className="benefit-subtitle mb-2">Order return</p>
                </Col>
                <Col xs={4} className="text-right">
                  <img
                    src={Decrease}
                    alt="Small Image"
                    style={{ width: "70%", height: "80%" }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} lg={5}></Col>
                <Col xs={12} lg={7} className="mt-3 text-center">
                  <img
                    src={Building}
                    alt="Another Small Image"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="card-style p-3 mt-3">
            <div className="card-body">
              <Row>
                <Col xs={8}>
                  <h5 className="benefit-title">Reduce</h5>
                  <p className="benefit-subtitle mb-2">Order return</p>
                </Col>
                <Col xs={4} className="text-right">
                  <img
                    src={Decrease}
                    alt="Small Image"
                    style={{ width: "70%", height: "80%" }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} lg={5}></Col>
                <Col xs={12} lg={7} className="mt-3 text-center">
                  <img
                    src={Build1}
                    alt="Another Small Image"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="card-style p-3 mt-3">
            <div className="card-body">
              <Row>
                <Col xs={8}>
                  <h5 className="benefit-title">Reduce</h5>
                  <p className="benefit-subtitle mb-2">Order return</p>
                </Col>
                <Col xs={4} className="text-right">
                  <img
                    src={Decrease}
                    alt="Small Image"
                    style={{ width: "70%", height: "90%" }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} lg={5}></Col>
                <Col xs={12} lg={7} className="mt-5 text-center">
                  <img
                    src={Building}
                    alt="Another Small Image"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BenefitCard;
