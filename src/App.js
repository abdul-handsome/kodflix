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
            <div className = 'item'><img src = {movieLogos1} />
              <div className = 'overlay'><h1>Sword of Destiny</h1></div>
            </div>
            <div className = 'item'><img src = {movieLogos2} />
              <div className = 'overlay'><h1>John Wane</h1></div>
            </div>
            <div className = 'item'><img src = {movieLogos3} />
            <div className = 'overlay'><h1>Goodfellas</h1></div>
            </div>
        </div>
        <div className = 'container'>
            <div className = 'item'><img src = {movieLogos4} />
            <div className = 'overlay'><h1>al Capone</h1></div>
            </div>
            <div className = 'item'><img src = {movieLogos5} />
            <div className = 'overlay'><h1>Scarface</h1></div>
            </div>
            <div className = 'item'><img src = {movieLogos6} />
            <div className = 'overlay'><h1>Superman</h1></div>
            </div>
        </div>
        <div className = 'container'>
            <div className = 'item'><img src = {movieLogos7} />
            <div className = 'overlay'><h1>TinTin</h1></div>
            </div>
            <div className = 'item'><img src = {movieLogos8} />
            <div className = 'overlay'><h1>Cliffhanger</h1></div>
            </div>
            <div className = 'item'><img src = {movieLogos9} />
            <div className = 'overlay'><h1>the Good,the Bad,the Ugly</h1></div>
            </div>
        </div>
    </div>
      

  );
}

export default App;
