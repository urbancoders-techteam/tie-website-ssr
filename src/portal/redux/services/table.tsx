// @ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosClient from "@/portal/utils/axiosConfig";
import { localCounsellingUrl } from "@/portal/Dashboard/Study Abroad/MyProgress.js/ThirdPart/counsellingMeetingUtils";

export const getCounsellorLogListAsync = createAsyncThunk(
  "getCounsellorLogListAsync",
  async (query, data, toolkit) =>
    AxiosClient({
      toolkit,
      url:
        localCounsellingUrl(
          `log?page=${query?.page || 1}&limit=${query?.limit || 10}`,
        ) ||
        `student-personal-counsellor-log/web?page=${query.page}&limit=${query.limit}`,
      method: "get",
      data,
    }),
);

export const CreateTableAsync = createAsyncThunk(
  "CreateTableAsync",
  async (data, toolkit) =>
    AxiosClient({
      toolkit,
      url: localCounsellingUrl("join") || "student-personal-counsellor-log/create",
      method: "post",
      data,
    }),
);

export const DeleteTableAsync = createAsyncThunk(
  "DeleteTableAsync",
  async (data, toolkit) =>
    AxiosClient({
      toolkit,
      url: "university-sort-listing/remove-student-university",
      method: "post",
      data,
    }),
);
