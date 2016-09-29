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

	getMovies(searchKey) {

		var url = "http://www.omdbapi.com/?s=" + searchKey + "&r=json";
		Response.get(url).then((data) => {
			var jsonMovie = JSON.parse(data.text);

			jsonMovie.Search.forEach((key) => {
				var mov = key;
				moviesVar.push(mov);
				var movies = this.state.movies.slice();
				movies.push(mov);
				this.setState({ movies: movies })
			});

		});
	}

	handleSubmit(e) {
		e.preventDefault();

		document.querySelector('.all-movies').innerHTML = '';

		let searchInput = document.querySelector('.search-input').value;
		this.getMovies(searchInput);
	}

	render() {
		return (
			<div className="container">
        <form className="form" action="" onSubmit={this.handleSubmit.bind(this)}>
          <div className="panel">
            <input type="text" className="form-control search-input" placeholder="Search for a movie" />
            <button type="submit" className="btn btn-primary submit">Search</button>
          </div>
        </form>
        <div className="row all-movies">
					{
						this.state.movies.map((movie, i) => {
							if(movie.Poster === 'N/A') {
								console.log('movie.Title', movie.Title, movie.Poster);
								movie.Poster = './card.jpg';
							}
							return <Movie movie={movie} key={i} />
						})
					}
				</div>
			</div>
		)
	}
}

export default SearchForm;