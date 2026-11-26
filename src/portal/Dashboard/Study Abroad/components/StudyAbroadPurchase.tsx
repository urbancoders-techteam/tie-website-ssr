// @ts-nocheck
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import { Alert, Box, Button } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "@/portal/navigation";
import { useSnackbar } from "@/portal/Component/Snakbar";
import {
  createStudyAbroadPurchaseAsync,
  verifyPurchaseStudyAbroadAsync,
} from "@/portal/redux/services/studyAbroadServices";
import GermanyPackageTable from "./GermanyPackageTable";

const TEAL = "#00999E";

const StudyAbroadPurchase = () => {
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [payingPackageId, setPayingPackageId] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = useCallback(
    (order, pkg) => {
      if (!window.Razorpay) return;

      const checkoutKey = process.env.REACT_APP_RAZORPAY_KEY;
      if (!checkoutKey || !order?.razorpayOrderId) {
        setError("Payment could not start. Check configuration and try again.");
        return;
      }

      const options = {
        key: checkoutKey,
        currency: order.razorpayCurrency || order.currency || "INR",
        name: "Taksheela — Study in Germany",
        description: `Taksheela ${pkg.name} Package`,
        order_id: order.razorpayOrderId,
        handler(response) {
          dispatch(
            verifyPurchaseStudyAbroadAsync({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          ).then((res) => {
            if (res?.payload?.success) {
              showSnackbar(
                "Payment successful! Your package has been purchased.",
                "success",
              );
              navigate("/dashboard/home");
            } else {
              showSnackbar(
                "Payment verification failed. Please contact support.",
                "error",
              );
            }
          });
        },
        theme: { color: TEAL },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response) => {
        const msg =
          response?.error?.description || "Payment failed. Please try again.";
        setError(msg);
        showSnackbar(msg, "error");
      });
      rzp.open();
    },
    [dispatch, navigate, showSnackbar],
  );

  const handlePurchasePackage = async (pkg) => {
    if (!razorpayLoaded) {
      setError("Payment gateway is loading. Please wait a moment.");
      return;
    }

    setError("");
    setIsSubmitting(true);
    setPayingPackageId(pkg.id);

    try {
      const orderResponse = await dispatch(
        createStudyAbroadPurchaseAsync({
          amount: pkg.amount,
          currency: "INR",
          paymentMethod: "online",
          description: `Study in Germany — Taksheela ${pkg.name} Package`,
        }),
      ).unwrap();

      if (orderResponse?.data?.razorpayOrderId) {
        handlePayment(orderResponse.data, pkg);
      } else {
        setError("Could not create order. Please try again.");
      }
    } catch {
      setError("Could not create order. Please try again.");
    } finally {
      setIsSubmitting(false);
      setPayingPackageId(null);
    }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "100%", minWidth: 0 }}>
      <Button
        onClick={() => navigate(-1)}
        variant="text"
        size="small"
        startIcon={<NavigateBeforeRoundedIcon fontSize="small" />}
        sx={{
          mb: 1.5,
          px: 0.5,
          color: TEAL,
          fontWeight: 700,
          textTransform: "none",
          "&:hover": { bgcolor: "transparent", color: "#00777b" },
        }}
      >
        Back
      </Button>

      <GermanyPackageTable
        razorpayLoaded={razorpayLoaded}
        isSubmitting={isSubmitting}
        payingPackageId={payingPackageId}
        onPayPackage={handlePurchasePackage}
      />
      {error ? (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      ) : null}
    </Box>
  );
};

export default StudyAbroadPurchase;
