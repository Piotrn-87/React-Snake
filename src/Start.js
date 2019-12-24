import React from "react";
import "./App.css";
import Box from "./Box";
import { Game, Body, Feed } from "./Config";

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      snake: [],
      direction: null,
      gameOver: false
    };
  }

  componentDidMount() {
    this.start();
  }

  start = () => {
    const board = [];
    board[Start] = Body;
    const snake = [Game];
  };

  render() {
    return <h1>Hello Amanda. I want to play a game ... </h1>;
  }
}
export default Start;
