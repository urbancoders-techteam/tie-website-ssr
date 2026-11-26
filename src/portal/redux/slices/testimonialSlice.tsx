// @ts-nocheck
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getRegulatoryWebAsync,
  getTestimonialWebAsync,
} from "../services/testimonialService";

const initialState = {
  isLoading: false,
  isSubmitting: false,
  alert: {
    type: "",
    message: "",
  },
  testimonial: [],
  regulatory: [],
  isRegulatoryLoading: false,
};

const testimonialSlice = createSlice({
  name: "inventoryUnit",
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
    // Get Country ----------
    builder.addMatcher(
      isAnyOf(getTestimonialWebAsync.pending),
      (state, { payload }) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(getTestimonialWebAsync.fulfilled),
      (state, { payload }) => {
        state.isLoading = false;
        state.alert = {
          type: "success",
          message: "Course data fetched successfully.",
        };
        state.totalCount = payload?.data?.count;
        state.testimonial = payload?.data;
      }
    );
    builder.addMatcher(
      isAnyOf(getTestimonialWebAsync.rejected),
      (state, { payload }) => {
        state.isLoading = false;
        state.alert = {
          type: "error",
          message: "Something went wrong.",
        };
        state.testimonial = [];
      }
    );

    // get regulatory
    builder.addMatcher(
      isAnyOf(getRegulatoryWebAsync.pending),
      (state, { payload }) => {
        state.isRegulatoryLoading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(getRegulatoryWebAsync.fulfilled),
      (state, { payload }) => {
        state.isRegulatoryLoading = false;
        state.regulatory = payload?.data;
      }
    );
    builder.addMatcher(
      isAnyOf(getRegulatoryWebAsync.rejected),
      (state, { payload }) => {
        state.isRegulatoryLoading = false;
        state.regulatory = [];
      }
    );
  },
});

export default testimonialSlice.reducer;
