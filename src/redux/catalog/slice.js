import { createSlice } from "@reduxjs/toolkit";
import { CATALOG_INITIAL_STATE } from "./initialState";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: CATALOG_INITIAL_STATE,
  reducers: {},
});

export const catalogReducer = catalogSlice.reducer;
