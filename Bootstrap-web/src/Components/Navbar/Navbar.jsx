import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      {" "}
      <header className="p-3 bg-light text-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-between">
            <div>
              <a
                href="/"
                className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
              >
                <h2
                  className="text-dark text-center fw-light"
                  style={{
                    fontFamily:
                      "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                  }}
                >
                  Block
                </h2>
              </a>
            </div>
            <div>
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <a href="#" className="nav-link px-2 text-secondary">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-2 text-dark">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-2 text-dark">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-2 text-dark">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-2 text-dark">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-end">
                <button type="button" className="btn btn-outline-dark me-2">
                  Login
                </button>
                <button
                  type="button"
                  className="btn text-light"
                  style={{ backgroundColor: "#8b3dff" }}
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
