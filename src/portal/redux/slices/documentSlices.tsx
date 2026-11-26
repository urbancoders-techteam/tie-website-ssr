// @ts-nocheck
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getDocumentsAsync, getUploadedDocumentsAsync, uploadDocumentAsync } from "../services/documentServices";

const initialState = {
  loading :{
    documents: false,
    uploadedDocuments: false,
    uploadDocuments: false,
  },    
  isSubmitting: false,    
  alert: {                
    type: "",
    message: "",
  },
  documents:{},    
  uploadedDocuments:{}       
};

const documentSlice = createSlice({
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
    builder.addMatcher(isAnyOf(getDocumentsAsync.pending), (state) => {
      state.loading.documents = true;
    });
    builder.addMatcher(isAnyOf(getDocumentsAsync.fulfilled), (state, { payload }) => {
      state.loading.documents = false;
      state.documents = payload?.data?.documents || {};
    });
    builder.addMatcher(isAnyOf(getDocumentsAsync.rejected), (state) => {
      state.loading.documents = false;
    });

    builder.addMatcher(isAnyOf(getUploadedDocumentsAsync.pending), (state) => {
      state.loading.uploadedDocuments = true;
    });
    builder.addMatcher(isAnyOf(getUploadedDocumentsAsync.fulfilled), (state, { payload }) => {
      state.loading.uploadedDocuments = false;
      state.uploadedDocuments = payload?.data?.documents || {};
    });
    builder.addMatcher(isAnyOf(getUploadedDocumentsAsync.rejected), (state) => {
      state.loading.uploadedDocuments = false;
    });

    builder.addMatcher(isAnyOf(uploadDocumentAsync.pending), (state) => {
      state.loading.uploadDocuments = true;
    });
    builder.addMatcher(isAnyOf(uploadDocumentAsync.fulfilled), (state, { payload }) => {
      state.loading.uploadDocuments = false;
    });
    builder.addMatcher(isAnyOf(uploadDocumentAsync.rejected), (state) => {
      state.loading.uploadDocuments = false;
    });
  },
});

export const { clearAlert } = documentSlice.actions;
export default documentSlice.reducer;