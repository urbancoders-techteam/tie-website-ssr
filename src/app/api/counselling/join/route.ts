import { currentMeeting, markJoinedOnLocalApi } from "@/server/counsellingHistory";

export async function POST(request: Request) {
  const authorization = request.headers.get("authorization") || "";
  if (!authorization) {
    return Response.json({ status: 401, message: "Please log in again." }, { status: 401 });
  }

  const current = await currentMeeting(authorization);
  const meeting = current.payload?.data;
  if (!current.ok || !meeting?.studentId) {
    return Response.json(current.payload, { status: current.status || 401 });
  }

  const body = await request.json().catch(() => ({}));
  const meetingId = String(body?.meetingId || meeting._id || "");
  const result = await markJoinedOnLocalApi({
    meetingId,
    studentId: String(meeting.studentId),
  });

  return Response.json(result.payload, { status: result.status });
}
