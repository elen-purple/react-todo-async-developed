import { createSlice, nanoid } from "@reduxjs/toolkit";
import {
  fetchTasks,
  postTask,
  deleteTask,
  toggleCompleted,
  changeTask,
} from "./operations";

const tasksInitialState = { items: [], isLoading: false, error: null };

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(postTask.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
      })
      .addCase(postTask.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.error = null;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.items[
          state.items.indexOf(
            state.items.find((item) => item.id === action.payload),
          )
        ].completed =
          !state.items[
            state.items.indexOf(
              state.items.find((item) => item.id === action.payload),
            )
          ].completed;
      })
      .addCase(toggleCompleted.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(changeTask.fulfilled, (state, action) => {
        state.error = null;
        state.items = action.payload;
      })
      .addCase(changeTask.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
