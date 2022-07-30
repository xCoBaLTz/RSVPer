import "../styles/Login.css";
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
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
        // setErrMessage(error.);
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="email-wrapper">
          <label className="label">
            <span className="label-text">PLEASE ENTER YOUR EMAIL:</span>
          </label>
          <input
            value={email}
            onChange={handleEmailChange}
            type="email"
            placeholder="Email:"
            required
          />
        </div>
        <div className="submit-wrapper">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
