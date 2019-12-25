import React from "react";
import { Rows, Cols, Cell, Body, Feed } from "./Config";

function Box({ board, handleKey }) {
  const boxes = [];

  for (let row = 0; row < Rows; row++) {
    for (let col = 0; col < Cols; col++) {
      const id = Cols * row + col;
      const value = board[id];
      const className =
        value === Body ? "body-cell" : value === Feed ? "feed-cell" : "cell";
      boxes.push(<div key={id} className={className} />);
    }
  }

  return (
    <div
      style={{ width: Cols * Cell, height: Rows * Cell }}
      tabIndex={0}
      onKeyDown={handleKey}
      className="board"
    >
      {boxes}
    </div>
  );
}
export default Box;
