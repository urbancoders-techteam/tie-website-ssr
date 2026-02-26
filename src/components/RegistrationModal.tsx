/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";
import { baseUrl } from "@/utils/config";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const RegistrationModal = ({ open, onClose }: ModalProps) => {
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
          values,
         
        );

        if (res.data.success) {
          toast.success("Successfully created Unlock Your Dreams");
          formik.resetForm();
          setTimeout(onClose, 100);
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

  useEffect(() => {
    if (!open) return;
  
    // Lock scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  
    // Auto-focus on name input
    const input = document.querySelector<HTMLInputElement>('input[name="name"]');
    input?.focus();
  
    // Cleanup when modal unmounts
    return () => {
      document.body.style.overflow = originalOverflow || "auto";
    };
  }, [open]);
  


  if (!open) return null;



  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-2 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
        >
          &times;
        </button>
        <div>
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
                  <p className="text-red-500 text-sm mt-1 text-left">
                    {formik.errors.name}
                  </p>
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
                  <p className="text-red-500 text-sm mt-1  text-left">
                    {formik.errors.phone}
                  </p>
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
                  <p className="text-red-500 text-sm mt-1  text-left">
                    {formik.errors.email}
                  </p>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
