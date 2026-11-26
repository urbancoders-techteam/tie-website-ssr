// @ts-nocheck
// theme.js

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00999E",
      contrastText: "#ffffff",
    },
    background: {
      default: "#F3F6F8",
    },
    text: {
      primary: "#1C2B33",
      secondary: "#5C6B73",
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  // Define other theme properties here
});

export default theme;
