import React from "react";
import "./Team.css";
import img1 from "./TeamAssets/image1.svg";
import linkedin from "./TeamAssets/Vector.svg";
import watch from "./TeamAssets/Vector-1.svg";
import Ramakrishna from "./TeamAssets/Ramakrishna.webp";

function Team(props) {
  return (
    <div className="teamGroup">
      <div className="team-card ">
        <div className="team-img">
          <img src={props.imageSrc} alt={props.name} width="200px" />
        </div>
        <div className="team-body p-4 ">
          <h4 className="team-name">{props.name}</h4>
          <small className="team-subheading ">{props.subtitle}</small>
          <hr className="line" />
          <div className="team-info ">
            <img src={linkedin} className="mx-4 icons" alt="Linkedin" />
            <img src={watch} className="icons" alt="watch" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
