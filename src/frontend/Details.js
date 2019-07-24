import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import getMovies from './getMovies';
import './Details.css'; 

export default class Details extends React.Component {

    constructor(){
        super();
        this.state = {
          movie: {}

        };
    }

    
    
    componentDidMount(){
        let movieId = this.props.match.params.movieId;
        let movie = getMovies()
            .find((movie) => movie.movie_id === movieId);
            this.setState({
                movie
            });

        fetch('/rest/shows/')
        .then(function(response) {
            return response.json();
          })
          .then(function(myJson) {
            console.log('the data from backend is', JSON.stringify(myJson));
          });

    }



    render() { 

        if(this.state.movie === undefined) {
            return <Redirect to='/NotFound' />;
        } else {
            return (
            <div className='Details'>
            <h1>{this.state.movie.movie_Name}</h1>
            <div className = 'content'>
            <div>{this.state.movie.movie_details}</div>
            <img src={this.state.movie.movie_Logo}
            alt={this.state.movie.movie_Name} />
            </div>
            <Link to='/'>Back</Link>
            </div>
            );

        };

     
        
    }
}

