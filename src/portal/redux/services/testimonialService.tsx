// @ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosClient from "@/portal/utils/axiosConfig";

// testimonials
export const getTestimonialWebAsync = createAsyncThunk(
  "testimonial/getTestimonialAsync",
  async (params, toolkit) =>
    AxiosClient({
      toolkit,
      url: "testimonial/web",
      method: "post",
      params,
    })
);

// regulatory

export const getRegulatoryWebAsync = createAsyncThunk(
  "regulatory/getRegulatoryWebAsync",
  async (params, toolkit) =>
    AxiosClient({
      toolkit,
      url: "regulatory-bodies/public",
      method: "get",
      params,
    })
);
