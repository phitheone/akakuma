import "../App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import cloud1 from "../images/Nubes01.gif";
import cloud2 from "../images/Nubes02.png";
import cloud3 from "../images/Nubes03.png";
import cloud4 from "../images/Nubes04.gif";
import cloud5 from "../images/Nubes05.png";
import cloud6 from "../images/Nubes06.png";
import cloud7 from "../images/Nubes07.png";
import cloud8 from "../images/Nubes08.gif";
import cloud9 from "../images/Nubes09.gif";
import tran from "../images/transparent.png";
import castleO from "../images/castleO.png";
import castleC from "../images/castleC.png";
import invi from "../images/inv.png";
import logo from "../images/Logo.png";
import logoT from "../images/LogoT2.png";
import twitter from "../images/twitter.png";
import discord from "../images/discord.png";
import linktree from "../images/linktree.png";
import down from "../images/down.gif";
import skipb from "../images/SKIP01.png";
import skipbh from "../images/SKIP02.png";
import gifI from "../images/gif-intro.gif";
import gifL from "../images/gif-loop.gif";
import empt from "../images/empty.png";
import air1 from "../images/particle01.png";
import air2 from "../images/particle02.png";

function Intro() {
  const [doorOpen, setDoorOpen] = useState(false);
  const [signHover, setSignHover] = useState(false);
  const [logoAnim, setLogoAnim] = useState(false);
  const [logoAnim2, setLogoAnim2] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    setLogoAnim(true);
    setTimeout(() => {
      setLogoAnim(false);
    }, 2800);
    setLogoAnim2(true);
    setTimeout(() => {
      setLogoAnim2(false);
    }, 2000);
  }, []);
  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Parallax
        pages={2}
        style={{ top: "0", left: "0" }}
        className="MainParallax"
      >
        <ParallaxLayer offset={0} speed={1.5} factor={3}>
          <img src={tran} style={{ right: "0", height: "2800px" }} />
        </ParallaxLayer>
        {/* ======CLOUDS======= */}
        <ParallaxLayer speed={1.5} className="ImagesP Floating">
          <img src={cloud9} style={{ right: "0", top: "0" }} />
        </ParallaxLayer>
        <ParallaxLayer speed={0.6} className="ImagesP Floating">
          <img src={cloud1} style={{ left: "0", top: "100px" }} />
        </ParallaxLayer>
        <ParallaxLayer speed={0.5} className="ImagesP Floating">
          <img src={cloud2} style={{ left: "400px", top: "480px" }} />
        </ParallaxLayer>
        <ParallaxLayer speed={0.8} className="ImagesP Floating">
          <img src={cloud3} style={{ left: "0", top: "500px" }} />
        </ParallaxLayer>
        <ParallaxLayer speed={0.4} className="ImagesP Floating">
          <img src={cloud4} style={{ left: "320px", top: "620px" }} />
        </ParallaxLayer>
        <ParallaxLayer speed={1} className="ImagesP Floating">
          <img src={cloud7} style={{ right: "430px", top: "680px" }} />
        </ParallaxLayer>
        <ParallaxLayer speed={0.7} className="ImagesP Floating">
          <img src={cloud8} style={{ right: "0", top: "790px" }} />
        </ParallaxLayer>

        {/*======page2======*/}

        <img src={air1} alt="" className="AirAnim" />
        <img src={air2} alt="" className="AirAnim2" />
        <ParallaxLayer offset={1} speed={1.3} className="ImagesP">
          <img src={cloud5} style={{ left: "0", bottom: "1520px" }} />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.9} className="ImagesP">
          <img src={cloud6} style={{ right: "35%", bottom: "990px" }} />
        </ParallaxLayer>
        {/* <ParallaxLayer
          offset={0}
          speed={0}
          className="ImagesP"
          sticky={{ start: 0, end: 0.35 }}
        >
          <img
            src={logoAnim ? empt : gifL}
            style={{
              left: "calc(50% - 218px)",
              top: "250px",
              height: "437px",
            }}
          />
        </ParallaxLayer> */}
        <ParallaxLayer
          offset={0}
          speed={0}
          className="ImagesP"
          sticky={{ start: 0, end: 0.35 }}
        >
          <img
            src={gifL}
            style={{
              left: "calc(50% - 218px)",
              top: "250px",
              height: "437px",
            }}
          />

          <img
            src={down}
            style={{
              left: "calc(50% - 50px)",
              bottom: "40px",
              height: "100px",
            }}
            className="DownBtn"
          />
          <ParallaxLayer
            offset={1}
            speed={1.4}
            className="ImagesP"
            // sticky={{ start: 0, end: 0 }}
          >
            <img
              src={doorOpen ? castleO : castleC}
              style={{ left: "0", bottom: "0" }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={1.4} className="ImagesP">
            <img
              src={invi}
              className="InviDoor"
              style={{
                left: "calc(50% - 250px)",
                bottom: "0",
                width: "500px",
              }}
              onMouseOver={() => setDoorOpen(true)}
              onMouseOut={() => setDoorOpen(false)}
              onClick={() => {
                navigate("/home");
              }}
            />
          </ParallaxLayer>
        </ParallaxLayer>
      </Parallax>
      <div className="MainHud">
        <div className="Socials">
          <a href="" target="_blank" className="LT">
            <img src={linktree} alt="" />
          </a>
          <a href="" target="_blank" className="TW">
            <img src={twitter} alt="" />
          </a>
          <a href="" target="_blank" className="DC">
            <img src={discord} alt="" />
          </a>
        </div>
        <div className="SkipBtn">
          <img
            src={signHover ? skipbh : skipb}
            alt=""
            onMouseOver={() => setSignHover(true)}
            onMouseOut={() => setSignHover(false)}
            onClick={() => {
              navigate("/home");
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Intro;
