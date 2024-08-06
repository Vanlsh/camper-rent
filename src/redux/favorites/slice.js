import { createSlice } from "@reduxjs/toolkit";
import { FAVORITES_INITIAL_STATE } from "./initialState";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: FAVORITES_INITIAL_STATE,
  reducers: {},
});

export const favoritesReducer = favoritesSlice.reducer;
