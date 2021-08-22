import React from "react";
import "./Profile.css";
import profilePicture from "./../../imgs/profilePicture.jpeg";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="fixed-profiled--container">
        <figure>
          <img
            src={profilePicture}
            alt="profile picture"
            className="profilePicture"
          />
        </figure>
        <h2 className="profileName">Felix E Miranda T</h2>
        <h3>Front-End Developer</h3>
        <h5>Birth City: Barranquilla, Col</h5>
        <h5>Residence City: Bogota, Col</h5>
        <h5>Email: feedmite@hotmail.com</h5>
        <h5>Tel: 3507107300</h5>
        <h5>
          Github:{" "}
          <a href="https://github.com/FemtDeveloper" target="_blank">
            https://github.com/FemtDeveloper
          </a>
        </h5>
        <h5>
          LinkedIn:{" "}
          <a href="www.linkedin.com/in/fmirandat" target="_blank">
            www.linkedin.com/in/fmirandat
          </a>
        </h5>
      </div>
    </div>
  );
};

export default Profile;
