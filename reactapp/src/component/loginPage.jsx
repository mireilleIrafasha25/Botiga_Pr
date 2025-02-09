import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    login(data.role);
    if (data.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  const containerStyle = {color: "white"};
  const formStyle = {color:"white"};
  const buttonStyle = { color:"white"};

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
        <h2 style={{color:"red"}}>Login</h2>
        <div style={{color:"red"}}>
          <label style={{color:"red"}}>Role</label>
          <select {...register("role")} style={{color:"navy"}}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
