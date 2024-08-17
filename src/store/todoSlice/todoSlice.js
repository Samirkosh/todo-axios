import { createSlice } from "@reduxjs/toolkit";
import { getAllTodo } from "../thunk/todoThunks";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    isLoading: false,
    isError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTodo.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllTodo.rejected, (state) => {
        state.isLoading = false;
        state.isError = "Что-то пошло не так";
      });
  },
});

export const {} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
