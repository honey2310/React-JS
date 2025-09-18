import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

export default function Home({ setCartList, PetProducts }) {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />

      <div className="home-sec">
        <section className="hero">
          <div className="hero-text">
            <h4>SAVE 10 - 20% OFF</h4>
            <h1>
              Best Destination <br /> For <span>Your Pets</span>
            </h1>
            <button className="btn">SHOP NOW →</button>
          </div>
          <div className="hero-img">
            <img
              src="https://themewagon.github.io/waggy/images/banner-img.png"
              alt="Dog with Toy"
            />
          </div>
        </section>

        <section>
          <div className="cloth-main">
            <div className="cloth-sec">
              <div className="head">
                <h1>Pet Items</h1>
              </div>
              <div className="main-box">
                {PetProducts.map((product, index) => (
                  <div className="" key={index}>
                    <div className="box">
                      <img src={product.image} alt="" />
                      <h2>{product.name}</h2>
                      <h3>${product.price}</h3>
                      <button
                        onClick={() => {
                          setCartList((prev) => [...prev, product]);
                          navigate("/cart");
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-container">
            {/* Logo + About */}
            <div className="footer-section">
              <div className="footer-logo">
                <img
                  src="https://themewagon.github.io/waggy/images/logo.png"
                  alt="logo"
                />
                <h2>
                  Waggy <span>Pet Shop</span>
                </h2>
              </div>
              <p>
                Subscribe to our newsletter to get updates about our grand
                offers.
              </p>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Offer</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Help Center */}
            <div className="footer-section">
              <h3>Help Center</h3>
              <ul>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Payment</a>
                </li>
                <li>
                  <a href="#">Returns & Refunds</a>
                </li>
                <li>
                  <a href="#">Checkout</a>
                </li>
                <li>
                  <a href="#">Delivery Information</a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="footer-section">
              <h3>Our Newsletter</h3>
              <p>
                Subscribe to our newsletter to get updates about our grand
                offers.
              </p>
              <div className="newsletter">
                <input type="email" placeholder="Enter Your Email Here" />
                <button>➤</button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2023 Waggy. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
