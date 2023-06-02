import React from "react";
import "./Hero.css";

import dc from "../../images/head.png";

const Hero = () => {
  return (
    <div className="HeroSuper" id="hero">
      <div className="Herocontainer">
        <h1>Ready to Upload your money</h1>
        <a href="" target="_blank">
          <div className="BtnMain">
            <p>BUY $MEGA</p>
          </div>
        </a>
        <div className="HeroBottom"></div>
      </div>
    </div>
  );
};

export default Hero;
