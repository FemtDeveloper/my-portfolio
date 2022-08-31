import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Concesionario from "./../imgs/mockup-concesionario-m.png";
import todoApp from "./../imgs/todoapp-m.png";
import calculadora from "./../imgs/calculadora-m.png";
import pokemon from "./../imgs/mockup-pokemon-m.png";
import countries from "./../imgs/countries-m.png";
import encanto from "./../imgs/encanto-m.png";
import madrugon from "./../imgs/madrugon-m.png";
import fenagro from "./../imgs/fenagro-m.png";
import cmerk from "./../imgs/mockup-cmerk.png";

import "./ProjectLinks.css";

const ProjectLinks = () => {
  let slideIndex = 1;

  // Next/previous controls
  const plusSlides = (n) => {
    showSlides((slideIndex += n));
  };

  // Thumbnail image controls
  const currentSlide = (n) => {
    showSlides((slideIndex = n));
  };

  const showSlides = async (n) => {
    let slides = await document.getElementsByClassName("course-slide");
    let i;
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "inline";
  };
  showSlides(slideIndex);
  return (
    <>
      <h1>Projects</h1>
      <div className="projects-container">
        <a href="https://cmerk-production.up.railway.app/" target="_blank">
          <motion.article whileHover={{ scale: 1.05 }}>
            <img src={cmerk} alt="" />
            <h3>Cmerk</h3>
          </motion.article>
        </a>
        <a href="https://madrugonmayorista.co/" target="_blank">
          <motion.article whileHover={{ scale: 1.05 }}>
            <img src={madrugon} alt="" />
            <h3>Tienda en línea</h3>
          </motion.article>
        </a>
        <a href="https://www.encantocolombia.co/" target="_blank">
          <motion.article whileHover={{ scale: 1.05 }}>
            <img src={encanto} alt="" />
            <h3>Encanto Colombia</h3>
          </motion.article>
        </a>
        <a href="https://www.fenagro.com.co/" target="_blank">
          <motion.article whileHover={{ scale: 1.05 }}>
            <img src={fenagro} alt="" />
            <h3>Federación</h3>
          </motion.article>
        </a>
        <section className="main-courses-container">
          <h1>Learning projects</h1>
          <div className="button-slider--container">
            <span onClick={() => plusSlides(-1)}>{"<"}</span>
            <span onClick={() => plusSlides(1)}>{">"}</span>
          </div>
          <div className="slider-container">
            <a
              href="https://concesionario-8uow2.ondigitalocean.app/"
              target="_blank"
              className="course-slide"
              key={1}
            >
              <motion.article whileHover={{ scale: 1.05 }}>
                <img src={Concesionario} alt="" />
                <h4>Concesionario</h4>
              </motion.article>
            </a>
            <Link to="/todoApp" className="course-slide" key={2}>
              <motion.article whileHover={{ scale: 1.05 }}>
                {" "}
                <img src={todoApp} alt="" />
                <h4>Todo App</h4>
              </motion.article>
            </Link>
            <a
              href="https://pokemon-app-tau-seven.vercel.app/"
              target="_blank"
              className="course-slide"
              key={3}
            >
              <motion.article whileHover={{ scale: 1.05 }}>
                {" "}
                <img src={pokemon} alt="" />
                <h4>Pokemon App</h4>
              </motion.article>
            </a>
            <a
              href="https://countries-app-black.vercel.app/"
              target="_blank"
              className="course-slide"
              key={4}
            >
              <motion.article whileHover={{ scale: 1.05 }}>
                {" "}
                <img src={countries} alt="" />
                <h4>Countries App</h4>
              </motion.article>
            </a>
            <Link to="/calc" className="course-slide" key={5}>
              <motion.article whileHover={{ scale: 1.05 }}>
                {" "}
                <img src={calculadora} alt="" />
                <h3>Calculator</h3>
              </motion.article>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectLinks;
