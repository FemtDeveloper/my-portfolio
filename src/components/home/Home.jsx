import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Content from "../content/Content";
import Profile from "../profile/Profile";
import "./Home.css";

const Home = () => {
  const [showButton, setShowButton] = useState(false);
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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <motion.div
      className="home-container"
      exit={{ x: "-100vh", transition: { ease: "easeInOut" } }}
    >
      <Profile />
      <Content />
      {showButton && (
        <motion.a
          // href="#Top"
          className="top-button"
          variants={buttoVariants}
          whileHover={"hover"}
          onClick={scrollToTop}
        >
          <i className="fas fa-arrow-alt-circle-up"></i>
        </motion.a>
      )}
    </motion.div>
  );
};

export default Home;
