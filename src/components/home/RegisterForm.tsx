/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { baseUrl } from "@/utils/config";

/** Last path segment only, e.g. `/mbbs/abroad/georgia` → `georgia` */
function getPathEndpoint(): string {
  if (typeof window === "undefined") return "";
  const parts = window.location.pathname.split("/").filter(Boolean);
  return parts.length > 0 ? parts[parts.length - 1]! : "";
}

const RegisterForm = ({
  brochureUrl,
  showBrochure = false,
  floating = true,
  variant = "light",
}: {
  brochureUrl?: any;
  showBrochure?: boolean;
  floating?: boolean;
  variant?: "light" | "dark";
}) => {
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
    city: yup.string().required("City is required"),
    message: yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values: any) => {
      setLoading(true);
      try {
        const res = await axios.post(`${baseUrl}student/schedule-meeting`, values);

        if (res.data.success) {
          const source = window.location.href;
          const time = new Date().toLocaleString();

          try {
            const neodoveUrl = process.env.NEXT_PUBLIC_NEODOVE_LEADS_URL;
            if (!neodoveUrl) {
              console.warn("NEXT_PUBLIC_NEODOVE_LEADS_URL is not set");
            } else {
              await axios.post(
                neodoveUrl,
                {
                  name: values.name,
                  mobile: parseInt(values.phone, 10),
                  email: values.email,
                  detail1: values.message,
                  detail2: `${source} | ${time}`,
                  location: getPathEndpoint(),
                },
                { headers: { "Content-Type": "application/json" } }
              );
            }
          } catch (neodoveErr) {
            console.error("Neodove lead sync failed", neodoveErr);
          }

          const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
          const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
          const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

          if (serviceId && templateId && publicKey) {
            try {
              await emailjs.send(
                serviceId,
                templateId,
                { ...values, from_name: "TIE", source, time },
                { publicKey }
              );
            } catch {
              // Email is best-effort; don't block form success flow.
            }
          }

          toast.success("Successfully created Unlock Your Dreams");
          setShowDownloadButton(true);
          formik.resetForm();
          router.push("/thankyou");
        } else {
          toast.error("Failed to schedule meeting");
          formik.resetForm();
        }
      } catch (error: unknown) {
        const err = error as { response?: { data?: { message?: string } } };
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
    <div
      className={[
        variant === "dark"
          ? "w-full bg-[#0B162C] rounded-2xl border border-white/10"
          : "sm:w-full md:w-80 bg-white rounded-[20px] shadow-md border-[1px] border-[#00999E]",
        floating ? "md:absolute md:top-[14%] md:left-[56%]" : "md:static",
      ].join(" ")}
    >
      {variant === "dark" ? (
        <div className="px-4 pt-2 sm:px-5">
          <h2 className="text-base font-extrabold text-white sm:text-lg">
            Register Now <span className="font-semibold text-white/70">— Free Consultation</span>
          </h2>
          <p className="mt-1 text-xs text-white/70 sm:text-sm">5,000+ students guided. Let us guide you too.</p>
        </div>
      ) : (
        <h2 className="rounded-t-[20px] bg-[#00999E] py-2.5 text-center text-base font-semibold text-white sm:py-3 sm:text-lg">
          Register Now
        </h2>
      )}

      <form
        onSubmit={formik.handleSubmit}
        className={
          variant === "dark"
            ? "mt-1 grid gap-2.5 px-4 pb-4 sm:mt-2 sm:gap-3 sm:px-5 sm:pb-5"
            : "mt-1 grid gap-3 p-4 sm:mt-2 sm:gap-4 sm:p-6"
        }
      >
        <div>
          <input
            type="text"
            placeholder={variant === "dark" ? "Your Full Name" : "Enter your name"}
            {...formik.getFieldProps("name")}
            className={
              variant === "dark"
                ? `w-full rounded-lg border px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[#00B2B8] sm:px-4 sm:py-3 ${
                    formik.touched.name && formik.errors.name ? "border-red-400/80" : "border-white/12"
                  } bg-white/5`
                : `w-full border ${
                    formik.touched.name && formik.errors.name ? "border-red-500" : "border-gray-300"
                  } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00999E]`
            }
          />
          {formik.touched.name &&
            formik.errors.name &&
            typeof formik.errors.name === "string" && (
              <p className={variant === "dark" ? "text-red-300 text-xs mt-1" : "text-red-500 text-sm mt-1"}>
                {formik.errors.name}
              </p>
            )}
        </div>

        <div>
          <input
            type="tel"
            maxLength={10}
            placeholder={variant === "dark" ? "10-Digit Mobile Number" : "Enter 10-digit number"}
            {...formik.getFieldProps("phone")}
            className={
              variant === "dark"
                ? `w-full rounded-lg border px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[#00B2B8] sm:px-4 sm:py-3 ${
                    formik.touched.phone && formik.errors.phone ? "border-red-400/80" : "border-white/12"
                  } bg-white/5`
                : `w-full border ${
                    formik.touched.phone && formik.errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00999E]`
            }
          />
          {formik.touched.phone &&
            formik.errors.phone &&
            typeof formik.errors.phone === "string" && (
              <p className={variant === "dark" ? "text-red-300 text-xs mt-1" : "text-red-500 text-sm mt-1"}>
                {formik.errors.phone}
              </p>
            )}
        </div>

        <div>
          <input
            type="text"
            placeholder={variant === "dark" ? "City" : "Enter your city"}
            {...formik.getFieldProps("city")}
            className={
              variant === "dark"
                ? `w-full rounded-lg border px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[#00B2B8] sm:px-4 sm:py-3 ${
                    formik.touched.city && formik.errors.city ? "border-red-400/80" : "border-white/12"
                  } bg-white/5`
                : `w-full border ${
                    formik.touched.city && formik.errors.city ? "border-red-500" : "border-gray-300"
                  } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00999E]`
            }
          />
          {formik.touched.city &&
            formik.errors.city &&
            typeof formik.errors.city === "string" && (
              <p className={variant === "dark" ? "text-red-300 text-xs mt-1" : "text-red-500 text-sm mt-1"}>
                {formik.errors.city}
              </p>
            )}
        </div>

        <div>
          <input
            type="email"
            placeholder={variant === "dark" ? "Email Address" : "Enter your email"}
            {...formik.getFieldProps("email")}
            className={
              variant === "dark"
                ? `w-full rounded-lg border px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[#00B2B8] sm:px-4 sm:py-3 ${
                    formik.touched.email && formik.errors.email ? "border-red-400/80" : "border-white/12"
                  } bg-white/5`
                : `w-full border ${
                    formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"
                  } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00999E]`
            }
          />
          {formik.touched.email &&
            formik.errors.email &&
            typeof formik.errors.email === "string" && (
              <p className={variant === "dark" ? "text-red-300 text-xs mt-1" : "text-red-500 text-sm mt-1"}>
                {formik.errors.email}
              </p>
            )}
        </div>

        <div>
          <textarea
            placeholder={variant === "dark" ? "Interested In..." : "Enter your message"}
            rows={variant === "dark" ? 1 : 2}
            {...formik.getFieldProps("message")}
            className={
              variant === "dark"
                ? `w-full resize-none rounded-lg border px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[#00B2B8] sm:px-4 sm:py-3 ${
                    formik.touched.message && formik.errors.message ? "border-red-400/80" : "border-white/12"
                  } bg-white/5`
                : `w-full border ${
                    formik.touched.message && formik.errors.message ? "border-red-500" : "border-gray-300"
                  } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00999E]`
            }
          />
          {formik.touched.message &&
            formik.errors.message &&
            typeof formik.errors.message === "string" && (
              <p className={variant === "dark" ? "text-red-300 text-xs mt-1" : "text-red-500 text-sm mt-1"}>
                {formik.errors.message}
              </p>
            )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={
            variant === "dark"
              ? `mt-2 cursor-pointer rounded-lg bg-[#00B2B8] py-3 text-sm font-semibold text-white transition hover:bg-[#00a1a6] ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                }`
              : `cursor-pointer bg-[#00999E] text-white font-medium py-2 rounded hover:bg-[#007a7e] transition-all duration-200 ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                }`
          }
        >
          {loading ? "Submitting..." : "Schedule A Meeting"}
        </button>

        {showDownloadButton && showBrochure && (
          <button
            type="button"
            onClick={handleDownloadBrochure}
            className="cursor-pointer bg-[#00999E] text-white font-medium py-2 rounded hover:bg-[#007a7e] transition-all duration-200"
          >
            Download Brochure
          </button>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
