// @ts-nocheck
import { useEffect, useState } from "react";
import { axiosInstance } from "@/portal/utils/axiosConfig";

const GATED_PREFIXES = [
  "/dashboard/admission",
  "/dashboard/studyabroad",
  "/dashboard/study-abroad-plan",
  "/dashboard/study-abroad",
  "/dashboard/documentsverification",
  "/dashboard/resources",
  "/dashboard/test-prep",
  "/dashboard/mocktest",
  "/dashboard/user-board",
  "/dashboard/planner",
  "/dashboard/learningresources",
  "/dashboard/performance",
  "/dashboard/scorepending",
  "/dashboard/precounselling-form",
  "/dashboard/scheduleForm",
];

export function isEnrollmentGated(pathname) {
  if (!pathname) return false;
  if (pathname.includes("/view-resource-file") || pathname.endsWith("/scoretable")) {
    return true;
  }
  return GATED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export function useEnrollmentAccess() {
  const [enrolled, setEnrolled] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      setEnrolled(false);
      return;
    }

    let cancelled = false;
    axiosInstance
      .get("student/get-student-web")
      .then((response) => {
        if (cancelled) return;
        setEnrolled(Boolean(response?.data?.data?.isenrolled));
      })
      .catch((error) => {
        if (cancelled || error?.response?.status === 401) return;
        // A failed profile check should not lock a student out of a plan they already have.
        setEnrolled(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    enrolled,
    checked: enrolled !== null,
    markEnrolled: () => setEnrolled(true),
  };
}
