import React, { Component } from 'react';
import MovieSearch from './components/MovieSearch';
import './App.css';

class Movies extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <MovieSearch />
        </div>
      </div>
    );
  }
}

export default Movies;
