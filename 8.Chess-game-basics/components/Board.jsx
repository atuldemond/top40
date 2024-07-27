// src/components/Board.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { movePiece } from "../reducer/store";
import Square from "./Square";

const initialBoard = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
];

const pieceNames = {
  P: "Pawn",
  R: "Rook",
  N: "Knight",
  B: "Bishop",
  Q: "Queen",
  K: "King",
};

const getPieceName = (piece, isBlack) => {
  if (!piece) return null;
  return isBlack ? `${pieceNames[piece]} (B)` : `${pieceNames[piece]} (W)`;
};

const Board = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.chess.board);

  const handleMove = (from, to) => {
    dispatch(movePiece({ from, to }));
  };

  return (
    <div className="grid grid-cols-8 gap-1 bg-red-300 p-4">
      {board.map((row, rowIndex) =>
        row.map((piece, colIndex) => (
          <Square
            key={`${rowIndex}-${colIndex}`}
            piece={getPieceName(piece, rowIndex < 2)}
            position={{ row: rowIndex, col: colIndex }}
            onMove={handleMove}
          />
        ))
      )}
    </div>
  );
};

export default Board;
