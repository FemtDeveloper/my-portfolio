import { motion } from "framer-motion";
import React from "react";
import Content from "../content/Content";
import Profile from "../profile/Profile";
import "./Home.css";

const Home = () => {
  const buttoVariants = {
    hover: {
      scale: 1.1,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.3,
      },
    },
  };
  return (
    <motion.div
      className="home-container"
      exit={{ x: "-100vh", transition: { ease: "easeInOut" } }}
    >
      <motion.a
        href="#Top"
        className="top-button"
        variants={buttoVariants}
        whileHover={"hover"}
      >
        <i className="fas fa-arrow-alt-circle-up"></i>
      </motion.a>
      <Profile />
      <Content />
    </motion.div>
  );
};

export default Home;
