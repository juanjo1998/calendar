import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = ({ isAuthenticated }) => {
  return !isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
