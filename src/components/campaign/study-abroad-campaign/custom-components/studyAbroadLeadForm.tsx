"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "@/utils/config";
import type { StudyAbroadLeadFormConfig } from "./studyAbroadTypes";

const NEODOVE_LEADS_URL =
  "https://b1a00be1-4e52-42ec-a144-06930be8193d.neodove.com/integration/custom/a5a4938a-bfcf-417a-ae92-edc0c27ded2e/leads";

type LeadFormConfig = StudyAbroadLeadFormConfig;

export default function StudyAbroadLeadForm({
  config,
  title,
  id,
}: {
  config: LeadFormConfig;
  title?: string;
  id?: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const showCity = config.showCity !== false;
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    course: "",
    intake: "",
  });

  const set = (key: keyof typeof values) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValues((current) => ({ ...current, [key]: event.target.value }));
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!/^\d{10}$/.test(values.phone)) {
      toast.error("Phone number must be 10 digits");
      return;
    }
    setLoading(true);
    const source = window.location.href;
    const time = new Date().toLocaleString();
    const message = [`Course: ${values.course}`, values.intake ? `Intake: ${values.intake}` : ""]
      .filter(Boolean)
      .join(" | ");
    try {
      const res = await axios.post(`${baseUrl}student/schedule-meeting`, {
        name: values.name,
        email: values.email,
        phone: values.phone,
        city: values.city || values.intake,
        message,
        from_name: "TIE",
        source,
        time,
        form_label: config.formLabel,
      });
      if (!res.data?.success) {
        toast.error("Failed to schedule meeting");
        return;
      }
      try {
        await axios.post(
          NEODOVE_LEADS_URL,
          {
            name: values.name,
            mobile: parseInt(values.phone, 10),
            email: values.email,
            detail1: message,
            detail2: `${values.city || values.intake} | ${source} | ${time}`,
          },
          { headers: { "Content-Type": "application/json" } }
        );
      } catch (error) {
        console.error("Neodove lead sync failed", error);
      }
      toast.success("Successfully created Unlock Your Dreams");
      router.push(config.thankYouPath);
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      toast.error(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const field =
    "h-10 w-full rounded-md border border-[#E6D9C4] bg-[#FBF8F3] px-3 text-sm text-[#122033] outline-none transition placeholder:text-slate-400 focus:border-[#C6A35A] focus:bg-white focus:ring-2 focus:ring-[#C6A35A]/30";

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className="w-full max-w-[420px] overflow-hidden rounded-2xl border border-[#E6D9C4] bg-white text-[#122033] shadow-[0_24px_60px_-24px_rgba(7,17,28,0.65)]"
    >
      <h2 className="bg-[#122033] px-4 py-3 text-center text-base font-semibold text-[#E8D5A3] sm:text-lg">
        {title ?? config.defaultTitle}
      </h2>
      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:p-5">
        <input required className={field} placeholder="Name" value={values.name} onChange={set("name")} />
        <input required type="email" className={field} placeholder="Email" value={values.email} onChange={set("email")} />
        <input
          required
          inputMode="numeric"
          maxLength={10}
          className={field}
          placeholder={config.phonePlaceholder ?? "Phone"}
          value={values.phone}
          onChange={set("phone")}
        />
        {showCity && <input required className={field} placeholder="City" value={values.city} onChange={set("city")} />}
        <select required className={`${field} sm:col-span-2`} value={values.course} onChange={set("course")}>
          <option value="">{config.coursePlaceholder ?? "Select a course"}</option>
          {config.courses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
        {config.intakes && config.intakes.length > 0 && (
          <select required className={`${field} sm:col-span-2`} value={values.intake} onChange={set("intake")}>
            <option value="">Intake</option>
            {config.intakes.map((intake) => (
              <option key={intake} value={intake}>
                {intake}
              </option>
            ))}
          </select>
        )}
        <button
          type="submit"
          disabled={loading}
          className="study-abroad-cta col-span-full mx-auto mt-1 block rounded-full bg-[#C6A35A] px-6 py-2.5 text-sm font-semibold text-[#122033] transition duration-300 hover:-translate-y-0.5 hover:bg-[#D4B56E] disabled:translate-y-0 disabled:opacity-60"
        >
          {loading ? config.submittingLabel : config.submitLabel}
        </button>
      </div>
    </form>
  );
}
