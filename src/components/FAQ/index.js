import React, { useState } from "react";
import "./FAQ.css";

import data from "./data";
import flecha from "../../images/head.png";

const FAQ = () => {
  const [clicked, setClicked] = useState(null);
  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }
    setClicked(i);
  };

  return (
    <div className="FSuper" id="faq">
      <div className="Fcontainer">
        <div className="FTitle">
          <h1>Roadmap</h1>
        </div>
        {data.map((faq, i) => (
          <>
            <div
              className={"Wrap" + (clicked === i ? "Open" : "Closed")}
              onClick={() => toggle(i)}
            >
              <img
                src={flecha}
                className={"Arrow" + (clicked === i ? "Open" : "Closed")}
              />
              <h1>{faq.title}</h1>
              <img
                src={flecha}
                className={"Arrow" + (clicked === i ? "Open" : "Closed")}
              />
            </div>
            <div
              className={"Drop" + (clicked === i ? "Open" : "Closed")}
              onClick={() => toggle(i)}
            >
              <ul>
                {faq.content.map((lili) => (
                  <li>{lili}</li>
                ))}
              </ul>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
