import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { getAllToDos } from '../api/ToDoApi';
import TodoListItem from './TodoListItem';

function ToDoList() {
  
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);

  const navigate = useNavigate();

  useEffect(()=>{
    const fetchTodos = async ()=>{
      try{
        const todoData = await getAllToDos();
        const todos = todoData.map((todo)=> ({
          ...todo,
          id:todo._id
        }))
        setTodoList(todos);
      } catch (err) {
        toast.error(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTodos();
  },[refetch]);

  const todoRenderList = ()=>{
    if(!todoList.length)
    {
      return <p>No Todo Items Found</p>
    }

    return todoList.map((todo)=>{
      return <TodoListItem key={todo.id} todo={todo} setRefetch={setRefetch}  />
    })
  }

  return (
    <div>
        <h1>React CRUD Todo List</h1>
        <button onClick={()=>navigate('/todo-form')}>Add New Todo List</button>
        {
          loading ? <p>Loading Todo List...</p> : todoRenderList()
        }
    </div>
  )
}

export default ToDoList;