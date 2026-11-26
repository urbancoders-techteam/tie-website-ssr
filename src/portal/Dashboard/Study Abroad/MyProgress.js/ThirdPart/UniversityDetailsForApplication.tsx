// @ts-nocheck
import { Box, Button, Stack, Tab, Tabs, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { useCallback, useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "@/portal/navigation";
import OppositeSidekeyArrow_abroad from "../../../../asset/OppositeSidekeyArrow_abroad.svg";
import rightIcon from "../../../../asset/Right_abroad.svg";
import wrongIcon from "../../../../asset/Wrong_abroad.svg";
import University_abroad from "../../../../asset/University_abroad.svg";
import dayjs from "dayjs";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";
import { useSnackbar } from "@/portal/Component/Snakbar";

export default function UniversityDetailsForApplication() {
  const { showSnackbar } = useSnackbar();
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const universityName = searchParams.get("universityName");
  const navigate = useNavigate();

  const token = sessionStorage.getItem("authToken");

  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const [selectedTab, setSelectedTab] = useState(0);
  const UploadTabs = ["SOP", "LOR", "ESSAYS"];

  const [tabFiles, setTabFiles] = useState({
    SOP: { base64: null, name: "" },
    LOR: { base64: null, name: "" },
    ESSAYS: { base64: null, name: "" },
  });

  const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!allowedTypes.includes(file.type)) {
      showSnackbar("Only JPG, PNG or PDF files are allowed.", "info");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const newFiles = {
        ...tabFiles,
        [UploadTabs[selectedTab]]: {
          base64: reader.result,
          name: file.name,
        },
      };
      setTabFiles(newFiles);
    };
    reader.readAsDataURL(file);
  };
  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}admission-service`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({ sortlistId: id }),
        },
      );

      const json = await res.json();

      if (res.ok && json.success) {
        setData(json.data);
      } else {
        console.warn("Failed to fetch admission data:", json.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  }, [id, token]);

  useEffect(() => {
    if (id && token) {
      fetchData();
    }
  }, [fetchData, id, token]);

  const handleSubmit = async () => {
    const currentTab = UploadTabs[selectedTab];
    const fileData = tabFiles[currentTab];

    if (!fileData.base64) {
      showSnackbar("Please upload a file first", "error");
      return;
    }

    const payload = {
      sortlistId: id,
      type: currentTab,
      file: fileData.base64,
    };

    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}admission-service/upload`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(payload),
        },
      );

      if (res.ok) {
        showSnackbar(`${currentTab} uploaded successfully`, "success");
        fetchData();
        setTabFiles((prev) => ({
          ...prev,
          [currentTab]: { base64: null, name: "" },
        }));
      } else {
        showSnackbar("Upload failed", "error");
      }
    } catch (error) {
      console.error(error);
      showSnackbar("Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  const currentFile = tabFiles[UploadTabs[selectedTab]];

  const getFileExtension = (url) => {
    try {
      const pathname = new URL(url).pathname;
      return pathname.split(".").pop() || "file";
    } catch {
      return "file";
    }
  };

  useEffect(() => {
    if (data) {
      setTabFiles({
        SOP: {
          base64: data?.SOP || null,
          name: data?.SOP ? `SOP.${getFileExtension(data.SOP)}` : "",
        },
        LOR: {
          base64: data?.LOR || null,
          name: data?.LOR ? `LOR.${getFileExtension(data.LOR)}` : "",
        },
        ESSAYS: {
          base64: data?.ESSAYS || null,
          name: data?.ESSAYS ? `ESSAYS.${getFileExtension(data.ESSAYS)}` : "",
        },
      });
    }
  }, [data]);

  return isLoading ? (
    <CustomCircularProgress />
  ) : (
    <Box
      gap={3}
      direction="column"
      sx={{
        backgroundColor: "#Ffffff",

        padding: 5,
      }}
    >
      <Button
        variant="contained"
        disableElevation
        sx={{
          backgroundColor: "#00999E",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#007f80",
          },
          textTransform: "capitalize",
          marginBottom: 3,
        }}
        size="large"
        onClick={() =>
          navigate(`/dashboard/studyabroad?category=admission&status=lor`)
        }
      >
        Back
      </Button>

      {/* Top Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          pb: 2,
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "150px" },
              height: "auto",
              backgroundColor: "#EFFDFF",
              borderRadius: "12px",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
              border: "1px solid #B7B7B7",
              p: 2,
            }}
          >
            <img
              src={University_abroad}
              alt="University"
              style={{
                width: "80px",
                height: "auto",
                borderRadius: "10%",
              }}
            />
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              color: "#595959",
              fontSize: 35,
            }}
          >
            {data?.university || universityName}
          </Typography>
        </Box>

        {data?.programWebsiteLink && (
          <a
            href={data.programWebsiteLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              disableElevation
              sx={{
                backgroundColor: "#00999E",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#007f80",
                },
                textTransform: "capitalize",
              }}
              size="large"
            >
              Visit Site
            </Button>
          </a>
        )}
      </Box>

      {/* Main Content */}
      <Grid container spacing={3}>
        {/* Tabbed Upload Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              borderRadius: "8.59px",
              border: "0.86px solid #9f9f9f",
              backgroundColor: "#E2FEFF",
              height: "100%",
              pb: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                SOP / LOR / ESSAYS
              </Typography>
              <Typography variant="body2">
                Upload files based on selected tab
              </Typography>
            </Box>

            <Tabs
              value={selectedTab}
              onChange={(e, newVal) => setSelectedTab(newVal)}
              centered
              sx={{
                borderBottom: "1px solid #ccc",
                marginBottom: 2,
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontWeight: 600,
                  color: "#666",
                },
                "& .Mui-selected": {
                  color: "#00999E",
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#00999E",
                },
              }}
            >
              {UploadTabs.map((tab, idx) => (
                <Tab key={idx} label={tab} />
              ))}
            </Tabs>

            <Box
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #E4E4E4",
                borderRadius: "10px",
                padding: 2,
                width: "90%",
                margin: "auto",
              }}
            >
              {currentFile?.base64 && currentFile?.base64.startsWith("http") ? (
                // ✅ FILE EXISTS ON SERVER
                <Stack spacing={2} alignItems="center">
                  <Typography fontSize={13} fontWeight={600}>
                    {UploadTabs[selectedTab]} already uploaded
                  </Typography>

                  <Button
                    href={currentFile.base64}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    sx={{
                      color: "#00999E",
                      borderColor: "#00999E",
                      "&:hover": {
                        borderColor: "#007f80",
                        color: "#007f80",
                      },
                    }}
                  >
                    Download {UploadTabs[selectedTab]}
                  </Button>

                  <Button
                    color="error"
                    variant="text"
                    size="small"
                    onClick={() =>
                      setTabFiles((prev) => ({
                        ...prev,
                        [UploadTabs[selectedTab]]: { base64: null, name: "" },
                      }))
                    }
                  >
                    Remove and Re-upload
                  </Button>
                </Stack>
              ) : (
                // 🚀 FILE NOT YET UPLOADED (or being re-uploaded)
                <Stack alignItems="center" gap={1}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <img src={OppositeSidekeyArrow_abroad} alt="icon" />
                    <Typography fontSize={12} fontWeight={600}>
                      Upload your {UploadTabs[selectedTab]}
                    </Typography>
                  </Box>
                  <Typography fontSize={10}>
                    JPG, PNG or PDF — Max size: 10MB
                  </Typography>

                  <Button
                    variant="outlined"
                    component="label"
                    sx={{
                      color: "#00999E",
                      borderColor: "#00999E",
                      "&:hover": {
                        borderColor: "#007f80",
                        color: "#007f80",
                      },
                      textTransform: "capitalize",
                      mt: 1,
                    }}
                  >
                    Browse File
                    <input
                      hidden
                      accept=".jpg,.jpeg,.png,.pdf"
                      type="file"
                      onChange={handleFileUpload}
                    />
                  </Button>

                  {/* Preview or Filename */}
                  {currentFile?.base64 && (
                    <Box mt={2}>
                      {currentFile.base64.startsWith("data:image") && (
                        <img
                          src={currentFile.base64}
                          alt="preview"
                          style={{ maxWidth: "40%" }}
                        />
                      )}
                      <Typography fontSize={12} fontWeight={500}>
                        Uploaded: {currentFile.name}
                      </Typography>
                    </Box>
                  )}

                  {currentFile?.name && (
                    <Button
                      variant="contained"
                      onClick={handleSubmit}
                      disabled={loading}
                      sx={{
                        backgroundColor: "#00999E",
                        textTransform: "capitalize",
                        mt: 2,
                        "&:hover": {
                          backgroundColor: "#007f80",
                        },
                      }}
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </Button>
                  )}
                </Stack>
              )}
            </Box>
          </Box>
        </Grid>

        {/* Filling application */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              borderRadius: "8.59px",
              border: "0.86px solid #9f9f9f",
              backgroundColor: "#E2FEFF",
              pb: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                p: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Filling Application
              </Typography>
              <Typography variant="body2">
                Status: Yes/No, Date, if application fees Paid: Yes/No (Date)
              </Typography>
            </Box>

            <Box
              sx={{
                width: "90%",
                backgroundColor: "#FFF",
                borderRadius: "10px",
                border: "1px solid #E4E4E4",
                margin: "auto",
                padding: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {/* Application applied row */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>Application Applied</Typography>
                <img
                  src={
                    data?.fillingApplication?.offerReceived === "yes"
                      ? rightIcon
                      : wrongIcon
                  }
                  alt="status-icon"
                  width={24}
                />
              </Box>

              {/* Applied Date */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>Applied Date</Typography>
                <Typography>
                  {data?.fillingApplication?.appliedDate
                    ? dayjs(data.fillingApplication.appliedDate).format(
                        "DD MMM YYYY",
                      )
                    : "-"}
                </Typography>
              </Box>

              {/* Applied Time */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>Applied Time</Typography>
                <Typography>
                  {data?.fillingApplication?.appliedTime
                    ? dayjs(
                        data.fillingApplication.appliedTime,
                        "HH:mm",
                      ).format("hh:mm A")
                    : "-"}
                </Typography>
              </Box>

              {/* Application Amount */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>Application Amount</Typography>
                <Typography>
                  {data?.fillingApplication?.applicationAmount
                    ? `Rs. ${data.fillingApplication.applicationAmount}/-`
                    : "-"}
                </Typography>
              </Box>

              {/* Applied via */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>Applied via</Typography>
                <Typography>
                  {data?.fillingApplication?.appliedVia?.toUpperCase() || "-"}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Conditional Offer Letter */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              borderRadius: "8.59px",
              border: "0.86px solid #9f9f9f",
              backgroundColor: "#E2FEFF",
              pb: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                p: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Conditional Offer Letter
              </Typography>
              <Typography variant="body2">
                Received : Yes / No, If Received conditional
              </Typography>
            </Box>

            <Box
              sx={{
                width: "90%",
                backgroundColor: "#FFF",
                borderRadius: "10px",
                border: "1px solid #E4E4E4",
                margin: "auto",
                padding: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography>Offer Letter Received</Typography>
                <img
                  src={
                    data?.conditionalOfferLetter?.offerReceived === "yes"
                      ? rightIcon
                      : wrongIcon
                  }
                  alt="status"
                  width={24}
                />
              </Box>

              <Box display="flex" justifyContent="space-between">
                <Typography>Received Date</Typography>
                <Typography>
                  {data?.conditionalOfferLetter?.receivedDate
                    ? dayjs(data.conditionalOfferLetter.receivedDate).format(
                        "DD MMM YYYY",
                      )
                    : "-"}
                </Typography>
              </Box>

              <Box display="flex" justifyContent="space-between">
                <Typography>Received Time</Typography>
                <Typography>
                  {data?.conditionalOfferLetter?.receivedTime
                    ? dayjs(
                        data.conditionalOfferLetter.receivedTime,
                        "HH:mm",
                      ).format("hh:mm A")
                    : "-"}
                </Typography>
              </Box>

              <Typography variant="subtitle2">
                Download Your Conditional Offer Letter
              </Typography>

              <Button
                variant="contained"
                disabled={!data?.conditionalOfferLetter?.file}
                href={data?.conditionalOfferLetter?.file || "#"}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#00999E",
                  "&:hover": {
                    backgroundColor: "#007f80",
                  },
                  fontSize: 13,
                  width: "100%",
                  py: 1,
                }}
              >
                Download
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Unconditional Offer Letter */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              borderRadius: "8.59px",
              border: "0.86px solid #9f9f9f",
              backgroundColor: "#E2FEFF",
              pb: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                p: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Unconditional Offer Letter
              </Typography>
              <Typography variant="body2">
                Received : Yes / No, If Received unconditional
              </Typography>
            </Box>

            <Box
              sx={{
                width: "90%",
                backgroundColor: "#FFF",
                borderRadius: "10px",
                border: "1px solid #E4E4E4",
                margin: "auto",
                padding: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography>Offer Letter Received</Typography>
                <img
                  src={
                    data?.unconditionalOfferLetter?.offerReceived === "yes"
                      ? rightIcon
                      : wrongIcon
                  }
                  alt="status"
                  width={24}
                />
              </Box>

              <Box display="flex" justifyContent="space-between">
                <Typography>Received Date</Typography>
                <Typography>
                  {data?.unconditionalOfferLetter?.receivedDate
                    ? dayjs(data.unconditionalOfferLetter.receivedDate).format(
                        "DD MMM YYYY",
                      )
                    : "-"}
                </Typography>
              </Box>

              <Box display="flex" justifyContent="space-between">
                <Typography>Received Time</Typography>
                <Typography>
                  {data?.unconditionalOfferLetter?.receivedTime
                    ? dayjs(
                        data.unconditionalOfferLetter.receivedTime,
                        "HH:mm",
                      ).format("hh:mm A")
                    : "-"}
                </Typography>
              </Box>

              <Typography variant="subtitle2">
                Download Your Unconditional Offer Letter
              </Typography>

              <Button
                variant="contained"
                disabled={!data?.unconditionalOfferLetter?.file}
                href={data?.unconditionalOfferLetter?.file || "#"}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#00999E",
                  "&:hover": {
                    backgroundColor: "#007f80",
                  },
                  fontSize: 13,
                  width: "100%",
                  py: 1,
                }}
              >
                Download
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Scholarship Application */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              borderRadius: "8.59px",
              border: "0.86px solid #9f9f9f",
              backgroundColor: "#E2FEFF",
              pb: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                p: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Scholarship Application
              </Typography>
              <Typography variant="body2">
                Received : Yes / No, If Received conditional
              </Typography>
            </Box>

            <Box
              sx={{
                width: "90%",
                backgroundColor: "#FFF",
                borderRadius: "10px",
                border: "1px solid #E4E4E4",
                margin: "auto",
                padding: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography>Offer Letter Received</Typography>
                <img
                  src={
                    data?.scholarshipApplication?.offerReceived === "yes"
                      ? rightIcon
                      : wrongIcon
                  }
                  alt="status"
                  width={24}
                />
              </Box>

              <Box display="flex" justifyContent="space-between">
                <Typography>Received Date</Typography>
                <Typography>
                  {data?.scholarshipApplication?.receivedDate
                    ? dayjs(data.scholarshipApplication.receivedDate).format(
                        "DD MMM YYYY",
                      )
                    : "-"}
                </Typography>
              </Box>

              <Box display="flex" justifyContent="space-between">
                <Typography>Received Time</Typography>
                <Typography>
                  {data?.scholarshipApplication?.receivedTime
                    ? dayjs(
                        data.scholarshipApplication.receivedTime,
                        "HH:mm",
                      ).format("hh:mm A")
                    : "-"}
                </Typography>
              </Box>

              <Typography variant="subtitle2">
                Download Your Scholarship Application
              </Typography>

              <Button
                variant="contained"
                disabled={!data?.scholarshipApplication?.file}
                href={data?.scholarshipApplication?.file || "#"}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#00999E",
                  "&:hover": {
                    backgroundColor: "#007f80",
                  },
                  fontSize: 13,
                  width: "100%",
                  py: 1,
                }}
              >
                Download
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
