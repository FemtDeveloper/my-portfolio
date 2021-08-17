import React, { useState } from "react";
import "./App.css";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import TodoApp from "./portafolioProjects/todoApp/TodoApp";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Concesionario from "./components/concesionario/Concesionario";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/concesionario">
            <Concesionario />
          </Route>
          <Route path="/todoApp">
            <TodoApp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
