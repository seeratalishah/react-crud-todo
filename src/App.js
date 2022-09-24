import { Route, Routes } from "react-router-dom";
import ToDosList from "./components/ToDosList";

function App() {
  return (
   <div>
    <Routes>
      <Route path="/" element={<ToDosList />} />
    </Routes>
   </div>
  );
}

export default App;
