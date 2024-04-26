import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./Todo.css";

function Todo() {
  const [list, setList] = useState([
    { title: "Hello", completed: false, id: 1 },
  ]);

  function addTodoHandler(text) {
    const newTodo = {
      title: text,
      completed: false,
      id: list.length + 1,
    };
    setList([...list, newTodo]);
  }

  function deleteTodo(id) {
    setList(list.filter((x) => x.id !== id));
  }
  return (
    <div className="todo">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={list} onDelete={deleteTodo} />
    </div>
  );
}

export default Todo;
