import React from "react";
import "./Footer.css";

import logo from "../../images/gif-loop.gif";
import twitter from "../../images/twitter.png";
import discord from "../../images/discord.png";
import linktree from "../../images/linktree.png";

const Footer = () => {
  return (
    <div className="FooContainer">
      <img src={logo} alt="" />
      <div className="FooCenter">
        <p>
          Thanks for Adventuring with us! <br />
          <br />
          Visit us as well on:
        </p>
        <div className="FooSocials">
          <img src={twitter} alt="" />
          <img src={discord} alt="" />
          <img src={linktree} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
