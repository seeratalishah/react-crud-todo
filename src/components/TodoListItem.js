import React from "react";
import { deleteToDo } from "../api/ToDoApi";
import { toast } from 'react-hot-toast';

function TodoListItem({todo, setRefetch}) {

    const handleDelete = async()=>{
        
        try {
            const response = await deleteToDo(todo.id);
            if(response.ok){
                toast.success("Deleted successfully");
                setRefetch(prevState => !prevState);
            }
        } catch(err) {
          toast.error(err.message)
        }
    }
  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <div className="action-btn">
        <button className="edit-btn">Edit</button>
        <button className="delete-btn" onClick={handleDelete} >Delete</button>
      </div>
    </div>
  );
}

export default TodoListItem;
