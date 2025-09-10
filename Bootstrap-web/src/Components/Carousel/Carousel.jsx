import React from "react";
import "./Carousel.css";

export default function Carousel() {
  return (
    <div className="container-fluid" style={{height:"350px"}}>
      {" "}
      <div className="container">
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card h-100 border rounded-4 shadow-sm p-4">
              <div className="mb-3">
                {/* Example icon (stacked rectangles) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="bi bi-layers"
                >
                  <rect x="4" y="4" width="24" height="16" rx="2"></rect>
                </svg>
              </div>
              <h5 className="fw-bold">7+ Landing pages</h5>
              <p className="text-muted">
                Block kit offers endless possibilities for your pages to
                kick-start your next project.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card h-100 border rounded-4 shadow-sm p-4">
              <div className="mb-3">
                {/* Example icon (stacked blocks) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="bi bi-stack"
                >
                  <rect x="4" y="4" width="24" height="4"></rect>
                  <rect x="4" y="12" width="24" height="4"></rect>
                  <rect x="4" y="20" width="24" height="4"></rect>
                </svg>
              </div>
              <h5 className="fw-bold">80+ Flexible Blocks</h5>
              <p className="text-muted">
                All our components and sections are responsively & flexibly
                designed.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card h-100 border rounded-4 shadow-sm p-4">
              <div className="mb-3">
                {/* Figma-style colored icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3" fill="#F24E1E" />
                  <circle cx="12" cy="12" r="3" fill="#A259FF" />
                  <circle cx="12" cy="19" r="3" fill="#1ABCFE" />
                  <circle cx="5" cy="12" r="3" fill="#0ACF83" />
                  <circle cx="19" cy="12" r="3" fill="#FF7262" />
                </svg>
              </div>
              <h5 className="fw-bold">Figma File Available</h5>
              <p className="text-muted">
                Figma file – To give you 100% control over the design, with the
                block theme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
