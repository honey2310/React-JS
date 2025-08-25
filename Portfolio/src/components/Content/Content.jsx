import React from "react";
import "./Content.css";

export default function Content() {
  return (
    <div>
      <div className="details">
        <div className="sec-tools"></div>
        <div className="sec-left">
          <p className="">Hi,</p>
          <p className="">My name is</p>
          <h2>Honey Deshmukh</h2>
          <p className="detail">I develop things for web!</p>
          <button>Contact Me!</button>
        </div>
        <div className="sec-right">
            <img src="https://ajay-pawar-portfolio.vercel.app/build/img/working-removebg-preview.png" alt="" />
        </div>
      </div>
    </div>
  );
}
