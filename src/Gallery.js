import React from 'react';
import TvShow from './TvShow';
import getMovies from './getMovies';

export default function Gallery()
{
    return(
<div>
    <div className='container'>
    {   getMovies().map(movie => (
        <TvShow key={movie.movie_id} movie_id={movie.movie_id} movieLogo={movie.movieLogo} movieName={movie.movieName} />
    ))

        }
        
        </div>
    </div>
    );
}

