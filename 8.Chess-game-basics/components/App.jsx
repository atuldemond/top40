// src/App.jsx
import React from "react";
import { Provider } from "react-redux";
import { store } from "../reducer/store";
import Board from "./Board";

const App = () => {
  return (
    <Provider store={store}>
      <div className="h-screen flex items-center justify-center bg-red-300">
        <Board />
      </div>
    </Provider>
  );
};

export default App;
