import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const ProtectedRoute = ({ children, role }) => {
  const { userRole } = useAuth();
  if (userRole !== role) return <Navigate to="/login" />;
  return children;
};

export default ProtectedRoute;
