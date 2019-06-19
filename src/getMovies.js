import movieLogos1 from './myImages/movie01.jpg';
import movieLogos2 from './myImages/movie02.jpg';
import movieLogos3 from './myImages/movie03.jpg';
import movieLogos4 from './myImages/movie04.jpg';
import movieLogos5 from './myImages/movie05.jpg';
import movieLogos6 from './myImages/movie06.jpg';
import movieLogos7 from './myImages/movie07.jpg';
import movieLogos8 from './myImages/movie08.jpg';
import movieLogos9 from './myImages/movie09.jpg';


export default function getMovies() {
    return [
    {movie_id: 'sword', movieLogo: movieLogos1, movieName : 'Sworddestiny'},
    {movie_id: 'john', movieLogo: movieLogos2, movieName: 'John Wane'},
    {movie_id: 'good', movieLogo: movieLogos3, movieName: 'Goodfellas'},
    {movie_id: 'al', movieLogo: movieLogos4, movieName: 'Al Capone'},
    {movie_id: 'scar', movieLogo: movieLogos5, movieName: 'Scarface'},
    {movie_id: 'super', movieLogo: movieLogos6, movieName: 'Superman'},
    {movie_id: 'tin', movieLogo: movieLogos7, movieName: 'TinTin'},
    {movie_id: 'clif', movieLogo: movieLogos8, movieName: 'Cliffhanger'},
    {movie_id: 'thegood', movieLogo: movieLogos9, movieName: 'the Good,the Bad,the Ugly'}        
    ];
}