import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    console.log("checkbox click");
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    console.log("remove click");
    console.log(removeTodo);
    console.log("todo", todo);
    removeTodo(todo.id);
  }
  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null
        }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}
