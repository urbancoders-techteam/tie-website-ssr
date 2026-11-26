// @ts-nocheck
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { CreateTableAsync, getCounsellorLogListAsync } from "../services/table";

const initialState = {
  isLoading: false,
  isSubmitting: false,
  getCounsellorLogList: [],
  totalCount: 0,
  rescheduleCount: 0,
};

const counsellorListSlice = createSlice({
  name: "counsellorList",
  initialState,
  reducers: {
    clearAlert(state) {
      state.alert = {
        type: "",
        message: "",
      };
    },
  },
  extraReducers: (builder) => {
    // Fetch get all table data ----------
    builder.addMatcher(isAnyOf(getCounsellorLogListAsync.pending), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      isAnyOf(getCounsellorLogListAsync.fulfilled),
      (state, { payload }) => {
        state.isLoading = false;
        state.getCounsellorLogList = payload?.data?.data || [];
        state.totalCount = payload?.data?.count || 0;
        state.rescheduleCount = payload?.data?.rescheduleCount || 0;
      },
    );
    builder.addMatcher(isAnyOf(getCounsellorLogListAsync.rejected), (state) => {
      state.isLoading = false;
    });

    // Create meeting
    builder.addMatcher(isAnyOf(CreateTableAsync.pending), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      isAnyOf(CreateTableAsync.fulfilled),
      (state, { payload }) => {
        state.isLoading = false;
      },
    );
    builder.addMatcher(isAnyOf(CreateTableAsync.rejected), (state) => {
      state.isLoading = false;
    });
  },
});

export const { clearAlert } = counsellorListSlice.actions;
export default counsellorListSlice.reducer;
