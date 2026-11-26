// @ts-nocheck
import { Box, Typography, TextField, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "@/portal/navigation";
import MainHeader from "@/portal/Component/content-component/MainHeader";
import ImageUpload from "./component/ImageUploadSection";
import ButtonComponent from "@/portal/Component/content-component/ButtonComponent";

const CreateCommunityPost = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ title: "", message: "" });

  const token = sessionStorage.getItem("authToken");
  const navigate = useNavigate();

  const validate = () => {
    let isValid = true;
    const newErrors = { title: "", message: "" };

    if (!title.trim()) {
      newErrors.title = "Title is required.";
      isValid = false;
    }
    if (!message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    setLoading(true);

    const payload = {
      title: title.trim(),
      message: message.trim(),
      filledBy: "user",
      communityPosts: images.map((image) => ({ url: image })),
    };

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/community/create`, payload, {
        headers: {
          Authorization: ` ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setLoading(false);
        navigate(-1);
      })
      .catch((error) => {
        console.error("Error creating post:", error);
        setLoading(false);
      });
  };

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          mb: "30px",
        }}
      >
        <Box sx={{ pl: "20px", justifyContent: "flex-start" }}>
          <MainHeader
            content={"Create a new post"}
            fontWeight={"550"}
            fontSize={"28px"}
          />
        </Box>
      </Box>

      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "14px", sm: "10px", md: "18px", lg: "15px" },
          fontFamily: "Nunito, sans-serif",
          color: "#000000",
          paddingLeft: "20px",
          fontWeight: "500",
          textAlign: "left",
        }}
      >
        Fields marked with an asterisk(*) are required
      </Typography>

      <Box sx={{ padding: "20px", borderRadius: "5px" }}>
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", marginBottom: "5px" }}
        >
          Title<span style={{ color: "red" }}>*</span>
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Write a descriptive title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          InputProps={{ style: { backgroundColor: "white" } }}
          error={!!errors.title}
          helperText={errors.title}
        />
      </Box>

      <Box sx={{ padding: "20px", borderRadius: "5px" }}>
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", marginBottom: "5px" }}
        >
          Message/Queries<span style={{ color: "red" }}>*</span>
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Provide supporting details or context"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          InputProps={{ style: { backgroundColor: "white" } }}
          error={!!errors.message}
          helperText={errors.message}
        />
      </Box>

      <ImageUpload setImages={setImages} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "20px",
          gap: "10px",
          mt: 2,
        }}
      >
        <ButtonComponent
          text={
            loading ? <CircularProgress size={24} color="inherit" /> : "Post"
          }
          onClick={handleSubmit}
          width="150px"
          disabled={loading}
        />
        <ButtonComponent
          text="Cancel"
          backgroundColor="#FFFFFF"
          onClick={handleClick}
          color="#00999E"
          borderColor="#00999E"
          width="150px"
        />
      </Box>
    </Box>
  );
};

export default CreateCommunityPost;
