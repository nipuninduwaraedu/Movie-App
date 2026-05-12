import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [movie, setMovie] = useState([])

  const [loading, setLoading] = useState(true)

  const fetchMovie = async ()=>{
    try {
      const response = await axios.get(
        "https://api.tvmaze.com/shows"
      );

      setMovie(response.data.slice(0,20));
      setLoading(false);
      
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(()=>{
    fetchMovie();
  },[]);

  if(loading){
    return <h1>Loading...</h1>
  }
  
  return (
    <div className="container">
      <h1 className='title'>Movie Explorer</h1>
     
    </div>
     
  )
}

export default App
