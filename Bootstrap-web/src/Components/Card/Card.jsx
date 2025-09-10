import React from "react";

export default function Card() {
  const cards = [
    { id: 1, title: "SaaS v1", img: "https://block.codescandy.com/assets/images/hero/landing-saas-v1.jpg" },
    { id: 2, title: "SaaS v2", img: "https://block.codescandy.com/assets/images/hero/landing-saas-v2.jpg" },
    { id: 3, title: "Mobile App", img: "https://block.codescandy.com/assets/images/hero/landing-mobile-app.jpg" },
    { id: 4, title: "IT Company", img: "https://block.codescandy.com/assets/images/hero/it-services-company-website-templates.jpg" },
    { id: 5, title: "Accounting", img: "https://block.codescandy.com/assets/images/hero/landing-accounting.jpg" },
    { id: 6, title: "Conference", img: "https://block.codescandy.com/assets/images/hero/modern-conference-landing-template.jpg" },
    { id: 7, title: "Finance", img: "https://block.codescandy.com/assets/images/hero/landing-saas-finance.jpg" },
    { id: 8, title: "Agency", img: "https://block.codescandy.com/assets/images/hero/creative-agency-template.jpg" },
    { id: 9, title: "AI Studio", img: "https://block.codescandy.com/assets/images/hero/landing-ai-studio-responsive-website-template.png" },
  ];

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="text-dark">Stunning Landing Pages</h2>
          <p className="fs-5 text-muted">
            Blocks bootstrap 5 template comes with everything you need to get
            your website off the ground.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="row g-4">
          {cards.map((card) => (
            <div key={card.id} className="col-md-4 col-sm-6 d-flex justify-content-center">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <img
                  src={card.img}
                  className="card-img-top rounded-top-4"
                  alt={card.title}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{card.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
