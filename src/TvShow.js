import React from 'react';

export default function TvShow(props)
{
  return(
   <div className = 'item'>
      <img src = {props.movieLogo} alt='movies'/>
      <div className = 'overlay'>
      <h1>{props.movieName}</h1>
      </div>
    </div>
  )
}

