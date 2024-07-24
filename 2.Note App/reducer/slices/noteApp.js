import { createSlice } from "@reduxjs/toolkit";

const noteApp = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const { title, description } = action.payload;
      if (title && description) {
        const newTodo = { ...action.payload, id: Date.now(), completed: false };
        state.push(newTodo);
      }
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    },
    completeTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: true } : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo, completeTodo } =
  noteApp.actions;
export default noteApp.reducer;
