import { createSlice } from "@reduxjs/toolkit";
import { CATALOG_INITIAL_STATE } from "./initialState";
import { getCampers } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: CATALOG_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getCampers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const campersReducer = campersSlice.reducer;
