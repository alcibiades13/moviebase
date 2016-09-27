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
			<div className="col-md-4 movie">
				<h4 className="movie-title">{this.props.Title}</h4>
				<img className="movie-poster" src={this.props.Poster} />
				<p className="movie-plot">{this.props.Plot}</p>
			</div>
		)
	}
}

export default Movie;