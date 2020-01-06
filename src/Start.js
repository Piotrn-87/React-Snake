import React, { Component } from "react";
import Food from "./Food";
import Snake from "./Snake";

const randomCoordinates = () => {
  let min = 1;
  let max = 99;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;

  return [x, y];
};

const initialState = {
  food: randomCoordinates(),
  speed: 200,
  direction: "Down",
  snakeDots: [
    [2, 2],
    [4, 2]
  ]
};

class Start extends Component {
  state = initialState;

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    this.checkBorders();
    this.checkIfEat();
    // this.checkCollapsed();
  }

  onKeyDown = e => {
    e = e || window.event;
    switch (e.keyCode) {
      case 37:
        this.setState({ direction: "Left" });
        break;
      case 38:
        this.setState({ direction: "Up" });
        break;
      case 39:
        this.setState({ direction: "Right" });
        break;
      case 40:
        this.setState({ direction: "Down" });
        break;
      default:
        return;
    }
  };

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let headSnake = dots[dots.length - 1];

    switch (this.state.direction) {
      case "Left":
        headSnake = [headSnake[0] - 2, headSnake[1]];
        break;
      case "Up":
        headSnake = [headSnake[0], headSnake[1] - 2];
        break;
      case "Right":
        headSnake = [headSnake[0] + 2, headSnake[1]];
        break;
      case "Down":
        headSnake = [headSnake[0], headSnake[1] + 2];
        break;
      default:
        return;
    }
    dots.push(headSnake);
    dots.shift();
    this.setState({
      snakeDots: dots
    });
  };

  gameOver = () => {
    alert(`Game over. Snake length is ${this.state.snakeDots.length}`);
    this.setState(initialState);
  };

  checkIfEat = () => {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] === food[0] && head[1] === food[1]) {
      this.setState({
        food: randomCoordinates()
      });
      this.enlargeSnake();
    }
  };

  enlargeSnake = () => {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.setState({
      snakeDots: newSnake
    });
  };

  checkBorders = () => {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0)
      this.gameOver();
  };

  checkCollapsed = () => {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        this.gameOver();
      }
    });
  };

  render() {
    return (
      <div>
        <Snake snakeDots={this.state.snakeDots} />
        <Food dot={this.state.food} />
      </div>
    );
  }
}
export default Start;
