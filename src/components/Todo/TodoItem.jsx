import React from "react";
import { RiDeleteBin4Fill } from "react-icons/ri";
import "./Todo.css";

function TodoItem({ todo, onDelete }) {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <p>{todo.title}</p>
      <button onClick={() => onDelete(todo.id)}>
        {" "}
        <RiDeleteBin4Fill className="delete" />
      </button>
    </div>
  );
}

export default TodoItem;
