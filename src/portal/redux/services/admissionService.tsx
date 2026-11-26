// @ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosClient from "@/portal/utils/axiosConfig";

export const getAdmissionServiceList = createAsyncThunk(
  "careerMap/getAdmissionServiceList",
  async (data, toolkit) =>
    AxiosClient({
      toolkit,
      url: "university-sort-listing/get-shortlisted-universities",
      method: "post",
      data,
    })
);

export const getScholarshipList = createAsyncThunk(
  "careerMap/getScholarshipList",
  async (data, toolkit) =>
    AxiosClient({
      toolkit,
      url: "university-sort-listing/get-scholarship-web",
      method: "post",
      data,
    })
);

export const exportShortlistedUniversities = createAsyncThunk(
  "careerMap/exportShortlistedUniversities",
  async (data, toolkit) =>
    AxiosClient({
      toolkit,
      url: "university-sort-listing/export-shortlisted-universities",
      method: "post",
      data,
    })
);