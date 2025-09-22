import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <Navbar />

      <section className="contact-section">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Have a question, feedback, or just want to say hi? 🐶🐾
            We’d love to hear from you!
          </p>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
