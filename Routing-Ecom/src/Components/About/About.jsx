import React from "react";
import Navbar from "../Navbar/Navbar";
import "./About.css";

export default function About() {
  return (
    <div>
      <Navbar />

      <section className="about-section">
        <div className="container">
          <h1>About Us</h1>
          <p>
            Welcome to <strong>Waggy Pet Shop</strong> 🐾 – your one-stop
            destination for premium pet food, trendy clothing, and accessories.
          </p>
          <p>
            At Waggy, we believe pets are more than companions – they’re family.
            Our mission is to provide the best products that keep tails wagging
            and whiskers twitching with joy. ❤️
          </p>
          <p>
            From nutritious meals to stylish outfits, everything we offer is
            handpicked to ensure quality, comfort, and happiness for your furry
            friends.
          </p>
        </div>
      </section>
    </div>
  );
}
