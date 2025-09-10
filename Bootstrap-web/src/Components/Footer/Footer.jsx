import React from "react";

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-light">
        {" "}
        <div className="container bg-light">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-3">
              <h5 className="pb-2 pt-4">About Us</h5>
              <p style={{ width: "95%" }}>
                There live the blind texts. Separated they live in
                Bookmarksgrove right at the coast of the Semantics, a large
                language ocean.
              </p>
              <a href="" className="btn btn-light rounded-pill mb-5 mt-4" style={{backgroundColor:"#8b3dff"}}>
                Learn more
              </a>
            </div>
            <div className="col-lg-1 col-6">
              <h5 className="pb-2 pt-4">Navigation</h5>
              <p>Overview</p>
              <p>About Us</p>
              <p>Find Buyers</p>
            </div>
            <div className="col-lg-1 col-6">
              <h5 className="pb-2 pt-5" />
              <p>Overview</p>
              <p>About Us</p>
              <p>Services</p>
            </div>
            <div className="col-lg-3">
              <h5 className="pb-2 pt-4">Recent Posts</h5>
              <small style={{ color: "rgba(0, 0, 0, 0.493)" }}>
                May 3, 2020
              </small>
              <p>There live the Blind Texts</p>
              <small style={{ color: "rgba(0, 0, 0, 0.493)" }}>
                May 3, 2020
              </small>
              <p style={{ fontSize: 15 }}>
                Separated they live in Bookmarksgrove right
              </p>
            </div>
            <h5 className="pb-2 pt-4">Subscribe</h5>
            <input
              type="text"
              placeholder="Enter your email"
              className="rounded-3"
              style={{ height: 40, width: "90%", marginLeft: 15 }}
            />
          </div>
        </div>
        <div className="container">
          <hr />
          <div className="d-flex justify-content-between mb-5 flex-column text-center">
            <p>
              ©copyright <strong>Block.</strong> All Rights Reserved
            </p>
            <p>Designed by BootstrapMade</p>
          </div>
        </div>
      </div>
    </>
  );
}
