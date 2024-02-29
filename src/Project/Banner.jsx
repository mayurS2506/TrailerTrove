import './Banner.css'
import axios from './axios'
import requests from './Request'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const baseUrl = "https://image.tmdb.org/t/p/original/"
    const[movie,setMovie]=useState([])
    useEffect(()=>{
        async function fetch(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length*1)])
            console.log(request);
            return request  
        }
        fetch()
    },[])

    const navigate = useNavigate()
  
    return (
    <div className='Banner' 
    style={{backgroundImage: `Url(${baseUrl}${movie.backdrop_path})`,
          
    }}>
        <div className='banner__contents'>
            <h1 className='banner__title'>
                {movie.name || movie.original_title || movie.original_name}
            </h1>
            <div className='banner__buttons'>
                <button className='banner__button' onClick={()=>{navigate('/movie',{state:{movie}})}}>Play</button>
                <button className='banner__button' onClick={()=>{navigate('/movie',{state:{movie}})}}>Cast</button>
            </div>
            <h1 className='banner__description'>{movie.overview}</h1>

        </div>
   
    </div>
  )
}

export default Banner