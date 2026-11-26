// @ts-nocheck
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getAdmissionServiceList,
  getScholarshipList,
} from "../services/admissionService";

const initialState = {
  isLoading: false,
  careerMapCouncellorList: null,
  scholarshipList: null,
  totalCount: null,
};

const admissionServiceSlice = createSlice({
  name: "admissionService",
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
    // Fetch Meetings Actions ----------
    builder.addMatcher(isAnyOf(getAdmissionServiceList.pending), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      isAnyOf(getAdmissionServiceList.fulfilled),
      (state, { payload }) => {
        state.isLoading = false;
        state.careerMapCouncellorList = payload.data;
        state.totalCount = payload.data.count;
      }
    );
    builder.addMatcher(isAnyOf(getAdmissionServiceList.rejected), (state) => {
      state.isLoading = false;
    });

    // scholarship ----------
    builder.addMatcher(isAnyOf(getScholarshipList.pending), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      isAnyOf(getScholarshipList.fulfilled),
      (state, { payload }) => {
        state.isLoading = false;
        state.scholarshipList = payload.data;
        state.totalCount = payload.data.count;
      }
    );
    builder.addMatcher(isAnyOf(getScholarshipList.rejected), (state) => {
      state.isLoading = false;
    });
  },
});

export const { clearAlert } = admissionServiceSlice.actions;
export default admissionServiceSlice.reducer;
