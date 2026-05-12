import { useEffect, useState } from "react";
import axios from "axios";
import "./Styles/Home.css"
import MovieCard from "./components/MovieCard";


function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovie = async () => {
    try {
      const response = await axios.get("https://api.tvmaze.com/shows");
      setMovies(response.data.slice(0, 20));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <h1 className="title">Movie Explorer</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
