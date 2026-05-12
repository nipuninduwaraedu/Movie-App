import React from "react";
import "../Styles/card.css"
import "../App.css"

function MovieCard({ movie }) {
  return (
    <div className="card">
      <img src={movie.image?.medium} alt={movie.name} />

      <div className="card-content">
        <h2>{movie.name}</h2>
      </div>

      <p>Rating: {movie.rating?.average ?? "N/A"}</p>

      <p>Language: {movie.language}</p>
    </div>
  );
}

export default MovieCard;
