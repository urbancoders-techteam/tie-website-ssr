// @ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosClient from "@/portal/utils/axiosConfig";

export const getDocumentsAsync = createAsyncThunk(
  "document-management/get-web",
  async (_, toolkit) =>
    AxiosClient({
      toolkit,
      url: "document-management/get-web",
      method: "get",
    })
);

export const getUploadedDocumentsAsync = createAsyncThunk(
  "student-document-management/student-documents",
  async (_, toolkit) =>
    AxiosClient({
      toolkit,
      url: "student-document-management/student-documents",
      method: "get",
    })
);

export const uploadDocumentAsync = createAsyncThunk(
  "student-document-management/upload-document",
  async (data, toolkit) =>
    AxiosClient({
      toolkit,
      url: "student-document-management/upload-document",
      method: "post",
      data: data,
    })
);
