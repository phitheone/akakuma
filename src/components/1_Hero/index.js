import React from "react";
import { motion, useInView, useTransform, useScroll } from "framer-motion";

import img1_1 from "../../images/1_1.png";
import img1_2 from "../../images/1_2.png";
import img1_3 from "../../images/1_3.png";
import img1_4 from "../../images/1_4.png";
import img1_5 from "../../images/1_5.png";
import logo from "../../images/gif-loop.gif";

import "./Hero.css";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const yValue1 = useTransform(scrollYProgress, [0, 1], [0, 2500]);
  const yValue2 = useTransform(scrollYProgress, [0, 1], [0, 1300]);
  const yValue3 = useTransform(scrollYProgress, [0, 1], [0, 900]);
  const yValue4 = useTransform(scrollYProgress, [0, 1], [0, 700]);

  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="HeroMain"
      id="hero"
    >
      <motion.div className="ImageParallax" style={{ y: yValue1 }}>
        <img src={img1_5} alt="" />
      </motion.div>
      <motion.div className="ImageParallax" style={{ y: yValue2 }}>
        <img src={img1_4} alt="" />
      </motion.div>
      <motion.div className="ImageParallax" style={{ y: yValue3 }}>
        <img src={img1_3} alt="" />
      </motion.div>
      <motion.div className="ImageParallax" style={{ y: yValue4 }}>
        <img src={img1_2} alt="" />
      </motion.div>
      <motion.div className="ImageParallax">
        <img src={img1_1} alt="" />
      </motion.div>
      <motion.div className="HeroLogo">
        <img src={logo} alt="" />
        <h1>
          Welcome to the <br />
          adventure of a lifetime!
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
