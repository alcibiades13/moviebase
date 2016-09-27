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
				<span className="movie-title">{this.props.title.title}</span>
				<span>{console.log('title ', this.props.title.title)}</span>
			</div>
		)
	}
}

export default Movie;