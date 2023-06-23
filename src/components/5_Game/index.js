import React from "react";
import { motion, useInView, useTransform, useScroll } from "framer-motion";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

import video1 from "../../video/game.mp4";

import img3_1 from "../../images/5_1.png";
import img3_2 from "../../images/5_2.png";
import img3_3 from "../../images/5_3.png";
import img3_4 from "../../images/5_4.png";

import "./Game.css";

const Game = () => {
  const { scrollYProgress } = useScroll();
  const yValue1 = useTransform(scrollYProgress, [0, 1], [-700, 50]);
  const yValue2 = useTransform(scrollYProgress, [0, 1], [-500, 50]);
  const yValue3 = useTransform(scrollYProgress, [0, 1], [-300, -50]);
  const yValue4 = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="HeroMain"
      id="game"
    >
      <motion.div className="ImageParallax" style={{ y: yValue1 }}>
        <img src={img3_4} alt="" />
      </motion.div>
      <motion.div className="ImageParallax" style={{ y: yValue2 }}>
        <img src={img3_3} alt="" />
      </motion.div>
      <motion.div className="ImageParallax" style={{ y: yValue3 }}>
        <img src={img3_2} alt="" />
      </motion.div>
      <motion.div className="ImageParallax">
        <img src={img3_1} alt="" />
      </motion.div>
      <div className="VideoContainer">
        <Video>
          <source src={video1} type="video/webm" />
        </Video>
      </div>
    </motion.div>
  );
};

export default Game;
