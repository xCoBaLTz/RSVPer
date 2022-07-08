import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event);
    setEmail(event.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    event: FormEvent<HTMLFormElement>
  ) => {
    console.log(event);
  };

  return (
    <div className="">
      <header className="">Seanan and Sonia</header>
      <div className="">
        <div className="">
          <form onSubmit={handleSubmit} className="">
            <div className="">
              <label className="label">
                <span className="">PLEASE ENTER YOUR EMAIL:</span>
              </label>
              <input
                value={email}
                onChange={handleChange}
                type="email"
                placeholder="Email:"
                className=""
              />
            </div>
            <div className="">
              <button className="">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
