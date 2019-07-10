import React from "react";

export default class TodoForm extends React.Component {
  state = {
    todo: "",
    warning: false
  };

  handleChange = e => {
    this.setState({ todo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.todo === "") {
      this.setState({ warning: true });
      setTimeout(() => this.setState({ warning: false }), 2000);
    } else {
      this.props.addTodo(this.state.todo);
      this.setState({ todo: "", warning: false });
    }
  };

  render() {
    const warning = this.state.warning ? "Please Add Something to do" : null;
    return (
      <>
        <p style={{ backgroundColor: "red", color: "white" }}>{warning}</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add Todo" />
        </form>
      </>
    );
  }
}
