import { createSlice } from "@reduxjs/toolkit";
import { responseTodoList } from "../../assets/types";

const initialState: responseTodoList[] = [];

const userSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addGroupTodo: (state, action) => {
      state.push(action.payload);
    },

    emptyInitalState: () => {
      return initialState;
    },
  },
});
export const { addGroupTodo, emptyInitalState } = userSlice.actions;
export default userSlice.reducer;
