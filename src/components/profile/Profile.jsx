import React from "react";
import { motion } from "framer-motion";
import "./Profile.css";
import profilePicture from "./../../imgs/profilePicture.jpeg";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="fixed-profiled--container">
        <figure>
          <motion.img
            src={profilePicture}
            alt="profile picture"
            className="profilePicture"
            whileHover={{ scale: 1.2 }}
          />
        </figure>
        <h2 className="profileName">Felix E Miranda T</h2>
        <h3>Front-End Developer</h3>
        <h5>Birth City: Barranquilla, Col</h5>
        <h5>Residence City: Bogota, Col</h5>
        <h5>Email: feedmite@hotmail.com</h5>
        <h5>Tel: 3507107300</h5>
        <motion.h5
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          Github:{" "}
          <motion.a
            href="https://github.com/FemtDeveloper"
            target="_blank"
            whileHover={{ color: "rgb(0,0,255)" }}
          >
            https://github.com/FemtDeveloper
          </motion.a>
        </motion.h5>
        <motion.h5
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          LinkedIn:{" "}
          <motion.a
            href="https://www.linkedin.com/in/fmirandat/"
            target="_blank"
            whileHover={{ color: "rgb(0,0,255)" }}
          >
            www.linkedin.com/in/fmirandat
          </motion.a>
        </motion.h5>
        <a
          // href="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2FFelix_Miranda_FullStack_Developer.pdf?alt=media&token=a402b81b-f6e2-4a90-a9f7-3ab7e2f8bb56"
          className="download"
          href="/resume.pdf"
          // href={resume}
          download="Felix_Miranda_FullStack_Developer.pdf"
          target="_blank"
        >
          CV Download
        </a>
      </div>
    </div>
  );
};

export default Profile;
