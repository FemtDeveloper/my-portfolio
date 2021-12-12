import React, { useState } from "react";
import "./Operation.css";

const Operations = ({ isDarkMode }) => {
  const [result, setResult] = useState("");
  const [calc, setCalc] = useState("");

  const operators = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const handleReset = () => {
    setCalc("");
    setResult("");
  };
  return (
    <>
      <div
        className={!isDarkMode ? "light result-container" : "result-container"}
      >
        <textarea rows="2" type="text" value={calc} placeholder="0" readOnly />
        <input
          type="text"
          className={!isDarkMode ? "result" : "light result"}
          value={`(${result})`}
          placeholder="0"
          readOnly
        />
      </div>
      <div
        className={
          !isDarkMode ? "operations-container light" : "operations-container"
        }
      >
        <div className="btn-container">
          <div className="buttons_numbers-container">
            <button
              className="button numbers"
              value={1}
              name="1"
              onClick={() => updateCalc("1")}
            >
              1
            </button>
            <button
              className="button numbers"
              value={2}
              name="2"
              onClick={() => updateCalc("2")}
            >
              2
            </button>
            <button
              className="button numbers"
              value={3}
              name="3"
              onClick={() => updateCalc("3")}
            >
              3
            </button>
            <button
              className="button numbers"
              value={4}
              name="4"
              onClick={() => updateCalc("4")}
            >
              4
            </button>
            <button
              className="button numbers"
              value={5}
              name="5"
              onClick={() => updateCalc("5")}
            >
              5
            </button>
            <button
              className="button numbers"
              value={6}
              name="6"
              onClick={() => updateCalc("6")}
            >
              6
            </button>
            <button
              className="button numbers"
              value={7}
              name="7"
              onClick={() => updateCalc("7")}
            >
              7
            </button>
            <button
              className="button numbers"
              value={8}
              name="8"
              onClick={() => updateCalc("8")}
            >
              8
            </button>
            <button
              className="button numbers"
              value={9}
              name="9"
              onClick={() => updateCalc("9")}
            >
              9
            </button>
            <button
              className="button numbers"
              value={0}
              name="0"
              onClick={() => updateCalc("0")}
            >
              0
            </button>
            <button
              className="button numbers"
              onClick={() => updateCalc(".")}
              name="."
            >
              .
            </button>
            <button className="button clear" onClick={handleReset}>
              C
            </button>
          </div>
          <div className="btn_operators">
            <button
              className="button operations"
              onClick={() => updateCalc("+")}
            >
              +
            </button>
            <button
              className="button operations"
              onClick={() => updateCalc("-")}
            >
              -
            </button>
            <button
              className="button operations"
              onClick={() => updateCalc("*")}
            >
              x
            </button>
            <button
              className="button operations"
              onClick={() => updateCalc("/")}
            >
              /
            </button>
          </div>
        </div>
        <div className="btn-bottom">
          <button
            className="button bottom operations"
            onClick={() => setCalc(result)}
          >
            =
          </button>
          <button className="button bottom operations" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Operations;
