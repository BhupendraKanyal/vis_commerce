import React from "react";
import BenefitCardMain from "./Benefits/BenefitCardMain";
import Vertical from "./Benefits/Vertical";
import Colloboration from "./Benefits/Colloboration";
import ShopImg from "./Benefits/Shop";
import Revenue from "./Benefits/Revenue";
import Benefits from "./Benefits/Benefits";
import "./Benefits/Benefits.css";
function Benefit() {
  return (
    <div className="benefit_inital">
      <Benefits />
      <BenefitCardMain />
      <Colloboration />
      <Revenue />
      <ShopImg />
      <Vertical />
    </div>
  );
}

export default Benefit;
