import React, {Component} from 'react';

class Movie extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: ''
		};	
	}

	render() {
		return (
			<div className="movie">
				<span className="movie-title">{this.state.title}</span>
			</div>
		)
	}
}

export default Movie;