import React, { useEffect, useState } from 'react';
import { getAllToDos } from '../api/ToDoApi';

function ToDoList() {
  
  const [todoList, setTodoList] = useState([]);

  useEffect(()=>{
    const fetchTodos = async ()=>{
      try{
        const todoData = await getAllToDos();
        todoData.map((todo)=> ({
          ...todo,
          id:todo._id
        }))
        setTodoList(todoData);
      } catch (err) {
        console.log(err);
      }
    }

    fetchTodos();
  },[]);

  return (
    <div>
        <h1>React CRUD Todo List</h1>
        {
          todoList.map((todo)=>{
            return (
              <div key={todo.id}>
                <h2>{todo.title}</h2>
                <p>{todo.description}</p>
              </div>
            )
          })
        }
    </div>
  )
}

export default ToDoList;