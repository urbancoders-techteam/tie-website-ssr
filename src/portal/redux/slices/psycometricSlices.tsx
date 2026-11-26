// @ts-nocheck
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getPsychometricTestStatusAsync,
  getUploadedPsychometricDocumentsAsync,
} from "../services/psycometricServices";

const initialState = {
  isLoading: false,
  isSubmitting: false,
  getPsychometricTestStatus: null,
  getUploadedPsychometricDocuments: null,
};

const psychometricSlice = createSlice({
  name: "psychometric",
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
      isAnyOf(getPsychometricTestStatusAsync.pending),
      (state) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(getPsychometricTestStatusAsync.fulfilled),
      (state, { payload }) => {
        state.isLoading = false;
        state.getPsychometricTestStatus = payload?.data || null;
      }
    );
    builder.addMatcher(
      isAnyOf(getPsychometricTestStatusAsync.rejected),
      (state) => {
        state.isLoading = false;
      }
    );

    builder.addMatcher(
      isAnyOf(getUploadedPsychometricDocumentsAsync.pending),
      (state) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(getUploadedPsychometricDocumentsAsync.fulfilled),
      (state, { payload }) => {
        state.isLoading = false;
        state.getUploadedPsychometricDocuments = payload?.data;
      }
    );
    builder.addMatcher(
      isAnyOf(getUploadedPsychometricDocumentsAsync.rejected),
      (state) => {
        state.isLoading = false;
      }
    );

    // builder.addMatcher(isAnyOf(uploadDocumentAsync.pending), (state) => {
    //   state.isLoading = true;
    // });
    // builder.addMatcher(isAnyOf(uploadDocumentAsync.fulfilled), (state, { payload }) => {
    //   state.isLoading = false;
    // });
    // builder.addMatcher(isAnyOf(uploadDocumentAsync.rejected), (state) => {
    //   state.isLoading = false;
    // });
  },
});

export const { clearAlert } = psychometricSlice.actions;
export default psychometricSlice.reducer;
