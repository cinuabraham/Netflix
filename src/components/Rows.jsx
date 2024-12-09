import React, { useEffect, useState } from 'react'
import instance from './instance';
import './Rows.css'

function Rows({title, fetchUrl,isPoster}) {
    /*console.log(fetchUrl);*/

    const [allMovie, setAllMovies] = useState()     //useState Hook
    const base_url = "https://image.tmdb.org/t/p/original/"

    const fetchData = async ()=>{                   //useEffect Hook
    const {data} =  await instance.get(fetchUrl)

    /* const {results}=data*/
    setAllMovies(data.results);
    
    }

    console.log(allMovie)
    
    useEffect(()=>{
      fetchData()
    },[])
    
  return (
    <div className='row'>
            <h1>{title}</h1>
            <div className='movie-row'>

            {
               allMovie?.map(item=>(
                <img className = {`movie ${isPoster && 'movie-poster'}`}src={`${base_url}${isPoster?item.poster_path:item.backdrop_path}`} alt='no image'/>
               ))
            }

            </div>
   </div>
  )
}

export default Rows