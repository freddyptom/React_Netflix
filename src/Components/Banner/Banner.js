import React from 'react'
import { useEffect,useState } from 'react'
import axios from '../../axios'
import './../Banner/Banner.css'
import {API_KEY} from '../../Constants/Constants'
import { imageURL } from '../../Constants/Constants'


function Banner(){
    const[movie,setMovie]=useState()
    useEffect(()=>{
         axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>
         {
        
             setMovie(Response.data.results[1])
         }
         )
    },
    [])
    return(
        <div 
        style={{backgroundImage:`url(${movie ? imageURL+movie.backdrop_path :""})`}} 
        className="banner">
             <div className="content">
                 <h1 className="title">{movie ? movie.title : ''}</h1>
                 <div className="banner_button">
                     <button className="button">Play</button>
                     <button className="button">My List</button>
                 </div>
                 <h1 className="description">{movie ? movie.overview : ''}</h1>
             </div>
             <div className="fade_bottom"></div>
             
        </div>
    )
}

export default Banner