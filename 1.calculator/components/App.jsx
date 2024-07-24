import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../reducers/store";
import {
  equal,
  number,
  clear,
  back,
  operator,
} from "../reducers/slices/calculatorSlice";
import "../public/css/app.css";
const App = () => {
  const dispatch = useDispatch();
  const { calulator } = useSelector((state) => state);
  console.log("this is display" + calulator.display);
  console.log("this is result" + calulator.result);

  const handleNumber = (num) => {
    dispatch(number(num));
  };

  const handleOperator = (op) => {
    dispatch(operator(op));
  };

  const handleEqual = () => {
    dispatch(equal());
  };

  const handleClear = () => {
    dispatch(clear());
  };

  const handleBack = () => {
    dispatch(back());
  };

  return (
    <>
      <div className="calculator ">
        <div className="display">{calulator.display || "0"}</div>
        <div className="buttons">
          <button onClick={() => handleClear()}>C</button>
          <button onClick={() => handleBack()}>⌫</button>
          <button onClick={() => handleOperator("/")}>/</button>

          <button onClick={() => handleOperator("*")}>*</button>

          <button onClick={() => handleOperator("-")}>-</button>
          <button onClick={() => handleOperator("+")}>+</button>
          <button onClick={() => handleNumber("7")}>7</button>

          <button onClick={() => handleNumber("8")}>8</button>

          <button onClick={() => handleNumber("9")}>9</button>

          <button onClick={() => handleNumber("4")}>4</button>

          <button onClick={() => handleNumber("5")}>5</button>

          <button onClick={() => handleNumber("6")}>6</button>

          <button onClick={() => handleNumber("1")}>1</button>

          <button onClick={() => handleNumber("2")}>2</button>

          <button onClick={() => handleNumber("3")}>3</button>

          <button onClick={() => handleEqual()}>=</button>

          <button onClick={() => handleNumber("0")} className="zero">
            0
          </button>
          <button onClick={() => handleNumber(".")}>.</button>
        </div>
      </div>
    </>
  );
};

export default App;
