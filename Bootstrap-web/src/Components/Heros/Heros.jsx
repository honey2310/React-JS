import React from "react";
import "./Heros.css";

export default function Heros() {
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Kickstart your project with Block</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Block build with a modular web design concept will easily kickstart
            your project, and build website & marketing site faster.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-lg px-4 gap-3 text-light" style={{backgroundColor: "#8b3dff"}}>
          Purchase template
            </button>
            <button
              type="button"
              className="btn btn-lg px-4" style={{backgroundColor: "#f9fafb"}}
            >
              Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
