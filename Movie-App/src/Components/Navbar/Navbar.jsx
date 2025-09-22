import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const str = localStorage.getItem("user") ?? "{}";
    setUser(JSON.parse(str));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  };

  return (
    <div>
      <div className="contact-info">
        <img
          src="https://img.icons8.com/?size=100&id=83190&format=png&color=000000"
          alt="user-icon"
          width="20px"
          height="20px"
        />
        <p>{user?.email || "Guest"}</p>
      </div>
      <nav>
        <Link className="nav-link" to="/home">Home</Link>
        <Link className="nav-link" to="/favorites">Favorites</Link>
        <button onClick={handleLogout} className="logout">Log Out</button>
      </nav>
    </div>
  );
}
