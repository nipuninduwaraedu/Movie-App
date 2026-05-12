import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="card">
      <img src="movie.image?.medium" alt="movie.name" />

      <div className="card-content">
        <h2>{movie.name}</h2>
      </div>

      <p>Rating:{movie.rating.avarage}</p>

      <p>Language:{movie.language}</p>
    </div>
  );
}

export default MovieCard;
