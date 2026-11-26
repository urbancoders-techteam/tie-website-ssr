// @ts-nocheck
import { Box, Button, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainHeader from "@/portal/Component/content-component/MainHeader";
import { getResourceDocuments } from "@/portal/redux/services/resourceService";

export default function Resources() {
  const dispatch = useDispatch();
  const { documents, loading } = useSelector((state) => state.resources);

  useEffect(() => {
    dispatch(getResourceDocuments());
  }, [dispatch]);

  const resourceList = documents?.data ?? [];

  return (
    <Box sx={{ padding: 3 }}>
      {/* Page Header */}
      <Box sx={{ mt: 1, textAlign: "center" }}>
        <MainHeader
          content={"~Resources~"}
          fontSize={"26px"}
          fontWeight={"bold"}
          textAlign={"center"}
        />
      </Box>

      {/* Loader */}
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ mt: 3 }}>
          {resourceList.length === 0 ? (
            <Box sx={{ textAlign: "center", mt: 4, color: "gray" }}>
              No resources available
            </Box>
          ) : (
            resourceList.map((item) => (
              <Box
                key={item._id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  p: 2,
                  mb: 2,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                {/* Resource Info */}
                <Box>
                  <Box sx={{ fontWeight: "bold", fontSize: "18px" }}>
                    {item.resourcesType}
                  </Box>
                  <Box sx={{ fontSize: "14px", color: "gray" }}>
                    Uploaded by: {item.counsellorName}
                  </Box>
                </Box>

                {/* Download Button */}
                <Button
                  variant="contained"
                  onClick={() => window.open(item.documentUrl, "_blank")}
                  sx={{
                    minWidth: 120,
                    textTransform: "none",
                    whiteSpace: "nowrap",
                    bgcolor: "#007C80",
                  }}
                >
                  Download
                </Button>
              </Box>
            ))
          )}
        </Box>
      )}
    </Box>
  );
}
