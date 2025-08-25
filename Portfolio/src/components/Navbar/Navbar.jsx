import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <div className="navbar-main">
        <h2>Portfolio</h2>
        <div className="nav-sec">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Tech Stack</a>
            </li>
            <li>
              <a href="">Project</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
