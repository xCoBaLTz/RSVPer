import { Route, Routes } from "react-router";
import Login from "./Login";
import Home from "./Home";

const NavRoutes = () => {
  const sessionToken: boolean = false;

  return (
    <Routes>
      {sessionToken ? (
        <Route path="/*" element={<Login />} />
      ) : (
        <Route path="/home" element={<Home />} />
      )}
    </Routes>
  );
};

export default NavRoutes;
