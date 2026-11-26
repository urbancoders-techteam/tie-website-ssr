// @ts-nocheck
import { Box, Button, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdmissionServiceList } from "@/portal/redux/services/admissionService";
import AdmissionServiceMapTable from "./AdmissionServiceMapTable";

export default function AdmissionUniversityActionTypeList() {
  const dispatch = useDispatch();
  const userid = sessionStorage.getItem("userId");

  const { careerMapCouncellorList, isLoading, totalCount } = useSelector(
    (state) => state.admissionService
  );
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    dispatch(
      getAdmissionServiceList({
        page: page + 1,
        limit: rowsPerPage,
        studentId: userid,
      })
    );
  }, [dispatch, userid, page, rowsPerPage]);

  const handleExportExcel = async () => {
    try {
      setIsExporting(true);

      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}university-sort-listing/export-shortlisted-universities`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: sessionStorage.getItem("authToken"),
          },
          body: JSON.stringify({
            page: page + 1,
            limit: rowsPerPage,
            studentId: userid,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Export failed");
      }

      // Get the blob from response
      const blob = await response.blob();

      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "ShortlistedUniversities.xlsx");
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error exporting Excel:", error);
      alert("Error exporting Excel file. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Box mt={6}>
      <Paper elevation={3} sx={{ p: 2 }}>
        {/* Export Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <Button
            onClick={handleExportExcel}
            // disabled={isExporting || !careerMapCouncellorList?.length}
            variant="contained"
            sx={{
              backgroundColor: "#00999E",
              px: 4,
              py: 1,
              borderRadius: "8px",
              "&:hover": { backgroundColor: "#007b82" },
              "&:disabled": { backgroundColor: "#cccccc" },
            }}
          >
            {isExporting ? "Exporting..." : "Export Excel"}
          </Button>
        </Box>

        <AdmissionServiceMapTable
          data={careerMapCouncellorList}
          loading={isLoading}
          page={page}
          rowsPerPage={rowsPerPage}
          totalCount={totalCount}
          onPageChange={(event, newPage) => setPage(newPage)}
          onRowsPerPageChange={(event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
          }}
        />
      </Paper>
    </Box>
  );
}
