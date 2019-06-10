import React from 'react';
import {Link} from 'react-router-dom';

export default function TvShow(props)
{
  return(
   <Link to='./Details' className = 'item'>
      <img src = {props.movieLogo} alt='movies'/>
      <div className = 'overlay'>
      <h1>{props.movieName}</h1>
      </div>
      </Link>
    
  )
}

