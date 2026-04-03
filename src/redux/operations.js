import axios from "axios";
import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://69b54967be587338e7157eb2.mockapi.io/";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const postTask = createAsyncThunk(
  "tasks/postTask",
  async (text, thunkAPI) => {
    try {
      await axios.post("/tasks", { text, completed: false });
      const response = await axios.get("/tasks");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/tasks/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const toggleCompleted = createAsyncThunk(
  "tasks/toogleCompleted",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/tasks/${id}`);
      await axios.put(`/tasks/${id}`, {
        ...response.data,
        completed: !response.data.completed,
      });
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const changeTask = createAsyncThunk(
  "tasks/changeTask",
  async ({ id, text }, thunkAPI) => {
    try {
      const response = await axios.get(`/tasks/${id}`);
      await axios.put(`/tasks/${id}`, {
        ...response.data,
        text,
      });
      const response2 = await axios.get("/tasks");
      return response2.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
