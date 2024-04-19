import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { PrivateRoutes } from "../auth/routes/PrivateRoutes";
import { CalendarPage } from "../calendar/auth/pages/CalendarPage";

export const AppRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Routes>
      {/* public routes */}
      <Route index element={<LoginPage />} />
      <Route path="login" element={<LoginPage />} />

      {/* private routes */}
      <Route
        element={
          <PrivateRoutes isAuthenticated={isAuthenticated} redirectTo="/" />
        }
      >
        <Route path="auth/calendar" element={<CalendarPage />} />
      </Route>
    </Routes>
  );
};
