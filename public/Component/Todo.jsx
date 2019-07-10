import React from "react";

//
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export default class Todo extends React.Component {
  state = {
    todos: [],
    warning: true,
    todoCounter: 0
  };

  addTodo = todo => {
    const todos = [...this.state.todos];
    this.setState({
      todos: [...todos, todo],
      warning: false,
      todoCounter: this.state.todoCounter + 1
    });
  };

  delTodo = item => {
    const todos = [...this.state.todos];
    this.setState({
      todos: todos.filter(todo => todo !== item),
      todoCounter: this.state.todoCounter - 1
    });
  };

  render() {
    const warning =
      this.state.todos.length === 0
        ? `Your to do list is ${this.state.todoCounter}`
        : null;

    const counter =
      this.state.todos.length !== 0
        ? `You have ${this.state.todoCounter} todo(s)`
        : null;

    return (
      <div>
        <h1>Simple Todo List | React App</h1>
        <p style={{ backgroundColor: "orange", color: "white" }}>{warning}</p>
        <p style={{ backgroundColor: "green", color: "white" }}>{counter}</p>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} delTodo={this.delTodo} />
      </div>
    );
  }
}
