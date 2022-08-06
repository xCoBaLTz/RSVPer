import { Box, Button, Paper, TextField, Typography } from "@mui/material";

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
        className="login-wrapper"
        sx={{
          height: "60vh",
          minWidth: { xs: "100vw", md: "60vw", lg: "50vw" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/*<form className="login-form">*/}
        {/*  <Typography*/}
        {/*    variant="h4"*/}
        {/*    component="h4"*/}
        {/*    fontWeight="bold"*/}
        {/*    fontFamily="BickleyScriptRegular"*/}
        {/*  >*/}
        {/*    Please enter your email:*/}
        {/*  </Typography>*/}
        {/*  <TextField*/}
        {/*    sx={{ marginTop: 3 }}*/}
        {/*    required*/}
        {/*    fullWidth*/}
        {/*    autoFocus*/}
        {/*    type="email"*/}
        {/*    label="Email"*/}
        {/*    variant="outlined"*/}
        {/*  />*/}
        {/*  <Button sx={{ marginTop: 1 }} type="submit" variant="contained">*/}
        {/*    Submit*/}
        {/*  </Button>*/}
        {/*</form>*/}
      </Paper>
    </Box>
  );
};

export default Contact;
