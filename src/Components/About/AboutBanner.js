import React from "react";
import Discussion from "./AboutAssets/Discussion.svg";

const AboutBanner = () => {
  return (
    <div className="container  text-white mb-5">
      <div className="mt-3 card benefit_inital_div" style={{ border: "none" }}>
        <div className="row  benefit_inital">
          <div className="col-xs-12 col-md-6 col-lg-8 ">
            <div>
              <h2>
                <span className="about-heading">About Us</span>
              </h2>
            </div>

            <p className="about-description">
              VisCommerce is a B2B technology company in 3DCommerce. We leverage
              3D, AI, Web, Blockchain technologies in crafting our solutions.
              Our solutions are in a patent pending stage with USPTO, IPO. We
              operate from the USA & India.
            </p>
          </div>
          <div className="col-xs-12 col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
            <div className="collo-image-container ">
              <img
                src={Discussion}
                alt="Discussion"
                className="collo-image img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutBanner;
