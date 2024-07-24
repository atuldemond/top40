import { configureStore } from "@reduxjs/toolkit";

import { equal, number, clear, back, operator } from "./slices/calculatorSlice";
import calculatorSlice from "./slices/calculatorSlice";
export const store = configureStore({
  reducer: {
    calulator: calculatorSlice,
  },
});

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(number(1));
store.dispatch(number(2));
store.dispatch(number(3));
store.dispatch(operator("*"));
store.dispatch(number(4));
store.dispatch(number(5));
store.dispatch(back());
// store.dispatch(equal());
// store.dispatch(clear());
