// @ts-nocheck
import { Box, IconButton } from "@mui/material";
import React from "react";
import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
const pdfWorker = "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import { useLocation } from "@/portal/navigation";
import { usePreventScreenshotShortcuts } from "@/portal/custom-hooks/usePreventScreenshotShortcuts";
import { useDisableRightClick } from "@/portal/custom-hooks/useDisableRightClick";
import { useDisableTextSelection } from "@/portal/custom-hooks/useDisableTextSelection";
import { usePreventCopyPaste } from "@/portal/custom-hooks/usePreventCopyPaste";
import { useClearClipboard } from "@/portal/custom-hooks/useClearClipboard";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

const CustomViewPDFPage = () => {
  const location = useLocation();
  const resourceFile = location.state;

  usePreventScreenshotShortcuts();
  useDisableRightClick();
  useDisableTextSelection();
  usePreventCopyPaste();
  useClearClipboard();

  // pdf viewer custom css
  const toolbarPluginInstance = toolbarPlugin({
    layout: (Toolbar) => (
      <div style={{ padding: "0 2px" }}>
        <Toolbar>
          {({
            CurrentPageInput,
            GoToNextPage,
            GoToPreviousPage,
            ZoomIn,
            ZoomOut,
          }) => (
            <>
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  onClick={() => window.history.back()}
                  sx={{ mx: 2 }}
                >
                  <ArrowBackIosRoundedIcon />
                </IconButton>
                <GoToPreviousPage>
                  {(props) => (
                    <button onClick={props.onClick} disabled={props.isDisabled}>
                      Previous
                    </button>
                  )}
                </GoToPreviousPage>

                <div style={{ margin: "0 20px" }}>
                  <CurrentPageInput />
                </div>

                <GoToNextPage>
                  {(props) => (
                    <button onClick={props.onClick} disabled={props.isDisabled}>
                      Next
                    </button>
                  )}
                </GoToNextPage>

                <ZoomOut>
                  {(props) => (
                    <button onClick={props.onClick} disabled={props.isDisabled}>
                      Zoom Out
                    </button>
                  )}
                </ZoomOut>

                <ZoomIn>
                  {(props) => (
                    <button onClick={props.onClick} disabled={props.isDisabled}>
                      Zoom In
                    </button>
                  )}
                </ZoomIn>
              </div>
            </>
          )}
        </Toolbar>
      </div>
    ),
  });

  const { Toolbar } = toolbarPluginInstance;

  return (
    <Box sx={{ mt: 2 }}>
      <Box
        sx={{
          width: "100%",
          bgcolor: "#effdff",
          p: "5px 0px",
          border: "2px solid #9095a7",
        }}
      >
        <Toolbar />
      </Box>
      <Box
        sx={{
          height: "650px",
          width: "100%",
          border: "2px solid #9095a7",
        }}
      >
        <Worker workerUrl={pdfWorker}>
          {resourceFile && (
            <Viewer
              fileUrl={resourceFile}
              plugins={[toolbarPluginInstance]}
              defaultScale={SpecialZoomLevel.ActualSize}
            />
          )}
        </Worker>
      </Box>
    </Box>
  );
};

export default CustomViewPDFPage;
