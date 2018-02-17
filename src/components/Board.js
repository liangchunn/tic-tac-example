import React from "react";
import Square from "./Square";
import "../css/Board.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      xIsNext: true
    };
  }

  // event handler which takes i as a param and return a new function with the actual handling of the board based on the i passed in
  handleBoardUpdate = i => () => {
    this.setState(prevState => {
      // check if location at i index is null and if the board is not full, or else do nothing
      return prevState.board[i] === null &&
        prevState.board.reduce((prev, curr) => prev + curr, null) !== null
        ? {
            // do not mutate! creating a new array with the move in the correct spot
            board: [
              ...prevState.board.slice(0, i),
              prevState.xIsNext ? "X" : "O",
              ...prevState.board.slice(i + 1, prevState.board.length)
            ],
            xIsNext: !prevState.xIsNext
          }
        : prevState;
    });
  };

  render() {
    return (
      <div className="board-container">
        {this.state.board.map((value, index) => (
          <Square
            value={value}
            key={`board-square-${index}`}
            // here we bind the index to the handleBoardUpdate which will return a new function which is passed down to the child (and the correct index will be used in this thunk-ed function!)
            updateHandler={this.handleBoardUpdate(index)}
          />
        ))}
      </div>
    );
  }
}

export default Board;
