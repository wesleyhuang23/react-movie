import React from 'react';
import ReactDOM from 'react-dom';

export default class SearchItem extends React.Component{
    render(){
        return (
            <div>
                <img src={`https://image.tmdb.org/t/p/original/${this.props.poster}`}/>
                <p>{this.props.title}</p>
            </div>
        )
    }
}