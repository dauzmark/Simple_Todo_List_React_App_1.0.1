import React from "react";

export default function TodoItem(props) {
  return (
    <ul>
      {props.todos.map(todo => {
        return (
          <li key={1 + Math.random()}>
            {todo}{" "}
            <button onClick={props.handeClick.bind(this, todo)}>x</button>
          </li>
        );
      })}
    </ul>
  );
}
