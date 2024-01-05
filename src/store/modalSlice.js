import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../helpers/constant";

export const modalThunk = createAsyncThunk(
  "modal/modalThunk",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`${BASE_URL}/todo/${id}.json`);
      if (!response.ok) {
        throw new Error("SERVER ERROR");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    data: null,
    isOpen: false,
  },
  reducers: {
    openHandler(state, action) {
      state.isOpen = true;
      state.data = action.payload;
    },
    closeHandler(state, action) {
      state.isOpen = false;
      state.data = null;
    },
  },
});

export const { openHandler, closeHandler } = modalSlice.actions;
