// @ts-nocheck
import { Box, Button, Chip, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { LoadingButton } from "@mui/lab";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "@/portal/Component/Snakbar";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";
import CustomPreviewCard from "@/portal/Component/custom/CustomPreviewCard";
import { uploadPsychometricDocumentAsync } from "@/portal/redux/services/psychometricService";
import { getUploadedPsychometricDocumentsAsync } from "@/portal/redux/services/psycometricServices";

const MIME_TYPE_MAP = {
  pdf: "application/pdf",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

function statusBgColor(reportStatusValue) {
  if (reportStatusValue === "Approved") return "success.main";
  if (reportStatusValue === "Pending") return "warning.main";
  return "error.main";
}

const innerCardSx = {
  width: "97%",
  padding: { xs: "16px", sm: "24px" },
  borderRadius: "20px",
  backgroundColor: "#FFFFFF",
  border: "1px solid #ccc",
  boxSizing: "border-box",
  margin: { xs: "7px" },
};

export default function PsychometricTestSection() {
  const { showSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { getUploadedPsychometricDocuments, isLoading } = useSelector(
    (state) => state.psychometric,
  );

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isNewFileUploaded, setIsNewFileUploaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const status = getUploadedPsychometricDocuments?.reportStatus;
  const hasFiles = uploadedFiles.length > 0;

  const isSubmitDisabled = useMemo(
    () =>
      (!isNewFileUploaded && !!getUploadedPsychometricDocuments?.testReport) ||
      uploadedFiles.length === 0,
    [
      isNewFileUploaded,
      getUploadedPsychometricDocuments?.testReport,
      uploadedFiles.length,
    ],
  );

  useEffect(() => {
    dispatch(getUploadedPsychometricDocumentsAsync());
  }, [dispatch]);

  useEffect(() => {
    if (getUploadedPsychometricDocuments?.testReport && !isNewFileUploaded) {
      const url = getUploadedPsychometricDocuments.testReport;
      const ext = url.split(".").pop().toLowerCase();
      const fileType = MIME_TYPE_MAP[ext] || "application/octet-stream";

      setUploadedFiles([
        {
          url,
          name: `Uploaded_Report.${ext}`,
          type: fileType,
          file: null,
        },
      ]);
    }
  }, [getUploadedPsychometricDocuments, isNewFileUploaded]);

  const handleFileChange = useCallback((event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;

    const fileReaders = files.map(
      (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve({
              url: reader.result,
              name: file.name,
              type: file.type,
              file,
            });
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        }),
    );

    Promise.all(fileReaders)
      .then((newFiles) => {
        setUploadedFiles(newFiles);
        setIsNewFileUploaded(true);
        event.target.value = "";
      })
      .catch(() => {
        showSnackbar("Could not read the selected file.", "error");
      });
  }, [showSnackbar]);

  const handleSubmitFile = async () => {
    if (!isNewFileUploaded || uploadedFiles.length === 0) return;

    const file = uploadedFiles[0];
    if (!file.file && typeof file.url === "string") return;

    try {
      setIsSubmitting(true);
      const res = await dispatch(
        uploadPsychometricDocumentAsync({
          testReport: file.url,
          reportStatus: "Pending",
        }),
      ).unwrap();

      showSnackbar(res?.payload?.message || res?.message, "success");
      setIsNewFileUploaded(false);
      dispatch(getUploadedPsychometricDocumentsAsync());
    } catch (error) {
      showSnackbar(
        error?.message || "Submission failed. Please try again.",
        "error",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <CustomCircularProgress />;
  }

  return (
    <Box sx={innerCardSx}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          mb: 2,
        }}
      >
        {getUploadedPsychometricDocuments !== null && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Chip
              label={getUploadedPsychometricDocuments?.reportStatus}
              sx={{
                bgcolor: statusBgColor(
                  getUploadedPsychometricDocuments?.reportStatus,
                ),
                color: "#fff",
                fontWeight: "semibold",
                textTransform: "capitalize",
                textAlign: "center",
                padding: 2,
              }}
              size="small"
            />
          </Box>
        )}

        <Typography variant="h6" sx={{ fontSize: 18, fontWeight: "600" }}>
          Upload Your Psychometric Test Report
        </Typography>

        {status === "Not Approved" && (
          <Typography
            sx={{
              mt: 2,
              color: "error.main",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            {getUploadedPsychometricDocuments?.remark}
          </Typography>
        )}

        {(status === undefined || status === "Not Approved") && (
          <Box
            sx={{
              border: "1px dashed grey",
              borderRadius: "5px",
              bgcolor: "#DEF2F3",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              p: 2,
              mt: 2,
              width: "100%",
            }}
          >
            <Icon
              icon="flowbite:upload-solid"
              style={{ color: "#80869A", fontSize: "50px" }}
            />
            <Typography variant="subtitle2" sx={{ fontSize: 18 }}>
              Drag and Drop or Select to Upload Documents
            </Typography>
            <Typography variant="caption">
              Supports PDF, Images or Word File
            </Typography>
            <Button
              variant="contained"
              component="label"
              sx={{
                bgcolor: "#fff",
                width: "150px",
                border: "1px solid #00999E",
                color: "#00999E",
                mt: 2,
              }}
            >
              Select File
              <input
                type="file"
                hidden
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                onChange={handleFileChange}
              />
            </Button>
          </Box>
        )}

        {hasFiles && (
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 3,
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Uploaded Documents:
            </Typography>
            {uploadedFiles.map((doc, index) => (
              <CustomPreviewCard
                key={`doc-${doc.name}-${index}`}
                doc={doc}
                index={index}
              />
            ))}
          </Box>
        )}

        {status !== "Pending" && status !== "Approved" && (
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LoadingButton
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#00999E",
                "&:hover": { backgroundColor: "#007f80", color: "#fff" },
                width: { xs: "110px", sm: "160px" },
                fontSize: 13,
                padding: "7px 4px",
              }}
              onClick={handleSubmitFile}
              disabled={isSubmitDisabled}
              loading={isSubmitting}
            >
              Submit Report
            </LoadingButton>

            {!isSubmitDisabled && (
              <LoadingButton
                variant="contained"
                onClick={() => setUploadedFiles([])}
                sx={{
                  mt: 2,
                  backgroundColor: "#dc3545",
                  "&:hover": { backgroundColor: "#c82333", color: "#fff" },
                  width: { xs: "110px", sm: "160px" },
                  fontSize: 13,
                  padding: "7px 4px",
                }}
              >
                Remove
              </LoadingButton>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}
