import React, { Component } from "react";

const randomCoordinates = () => {
  let min = 1;
  let max = 99;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;

  return [x, y];
};

const initialState = {
  food: randomCoordinates(),
  speed: 50,
  direction: "Right",
  snakeDots: [
    [0, 0],
    [2, 0]
  ]
};

class Start extends Component {
  state = initialState;
}

// import React from "react";
// import "./App.css";
// import Box from "./Box";
// import { Game, Body, Feed, Key, Cols, Rows, Direction } from "./Config";

// const randomCoordinates = () => {
//   let min = 1;
//   let max = 99;
//   let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
//   let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;

//   return [x, y];
// };

// const initialState = {
//   food: randomCoordinates(),
//   speed: 50,
//   direction: "RIGHT",
//   snakeDots: [
//     [0, 0],
//     [2, 0]
//   ]
// };

// class Start extends React.Component {
//   state = {
//     board: [],
//     snake: [],
//     direction: null,
//     gameOver: false,
//     text: "Game Over"
//   };

//   componentDidMount() {
//     this.start();
//   }

//   Stop = (snake, head) => {
//     if (snake.indexOf(head) !== -1) {
//       this.setState({
//         gameOver: true
//       });
//       return;
//     }
//   };

//   start = () => {
//     const board = [];
//     const snake = [Game];

//     board[Game] = Body;

//     this.setState(
//       {
//         board,
//         snake,
//         direction: Key.left
//       },
//       () => {
//         this.Qube();
//       }
//     );
//   };

//   Qube = () => {
//     let { snake, board, direction } = this.state;
//     const head = this.forward(snake[0], direction);

//     const food = board[head] === Feed || snake.length === 1;

//     if (snake.indexOf(head) !== -1) {
//       this.setState({
//         gameOver: true
//       });
//       alert("Game over");
//       return;
//     }

//     if (food) {
//       const maxBoxes = Rows * Cols;

//       let i;

//       do {
//         i = Math.floor(Math.random() * maxBoxes);
//       } while (board[i]);

//       board[i] = Feed;
//     } else {
//       board[snake.pop()] = null;
//     }

//     board[head] = Body;
//     snake.unshift(head);

//     if (this.nextDirection) {
//       direction = this.nextDirection;
//       this.nextDirection = null;
//     }

//     this.setState(
//       {
//         board,
//         snake,
//         direction
//       },
//       () => {
//         setTimeout(this.Qube, 100);
//       }
//     );
//   };

//   handleKey = event => {
//     const directionOnKey = event.nativeEvent.keyCode;
//     console.log(directionOnKey);

//     const position = Math.abs(this.state.direction - directionOnKey);

//     if (Direction[directionOnKey] && position !== 0 && position !== 2) {
//       this.nextDirection = directionOnKey;
//     }
//   };

//   forward = (head, direction) => {
//     let x = head % Cols;
//     let y = Math.floor(head / Cols);

//     switch (direction) {
//       case Key.up:
//         y = y <= 0 ? Rows : y - 1;
//         break;
//       case Key.down:
//         y = y >= Rows ? 0 : y + 1;
//         break;
//       case Key.left:
//         x = x <= 0 ? Cols - 1 : x - 1;
//         break;
//       case Key.right:
//         x = x >= Cols - 1 ? 0 : x + 1;
//         break;
//       default:
//         return;
//     }
//     return Cols * y + x;
//   };

//   render() {
//     return (
//       <div>
//         <Box board={this.state.board} handleKey={this.handleKey} />
//       </div>
//     );
//   }
// }
// export default Start;
