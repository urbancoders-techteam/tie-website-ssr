// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Box, Checkbox, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";

const PermanentAndMailingAddress = ({
  sendDataToParent,
  setPermanentAddress,
  permanentAddress,
  mailingAddress,
  setMailingAddress,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const [errors, setErrors] = useState({});

  // Use effect to send data when either address changes
  useEffect(() => {
    sendDataToParent({
      permanentAddress: permanentAddress,
      mailingAddress: mailingAddress,
    });
  }, [permanentAddress, mailingAddress, sendDataToParent]);

  const validateField = (name, value) => {
    let error = "";

    if (name === "pincode" && value) {
      if (!/^\d{6}$/.test(value)) {
        error = "Enter a valid 6-digit pincode.";
      }
    }

    return error;
  };

  const handlePermanentAddressChange = (e) => {
    const { name, value } = e.target;

    // Restrict input to numbers and limit to 6 digits
    if (name === "pincode" && value.length > 6) return;

    const error = validateField(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));

    setPermanentAddress((prev) => ({ ...prev, [name]: value }));

    // If checkbox is checked, update mailing address to match permanent address
    if (isChecked) {
      setMailingAddress((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleMailingAddressChange = (e) => {
    const { name, value } = e.target;

    // Restrict input to numbers and limit to 6 digits
    if (name === "pincode" && value.length > 6) return;

    const error = validateField(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));

    setMailingAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);

    // If checked, set mailing address to be the same as permanent address
    if (checked) {
      setMailingAddress(permanentAddress);
    } else {
      setMailingAddress({
        address: "",
        state: "",
        city: "",
        pincode: "",
      }); // Reset mailing address when unchecked
    }
  };

  return (
    <>
      <Section title="PERMANENT ADDRESS" />
      <AddressFields
        address={permanentAddress}
        onChange={handlePermanentAddressChange}
        errors={errors}
      />
      <Box sx={{ display: "flex", alignItems: "center", paddingTop: "30px" }}>
        <Section title="Mailing ADDRESS" />
        <CheckboxLabel checked={isChecked} onChange={handleCheckboxChange} />
      </Box>
      <AddressFields
        address={mailingAddress}
        onChange={handleMailingAddressChange}
        disabled={isChecked} // Disable input fields if checkbox is checked
        errors={errors}
      />
    </>
  );
};

const Section = ({ title }) => (
  <Typography
    variant="h5"
    sx={{ fontSize: { xs: "18px" }, paddingBottom: "10px" }}
  >
    {title}
  </Typography>
);

// const AddressFields = ({ address, onChange, disabled = false }) => (
//   <Grid container spacing={2}>
//     {["address", "state", "city", "pincode"].map((field, index) => (
//       <Grid key={index} item lg={3} xs={12}>
//         <TextField
//           label={capitalize(field)}
//           name={field}
//           value={address[field] || ""}
//           onChange={onChange}
//           type={field === "pincode" ? "number" : "text"}
//           variant="outlined"
//           fullWidth
//           disabled={disabled}
//           inputProps={{
//             maxLength: field === "pincode" ? 6 : undefined,
//             pattern: field === "pincode" ? "[0-9]*" : undefined,
//           }}
//           error={!!errors[field]}
//           helperText={errors[field]}
//         />
//       </Grid>
//     ))}
//   </Grid>
// );

const AddressFields = ({ address, onChange, errors, disabled }) => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Address"
        name="address"
        value={address.address || ""}
        onChange={onChange}
        disabled={disabled}
        error={!!errors.address}
        helperText={errors.address}
      />
    </Grid>
    <Grid item xs={6}>
      <TextField
        fullWidth
        label="State"
        name="state"
        value={address.state || ""}
        onChange={onChange}
        disabled={disabled}
        error={!!errors.state}
        helperText={errors.state}
      />
    </Grid>
    <Grid item xs={6}>
      <TextField
        fullWidth
        label="City"
        name="city"
        value={address.city || ""}
        onChange={onChange}
        disabled={disabled}
        error={!!errors.city}
        helperText={errors.city}
      />
    </Grid>
    <Grid item xs={6}>
      <TextField
        fullWidth
        label="Pincode"
        name="pincode"
        value={address.pincode || ""}
        onChange={onChange}
        disabled={disabled}
        error={!!errors.pincode}
        helperText={errors.pincode}
        inputProps={{
          maxLength: 6, // Ensure the input length is restricted to 6 characters
        }}
      />
    </Grid>
  </Grid>
);

const CheckboxLabel = ({ checked, onChange }) => (
  <Typography sx={{ fontSize: "18px", paddingLeft: "30px", color: "grey" }}>
    <Checkbox checked={checked} onChange={onChange} />
    (same as permanent address)
  </Typography>
);

export default PermanentAndMailingAddress;
