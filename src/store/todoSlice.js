import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../helpers/constant";

export const postItem = createAsyncThunk(
  "todo/postItem",
  async function (item, { rejectWithValue, dispatch }) {
    const itemDataPost = {
      email: item.email,
      password: item.password,
      completed: false,
    };

    try {
      const response = await fetch(`${BASE_URL}/todo.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemDataPost),
      });

      if (!response.ok) {
        throw new Error("SERVER ERROR");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    baseData: [],
    error: null,
    status: null,
  },
  reducers: {},
  extraReducers() {},
});
