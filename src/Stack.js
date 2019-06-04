import React from 'react';
export default function Stack(props)
{
  return(
   <div className = 'item'>
      <img src = {props.movieLogo}></img>
      <div className = 'overlay'>
      <h1>{props.movieName}</h1>
      </div>
    </div>
  )
}