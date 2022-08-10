import { alpha, Box, Paper } from "@mui/material";

const Contact = () => {
  return (
    <Box
      className="login"
      sx={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          height: "60vh",
          minWidth: { xs: "100vw", md: "60vw", lg: "50vw" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: alpha("#fff", 0.5),
        }}
      ></Paper>
    </Box>
  );
};

export default Contact;
