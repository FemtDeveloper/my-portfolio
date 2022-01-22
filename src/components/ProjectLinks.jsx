import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import Concesionario from "./../imgs/concesionario.jpg";
import todoApp from "./../imgs/todoapp.jpg";
import calculadora from "./../imgs/calculadora.png";
import "./ProjectLinks.css";

const ProjectLinks = () => {
  return (
    <>
      <h2>Projects</h2>
      <div className="projects-container">
        <a
          href="https://concesionario-t72iz.ondigitalocean.app/"
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
            <img src={calculadora} alt="" />
            <h3>Calculator</h3>
          </motion.article>
        </Link>
      </div>
    </>
  );
};

export default ProjectLinks;
