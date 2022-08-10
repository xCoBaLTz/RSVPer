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
  alpha,
  Button,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

import { useLoginMutation } from "../api/authApiSlice";
import { setToken } from "../redux/slices/authSlice";
import CustomTextField from "./CustomTextField";
import { red } from "@mui/material/colors";

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
    <Stack
      minHeight="90vh"
      direction="column"
      justifyContent="center"
      alignItems="center"
      className="login"
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
        sx={{
          height: "60vh",
          minWidth: { xs: "100vw", md: "60vw", lg: "50vw" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: alpha("#fff", 0.5),
        }}
      >
        <Stack
          component="form"
          onSubmit={handleSubmit}
          alignItems="flex-start"
          sx={{
            minWidth: { xs: "75vw", md: "35vw", lg: "25vw" },
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
            sx={{ marginTop: 1 }}
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
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Login;
