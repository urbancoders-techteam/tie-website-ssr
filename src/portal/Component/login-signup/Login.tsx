// @ts-nocheck
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { useNavigate, useLocation } from "@/portal/navigation";
import { LoadingButton } from "@mui/lab";
import { useSnackbar } from "../Snakbar";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  username: yup.string().when("type", {
    is: "register",
    then: yup.string().required("Username is required"),
  }),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Login = ({ type }) => {
  const { showSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      let response;
      if (type === "register") {
        response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}student/sign-up`,
          data
        );
      } else if (type === "login") {
        response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}student/login`,
          {
            email: data.email,
            password: data.password,
          }
        );
      }
      if (response.data.success) {
        const token = response?.data?.data?.token;
        const userid =
          type === "login"
            ? response.data.data.student._id
            : response.data.data.result._id;
        const username =
          type === "login"
            ? response.data.data.student.username
            : response.data.data.result.username;
        if (token) {
          sessionStorage.setItem("authToken", token);
          sessionStorage.setItem("username", username);
          sessionStorage.setItem("userId", userid);

          showSnackbar(
            type === "login" ? "Login successful!" : "Register Successful!",
            "success"
          );

          if (location.state?.path) {
            let cartData = JSON.parse(sessionStorage.getItem("cart"));
            if (cartData) {
              let transformedData = {
                userId:
                  type === "login"
                    ? response.data.data.student.id
                    : response.data.data._id,
                items: cartData.map((item) => ({
                  planName: item.title,
                  amount: item.packagePrice,
                  planId: item.id,
                })),
              };

              let cartResponse = await axios.post(
                `${process.env.REACT_APP_BASE_URL}order/add-cart`,
                transformedData,
                { headers: { Authorization: response.data.data.token } }
              );
              if (cartResponse.data.success) {
                sessionStorage.removeItem("cart");
              }
            }
          }

          const redirectPath = location.state?.path || "/dashboard/home";
          navigate(redirectPath);
          reset();
        } else {
          showSnackbar("Token is missing. Please try again.", "error");
        }
      } else {
        showSnackbar("An error occurred. Please try again.", "error");
      }
    } catch (error) {
      showSnackbar(
        error.response ? error.response.data.message : "An error occurred",
        "error"
      );
    }
    setLoading(false);
  };

  const passwordAdornment = (
    <InputAdornment position="end">
      <IconButton
        onClick={() => setShowPassword(!showPassword)}
        edge="end"
        size="small"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={2.25} sx={{ width: "100%" }}>
        <Box>
          <FieldLabel>Email address</FieldLabel>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                size="small"
                placeholder="name@email.com"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
                sx={fieldSx}
              />
            )}
          />
        </Box>

        {type === "register" && (
          <Box>
            <FieldLabel>Username</FieldLabel>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  size="small"
                  placeholder="Choose a username"
                  error={!!errors.username}
                  helperText={errors.username ? errors.username.message : ""}
                  sx={fieldSx}
                />
              )}
            />
          </Box>
        )}

        <Box>
          <FieldLabel>Password</FieldLabel>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                type={showPassword ? "text" : "password"}
                size="small"
                placeholder="At least 8 characters"
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
                sx={fieldSx}
                InputProps={{ endAdornment: passwordAdornment }}
              />
            )}
          />
        </Box>

        {type === "login" && (
          <Box display="flex" justifyContent="flex-end">
            <Typography
              component="button"
              type="button"
              onClick={() => navigate("/forgetpassword")}
              sx={{
                border: 0,
                background: "none",
                p: 0,
                cursor: "pointer",
                color: "#00999E",
                fontSize: 13,
                fontWeight: 600,
                "&:hover": { color: "#007f83" },
              }}
            >
              Forgot password?
            </Typography>
          </Box>
        )}

        <LoadingButton
          loading={loading}
          fullWidth
          size="large"
          type="submit"
          sx={{
            mt: 0.5,
            height: 48,
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: 600,
            fontSize: 16,
            backgroundColor: "#00999E",
            color: "#fff",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#007f83",
              boxShadow: "none",
            },
            "&:focus": { outline: "none" },
            "& .MuiLoadingButton-loadingIndicator": { color: "#fff" },
          }}
        >
          {type === "login" ? "Sign in" : "Create account"}
        </LoadingButton>
      </Stack>
    </form>
  );
};

const FieldLabel = ({ children }) => (
  <Typography
    sx={{ mb: 0.75, fontSize: 13, fontWeight: 600, color: "#243437" }}
  >
    {children}
  </Typography>
);

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "#fff",
    "& fieldset": { borderColor: "#d5e0e1" },
    "&:hover fieldset": { borderColor: "#00999E" },
    "&.Mui-focused fieldset": { borderColor: "#00999E", borderWidth: 1 },
  },
  "& .MuiOutlinedInput-input": {
    py: 1.35,
  },
};

export default Login;
