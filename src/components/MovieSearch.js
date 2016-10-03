import React, {Component} from 'react';
import MovieList from './MovieList';
import Response from 'superagent';
import { Link } from 'react-router';


class SearchForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			movies: []
		}
	}

	getMovies(searchKey) {

		let url = "http://www.omdbapi.com/?s=" + searchKey + "&r=json";
		Response.get(url).then((data) => {
			let jsonMovie = JSON.parse(data.text);

			jsonMovie.Search.forEach((movie) => {
				let movies = this.state.movies.slice();
				movies.push(movie);
				this.setState({ movies: movies })
			});

		});
	}

	handleSubmit(e) {
		e.preventDefault();

		document.querySelector('.all-movies').innerHTML = '';
		let searchInput = document.querySelector('.search-input').value;
		this.getMovies(searchInput);
	}

	render() {
		return (
			<div className="App">
				<div className="container">
					<Link to="/other">Other page</Link>
	        <form className="form" action="" onSubmit={this.handleSubmit.bind(this)}>
	          <div className="panel">
	            <input type="text" className="form-control search-input" placeholder="Search for a movie" />
	            <button type="submit" className="btn btn-primary submit">Search</button>
	          </div>
	        </form>
	        <MovieList movies={this.state.movies} />
				</div>
			</div>
		)
	}
}

export default SearchForm;