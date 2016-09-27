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

		var url = "http://www.omdbapi.com/?s=Batman&y=&plot=short&r=json";
		Response.get(url).then((data) => {
			var jsonMovie = JSON.parse(data.text);

			jsonMovie.Search.forEach((key) => {
				var mov = key;
				moviesVar.push(mov);
				var movies = this.state.movies.slice()
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
        <div className="all-movies">
					{
						this.state.movies.map((movie, i) => {
							return <Movie Title={movie.Title} Poster={movie.Poster} key={i} />
						})
					}
				</div>
			</div>
		)
	}
}

export default SearchForm;