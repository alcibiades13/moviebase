import React, {Component} from 'react';
import Movie from './Movie';

class MovieList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			movies: [
				{
					title: "Batman"
				},
				{
					title: "Seven"
				}
			]
		}
	}

	render() {
		return (
			<div className="movies-container">
				<div className="movie-list">
					{this.state.movies[1].title}
				</div>
				{
					this.state.movies.map((movie, i) => {
						return (
							<Movie title={movie} key={i} />
						)
					})
				}
			</div>
		)
	}
}

export default MovieList;