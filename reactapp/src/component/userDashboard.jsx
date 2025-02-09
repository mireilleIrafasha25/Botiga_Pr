import React from "react";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const dashboardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#cce5ff",
  };

  const buttonStyle = {
    backgroundColor: "#dc3545",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  };

  return (
    <div style={dashboardStyle}>
      <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>User Dashboard</h1>
      <button onClick={handleLogout} style={buttonStyle}>Logout</button>
    </div>
  );
};

export default UserDashboard;
