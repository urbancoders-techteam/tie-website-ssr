// @ts-nocheck
import { Icon } from "@iconify/react";
import {
  Avatar, Box, Card, CardContent, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "@/portal/navigation";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";
import { getOrderDetailById } from "@/portal/redux/services/orderService";

const DashboardOrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { orderDetail, isLoading } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrderDetailById(id));
  }, [id, dispatch]);

  if (isLoading || !orderDetail) {
    return <CustomCircularProgress />;
  }

  return (
    <Box sx={{ p: { xs: 2, sm: 3, md: 5 } }}>
      <Container>
        {/* Header */}
        <Box display="flex" alignItems="center" mb={4}>
          <Icon
            icon="ep:back"
            fontSize="28px"
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          />
          <Box ml={2}>
            <Typography variant="h6" fontWeight={600}>
              {orderDetail.orderId}
            </Typography>
            <Typography fontSize="14px" color="textSecondary">
              {moment(orderDetail.dateOfPurchase).format("DD MMM YYYY")}
            </Typography>
          </Box>
          <Box
            ml="auto"
            px={2}
            py={0.5}
            borderRadius={2}
            bgcolor={
              orderDetail.paymentStatus === "pending"
                ? "#fff1d6"
                : orderDetail.paymentStatus === "paid"
                ? "#dff3ea"
                : "#f9d6d6"
            }
          >
            <Typography
              fontSize="14px"
              fontWeight={500}
              color={
                orderDetail.paymentStatus === "pending"
                  ? "#dbb06c"
                  : orderDetail.paymentStatus === "paid"
                  ? "#499a87"
                  : "#f97777"
              }
              textTransform="capitalize"
            >
              {orderDetail.paymentStatus}
            </Typography>
          </Box>
        </Box>

        {/* Main Grid */}
        <Grid container spacing={3}>
          {/* Plan Details */}
          <Grid item xs={12} lg={7}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableRow>
                    <TableCell>Plan Name</TableCell>
                    <TableCell>Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orderDetail.plans.map((plan) => (
                    <TableRow key={plan.planId}>
                      <TableCell>{plan.planName}</TableCell>
                      <TableCell>
                        ₹&nbsp;
                        {plan.price.toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                        })}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell sx={{ fontWeight: "600" }}>Total</TableCell>
                    <TableCell sx={{ fontWeight: "600" }}>
                      ₹&nbsp;
                      {orderDetail.amount.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                      })}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          {/* Student Info */}
          <Grid item xs={12} lg={5}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Student Info
                </Typography>
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar
                    src={orderDetail.createdBy?.image}
                    sx={{
                      width: 60,
                      height: 60,
                      bgcolor: "#ffcc00",
                      fontWeight: 600,
                    }}
                  >
                    {!orderDetail.createdBy?.image &&
                      orderDetail.createdBy?.name?.[0]?.toUpperCase()}
                  </Avatar>
                  <Box>
                    <Typography fontWeight={500} textTransform="capitalize">
                      {orderDetail.createdBy.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {orderDetail.createdBy.email}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DashboardOrderDetail;
