import { configureStore } from "@reduxjs/toolkit";
import todoList from "../src/redux/reducer/todoListReducer";

export const store = configureStore({
  reducer: {
    todoList,
  },
});
