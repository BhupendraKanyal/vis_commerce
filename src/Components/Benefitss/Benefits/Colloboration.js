import React from "react";
import "./Benefits.css";
import Collab3D from "../BenefitAssets/Collab3D.svg";
import monitor from "../BenefitAssets/Monitor.svg";

export default function Colloboration() {
  return (
    <div
      className="container h-100 py-5  text-white"
      style={{ color: "white" }}
    >
      <div className="mt-3 card" style={{ border: "none" }}>
        {" "}
        {/* Remove border here */}
        {/* Left */}
        <div className="row g-0 benefit_inital">
          <div className="col-xs-12 col-md-6 d-flex align-items-center">
            <div className="card-body text-left">
              <div className="card-title benefit-common-style">
                <h2 className="benefit-common-style text-white">
                  Collaboration<span className="text-red">3D</span>
                </h2>
              </div>
              <div
                className="text-white"
                style={{ fontSize: "25px", wordSpacing: "3px" }}
              >
                <ul>
                  <li>Deep Engagement with buyers & sellers</li>
                  <li>
                    Showcase your product in real-time 3D Space with Audio and
                    Video chat
                  </li>
                </ul>
              </div>
              <div className="mt-3">
                <img src={Collab3D} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="col-xs-12 col-md-6 d-flex justify-content-center align-items-center">
            <div className="collo-image-container py-4">
              <img src={monitor} alt="..." className="collo-image img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
