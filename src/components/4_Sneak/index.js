import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { wrap } from "popmotion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import img1 from "../../images/4_1.png";
import img2 from "../../images/4_2.png";
import img3 from "../../images/4_3.png";
import img4 from "../../images/4_4.png";
import arrow_left from "../../images/arrow_left.png";
import arrow_right from "../../images/arrow_right.png";

import nft01 from "../../images/01.png";
import nft02 from "../../images/02.png";
import nft03 from "../../images/03.png";
import nft04 from "../../images/04.png";
import nft05 from "../../images/05.png";
import nft06 from "../../images/06.png";
import nft07 from "../../images/07.png";
import nft08 from "../../images/08.png";
import nft09 from "../../images/09.png";
import nft10 from "../../images/10.png";
import nft11 from "../../images/11.png";
import nft12 from "../../images/12.png";
import nft13 from "../../images/13.png";
import nft14 from "../../images/14.png";
import nft15 from "../../images/15.png";

import "./Sneak.css";

const nfts = [
  nft01,
  nft02,
  nft03,
  nft04,
  nft05,
  nft06,
  nft07,
  nft08,
  nft09,
  nft10,
  nft11,
  nft12,
  nft13,
  nft14,
  nft15,
];

const Sneak = () => {
  const { scrollYProgress } = useScroll();
  const yValue1 = useTransform(scrollYProgress, [0, 1], [-960, 400]);
  const yValue2 = useTransform(scrollYProgress, [0, 1], [-700, 300]);
  const yValue3 = useTransform(scrollYProgress, [0, 1], [-520, 200]);
  const yValue4 = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="HeroMain"
      id="sneak"
    >
      <motion.div className="ImageParallax" style={{ y: yValue1 }}>
        <img src={img1} alt="" />
      </motion.div>
      <motion.div className="ImageParallax" style={{ y: yValue2 }}>
        <img src={img2} alt="" />
      </motion.div>
      <motion.div className="ImageParallax" style={{ y: yValue3 }}>
        <img src={img3} alt="" />
      </motion.div>
      <motion.div className="ImageParallax">
        <img src={img4} alt="" />
      </motion.div>
      {/*===========slider start===========*/}
      <div className="SwiperContainer">
        <Swiper
          navigation={true}
          spaceBetween={0}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 768 ? 1 : "3"}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={nfts[0]} height={300} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nfts[1]} height={300} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nfts[2]} height={300} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nfts[3]} height={300} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nfts[4]} height={300} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nfts[5]} height={300} />
          </SwiperSlide>
        </Swiper>
      </div>

      {/*===========slider end===========*/}
    </motion.div>
  );
};

export default Sneak;
