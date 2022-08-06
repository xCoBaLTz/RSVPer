import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { useAppDispatch } from "../redux/hooks";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { useLoginMutation } from "../api/authApiSlice";
import { setToken } from "../redux/slices/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const navigate = useNavigate();

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      setErrMessage("");
    };
  }, [email]);

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
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
        alert(error.data.detail);
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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          height: "60vh",
          minWidth: { md: "", lg: "45vw" },
          backgroundColor: "primary.contrastText",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography
            variant="h4"
            component="h4"
            fontFamily="BickleyScriptRegular"
          >
            Please enter your email:
          </Typography>
          <TextField
            required
            fullWidth
            value={email}
            onChange={handleEmailChange}
            type="email"
            label="Email"
            variant="outlined"
          />
          <Button type="submit" variant="contained" disabled={!email}>
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
