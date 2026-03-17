"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import axios from "axios";
import { baseUrl } from "@/utils/config";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    from_name: "TIE"
  });
  const [loading, setLoading] = useState(false);


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      from_name: "TIE", 
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${baseUrl}student/schedule-meeting`, formData);

      if (!res.data?.success) {
        toast.error("Failed to schedule meeting");
        return;
      }

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        toast.error("Email service is not configured");
        return;
      }

      const source = window.location.href;
      const time = new Date().toLocaleString();

      await emailjs.send(
        serviceId,
        templateId,
        { ...formData, from_name: "TIE", source, time },
        { publicKey }
      );

      toast.success("Message sent successfully");
      setFormData({ name: "", email: "", message: "", phone: "", from_name: "TIE" });
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      toast.error(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="name" className="block text-md font-medium text-gray-500 mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border-b border-gray-500 focus:outline-none focus:border-[#00999E] py-2"
          />
        </div>

        {/* Email */}
        <div className="col-span-1">
          <label htmlFor="email" className="block text-md font-medium text-gray-500 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-gray-500 focus:outline-none focus:border-[#00999E] py-2"
          />
        </div>

        {/* Phone */}
        <div className="col-span-1">
          <label htmlFor="phone" className="block text-md font-medium text-gray-500 mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            type="text"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-b border-gray-500 focus:outline-none focus:border-[#00999E] py-2"
          />
        </div>

        {/* Message */}
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="message" className="block text-md font-medium text-gray-500 mb-1">
            Write Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full border-b border-gray-500 focus:outline-none focus:border-[#00999E] py-2"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 flex justify-end mt-4">
          <button
            type="submit"
            className="bg-[#00999E] text-white border border-[#00999E] px-6 py-2 rounded hover:bg-white hover:text-[#00999E] transition-all duration-200"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>


    </div>
  );
};

export default ContactForm;
