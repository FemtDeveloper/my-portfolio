import React from "react";
import "./Profile.css";
import profilePicture from "./../../imgs/profilePicture.jpeg";

const Profile = () => {
  return (
    <div className="profile-container">
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
    </div>
  );
};

export default Profile;
