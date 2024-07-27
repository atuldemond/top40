// src/components/Square.jsx
import React from "react";

const Square = ({ piece, position, onMove }) => {
  const isBlack = (position.row + position.col) % 2 === 1;

  const handleClick = () => {
    // Example move: adjust this as needed for your game logic
    onMove(position, { row: position.row, col: position.col + 1 });
  };

  return (
    <div
      onClick={handleClick}
      className={`w-16 h-16 flex items-center justify-center ${
        isBlack ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {piece && <div className="piece">{piece}</div>}
    </div>
  );
};

export default Square;
