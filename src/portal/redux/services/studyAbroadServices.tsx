// @ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosClient from "@/portal/utils/axiosConfig";

export const verifyPurchaseStudyAbroadAsync = createAsyncThunk(
  "studyAbroad/verifyPurchaseStudyAbroadAsync",
  async (data, toolkit) =>
    AxiosClient({
      toolkit,
      url: "payment/verify-study-abroad-payment",
      method: "post",
      data,
    }),
);

export const createStudyAbroadPurchaseAsync = createAsyncThunk(
  "studyAbroad/createStudyAbroadPurchaseAsync",
  async (data, toolkit) =>
    AxiosClient({
      toolkit,
      url: "/study-abroad-order/create",
      method: "post",
      data: data,
    }),
);
export const getPlanStatusForHomePageAsync = createAsyncThunk(
  "studyAbroad/getPlanStatusForHomePageAsync",
  async (toolkit) =>
    AxiosClient({
      toolkit,
      url: "student/engagement-status",
      method: "get",
    }),
);

// 🔹 Get Profile
export const getProfileBuildingAsync = createAsyncThunk(
  "profile/getProfileBuildingAsync",
  async (_, toolkit) =>
    AxiosClient({
      toolkit,
      url: "profile-building/getProfileBuilding",
      method: "get",
    }),
);

// 🔹 Create Profile
export const createProfileBuildingAsync = createAsyncThunk(
  "studyAbroad/createProfileAsync",
  async (data, toolkit) =>
    AxiosClient({
      toolkit,
      url: "profile-building/create",
      method: "post",
      data,
    }),
);

// 🔹 Update Profile
export const updateProfileBuildingAsync = createAsyncThunk(
  "studyAbroad/updateProfileAsync",
  async (data, toolkit) =>
    AxiosClient({
      toolkit,
      url: "profile-building/update",
      method: "put",
      data,
    }),
);

// get status and chart values

export const getStudyAbroadStatusAsync = createAsyncThunk(
  "profile/getStudyAbroadStatusAsync",
  async (_, toolkit) =>
    AxiosClient({
      toolkit,
      url: "/study-aboard/get-status",
      method: "get",
    }),
);
