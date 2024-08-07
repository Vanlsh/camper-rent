import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchCampers } from "../../api/catalog";

export const getCampers = createAsyncThunk(
  "campers/getCampers",
  async (params, thunkAPI) => {
    try {
      const res = await fetchCampers(params);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// export const getMoreCampers = createAsyncThunk(
//   "campers/getMoreCampers",
//   async (params, thunkAPI) => {
//     try {
//       const res = await fetchCampers(params);
//       return res.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err);
//     }
//   }
// );
