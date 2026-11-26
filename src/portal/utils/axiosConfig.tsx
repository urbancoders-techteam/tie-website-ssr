// @ts-nocheck
// src/utils/axios.js
import axios from "axios";
import { showSnackbar } from "@/portal/utils/SnackbarUtils";

let sessionExpired = false;

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    const message =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      "Something went wrong";

    const unauthorized =
      status === 401 || String(message).toLowerCase().includes("unauthorized");

    if (unauthorized) {
      // Several dashboard requests fail together when the token is missing or
      // expired. Redirect once instead of stacking snackbars and error overlays.
      if (!sessionExpired) {
        sessionExpired = true;
        showSnackbar(message, "error");
        sessionStorage.clear();
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }

    if (error?.config?.skipGlobalError) {
      return Promise.reject(error);
    }

    showSnackbar(message, "error");

    return Promise.reject(error);
  }
);

const AxiosClient = async ({
  method = "get",
  url,
  data,
  params,
  headers = {},
  toolkit,
}) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
      params,
      headers,
    });

    return response.data;
  } catch (error) {
    if (toolkit?.rejectWithValue) {
      return toolkit.rejectWithValue(
        error?.response?.data || { message: "Unexpected error" }
      );
    }
    throw error;
  }
};

export { axiosInstance };
export default AxiosClient;
