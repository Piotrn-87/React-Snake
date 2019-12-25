import React from "react";
import "./App.css";
import Box from "./Box";
import { Game, Body, Feed, Key, Cols, Rows } from "./Config";

class Start extends React.Component {
  state = {
    board: [],
    snake: [],
    direction: null,
    gameOver: false
  };

  componentDidMount() {
    this.start();
  }

  start = () => {
    const board = [];
    const snake = [Game];

    board[Game] = Body;

    this.setState(
      {
        board,
        snake,
        direction: Key.down
      },
      () => {
        this.Qube();
      }
    );
  };

  Qube = () => {
    const { snake, board, direction } = this.state;
    const head = this.forward(snake[0], direction);

    const food = board[head] === Feed || snake.length === 1;

    if (food) {
      const maxBoxes = Rows * Cols;
      let i;
      do {
        i = Math.floor(Math.random() * maxBoxes);
        console.log(i);
      } while (board[i]);
    } else {
      board[snake.pop()] = null;
    }

    board[head] = Body;
    snake.unshift(head);

    this.setState(
      {
        board,
        snake
      },
      () => {
        setTimeout(this.Qube, 200);
      }
    );
  };

  forward = (head, direction) => {
    let x = head % Cols;
    let y = Math.floor(head / Cols);

    switch (direction) {
      case Key.up:
        y = y <= 0 ? Rows : y - 1;
        break;
      case Key.down:
        y = y >= Rows ? 0 : y + 1;
        break;
      case Key.left:
        x = x <= 0 ? Cols - 1 : x - 1;
        break;
      case Key.right:
        x = x >= Cols - 1 ? 0 : x + 1;
        break;
      default:
        return;
    }
    return Cols * y + x;
  };

  render() {
    return (
      <div>
        <Box board={this.state.board} />
      </div>
    );
  }
}
export default Start;
