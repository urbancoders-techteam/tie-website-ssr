// @ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosClient from "@/portal/utils/axiosConfig";

// Batch List
export const getBatchListAsync = createAsyncThunk(
  "testimonial/getBatchListAsync",
  async (payload, toolkit) =>
    AxiosClient({
      toolkit,
      url: `batch/student/${payload?.studentId}/batches/${payload?.planId}`,
      method: "get",
    })
);
