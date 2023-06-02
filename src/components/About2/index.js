import React from "react";
import "./About2.css";

import foto from "../../images/head.png";

const About2 = () => {
  return (
    <div className="A2Super" id="about2">
      <div className="A2Container">
        <div className="A2Left">
          <img src={foto} />
        </div>
        <div className="A2Right">
          <h1>Astro Bonk</h1>
          <h2 className="H2Span">
            The first <span>Real</span> Astronaut on Solana
          </h2>
          <p>
            Missed <span>Bonk</span>? Join <span>Astro Bonk</span>!
            <br />
            <br />
            🟢 Experienced team
            <br />
            🟢 Long term vision
            <br />
            <br />
            Astro Bonk is the token that <span>will carry you</span> to the moon
            on the <span>Solana</span> network. Latest <span>Bonk</span>{" "}
            projects were mooning and had a lot of exposure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About2;
