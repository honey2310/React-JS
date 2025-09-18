import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const str = localStorage.getItem("user") ?? "{}";
    const res = JSON.parse(str);
    setUser(res);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({});
    navigate("/", { replace: true }); // go back to login
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="logo">
          <img
            src="https://themewagon.github.io/waggy/images/logo.png"
            alt="logo"
          />
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search For More Than 10,000 Products"
          />
        </div>
        <div className="contact-info">
          <img
            src="https://img.icons8.com/?size=100&id=83190&format=png&color=000000"
            alt="user-icon"
            width="20px"
            height="20px"
          />
          <p>{user?.email || "Guest"}</p>
        </div>
      </div>

      {/* Navigation */}
      <nav>
        <Link className="nav-link" to={"/home"}>
          Home
        </Link>
        <Link className="nav-link" to={"/about"}>
          About
        </Link>
        <Link className="nav-link" to={"/cart"}>
          Cart
        </Link>
        <Link className="nav-link" to={"/contact"}>
          Contact
        </Link>
        {user?.email ? (
          <button onClick={handleLogout}>Log Out</button>
        ) : (
          <Link to="/">Logout</Link>
        )}
      </nav>
    </div>
  );
}
