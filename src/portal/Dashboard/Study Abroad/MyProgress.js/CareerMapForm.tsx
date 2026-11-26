// @ts-nocheck
import { LoadingButton } from "@mui/lab";
import React, { useEffect, useState } from "react";
import {
  Box, Typography, TextField, IconButton, Paper, Button } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "@/portal/Component/Snakbar";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import CareerMapTable from "./ThirdPart/careerMapTable";

import {
  createCareerMapAsync,
  getCareerMapCouncellorListAsync,
  getCareerMapStudentListAsync,
} from "@/portal/redux/services/careerMapService";
import CareerMapStudentTable from "./ThirdPart/CareerMapStudentTable";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function CareerMapForm() {
  const dispatch = useDispatch();
  const { showSnackbar } = useSnackbar();
  const userid = sessionStorage.getItem("userId");

  const [entries, setEntries] = useState([
    { country: "", course: "", university: "" },
  ]);

  const {
    careerMapCouncellorList = [],
    careerMapStudentList = [],
    isCareerMapStudentLoading,
    isCareerMapCouncellorLoading,
    isSubmitting,
  } = useSelector((state) => state.careerMap);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const tableColumn = [
      "Sr No.",
      "University Name",
      "Course Name",
      "Country Name",
      "Counsellor Name",
      "Created At",
    ];
    const tableRows = [];
    careerMapCouncellorList?.forEach((item, index) => {
      tableRows.push([
        index + 1,
        item?.universityIds?.[0]?.name || "-",
        item?.courseId?.name || "-",
        item?.countryId?.name || "-",
        item?.counsellorId?.name || "-",
        new Date(item?.createdAt).toLocaleDateString(),
      ]);
    });
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      theme: "grid", // 🔹 this adds borders to all cells
      styles: {
        halign: "center", // center align text
        valign: "middle",
        fontSize: 10,
        cellPadding: 3,
        lineWidth: 0.2, // border thickness
        lineColor: [0, 0, 0], // black border
      },
      headStyles: {
        fillColor: [0, 153, 158], // teal header
        textColor: "#fff",
        fontStyle: "bold",
      },
    });
    doc.save("ShortlistedUniversities.pdf");
  };

  const handleChange = (index, field, value) => {
    const updated = [...entries];
    updated[index][field] = value;
    setEntries(updated);
  };
  const handleRemoveRow = (index) => {
    const updated = [...entries];
    updated.splice(index, 1);
    setEntries(updated);
  };

  const handleAddRow = () => {
    setEntries([...entries, { country: "", course: "", university: "" }]);
  };

  const handleSubmit = async () => {
    try {
      const response = await dispatch(createCareerMapAsync(entries));
      if (response.payload.status === 200) {
        showSnackbar(response.payload.message, "success");
        setEntries([{ country: "", course: "", university: "" }]);
        dispatch(getCareerMapStudentListAsync({ studentId: userid }));
      }
    } catch (error) {
      showSnackbar("Something went wrong!", "error");
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch(getCareerMapCouncellorListAsync({ studentId: userid }));
    dispatch(getCareerMapStudentListAsync({ studentId: userid }));
  }, [dispatch, userid]);

  return (
    <Box
      sx={{
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
        backgroundColor: "#fff",
        mt: 3,
      }}
    >
      {/* form UI (same as before) */}
      <Typography variant="h6" gutterBottom>
        Career Mapping Form
      </Typography>

      {entries.map((entry, index) => (
        <Grid
          container
          spacing={2}
          alignItems="center"
          key={index}
          sx={{ my: 2 }}
        >
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Country"
              value={entry.country}
              onChange={(e) => handleChange(index, "country", e.target.value)}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Course"
              value={entry.course}
              onChange={(e) => handleChange(index, "course", e.target.value)}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="University"
              value={entry.university}
              onChange={(e) =>
                handleChange(index, "university", e.target.value)
              }
              variant="outlined"
            />
          </Grid>

          {/* Cross button har row ke liye */}
          <Grid item xs={6} sm={1}>
            <IconButton
              onClick={() => handleRemoveRow(index)}
              sx={{
                backgroundColor: "#e53935",
                color: "#fff",
                "&:hover": { backgroundColor: "#c62828" },
                borderRadius: 2,
              }}
            >
              <ClearRoundedIcon />
            </IconButton>
          </Grid>
          {/* Add button sirf last row me */}
          {index === entries.length - 1 && (
            <Grid item xs={6} sm={1}>
              <IconButton
                onClick={handleAddRow}
                sx={{
                  backgroundColor: "#00999E",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#007b82" },
                  borderRadius: 2,
                  fontSize: 12,
                  width: 100,
                }}
              >
                <AddIcon sx={{ fontSize: 16 }} /> Add More
              </IconButton>
            </Grid>
          )}
        </Grid>
      ))}

      <Box textAlign="center" mt={4} mb={6}>
        <LoadingButton
          variant="contained"
          onClick={handleSubmit}
          loading={isSubmitting}
          disabled={entries.some(
            (entry) =>
              !entry.country.trim() ||
              !entry.course.trim() ||
              !entry.university.trim()
          )}
          sx={{
            backgroundColor: "#00999E",
            px: 4,
            py: 1,
            borderRadius: "8px",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#007b82" },
          }}
        >
          Submit
        </LoadingButton>
      </Box>

      {/* Student List Section */}
      <Box mt={6}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h5" sx={{ fontWeight: 600, color: "#00999E" }}>
            Student Selected University List
          </Typography>
          <Button
            onClick={handleDownloadPDF}
            disabled={!careerMapStudentList?.length}
            variant="contained"
            sx={{
              backgroundColor: "#00999E",
              px: 4,
              py: 1,
              borderRadius: "8px",
              "&:hover": { backgroundColor: "#007b82" },
            }}
          >
            Report
          </Button>
        </Box>

        <Paper elevation={3} sx={{ p: 2 }}>
          <Box>
            <CareerMapStudentTable
              data={careerMapStudentList}
              loading={isCareerMapStudentLoading}
            />
          </Box>
        </Paper>
      </Box>

      {/* Counsellor List Section */}
      <Box mt={6}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, mb: 3, color: "#00999E" }}
        >
          Counsellor Selected University List
        </Typography>

        <Paper elevation={3} sx={{ p: 2 }}>
          <Box>
            <CareerMapTable
              data={careerMapCouncellorList}
              loading={isCareerMapCouncellorLoading}
              isClickable={false}
            />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
