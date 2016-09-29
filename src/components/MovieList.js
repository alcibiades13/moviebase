import React, {Component} from 'react';
import Movie from './Movie';

class MovieList extends Component {

	render() {
		return (
      <div className="row all-movies">
				{
					this.props.movies.map((movie, i) => {
						if(movie.Poster === 'N/A') {
							console.log('movie.Title', movie.Title, movie.Poster);
							movie.Poster = './card.jpg';
						}
						return <Movie movie={movie} key={i} />
					})
				}
			</div>			
		)
	}
}

export default MovieList;