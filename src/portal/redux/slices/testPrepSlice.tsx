// @ts-nocheck
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getBatchListAsync } from "../services/testPrepService";

const initialState = {
  isLoading: false,
  isSubmitting: false,
  batchList: null,
};

const testPrepSlice = createSlice({
  name: "testPrep",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Batch List ----------
    builder.addMatcher(isAnyOf(getBatchListAsync.pending), (state) => {
      state.isLoading = true;
    });

    builder.addMatcher(
      isAnyOf(getBatchListAsync.fulfilled),
      (state, { payload }) => {
        state.isLoading = false;
        state.batchList = payload;
      }
    );

    builder.addMatcher(
      isAnyOf(getBatchListAsync.rejected),
      (state, { payload }) => {
        state.isLoading = false;
        state.batchList = {
          success: false,
          message:
            payload?.message || "Failed to fetch batches. Please try again.",
          data: { batchList: [] },
        };
      }
    );
  },
});

export default testPrepSlice.reducer;
