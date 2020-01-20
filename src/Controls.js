import React from "react";

const Controls = props => {
  return (
    <form className="controls">
      <button className="button_left" onClick={props.left}>
        Left
      </button>
      <button className="button_up" onClick={props.up}>
        Up
      </button>
      <button className="button_right" onClick={props.right}>
        Right
      </button>
      <button className="button_down" onClick={props.down}>
        Down
      </button>
    </form>
  );
};
export default Controls;
