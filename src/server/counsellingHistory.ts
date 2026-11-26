const remoteBase = () =>
  process.env.NEXT_PUBLIC_BASE_URL ||
  process.env.REACT_APP_BASE_URL ||
  "https://dev.api.taksheela.com/api/v1/";

const localBase = "http://127.0.0.1:8000/api/v1/";

export async function currentMeeting(authorization: string) {
  const response = await fetch(`${remoteBase()}personal-counsellor/student`, {
    headers: { Authorization: authorization },
    cache: "no-store",
  });
  const payload = await response.json().catch(() => ({}));
  return { ok: response.ok, status: response.status, payload };
}

export async function appendRescheduleOnLocalApi({
  meetingId,
  studentId,
  assignedDate,
}: {
  meetingId: string;
  studentId: string;
  assignedDate: string;
}) {
  const response = await fetch(`${localBase}personal-counsellor/append-reschedule`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ meetingId, studentId, assignedDate }),
    cache: "no-store",
  });
  const payload = await response.json().catch(() => ({}));
  return { status: response.status, payload };
}

export async function markJoinedOnLocalApi({
  meetingId,
  studentId,
}: {
  meetingId: string;
  studentId: string;
}) {
  const response = await fetch(`${localBase}personal-counsellor/mark-joined`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ meetingId, studentId }),
    cache: "no-store",
  });
  const payload = await response.json().catch(() => ({}));
  return { status: response.status, payload };
}

export async function studentHistoryOnLocalApi(
  studentId: string,
  page: string,
  limit: string,
) {
  const url = new URL(`${localBase}personal-counsellor/student-history`);
  url.searchParams.set("studentId", studentId);
  url.searchParams.set("page", page);
  url.searchParams.set("limit", limit);
  const response = await fetch(url, { cache: "no-store" });
  const payload = await response.json().catch(() => ({}));
  return { status: response.status, payload };
}
