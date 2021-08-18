import React from "react";
import { Link } from "react-router-dom";
import Concesionario from "./../imgs/concesionario.png";
import todoApp from "./../imgs/todoApp.png";

const ProjectLinks = () => {
  return (
    <>
      <div className="projects-container">
        <a
          href="https://femtdeveloper.github.io/concesionario/"
          target="_blank"
        >
          <article>
            <img src={Concesionario} alt="" />
            <h3>Concesionario</h3>
          </article>
        </a>
        <Link to="/todoApp">
          <article>
            <img src={todoApp} alt="" />
            <h3>Todo App</h3>
          </article>
        </Link>
      </div>
    </>
  );
};

export default ProjectLinks;
