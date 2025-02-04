import axios from "axios";
import { useState } from "react";

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5007/Weeding/user/signin", {
        email,
        password,
      });
      setMessage(response.data.message);
      localStorage.setItem("token", response.data.token);
      
      setTimeout(() => {
        onClose(); // Close the login form after success
      }, 1000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ background: "white", padding: "20px", borderRadius: "10px", width: "400px" }}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          
          <button disabled={loading} type="submit">{loading ? "Logging in..." : "Log In"}</button>
        </form>
        
        {/* Show error message if login fails */}
        {message && <p>{message}</p>}

        {/* Close button */}
        <button onClick={onClose} style={{ marginTop: "10px", background: "red", color: "white" }}>Close</button>
      </div>
    </div>
  );
};

export default Login;
