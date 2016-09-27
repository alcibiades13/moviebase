import React, {Component} from 'react';
import Movie from './Movie';
import Response from 'superagent';


class SearchForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			movies: []
		}
	}

	componentDidMount() {

		var url = "http://www.omdbapi.com/?s=Batman&y=&plot=short&r=json";
		Response.get(url).then((data) => {
			var jsonMovie = JSON.parse(data.text);
			let moviesArray = [];
			jsonMovie.Search.map((key, index) => {
				var mov = key;
				return <Movie title={mov.Title} />
			});


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
        <div className="movie-list">
        	<div className="movie">
        		<h2 className="movie-title">{console.log('this.state ', this.state.movies)}</h2>
        		<img className="movie-poster" src={this.state.movies.Poster} />
        		<p className="movie-plot">{this.state.movies.Plot}</p>
        	</div>
        </div>
			</div>
		)
	}
}

export default SearchForm;