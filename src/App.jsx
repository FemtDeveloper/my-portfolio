import React, { useState } from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import Calc from "./portafolioProjects/calc/Calc";
import TodoApp from "./portafolioProjects/todoApp/TodoApp";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/todoApp">
            <TodoApp />
          </Route>
          <Route path="/calc">
            <Calc />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
