import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Moviebase</h2>
        </div>
        <div className="container">
          <SearchForm />
        </div>
      </div>
    );
  }
}

export default App;
