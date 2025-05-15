
import React from "react";
import "./Hero.css";
import Profile_Img from "../../assets/profile-img.jpg";
import Resume from "../../assets/Shivangi Resume.pdf.pdf";
import { FaRocket ,FaFile } from 'react-icons/fa6';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hi, <br /> I am <span className="highlight-name">Shivangi Jain</span>,
            <br /> Full Stack Developer
          </h1>
          <p className="hero-subtext">
            I love crafting seamless, high-performance web applications with{" "}
            <strong>React, Node.js, Express, and MongoDB.</strong><br/>
             Let's build something amazing together!
          </p>
          <div className="hero-action">
            <AnchorLink className="hero-connect" offset={50} href="#contact"><p><FaRocket/> Connect With Me</p></AnchorLink>
            <a href={Resume} className="hero-resume" ><FaFile/> My Resume</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={Profile_Img} alt="Shivangi Jain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
