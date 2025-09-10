import React from "react";
import "./Features.css"

export default function Features() {
  const features = [
    {
      icon: "bi-bootstrap",
      title: "Built with Bootstrap 5",
      desc: "Block is the powerful front-end solution based on Bootstrap 5 — powerful, extensible, and feature-packed frontend toolkit.",
    },
    {
      icon: "bi-brush",
      title: "Easy to Customize with Sass",
      desc: "Block is built using Sass. Easily change colors, typography, and much more with the most powerful CSS extension language.",
    },
    {
      icon: "bi-filetype-html",
      title: "W3C Valid HTML Code",
      desc: "All HTML files are checked via the W3C validator to ensure 100% valid code for innovation at its core.",
    },
    {
      icon: "bi-filetype-js",
      title: "Future Proof JavaScript",
      desc: "Say NO to jQuery! With Block, we build complete vanilla JS code for all pages.",
    },
    {
      icon: "bi-journal-text",
      title: "Extensive Docs",
      desc: "Clear theme documentation helps developers with installation workflow, usage, and easy copy-paste snippets.",
    },
    {
      icon: "bi-phone",
      title: "Mobile Friendly Website",
      desc: "Block is mobile friendly — ensuring your pages perform well on all devices.",
    },
    {
      icon: "bi-rocket-takeoff",
      title: "Kick-Start Your Development",
      desc: "Full task automation with Node.js & Gulp setup. Pre-configured files included.",
    },
    {
      icon: "bi-brightness-high",
      title: "Light / Dark Mode",
      desc: "Block pages include a dark variant to let you style your site differently when dark mode is enabled.",
    },
    {
      icon: "bi-headset",
      title: "Active Support",
      desc: "Our team helps you solve issues quickly. Contact us anytime for support.",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row text-center mb-5">
          <h2 className="fw-bold">
            Why Choose <span className="icon-purple">Block</span>?
          </h2>
          <p className="text-muted">
            Powerful, flexible, and built for modern development.
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card h-100 border-0 shadow-sm p-4 text-center rounded-4">
                <div className="mb-3">
                  <i className={`bi ${feature.icon} icon-purple`} style={{ fontSize: "2rem" , color:"#8b3dff"}}></i>
                </div>
                <h5 className="fw-bold">{feature.title}</h5>
                <p className="text-muted">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
