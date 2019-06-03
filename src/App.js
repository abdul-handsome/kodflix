import React from 'react';
import movieLogos from './movie01.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
    <img src = {movieLogos} />
     <br /><br /><br /> 
        <div className = 'container'>
            <div className = 'item'>React x</div>
            <div className = 'item'>React y</div>
            <div className = 'item'>React z</div>
        </div>
        <div className = 'container'>
        <div className = 'item'>React 1</div>
        <div className = 'item'>React 2</div>
        <div className = 'item'>React 3</div>
    </div>
 
        </div>

  );
}

export default App;
