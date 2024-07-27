import React from "react";
import GameBoard from "./GameBoard";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-200">
      <div className="container">
        <h1 className="text-3xl font-bold text-center mb-8">
          Memory Matching Game
        </h1>
        <GameBoard />
      </div>
    </div>
  );
};

export default App;
