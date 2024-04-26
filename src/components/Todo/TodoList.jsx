import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete }) {
  return (
    <div>
      {!todos.length && <h2>Todo list is empty</h2>}

      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TodoList;
