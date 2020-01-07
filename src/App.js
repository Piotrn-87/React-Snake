import React from "react";
import "./App.css";
import Nav from "./Nav";
import Start from "./Start";

function App() {
  return (
    <div>
      <Nav />
      <div className="game-arena">
        <Start />
      </div>
    </div>
  );
}

export default App;
