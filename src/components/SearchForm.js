import React, {Component} from 'react';
import Movie from './Movie';
import Response from 'superagent';

let moviesVar = [];

class SearchForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			movies: []
		}
	}

	componentDidMount() {

		var self = this;

		var url = "http://www.omdbapi.com/?s=wolf&r=json";
		Response.get(url).then((data) => {
			var jsonMovie = JSON.parse(data.text);

			jsonMovie.Search.forEach((key) => {
				var mov = key;
				moviesVar.push(mov);
				var movies = this.state.movies.slice();
				movies.push(mov);
				this.setState({ movies: movies })
			});

			console.log('moviesVar ', moviesVar);


		});
	}

	render() {
		return (
			<div className="container">
        <form className="form">
          <div className="panel">
            <input type="text" className="form-control" placeholder="Search for a movie" />
            <button type="submit" className="btn btn-primary submit">Search</button>
          </div>
        </form>
        <div className="row all-movies">
					{
						this.state.movies.map((movie, i) => {
							if(movie.Poster == 'N/A') {
								console.log('movie.Title', movie.Title, movie.Poster);
								movie.Poster = './card.jpg';
							}
							return <Movie Title={movie.Title} Poster={movie.Poster} Plot={movie.Plot} key={i} />
						})
					}
				</div>
			</div>
		)
	}
}

export default SearchForm;