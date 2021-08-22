import React from "react";
import Navbar from "../navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Navbar />
      <div className="header-container--title">
        <h1>Web Developer</h1>
        <h2>Amazing design for your projects</h2>
      </div>
      <div className="navlinks-mobile">
        <a href="#portfolio">Portfolio</a>
        <a href="#skills">Skills</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default Header;
