import React, { Component } from 'react';
import MovieSearch from './components/MovieSearch';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Moviebase</h2>
        </div>
        <div className="container">
          <MovieSearch />
        </div>
      </div>
    );
  }
}

export default App;
