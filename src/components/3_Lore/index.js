import React, { useState } from "react";
import {
  motion,
  useInView,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";

import img1 from "../../images/3_1.png";
import img2 from "../../images/3_2.png";
import img3 from "../../images/3_3.png";
import img4 from "../../images/3_4.png";
import content from "../../images/lorebubble.png";
import scrollOpen from "../../images/chapter_scroll.png";
import scrollClosed from "../../images/chapter_scroll_locked.png";
import arrowleft from "../../images/arrow_left.png";
import arrowright from "../../images/arrow_right.png";
import ak07 from "../../images/07.png";
import ch1e2 from "../../images/ch1e2.png";

import "./Lore.css";

const Lore = () => {
  const { scrollYProgress } = useScroll();
  const yValue1 = useTransform(scrollYProgress, [0, 1], [-1350, 1500]);
  const yValue2 = useTransform(scrollYProgress, [0, 1], [-1000, 1000]);
  const yValue3 = useTransform(scrollYProgress, [0, 1], [-400, 500]);
  const yValue4 = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const [showing, setShowing] = useState("default");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="HeroMain"
      id="lore"
    >
      <motion.div className="ImageParallax" style={{ y: yValue1 }}>
        <img src={img4} alt="" />
      </motion.div>
      <motion.div className="ImageParallax" style={{ y: yValue2 }}>
        <img src={img3} alt="" />
      </motion.div>
      <motion.div className="ImageParallax" style={{ y: yValue3 }}>
        <img src={img2} alt="" />
      </motion.div>
      <motion.div className="ImageParallax">
        <img src={img1} alt="" />
      </motion.div>
      <motion.div className="LoreContainer">
        <img src={content} alt="" className="LoreBg" />
        <motion.div className="LoreContent">
          {/* <div onClick={() => setShowing("default")}>
            <p>option1</p>
          </div>
          <div onClick={() => setShowing("t1")}>
            <p>option2</p>
          </div>
          <div onClick={() => setShowing("t2")}>
            <p>option3</p>
          </div> */}
          <AnimatePresence mode="wait" initial={false}>
            {showing === "default" && (
              <motion.div
                key="defkey"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", mass: 1, duration: 0.5 }}
                className="LoreIntro"
              >
                <h2>Let me tell you a story...</h2>
                <div className="LoreScrolls">
                  <img
                    src={scrollOpen}
                    alt=""
                    onClick={() => setShowing("t1")}
                    className="Scroll1"
                  />
                  <img src={scrollClosed} alt="" className="Scroll2" />
                  <img src={scrollClosed} alt="" className="Scroll3" />
                </div>
              </motion.div>
            )}
            {showing === "t1" && (
              <motion.div
                key="t1key"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ type: "spring", mass: 1, duration: 0.5 }}
                className="LoreIntro"
              >
                <div className="Chapter">
                  <div className="StoryArrows">
                    <img
                      src={arrowleft}
                      alt=""
                      onClick={() => setShowing("default")}
                    />
                  </div>
                  <div className="C1E1">
                    <img src={ak07} alt="" />
                    <h2>Chapter 1: Not so cute beginnings</h2>
                    <p>
                      In the heart of a dense forest lay the majestic kingdom of
                      the fox-like adventurers. The kingdom was ruled by a wise
                      and just queen who was adored by her subjects. The foxes
                      were known for their bravery, resourcefulness, and love
                      for adventure. They were skilled archers, cunning
                      strategists, and fierce warriors who had triumphed over
                      many enemies in the past. The kingdom was filled with
                      bustling towns, magnificent castles, and sprawling forests
                      that were home to a myriad of magical creatures. The
                      fox-like adventurers were respected and admired throughout
                      the land, and their tales of heroism were legendary.
                    </p>
                  </div>
                  <div className="StoryArrows">
                    <img
                      src={arrowright}
                      alt=""
                      onClick={() => setShowing("t2")}
                    />
                  </div>
                </div>

                {/* <p onClick={() => setShowing("default")}>thing 1</p>
                <p>T1 description</p> */}
              </motion.div>
            )}
            {showing === "t2" && (
              <motion.div
                key="t2key"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ type: "spring", mass: 1, duration: 0.5 }}
              >
                <div className="Chapter">
                  <div className="StoryArrows">
                    <img
                      src={arrowleft}
                      alt=""
                      onClick={() => setShowing("t1")}
                    />
                  </div>
                  <div className="C1E1">
                    <p>
                      In the heart of a dense forest lay the majestic kingdom of
                      the fox-like adventurers. The kingdom was ruled by a wise
                      and just queen who was adored by her subjects. The foxes
                      were known for their bravery, resourcefulness, and love
                      for adventure. They were skilled archers, cunning
                      strategists, and fierce warriors who had triumphed over
                    </p>
                    <p>
                      many enemies in the past. The kingdom was filled with
                      bustling towns, magnificent castles, and sprawling forests
                      that were home to a myriad of magical creatures. The
                      fox-like adventurers were respected and admired throughout
                      the land, and their tales of heroism were legendary.
                    </p>
                    <img src={ch1e2} alt="" />
                  </div>
                  <div className="StoryArrows">
                    <img
                      src={arrowright}
                      alt=""
                      onClick={() => setShowing("default")}
                    />
                  </div>
                </div>
                {/* <p>thing 2</p>
                <p>T2 Awesome description</p> */}
              </motion.div>
            )}
          </AnimatePresence>

          {/*<AnimatePresence mode="wait">
             <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
               {
                {
                  default: (
                    <>
                      <p>default</p>
                      <p>Def description</p>
                    </>
                  ),
                  t1: (
                    <>
                      <p>thing 1</p>
                      <p>T1 description</p>
                    </>
                  ),
                  t2: (
                    <>
                      <p>thing 2</p>
                      <p>T2 Awesome description</p>
                    </>
                  ),
                }[showing]
              } 
            </motion.div>
          </AnimatePresence>*/}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Lore;
