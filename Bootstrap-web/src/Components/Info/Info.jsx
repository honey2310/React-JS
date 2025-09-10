import React from "react";

export default function Info() {
  return (
    <section className="bg-light py-5">
      <div className="container col-xl-10 col-xxl-8 px-4">
        <div className="row align-items-center g-lg-5 py-5">
          {/* Left Side - Text */}
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3 text-dark">
              Get started with <span className="icon-purple">Blocks</span>
            </h1>
            <p className="col-lg-10 fs-5 text-muted">
              Build stunning landing pages faster than ever with our Bootstrap
              5 templates. Sign up today and start creating your next project in
              minutes — no coding required.
            </p>
          </div>

          {/* Right Side - Sign Up Form */}
          <div className="col-md-10 mx-auto col-lg-6">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 text-center text-dark">
                  Create Your Account
                </h3>
                <form>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control rounded-3"
                      id="nameInput"
                      placeholder="Your Name"
                    />
                    <label htmlFor="nameInput">Full Name</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control rounded-3"
                      id="emailInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="emailInput">Email address</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control rounded-3"
                      id="passwordInput"
                      placeholder="Password"
                    />
                    <label htmlFor="passwordInput">Password</label>
                  </div>

                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>

                  <button
                    className="w-100 btn btn-lg rounded-3 text-light" style={{backgroundColor:"#8b3dff"}}
                    type="submit"
                  >
                    Sign up
                  </button>

                  <hr className="my-4" />
                  <p className="text-center text-muted small">
                    By clicking Sign up, you agree to our{" "}
                    <a href="#" className="text-decoration-none icon-purple">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-decoration-none icon-purple">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
