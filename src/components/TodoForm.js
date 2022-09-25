import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { createTodo } from "../api/ToDoApi";

function TodoForm() {

    const [title, setTitle] = useState('gjjjh');
    const [desc, setDesc] = useState('LOffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccfffffffffffffffffffffffffffgggggggggggggggggggggggggggggggggggggggggggggg');

    const navigate = useNavigate();

    const handleSubmit = async (e)=> {
        e.preventDefault();
        try{
            const response = await createTodo(title, desc);
            if(response.ok){
                toast.success("Todo Created successfully");
                navigate('/');
            }else {
                toast.error("Could Not Load Todo List")
            }
            
        } catch (err){
            toast.error(err.message);
        }
        
    }

  return (
    <div>
      <Link to="/" >View All Todo Items</Link>  
      <h2>Add Todo</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input type="text" placeholder="Title" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} required />
        </div>
        <div className="input-container">
          <label htmlFor="desc">Description</label>
          <textarea name="desc" id="desc" cols="30" rows="10" value={desc} onChange={(e)=>setDesc(e.target.value)} ></textarea>
        </div>

        <button type="submit">Sumit</button>
      </form>
    </div>
  );
}

export default TodoForm;
