// @ts-nocheck
import { useEffect, useMemo, useState } from "react";
import {
  canJoinMeetingNow,
  joinWindowPollIntervalMs,
} from "./counsellingMeetingUtils";

export function useJoinMeetingWindow(counsellingData) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let timeoutId;
    let cancelled = false;

    const scheduleNext = () => {
      if (cancelled || document.visibilityState !== "visible") return;
      setTick((t) => t + 1);
      timeoutId = setTimeout(
        scheduleNext,
        joinWindowPollIntervalMs(counsellingData),
      );
    };

    const onVisibilityChange = () => {
      clearTimeout(timeoutId);
      if (document.visibilityState === "visible") {
        setTick((t) => t + 1);
        scheduleNext();
      }
    };

    if (document.visibilityState === "visible") {
      setTick((t) => t + 1);
      scheduleNext();
    }

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [counsellingData?.assignedDate, counsellingData?.duration]);

  return useMemo(
    () => canJoinMeetingNow(counsellingData),
    [counsellingData, tick],
  );
}
