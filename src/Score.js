import React from "react";

const Score = props => {
  let value = props.score;
  return <p className="score">Score: {value - 2}</p>;
};
export default Score;
