import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Operations from "./components/Operations";
import "./Calc.css";
import On from "./icons/lightbulb-on.png";
import Off from "./icons/light-bulb-off.png";
import { AiFillHome } from "react-icons/ai";

function Calc() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={isDarkMode ? "Calc Dark" : "Calc Light"}>
      <div className="toHome-container">
        <Link to="/" href="#top">
          <AiFillHome className="toHome" />
        </Link>
        <div className="lightbulb" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <img src={Off} alt="" /> : <img src={On} alt="" />}
        </div>
      </div>
      <main className={isDarkMode ? "Dark-calc" : "Light"}>
        <Operations isDarkMode={isDarkMode} />
      </main>
    </div>
  );
}

export default Calc;
