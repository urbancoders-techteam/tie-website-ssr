// @ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosClient from "@/portal/utils/axiosConfig";


export const getPsychometricTestStatusAsync = createAsyncThunk(
  "psychometric-test/status",
  async (_, toolkit) =>
    AxiosClient({
      toolkit,
      url: "psychometricTest/pyschometric-status",
      method: "get",
    })
);

export const uploadPsychometricDocumentAsync = createAsyncThunk(
  "psychometric-test/post-document",
  async (data, toolkit) =>
    AxiosClient({
      toolkit,
      url: "psychometricTest/upload",
      method: "post",
      data: data
    })
);
