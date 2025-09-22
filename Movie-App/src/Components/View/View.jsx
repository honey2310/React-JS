import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./View.css";

export default function View() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favMovies")) || [];
    setFavorites(favs);
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter((movie) => movie.id !== id);
    setFavorites(updated);
    localStorage.setItem("favMovies", JSON.stringify(updated));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="title">❤️ My Favorite Movies</h1>
        {favorites.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          <div className="movie-list">
            {favorites.map((movie) => (
              <div key={movie.id} className="movie-item">
                <span className="movie-info">
                  🎬 <b>{movie.name}</b> — <i>{movie.director}</i>
                </span>
                <button className="remove-btn" onClick={() => removeFavorite(movie.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
