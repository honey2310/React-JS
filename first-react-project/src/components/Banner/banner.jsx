import React from 'react';
import './banner.css';

export default function Banner() {
  return (
    <header className="hero-banner">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark px-4">
        <a className="navbar-brand fs-3" href="#">Wanderlust</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3 fs-5">
            {['Home', 'About', 'Services', 'Portfolio', 'Team', 'Pricing', 'Contact'].map(item => (
              <li className="nav-item" key={item}>
                <a className="nav-link text-white" href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container text-white text-center d-flex flex-column justify-content-center align-items-center flex-grow-1">
        <h1 className="display-4 fw-bold">Explore the worls with us</h1>
        <p className="lead mt-3">We are a team of talented travellers making your life more amazing</p>
        <div className="mt-4 d-flex gap-3">
          <button className="btn btn-outline-light px-4 rounded-pill">Get started</button>
        </div>
      </div>
    </header>
  );
}
