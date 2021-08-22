import React, { useState } from "react";
import "./App.css";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import TodoApp from "./portafolioProjects/todoApp/TodoApp";
import Home from "./components/home/Home";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
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
