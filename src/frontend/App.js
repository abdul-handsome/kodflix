import React, { Component } from 'react';
import Gallery from './Gallery';
import Details from './Details';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './NotFound.js';

class App extends Component {
  constructor() {
    super();
    this.state = {text: 'not found',
                json: {server: 'not yet'}}
  }


  
  render (){
  return (
      <Router>
      <div className="App">
        <Switch>
        <Route exact path = '/' component = {Gallery} />  
        <Route exact path = '/NotFound' component = {NotFound} />
        <Route exact path = '/:movieId' component = {Details} />
        </Switch>
     

      </div>
      </Router>
   
  );
}

}

export default App;
