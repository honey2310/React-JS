import React, { useState } from "react";
import "./Movie.css";

export default function Movies() {
  const [movieList, setMovieList] = useState([
    { id: 1, name: "Inception", director: "Christopher Nolan", watched: false },
  ]);

  const [name, setName] = useState("");
  const [director, setDirector] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addMovie = () => {
    if (!name.trim() || !director.trim()) return;
    setMovieList([
      ...movieList,
      { id: Date.now(), name: name.trim(), director: director.trim(), watched: false },
    ]);
    setName("");
    setDirector("");
  };

  const editMovie = (index) => {
    setEditIndex(index);
    setName(movieList[index].name);
    setDirector(movieList[index].director);
  };

  const updateMovie = () => {
    if (editIndex === null) return;
    const updatedList = [...movieList];
    updatedList[editIndex].name = name;
    updatedList[editIndex].director = director;
    setMovieList(updatedList);
    setName("");
    setDirector("");
    setEditIndex(null);
  };

  const deleteMovie = (index) => {
    const updatedList = [...movieList];
    updatedList.splice(index, 1);
    setMovieList(updatedList);
  };

  const toggleWatched = (index) => {
    const updatedList = [...movieList];
    updatedList[index].watched = !updatedList[index].watched;
    setMovieList(updatedList);
  };

  return (
    <div className="container">
      <h1 className="title">🎥 Movie Watchlist</h1>

      <input
        type="text"
        placeholder="Enter movie name"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter director name"
        className="input"
        value={director}
        onChange={(e) => setDirector(e.target.value)}
      />

      <div className="button-group">
        <button className="add-btn" onClick={addMovie}>
          Add Movie
        </button>
        <button className="update-btn" onClick={updateMovie}>
          Update Movie
        </button>
      </div>

      <div className="movie-list">
        {movieList.map((movie, index) => (
          <div
            key={movie.id}
            className={`movie-item ${movie.watched ? "watched" : ""}`}
          >
            <span className="movie-info">
              🎬 <b>{movie.name}</b> — <i>{movie.director}</i>
            </span>
            <div className="actions">
              <button
                className="watch-btn"
                onClick={() => toggleWatched(index)}
              >
                {movie.watched ? "Unwatch" : "Watched"}
              </button>
              <button className="edit-btn" onClick={() => editMovie(index)}>
                Edit
              </button>
              <button className="remove-btn" onClick={() => deleteMovie(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
