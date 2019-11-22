import React, { Component } from 'react';
import Person from "./Components/Person/Person"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <h1>Harlan's Here</h1>
        <Person />
        <Person />
        <Person />
      </div>
    );
  }
}

export default App;
