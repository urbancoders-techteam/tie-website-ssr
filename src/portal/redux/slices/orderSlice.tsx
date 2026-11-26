// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import {
  getOrderListAsync,
  getOrderDetailById,
} from "../services/orderService";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    listOrder: [],
    totalPages: 1,
    isLoading: false,
    error: null,
    orderDetail: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderListAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderListAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        const { listOrder = [], totalPages = 1 } = action.payload?.data || {};
        state.listOrder = listOrder;
        state.totalPages = totalPages;
      })
      .addCase(getOrderListAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to fetch orders";
      })

      .addCase(getOrderDetailById.pending, (state) => {
        state.isLoading = true;
        state.orderDetail = null;
      })
      .addCase(getOrderDetailById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderDetail = action.payload?.data;
      })
      .addCase(getOrderDetailById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to fetch order detail";
      });
  },
});

export default orderSlice.reducer;
