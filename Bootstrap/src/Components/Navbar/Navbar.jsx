import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div id="navbarSupportedContent" className="collapse">
        <div className="container-fluid bg-black">
          <div className="container bg-black text-light">
            <div className="row">
              <div className="col-7 m-2">
                <h4>About</h4>
                <p>
                  Add some information about the album below, the author, or any
                  other background context. Make it a few sentences long so
                  folks can pick up some informative tidbits. Then, link them
                  off to some social networking sites or contact information.
                </p>
              </div>
              <div className="col-4 m-2">
                <h4>Contact</h4>
                <div className="links">
                  <ul>
                    {["Follow on X", "Like on Facebook", "Email me"].map(
                      (link, index) => (
                        <li key={index} className="li">
                          <a href="#" className="anchor">
                            {link}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <nav className="navbar bg-black">
          <div className="container">
            <a className="navbar-brand text-light" href="#">
              Albums
            </a>
            <button
              className="navbar-toggler custom-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
