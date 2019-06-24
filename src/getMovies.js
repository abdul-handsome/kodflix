import movieLogos1 from './myImages/swordofdestiny.jpg';
import movieLogos2 from './myImages/johnwane.jpg';
import movieLogos3 from './myImages/goodfellas.jpg';
import movieLogos4 from './myImages/alcapone.jpg';
import movieLogos5 from './myImages/scarface.jpg';
import movieLogos6 from './myImages/superman.jpg';
import movieLogos7 from './myImages/tintin.jpg';
import movieLogos8 from './myImages/cliffhanger.jpg';
import movieLogos9 from './myImages/thegoodthebadtheugly.jpg';


export default function getMovies() {
    return [
    {movie_id: 'swordofdestiny', movie_Logo: movieLogos1, movie_Name : 'swordofdestiny'},
    {movie_id: 'johnwane', movie_Logo: movieLogos2, movie_Name: 'johnwane'},
    {movie_id: 'goodfellas', movie_Logo: movieLogos3, movie_Name: 'goodfellas'},
    {movie_id: 'alcapone', movie_Logo: movieLogos4, movie_Name: 'alcapone'},
    {movie_id: 'scarface', movie_Logo: movieLogos5, movie_Name: 'scarface'},
    {movie_id: 'superman', movie_Logo: movieLogos6, movie_Name: 'superman'},
    {movie_id: 'tintin', movie_Logo: movieLogos7, movie_Name: 'tintin'},
    {movie_id: 'cliffhanger', movie_Logo: movieLogos8, movie_Name: 'cliffhanger'},
    {movie_id: 'thegoodthebadtheugly', movie_Logo: movieLogos9, movie_Name: 'thegoodthebadtheugly'}        
    ];
}