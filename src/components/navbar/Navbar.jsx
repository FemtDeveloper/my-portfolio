import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../imgs/programacion.png";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  const handlerClick = () => {
    setShowMobile(!showMobile);
  };
  return (
    <div className="navbar-container">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="menu-icon" onClick={handlerClick}>
        <i className={!showMobile ? "fas fa-times-circle" : "fas fa-bars"}></i>
      </div>
      {showMobile && <MobileNavbar />}
      <div className="links-container">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/" className="link">
          Projects
        </Link>
        <Link to="/" className="link">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
