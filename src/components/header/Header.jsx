import { motion } from "framer-motion";
import React from "react";
import MobileNavbar from "../navbar/MobileNavbar";
import Navbar from "../navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Navbar />
      <motion.div
        initial={{ opacity: 0.5, y: -350, scale: 0.9 }}
        animate={{ opacity: 1, y: [-30, 0], scale: 1 }}
        transition={{ delay: 0.5, duration: 3, yoyo: 2 }}
        className="header-container--title"
      >
        <h1>Web Developer</h1>
        <h2>Amazing design for your projects</h2>
      </motion.div>
      <MobileNavbar />
    </div>
  );
};

export default Header;
