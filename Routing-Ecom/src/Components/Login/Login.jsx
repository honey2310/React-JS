import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "user",
      JSON.stringify({ email: email, password: password })
    );
    alert("Logged in successfully 🐾");
    navigate("/home", { replace: true });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxqCGLeeee-vV7sByjxQQr__BatBl-ghF80Q&s"
          alt="Pet Icon"
          className="login-icon"
        />
        <h1>Welcome Back</h1>
        <p>Login to continue shopping for your pets 🐶🐾</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don’t have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
}
