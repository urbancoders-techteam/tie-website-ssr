// @ts-nocheck
// src/utils/SnackbarUtils.js

let snackbarCallback = null;

export const setSnackbar = (callback) => {
  snackbarCallback = callback;
};

export const showSnackbar = (message, severity = "success") => {
  if (snackbarCallback) {
    snackbarCallback(message, severity);
  } else {
    console.warn("Snackbar callback not set");
  }
};
