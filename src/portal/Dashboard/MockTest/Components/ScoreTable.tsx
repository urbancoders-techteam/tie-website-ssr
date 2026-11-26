// @ts-nocheck
import { Icon } from "@iconify/react";
import {
  Avatar, Box, Button, Card, CardContent, CardHeader, Checkbox, CircularProgress, FormControlLabel, IconButton, List, TextareaAutosize, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { useEffect, useState } from "react";
import { useParams } from "@/portal/navigation";
import MainHeader from "@/portal/Component/content-component/MainHeader";

const AnswerTable = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id, type } = useParams();
  const token = sessionStorage.getItem("authToken");

  // ✅ Get testType from query params
  const queryParams = new URLSearchParams(window.location.search);
  const testTypeFromURL = queryParams.get("testType");

  // ✅ Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}test/user-checked-answer`,
          {
            method: "POST",
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              testId: id,
              type: type,
              testType: testTypeFromURL,
            }),
          }
        );

        const result = await response.json();

        if (result.success && result.data) {
          setData(result.data);
        } else {
          setData(null);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null);
        setLoading(false);
      }
    };

    fetchData();
  }, [id, token, type, testTypeFromURL]);

  // ✅ Show loading spinner
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  // ✅ Handle no data case
  if (!data) {
    return (
      <Typography variant="h6" textAlign="center" mt={5}>
        No data available
      </Typography>
    );
  }

  // ✅ Extract section data safely
  const currentSection = data?.[data?.type] || {};
  const questionData = currentSection?.data || [];
  const totalCorrect = currentSection?.totalCorrect || 0;
  const totalIncorrect = currentSection?.totalIncorrect || 0;
  const totalUnanswered = currentSection?.totalUnanswered || 0;
  const obtainMarks = currentSection?.obtainMarks || 0;
  const totalMarks = currentSection?.totalMarks || 0;
  const checkerName = currentSection?.checkerName || "Faculty";
  const facultyFeedback = currentSection?.facultyFeedback || "";
  const answerKeyUrl = currentSection?.answerKeyUrl || null;

  return (
    <Box>
      {/* ✅ Questions List */}
      {data.type !== "writing" && (
        <List
          sx={{
            overflowY: "auto",
            padding: 0,
            width: "100%",
          }}
        >
          {questionData.map((item, index) => (
            <Box
              key={index}
              sx={{
                border: "1px solid #80869A",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: index % 2 === 0 ? "#e8f5fe" : "#FFFFFF",
                padding: "10px",
                borderRadius: "5px",
                my: 1,
              }}
            >
              {/* ✅ Question Number & Type */}
              <Box>
                <Typography
                  variant="body1"
                  sx={{ color: "#00999B", fontSize: "16px", fontWeight: "500" }}
                >
                  Question {item.questionNumber ?? index + 1}: (
                  {data.type === "speaking"
                    ? "Audio Upload"
                    : item.questionType}
                  )
                </Typography>

                {/* ✅ Answer Rendering */}
                {item.questionType === "text field" ? (
                  <Typography>Ans: {item.answer?.[0] || "-"}</Typography>
                ) : item.questionType === "mcq" ||
                  item.questionType === "msq" ? (
                  ["A", "B", "C", "D", "E", "F"].map((option) => (
                    <FormControlLabel
                      key={option}
                      control={
                        <Checkbox
                          checked={item.answer?.includes(option)}
                          sx={{ color: "#00999E" }}
                          checkedIcon={
                            <Icon
                              icon="material-symbols:check-box"
                              style={{ color: "#00999E", fontSize: "24px" }}
                            />
                          }
                        />
                      }
                      label={option}
                    />
                  ))
                ) : null}
              </Box>

              {/* ✅ Status Buttons */}
              <Box
                display="flex"
                alignItems="center"
                gap={2}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#e8f5fe" : "#FFFFFF",
                  flexDirection: { xs: "column", sm: "row" },
                  padding: { xs: 2, sm: 0 },
                }}
              >
                {["pending", "rejected", "approved"].map((status) => (
                  <IconButton
                    key={status}
                    sx={{
                      backgroundColor:
                        item.correct && status === "approved"
                          ? "#009A3D"
                          : item.incorrect && status === "rejected"
                          ? "#AD0000"
                          : !item.correct &&
                            !item.incorrect &&
                            status === "pending"
                          ? "#F9C45B"
                          : index % 2 === 0
                          ? "#e8f5fe"
                          : "#FFFFFF",
                      borderRadius: "8px",
                      width: "33px",
                      height: "33px",
                      border: "1px solid #ccc",
                    }}
                  >
                    <Icon
                      icon={
                        status === "pending"
                          ? "carbon:radio-button"
                          : status === "rejected"
                          ? "maki:cross"
                          : "mingcute:check-2-line"
                      }
                      style={{
                        color:
                          (item.correct && status === "approved") ||
                          (item.incorrect && status === "rejected") ||
                          (!item.correct &&
                            !item.incorrect &&
                            status === "pending")
                            ? "#FFFFFF"
                            : "#000000",
                        fontSize: "18px",
                      }}
                    />
                  </IconButton>
                ))}
              </Box>
            </Box>
          ))}
        </List>
      )}

      {/* ✅ Writing Section */}
      {data.type === "writing" && (
        <Grid container spacing={2}>
          {questionData.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  border: "2px solid #666666",
                  padding: "20px",
                  minHeight: "500px",
                }}
              >
                <Typography sx={{ color: "#00999E", mb: "10px" }}>
                  Passage {item.passageNumber || index + 1}
                </Typography>
                <TextareaAutosize
                  minRows={10}
                  disabled
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
                  placeholder={`Start typing here...`}
                  value={item.answer || ""}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      )}

      {/* ✅ Overall Score */}
      <Box sx={{ padding: "10px", mt: "20px" }}>
        <MainHeader
          content="Overall Marks Obtained"
          fontWeight="550"
          fontSize="28px"
        />
        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          sx={{
            mt: "10px",
            border: "1px solid #666660",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          {data.type !== "writing" && (
            <ScoreCard
              title="Total Correct"
              score={`${totalCorrect} Points`}
              color="#00ACC1"
            />
          )}
          {data.type !== "writing" && (
            <ScoreCard
              title="Unanswered"
              score={`${totalUnanswered} Points`}
              color="#FFB300"
            />
          )}
          {data.type !== "writing" && (
            <ScoreCard
              title="Incorrect"
              score={`${totalIncorrect} Points`}
              color="#E53935"
            />
          )}
          <ScoreCard
            title="Total Score Marks"
            score={`${obtainMarks}/${totalMarks} Points`}
            color="#000"
          />
        </Box>
      </Box>

      {/* ✅ Faculty Feedback */}
      <Box sx={{ padding: "10px", mt: "20px" }}>
        <MainHeader
          content="Faculty Feedback"
          fontWeight="550"
          fontSize="28px"
        />
        <Box
          sx={{
            mt: "10px",
            border: "1px solid #666660",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <Card elevation={0}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#00999E" }}>{checkerName[0]}</Avatar>
              }
              title={checkerName}
            />
            <CardContent>
              <Typography variant="body2" color="#404040">
                {facultyFeedback || "No feedback available"}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
      {/* ✅ Answer Key Section */}
      {answerKeyUrl && (
        <Box sx={{ padding: "10px", mt: "20px" }}>
          <MainHeader content="Answer Key" fontWeight="550" fontSize="28px" />
          <Box
            sx={{
              mt: "10px",
              border: "1px solid #666660",
              padding: "15px",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            {/* ✅ Answer Key Section (Admin-style UI) */}
            {answerKeyUrl && (
              <Box
                sx={{
                  padding: "10px",
                  mt: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Icon
                    icon="vscode-icons:file-type-pdf2"
                    style={{ fontSize: 40, color: "#d32f2f" }}
                  />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      Uploaded Answer Key
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="outlined"
                  onClick={() =>
                    window.open(answerKeyUrl, "_blank", "noopener,noreferrer")
                  }
                  sx={{
                    ml: "auto",
                    color: "#00999E",
                    borderColor: "#00999E",
                    "&:hover": {
                      backgroundColor: "rgba(0,153,158,0.1)",
                      borderColor: "#00999E",
                    },
                  }}
                >
                  Open
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AnswerTable;

const ScoreCard = ({ title, score, color }) => (
  <Box>
    <MainHeader
      content={title}
      fontWeight="550"
      fontSize="15px"
      color="#545454"
      textAlign="center"
    />
    <Card
      variant="outlined"
      sx={{
        paddingTop: "10px",
        borderColor: color,
        borderWidth: 2,
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography variant="h7" sx={{ color }}>
          {score}
        </Typography>
      </CardContent>
    </Card>
  </Box>
);
