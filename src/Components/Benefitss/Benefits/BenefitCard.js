import { Row, Col, Container } from "react-bootstrap";
import Building from "../BenefitAssets/Building.svg";
import Build1 from "../BenefitAssets/Build1.svg";
import small from "../BenefitAssets/SmallComputer.svg";
import Increase from "../BenefitAssets/Increase.svg";
import Decrease from "../BenefitAssets/Decrease.svg";
import "./Benefits.css";

const BenefitCard = (props) => {
  // [title,subtitle,image]=props;
  const { title, subtitle, image, state } = props; // Destructure props here
  console.log(title, subtitle, image); // Check  return
  return (
    <div className="card-style card-border p-3 mt-3">
      <div className="card-body">
        <Row>
          <Col xs={8}>
            <h5 className="benefit-title">{title}</h5>
            <p className="benefit-subtitle mb-2">{subtitle}</p>
          </Col>
          <Col xs={4} className="text-right">
            <img src={state} alt="Small Image" className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="mt-3 text-center">
            <img src={image} alt="Another Small Image" className="img-fluid" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BenefitCard;
