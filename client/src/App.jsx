import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  const [movies, setMovies] = useState([])

  const [loading, setLoading] = useState(true)

  const fetchMovie = async ()=>{
    try {
      const response = await axios.get(
        "https://api.tvmaze.com/shows"
      );

      setMovies(response.data.slice(0,20));
      setLoading(false);
      
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false)
    },1000);
  return ()=> clearTimeout(timer)
    fetchMovie();
  },[]);

  if(loading){
    return <h1>Loading...</h1>
  }
  
  return (
    <div className="container">
      <h1 className='title'>Movie Explorer</h1>

      {movies.map((movie)=>{
        <MovieCard>
          key={movie.id}
          movie={movie}
        </MovieCard>
      })}
     
    </div>
     
  )
}

export default App
