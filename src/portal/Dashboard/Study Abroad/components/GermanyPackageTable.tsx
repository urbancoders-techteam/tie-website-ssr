// @ts-nocheck
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { LoadingButton } from "@mui/lab";
import {
  GERMANY_PACKAGES,
  GERMANY_SERVICE_ROWS,
} from "./germanyStudyPackagesData";

const TEAL = "#00999E";
const INK = "#1C2B33";
const MUTED = "#5C6B73";
const LINE = "#E6EBEF";
const ROW_A = "#F7FAFB";
const ROW_B = "#FFFFFF";

function PackageValue({ value }) {
  if (value === "yes") {
    return (
      <Box
        sx={{
          width: 26,
          height: 26,
          borderRadius: "50%",
          bgcolor: TEAL,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon icon="mdi:check" color="#fff" width={16} />
      </Box>
    );
  }
  if (value === "no") {
    return (
      <Typography component="span" sx={{ color: "#C5D0D6", fontWeight: 700, fontSize: "1.15rem", lineHeight: 1 }}>
        —
      </Typography>
    );
  }
  return (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        px: 1.1,
        py: 0.45,
        borderRadius: "999px",
        bgcolor: "#ffffff",
        border: `1px solid ${LINE}`,
        color: INK,
        fontSize: { xs: "0.68rem", sm: "0.75rem" },
        fontWeight: 700,
        lineHeight: 1.3,
      }}
    >
      {value}
    </Box>
  );
}

function PlanHeader({ pkg, razorpayLoaded, isSubmitting, payingPackageId, onPay }) {
  return (
    <Box sx={{ py: 1.5, px: 0.5 }}>
      {pkg.badge && (
        <Box
          sx={{
            display: "inline-block",
            mb: 1.25,
            bgcolor: "#FFF4EA",
            color: "#B85E12",
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
            px: 1.1,
            py: 0.35,
            borderRadius: "999px",
          }}
        >
          {pkg.badge}
        </Box>
      )}

      <Box
        sx={{
          width: 48,
          height: 48,
          mx: "auto",
          mb: 1.25,
          borderRadius: "50%",
          bgcolor: pkg.iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 8px 16px ${pkg.iconBg}33`,
        }}
      >
        <Icon icon={pkg.planIcon} color="#fff" width={22} />
      </Box>

      <Typography
        sx={{
          fontSize: { xs: "0.95rem", sm: "1.05rem" },
          fontWeight: 800,
          letterSpacing: "0.08em",
          color: pkg.titleColor,
          lineHeight: 1.1,
        }}
      >
        {pkg.name}
      </Typography>

      <Typography sx={{ mt: 1, fontWeight: 800, fontSize: { xs: "1rem", sm: "1.15rem" }, color: INK, lineHeight: 1.1 }}>
        {pkg.priceLabel}
      </Typography>
      <Typography sx={{ fontSize: "0.72rem", fontWeight: 600, color: MUTED }}>
        {pkg.priceSuffix}
      </Typography>

      <LoadingButton
        variant={pkg.highlight ? "contained" : "outlined"}
        size="small"
        fullWidth
        disabled={!razorpayLoaded}
        loading={isSubmitting && payingPackageId === pkg.id}
        onClick={() => onPay(pkg)}
        sx={{
          mt: 1.5,
          borderRadius: "10px",
          fontWeight: 700,
          fontSize: "0.78rem",
          textTransform: "none",
          boxShadow: "none",
          borderColor: pkg.highlight ? TEAL : LINE,
          color: pkg.highlight ? "#fff" : INK,
          bgcolor: pkg.highlight ? TEAL : "#fff",
          "&:hover": {
            boxShadow: "none",
            bgcolor: pkg.highlight ? "#007C80" : "#F7FAFA",
            borderColor: pkg.highlight ? "#007C80" : LINE,
          },
        }}
      >
        Pay now
      </LoadingButton>
    </Box>
  );
}

function FeatureLine({ row, value }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 1,
        py: 0.9,
        borderTop: `1px solid ${LINE}`,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, minWidth: 0 }}>
        <Icon icon={row.icon} width={16} color={TEAL} />
        <Typography sx={{ fontSize: "0.78rem", fontWeight: 650, color: INK, lineHeight: 1.3 }}>
          {row.label}
        </Typography>
      </Box>
      <Box sx={{ flexShrink: 0 }}>
        <PackageValue value={value} />
      </Box>
    </Box>
  );
}

function PackageCard({ pkg, razorpayLoaded, isSubmitting, payingPackageId, onPay }) {
  return (
    <Paper
      elevation={0}
      sx={{
        minWidth: 0,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: pkg.highlight ? "1px solid #F5D9A8" : `1px solid ${LINE}`,
        borderRadius: "16px",
        overflow: "hidden",
        bgcolor: "#fff",
        boxShadow: pkg.highlight ? "0 12px 28px rgba(232, 163, 23, 0.12)" : "0 8px 24px rgba(16, 42, 46, 0.04)",
      }}
    >
      <Box sx={{ px: 2, pt: 2, bgcolor: pkg.highlight ? "#FFF8EE" : "#fff", borderBottom: `1px solid ${LINE}` }}>
        <PlanHeader
          pkg={pkg}
          razorpayLoaded={razorpayLoaded}
          isSubmitting={isSubmitting}
          payingPackageId={payingPackageId}
          onPay={onPay}
        />
      </Box>
      <Box sx={{ px: 1.5, pb: 1 }}>
        {GERMANY_SERVICE_ROWS.map((row) => (
          <FeatureLine key={row.label} row={row} value={row.values[pkg.id]} />
        ))}
      </Box>
    </Paper>
  );
}

function Legend() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1.5,
        mt: 1.5,
        px: 0.5,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
        <Box
          sx={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            bgcolor: TEAL,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon icon="mdi:check" color="#fff" width={11} />
        </Box>
        <Typography sx={{ fontSize: "12px", fontWeight: 700, color: MUTED }}>Included</Typography>
      </Box>
      <Typography sx={{ fontSize: "12px", fontWeight: 700, color: MUTED }}>— Not included</Typography>
    </Box>
  );
}

function columnSx(pkg, index) {
  const stripe = index % 2 === 0 ? ROW_A : ROW_B;
  return {
    textAlign: "center",
    verticalAlign: "middle",
    borderBottom: `1px solid ${LINE}`,
    bgcolor: pkg.highlight ? (index % 2 === 0 ? "#FFF8EE" : "#FFFCF7") : stripe,
    py: { xs: 1.1, sm: 1.35 },
    px: 1,
  };
}

export default function GermanyPackageTable({
  razorpayLoaded,
  isSubmitting,
  payingPackageId,
  onPayPackage,
}) {
  const payProps = { razorpayLoaded, isSubmitting, payingPackageId, onPay: onPayPackage };

  return (
    <Box sx={{ width: "100%", minWidth: 0, containerType: "inline-size" }}>
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ fontSize: { xs: "22px", md: "26px" }, fontWeight: 800, color: INK, lineHeight: 1.2 }}>
          Study in Germany
        </Typography>
        <Typography sx={{ mt: 0.5, maxWidth: 640, fontSize: "14px", color: MUTED }}>
          Compare what each package includes, then pay for the plan you want.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: "minmax(0, 1fr)",
          "@container (min-width: 760px)": {
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          },
          "@container (min-width: 980px)": { display: "none" },
        }}
      >
        {GERMANY_PACKAGES.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} {...payProps} />
        ))}
      </Box>

      <Paper
        elevation={0}
        sx={{
          display: "none",
          border: `1px solid ${LINE}`,
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 16px 40px rgba(0, 124, 128, 0.08)",
          bgcolor: "#fff",
          "@container (min-width: 980px)": { display: "block" },
        }}
      >
      <TableContainer sx={{ overflowX: "auto" }}>
        <Table stickyHeader size="small" sx={{ width: "100%", minWidth: 0, tableLayout: "fixed" }}>
          <colgroup>
            <col style={{ width: "36%" }} />
            <col style={{ width: "21.33%" }} />
            <col style={{ width: "21.33%" }} />
            <col style={{ width: "21.33%" }} />
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  bgcolor: "#F3F6F8",
                  color: MUTED,
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  verticalAlign: "bottom",
                  py: 2,
                  borderBottom: `1px solid ${LINE}`,
                  position: "sticky",
                  top: 0,
                  left: 0,
                  zIndex: 4,
                }}
              >
                Included
              </TableCell>
              {GERMANY_PACKAGES.map((pkg) => (
                <TableCell
                  key={pkg.id}
                  align="center"
                  sx={{
                    bgcolor: pkg.highlight ? "#FFF8EE" : "#fff",
                    verticalAlign: "top",
                    position: "sticky",
                    top: 0,
                    zIndex: 3,
                    borderBottom: pkg.highlight ? "2px solid #F5D9A8" : `1px solid ${LINE}`,
                    boxShadow: pkg.highlight ? "inset 0 3px 0 #E8A317" : "none",
                  }}
                >
                  <PlanHeader pkg={pkg} {...payProps} />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {GERMANY_SERVICE_ROWS.map((row, index) => (
              <TableRow key={row.label}>
                <TableCell
                  sx={{
                    bgcolor: index % 2 === 0 ? ROW_A : ROW_B,
                    color: INK,
                    borderBottom: `1px solid ${LINE}`,
                    py: { xs: 1.1, sm: 1.35 },
                    position: "sticky",
                    left: 0,
                    zIndex: 1,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Icon icon={row.icon} width={18} color={TEAL} />
                    <Typography
                      sx={{
                        fontSize: { xs: "0.72rem", sm: "0.84rem" },
                        fontWeight: 650,
                        lineHeight: 1.3,
                        color: INK,
                      }}
                    >
                      {row.label}
                    </Typography>
                  </Box>
                </TableCell>
                {GERMANY_PACKAGES.map((pkg) => (
                  <TableCell key={pkg.id} sx={columnSx(pkg, index)}>
                    <PackageValue value={row.values[pkg.id]} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
      <Legend />
    </Box>
  );
}
