import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Messages from "./features/messages/Messages";

function App() {
  return (
    <div className="App">
      <Messages />
    </div>
  );
}

export default App;
