// @ts-nocheck
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getCounsellorLogListAsync,
  DeleteTableAsync,
} from "@/portal/redux/services/table";
import { Box, CircularProgress, IconButton, Tooltip } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import dayjs from "dayjs";

export default function CareerMapStudentTable({ data, loading }) {
  const dispatch = useDispatch();
  const paginatedRows = data;

  useEffect(() => {
    dispatch(getCounsellorLogListAsync());
  }, [dispatch]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this university?")) {
      try {
        const result = await dispatch(DeleteTableAsync({ id }));
        console.error("result:", result);

        if (result.payload.status === 200) {
          // Refresh the list after successful deletion
          dispatch(getCounsellorLogListAsync());
        } else {
          console.error("Delete failed:", result.error);
        }
      } catch (error) {
        console.error("Delete failed:", error);
      }
    }
  };

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: "#00999E", color: "#fff" }}>
                  S.no.
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ backgroundColor: "#00999E", color: "#fff" }}
                >
                  Country
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ backgroundColor: "#00999E", color: "#fff" }}
                >
                  Courses
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ backgroundColor: "#00999E", color: "#fff" }}
                >
                  Universities
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ backgroundColor: "#00999E", color: "#fff" }}
                >
                  Created At
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ backgroundColor: "#00999E", color: "#fff" }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>

                  <TableCell align="center">{row.country || "-"}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "300px" }}>
                    {row.course || "-"}
                  </TableCell>
                  <TableCell align="center" sx={{ maxWidth: "300px" }}>
                    {row.university || "-"}
                  </TableCell>
                  <TableCell align="center">
                    {dayjs(row.createdAt).format("DD MMM YYYY") || "-"}
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip title="Delete University">
                      <IconButton
                        onClick={() => handleDelete(row._id || row.id)}
                        color="error"
                        size="small"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
