import React from "react";
import { Rows, Cols, Cell } from "./Config";

function Box() {
  const boxes = [];

  for (let row = 0; row < Rows; row++) {
    for (let col = 0; col < Cols; col++) {
      boxes.push(<div className={"cell"} />);
    }
  }

  return (
    <div style={{ width: Cols * Cell, height: Rows * Cell }} className="board">
      {boxes}
    </div>
  );
}
export default Box;
