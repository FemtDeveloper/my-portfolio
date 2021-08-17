import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1>THIS IS THE NAVBAR TO CORRECT LATERR</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Navbar;
