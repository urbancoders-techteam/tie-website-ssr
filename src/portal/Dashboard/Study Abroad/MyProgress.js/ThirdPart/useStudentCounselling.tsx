// @ts-nocheck
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { fetchStudentCounsellor } from "./counsellingApi";

export function useStudentCounselling() {
  const [counsellingData, setCounsellingData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const reload = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await fetchStudentCounsellor();
      setCounsellingData(data);
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error("Error fetching counselling data:", error);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      setIsLoading(true);
      try {
        const data = await fetchStudentCounsellor(controller.signal);
        setCounsellingData(data);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error("Error fetching counselling data:", error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    })();

    return () => controller.abort();
  }, []);

  return { counsellingData, isLoading, reload };
}
