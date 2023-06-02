import React from "react";
import "./About1.css";

import foto from "../../images/astrodogeT2.png";
import g1 from "../../images/graph1.png";
import g2 from "../../images/graph2.png";

const About1 = () => {
  return (
    <div className="A1Super" id="about1">
      <div className="A1Container">
        <div className="A1Top">
          <h1>Tokenomics</h1>
        </div>
        <div className="A1Bottom">
          <div className="A1Left">
            <img src={g1} />
            {/*<h1>Tokenomics</h1>

           <p>
            Supply: <span>10,000,000,000</span>
            <br />
            <br />
            Max buy 2% supply = <span>200,000,000</span> $astro
            <br />
            Max sell 0.5% supply = <span>50,000,000</span> $astro
            <br />
            <br />
            Tax: <span>8%</span> Buy & Sell
            <br />
            <br />
            <ul>
              <li>1% LP</li>
              <li>1% Contract Dev</li>
              <li>1% Team</li>
              <li>5% Marketing</li>
            </ul>
          </p> */}
          </div>
          <div className="A1Right">
            <img src={g2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
