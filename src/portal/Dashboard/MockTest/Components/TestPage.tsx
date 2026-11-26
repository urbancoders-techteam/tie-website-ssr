// @ts-nocheck
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";
import { Tabs, Tab, Box, Typography, LinearProgress, TextField, TextareaAutosize, Button, Modal, Checkbox, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Chip } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { useTimer } from "react-timer-hook";
import { useNavigate, useParams } from "@/portal/navigation";
import { Icon } from "@iconify/react";
import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
const pdfWorker = "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";

import MainHeader from "@/portal/Component/content-component/MainHeader";
import AudioPlayer from "./AudioPlayer";
import ButtonComponent from "@/portal/Component/content-component/ButtonComponent";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";
import { useSnackbar } from "@/portal/Component/Snakbar";

function TestPage() {
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { id, type, testTypeParams } = useParams();
  const token = sessionStorage.getItem("authToken");

  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [timerExpiry, setTimerExpiry] = useState(null);
  const [answers, setAnswers] = useState({});

  const [testType, setTestType] = useState(null);

  const [showModal, setShowModal] = useState(true);

  const [wordCount, setWordCount] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  const [uploadFiles, setUploadFiles] = useState({});

  const [values, setValues] = useState(null);
  const [readingTab, setReadingTab] = useState(values?.tabs?.[0]);

  useEffect(() => {
    if (values?.tabs?.length > 0) {
      setReadingTab(values.tabs[0]);
    }
  }, [values]);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const fetchTestDetails = async (testId, type) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}test/testById`,
        {
          method: "POST",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ testId, type }),
        }
      );
      const data = await response.json();

      const fetchData =
        data?.data?.type === "reading"
          ? data?.data?.reading
          : data?.data?.type === "writing"
          ? data?.data?.writing
          : data?.data?.type === "listening"
          ? data?.data?.listening
          : data?.data?.type === "aptitude"
          ? data?.data?.aptitude
          : data?.data?.speaking;

      const fetchTestType = data?.data?.type;

      setValues(fetchData);
      setTestType(fetchTestType);
    } catch (error) {
      console.error("Error fetching test details:", error);
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

  // Fetch test details
  useEffect(() => {
    fetchTestDetails(id, type);
  }, [id, type]);

  const durationInSeconds = values?.duration * 60;
  const { seconds, minutes, hours, restart } = useTimer({
    expiryTimestamp: timerExpiry,
    onExpire: () => submitAnswers(),
    autoStart: false,
  });

  const startTest = () => {
    const expiryTime = new Date();
    expiryTime.setSeconds(expiryTime.getSeconds() + durationInSeconds);
    setTimerExpiry(expiryTime);
    restart(expiryTime);
    setShowModal(false);
  };

  const handleCancel = () => navigate(-1);

  const handleWritingAnswer = (e, tab) => {
    const text = e.target.value;

    setAnswers((prev) => ({
      ...prev,
      [tab._id]: text,
    }));

    setWordCount((prev) => ({
      ...prev,
      [tab._id]: text.trim().split(/\s+/).filter(Boolean).length, // word count
    }));
  };

  const handleAnswerChange = (e, tab) => {
    const text = e.target.value;

    setAnswers((prev) => ({
      ...prev,
      [tab._id]: text,
    }));
  };

  // MCQ (single choice)
  const handleMCQChange = (tab, option) => {
    setAnswers((prev) => ({
      ...prev,
      [tab._id]: option,
    }));
  };

  // MSQ (multiple choice)
  const handleMSQChange = (tab, option) => {
    setAnswers((prev) => {
      const prevOptions = prev[tab._id] || [];
      const updatedOptions = prevOptions.includes(option)
        ? prevOptions.filter((o) => o !== option)
        : [...prevOptions, option];
      return { ...prev, [tab._id]: updatedOptions };
    });
  };

  const handleFileUpload = (e, tabId) => {
    const files = Array.from(e.target.files);

    setUploadFiles((prev) => ({
      ...prev,
      [tabId]: [...(prev[tabId] || []), ...files], // ✅ Store per tab
    }));

    e.target.value = ""; // ✅ Reset input after upload
  };

  const handleFileRemove = (tab, index) => {
    setUploadFiles((prev) => {
      const updatedFiles = [...(prev[tab._id] || [])];
      updatedFiles.splice(index, 1);

      return {
        ...prev,
        [tab._id]: updatedFiles,
      };
    });
  };

  // Prepare answer payload
  const prepareAnswerData = () => {
    return (
      values?.tabs?.map((tab, index) => {
        const type = tab?.question?.type;
        const value = answers[tab._id];

        return {
          passageNumber: (index + 1).toString(),
          questionId: tab._id,
          questionType: type,
          answer: type === "msq" ? value || [] : value ? [value] : [""],
          uploadFiles: uploadFiles[tab?._id] || [],
        };
      }) || []
    );
  };

  const submitAnswers = async () => {
    const answerData = prepareAnswerData();
    console.log("prepareAnswerData", answerData);
    try {
      setIsSubmitting(true);

      // ✅ FormData for files
      const formData = new FormData();
      formData.append("testId", id);
      formData.append("type", testType);
      formData.append("data", JSON.stringify(answerData));
      formData.append(
        "testType",
        testTypeParams === "PracticeAssignment" ? "practice" : "mock"
      );

      // Append files for each question
      (values?.tabs || []).forEach((tab) => {
        const files = uploadFiles[tab._id] || [];
        files.forEach((file) => {
          formData.append(`uploadFiles[${tab._id}]`, file);
        });
      });

      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}test/submitAnswer`,
        {
          method: "POST",
          headers: {
            Authorization: token,
          },
          body: formData,
        }
      );

      const result = await response.json();

      if (response.ok) {
        showSnackbar("Test submitted successfully!", "success");
        handleCloseDialog();
        navigate(-1);
      } else {
        showSnackbar(`Submission failed: ${result.message}`, "error");
      }
    } catch (error) {
      console.error("Error submitting answers:", error);
      showSnackbar("Something went wrong while submitting.", "error");
    } finally {
      setTimeout(() => setIsSubmitting(false), 1000);
    }
  };

  const toolbarPluginInstance = toolbarPlugin({
    layout: (Toolbar) => (
      <div style={{ padding: "0 2px" }}>
        <Toolbar>
          {({ CurrentPageInput, GoToNextPage, GoToPreviousPage }) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              <GoToPreviousPage>
                {(props) => <button {...props}>Previous</button>}
              </GoToPreviousPage>
              <div style={{ margin: "0 20px" }}>
                <CurrentPageInput />
              </div>
              <GoToNextPage>
                {(props) => <button {...props}>Next</button>}
              </GoToNextPage>
            </div>
          )}
        </Toolbar>
      </div>
    ),
  });

  const { Toolbar } = toolbarPluginInstance;

  return (
    <Box sx={{ padding: "20px" }}>
      {/* Start Modal */}
      <Modal open={showModal}>
        <Box sx={{ bgcolor: "white", padding: "20px", textAlign: "center" }}>
          <Typography variant="h5">Are you ready to start the test?</Typography>
          <Button
            onClick={startTest}
            disabled={loading}
            variant="contained"
            sx={{ m: 2, bgcolor: "#00999E" }}
          >
            Start Test
          </Button>
          <Button
            disabled={loading}
            onClick={handleCancel}
            variant="contained"
            color="error"
            sx={{ m: 2 }}
          >
            Cancel
          </Button>
        </Box>
      </Modal>

      {/* Test Header */}
      <Box sx={{ display: "flex", alignItems: "center", mt: "30px" }}>
        <Icon
          icon="heroicons:light-bulb"
          style={{ color: "#00999E", fontSize: "28px" }}
        />
        <Box sx={{ pl: "20px" }}>
          <MainHeader
            content={
              testTypeParams === "PracticeAssignment"
                ? "Practice Assignment"
                : "Mock Test"
            }
            fontWeight={"550"}
            fontSize={"28px"}
          />
        </Box>
      </Box>

      {/* Test Content */}
      <Box p={3}>
        {loading ? (
          <CustomCircularProgress />
        ) : (
          <Box>
            {/* Timer */}
            <Box
              display="flex"
              flexDirection="column"
              sx={{ width: "100%" }}
              mb={2}
            >
              <Box
                sx={{
                  bgcolor: "#e0f7f7",
                  p: 2,
                  borderRadius: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    color: "#00999E",
                    fontWeight: 600,
                    fontSize: "1rem",
                    textTransform: "uppercase",
                  }}
                >
                  {values?.type?.charAt(0).toUpperCase() +
                    values?.type?.slice(1)}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Icon
                    icon="heroicons:clock"
                    style={{ color: "#00999E", fontSize: 24 }}
                  />
                  <Typography
                    sx={{
                      color: "#00999E",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                    }}
                  >
                    Time Left: {hours}:{minutes}:
                    {seconds < 10 ? `0${seconds}` : seconds}
                  </Typography>
                </Box>
              </Box>

              <LinearProgress
                variant="determinate"
                value={
                  ((durationInSeconds -
                    (hours * 3600 + minutes * 60 + seconds)) /
                    durationInSeconds) *
                  100
                }
                sx={{
                  width: "100%",
                  ".css-5xe99f-MuiLinearProgress-bar1": {
                    bgcolor: "#00999E",
                    borderRadius: 5,
                  },
                }}
              />
            </Box>

            {/* Tabs */}
            <Box sx={{ m: "20px 0" }}>
              <Tabs
                value={
                  values?.tabs?.findIndex(
                    (tab) => tab._id === readingTab?._id
                  ) ?? 0
                } // ✅ active tab ka index
                onChange={(e, newValue) =>
                  setReadingTab(values?.tabs?.[newValue])
                } // ✅ direct object set
                variant="fullWidth"
                textColor="inherit"
                sx={{ "& .MuiTabs-indicator": { backgroundColor: "#00999E" } }}
              >
                {values?.tabs?.map((tab, index) => (
                  <Tab key={index} label={tab?.name} />
                ))}
              </Tabs>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 2,
                  gap: 2,
                }}
              >
                <ButtonComponent
                  onClick={() => {
                    const currentIndex = values?.tabs?.findIndex(
                      (tab) => tab._id === readingTab?._id
                    );
                    if (currentIndex > 0) {
                      setReadingTab(values.tabs[currentIndex - 1]); // ✅ prev tab object set
                    }
                  }}
                  disabled={
                    values?.tabs?.findIndex(
                      (tab) => tab._id === readingTab?._id
                    ) === 0
                  }
                  text={"Previous"}
                  width={150}
                />

                <ButtonComponent
                  onClick={() => {
                    const currentIndex = values?.tabs?.findIndex(
                      (tab) => tab._id === readingTab?._id
                    );
                    if (currentIndex < values?.tabs?.length - 1) {
                      setReadingTab(values.tabs[currentIndex + 1]); // ✅ next tab object set
                    }
                  }}
                  disabled={
                    values?.tabs?.findIndex(
                      (tab) => tab._id === readingTab?._id
                    ) ===
                    values?.tabs?.length - 1
                  }
                  text={"Next"}
                  width={150}
                />
              </Box>
            </Box>

            <Box sx={{ mb: 5 }}>
              {readingTab?.audio && (
                <AudioPlayer key={readingTab} src={readingTab?.audio} />
              )}
            </Box>
            <Grid container spacing={2}>
              <Grid item md={7} xs={12}>
                <Box
                  sx={{
                    width: "100%",
                    bgcolor: "#effdff",
                    p: "5px 0",
                    border: "2px solid #9095a7",
                  }}
                >
                  <Toolbar />
                </Box>
                <Box
                  sx={{
                    height: "750px",
                    width: "100%",
                    border: "2px solid #9095a7",
                  }}
                >
                  <Worker workerUrl={pdfWorker}>
                    <Viewer
                      key={readingTab}
                      fileUrl={readingTab?.pdf}
                      plugins={[toolbarPluginInstance]}
                      defaultScale={SpecialZoomLevel.ActualSize}
                    />
                  </Worker>
                </Box>
              </Grid>

              <Grid item md={5} xs={12}>
                {/* Writing Task */}
                {testType === "writing" && readingTab && (
                  <Box
                    sx={{
                      width: "100%",
                      p: 3,
                      border: "2px solid #9095a7",
                      bgcolor: "#fff",
                    }}
                  >
                    <Typography variant="h6" fontWeight="semibold">
                      Writing Task : {readingTab?.index}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      Word Limit:{" "}
                      <Typography component="span" color="error.main">
                        {readingTab?.numberOfWord ?? 0} words
                      </Typography>
                    </Typography>

                    {/* Answer textarea */}
                    <TextareaAutosize
                      minRows={10}
                      style={{
                        width: "100%",
                        border: "none",
                        outline: "none",
                        resize: "none",
                        fontFamily: "monospace",
                        lineHeight: "2rem",
                        overflowY: "auto",
                        background: `repeating-linear-gradient(white, white 30px, #ccc 31px, white 32px)`,
                      }}
                      placeholder={`Start typing here... (Max ${readingTab?.numberOfWord} words)`}
                      value={answers[readingTab?._id] || ""}
                      onChange={(e) => handleWritingAnswer(e, readingTab)}
                    />

                    <Typography sx={{ mt: 1, color: "green" }}>
                      Word count: {wordCount[readingTab?._id] || 0}
                    </Typography>

                    {/* File upload section */}
                    {readingTab?.isUploadFiles && (
                      <Box sx={{ mt: 2 }}>
                        <input
                          type="file"
                          multiple
                          style={{ display: "none" }}
                          id={`file-upload-${readingTab?._id}`}
                          onChange={(e) => handleFileUpload(e, readingTab._id)}
                        />
                        <label htmlFor={`file-upload-${readingTab?._id}`}>
                          <Button
                            variant="outlined"
                            component="span"
                            size="small"
                            sx={{
                              borderColor: "#00999E",
                              color: "#00999E",
                              "&:hover": { bgcolor: "#e6f7f7" },
                            }}
                          >
                            Upload Files
                          </Button>
                        </label>

                        {/* Show uploaded files */}
                        {uploadFiles[readingTab?._id]?.length > 0 && (
                          <Box
                            sx={{
                              mt: 1,
                              display: "flex",
                              flexWrap: "wrap",
                              gap: 1,
                            }}
                          >
                            {uploadFiles[readingTab?._id].map((file, index) => {
                              const ext = file.name
                                .split(".")
                                .pop()
                                ?.toLowerCase();

                              const getIcon = () => {
                                if (["jpg", "jpeg", "png", "gif"].includes(ext))
                                  return "🖼️";
                                if (["pdf"].includes(ext)) return "📕";
                                if (["doc", "docx"].includes(ext)) return "📄";
                                if (["xls", "xlsx"].includes(ext)) return "📊";
                                if (["ppt", "pptx"].includes(ext)) return "📽️";
                                if (["mp3", "wav"].includes(ext)) return "🎵";
                                if (["mp4", "mov", "avi"].includes(ext))
                                  return "🎬";
                                return "📁";
                              };

                              return (
                                <Chip
                                  key={index}
                                  label={`${getIcon()} ${file.name}`}
                                  onDelete={() =>
                                    handleFileRemove(readingTab, index)
                                  }
                                  variant="outlined"
                                  color="primary"
                                  sx={{
                                    justifyContent: "flex-start",
                                    bgcolor: "#e0f7f7",
                                    borderColor: "#00999E",
                                    fontWeight: 500,
                                  }}
                                />
                              );
                            })}
                          </Box>
                        )}
                      </Box>
                    )}
                  </Box>
                )}

                {/* Listening / Reading / Aptitude */}
                {(testType === "listening" ||
                  testType === "reading" ||
                  testType === "aptitude") &&
                  readingTab && (
                    <Box
                      sx={{
                        p: 2,
                        border: "1px solid grey",
                        borderRadius: 1,
                        bgcolor: "#fff",
                        mb: 2,
                      }}
                    >
                      <Typography variant="h6" fontWeight="semibold">
                        Answer: {readingTab?.question?.questionNumber} (
                        {readingTab?.question?.type?.toUpperCase()})
                      </Typography>

                      {/* MCQ */}
                      {readingTab?.question?.type === "mcq" &&
                        ["A", "B", "C", "D", "E", "F"].map((option) => (
                          <Box
                            key={option}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mt: 1,
                            }}
                          >
                            <Checkbox
                              checked={answers[readingTab._id] === option}
                              onChange={() =>
                                handleMCQChange(readingTab, option)
                              }
                              sx={{ color: "#00999E" }}
                            />
                            <Typography>{option}</Typography>
                          </Box>
                        ))}

                      {/* MSQ */}
                      {readingTab?.question?.type === "msq" &&
                        ["A", "B", "C", "D", "E", "F"].map((option) => (
                          <Box
                            key={option}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mt: 1,
                            }}
                          >
                            <Checkbox
                              checked={
                                answers[readingTab._id]?.includes(option) ||
                                false
                              }
                              onChange={() =>
                                handleMSQChange(readingTab, option)
                              }
                              sx={{ color: "#00999E" }}
                            />
                            <Typography>{option}</Typography>
                          </Box>
                        ))}

                      {/* Text answer */}
                      {readingTab?.question?.type !== "mcq" &&
                        readingTab?.question?.type !== "msq" && (
                          <TextField
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={3}
                            value={answers[readingTab?._id] || ""}
                            onChange={(e) => handleAnswerChange(e, readingTab)}
                            placeholder="Write your answer here..."
                            sx={{ mt: 1 }}
                          />
                        )}

                      {/* File upload section */}
                      {readingTab?.isUploadFiles && (
                        <Box sx={{ mt: 2 }}>
                          <input
                            type="file"
                            multiple
                            style={{ display: "none" }}
                            id={`file-upload-${readingTab?._id}`}
                            onChange={(e) =>
                              handleFileUpload(e, readingTab._id)
                            }
                          />
                          <label htmlFor={`file-upload-${readingTab?._id}`}>
                            <Button
                              variant="outlined"
                              component="span"
                              size="small"
                              sx={{
                                borderColor: "#00999E",
                                color: "#00999E",
                                "&:hover": { bgcolor: "#e6f7f7" },
                              }}
                            >
                              Upload Files
                            </Button>
                          </label>

                          {uploadFiles[readingTab?._id]?.length > 0 && (
                            <Box
                              sx={{
                                mt: 1,
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 1,
                              }}
                            >
                              {uploadFiles[readingTab?._id].map(
                                (file, index) => {
                                  const ext = file.name
                                    .split(".")
                                    .pop()
                                    ?.toLowerCase();

                                  const getIcon = () => {
                                    if (
                                      ["jpg", "jpeg", "png", "gif"].includes(
                                        ext
                                      )
                                    )
                                      return "🖼️";
                                    if (["pdf"].includes(ext)) return "📕";
                                    if (["doc", "docx"].includes(ext))
                                      return "📄";
                                    if (["xls", "xlsx"].includes(ext))
                                      return "📊";
                                    if (["ppt", "pptx"].includes(ext))
                                      return "📽️";
                                    if (["mp3", "wav"].includes(ext))
                                      return "🎵";
                                    if (["mp4", "mov", "avi"].includes(ext))
                                      return "🎬";
                                    return "📁";
                                  };

                                  return (
                                    <Chip
                                      key={index}
                                      label={`${getIcon()} ${file.name}`}
                                      onDelete={() =>
                                        handleFileRemove(readingTab, index)
                                      }
                                      variant="outlined"
                                      color="primary"
                                      sx={{
                                        justifyContent: "flex-start",
                                        bgcolor: "#e0f7f7",
                                        borderColor: "#00999E",
                                        fontWeight: 500,
                                      }}
                                    />
                                  );
                                }
                              )}
                            </Box>
                          )}
                        </Box>
                      )}
                    </Box>
                  )}

                {/* Speaking Task */}
                {testType === "speaking" && readingTab?.isUploadFiles && (
                  <Box
                    sx={{
                      mt: 3,
                      p: 2,
                      border: "1px dashed #00999E",
                      borderRadius: 2,
                      bgcolor: "#f0fcfc",
                    }}
                  >
                    <input
                      type="file"
                      accept="audio/*"
                      multiple
                      style={{ display: "none" }}
                      id={`file-upload-${readingTab._id}`}
                      onChange={(e) => handleFileUpload(e, readingTab._id)}
                    />

                    <label htmlFor={`file-upload-${readingTab._id}`}>
                      <Button
                        variant="contained"
                        component="span"
                        size="small"
                        sx={{
                          bgcolor: "#00999E",
                          color: "#fff",
                          "&:hover": { bgcolor: "#007777" },
                        }}
                      >
                        Upload Files
                      </Button>
                    </label>

                    {uploadFiles[readingTab?._id]?.length > 0 && (
                      <Box
                        sx={{
                          mt: 1,
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                        }}
                      >
                        {uploadFiles[readingTab._id].map((file, index) => {
                          const ext = file.name.split(".").pop()?.toLowerCase();

                          const getIcon = () => {
                            if (["jpg", "jpeg", "png", "gif"].includes(ext))
                              return "🖼️";
                            if (["pdf"].includes(ext)) return "📕";
                            if (["doc", "docx"].includes(ext)) return "📄";
                            if (["xls", "xlsx"].includes(ext)) return "📊";
                            if (["ppt", "pptx"].includes(ext)) return "📽️";
                            if (["mp3", "wav"].includes(ext)) return "🎵";
                            if (["mp4", "mov", "avi"].includes(ext))
                              return "🎬";
                            return "📁";
                          };

                          return (
                            <Chip
                              key={index}
                              label={`${getIcon()} ${file.name}`}
                              onDelete={() =>
                                handleFileRemove(readingTab, index)
                              }
                              variant="outlined"
                              color="primary"
                              sx={{
                                justifyContent: "flex-start",
                                bgcolor: "#e0f7f7",
                                borderColor: "#00999E",
                                fontWeight: 500,
                              }}
                            />
                          );
                        })}
                      </Box>
                    )}
                  </Box>
                )}

                {/* Submit button */}
                {readingTab?.index === values?.tabs?.length ? (
                  <ButtonComponent
                    width={"100%"}
                    onClick={handleOpenDialog}
                    text={"Submit"}
                    height={"50px"}
                    fontWeight={"600"}
                    fontSize={14}
                    sx={{ my: 2 }}
                  />
                ) : (
                  <Typography variant="subtitle2" color={"gray"} sx={{ mt: 2 }}>
                    *To submit the test, move to the last tab.
                  </Typography>
                )}
              </Grid>
            </Grid>

            <Dialog
              open={openDialog}
              onClose={handleCloseDialog}
              maxWidth="xs"
              fullWidth
              PaperProps={{
                sx: {
                  borderRadius: 3,
                  p: 2,
                },
              }}
            >
              <DialogTitle
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                ⚠️ Confirm Submission
              </DialogTitle>

              <DialogContent>
                <DialogContentText
                  sx={{
                    fontSize: 14,
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  Are you sure you want to submit the test? Once submitted, you
                  will no longer be able to change your answers.
                </DialogContentText>
              </DialogContent>

              <DialogActions
                sx={{ justifyContent: "space-between", px: 3, pb: 2 }}
              >
                <Button
                  onClick={handleCloseDialog}
                  variant="outlined"
                  color="error"
                  sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    px: 3,
                    width: "50%",
                  }}
                >
                  Cancel
                </Button>

                <ButtonComponent
                  width={"50%"}
                  onClick={submitAnswers}
                  text={isSubmitting ? "Submitting..." : "Submit"}
                  fontWeight={"600"}
                  fontSize={14}
                  disabled={isSubmitting}
                  sx={{ my: 2 }}
                />
              </DialogActions>
            </Dialog>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default TestPage;
