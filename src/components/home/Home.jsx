import React from "react";
import Content from "../content/Content";
import Profile from "../profile/Profile";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Profile />
      <Content />
    </div>
  );
};

export default Home;
