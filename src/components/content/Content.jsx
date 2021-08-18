import React from "react";
import ProjectLinks from "../ProjectLinks";
import "./Content.css";

const Content = () => {
  return (
    <div className="content-container">
      <div className="about-container">
        <h2>About me</h2>
        <p>
          I'm a Web Developer focused in Front End Development. I'm an
          enthusiast for work and learning everything about this. I want to grow
          up in knowledge
        </p>
      </div>
      <div className="skill-container">
        <hr />
        <h2>Habilities</h2>
        <ul>
          <li>Teamwork</li>
          <li>Responsable</li>
          <li>Solution Finder</li>
          <li>Fast Learning</li>
          <li>Dedication</li>
        </ul>
        <hr />
      </div>
      <ProjectLinks />
    </div>
  );
};

export default Content;
