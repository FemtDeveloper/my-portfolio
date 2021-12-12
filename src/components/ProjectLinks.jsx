import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import Concesionario from "./../imgs/concesionario.png";
import todoApp from "./../imgs/todoApp.png";
import "./ProjectLinks.css";

const ProjectLinks = () => {
  return (
    <>
      <h2>Projects</h2>
      <div className="projects-container">
        <a
          href="https://femtdeveloper.github.io/concesionario/"
          target="_blank"
        >
          <motion.article whileHover={{ scale: 1.05 }}>
            <img src={Concesionario} alt="" />
            <h3>Concesionario</h3>
          </motion.article>
        </a>
        <Link to="/todoApp">
          <motion.article whileHover={{ scale: 1.05 }}>
            {" "}
            <img src={todoApp} alt="" />
            <h3>Todo App</h3>
          </motion.article>
        </Link>
        <Link to="/calc">
          <motion.article whileHover={{ scale: 1.05 }}>
            {" "}
            <img src={todoApp} alt="" />
            <h3>Calculator</h3>
          </motion.article>
        </Link>
      </div>
    </>
  );
};

export default ProjectLinks;
