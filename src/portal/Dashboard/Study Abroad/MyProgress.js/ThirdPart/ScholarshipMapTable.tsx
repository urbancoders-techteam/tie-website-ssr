// @ts-nocheck
import {
  Box,
  Typography,
  Paper,
  TablePagination,
  Button,
  Modal,
  Link,
} from "@mui/material";
import { useState } from "react";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";

// Status Pill → shows View button instead of showing the value
const StatusPill = ({ label, onView }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        bgcolor: "#b2ebf2",
        px: 2,
        py: 0.5,
        borderRadius: "20px",
        fontSize: "14px",
        fontWeight: 500,
        width: "80%",
        margin: "auto",
        justifyContent: "center",
      }}
    >
      <Button
        variant="text"
        size="small"
        onClick={onView}
        sx={{
          textTransform: "none",
          fontWeight: 600,
          color: "#0097a7",
        }}
      >
        {label ? "View" : "NA"}
      </Button>
    </Box>
  );
};

// Helper function to check if text is a URL
const isURL = (text) => {
  if (!text || typeof text !== "string") return false;
  return (
    text.includes("http") || text.includes("https") || text.includes(".com")
  );
};

// Helper function to extract multiple links from text
const extractLinks = (text) => {
  if (!text) return [];

  // Split by spaces, newlines, or commas to find URLs
  const potentialLinks = text
    .split(/\s+|,|\n/)
    .filter(
      (item) =>
        item.includes("http") ||
        item.includes("https") ||
        item.includes(".com"),
    );

  return potentialLinks
    .map((link) => link.trim())
    .filter((link) => link.length > 0);
};

export default function ScholarshipMapTable({
  data,
  loading,
  page,
  rowsPerPage,
  setPage,
  setRowsPerPage,
  totalCount,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [modalValue, setModalValue] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleOpenModal = (value, title) => {
    setModalValue(value || "-");
    setModalTitle(title || "Scholarship Details");
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalValue("");
    setModalTitle("");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper sx={{ p: 2 }}>
      {/* Header */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 2,
          mb: 2,
        }}
      >
        <Typography sx={{ fontSize: 30 }}>University</Typography>
        <Typography
          sx={{
            bgcolor: "#0097a7",
            color: "white",
            fontWeight: 600,
            p: 1.5,
            borderRadius: "8px",
          }}
          textAlign="center"
        >
          University
        </Typography>
        <Typography
          sx={{
            bgcolor: "#0097a7",
            color: "white",
            fontWeight: 600,
            p: 1.5,
            borderRadius: "8px",
          }}
          textAlign="center"
        >
          Country
        </Typography>
        <Typography
          sx={{
            bgcolor: "#0097a7",
            color: "white",
            fontWeight: 600,
            p: 1.5,
            borderRadius: "8px",
          }}
          textAlign="center"
        >
          Other
        </Typography>
      </Box>

      {/* Body */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {loading ? (
          <CustomCircularProgress />
        ) : data?.result?.length === 0 ? (
          <Typography textAlign="center" sx={{ p: 3 }}>
            No data available
          </Typography>
        ) : (
          data?.result?.map((row, index) => (
            <Box
              key={index}
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                alignItems: "center",
                gap: 2,
                mt: 2,
              }}
            >
              {/* University Name */}
              <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>
                {row?.university && !isURL(row.university)
                  ? row.university
                  : "University Details"}
              </Typography>

              {/* University Scholarship */}
              <Box display="flex" justifyContent="center">
                <StatusPill
                  label={row?.universityScholarship}
                  onView={() =>
                    handleOpenModal(
                      row?.universityScholarship,
                      `${row?.university || "University"} - Scholarship Links`,
                    )
                  }
                />
              </Box>

              {/* Country Scholarship */}
              <Box display="flex" justifyContent="center">
                <StatusPill
                  label={row?.countryScholarship}
                  onView={() =>
                    handleOpenModal(
                      row?.countryScholarship,
                      `${
                        row?.university || "University"
                      } - Country Scholarship Links`,
                    )
                  }
                />
              </Box>

              {/* Other Scholarship */}
              <Box display="flex" justifyContent="center">
                <StatusPill
                  label={row?.otherScholarship}
                  onView={() =>
                    handleOpenModal(
                      row?.otherScholarship,
                      `${
                        row?.university || "University"
                      } - Other Scholarship Links`,
                    )
                  }
                />
              </Box>
            </Box>
          ))
        )}
      </Box>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={totalCount || 0}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />

      {/* Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            p: 4,
            width: 400,
            maxWidth: "80vw",
            borderRadius: 2,
            boxShadow: 24,
            maxHeight: "70vh",
            overflow: "auto",
          }}
        >
          <Typography
            sx={{ fontSize: 20, fontWeight: 700, mb: 3, color: "#0097a7" }}
          >
            {modalTitle}
          </Typography>

          {isURL(modalValue) ? (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {extractLinks(modalValue).map((link, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <Link
                    href={link.startsWith("http") ? link : `https://${link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      wordBreak: "break-all",
                      color: "#0097a7",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {link}
                  </Link>
                </Box>
              ))}
            </Box>
          ) : (
            <Typography sx={{ fontSize: 16, color: "text.primary" }}>
              {modalValue === "-" ? "No information available" : modalValue}
            </Typography>
          )}

          <Box mt={3} textAlign="right">
            <Button
              variant="contained"
              onClick={handleCloseModal}
              sx={{
                bgcolor: "#0097a7",
                "&:hover": {
                  bgcolor: "#00796b",
                },
              }}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </Paper>
  );
}
