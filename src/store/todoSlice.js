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

export const getItem = createAsyncThunk(
  "todo/getItem",
  async function (_, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`${BASE_URL}/todo.json`);
      const data = await response.json();
      const transformData = [];
      for (let key in data) {
        transformData.push({
          id: key,
          email: data[key].email,
          password: data[key].password,
        });
      }
      return transformData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteItem = createAsyncThunk(
  "todo/deleteItem",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`${BASE_URL}/todo/${id}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("server error");
      }
      dispatch(deleteHandler(id));
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
  reducers: {
    deleteHandler(state, action) {
      state.baseData = state.baseData.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
  extraReducers(buldier) {
    buldier
      .addCase(getItem.pending, (state, action) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(getItem.fulfilled, (state, action) => {
        state.baseData = action.payload;
        state.status = "resolved";
      })
      .addCase(getItem.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "rejected";
      });
  },
});

export const { deleteHandler } = todoSlice.actions;
