import React from 'react';
import {Link} from 'react-router-dom';
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

    }

    render() { 
        return (
            <div className='Details'>
            <h1>{this.state.movie.movie_Name || 'no show found'}</h1>
            <div className = 'content'>
            <div>{this.state.movie.movie_details}</div>
            <img src={this.state.movie.movie_Logo}
            alt={this.state.movie.movie_Name} />
            </div>
            <Link to='/'>Back</Link>
            </div>
        );
    }
}

