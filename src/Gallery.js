import React from 'react';
import TvShow from './TvShow';
import movieLogos1 from './myImages/movie01.jpg';
import movieLogos2 from './myImages/movie02.jpg';
import movieLogos3 from './myImages/movie03.jpg';
import movieLogos4 from './myImages/movie04.jpg';
import movieLogos5 from './myImages/movie05.jpg';
import movieLogos6 from './myImages/movie06.jpg';
import movieLogos7 from './myImages/movie07.jpg';
import movieLogos8 from './myImages/movie08.jpg';
import movieLogos9 from './myImages/movie09.jpg';


export default function Gallery()
{
    return(
<div>
    <div className='container'>
        <TvShow movieId = 'sword' movieLogo={movieLogos1} movieName='Sword of Destiny' ></TvShow>
        <TvShow movieId = 'john' movieLogo={movieLogos2} movieName='John Wane' ></TvShow>
        <TvShow movieId = 'good' movieLogo={movieLogos3} movieName='Goodfellas' ></TvShow>
        </div>

     <div className='container'>
        <TvShow movieId = 'al' movieLogo={movieLogos4} movieName='Al Capone' ></TvShow>
        <TvShow movieId = 'scar' movieLogo={movieLogos5} movieName='Scarface' ></TvShow>
        <TvShow movieId = 'super' movieLogo={movieLogos6} movieName='Superman' ></TvShow>
        </div>

        <div className='container'>
        <TvShow movieId = 'tin' movieLogo={movieLogos7} movieName='TinTin' ></TvShow>
        <TvShow movieId = 'clif' movieLogo={movieLogos8} movieName='Cliffhanger' ></TvShow>
        <TvShow movieId = 'thegood' movieLogo={movieLogos9} movieName='the Good,the Bad,the Ugly' ></TvShow>
        </div>

    </div>

    )
}