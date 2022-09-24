import { Route, Routes } from "react-router-dom";
import ToDoList from "./components/ToDoList";

function App() {

  return (
   <div>
    <Routes>
      <Route path="/" element={<ToDoList />} />
    </Routes>
   </div>
  );
}

export default App;
