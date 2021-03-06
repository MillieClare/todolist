import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { v4 as uuid } from "uuid";

export default function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    // preventDefault will stop default browser functionality
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ completed: false, task: todo.task, id: uuid() });
      // reset the task input after adding new task
      setTodo({ ...todo, task: "" });
    }
  }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="task"
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
