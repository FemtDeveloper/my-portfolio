import React from "react";
import ContactForm from "../contact/ContactForm";
import ProjectLinks from "../ProjectLinks";
import "./Content.css";

const Content = () => {
  return (
    <div className="content-container">
      <div id="portfolio">
        <ProjectLinks />
      </div>
      <div className="about-container" id="about">
        <hr />
        <h2>About me</h2>
        <p>
          I'm a Web Developer focused in Front End Development. I'm an
          enthusiast for work and learning everything about this. I want to grow
          up in knowledge
        </p>
      </div>
      <div className="skill-container" id="skills">
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
      <ContactForm />
    </div>
  );
};

export default Content;
