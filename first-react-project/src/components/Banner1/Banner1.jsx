import React from 'react';
import './banner1.css';

export default function Banner1() {
  return (
    <>
      {/* CTA Section */}
      <section className="travel-cta text-white d-flex align-items-center">
        <div className="container text-center py-5">
          <h2 className="display-5 fw-bold">Ready to Explore the World?</h2>
          <p className="lead mt-3">Let us take you on unforgettable journeys across the globe.</p>
          <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
            <button className="btn btn-light px-4 rounded-pill">Book Now</button>
            <button className="btn btn-outline-light px-4 rounded-pill">View Destinations</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-white py-4">
        <div className="container text-center">
          <p className="mb-2">© {new Date().getFullYear()} Wanderlust Travels. All rights reserved.</p>
          <div className="d-flex justify-content-center gap-4">
            <a href="#" className="text-white text-decoration-none">Privacy Policy</a>
            <a href="#" className="text-white text-decoration-none">Terms of Service</a>
            <a href="#" className="text-white text-decoration-none">Contact Us</a>
          </div>
        </div>
      </footer>
    </>
  );
}
