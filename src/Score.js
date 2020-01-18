import React from "react";

const Score = props => {
  let value = props.score;
  return <p className="score">Score: {value}</p>;
};
export default Score;
