import React, { Component } from 'react';
import Gallery from './Gallery';
import Details from './Details';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  render (){
  return (
      <Router>
      <div className="App">
        <Route exact path = '/Details' component = {Details} />
        <Route exact path = '/' component = {Gallery} />
      </div>
      </Router>
   
  );
}

}

export default App;
