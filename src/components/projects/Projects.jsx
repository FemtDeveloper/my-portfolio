import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ProjectLinks from "../ProjectLinks";
import "./Projects.css";

const Projects = () => {
  return (
    <Router>
      <Switch>
        <Route path="/concesionario"></Route>
      </Switch>
    </Router>
  );
};

export default Projects;
