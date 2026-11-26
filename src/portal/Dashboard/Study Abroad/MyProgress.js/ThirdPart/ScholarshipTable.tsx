// @ts-nocheck
import { Box, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getScholarshipList } from "@/portal/redux/services/admissionService";
import ScholarshipMapTable from "./ScholarshipMapTable";

export default function ScholarshipMapContainer() {
  const dispatch = useDispatch();
  const userid = sessionStorage.getItem("userId");

  const { scholarshipList, isLoading, totalCount } = useSelector(
    (state) => state.admissionService
  );

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    if (userid) {
      dispatch(
        getScholarshipList({
          page: page + 1,
          limit: rowsPerPage,
          studentId: userid,
        })
      );
    }
  }, [dispatch, userid, page, rowsPerPage]);

  return (
    <Box mt={6}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <ScholarshipMapTable
          data={scholarshipList}
          loading={isLoading}
          page={page}
          rowsPerPage={rowsPerPage}
          setPage={setPage}
          setRowsPerPage={setRowsPerPage}
          totalCount={totalCount}
        />
      </Paper>
    </Box>
  );
}
