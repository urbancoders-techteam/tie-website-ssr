// @ts-nocheck
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getResourceDocuments } from "../services/resourceService";

const initialState = {
  loading: false,
  isSubmitting: false,
  alert: {
    type: "",
    message: "",
  },
  documents: {},
};

const documentSlice = createSlice({
  name: "resources",
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
    builder.addMatcher(isAnyOf(getResourceDocuments.pending), (state) => {
      state.loading = true;
    });
    builder.addMatcher(
      isAnyOf(getResourceDocuments.fulfilled),
      (state, { payload }) => {
        state.loading = false;
        state.documents = payload?.data;
      }
    );
    builder.addMatcher(isAnyOf(getResourceDocuments.rejected), (state) => {
      state.loading = false;
    });
  },
});

export const { clearAlert } = documentSlice.actions;
export default documentSlice.reducer;
