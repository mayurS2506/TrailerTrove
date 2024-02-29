import  { useEffect } from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import YouTube from 'react-youtube'
import { useState } from 'react'
import Img from './Image/profile.png'
import TrailerLoad from './Image/trailerImg.jpg'
import './Movie.scss'
const Movie = () => {

    const navigate = useNavigate()
    const opts = {
        height: '390px',
        width: '100%'}

    const baseUrl = "https://image.tmdb.org/t/p/original"
    const location = useLocation()
    const specificMovie = location.state.movie
    const [trailer,setTrailer]=useState("")
    const[cast,setCast]=useState([])

    function fetchTrailer(id){
        fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=5b0915a13f73db84100bb379e23db8a1`)
        .then(res=>res.json())
        .then(d=>setTrailer(d.results[0].key))
        
    }

    function fetchCast(id){
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=5b0915a13f73db84100bb379e23db8a1`)
        .then(res=>res.json())
        .then(d=>setCast(d.cast))
     
    }
    useEffect(()=>{
        fetchTrailer(specificMovie.id)
        fetchCast(specificMovie.id)
    },[])
    return (
    <div className='Movie'>
        <div className='Banner'
        style={{backgroundImage: `Url(${baseUrl}${specificMovie.backdrop_path})`,
            height:'70vh',
            backgroundPosition:'center-center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',

    }}>
        <div className='banner__contents'>
            <h1 className='banner__title'>
                {specificMovie.name || specificMovie.original_title || specificMovie.original_name}
            </h1>
         
            <h1 className='banner__description'>{specificMovie.overview}</h1>

        </div>
        </div>
        <div className='Cast' style={{textAlign:'center',backgroundColor:'lavender'}}>
            <center style={{padding:'20px'}}><h2>Cast</h2></center>
            <div className="cast-container">
            {cast.slice(0,10).map((movie)=>{
            return(
                <div className="cast-box" key={movie.id}>
                         <img className='cast-img' onClick={()=>{navigate('/cast',{state:{movie}})}}  src={movie.profile_path == null ? Img : `${baseUrl}${movie.profile_path}`}></img>
                         <p className='cast-name'>{movie.original_name}</p>
                 <p className='cast-character-name'>{movie.character}</p>
                </div>
            )
           })}
            </div>
       
        </div>
       <div className='youtube-tailer'>
       <center style={{padding:'20px', color:'white'}}><h2>Trailer</h2></center>
       {trailer != null ? <YouTube videoId={trailer} opts={opts} className='movie-trailer'/> : <img className='loadingTrailer' src={TrailerLoad}/>}

           
       </div>

    </div>
  )
}

export default Movie