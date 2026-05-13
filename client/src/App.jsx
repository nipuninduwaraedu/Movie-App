import { useEffect, useState } from "react";
import axios from "axios";
import "./Styles/Home.css";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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

  const filterMovie = movies.filter((movie)=>{
    movie.name 
          .toLowerCase()
          .includes(search.toLocaleLowerCase())
  })

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <Navbar search={search} setSearch={setSearch} />

      <h1 className="title">Movie Explorer</h1>
      <div className="movie-grid">
        {filterMovie.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
