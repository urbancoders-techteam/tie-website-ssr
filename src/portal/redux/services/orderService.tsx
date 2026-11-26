// @ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosClient from "@/portal/utils/axiosConfig";

export const getOrderListAsync = createAsyncThunk(
  "event/getOrderListAsync",
  async ({ pageNumber, limit }, toolkit) =>
    AxiosClient({
      toolkit,
      url: `order/list-order-student?page=${pageNumber}&limit=${limit}`,
      method: "get",
    })
);

// Get order by ID
export const getOrderDetailById = createAsyncThunk(
  "order/getOrderDetailById",
  async (orderId, toolkit) =>
    AxiosClient({
      toolkit,
      url: `order/order-detail-student/${orderId}`,
      method: "get",
    })
);
