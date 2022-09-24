import React from "react";

function TodoListItem({todo}) {
  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <div className="action-btn">
        <button className="edit-btn">Edit</button>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  );
}

export default TodoListItem;
