import React from "react";
//
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  return (
    <div>
      <TodoItem todos={props.todos} handeClick={props.delTodo} />
    </div>
  );
}
