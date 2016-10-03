import React, {Component} from 'react';
import { Link } from 'react-router';

import Single from './Single';

class Movie extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: null,
			Poster: null,
			Plot: null
		};	
	}

	render() {
		return (
			<div className="col-md-3 movie">
				<h4 className="movie-title">{this.props.movie.Title}</h4>
				<Link to={"/movie/" + this.props.movie.imdbID}><img className="movie-poster" src={this.props.movie.Poster} /></Link>
			</div>
		)
	}
}

export default Movie;