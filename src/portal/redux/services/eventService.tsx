// @ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosClient from "@/portal/utils/axiosConfig";

export const getEventWebAsync = createAsyncThunk('event/getEventAsync', async (params, toolkit) =>
  AxiosClient({
    toolkit,
    url: 'event/web',
    method: 'post',
    params,
  })
);