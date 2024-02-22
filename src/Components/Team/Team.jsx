import React from "react";
import "./Team.css";
import img1 from "./TeamAssets/image1.svg";
import linkedin from "./TeamAssets/Vector.svg";
import watch from "./TeamAssets/Vector-1.svg";

function Team(props) {
  return (
    <div className="team-card ">
      <div className="team-img">
        <img src={img1} alt="Card image cap" />
      </div>
      <div className="team-body p-5">
        <h4 className="team-name">{props.name}</h4>
        <small className="team-subheading py-2">{props.subtitle}</small>
        <p className="description">{props.description}</p>
        <hr />
        <div className="team-info">
          <img src={linkedin} alt="Linkedin" />
          <img src={watch} alt="watch" />

        </div>
      </div>
    </div>
  );
}

export default Team;
