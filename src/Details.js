import React from 'react';
import {Link} from 'react-router-dom';
import getMovies from './getMovies';

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
            <div>
            <h1>{this.state.movie.movie_Name || 'no show found'}</h1>
            <Link to='/'>Back</Link>
            </div>
        );
    }
}

