import React from 'react';
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
            <div className = 'item'><img src = {movieLogos1} /></div>
            <div className = 'item'><img src = {movieLogos2} /></div>
            <div className = 'item'><img src = {movieLogos3} /></div>
        </div>
        <div className = 'container'>
            <div className = 'item'><img src = {movieLogos4} /></div>
            <div className = 'item'><img src = {movieLogos5} /></div>
            <div className = 'item'><img src = {movieLogos6} /></div>
        </div>
        <div className = 'container'>
            <div className = 'item'><img src = {movieLogos7} /></div>
            <div className = 'item'><img src = {movieLogos8} /></div>
            <div className = 'item'><img src = {movieLogos9} /></div>
        </div>
    </div>
      

  );
}

export default App;
