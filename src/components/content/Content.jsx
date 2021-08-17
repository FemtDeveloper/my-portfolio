import React from "react";
import ProjectLinks from "../ProjectLinks";
import Projects from "../projects/Projects";
import "./Content.css";

const Content = () => {
  return (
    <div className="content-container">
      <div className="about-container">
        <h2>About me</h2>
        <hr />
        <p>
          I'm a Web Developer focused in Front End Development. I'm an
          enthusiast for work and learning everything about this. I want to grow
          up in knowledge
        </p>
      </div>
      <div className="skill-container">
        <h2>Habilities</h2>
        <hr />
        <ul>
          <li>Teamwork</li>
          <li>Responsable</li>
          <li>Solution Finder</li>
          <li>Fast Learning</li>
          <li>Dedication</li>
        </ul>
      </div>
      <ProjectLinks />
    </div>
  );
};

export default Content;
