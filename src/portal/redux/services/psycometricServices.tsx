// @ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosClient from "@/portal/utils/axiosConfig";

export const getPsychometricTestStatusAsync = createAsyncThunk('PsychometricTest/getPsychometricTestStatusAsync', async (params, toolkit) =>
    AxiosClient({
        toolkit,
        url: '/psychometricTest/pyschometric-status',
        method: 'get',
        params,
    })
);

export const getUploadedPsychometricDocumentsAsync = createAsyncThunk(
  "PsychometricTest/get-document",
  async (toolkit) =>
    AxiosClient({
      toolkit,
      url: "psychometricTest/get-testReport",
      method: "get",
    })
);