// @ts-nocheck
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  createProfileBuildingAsync,
  createStudyAbroadPurchaseAsync,
  getPlanStatusForHomePageAsync,
  getProfileBuildingAsync,
  getStudyAbroadStatusAsync,
  updateProfileBuildingAsync,
  verifyPurchaseStudyAbroadAsync,
} from "../services/studyAbroadServices";

const initialState = {
  isLoading: false,
  isSubmitting: false,
  verifyPurchaseStudyAbroad: {},
  getPlanStatusForHomePage: {},
  isProfileCreated: false,
  profileData: null,
};

const studyAbroadSlice = createSlice({
  name: "studyAbroad",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Create Study Abroad Purchase Actions ----------
    builder.addMatcher(
      isAnyOf(createStudyAbroadPurchaseAsync.pending),
      (state) => {
        state.isSubmitting = true;
      }
    );
    builder.addMatcher(
      isAnyOf(createStudyAbroadPurchaseAsync.fulfilled),
      (state, { payload }) => {
        state.isSubmitting = false;
      }
    );
    builder.addMatcher(
      isAnyOf(createStudyAbroadPurchaseAsync.rejected),
      (state) => {
        state.isSubmitting = false;
      }
    );

    // Fetch Meetings Actions ----------
    builder.addMatcher(
      isAnyOf(verifyPurchaseStudyAbroadAsync.pending),
      (state) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(verifyPurchaseStudyAbroadAsync.fulfilled),
      (state, { payload }) => {
        state.isLoading = false;
        state.verifyPurchaseStudyAbroad = payload?.data || {};
      }
    );
    builder.addMatcher(
      isAnyOf(verifyPurchaseStudyAbroadAsync.rejected),
      (state) => {
        state.isLoading = false;
      }
    );

    // Fetch Meetings Actions ----------
    builder.addMatcher(
      isAnyOf(getPlanStatusForHomePageAsync.pending),
      (state) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(getPlanStatusForHomePageAsync.fulfilled),
      (state, { payload }) => {
        state.isLoading = false;
        state.getPlanStatusForHomePage = payload?.data || {};
      }
    );
    builder.addMatcher(
      isAnyOf(getPlanStatusForHomePageAsync.rejected),
      (state) => {
        state.isLoading = false;
      }
    );

    // get profile building
    builder.addMatcher(isAnyOf(getProfileBuildingAsync.pending), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      isAnyOf(getProfileBuildingAsync.fulfilled),
      (state, { payload }) => {
        state.isLoading = false;

        if (payload?.success && payload?.data) {
          state.profileData = payload?.data;
          state.isProfileCreated = true;
        } else {
          state.profileData = null;
        }
      }
    );

    builder.addMatcher(isAnyOf(getProfileBuildingAsync.rejected), (state) => {
      state.isLoading = false;
      state.profileData = null;
    });
    // create profile building
    builder.addMatcher(isAnyOf(createProfileBuildingAsync.pending), (state) => {
      state.isSubmitting = true;
    });
    builder.addMatcher(
      isAnyOf(createProfileBuildingAsync.fulfilled),
      (state, { payload }) => {
        state.isSubmitting = false;
        state.isProfileCreated = true;
      }
    );
    builder.addMatcher(
      isAnyOf(createProfileBuildingAsync.rejected),
      (state) => {
        state.isSubmitting = false;
        state.isProfileCreated = false;
      }
    );
    // update profile building
    builder.addMatcher(isAnyOf(updateProfileBuildingAsync.pending), (state) => {
      state.isSubmitting = true;
    });
    builder.addMatcher(
      isAnyOf(updateProfileBuildingAsync.fulfilled),
      (state, { payload }) => {
        state.isSubmitting = false;
      }
    );
    builder.addMatcher(
      isAnyOf(updateProfileBuildingAsync.rejected),
      (state) => {
        state.isSubmitting = false;
      }
    );

    // Get study abroad status
    builder.addMatcher(isAnyOf(getStudyAbroadStatusAsync.pending), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      isAnyOf(getStudyAbroadStatusAsync.fulfilled),
      (state, { payload }) => {
        state.isLoading = false;
        state.dashboardData = payload?.data;
      }
    );

    builder.addMatcher(isAnyOf(getStudyAbroadStatusAsync.rejected), (state) => {
      state.isLoading = false;
      state.dashboardData = null;
    });
  },
});

export const { clearAlert } = studyAbroadSlice.actions;
export default studyAbroadSlice.reducer;
