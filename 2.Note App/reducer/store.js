import { configureStore } from "@reduxjs/toolkit";
import noteApp, {
  addTodo,
  removeTodo,
  completeTodo,
  updateTodo,
} from "../reducer/slices/noteApp";

export const store = configureStore({
  reducer: {
    todo: noteApp,
  },
});
