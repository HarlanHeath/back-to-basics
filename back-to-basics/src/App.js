import React, { Component } from "react";
import Person from "./Components/Person/Person";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Harlan's Here</h1>
        <Person name="Harlan" age="30">
          I love WOW
        </Person>
        <Person name="Har" age="35" />
        <Person name="Lan" age="40" />
      </div>
    );
  }
}

export default App;
