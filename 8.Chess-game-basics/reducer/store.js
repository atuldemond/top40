// src/store/store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

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

const initialState = {
  board: initialBoard,
  currentPlayer: "white",
};

const chessSlice = createSlice({
  name: "chess",
  initialState,
  reducers: {
    movePiece: (state, action) => {
      const { from, to } = action.payload;
      const newBoard = state.board.map((row) => row.slice());
      newBoard[to.row][to.col] = newBoard[from.row][from.col];
      newBoard[from.row][from.col] = null;
      state.board = newBoard;
      state.currentPlayer = state.currentPlayer === "white" ? "black" : "white";
    },
  },
});

export const { movePiece } = chessSlice.actions;

export const store = configureStore({
  reducer: {
    chess: chessSlice.reducer,
  },
});
