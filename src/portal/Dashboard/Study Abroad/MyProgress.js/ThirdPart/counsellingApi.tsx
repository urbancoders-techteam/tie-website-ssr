// @ts-nocheck
import axios from "axios";
import { localCounsellingUrl } from "./counsellingMeetingUtils";

function authHeaders() {
  return { Authorization: sessionStorage.getItem("authToken") };
}

const studentCounsellorUrl = () =>
  `${process.env.REACT_APP_BASE_URL}personal-counsellor/student`;

const updateMeetingUrl = () =>
  `${process.env.REACT_APP_BASE_URL}personal-counsellor/update-meeting`;

export async function fetchStudentCounsellor(signal) {
  const response = await axios.get(studentCounsellorUrl(), {
    headers: authHeaders(),
    signal,
  });
  return response?.data?.data ?? null;
}

export async function rescheduleCounsellorMeeting({
  assignedDate,
  duration,
  signal,
}) {
  const localUrl = localCounsellingUrl("reschedule");
  const response = await axios({
    method: localUrl ? "post" : "put",
    url: localUrl || updateMeetingUrl(),
    data: {
      assignedDate,
      duration: duration ?? 60,
      isReschedule: true,
    },
    headers: authHeaders(),
    signal,
  });
  return response.data;
}
