import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../imgs/d-logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  const [isActive, setIsActive] = useState("");
  const handlerClick = () => {
    // setShowMobile(!showMobile);
    setIsActive(!isActive);
  };
  const navbarVariants = {
    hidden: {
      x: -120,
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };
  return (
    <div className="navbar-container">
      <Link to="/">
        <motion.img
          src={logo}
          alt="logo"
          variants={navbarVariants}
          initial="hidden"
          animate="visible"
          style={{ height: "40px", marginBottom: "10px" }}
        />
      </Link>
      <motion.div
        whileHover={{ scale: 1.1, boxShadow: "0 0 8px rgb(255,255,255)" }}
        className="menu-icon"
        onClick={handlerClick}
      >
        <i className={showMobile ? "fas fa-times" : "fas fa-bars"}></i>
      </motion.div>
      <div
        className={`mobile-navbar${isActive ? " active" : ""}`}
        onClick={handlerClick}
      >
        <Link to="/">Home</Link>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
      <motion.div
        className="links-container"
        transition={{ delay: 1, duration: 2 }}
        initial={{ x: 320 }}
        animate={{ x: 0 }}
      >
        <a href="#portfolio" className="link">
          Projects
        </a>
        <a href="#contact" className="link">
          Contact
        </a>
      </motion.div>
    </div>
  );
};

export default Navbar;
