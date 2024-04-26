import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import "./Todo.css";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={(event) => setText(event.target.value)}
          type="text"
          placeholder="Enter text..."
          name=""
          value={text}
        />

        <button type="submit">
          <IoMdAdd className="add" />
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
