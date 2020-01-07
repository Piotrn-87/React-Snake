import React from "react";

const Nav = props => {
  return (
    <form className="form">
      <button className="button__start" onClick={props.start}>
        Start
      </button>
      <button className="button__stop" onClick={props.stop}>
        Stop
      </button>
    </form>
  );
};

export default Nav;
