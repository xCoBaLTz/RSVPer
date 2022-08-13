import { ReactElement } from "react";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { Alert, Box, CircularProgress, Stack, Typography } from "@mui/material";
import Map from "./Map";

const Location = () => {
  const render = (status: Status): ReactElement => {
    if (status === Status.FAILURE) {
      return (
        <Alert
          severity="error"
          sx={{
            backgroundColor: "rgb(22 11 11)",
            color: "rgb(244 199 199)",
            margin: 2,
            minWidth: { xs: "90vw", md: "55vw", lg: "45vw" },
          }}
          onClose={() => {}}
        >
          Map not loading please contact Seanan Chabra
        </Alert>
      );
    }
    return <CircularProgress></CircularProgress>;
  };

  const center: google.maps.LatLngLiteral = {
    lat: 43.78953574061355,
    lng: -79.62860690000001,
  };
  const zoom: number = 17.2;

  return (
    <Box marginTop="80px" component="div">
      <Stack alignItems="center" justifyContent="center">
        <Typography
          marginBottom={2}
          variant="h1"
          component="h1"
          color="primary.contrastText"
          fontFamily="BickleyScriptRegular"
        >
          Château Le Jardin
        </Typography>

        <Wrapper
          apiKey={process.env.REACT_APP_GOOGLE_API_KEY || ""}
          render={render}
        >
          <Map center={center} zoom={zoom} />
        </Wrapper>

        <Typography
          marginTop={4}
          variant="h4"
          component="h4"
          color="primary.contrastText"
        >
          8440 Highway 27
        </Typography>
        <Typography variant="h4" component="h4" color="primary.contrastText">
          Vaughan, ON
        </Typography>
        <Typography variant="h4" component="h4" color="primary.contrastText">
          L4L 1A5, Canada
        </Typography>
      </Stack>
    </Box>
  );
};

export default Location;
