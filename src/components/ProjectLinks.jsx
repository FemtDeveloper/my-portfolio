import React from "react";
import { Link } from "react-router-dom";
import Concesionario from "./../imgs/concesionario.png";

const ProjectLinks = () => {
  return (
    <>
      <div className="projects-container">
        <Link to="/concesionario">
          <article>
            <img src={Concesionario} alt="" />
            <h3>Concesionario</h3>
          </article>
        </Link>
        <Link to="/todoApp">
          <article>
            <img src={Concesionario} alt="" />
            <h3>Todo App</h3>
          </article>
        </Link>
      </div>
    </>
  );
};

export default ProjectLinks;
