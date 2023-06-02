import React, { useState } from "react";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";

import logoM from "../../images/logo.png";
import logoD from "../../images/discord.svg";
import logoT from "../../images/twitter.svg";
import logoS from "../../images/scroll.png";
import logo1 from "../../images/logo1.png";
import influencers from "../../images/influencers.png";
import flag from "../../images/flag.svg";
import hamburger from "../../images/hamburger.png";
import close from "../../images/close-button.png";
import dc from "../../images/head.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuImg, setMenuImg] = useState(hamburger);
  let navigate = useNavigate();

  function openMenu() {
    if (isMenuOpen) {
      setMenuImg(hamburger);
    } else {
      setMenuImg(close);
    }

    setIsMenuOpen(!isMenuOpen);
  }

  const [whatPage, setWhatPage] = useState("home");

  return (
    <div className="NavSuper">
      <div className="NavContainerOver">
        <img src={logo1} />
        <div className="Wide Socials">
          <a href="https://twitter.com/" target="_blank">
            <div className="BtnSocial">
              <p>Twitter</p>
            </div>
          </a>
          <div className="NavButtons">
            <a href="" target="_blank">
              <div className="BtnSocial">
                <p>BUY $MEGA</p>
              </div>
            </a>
          </div>
          <div className="NavButtons">
            <a href="">
              <div className="BtnSocial2">
                <img src={flag} />
                <p>English</p>
              </div>
            </a>
          </div>
          {/* <div className="MintBtn">
            <a href="https://dqw4w9wgxcq.projectzora.xyz/">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <p>MINT</p>
            </a>
          </div> */}
        </div>
      </div>
      <div className="NavContainer">
        <div className="Links">
          <div className="NavLink" onClick={() => setWhatPage("home")}>
            <p>Home</p>
          </div>
          <div className="NavLink" onClick={() => setWhatPage("presale")}>
            <p>Presale</p>
          </div>
          <div className="NavLink" onClick={() => setWhatPage("tokenomics")}>
            <p>Tokenomics</p>
          </div>
          <div className="NavLink">
            <p>Mega Tools</p>
          </div>
          <div className="NavLink">
            <p>Premium</p>
          </div>
          <div className="NavLink">
            <p>FAQ</p>
          </div>
        </div>

        {/* <div
          className="UBtn"
          target="_blank"
          onClick={() => {
            navigate("/utilities");
          }}
        >
          <a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <p>UTILITIES</p>
          </a>
        </div> */}

        {/* <div className="Movil">
          <button className="NavBtn" onClick={() => openMenu()}>
            <img src={menuImg} height="25" />
          </button>
        </div> */}
      </div>
      <div className="HeroSuper" id="hero">
        <div className="Herocontainer">
          {whatPage === "home" && (
            <>
              <h1>Ready to Upload your money</h1>
              <a href="" target="_blank">
                <div className="BtnMain">
                  <p>BUY $MEGA</p>
                </div>
              </a>
              <div className="HeroBottom">
                <img src={influencers} />
              </div>
            </>
          )}
          {whatPage === "presale" && (
            <>
              <div className="HeroBottom">
                <img src={influencers} />
              </div>
            </>
          )}
          {whatPage === "tokenomics" && (
            <>
              <div className="HeroBottom">
                <h1>asdasd</h1>
                <img src={influencers} />
              </div>
            </>
          )}
        </div>
      </div>
      {/* <div className={"NavPanel-" + (isMenuOpen ? "Open" : "Closed")}>
        <div className="PanelLinks">
          <Link
            to="about1"
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-74}
            onClick={() => openMenu()}
          >
            <p>Tokenomics</p>
          </Link>
          <Link
            to="about2"
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-74}
            onClick={() => openMenu()}
          >
            <p>About Us</p>
          </Link>
          <Link
            to="faq"
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-74}
            onClick={() => openMenu()}
          >
            <p>Roadmap</p>
          </Link>
        </div>
        <div className="PanelSocials">
          <a
            href="https://twitter.com/AstroBonk"
            target="_blank"
            onClick={() => openMenu()}
          >
            <img src={logoT} height="40" />
          </a>
          <a
            href="https://discord.gg/astrobonk"
            target="_blank"
            onClick={() => openMenu()}
          >
            <img src={logoD} height="40" />
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdC-4drcl7Ng2Rz2egmBQUA7slhOabjU37LSYwTIU6vHHOnhA/viewform"
            target="_blank"
          >
            <img src={logoS} height="40" />
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
