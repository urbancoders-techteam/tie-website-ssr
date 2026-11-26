// @ts-nocheck
import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from "@iconify/react";
import {
  Avatar, Box, Button, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "@/portal/navigation";
import * as yup from "yup";

import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";
import CustomPreviewCard from "@/portal/Component/custom/CustomPreviewCard";
import { useSnackbar } from "@/portal/Component/Snakbar";

// Define validation schema using Yup
const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  mobile: yup
    .number()
    .typeError("Mobile must be a number")
    .required("Mobile is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  location: yup.string(),
  image: yup
    .string()
    .nullable()
    .test(
      "is-url-or-empty",
      "Image must be a valid URL",
      (value) => !value || value.startsWith("http") || value.startsWith("blob:")
    ),
  documents: yup.array(),
});

const ProfileForm = () => {
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const profileFileRef = useRef(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [initialDocuments, setInitialDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      mobile: "",
      email: "",
      location: "",
      image: null,
      documents: [],
    },
  });

  const token = sessionStorage.getItem("authToken");
  const userid = sessionStorage.getItem("userId");
  const [isFetching, setIsFetching] = useState(true);

  const imageValue = watch("image");

  const handleImageChange = useCallback(
    (event) => {
      const file = event.target.files?.[0];
      event.target.value = "";
      if (!file) return;
      if (!file.type.startsWith("image/")) {
        showSnackbar("Please choose a JPG, PNG, or WEBP photo.", "error");
        return;
      }
      if (profileImage && profileImage.startsWith("blob:")) {
        URL.revokeObjectURL(profileImage);
      }
      const imageUrl = URL.createObjectURL(file);
      profileFileRef.current = file;
      setProfileImage(imageUrl);
      setValue("image", imageUrl, { shouldDirty: true });
    },
    [profileImage, setValue, showSnackbar]
  );

  const handleFileChange = useCallback((event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    const studentId = {
      url: URL.createObjectURL(file),
      name: file.name,
      type: file.type || "application/octet-stream",
      file,
    };

    setUploadedFiles([studentId]);
    setValue(
      "documents",
      [{ url: studentId.url, name: studentId.name, type: studentId.type }],
      { shouldDirty: true },
    );
  }, [setValue]);

  const removeDocument = useCallback(
    (index, isInitialDoc = false) => {
      if (isInitialDoc) {
        setInitialDocuments((prev) => {
          const newDocs = [...prev];
          newDocs.splice(index, 1);
          setValue(
            "documents",
            [
              ...newDocs,
              ...uploadedFiles.map((f) => ({
                url: f.url,
                name: f.name,
                type: f.type,
              })),
            ],
            { shouldValidate: true }
          );
          return newDocs;
        });
      } else {
        setUploadedFiles((prev) => {
          const newFiles = [...prev];
          newFiles.splice(index - initialDocuments.length, 1);

          setValue(
            "documents",
            [
              ...initialDocuments,
              ...newFiles.map((f) => ({
                url: f.url,
                name: f.name,
                type: f.type,
              })),
            ],
            { shouldValidate: true }
          );
          return newFiles;
        });
      }
    },
    [initialDocuments, uploadedFiles, setValue]
  );
  const fetchUserData = useCallback(async () => {
    setIsFetching(true); // start loader

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}student/get-student/${userid}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      const { username, email, mobile, location, image, documents } =
        response.data.data;

      setValue("username", username || "");
      setValue("mobile", mobile ? Number(mobile) : "");
      setValue("email", email || "");
      setValue("location", location || "");

      if (image) {
        setProfileImage(image);
        setValue("image", image);
      }

      if (documents && documents.length > 0) {
        const docObjects = documents.map((doc) => ({
          url: doc.url,
          name: doc.name || doc.url.split("/").pop().split("?")[0],
          type: doc.type || getFileTypeFromUrl(doc.url),
        }));
        setInitialDocuments(docObjects);
        setValue("documents", docObjects, { shouldValidate: true });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsFetching(false); // hide loader
    }
  }, [userid, token, setValue]);

  // Helper function to guess file type from URL
  const getFileTypeFromUrl = (url) => {
    const extension = url.split(".").pop().split("?")[0].toLowerCase();
    switch (extension) {
      case "pdf":
        return "application/pdf";
      case "doc":
        return "application/msword";
      case "docx":
        return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
      case "xls":
        return "application/vnd.ms-excel";
      case "xlsx":
        return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      case "txt":
        return "text/plain";
      case "jpg":
      case "jpeg":
      case "png":
        return `image/${extension}`;
      default:
        return "application/octet-stream";
    }
  };

  useEffect(() => {
    if (userid) {
      fetchUserData();
    }
  }, [fetchUserData, userid]);

  const onSubmit = async (data) => {
    setIsLoading(true);

    const convertToBase64 = async (file) => {
      if (!(file instanceof Blob)) {
        console.error("Invalid file type for Base64 conversion:", file);
        return file;
      }
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    };

    let imageBase64 = data.image;
    const selectedPhoto = profileFileRef.current;
    if (selectedPhoto) {
      try {
        const dataUrl = await convertToBase64(selectedPhoto);
        const mime = (selectedPhoto.type || "image/jpeg").replace(
          "image/jpg",
          "image/jpeg",
        );
        const base64 = String(dataUrl).split(",")[1];
        imageBase64 = `data:${mime};base64,${base64}`;
      } catch (error) {
        console.error("Error converting image to Base64:", error);
        showSnackbar("Failed to convert profile image.", "error");
        setIsLoading(false);
        return;
      }
    }

    let documentList = [];
    try {
      if (uploadedFiles[0]?.file) {
        documentList = [{ url: await convertToBase64(uploadedFiles[0].file) }];
      } else {
        documentList = initialDocuments.map((doc) => ({ url: doc.url }));
      }
    } catch (error) {
      console.error("Error converting documents:", error);
      showSnackbar("Failed to process uploaded documents.", "error");
    }

    try {
      const payload = {
        username: data.username,
        email: data.email,
        mobile: data.mobile,
        location: data.location,
        image: imageBase64,
        documents: documentList,
      };

      const url = `${process.env.REACT_APP_BASE_URL}student/update-profile`;

      await axios.put(url, payload, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });

      showSnackbar("Profile updated successfully!", "success");
      navigate("/dashboard/home");
    } catch (error) {
      console.error("Error updating profile:", error);
      showSnackbar(
        error.response?.data?.message ||
          "An error occurred during profile update.",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const renderDocumentPreview = () => {
    const studentIdDocument = uploadedFiles[0]
      ? {
          url: uploadedFiles[0].url,
          name: uploadedFiles[0].name,
          type: uploadedFiles[0].type,
        }
      : initialDocuments[initialDocuments.length - 1];

    if (!studentIdDocument) return null;

    return (
      <Box sx={{ mt: 2.5 }}>
        <Typography sx={{ fontSize: 14, fontWeight: 600, color: "#344054", mb: 1.5 }}>
          Current Student ID
        </Typography>
        <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1.5 }}>
          <CustomPreviewCard
            doc={studentIdDocument}
            index={0}
            onRemove={() => {
              if (uploadedFiles[0]) {
                setUploadedFiles([]);
                setValue("documents", initialDocuments, { shouldDirty: true });
                return;
              }
              removeDocument(initialDocuments.length - 1, true);
            }}
          />
        </Stack>
      </Box>
    );
  };

  if (isFetching) {
    return <CustomCircularProgress />;
  }

  const fields = [
    { name: "username", label: "Username" },
    { name: "mobile", label: "Mobile", type: "number" },
    { name: "email", label: "Email", disabled: true },
    { name: "location", label: "Location" },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 3, md: 5 } }}>
      <Box sx={{ maxWidth: 1040, mx: "auto" }}>
        <Typography
          sx={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 600,
            color: "#181818",
            fontSize: { xs: 24, md: 32 },
            lineHeight: 1.2,
          }}
        >
          Update profile
        </Typography>
        <Typography sx={{ color: "#667085", mt: 0.75, mb: { xs: 3, md: 4 } }}>
          Keep your photo, contact details, and student ID up to date.
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3} alignItems="flex-start">
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  border: "1px solid #E6E8EC",
                  borderRadius: "16px",
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Avatar
                  key={profileImage || imageValue || "empty"}
                  src={profileImage || imageValue || undefined}
                  sx={{
                    width: 168,
                    height: 168,
                    bgcolor: "#E6F6F6",
                    color: "#00999E",
                    border: "4px solid #E6F6F6",
                    "& img": { objectFit: "cover", width: "100%", height: "100%" },
                  }}
                />
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    mt: 2.5,
                    width: "100%",
                    maxWidth: 220,
                    height: 40,
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: 600,
                    bgcolor: "#00999E",
                    boxShadow: "none",
                    "&:hover": { bgcolor: "#007f80", boxShadow: "none" },
                  }}
                >
                  Update photo
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    hidden
                    onChange={handleImageChange}
                  />
                </Button>
                {errors.image && (
                  <Typography color="error" sx={{ mt: 1, fontSize: 13 }}>
                    {errors.image.message}
                  </Typography>
                )}
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  border: "1px solid #E6E8EC",
                  borderRadius: "16px",
                  p: { xs: 2, sm: 3 },
                }}
              >
                <Grid container spacing={2.5}>
                  {fields.map((field) => (
                    <Grid item xs={12} sm={6} key={field.name}>
                      <Controller
                        name={field.name}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <Box>
                            <Typography
                              component="label"
                              htmlFor={`profile-${field.name}`}
                              sx={{
                                display: "block",
                                mb: 0.75,
                                fontSize: 14,
                                fontWeight: 600,
                                color: "#344054",
                              }}
                            >
                              {field.label}
                            </Typography>
                            <TextField
                              id={`profile-${field.name}`}
                              fullWidth
                              size="small"
                              placeholder={field.label}
                              value={value || ""}
                              onChange={onChange}
                              error={!!errors[field.name]}
                              helperText={errors[field.name]?.message}
                              type={field.type || "text"}
                              disabled={field.disabled}
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  borderRadius: "8px",
                                  backgroundColor: field.disabled
                                    ? "#F8F9FB"
                                    : "#fff",
                                },
                              }}
                            />
                          </Box>
                        )}
                      />
                    </Grid>
                  ))}
                </Grid>

                <Typography
                  sx={{
                    display: "block",
                    mt: 3,
                    mb: 1,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#344054",
                  }}
                >
                  Student ID
                </Typography>
                <Box
                  sx={{
                    border: "1.5px dashed #00999E",
                    borderRadius: "12px",
                    bgcolor: "#F4FBFB",
                    textAlign: "center",
                    py: 3,
                    px: 2,
                  }}
                >
                  <Icon
                    icon="flowbite:upload-solid"
                    style={{ color: "#00999E", fontSize: "28px" }}
                  />
                  <Typography sx={{ mt: 1, fontWeight: 600, color: "#181818" }}>
                    Upload your student ID
                  </Typography>
                  <Typography sx={{ mt: 0.5, fontSize: 13, color: "#667085" }}>
                    JPG, PNG, or PDF
                  </Typography>
                  <Button
                    variant="contained"
                    component="label"
                    sx={{
                      mt: 2,
                      minWidth: 180,
                      height: 38,
                      borderRadius: "8px",
                      textTransform: "none",
                      fontWeight: 600,
                      bgcolor: "#fff",
                      color: "#00999E",
                      border: "1px solid #00999E",
                      boxShadow: "none",
                      "&:hover": { bgcolor: "#E6F6F6", boxShadow: "none" },
                    }}
                  >
                    Upload Student ID
                    <input
                      type="file"
                      hidden
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                    />
                  </Button>
                </Box>
                {errors.documents && (
                  <Typography color="error" sx={{ mt: 1, fontSize: 13 }}>
                    {errors.documents.message}
                  </Typography>
                )}

                {renderDocumentPreview()}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "stretch", sm: "flex-end" },
                    mt: 3,
                  }}
                >
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={isLoading}
                    sx={{
                      width: { xs: "100%", sm: 180 },
                      height: 42,
                      borderRadius: "8px",
                      textTransform: "none",
                      fontWeight: 600,
                      bgcolor: "#00999E",
                      boxShadow: "none",
                      "&:hover": { bgcolor: "#007f80", boxShadow: "none" },
                    }}
                  >
                    {isLoading ? "Saving..." : "Save profile"}
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default ProfileForm;
