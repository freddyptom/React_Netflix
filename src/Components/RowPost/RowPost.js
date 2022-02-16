import axios from '../../axios'
import React, { useEffect,useState } from 'react'
import netposter from './../../Images/poster.jpg'
import './RowPost.css'
import { API_KEY } from '../../Constants/Constants'
import { imageURL } from '../../Constants/Constants'
import '../../App'
import YouTube from 'react-youtube'

function RowPost(props){
    const[movies,setMovies]=useState([])
    const[urlid,setUrlId]=useState([])
    useEffect(()=>{
        axios.get(props.url).then((Response)=>{
            console.log(Response.data)
            setMovies(Response.data.results)

        })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }}
        const handleMovie = (id)=>{
            console.log(id)
            axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((Response)=>{
                console.log(Response.data)
                if(Response.data.results.length!==0){
                    setUrlId(Response.data.results[0])
                }
            })
        }

    return(
    <div className='Row'>
       <h2>{props.title}</h2>
        <div className='posters'>

            {movies.map((obj)=>
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageURL+obj.backdrop_path}`}/>
            )}
          
        </div>
        { urlid.key && 
        < YouTube videoId={urlid.key}  opts={opts}  />  }
    </div>
    )
}

export default RowPost