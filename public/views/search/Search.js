import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchItem from './SearchItem';

export default class Search extends React.Component{
    constructor(){
        super()

        this.state = {
            term: '',
        }
    }
    handleTermChange(event){
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }
    clickHandle(){
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8eecf03080f34edf303e14b5f1476653&language=en-US&query=${this.state.term}`).then(data => {
            console.log(data.data.results);
            let filmList = data.data.results.map(function(film){
                return (
                    <SearchItem 
                    title={film.title}
                    poster={film.poster_path}
                    key={film.id}
                    />
                )
            })
            this.setState({
                films: filmList
            });
        }); 
    }
    render(){
        
        return (
            <div>
                <input type="text" onChange={this.handleTermChange.bind(this)}/>
                <button onClick={this.clickHandle.bind(this)}>Search</button>
                <section>
                    <div>
                        {this.state.films ? this.state.films : ''}
                    </div>
                </section>
            </div>
        )
    }
}