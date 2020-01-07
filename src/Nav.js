import React, { Component } from "react";

class Nav extends Component {
  handleClick = e => {
    e.preventDefault();
    console.log("Start");
  };

  render() {
    return <button onClick={this.handleClick}>Start</button>;
  }
}

export default Nav;
