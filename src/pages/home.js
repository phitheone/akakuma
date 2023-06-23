import React from "react";
import { motion, useScroll } from "framer-motion";

import Hero from "../components/1_Hero";
import About1 from "../components/2_About";
import Lore from "../components/3_Lore";
import Sneak from "../components/4_Sneak";
import Game from "../components/5_Game";
import Footer from "../components/6_Footer";
import Hud from "../components/0_Hud";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <About1 />
      <Lore />
      <Sneak />
      <Game />
      <Footer />
      <Hud />
    </motion.div>
  );
};

export default Home;
