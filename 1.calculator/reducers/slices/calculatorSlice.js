import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expression: [],
  result: null,
  display: "",
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    number: (state, action) => {
      state.expression.push(action.payload);
      state.display = state.expression.join("");
    },
    operator: (state, action) => {
      state.expression.push(action.payload);
      state.display = state.expression.join("");
    },
    back: (state) => {
      state.expression.pop();
      state.display = state.expression.join("");
    },
    equal: (state) => {
      try {
        state.result = eval(state.expression.join(""));
        state.display = state.result.toString();
      } catch (error) {
        state.result = "Error";
        state.display = "Error";
      }
    },
    clear: (state) => {
      state.expression.length = 0;
      state.result = null;
      state.display = "";
    },
  },
});

export const { number, operator, equal, back, clear } = calculatorSlice.actions;

export default calculatorSlice.reducer;
