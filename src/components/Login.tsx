import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import { useAppDispatch } from "../redux/hooks";
import { useNavigate } from "react-router-dom";

import {
  Alert,
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

import { useLoginMutation } from "../api/authApiSlice";
import { setToken } from "../redux/slices/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const navigate = useNavigate();

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setErrMessage("");
    setEmail(event.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    login({ email })
      .unwrap()
      .then((response) => {
        dispatch(setToken({ ...response }));
        setEmail("");
        navigate("/rsvp");
      })
      .catch((error) => {
        setErrMessage(error.data.detail);
        setEmail("");
      });
  };

  return (
    <Box
      className="login"
      sx={{
        height: "90vh",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {errMessage ? (
        <Alert
          severity="error"
          sx={{
            backgroundColor: "rgb(22 11 11)",
            color: "rgb(244 199 199)",
            margin: 2,
            minWidth: { xs: "90vw", md: "55vw", lg: "45vw" },
          }}
          onClose={() => {
            setErrMessage("");
          }}
        >
          {errMessage}
        </Alert>
      ) : (
        <></>
      )}
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
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            width: "50%",
            flexFlow: "column nowrap",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            fontWeight="bold"
            fontFamily="BickleyScriptRegular"
          >
            Please enter your email:
          </Typography>
          <TextField
            sx={{ marginTop: 3 }}
            required
            fullWidth
            autoFocus
            value={email}
            onChange={handleEmailChange}
            type="email"
            label="Email"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            sx={{ marginTop: 1 }}
            type="submit"
            variant="contained"
            disabled={!email}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
