// @ts-nocheck
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  createCareerMapAsync,
  getCareerMapCouncellorListAsync,
  getCareerMapStudentListAsync,
} from "../services/careerMapService";

const initialState = {
  isCareerMapCouncellorLoading: false,
  isSubmitting: false,
  careerMapCouncellorList: [],
  careerMapStudentList: [],
  isCareerMapStudentLoading: false,
};

const careerMapSlice = createSlice({
  name: "document",
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
    builder.addMatcher(
      isAnyOf(getCareerMapCouncellorListAsync.pending),
      (state) => {
        state.isCareerMapCouncellorLoading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(getCareerMapCouncellorListAsync.fulfilled),
      (state, { payload }) => {
        state.isCareerMapCouncellorLoading = false;
        state.careerMapCouncellorList = payload?.data || [];
      }
    );
    builder.addMatcher(
      isAnyOf(getCareerMapCouncellorListAsync.rejected),
      (state) => {
        state.isCareerMapCouncellorLoading = false;
      }
    );

    // Fetch Meetings Actions ----------
    builder.addMatcher(
      isAnyOf(getCareerMapStudentListAsync.pending),
      (state) => {
        state.isCareerMapStudentLoading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(getCareerMapStudentListAsync.fulfilled),
      (state, { payload }) => {
        state.isCareerMapStudentLoading = false;
        state.careerMapStudentList = payload?.data || [];
      }
    );
    builder.addMatcher(
      isAnyOf(getCareerMapStudentListAsync.rejected),
      (state) => {
        state.isCareerMapStudentLoading = false;
      }
    );

    builder.addMatcher(isAnyOf(createCareerMapAsync.pending), (state) => {
      state.isSubmitting = true;
    });
    builder.addMatcher(
      isAnyOf(createCareerMapAsync.fulfilled),
      (state, { payload }) => {
        state.isSubmitting = false;
      }
    );
    builder.addMatcher(isAnyOf(createCareerMapAsync.rejected), (state) => {
      state.isSubmitting = false;
    });
  },
});

export const { clearAlert } = careerMapSlice.actions;
export default careerMapSlice.reducer;
