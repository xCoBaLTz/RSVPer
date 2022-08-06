import { useAppSelector } from "../redux/hooks";
import { selectCurrentToken } from "../redux/slices/authSlice";
import { Navigate, Outlet } from "react-router";

const RequireAuth = () => {
  const token = useAppSelector(selectCurrentToken);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireAuth;
