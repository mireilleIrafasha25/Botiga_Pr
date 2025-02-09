import React from "react";

const LandingPage = () => {
  const pageStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#d4edda",
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>Welcome to the Landing Page</h1>
    </div>
  );
};

export default LandingPage;
