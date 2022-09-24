import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { getAllToDos } from '../api/ToDoApi';
import TodoListItem from './TodoListItem';

function ToDoList() {
  
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);

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
        toast.error(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTodos();
  },[]);

  const todoRenderList = ()=>{
    if(!todoList.length)
    {
      return <p>No Todo Items Found</p>
    }

    return todoList.map((todo)=>{
      return <TodoListItem todo={todo} />
    })
  }

  return (
    <div>
        <h1>React CRUD Todo List</h1>
        {
          loading ? <p>Loading Todo List...</p> : todoRenderList()
        }
    </div>
  )
}

export default ToDoList;