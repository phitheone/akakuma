import React from "react";
import { motion, useInView, useTransform, useScroll } from "framer-motion";

import img2_1 from "../../images/2_1.png";
import img2_2 from "../../images/2_2.png";
import img2_3 from "../../images/2_3.png";
import img2_4 from "../../images/2_4.png";
import img2_5 from "../../images/2_5.png";

import "./About1.css";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const yValue1 = useTransform(scrollYProgress, [0, 1], [-450, 1500]);
  const yValue2 = useTransform(scrollYProgress, [0, 1], [-260, 1000]);
  const yValue3 = useTransform(scrollYProgress, [0, 1], [-100, 500]);
  const yValue4 = useTransform(scrollYProgress, [0, 1], [-100, 300]);

  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="A1Main"
      id="about"
    >
      <motion.div className="ImageParallax" style={{ y: yValue1 }}>
        <img src={img2_1} alt="" />
      </motion.div>
      <motion.div className="ImageParallax" style={{ y: yValue2 }}>
        <img src={img2_2} alt="" />
      </motion.div>
      <motion.div className="ImageParallax" style={{ y: yValue3 }}>
        <img src={img2_3} alt="" />
      </motion.div>
      <motion.div className="ImageParallax" style={{ y: yValue4 }}>
        <img src={img2_4} alt="" />
      </motion.div>
      <motion.div className="ImageParallax">
        <img src={img2_5} alt="" />
      </motion.div>
      <motion.div className="AboutContent" style={{ y: yValue4 }}>
        <h2>
          <br />
          <br />
          <br />
          <br />
          What is Aka-Kuma Wold?
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
          <br />
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
