// @ts-nocheck
import { Box, Typography, Pagination } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { LoadingButton } from "@mui/lab";
import { useEffect, useState } from "react";
import moment from "moment";
import { useNavigate } from "@/portal/navigation";
import { useDispatch, useSelector } from "react-redux";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";
import { getOrderListAsync } from "@/portal/redux/services/orderService";

const DashboardOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const limit = 10;

  const { listOrder, isLoading, totalPages } = useSelector(
    (state) => state.order
  );

  useEffect(() => {
    dispatch(getOrderListAsync({ pageNumber: page, limit }));
  }, [page, dispatch]);

  const handlePageChange = (_, value) => {
    setPage(value);
  };

  const handleGetByID = (id) => {
    navigate(`/dashboard/order/order-details/${id}`);
  };

  return (
    <Box sx={{ padding: { xs: 2, sm: 3, md: 4 } }}>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 550,
          color: "#000",
          textAlign: "center",
          mb: 4,
        }}
      >
        Order History
      </Typography>

      {isLoading ? (
        <CustomCircularProgress />
      ) : listOrder?.length === 0 ? (
        <Typography align="center">No orders found.</Typography>
      ) : (
        <>
          <Grid container spacing={2}>
            {listOrder?.map((item) => (
              <Grid
                item
                key={item._id}
                xs={12}
                sm={6}
                md={4}
                lg={4}
                display="flex"
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    border: "1px solid #00999E",
                    borderRadius: "10px",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 20px 0px",
                    padding: "20px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    {/* Order Id */}
                    <Box display="flex" gap={1} justifyContent="space-between">
                      <Typography variant="subtitle2" color="gray">
                        Order Id:
                      </Typography>
                      <Typography fontWeight={500} fontSize={14}>
                        {item.orderId}
                      </Typography>
                    </Box>

                    {/* Date of Purchase */}
                    <Box
                      display="flex"
                      gap={1}
                      mt={1}
                      justifyContent="space-between"
                    >
                      <Typography variant="subtitle2" color="gray">
                        Date of Purchase:
                      </Typography>
                      <Typography fontWeight={500} fontSize={14}>
                        {moment(item.dateOfPurchase).format("DD MMM YYYY")}
                      </Typography>
                    </Box>

                    {/* Total Amount */}
                    <Box
                      display="flex"
                      gap={1}
                      mt={1}
                      justifyContent="space-between"
                    >
                      <Typography variant="subtitle2" color="gray">
                        Total Amount:
                      </Typography>
                      <Typography fontWeight={500} fontSize={14}>
                        ₹{" "}
                        {item.amount.toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                        })}
                      </Typography>
                    </Box>

                    {/* Status */}
                    <Box
                      display="flex"
                      alignItems="center"
                      gap={1}
                      mt={1}
                      justifyContent="space-between"
                    >
                      <Typography variant="subtitle2" color="gray">
                        Status:
                      </Typography>
                      <Box
                        sx={{
                          backgroundColor:
                            item.paymentStatus === "pending"
                              ? "#fff1d6"
                              : item.paymentStatus === "paid"
                              ? "#dff3ea"
                              : "#f9d6d6",
                          padding: "4px 8px",
                          borderRadius: "6px",
                          display: "inline-block",
                        }}
                      >
                        <Typography
                          sx={{
                            color:
                              item.paymentStatus === "pending"
                                ? "#dbb06c"
                                : item.paymentStatus === "paid"
                                ? "#499a87"
                                : "#f97777",
                            fontWeight: 500,
                            textTransform: "capitalize",
                            fontSize: "14px",
                          }}
                        >
                          {item.paymentStatus}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <LoadingButton
                    fullWidth
                    sx={{
                      mt: 2,
                      color: "#fff",
                      backgroundColor: "#00999E",
                      fontWeight: 500,
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "#007e84",
                      },
                    }}
                    onClick={() => handleGetByID(item._id)}
                  >
                    View Details
                  </LoadingButton>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box mt={4} display="flex" justifyContent="center">
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "#00999E",
                  borderColor: "#00999E",
                },
                "& .Mui-selected": {
                  backgroundColor: "#00999E",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#007e84",
                  },
                },
              }}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default DashboardOrder;
