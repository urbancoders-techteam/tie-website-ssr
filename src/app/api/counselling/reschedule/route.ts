import { appendRescheduleOnLocalApi, currentMeeting } from "@/server/counsellingHistory";

export async function POST(request: Request) {
  const authorization = request.headers.get("authorization") || "";
  if (!authorization) {
    return Response.json({ status: 401, message: "Please log in again." }, { status: 401 });
  }

  const current = await currentMeeting(authorization);
  const meeting = current.payload?.data;
  if (!current.ok || !meeting?._id || !meeting?.studentId) {
    return Response.json(current.payload, { status: current.status || 401 });
  }

  const body = await request.json().catch(() => ({}));
  const result = await appendRescheduleOnLocalApi({
    meetingId: String(meeting._id),
    studentId: String(meeting.studentId),
    assignedDate: body?.assignedDate,
  });

  return Response.json(result.payload, { status: result.status });
}
