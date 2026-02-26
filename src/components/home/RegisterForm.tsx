/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";
import { baseUrl } from "@/utils/config";

const RegisterForm = ({
  brochureUrl,
  showBrochure = false,
}: {
  brochureUrl?: any;
  showBrochure?: boolean;
}) => {
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    phone: yup
      .string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema,
    onSubmit: async (values: any) => {
      setLoading(true);
      try {
        const res = await axios.post(
          `${baseUrl}student/schedule-meeting`,
          values
        );

        if (res.data.success) {
          toast.success("Successfully created Unlock Your Dreams");
          setShowDownloadButton(true);
        } else {
          toast.error("Failed to schedule meeting");
          formik.resetForm();
        }
      } catch (err: any) {
        toast.error(err?.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    },
  });

  const handleDownloadBrochure = () => {
    if (brochureUrl) {
      window.open(brochureUrl, "_blank");
    }
  };

  return (
    <div className="sm:w-full md:w-72 bg-white rounded-lg shadow-md md:absolute md:top-[14%] md:left-[56%]">
      <h2 className="text-center text-white bg-[#00999E] font-semibold text-lg py-3 rounded-t-md">
        Register Now
      </h2>

      <form onSubmit={formik.handleSubmit} className="mt-5 grid gap-4  p-6">
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            {...formik.getFieldProps("name")}
            className={`w-full border ${
              formik.touched.name && formik.errors.name
                ? "border-red-500"
                : "border-gray-300"
            } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00999E]`}
          />
          {formik.touched.name &&
            formik.errors.name &&
            typeof formik.errors.name === "string" && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
        </div>

        <div>
          <input
            type="tel"
            maxLength={10}
            placeholder="Enter 10-digit number"
            {...formik.getFieldProps("phone")}
            className={`w-full border ${
              formik.touched.phone && formik.errors.phone
                ? "border-red-500"
                : "border-gray-300"
            } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00999E]`}
          />
          {formik.touched.phone &&
            formik.errors.phone &&
            typeof formik.errors.phone === "string" && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
            )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Enter your email"
            {...formik.getFieldProps("email")}
            className={`w-full border ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-gray-300"
            } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00999E]`}
          />
          {formik.touched.email &&
            formik.errors.email &&
            typeof formik.errors.email === "string" && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`bg-[#00999E] text-white font-medium py-2 rounded hover:bg-[#007a7e] transition-all duration-200 ${
            loading ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Submitting..." : "Schedule A Meeting"}
        </button>

        {showDownloadButton && showBrochure && (
          <button
            type="button"
            onClick={handleDownloadBrochure}
            className="bg-[#00999E] text-white font-medium py-2 rounded hover:bg-[#007a7e] transition-all duration-200"
          >
            Download Brochure
          </button>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
