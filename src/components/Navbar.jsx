import React from "react";
import "./Navbar.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">YAMINI CHENNA</div>

      <ul className="navbar-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        
        <li><a href="#experience">Experience</a></li>
        
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="navbar-icons">
        <a href="https://github.com/yaminichenna" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/yamini-chenna" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:yaminichenna@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

