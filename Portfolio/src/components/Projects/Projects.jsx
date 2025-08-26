import React from "react";
import "./Projects.css";

export default function Projects({ repos }) {
  return (
    <section className="project-section">
      <h1 className="section-title">🚀 My Projects</h1>
      <div className="grid">
        {repos.slice(0, 9).map((repo, index) => (
          <div key={index} className="card">
            <h2 className="repo-name">{repo.name}</h2>
            <div className="btn-row">
              <span className="tag">{repo.language ?? "Pro."}</span>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-btn"
              >
                View Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
