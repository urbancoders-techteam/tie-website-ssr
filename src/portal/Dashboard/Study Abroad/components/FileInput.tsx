// @ts-nocheck
import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  InputLabel,
  CircularProgress,
  useTheme,
} from "@mui/material";
import { useSnackbar } from "@/portal/Component/Snakbar";

function FileInput({
  id,
  label,
  placeholder = "No file chosen",
  className,
  buttonClassName,
  asterisk = false,
  name,
  onFileUpload,
  value,
  acceptFiles,
  disabled = false,
}) {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState(placeholder);
  const [fileSelected, setFileSelected] = useState(false);
  const [uploading, setUploading] = useState(false);
  const theme = useTheme();
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (!value) {
      resetState();
    } else {
      setFileSelected(true);
      const extractedName = extractFileName(value?.url || value);
      setFileName(extractedName || "Uploaded");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const resetState = () => {
    setFileName(placeholder);
    setFileSelected(false);
    if (inputRef.current) inputRef.current.value = "";
  };

  const uploadFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      showSnackbar(
        "File size exceeds 5MB. Please upload a smaller file.",
        "error"
      );
      resetState();
      return;
    }

    setFileName(file.name);
    setFileSelected(true);
    setUploading(true);

    try {
      const base64Url = await uploadFileToBase64(file);
      onFileUpload?.(base64Url, file.name);
    } catch (err) {
      showSnackbar("Failed to read file.", "error");
      resetState();
    } finally {
      setUploading(false);
    }
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const extractFileName = (urlOrBase64) => {
    if (!urlOrBase64) return null;

    try {
      if (urlOrBase64.startsWith("data:")) {
        const mime = urlOrBase64.match(/^data:(.+);base64/);
        return mime ? `uploaded.${mime[1].split("/")[1]}` : "Uploaded";
      }
      if (urlOrBase64.includes("/")) {
        const urlParts = urlOrBase64.split("/");
        return urlParts[urlParts.length - 1].split("?")[0];
      }
      return urlOrBase64;
    } catch {
      return "Uploaded";
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={1} className={className}>
      {label && (
        <InputLabel htmlFor={id} sx={{ fontWeight: 500 }}>
          {label}
          {asterisk && (
            <Typography
              component="span"
              color={theme.palette.primary.main}
              fontWeight={600}
              ml={0.5}
            >
              *
            </Typography>
          )}
        </InputLabel>
      )}

      <Box display="flex" alignItems="center" gap={2}>
        <input
          ref={inputRef}
          id={id}
          type="file"
          accept={acceptFiles}
          name={name}
          disabled={disabled}
          onChange={handleFileChange}
          hidden
        />

        <Box
          sx={{
            flex: 1,
            px: 2,
            py: 1.5,
            border: "1px solid",
            borderColor: "grey.300",
            borderRadius: 1,
            bgcolor: fileSelected ? "grey.100" : "grey.50",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontSize: "0.875rem",
            color: "text.secondary",
          }}
        >
          {fileName}
        </Box>

        <Button
          variant="contained"
          color={fileSelected ? "success" : "primary"}
          onClick={handleButtonClick}
          disabled={disabled || uploading}
          className={buttonClassName}
          sx={{
            minWidth: 120,
            textTransform: "none",
            whiteSpace: "nowrap",
            bgcolor: fileSelected ? "#4CAF50" : "#00999E", // ✅ dynamic bg color
            "&:hover": {
              bgcolor: fileSelected ? "#43A047" : "#007C80", // ✅ hover color
            },
          }}
        >
          {uploading ? (
            <CircularProgress size={20} color="inherit" />
          ) : fileSelected ? (
            "Uploaded"
          ) : (
            "Upload"
          )}
        </Button>
      </Box>
    </Box>
  );
}

export default FileInput;
