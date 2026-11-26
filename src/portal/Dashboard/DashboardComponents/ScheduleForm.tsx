// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Container,
  Typography,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { useSnackbar } from "@/portal/Component/Snakbar";

// Validation schema
const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  scheduleDate: yup.date().required("Schedule Date is required"),
  facultyId: yup.string().required("Faculty is required"),
  queries: yup.string().optional(),
});

const ScheduleForm = () => {
  const [facultyList, setFacultyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = sessionStorage.getItem("authToken");
  const { showSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchFacultyList = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}staff/faculty-list`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setFacultyList(response.data.data);
      } catch (error) {
        showSnackbar("Failed to fetch faculty list.", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchFacultyList();
  }, [token, showSnackbar]);

  const onSubmit = async (data) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}student/schedule`,
        {
          fullName: data.fullName,
          scheduleDate: data.scheduleDate,
          facultyId: data.facultyId,
          queries: data.queries,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      showSnackbar("Schedule created successfully!", "success");
      reset();
    } catch (error) {
      showSnackbar("Failed to create schedule.", "error");
    }
  };

  return (
    <Box sx={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      <Container>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "100%",
            margin: "10px",
            padding: "20px",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Typography sx={{ m: "10px 0" }}>Full Name</Typography>
          <TextField
            placeholder="Full Name"
            variant="outlined"
            fullWidth
            {...register("fullName")}
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
            InputProps={{ style: { backgroundColor: "#DEF2F3" } }}
          />

          <Typography sx={{ m: "10px 0" }}>Schedule Date</Typography>
          <TextField
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            fullWidth
            {...register("scheduleDate")}
            error={!!errors.scheduleDate}
            helperText={errors.scheduleDate?.message}
            InputProps={{ style: { backgroundColor: "#DEF2F3" } }}
          />

          <Typography sx={{ m: "10px 0" }}>Faculty</Typography>
          {loading ? (
            <CircularProgress size={20} />
          ) : (
            <TextField
              select
              variant="outlined"
              fullWidth
              defaultValue=""
              {...register("facultyId")}
              error={!!errors.facultyId}
              helperText={errors.facultyId?.message}
              InputProps={{ style: { backgroundColor: "#DEF2F3" } }}
            >
              {facultyList.map((faculty) => (
                <MenuItem key={faculty?._id} value={faculty?._id}>
                  {faculty?.name}
                </MenuItem>
              ))}
            </TextField>
          )}

          <Typography sx={{ m: "10px 0" }}>Write Queries</Typography>
          <TextField
            placeholder="Provide supporting details or context"
            variant="outlined"
            fullWidth
            multiline
            minRows={4}
            {...register("queries")}
            InputProps={{ style: { backgroundColor: "#DEF2F3" } }}
          />

          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              margin: "10px 0",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "250px",
                backgroundColor: "#00999E",
                color: "white",
                padding: "10px 0",
                "&:hover": {
                  backgroundColor: "#00999f",
                },
              }}
            >
              SUBMIT
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ScheduleForm;
