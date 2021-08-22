import React from "react";
import Content from "../content/Content";
import Profile from "../profile/Profile";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <a href="#Top" className="top-button">
        <i className="fas fa-arrow-alt-circle-up"></i>
      </a>
      <Profile />
      <Content />
    </div>
  );
};

export default Home;
