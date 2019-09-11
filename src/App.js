import React, { Component } from 'react';
import './App.css';
import StarWars from './components/StarWars';

class App extends Component {
  render() {
    return (
      <div class="App">
        <h1>StarWars List</h1>
        <StarWars />
      </div>
    )
  }
}

export default App;