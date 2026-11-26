// @ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosClient from "@/portal/utils/axiosConfig";

export const postEnrollmentSupportAsync = createAsyncThunk(
  "postEnrollmentSupport/postEnrollmentSupport",
  async (data, toolkit) =>
    AxiosClient({
      toolkit,
      url: "post-enrollment-support/create",
      method: "post",
      data,
    })
);

export const getEnrollmentSupportByTokenAsync = createAsyncThunk(
  "postEnrollmentSupport/getEnrollmentSupportByToken",
  async (toolkit) =>
    AxiosClient({
      toolkit,
      url: "post-enrollment-support",
      method: "get",
    })
);
