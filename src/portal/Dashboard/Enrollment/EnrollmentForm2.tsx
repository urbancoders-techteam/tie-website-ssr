// @ts-nocheck
const {
  Typography,
  Checkbox,
  Box,
  CardContent,
  Card,
  Grid,
  Radio,
  FormControlLabel,
  FormControl,
  RadioGroup,
  TextField,
  MenuItem,
  Select
} = require("@mui/material");
const { default: CoursesTable } = require("../CoursesTable");

const SectionTitle = ({ title }) => (
  <Typography
    variant="h5"
    sx={{ fontSize: { xs: "18px" }, paddingBottom: "10px" }}
  >
    {title}
  </Typography>
);

const DashboardEnrollmentForm2 = ({
  formData,
  setFormData,
  courseRows,
  setCourseRows
}) => {
  const renderFriendFields = (index) => {
    const friendFields = ["Name", "Address", "Mobile Number", "Email"];

    return friendFields?.map((field, fieldIndex) => (
      <Grid key={fieldIndex} item lg={3} xs={6} sm={3} md={3}>
        <TextField
          label={field}
          z
          name={field.toLowerCase().replace(/\s+/g, "")}
          variant="outlined"
          type={field === "Mobile Number" ? "number" : "text"}
          fullWidth
          value={
            formData.friends && formData.friends[index]
              ? formData.friends[index][
                  field.toLowerCase().replace(/\s+/g, "")
                ] || ""
              : ""
          }
          onChange={(e) => {
            const updatedFriends = [...formData.friends];
            //   updatedFriends[index] = {
            //     ...updatedFriends[index],
            //     [e.target.name]: e.target.value
            //   };
            //   setFormData({ ...formData, friends: updatedFriends });
            // }}

            const value = e.target.value;

            // Restrict input to 10 digits
            if (field === "Mobile Number" && /^\d{0,10}$/.test(value)) {
              updatedFriends[index] = {
                ...updatedFriends[index],
                [e.target.name]: value,
              };
              setFormData({ ...formData, friends: updatedFriends });
            } else if (field !== "Mobile Number") {
              updatedFriends[index] = {
                ...updatedFriends[index],
                [e.target.name]: value,
              };
              setFormData({ ...formData, friends: updatedFriends });
            }
          }}
          onInput={(e) => {
            // Enforce 10-digit limit at input level
            if (field === "Mobile Number") {
              e.target.value = e.target.value.slice(0, 10);
            }
          }}
          error={
            field === "Mobile Number" &&
            formData.friends[index]?.mobileNumber &&
            formData.friends[index]?.mobileNumber.length !== 10
          }
          helperText={
            field === "Mobile Number" &&
            formData.friends[index]?.mobileNumber &&
            formData.friends[index]?.mobileNumber.length !== 10
              ? "Mobile Number must be exactly 10 digits"
              : ""
          }
        />
      </Grid>
    ));
  };

  return (
    <Grid item xs={12} sx={{ paddingTop: "20px" }}>
      <Box sx={{ margin: "0 20px" }}>
        <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <SectionTitle title="You came to know about TAKSHEELA from:" />
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select"
                  value={formData.taksheelaKnowAbout || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      taksheelaKnowAbout: e.target.value
                    })
                  }
                >
                  {[
                    "Friends",
                    "Newspaper",
                    "Internet",
                    "Poster",
                    "Flyer",
                    "Seminar",
                    "TV",
                    "Emailer",
                    "Others"
                  ].map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                paddingTop: "30px"
              }}
            >
              <SectionTitle title="Mention the Newspaper/Magazine that you read" />
              <TextField
                sx={{ flex: 1, marginLeft: "20px" }}
                variant="outlined"
                value={formData.newsPaper || ""}
                onChange={(e) =>
                  setFormData({ ...formData, newsPaper: e.target.value })
                }
              />
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", paddingTop: "30px" }}
            >
              <SectionTitle title="I can access the Internet at:" />
              <FormControl sx={{ marginLeft: "20px" }}>
                <RadioGroup
                  row
                  name="internetAt"
                  value={formData.internetAt || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, internetAt: e.target.value })
                  }
                >
                  {["Home", "Office", "Cybercafe", "No Access"].map(
                    (option) => (
                      <FormControlLabel
                        key={option}
                        value={option.toLowerCase()}
                        control={<Radio />}
                        label={option}
                      />
                    )
                  )}
                </RadioGroup>
              </FormControl>
            </Box>
          </CardContent>
        </Card>
        <Box sx={{ paddingTop: "20px" }}>
          <CoursesTable
            courseRows={courseRows}
            setCourseRows={setCourseRows}
            sendDataToParent={(courseData) => {
              setFormData({ ...formData, courses: courseData });
            }}
          />
        </Box>
        {/* Friends Section */}
        <Card sx={{ marginTop: "20px" }}>
          <CardContent>
            <SectionTitle title="Please give the name and address of any two of your friends who would like to receive information about TAKSHEELA courses" />
            <Grid container spacing={2}>
              {Array(2)
                .fill(0)
                .map((_, index) => renderFriendFields(index))}
            </Grid>
          </CardContent>
        </Card>
        <Box sx={{ paddingTop: "20px" }}>
          <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "18px", lg: "25px" },
                    textDecoration: "underline"
                  }}
                >
                  DECLARATION
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px"
                  }}
                >
                  <Checkbox
                    checked={formData.isAgreed}
                    onChange={(e) =>
                      setFormData({ ...formData, isAgreed: e.target.checked })
                    }
                  />{" "}
                  <Typography
                    sx={{
                      marginLeft: "20px",
                      textAlign: "justify",
                      fontSize: { xs: "16px" }
                    }}
                  >
                    I agree to the terms and conditions mentioned in the
                    enrollment form. I agree that the mailing address I have
                    mentioned in this form is correct and all correspondence to
                    me should be directed to this mailing address. I agree that
                    Taksheela will not be responsible for non-receipt of any
                    material due to an incorrect mailing address. I would like
                    important information to be sent to me through Emails & SMS.
                    I will inform TAKSHEELA in case of any changes in my Mailing
                    Address/Email ID/Mobile Number.
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Grid>
  );
};
export default DashboardEnrollmentForm2;
