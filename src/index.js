import React from "react";
import ReactDOM from "react-dom";

//
import Todo from "../public/Component/Todo";
function App() {
  return (
    <>
      <Todo />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
