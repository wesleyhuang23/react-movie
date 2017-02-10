import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Search from './search/Search.js';


import Master from '../styles/Master.scss';

class App extends React.Component{
	render() {
		return (
			<div>
				<h1>React Movies</h1>
				<Search></Search>
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById("app"));
