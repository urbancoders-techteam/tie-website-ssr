// @ts-nocheck
"use client";

import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { SnackbarProvider } from "@/portal/Component/Snakbar";
import { store } from "@/portal/redux/store";
import theme from "@/portal/theme";
import "@/portal/portal.css";

export default function PortalProviders({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <SnackbarProvider>
          <div className="portal-root">{children}</div>
        </SnackbarProvider>
      </Provider>
    </ThemeProvider>
  );
}
