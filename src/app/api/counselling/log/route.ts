import { currentMeeting, studentHistoryOnLocalApi } from "@/server/counsellingHistory";

export async function GET(request: Request) {
  const authorization = request.headers.get("authorization") || "";
  if (!authorization) {
    return Response.json({ status: 401, message: "Please log in again." }, { status: 401 });
  }

  const current = await currentMeeting(authorization);
  const meeting = current.payload?.data;
  if (!current.ok || !meeting?.studentId) {
    return Response.json(
      { status: current.status || 401, message: current.payload?.message || "Could not load counselling history.", data: { count: 0, data: [] } },
      { status: current.status || 401 },
    );
  }

  const url = new URL(request.url);
  const history = await studentHistoryOnLocalApi(
    String(meeting.studentId),
    url.searchParams.get("page") || "1",
    url.searchParams.get("limit") || "10",
  );

  return Response.json(history.payload, { status: history.status });
}
