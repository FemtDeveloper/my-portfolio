import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import "./MobileNavbar.css";

const MobileNavbar = () => {
  return (
    <motion.div
      className="mobile-shortcuts"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
    >
      <Link to="/">Home</Link>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </motion.div>
  );
};

export default MobileNavbar;
