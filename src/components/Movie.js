import React, {Component} from 'react';

class Movie extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			Poster: ''
		};	
	}

	render() {
		return (
			<div className="movie">
				<span className="movie-title">{this.props.Title}</span>
				<img className="movie-poster" src={this.props.Poster} />
				<span>{console.log('Title ', this.props.Title)}</span>
			</div>
		)
	}
}

export default Movie;