import React from "react";
import "./Cart.css";
import Navbar from "../Navbar/Navbar";

export default function Cart({ CartList, setCartList }) {
  const RemoveCart = (index) => {
    const arr = [...CartList];
    arr.splice(index, 1);
    setCartList(arr);
  };

  const total = CartList.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <Navbar />

      <section>
        <div className="cart-main">
          <div className="cart-sec">
            <div className="cart-head">
              <h1>Pet Items</h1>
            </div>

            <div className="cart-boxes">
              {CartList.length === 0 ? (
                <h2>Your cart is empty 🐾</h2>
              ) : (
                CartList.map((cart, index) => (
                  <div className="cart-card" key={index}>
                    <img
                      className="cart-img"
                      src={cart.image}
                      alt={cart.name}
                    />
                    <div className="cart-info">
                      <h2>{cart.name}</h2>
                      <h3>${cart.price}</h3>
                      <p>{cart.description}</p>
                      <button
                        className="remove-btn"
                        onClick={() => RemoveCart(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Total Section */}
            {CartList.length > 0 && (
              <div className="cart-total">
                <h2>
                  Total: <span> ${total.toFixed(2)}</span>{" "}
                </h2>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
