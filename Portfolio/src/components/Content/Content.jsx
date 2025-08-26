import React from "react";
import "./Content.css";

export default function Content() {
  return (
    <div>
      <div className="details">
        <div className="sec-tools">
          <ul className="logo">
            <li><a href=""> <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000" alt=""/></a></li>
            <li><a href=""> <img src="https://img.icons8.com/?size=100&id=60452&format=png&color=000000" alt=""/></a></li>
            <li><a href=""> <img src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" alt=""/></a></li>
            <li><a href=""> <img src="https://img.icons8.com/?size=100&id=ptAjLogGbrSi&format=png&color=000000" alt=""/></a></li>
          </ul>
        </div>
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
