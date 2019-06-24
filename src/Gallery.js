import React from 'react';
import TvShow from './TvShow';
import getMovies from './getMovies';

export default function Gallery()
{
    return(
<div>
    <div className='container'>
    {   getMovies().map(movie => (
        <TvShow 
            key={movie.movie_id} 
            movieId={movie.movie_id} 
            movieLogo={movie.movie_Logo} 
            movieName={movie.movie_Name} />
    ))

        }
        
        </div>
    </div>
    );
}

