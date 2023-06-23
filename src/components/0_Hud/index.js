import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  motion,
  useInView,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import "./Hud.css";

import logo from "../../images/gif-loop.gif";
import menu from "../../images/menu.png";
import player from "../../images/player.png";
import twitter from "../../images/twitter.png";
import discord from "../../images/discord.png";
import linktree from "../../images/linktree.png";
import transp from "../../images/transparent-small.png";
import menuscroll from "../../images/menu-scroll.png";
import nav1 from "../../images/nav-link1.png";
import nav1o from "../../images/nav-link1o.png";

const Hud = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuing = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="HudContainer">
      <div className="HudElement HLogo">
        <img src={logo} alt="" />
      </div>
      <div className="HudElement HMenu">
        <img
          src={menu}
          alt=""
          onClick={() => menuing()}
          className="Hamburger"
        />
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {isMenuOpen && (
          <motion.div
            key="defkey"
            initial={{ opacity: 1, x: 500, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 1, x: 500, y: 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            className="HudElement MenuScroll"
          >
            <img src={menuscroll} alt="" />
            <div className="CloseBtn" onClick={() => menuing()} />
            <div className="NavigationBtns">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                duration={1700}
                onClick={() => menuing()}
              >
                <motion.img src={nav1} alt="" whileHover={{ scale: 1.1 }} />
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={1700}
                onClick={() => menuing()}
              >
                <motion.img src={nav1} alt="" whileHover={{ scale: 1.1 }} />
              </Link>
              <Link
                to="lore"
                spy={true}
                smooth={true}
                duration={1700}
                onClick={() => menuing()}
              >
                <motion.img src={nav1} alt="" whileHover={{ scale: 1.1 }} />
              </Link>
              <Link
                to="sneak"
                spy={true}
                smooth={true}
                duration={1700}
                onClick={() => menuing()}
              >
                <motion.img src={nav1} alt="" whileHover={{ scale: 1.1 }} />
              </Link>
              <Link
                to="game"
                spy={true}
                smooth={true}
                duration={1700}
                onClick={() => menuing()}
              >
                <motion.img src={nav1} alt="" whileHover={{ scale: 1.1 }} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="HudElement HMusic">
        <img src={player} alt="" />
      </div>
      <div className="HudElement HSocials">
        <img src={twitter} alt="" />
        <img src={discord} alt="" />
        <img src={linktree} alt="" />
      </div>
    </div>
  );
};

export default Hud;
