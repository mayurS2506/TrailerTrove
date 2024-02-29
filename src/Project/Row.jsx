
import { useEffect, useState } from "react"
import axios from './axios'
import './Row.css'
import { useNavigate } from 'react-router-dom'


const Row =({fetchUrl,title,isLargeRow})=>{

    const baseUrl = "https://image.tmdb.org/t/p/original/"

    const[movie,setMovie]=useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        async function fetch(){
            const requests = await axios.get(fetchUrl)
            setMovie(requests.data.results)
           
            return requests  
        }
        fetch()
    },[fetchUrl])
    return(
        <div className="Row"> 
            <h1>{title}</h1>
            
            <div className="row__posters">
                {movie.map((movie)=>{
                    return(
                        <img onClick={()=>{navigate('/movie',{state:{movie}})}} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} key={movie.id} />
                    )
                })}

            </div>
        </div>
    )
}

export default Row