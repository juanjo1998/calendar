import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = ({
  isAuthenticated,
  children,
  redirectTo = "/",
}) => {
  if (!isAuthenticated) return <Navigate to={redirectTo} />;

  return children ? children : <Outlet />;
};
