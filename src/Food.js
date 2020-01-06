import React from "react";

const food = props => {
  const styleFood = {
    left: `${props.dot[0]}%`,
    top: `${props.dot[1]}%`
  };
  return <div className="snake-food" style={styleFood}></div>;
};

export default food;
