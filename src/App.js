import React from 'react';
import Stack from './Stack';
import movieLogos1 from './myImages/movie01.jpg';
import movieLogos2 from './myImages/movie02.jpg';
import movieLogos3 from './myImages/movie03.jpg';
import movieLogos4 from './myImages/movie04.jpg';
import movieLogos5 from './myImages/movie05.jpg';
import movieLogos6 from './myImages/movie06.jpg';
import movieLogos7 from './myImages/movie07.jpg';
import movieLogos8 from './myImages/movie08.jpg';
import movieLogos9 from './myImages/movie09.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
        <div className = 'container'>
        <Stack movieLogo={movieLogos1} movieName='Sword of Destiny' ></Stack>
        <Stack movieLogo={movieLogos2} movieName='John Wane' ></Stack>
        <Stack movieLogo={movieLogos3} movieName='Goodfellas' ></Stack>
          </div>
        
        <div className = 'container'>
        <Stack movieLogo={movieLogos4} movieName='Al Capone' ></Stack>
        <Stack movieLogo={movieLogos5} movieName='Scarface' ></Stack>
        <Stack movieLogo={movieLogos6} movieName='Superman' ></Stack>
          </div>
        
        <div className = 'container'>
          <Stack movieLogo={movieLogos7} movieName='TinTin' ></Stack>
          <Stack movieLogo={movieLogos8} movieName='Cliffhanger' ></Stack>
          <Stack movieLogo={movieLogos9} movieName='the Good,the Bad,the Ugly' ></Stack>
        </div>
    </div>
  );
}



export default App;
