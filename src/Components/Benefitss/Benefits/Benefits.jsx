import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import IncreaseArrow from "../BenefitAssets/IncreaseArrow.svg";
import Ticket from "../BenefitAssets/Benefits/Ticket.svg";
import Commerce from "../BenefitAssets/Benefits/3DCommerce.svg";
import Increase from "../BenefitAssets/Benefits/Increase.svg";
import BigTickets from "../BenefitAssets/Benefits/BigTickets.svg";
import Revenue from "../BenefitAssets/Benefits/Revenue.svg";
import Button from "../BenefitAssets/Button.svg";
function Benefits() {
  return (
    <div className="d-flex  text-white">
      <Container className="m-5 ">
        <div className="row g-0 ">
          <div className="col-xs-12 col-lg-6">
            {/* Left side */}
            <div style={{ height: "450px" }}>
              {/* Content for left side */}
              <div className="p-4">
                <img src={Commerce} alt="" />
              </div>
              <img
                src={IncreaseArrow}
                alt=""
                style={{ width: "100%", height: "70%" }}
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-xs-12 col-lg-6  d-flex flex-column align-items-start">
            {/* Right side */}
            <div className="d-flex align-items-center mb-4">
              <h1 className="mr-3">Benefits</h1>
            </div>

            <div
              className="d-flex align-items-start "
              style={{ width: "100%" }}
            >
              <div className="mb-4 px-lg-3 d-flex  " style={{ width: "50%" }}>
                <img
                  src={Revenue}
                  alt="Image 1"
                  style={{ width: "50%", height: "50%" }}
                />
              </div>
              <div className="mb-4 px-lg-3 d-flex   " style={{ width: "50%" }}>
                <img
                  src={BigTickets}
                  alt="Image 2"
                  style={{ width: "75%", height: "90%" }}
                />
              </div>
            </div>

            <div
              className="d-flex align-items-start  "
              style={{ width: "100%" }}
            >
              <div className="mb-4 px-lg-3 d-flex  " style={{ width: "50%" }}>
                <img
                  src={Increase}
                  alt="Image 3"
                  style={{ width: "50%", height: "50%" }}
                />
              </div>
              <div className="mb-4 px-lg-3 d-flex " style={{ width: "50%" }}>
                <img
                  src={Ticket}
                  alt="Image 4"
                  style={{ width: "75%", height: "50%" }}
                />
              </div>
            </div>
            <div>
              <img src={Button} alt="" className="py-3" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Benefits;
