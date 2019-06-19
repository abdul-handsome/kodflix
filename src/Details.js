import React from 'react';
import {Link} from 'react-router-dom';

export default class Details extends React.Component {

    constructor(){
        super();
        this.state = {
            welcomeMessage: 'you are wellycome oooo !'
        };
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({welcomeMessage: 'welcome to atlanta'});
           
        }, 3000);
    }

    render() { 
        return (
            <h1><Link to='./'>Back</Link><br />{this.state.welcomeMessage}</h1>
        );
    }
}

