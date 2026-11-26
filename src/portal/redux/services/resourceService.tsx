// @ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosClient from "@/portal/utils/axiosConfig";

export const getResourceDocuments = createAsyncThunk(
  "resources/student",
  async (_, toolkit) =>
    AxiosClient({
      toolkit,
      url: "resources/student",
      method: "get",
    })
);
