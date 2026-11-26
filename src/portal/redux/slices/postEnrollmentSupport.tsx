// @ts-nocheck
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getEnrollmentSupportByTokenAsync,
  postEnrollmentSupportAsync,
} from "../services/postEnrollmentServices";

const initialState = {
  isLoading: false,
  getEnrollmentSupportByToken: {},
  isSubmitting: false,
};

const enrollmentSupportSlice = createSlice({
  name: "enrollmentSupport",
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
      isAnyOf(getEnrollmentSupportByTokenAsync.pending),
      (state) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(getEnrollmentSupportByTokenAsync.fulfilled),
      (state, { payload }) => {
        state.isLoading = false;
        state.getEnrollmentSupportByToken = payload?.data || {};
      }
    );
    builder.addMatcher(
      isAnyOf(getEnrollmentSupportByTokenAsync.rejected),
      (state) => {
        state.isLoading = false;
      }
    );

    builder.addMatcher(isAnyOf(postEnrollmentSupportAsync.pending), (state) => {
      state.isSubmitting = true;
    });
    builder.addMatcher(
      isAnyOf(postEnrollmentSupportAsync.fulfilled),
      (state, { payload }) => {
        state.isSubmitting = false;
      }
    );
    builder.addMatcher(
      isAnyOf(postEnrollmentSupportAsync.rejected),
      (state) => {
        state.isSubmitting = false;
      }
    );
  },
});

export const { clearAlert } = enrollmentSupportSlice.actions;
export default enrollmentSupportSlice.reducer;
