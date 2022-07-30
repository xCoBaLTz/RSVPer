import { useAppSelector } from "../redux/hooks";
import { selectCurrentToken } from "../redux/slices/authSlice";
import { Navigate, Outlet, useLocation } from "react-router";

const RequireAuth = () => {
  const token = useAppSelector(selectCurrentToken);
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
