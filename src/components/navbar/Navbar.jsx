import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../imgs/programacion.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
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
