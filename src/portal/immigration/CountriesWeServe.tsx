// @ts-nocheck
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { Link } from "@/portal/navigation";
import Card from "@/portal/Component/card-components/Card";
import Header from "@/portal/Component/content-component/Header";
import CountriesForImmigration from "@/portal/json/CountriesForImmigration";

const CountriesWeServe = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#F1FEFF", p: "50px 0" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 5,
            }}
          >
            <Header content={"Countries We Serve"} textAlign={"center"} />
          </Box>
          <Grid container spacing={3}>
            {CountriesForImmigration?.map((country) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={country.path}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Link to={country?.path}>
                      <Card
                        data={country}
                        borderRadius="0px"
                        hoverHeight={"22%"}
                        initialheight={"22%"}
                        cardHeight={"240px"}
                        cardWidth={"220px"}
                        width="180px"
                        height="130px"
                        textAlign="left"
                        padding="15px 5px"
                        //   hoverHeight="22%"
                      />
                    </Link>
                  </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default CountriesWeServe;
