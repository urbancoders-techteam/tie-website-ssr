// @ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosClient from "@/portal/utils/axiosConfig";

export const getCareerMapCouncellorListAsync = createAsyncThunk(
  "careerMap/get-web",
  async (data, toolkit) =>
    AxiosClient({
      toolkit,
      url: "university-sort-listing/getOne",
      method: "post",
      data,
    })
);

export const getCareerMapStudentListAsync = createAsyncThunk(
  "careerMap/get-student-web",
  async (data, toolkit) =>
    AxiosClient({
      toolkit,
      url: "university-sort-listing/getOne-student",
      method: "post",
      data,
    })
);

export const createCareerMapAsync = createAsyncThunk(
  "careerMap/post",
  async (data, toolkit) =>
    AxiosClient({
      toolkit,
      url: "university-sort-listing/create",
      method: "post",
      data: data,
    })
);
