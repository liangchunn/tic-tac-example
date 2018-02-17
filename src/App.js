import React, { Component } from "react";
import Board from "./components/Board";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="board">
        <Board />
      </div>
    );
  }
}

export default App;
