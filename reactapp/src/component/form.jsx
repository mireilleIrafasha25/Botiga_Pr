import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // 👉 Redirect

function LoginForm() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); 
  const [loading, setLoading] = useState(false); // ✅ Loading state

  const navigate = useNavigate(); // 👉 Function yo gukora redirect

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // 👉 Tugaragaza ko API iri gukorana

    try {
      const response = await axios.post("http://localhost:5007/Weeding/user/signin", {
        email,
        password,
      });

      setMessage(response.data.message);
      localStorage.setItem("token", response.data.token); // ✅ Kubika token muri localStorage

      setTimeout(() => {
        navigate("/dashboard"); // ✅ Redirect kuri dashboard nyuma ya 1s
      }, 1000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed!");
    } finally {
      setLoading(false); // 👉 Hagarika loading state nyuma ya response
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"} {/* ✅ Loading button */}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default LoginForm;
