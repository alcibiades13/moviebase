import React, {Component} from 'react';

class Movie extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			Poster: '',
			Plot: ''
		};	
	}

	render() {
		return (
			<div className="col-md-3 movie">
				<h4 className="movie-title">{this.props.movie.Title}</h4>
				<img className="movie-poster" src={this.props.movie.Poster} />
				<p className="movie-plot">{this.props.movie.Plot}</p>
			</div>
		)
	}
}

export default Movie;