import React, { useEffect, useState } from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import './Cast.css'

const Cart = () => {

  const baseUrl = "https://image.tmdb.org/t/p/original/"
    const location = useLocation()
    const navigate =useNavigate()
    const specificCast = location.state.movie
    const[castm,setCastm]=useState([])

    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/person/${specificCast.id}/combined_credits?api_key=8b9502a427695f09ba0b02f3be4f461c&language=en-US`)
      .then(res=>res.json())
      .then(d=>setCastm(d.cast))
    
    },[])

  return (
    <div className='Cast'>
       <div className='Profile'>
      <div className='left'>
        <img  className='cast-img' src={`${baseUrl}${specificCast.profile_path}`}></img>
      </div>
      <div className='right'>
        <h3 id='name'> Name : {specificCast.name}</h3>
        <p id='dept'>Character Name :  {specificCast.character}</p>
      </div>
      </div>
      <hr />
      
      <div className='cast__movie'>
        { 
          
          castm.map((movie)=>{
            return(
              <main key={movie.id} style={{}}>
                <img onClick={()=>{navigate('/movie',{state:{movie}})}} src={`${baseUrl}${movie.poster_path}`} height={'300px'} width={'200px'} style={{margin:'10px'}} />
              </main>
            )
          })
        }

      </div>
      
    
    </div>
  )
}

export default Cart