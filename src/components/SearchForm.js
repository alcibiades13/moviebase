import React, {Component} from 'react';
import Response from 'superagent';


class SearchForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			movie: {
				Title: '',
				Poster: '',
				Plot: ''
			}
		}
	}

	componentDidMount() {
		var myInit = {
			method: "GET"
		};

		var url = "http://www.omdbapi.com/?t=Se7en&y=&plot=short&r=json";
		Response.get(url).then((data) => {
			var jsonMovie = JSON.parse(data.text);
			console.log(jsonMovie);
			this.setState({
				movie: {
					Title: jsonMovie.Title,
					Poster: jsonMovie.Poster,
					Plot: jsonMovie.Plot
				}
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
        		<h2 className="movie-title">{this.state.movie.Title}</h2>
        		<img className="movie-poster" src={this.state.movie.Poster} />
        		<p className="movie-plot">{this.state.movie.Plot}</p>
        	</div>
        </div>
			</div>
		)
	}
}

export default SearchForm;