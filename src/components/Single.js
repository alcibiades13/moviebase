import React, { Component } from 'react';
import { getSingleMovie } from '../xhr';
import { Link } from 'react-router';
import MovieSearch from './MovieSearch';

class Single extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Poster: null,
			Title: null,
			Plot: null,
			Cast: null,
			Rating: null
		}
	}

	componentDidMount() {
		getSingleMovie(this.props.params.id).then(response => {

			let movie = JSON.parse(response.text);
			console.log('movie ', movie);
			this.setState({
				Poster: movie.Poster,
				Title: movie.Title,
				Plot: movie.Plot,
				Cast: movie.Actors,
				Rating: movie.imdbRating
			})
		});
	}


	render() {
		return (
			<div className="container">
				<Link to="/" className="back-button">Back to Search</Link>
				<div className="col-md-12 single-movie">
					<img src={this.state.Poster} className="single-movie-poster" />
					<div className="single-movie-info">
						<h4 className="single-movie-title">{this.state.Title}</h4>
						<p className="movie-plot">{this.state.Plot}</p>
						<hr />
						<div className="movie-cast">{this.state.Cast}</div>
						<span className="imdb-rating">{this.state.Rating}</span>
					</div>
				</div>
			</div>
		)
	}
}

export default Single;