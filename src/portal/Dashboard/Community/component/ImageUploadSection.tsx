// @ts-nocheck
import React, { useState } from "react";
import { Button, Typography, Box, IconButton } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { Icon } from "@iconify/react";
import DeleteIcon from "@mui/icons-material/Close";

const ImageUpload = ({ setImages }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [base64Images, setBase64Images] = useState([]);

  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const handleFiles = async (filesArray) => {
    const base64Files = await Promise.all(
      filesArray.map((file) => convertToBase64(file))
    );

    setUploadedFiles((prev) => [...prev, ...filesArray]);
    setBase64Images((prev) => [...prev, ...base64Files]);
    setImages((prev) => [...prev, ...base64Files]);
  };

  const handleFileChange = (event) => {
    const filesArray = Array.from(event.target.files);
    handleFiles(filesArray);
  };

  const handleRemove = (indexToRemove) => {
    const updatedFiles = uploadedFiles.filter(
      (_, index) => index !== indexToRemove
    );
    const updatedBase64 = base64Images.filter(
      (_, index) => index !== indexToRemove
    );

    setUploadedFiles(updatedFiles);
    setBase64Images(updatedBase64);
    setImages(updatedBase64);
  };

  return (
    <Box sx={{ paddingX: "10px" }}>
      <Typography
        variant="body1"
        sx={{ fontWeight: "bold", marginBottom: "5px", paddingX: "10px" }}
      >
        Upload Document
      </Typography>

      <Box
        sx={{
          border: "1px dashed grey",
          borderRadius: "5px",
          bgcolor: "#FFFFFF",
          textAlign: "center",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          m: "10px",
        }}
      >
        <Icon
          icon="flowbite:upload-solid"
          style={{ color: "#80869A", fontSize: "30px" }}
        />
        <Typography variant="h6" color={"#606060"}>
          Drag and Drop Or Select to upload your Documents
        </Typography>
        <Typography variant="caption" color={"#9BA1B2"}>
          JPG, PNG or PDF, file size no more than 10MB
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "Row",
            paddingRight: "20px",
            gap: "5px",
            mb: "20px",
          }}
        >
          <Button
            variant="contained"
            component="label"
            sx={{
              bgcolor: "#fff",
              border: "2px solid #00999E",
              borderRadius: "10px",
              color: "#00999E",
              "&:hover": {
                bgcolor: "#fff",
                border: "1px solid #00999E",
                color: "#00999E",
              },
            }}
          >
            Select File
            <input
              type="file"
              hidden
              multiple
              onChange={handleFileChange}
              accept=".png, .jpg, .jpeg"
            />
          </Button>
        </Box>
      </Box>

      {uploadedFiles.length > 0 && (
        <Box sx={{ mt: 2, px: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Uploaded Documents:
          </Typography>
          <Grid container spacing={2}>
            {uploadedFiles.map((file, index) => (
              <Grid item xs={4} sm={3} md={3} key={index}>
                <Box
                  sx={{
                    position: "relative",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    overflow: "hidden",
                    textAlign: "center",
                    p: 1,
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={() => handleRemove(index)}
                    sx={{
                      position: "absolute",
                      top: 4,
                      right: 4,
                      backgroundColor: "#fff",
                      "&:hover": { backgroundColor: "#eee" },
                    }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>

                  {file.type.startsWith("image/") ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      style={{
                        width: "100%",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  ) : (
                    <Typography variant="body2" sx={{ mt: .5 }}>
                      {file.name}
                    </Typography>
                  )}
                  <Typography variant="caption" display="block" sx={{ mt: .5 }}>
                    {file.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default ImageUpload;
