import { Route, Routes } from "react-router-dom";
import TodoForm from "./components/TodoForm";
import ToDoList from "./components/ToDoList";

function App() {

  return (
   <div>
    <Routes>
      <Route path="/" element={<ToDoList />} />
      <Route path="/todo-form" element={<TodoForm />} />
    </Routes>
   </div>
  );
}

export default App;
