import React, { useEffect } from "react";
import "./Hero.css";
import profilePic from "../assets/Profile.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-container" data-aos="fade-up">
        <img src={profilePic} alt="Yamini Chenna" className="hero-img" />
        <div className="hero-text">
          <h1>
            Hello, I'm <span>Yamini Chenna</span>
          </h1>
          <p>
            — A Data Engineer with a Master's in IT & Management from Illinois Institute of Technology, passionate about building scalable data solutions in the cloud.
          </p>
          <a href="#About" className="hero-button">View My Work ↓</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

