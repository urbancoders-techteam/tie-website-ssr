"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";


interface FormValues {
  name: string;
  phone: string;
  email: string;
}

interface FormComponentProps {
  handleCloseDialog?: () => void;
  filters: Partial<FormValues>;
  setFilters?: (values: Partial<FormValues>) => void;
  isFormValid: boolean;
  buttonText?: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const FormComponent: React.FC<FormComponentProps> = ({
  handleCloseDialog,
  filters,
  setFilters = () => {},
}) => {
  const handleSubmit = (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    setFilters(values);
    toast.success("Form submitted successfully!");
    if (handleCloseDialog) handleCloseDialog();
    resetForm();
  };

  return (
    <div className="relative p-5">
      <Formik
        initialValues={{
          name: filters?.name || "",
          phone: filters?.phone || "",
          email: filters?.email || "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, values }) => (
          <Form className="space-y-4">
            {/* Name */}
            <div>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange(e);
                  setFilters({ ...filters, name: e.target.value });
                }}
                onBlur={handleBlur}
                value={values.name}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00999E]"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-sm text-red-600 mt-1"
              />
            </div>

            {/* Phone */}
            <div>
              <Field
                type="text"
                name="phone"
                placeholder="Phone"
                maxLength={10}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange(e);
                  setFilters({ ...filters, phone: e.target.value });
                }}
                onBlur={handleBlur}
                value={values.phone}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00999E]"
              />
              <ErrorMessage
                name="phone"
                component="p"
                className="text-sm text-red-600 mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange(e);
                  setFilters({ ...filters, email: e.target.value });
                }}
                onBlur={handleBlur}
                value={values.email}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00999E]"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-sm text-red-600 mt-1"
              />
            </div>

            {/* Submit Button */}
            {/* <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#00999E] hover:bg-[#007a7a] text-white font-semibold py-2 px-6 rounded-md transition-all duration-300"
              >
                {buttonText}
              </button>
            </div> */}
          </Form>
        )}
      </Formik>


    </div>
  );
};

export default FormComponent;
