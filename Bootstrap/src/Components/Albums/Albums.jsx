import React, { useEffect, useState } from "react";

export default function Albums() {
  const [albums, setAlbums] = useState([]);

  const fetchApi = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e97f989b8f344b39b4d91f8e0921def1"
    )
      .then((res) => res.json()) // ✅ FIXED
      .then((data) => {
        const filteredArticles = data.articles.filter(
          (article) =>
            article.title &&
            article.description &&
            article.url &&
            article.urlToImage // ✅ ensures image is present
        );
        setAlbums(filteredArticles);
      })
      .catch((err) => console.error("API Error:", err)); // Optional: error handling
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="container-fluid bg-black py-5">
      <div className="container text-light">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-5">
          {albums.map((album, index) => (
            <div className="card h-100 bg-black border" key={index}>
              {album.urlToImage && (
                <img
                  src={album.urlToImage}
                  className="card-img-top"
                  alt="news"
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{album.title}</h5>
                <p className="card-text">{album.description}</p>
                <a
                  href={album.url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
