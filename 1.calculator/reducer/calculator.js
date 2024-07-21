import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: [],
  reducers: {
    addResult: (state, action) => {
      state.push(action.payload);
    },
    subtractResult: (state, action) => {
      state.pop(action.payload);
    },
    multiplyResult: (state, action) => {
      state = state.map((item) => item * action.payload);
    },
    divideResult: (state, action) => {
      state = state.map((item) => item / action.payload);
    },
    clearResult: (state) => {
      state = [];
    },
  },
});

export const {
  addResult,
  subtractResult,
  multiplyResult,
  divideResult,
  clearResult,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
