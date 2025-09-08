import React from "react";

export default function Heros() {
  return (
    <>
      <div className="container-fluid bg-black pt-5 pb-5">
        <div className="container bg-black d-flex align-items-center flex-column pt-5 pb-5">
          <h2 className="text-light pt-4">Albums example</h2>
          <p className="text-light w-50 text-center fs-4 fw-lighter">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don’t simply skip over it entirely.
          </p>
          <div className="pb-5">
            <button className="btn btn-primary me-2">Main call to action</button>
            <button className="btn btn-secondary">Secondary action</button>
          </div>
        </div>
      </div>
    </>
  );
}
