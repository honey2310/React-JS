import React from 'react';
import './about.css';

export default function About() {
  return (
    <section className="about-travel py-5" id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6">
            <h2 className="fw-bold text-primary mb-4">Discover the World with Us</h2>
            <p className="text-muted">
              At <strong>Wanderlust Travels</strong>, we believe travel is more than just sightseeing — it’s about experiencing cultures, exploring the unknown, and creating unforgettable memories.
            </p>
            <p className="text-muted">
              Whether you're looking for a peaceful getaway, an adventurous trek, or a cultural immersion, our curated travel packages are designed to meet every wanderer's dream.
            </p>
            <ul className="list-unstyled mt-3">
              <li>✔️ Customizable Tour Packages</li>
              <li>✔️ Expert Local Guides</li>
              <li>✔️ 24/7 Support</li>
            </ul>
            <button className="btn btn-primary rounded-pill mt-4 px-4">Explore Packages</button>
          </div>

          {/* Image Section */}
          <div className="col-md-6 mt-4 mt-md-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1681487612246-a171d00b5e9b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D"
              alt="Travel Adventure"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
