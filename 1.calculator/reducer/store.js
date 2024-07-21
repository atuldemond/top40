import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "../reducer/calculator";

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});

export default store;
